#!/usr/bin/env python3
"""Refresh YouTube metadata for video IDs present in ADL's BigQuery export.

Requires gcloud authentication and YOUTUBE_API_KEY (YouTube Data API v3 only).
No transcripts, analytics rewrites, or public dashboard exports.
"""
import json
import os
import re
import subprocess
import time
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime, timezone

PROJECT = "adl-data-bq"
DATASET = "youtube_raw"
CHANNEL = "UCkjiQp9jDVu5eXAAx3FM-Mg"


def request_json(url, headers, body=None):
    data = None if body is None else json.dumps(body).encode()
    req = urllib.request.Request(url, data=data, headers=headers)
    for attempt in range(4):
        try:
            with urllib.request.urlopen(req, timeout=60) as response:
                return json.load(response)
        except urllib.error.HTTPError as error:
            if error.code in (429, 500, 502, 503, 504) and attempt < 3:
                time.sleep(2 ** attempt)
                continue
            # Never print URLs/headers, which can contain credentials.
            raise RuntimeError(f"API request failed (HTTP {error.code}); no credentials logged") from None


def query(sql, token, parameters=None):
    base = f"https://bigquery.googleapis.com/bigquery/v2/projects/{PROJECT}"
    headers = {"Authorization": f"Bearer {token}", "Content-Type": "application/json"}
    body = {"query": sql, "useLegacySql": False, "timeoutMs": 20000,
            "maxResults": 10000, "location": "US"}
    if parameters:
        body.update(parameterMode="NAMED", queryParameters=parameters)
    result = request_json(base + "/queries", headers, body)
    job = result["jobReference"]["jobId"]
    while not result.get("jobComplete"):
        time.sleep(1)
        result = request_json(base + f"/queries/{job}?location=US&maxResults=10000", headers)
    if result.get("errors"):
        raise RuntimeError("BigQuery job failed: " + json.dumps(result["errors"]))
    rows = result.get("rows", [])
    while result.get("pageToken"):
        page = urllib.parse.quote(result["pageToken"], safe="")
        result = request_json(base + f"/queries/{job}?location=US&maxResults=10000&pageToken={page}", headers)
        rows.extend(result.get("rows", []))
    return rows


def normalize(video_ids, items, fetched_at):
    by_id = {item["id"]: item for item in items}
    records = []
    for video_id in video_ids:
        item = by_id.get(video_id)
        if not item:
            records.append({"video_id": video_id, "fetch_status": "unavailable",
                            "fetched_at": fetched_at})
            continue
        snippet = item["snippet"]
        if snippet["channelId"] != CHANNEL:
            raise ValueError(f"Unexpected channel for video {video_id}")
        thumbs = snippet.get("thumbnails", {})
        thumbnail = next((thumbs[size]["url"] for size in
                          ("maxres", "standard", "high", "medium", "default") if size in thumbs), None)
        records.append({"video_id": video_id, "channel_id": snippet["channelId"],
                        "title": snippet["title"], "description": snippet.get("description", ""),
                        "published_at": snippet["publishedAt"], "thumbnail_url": thumbnail,
                        "duration_iso8601": item["contentDetails"]["duration"],
                        "video_url": f"https://www.youtube.com/watch?v={video_id}",
                        "fetch_status": "available", "fetched_at": fetched_at})
    return records


def main():
    key = os.environ.get("YOUTUBE_API_KEY")
    if not key:
        # Resource ID is not a secret; retrieve the credential only into memory.
        key = subprocess.check_output([
            "gcloud", "services", "api-keys", "get-key-string",
            "c85100ba-a9ff-4d05-aebf-0235fc0bdc14", "--project=" + PROJECT,
            "--location=global", "--format=value(keyString)"], text=True).strip()
    token = subprocess.check_output(["gcloud", "auth", "print-access-token"], text=True).strip()
    source = f"`{PROJECT}.{DATASET}.channel_basic_a3_adl_ventures`"
    rows = query(f"SELECT DISTINCT video_id FROM {source} WHERE channel_id = '{CHANNEL}' AND video_id IS NOT NULL AND video_id != ''", token)
    ids = sorted({row["f"][0]["v"] for row in rows})
    if any(not re.fullmatch(r"[A-Za-z0-9_-]{11}", vid) for vid in ids):
        raise ValueError("Invalid video ID in source")
    if not ids:
        raise SystemExit("No video IDs found; nothing changed.")
    records = []
    for start in range(0, len(ids), 50):
        batch = ids[start:start + 50]
        params = urllib.parse.urlencode({"part": "snippet,contentDetails", "id": ",".join(batch)})
        result = request_json("https://www.googleapis.com/youtube/v3/videos?" + params,
                              {"X-Goog-Api-Key": key})
        records.extend(normalize(batch, result.get("items", []), datetime.now(timezone.utc).isoformat()))
    # Fetch every batch successfully before changing the catalogue.
    table = f"`{PROJECT}.{DATASET}.video_details`"
    query(f"""CREATE TABLE IF NOT EXISTS {table} (
        video_id STRING, channel_id STRING, title STRING, description STRING,
        published_at TIMESTAMP, thumbnail_url STRING, duration_iso8601 STRING,
        video_url STRING, fetch_status STRING, fetched_at TIMESTAMP)
        CLUSTER BY video_id""", token)
    fields = ["video_id", "channel_id", "title", "description", "published_at",
              "thumbnail_url", "duration_iso8601", "video_url", "fetch_status", "fetched_at"]
    selections = [f"JSON_VALUE(item, '$.{field}') AS {field}" if field not in ("published_at", "fetched_at")
                  else f"TIMESTAMP(JSON_VALUE(item, '$.{field}')) AS {field}" for field in fields]
    # Retain last-known metadata when an ID becomes unavailable; status stays explicit.
    updates = [f"T.{field} = S.{field}" if field in ("fetch_status", "fetched_at")
               else f"T.{field} = IF(S.fetch_status = 'available', S.{field}, T.{field})"
               for field in fields[1:]]
    query(f"""MERGE {table} T USING (
        SELECT {', '.join(selections)} FROM UNNEST(JSON_QUERY_ARRAY(@payload)) item
        ) S ON T.video_id = S.video_id
        WHEN MATCHED THEN UPDATE SET {', '.join(updates)}
        WHEN NOT MATCHED THEN INSERT ({', '.join(fields)}) VALUES ({', '.join('S.' + f for f in fields)})""",
          token, [{"name": "payload", "parameterType": {"type": "STRING"},
                   "parameterValue": {"value": json.dumps(records)}}])
    query(f"""CREATE VIEW IF NOT EXISTS `{PROJECT}.{DATASET}.channel_basic_enriched` AS
        SELECT A.*, D.title, D.description, D.published_at, D.thumbnail_url,
               D.duration_iso8601, D.video_url, D.fetch_status,
               D.fetched_at AS metadata_fetched_at
        FROM {source} A LEFT JOIN {table} D USING (video_id)""", token)
    available = sum(r["fetch_status"] == "available" for r in records)
    print(f"Refreshed {len(records)} video IDs: {available} available, {len(records) - available} unavailable.")


if __name__ == "__main__":
    main()
