---
type: marketing-benchmark
title: ADL Overall Marketing Benchmark
benchmark_id: overall_marketing
version: 0.1
created: 2026-09-10
status: draft-for-team-validation
owner: ADL Marketing
composite_publication: not-authorized
---

# ADL Overall Marketing Benchmark v0.1

## 1. Purpose

Evaluate whether ADL’s marketing consistently communicates its Industrialized Construction system-designer identity, builds relevant relationships, and contributes to qualified business opportunities.

The weekly review must answer:

1. Are we saying the right things to the right audiences?
2. Are our brand surfaces credible, consistent, and ready for use?
3. Are we building meaningful audience relationships?
4. Is marketing contributing to qualified inquiries, meetings, and opportunities?
5. What should change, who owns the change, and did it work?

Use this framework to prioritize improvements across the marketing system. Do not use it to rank employees, infer revenue causality, or reward activity volume without evidence of relevance or outcomes.

## 2. Draft status and authority

**This is a proposal, not an approved scoring method.** All weights, thresholds, rating bands, coverage requirements, and aggregation rules below require team validation before producing a published composite. Saving this file or deploying the dashboard does not approve them.

Until approval:

- Report existing authorized artifact scores separately under their original benchmarks.
- Report supported engagement and business metrics in their native units.
- Show overall marketing score as **Not authorized — methodology draft**.
- Label any internal calibration calculation illustrative and exclude it from published score history.
- Do not backfill previous weeks with an assumed composite.

This framework adds a proposed aggregation layer; it does not silently change the component rubrics. In particular, LinkedIn IC Engagement v0.1 does not authorize a blended score. Including its metrics in an overall calculation requires explicit approval of this framework’s mapping and a compatible amendment or approval record for that component benchmark.

## 3. Proposed score architecture

| Dimension | Proposed weight | What it measures | Primary evidence |
|---|---:|---|---|
| Strategy alignment | 30% | Positioning, audience relevance, system-design role, and a clear next action | Artifact scores under Strategy Marketing Consistency |
| Brand execution | 25% | Visual and verbal consistency, evidence quality, accessibility, and production readiness | Artifact scores under Brand Consistency |
| Audience engagement | 25% | Relevant participation, depth, response stewardship, and relationship continuity | Reviewed engagement records and approved channel-specific targets |
| Business outcomes | 20% | Qualified demand and documented progression toward opportunities | Reconciled marketing and CRM records |

These proposed weights emphasize strategic coherence while retaining meaningful accountability for engagement and outcomes. They are not derived from historical performance and may change during calibration.

Keep a separate **evidence coverage and confidence** panel. Coverage earns no performance points. A high performance score with weak evidence is not a publishable result.

## 4. Scope and surface register

Maintain a versioned register of the surfaces and channels included in the review. Use the canonical ADL surface inventory as the starting point; reconcile duplicate URLs and identify ownership before scoring.

Each register entry requires:

- Stable surface ID, canonical URL or controlled artifact reference, channel, and audience.
- Ownership: owned, jointly operated, influenced, or third-party.
- Responsible owner and intended audience action.
- Applicable benchmark family and version.
- Criticality: critical, important, or supporting.
- Review cadence, last verification date, and next review due date.
- Included/excluded status with rationale and effective date.

### Proposed importance weights

| Tier | Weight | Typical use |
|---|---:|---|
| Critical | 3 | Homepage, active campaign destination, key conversion path, primary company profile |
| Important | 2 | About/positioning pages, active program pages, recurring newsletter, core presentation template |
| Supporting | 1 | Secondary collateral, older resource pages, controlled directory entries |

Agree the register before the observation period. Do not demote a weak surface, omit inaccessible evidence, or change weights after observing results. Count each canonical artifact once per applicable dimension; distinct content on the same platform can be separate artifacts when its purpose and evidence are distinct.

For recurring campaigns or high-volume feeds, define a fixed sampling rule before collection. Report the sample size and population. Do not choose only high-performing posts. Benchmark family, audience, and campaign exposure should guide sampling, not convenience.

Third-party surfaces can be reported as reputation risks. Include them in scored scope only when stewardship responsibility and a reasonable review method have been agreed.

## 5. Observation windows and cadence

Use a seven-day half-open interval `[start, end)` for weekly activity, with explicit timestamps and timezone. Proposed operating timezone: `America/New_York`.

- Assign activity by verified event time, not collection time.
- Exclude events with unresolved timestamps from scored activity; show them in coverage notes.
- Record `observed_at` separately as freshness evidence.
- Evaluate persistent surfaces as dated snapshots. Reuse a prior assessment only if a documented unchanged-content check succeeds within the agreed review cadence; label it carried forward with its original scoring date and latest verification date.
- Assess engagement persistence over the component benchmark’s required rolling window.
- Review business outcomes over a rolling 28-day window ending at the weekly cutoff. Compare with the immediately preceding, non-overlapping 28-day window. Weekly totals may be shown as context.
- Keep intraday or incomplete analytics out of finalized results.

An overall score, if approved, represents a mixed-cadence assessment as of the cutoff. Display each dimension’s window; do not describe all inputs as seven-day activity.

## 6. Strategy alignment

Use **Strategy Marketing Consistency v1.0**, subject to its own approval status and publication rules. Do not invent a substitute score when only partial evidence is available.

For each included artifact, record its score, dimension evidence, benchmark version, review date, and any holds.

Proposed dimension calculation:

`strategy_score = sum(surface_weight × artifact_score) / sum(surface_weight)`

Use only eligible, fully scored artifacts in that arithmetic, and publish the dimension only when the separate coverage gates in section 10 pass. Display the denominator and excluded weight so missing artifacts cannot silently improve the apparent result.

Do not average partial text-only results with full artifact scores. Report partial checks descriptively unless the source benchmark explicitly defines a comparable scoring method.

## 7. Brand execution

Use **Brand Consistency Benchmark v0.1** and the **ADL Brand Guide v0.1**, subject to their own approval status and holds.

Apply the same proposed surface-weighted formula and coverage requirements as strategy alignment, using brand scores only. Typography, imagery, accessibility, and production behavior require appropriate evidence; readable page text alone is insufficient for a full visual brand score.

Score a template as a template. Do not assume every presentation derived from it inherits that score.

Publication-critical defects must be visible separately, even when a numeric rubric score is available. Examples include unrelated template content on an active destination, a broken primary conversion path, unsupported material claims, and unauthorized disclosure.

## 8. Audience engagement

Evaluate relationship quality, not impressions or reactions alone. Keep raw reach, impressions, followers, and posting volume as contextual measures unless a separate approved benchmark establishes their relevance to an agreed objective.

### LinkedIn IC engagement

Apply the canonical **LinkedIn IC Engagement Benchmark v0.1** without weakening its rules:

- Qualified breadth: pilot target of 3 people per person per week.
- Weighted engagement points: pilot target of 6 points per person per week.
- Deep conversations: pilot target of 1 per person per week.
- Stewardship: pilot target of 80%, using eligible contributions and the three-business-day response rule.
- Repeat-participant rate: pilot target of 25%, only after four qualifying weekly windows.

Record Nolan Browne and Colby Swanson separately. Combined breadth and persistence must deduplicate participants across profiles. Do not apply per-person targets to the combined population or sum participant counts as if they were unique.

Partial or unknown coverage blocks numeric publication. Substantial coverage permits explicitly qualified known subtotals under the source rubric, but those subtotals are not complete inputs to a composite.

### Proposed future normalization

If approved, normalize each eligible metric against its pre-agreed target:

`attainment = min(100, 100 × observed_value / target_value)`

Targets must be positive, use matching units and periods, and have documented owners. This caps excess activity at 100 so one inflated metric cannot offset weaknesses elsewhere.

For LinkedIn, the proposal is equal weights across the five normalized metrics within each profile, then equal weights across the two profiles. This is a new aggregation proposal, not an existing v0.1 permission. No profile subtotal is eligible if one of its five required inputs is unavailable or not applicable. In particular, a zero stewardship denominator is not applicable, and insufficient persistence history is unavailable; neither becomes zero or 100.

Define and approve a channel register before aggregating across LinkedIn, email, video, or other engagement channels. Each included channel needs its own meaningful-engagement metrics, targets, weights, evidence gates, and owner. The dimension is withheld until every required channel has a publishable complete result. Do not label LinkedIn-only performance as company-wide audience engagement unless LinkedIn is explicitly the entire approved scope.

## 9. Business outcomes

Proposed metrics, each measured over the rolling 28-day window:

| Metric | Definition | Proposed within-dimension weight |
|---|---|---:|
| Qualified inquiries | Unique, non-spam inquiries meeting documented audience-fit and expressed-need criteria | 30% |
| Qualified meetings held | Completed meetings with relevant prospects and a documented business purpose | 30% |
| Qualified opportunities created | New CRM opportunities meeting the agreed qualification and stage-entry requirements | 40% |

Before scoring, the team must define target values, qualification criteria, eligible audiences, required CRM fields, and the attribution rule. No numeric targets are proposed without a credible baseline or operating plan.

Use the capped attainment formula from section 8, then the proposed weights above. A recorded zero is valid only when collection is complete and the reconciled result is genuinely zero. Missing CRM access is unscored.

Choose one consistent attribution method for scoring—proposed default: **marketing-sourced**, supported by a dated source interaction and an explicit attribution window. Report marketing-influenced outcomes separately. Do not claim that an observed relationship proves marketing caused revenue.

Deduplicate within each metric using stable contact/account, meeting, and opportunity IDs. A prospect may progress across different funnel stages; do not sum stage counts into a unique-person total. Exclude test records, cancelled meetings, duplicates, and disqualified opportunities according to recorded rules. Log corrections and stage reversals.

Show pipeline value and revenue as supplementary context until valuation, attribution, timing, and reconciliation rules have been approved.

## 10. Coverage, confidence, and publication gates

### Evidence register

Every scored input must retain its source URL or controlled record ID, source version, observation period, collection time, assessment method, assessor, reviewer, review timestamp, and hold status. Keep confidential evidence access-controlled; the dashboard should contain only information appropriate for its audience.

### Proposed surface coverage gates

For strategy and brand, calculate coverage separately:

`weighted_coverage = eligible reviewed surface weight / total in-scope surface weight`

A dimension requires:

- 100% of critical surface weight reviewed and eligible.
- At least 90% of total in-scope weight reviewed and eligible.
- All scored artifacts assessed with comparable rubric versions and sufficient evidence.
- No unresolved publication hold affecting the dimension.

The 90% threshold is proposed and must be validated. Show reviewed and total weights, omitted surfaces, reasons, and the score’s actual denominator. An inaccessible or stale surface remains in the coverage denominator.

Engagement and business outcomes use their own completeness gates; do not substitute the surface-coverage percentage. Full required metric coverage and resolved review status are prerequisites for composite eligibility.

### Overall gates

Publish no overall number unless all of the following hold:

1. The composite method, component mappings, weights, targets, surface/channel registers, rating bands, and effective date have recorded approval.
2. All four dimension scores are eligible and use the approved configuration.
3. Their observations are fresh enough for their defined cadence.
4. All required evidence reviews are complete.
5. No unresolved critical production, evidence, confidentiality, or publication hold affects the result.
6. There are no material unresolved duplicates, identity conflicts, timing conflicts, or attribution gaps.

Report one explicit disposition: **Not authorized**, **Not publishable**, or **Published**. Include reasons. Do not fill missing dimensions with zero, carry them forward without evidence, or redistribute their weight to available dimensions.

## 11. Proposed overall calculation and interpretation

Only after all publication gates pass:

`overall = 0.30 × strategy + 0.25 × brand + 0.25 × engagement + 0.20 × outcomes`

Calculate with unrounded values and round the final display to one decimal place. Store underlying values and weights for reproducibility.

Proposed rating bands applied to the unrounded composite:

| Score | Interpretation |
|---|---|
| 85–100 | Strong performance |
| 70–<85 | Generally effective; targeted improvement needed |
| 55–<70 | Material improvement needed |
| 0–<55 | Significant gaps |

These overall bands do not replace component benchmark bands. Always display the four dimensions next to the composite. Surface any dimension below 55 prominently, regardless of the overall number. A withheld result has no rating.

## 12. Movement and comparison

Compare scores only when rubric versions, weights, targets, scope, evidence completeness, and measurement windows are comparable. For surface dimensions, require the same eligible artifact set or a separately labeled common-surface comparison; changing the reviewed subset is not performance movement.

When comparability fails, show **Not comparable** and explain the change. Record version breaks in history. Do not silently rescore historical weeks. Any approved restatement must preserve the original result and its reason for revision.

Describe association rather than causal impact: a score rising after a copy change does not establish that the change caused business outcomes.

## 13. Close the cybernetic loop

Use the same recurring sequence:

**Observe → compare with the benchmark → diagnose → prioritize → assign → implement → verify → observe again.**

Each recommendation must include:

- Stable action ID and linked report, surface, dimension, and evidence.
- Observed gap and proposed change.
- Impact, urgency, effort, and prioritization rationale.
- Named owner and due date, or explicitly unassigned / unscheduled.
- Expected outcome and a measurable verification criterion.
- Status: proposed, accepted, in progress, implemented, verified, or deferred.
- Implementation evidence, verification evidence, and dates.
- Next review window and outcome: improved, unchanged, worsened, or inconclusive.

The agent may recommend and assess evidence. The team accepts priorities and assigns work. Do not mark an action implemented merely because it was recommended, or verified merely because someone reported completion.

Prioritize publication-critical defects first, followed by high-impact gaps on important surfaces, then experiments and maintenance. Deferred actions need a reason and a next review date. Recurring unresolved findings should retain their action IDs and age rather than appearing as new wins or new discoveries.

## 14. Weekly report and dashboard contract

Every run should contain:

1. Report ID, benchmark/configuration versions, cutoff, and dimension observation windows.
2. Overall disposition and score/rating only if authorized and publishable.
3. Four dimension results, weights, native metrics, and eligibility reasons.
4. Coverage, freshness, review status, and explicit limitations.
5. Artifact and channel results with source references and original scoring dates.
6. Comparable movement or a stated comparison break.
7. Prioritized recommendations and action ownership/status.
8. Verification of prior actions, including inconclusive results.
9. Publication holds and work needed to clear them.
10. Links to the canonical report and benchmark sources.

Represent unavailable numeric values as `null` with a status and reason. Preserve valid measured zeros. Store snapshots as immutable report history; keep action history separately so changes in action status do not rewrite the original assessment.

The current dashboard’s importer supports artifact reports, not this proposed full composite contract. Update its schema, display, and validation only after the methodology is approved. Do not make this draft appear operational by adding fabricated score data.

## 15. Calibration and approval

Before enabling the composite:

- Confirm the four dimensions and proposed 30/25/25/20 weights.
- Approve the surface register, importance tiers, sampling, review cadence, and 90% coverage threshold.
- Approve the engagement channel scope and metric-normalization mapping, including LinkedIn’s compatible authorization.
- Define business qualification, attribution, targets, and data owners.
- Agree critical-hold definitions and the proposed rating bands.
- Run at least four qualifying weekly windows; extend calibration until all dimensions, including persistence and business outcomes, have sufficient evidence.
- Inspect whether scores align with the team’s evidence-based judgment and whether targets invite gaming or obscure meaningful differences.
- Record the approver, date, configuration, and effective period in an approval record. Publish an approved version before activating overall scoring.

Open decisions remain open until recorded. There is no default approval by elapsed time or dashboard deployment.

## 16. Sources

- [Canonical marketing benchmark folder](https://drive.google.com/drive/folders/1iHGgxucjVfF9U0_OLNYZzlDmtfiEi2bE)
- [Strategy Marketing Consistency v1.0](https://drive.google.com/file/d/18auM5XQCUy5Q6LPSLB950gp9o4J3yA8t/view)
- [Brand Consistency Benchmark v0.1](https://drive.google.com/file/d/1MiLRKw9MWDphI4cu-hjuqyqHl0G98fFZ/view)
- [ADL Brand Guide v0.1](https://drive.google.com/file/d/1y0JVE31rAIiDdVYbMXT3B41tLEbHeRYd/view)
- [Canonical LinkedIn IC Engagement Benchmark v0.1](https://docs.google.com/document/d/124n4bxGXto5LFlKoPcD1w2bZSAKcDdlY1BYtkYmhQlo/edit)
- [Repository LinkedIn benchmark](linkedin-ic-engagement-v0.1.md)

This draft proposes the overall layer. Existing source rules remain authoritative for their own results until explicitly revised or superseded through approval.
