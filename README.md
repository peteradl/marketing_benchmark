# ADL marketing benchmark dashboard

A dependency-free dashboard with weekly report selection, artifact scorecards, source-linked AI recommendations, and a cybernetic feedback-loop tab. Uses the working ADL palette and Libre Franklin / Roboto with local fallback fonts.

## Preview and verification

Run `npm start`, then open http://localhost:4173. Run `npm test` and `npm run validate` before publishing. The authored site is in `dist/`; no build step is needed. `.openai/hosting.json` identifies the private Sites deployment.

## Source data and limitations

`dist/data/reports.json` contains manually curated snapshots of the September 4 official baseline and September 10 test report from Google Drive. All results and recommendations link to their source. The September 10 report issued no new scores; September 4 numbers stay explicitly historical. Brand consistency and strategy alignment remain separate. No authorized composite exists. Analytics holds describe the report-time condition, not current connector health.

The LinkedIn IC engagement benchmark already in `benchmarks/` is preserved. Its pilot targets are shown separately on the loop tab; no engagement results have been supplied. The dashboard does not collect analytics, execute the benchmark agent, write to Drive, track team completion, or establish a scheduled sync. It requires no secrets. Private hosting controls access to the site; Drive retains its own permissions.

## Add a weekly agent report

1. Have the existing benchmark agent emit a JSON object matching one run in `dist/data/reports.json`, alongside its canonical Drive report.
2. Set `kind` to `weekly` for a genuine weekly report, record its date, source URL, observation window, coverage, findings, and recommendations. Preserve report-issued benchmark families, scores, dates, ratings, and holds. No new composite or inferred analytics score is permitted.
3. Run `npm run import-report -- /absolute/path/to/report.json`. The importer validates required fields, HTTPS sources, numeric ranges, duplicates, and historical-date consistency. Test runs must have an empty scores array. Existing dates cannot be overwritten by the importer.
4. Run `npm test` and `npm run validate`; review the diff, commit, and publish the updated static site. A page reload loads the newest report.

Each recommendation requires `title`, `impact` (Critical/High/Medium/Low), `effort`, `why`, `action`, `verify`, and `surface`. Supported numeric artifact families are Brand consistency and Strategy alignment. Additional analytics or engagement result types need a separate schema and UI implementing their publication gates; do not force them into a 0–100 artifact score.

Automatic delivery from the existing agent is not configured: its runtime and deployment integration have not been supplied. The importer is the ready handoff point. Review evidence against the canonical benchmark before import; structural validation is not a substitute for substantive evidence review.

The loop tab describes the operating process, not an execution log. Report date selection and view navigation remain local UI state; no action or completion is implied.
