# ADL marketing dashboard

One dashboard on `main`: weekly marketing overview, AI recommendations, LinkedIn IC engagement, and the cybernetic feedback loop.

## Vercel

Deploy the `main` branch. Framework: Other. Root directory: repository root. Build command: empty. Output directory: `.`. No runtime dependencies or separate Sites deployment is required.

## Data

Marketing snapshots live in `data/reports.json`; engagement snapshot and rubric reference live in `linkedin.js`. Historical scores retain their original dates. September 10 marketing scores and LinkedIn pilot metrics remain withheld. The engagement view explicitly identifies its fixed observation window independently of marketing report selection.

These are sourced snapshots, not a live agent connection. Publication holds are represented in the supplied data; the UI does not independently evaluate raw evidence or calculate engagement scores. No recommendation is marked completed without evidence.

## Development

`npm start` serves the repository on port 4173. `npm test` validates report safeguards. `npm run validate` checks marketing snapshots. Add a new report using `npm run import-report -- /path/to/report.json`, then review and push to main to deploy it. Existing dates cannot be overwritten by the importer. Automatic delivery from the benchmark agent still needs integration.

Canonical benchmark: https://docs.google.com/document/d/124n4bxGXto5LFlKoPcD1w2bZSAKcDdlY1BYtkYmhQlo/edit
