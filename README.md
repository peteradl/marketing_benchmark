# ADL marketing dashboard

One dashboard on main, with a reporting window, clickable surface and weekly-content cards, strategy and branding assessments, recommendations, KPI points and an uncapped total. There are no navigation tabs.

## Current run

[September 3–9 run](reports/benchmark-run-2026-09-10-v0.3.md): seven provisional strategy worksheets, **288.64 observed analytics points**, incomplete branding and key-person coverage. This is not a complete weekly total. Persistent pages were reviewed September 10, not historically reconstructed.

The four user-supplied reference files are preserved in benchmarks/. [Scoring methodology](benchmarks/overall-marketing-v0.3.md) defines the aggregation. The supplied surface inventory is retained with review gaps visible. No rubric weights have been tuned yet. Drive has not been synchronized by this update.

## Vercel

Deploy main using Other, repository root, no build command, output directory `.`. The dashboard reads data/points-runs.json; it is a published snapshot, not a live connector integration.

## Development

Run npm start for a local preview, npm test for checks, and npm run validate for historical snapshot validation. Historical reports and the older importer remain available, but the v0.3 dashboard uses data/points-runs.json. Update that file to publish a new v0.3 run. Older scores use different methods and must not be compared directly.

## Workspace-agent execution

The benchmark must run from workspace-accessible files and source connectors, without Chrome or interactive browser automation. If a connector does not return required creative or evidence, record No score. Earlier manual visual observations are supplemental audit notes, not a required scoring input or an automated brand assessment.

Every known persistent surface and category appears as a visible card, including entries without verified accounts, artifacts, registration or scores. Surface placeholders preserve distinct categories that share a reference URL; they do not create duplicate scored artifacts or add points.

## Latest Chrome-assisted diagnostic run

[Browser run](reports/benchmark-browser-run-2026-09-10.md): 349.04 provisional points, including 60.4 assessed-item quality and 288.64 carried-forward analytics points. Five items have both scores; this is not full weekly coverage. All 69 known surface entries are visible, including unregistered discoveries. User authorized Chrome for this run; the unattended-agent workflow still requires equivalent connector evidence.
