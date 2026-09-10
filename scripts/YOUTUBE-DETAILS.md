# YouTube video details

Run `python3 scripts/fetch-youtube-details.py` with an authenticated gcloud account.
The script retrieves the approved YouTube-only key into memory using its resource
ID. The account needs permission to retrieve that key. Alternatively provide a
YouTube Data API v3 key through `YOUTUBE_API_KEY`. Never commit the
key or place it in browser code. The account needs BigQuery query and dataset write
access. YouTube Data API v3 must be enabled in the key's project.

The script discovers ADL video IDs from the existing channel analytics export,
fetches public snippet and contentDetails in batches of 50, and upserts
`adl-data-bq.youtube_raw.video_details`. The view
`adl-data-bq.youtube_raw.channel_basic_enriched` joins those details to each
analytics row using video_id, retaining rows whose metadata is unavailable.

Fields: title, description, publication time, best available thumbnail URL,
ISO-8601 duration, video URL, fetch status and timestamp. An unavailable video
retains its last-known metadata with an explicit unavailable status; this is not
evidence that it was deleted. Unexpected channel IDs abort the fetch. All API
batches must succeed before catalogue updates begin. Repeated runs update the
same video rows, rather than appending duplicates.

This is an on-demand fetch; no recurring schedule has been installed. It does
not fetch transcripts, modify the source analytics, or publish metadata to the
dashboard. Run before the benchmark agent reads the enriched view.

Validation: `python3 -m unittest discover -s scripts -p 'test_youtube_details.py'`.

Initial live verification on September 10, 2026: 17 of 17 video IDs fetched with
all requested metadata fields populated. The enriched view retained all 370
source analytics rows, with no missing titles or row multiplication.
