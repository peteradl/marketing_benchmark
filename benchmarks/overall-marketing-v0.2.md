---
type: marketing-benchmark
title: ADL Overall Marketing Benchmark
benchmark_id: overall_marketing
version: 0.2
effective_date: 2026-09-10
status: working-method
owner: ADL Marketing
composite_score: not-used
supersedes: overall-marketing-v0.1.md
---

# ADL Overall Marketing Benchmark v0.2

## Purpose and authority

Evaluate whether ADL communicates a credible Industrialized Construction position, earns attention, develops relevant relationships, and helps visitors take useful action. Produce evidence-backed weekly recommendations and verify what happens after changes.

This working method implements the four-assessment approach accepted on September 10, 2026. It replaces the v0.1 proposal for a weighted overall score. Do not calculate the proposed 30/25/25/20 composite, normalize unlike channel metrics into one score, or manufacture an overall pass/fail grade. Existing component rubrics retain their own evidence rules, scales, and pilot status. Historical reports remain unchanged.

The dashboard has four assessment cards: Message and brand quality; Audience attention; Relevant relationships; Action and conversion. Every card includes evidence coverage, reporting dates, freshness, results or explicit holds, and recommendations. Available cards can be published while others remain on hold.

## 1. Current surface register

| Surface | Evidence source | Assessment use | Current limitation |
|---|---|---|---|
| ADL website, www.adlventures.com | GA4 export in adl-data-bq.analytics_553082101; dated page and visual review | Quality, attention, conversion | Consent banner fixed September 10; post-fix user/session recovery still needs verification |
| IC Summit website, www.icsummit.org | Same GA4 dataset, separated by hostname and stream; dated page and visual review | Quality, attention, conversion | Intended conversion and successful completion tracking need validation |
| ADL company LinkedIn | Linked_In Analytics, linkedin_organic account 18059443; post content and visual evidence | Quality and attention | Read metric families separately where differing freshness or joins omit dates |
| ADL YouTube | adl-data-bq.youtube_raw analytics and channel_basic_enriched | Metadata quality and attention | Metadata is available; transcripts and actual video-content review are outside current scope |
| Nolan Browne LinkedIn | ADL Virtual Machine 2, profile /in/nolbro/ | Relevant relationships | Partial captures, unresolved dates, review and coverage gaps |
| Colby Swanson LinkedIn | ADL Virtual Machine 2, profile /in/colbyswanson/ | Relevant relationships | Same collection and calculation limitations |

These are the initial included surfaces. Email, newsletters, additional brand channels, CRM outcomes, and collateral are future additions unless explicitly added to a versioned register. Do not silently treat them as measured or penalize the current benchmark for their exclusion. Decks and collateral may receive separately labelled ad hoc quality reviews.

Maintain canonical URL, intended audience, intended next action, owner (or unassigned), review cadence, and evidence references per surface. Verify active destinations; do not assume a registration or inquiry path exists merely because a link suggests it.

## 2. Windows, freshness, and comparison

- Set a weekly cutoff and record America/New_York as the operating timezone. Activity windows are seven-day half-open intervals [start, end).
- Respect source-native daily boundaries. Record each source timezone; do not relabel YouTube or other daily aggregates as Eastern-time events. A source whose timezone cannot be established has a comparability caveat.
- For each source, use its latest seven complete daily periods at or before the cutoff. Display the actual dates and lag. Different channels may end on different dates; never imply synchronized totals.
- Compare with the immediately preceding seven complete periods using identical definitions, filters, and scope. After four complete, comparable prior weeks exist, show the mean of those four weekly totals as a rolling baseline. For rates, pool compatible numerators and denominators rather than averaging percentages.
- For count metrics, percent change = (current - previous) / previous × 100, only when previous > 0. If previous is zero, show absolute change and “percentage change not applicable.” Show rate changes in percentage points.
- No universal good/bad traffic thresholds are imposed. Interpret movement against the surface's audience, content, distribution, and intended action. Baseline deviation is a diagnostic signal, not proof of quality or causation.
- Missing dates are not automatically zero. Establish export coverage or hold the affected comparison. Separate pipeline completeness from privacy-related measurement loss.
- Treat the ADL consent change as a measurement break until comparable post-fix periods exist. Do not describe restored tracking as audience growth.

## 3. Message and brand quality

Use Strategy Marketing Consistency v1.0, Brand Consistency Benchmark v0.1, and ADL Brand Guide v0.1 from the canonical Drive folder. Keep strategy and brand scores separate on their original scales. Retain component approval and publication restrictions.

Weekly review set:

1. ADL and IC Summit homepages and each site's active primary conversion path, including destination and completion behavior.
2. New company LinkedIn posts published during the reporting window.
3. New YouTube titles, descriptions, thumbnails, and destination links during that window; also metadata changed by a prior recommendation.

Establish an initial inventory directly from publishing/content sources. Analytics rows only prove observed activity and may omit zero-view or zero-impression content. Do not claim a complete publication inventory from analytics alone. If all new items cannot be retrieved, state the reviewed sample and inventory gap before interpreting results.

Assess positioning clarity, audience relevance, evidence supporting claims, brand execution, and a useful next action under the source rubrics. Include source URL, capture date, rubric version, findings, component scores where eligible, and reviewed/expected item counts. Use visual evidence for visual judgments. YouTube metadata alone cannot support a score for the video's spoken or visual content.

Do not invent a card-wide average across artifact scores. Show per-surface scores and critical findings. Missing evidence produces a partial review or hold for the affected artifact, not a zero. Reuse a prior persistent-page assessment only after an unchanged-content check, retaining both the original assessment date and latest verification date.

## 4. Audience attention

| Surface | Metrics | Calculation and safeguards |
|---|---|---|
| Company LinkedIn | Impressions, clicks, engagement rate, follower change | Sum compatible daily counts. Engagement rate = reported total engagements / impressions × 100, explicitly labelled with the provider's engagement definition. Do not add clicks again if already included. Follower net change requires gains and losses or matching start/end totals; organic gains alone are not net change. |
| YouTube | Views, watch hours, average viewing duration, thumbnail impressions and CTR | Watch hours = watch_time_minutes / 60. Use the provider's duration metric with its documented denominator; do not average row averages or combine Shorts and long-form without noting definition differences. CTR = sum(impressions × row CTR) / sum(impressions), converting fractions to percent for display. Keep reach and viewing tables separate until aggregated to matching keys. |
| ADL website | Users, sessions, engaged sessions, acquisition sources, key-page visits | Restrict to verified production ADL hostname/stream. Use a documented user definition; distinct user_pseudo_id is “observed device/browser users,” not automatically GA4 active users. Session key uses stream, user_pseudo_id and ga_session_id. Deduplicate sessions and engaged-session flags; do not count every event as a session. |
| IC Summit website | Same website metrics, separately reported | Apply equivalent filters to verified IC Summit hostname/stream. Do not merge the two websites' users or sessions into a claimed unique audience. |

Exclude Squarespace preview hosts and documented test traffic. Record filters. Report counts of events missing consent-dependent identifiers; do not invent user/session IDs or use cookieless session_start counts as identified sessions. Page-view event counts may be reported separately with that limitation. Keep first-user acquisition and session acquisition separate and use session acquisition for session-source reporting.

YouTube agent source: `adl-data-bq.youtube_raw.channel_basic_enriched`, joined by video_id to `video_details`. The catalogue provides title, description, published_at, thumbnail_url, duration_iso8601, video_url, fetch_status, and metadata_fetched_at. Check freshness; the current fetch is on demand, not scheduled. Unavailable metadata retains an explicit status and must not be represented as newly verified content.

No cross-platform audience sum: a person may appear on several surfaces. No leaderboard equating a view, impression, visit, and meaningful conversation.

## 5. Relevant relationships

Apply Canonical LinkedIn IC Engagement Benchmark v0.1 exactly. Report Nol and Colby separately, and only supported combined deduplicated measures.

| Metric | Definition | Existing pilot target per person |
|---|---|---|
| Qualified breadth | Distinct qualified external participants | 3 per week |
| Weighted engagement points | Sum of reviewed depth × influence multiplier per qualified participant-conversation | 6 per week |
| Deep conversations | Qualified participant-conversations at depth 3 or 4 | 1 per week |
| Stewardship | Eligible actionable inbound contributions receiving a substantive response within three business days / eligible contributions old enough to evaluate | 80% |
| Repeat participation | Qualified participants in at least two distinct conversations on two distinct days / all qualified participants over 28 days | 25%, after four qualifying weeks |

The deep-conversation unit is participant-conversation, not simply a count of threads. Apply the component rubric's qualification signals, influence tiers, review requirements, event-time rules, and coverage gates. Target-only posts are context, not external engagement. A zero stewardship denominator is not applicable.

VM2 processing contract:

1. Preserve raw captures with capture ID and observation time.
2. Normalize one event per comment/reply/post, retaining stable event, actor and conversation IDs, target, direction, exact source, excerpt, event time or verified bounds, and provenance.
3. Deduplicate repeated captures. Separate incoming contributions, outgoing comments, target replies, and target-only posts.
4. Resolve dates independently of collection time. Unresolved or boundary-crossing dates remain excluded and counted in coverage diagnostics.
5. Review relevance, influence, and depth with supporting evidence. Keep reviewer, review timestamp, rubric version and needs_review. Do not clear review flags merely to make a report publishable.
6. Aggregate events to participant-conversations, taking the highest reviewed depth per participant/conversation/window. Then calculate metrics under the component rubric.
7. Check collection coverage for both profiles and all required surfaces. An empty check list is unknown coverage; score_complete=true is not sufficient evidence.

Verified coverage permits supported reviewed metrics. Substantial coverage permits explicitly qualified known subtotals under the source rubric, not full-week target conclusions. Partial or unknown coverage permits evidence examples and operational record counts only; hold performance numbers. Fix VM2's within-week repeat calculation before publishing the 28-day persistence metric.

## 6. Action and conversion

Initial intended actions:

- ADL: a successful inquiry submission.
- IC Summit: the currently active registration, sponsorship inquiry, or general inquiry, each separately identified after verifying the live path.

Track the funnel as distinct steps: relevant page visit → CTA click → verified successful completion. A click or form start is not a completed inquiry. If completion occurs on another domain, verify measurement there or report only the observed outbound click.

Before publishing conversion numbers, record and test the event name, trigger, destination, production scope, deduplication identifier, test/spam exclusions, consent behavior, and validation date. Do not send form contents or personal contact details into GA4. Declare the metric's denominator: for a same-session funnel rate, sessions with a verified completion / eligible sessions, with matching dates and scope. Cross-session or cross-domain attribution requires a separately documented method.

Until validation succeeds, display “Not yet measured,” not zero. Successful inquiries are not automatically qualified leads. Meetings, opportunities, revenue, and marketing attribution are future measures requiring a reliable business record source and agreed definitions.

## 7. Reporting states and evidence

Each metric carries value (number or null), unit, status, reason, source, source timezone, window start/end, fetched_at, filters, definition, evidence links, coverage, and review state. Rates also retain numerator and denominator. Comparisons retain their baseline windows and comparability status.

Allowed result states:

- Measured: supported result with sufficient measurement evidence.
- Qualified subtotal: explicitly incomplete result permitted by its component rubric.
- Collection incomplete: required evidence is missing; performance value is null.
- Not yet measured: tracking or definition is not validated; value is null.
- Not applicable: no meaningful denominator or applicable action; value is null.
- Not comparable: current result may be supported, but period comparison is withheld.

Keep metric availability distinct from performance. Valid zero requires complete applicable measurement. A source being connected does not mean a metric is publishable. Preserve operational diagnostics separately from benchmark performance.

## 8. Weekly agent procedure and recommendation loop

1. Read this canonical Drive benchmark and applicable component rubrics; record their versions.
2. Verify source access, refresh status, observation windows, production filters, and the week's surface inventory.
3. Collect evidence and calculate supported results, leaving explicit holds elsewhere.
4. Review current content and prior actions; distinguish measurement repairs from marketing outcomes.
5. Publish the four assessment cards with coverage and evidence. Produce no overall score.
6. Prioritize up to three actionable recommendations by expected impact and supporting evidence. Mention remaining issues in a backlog.
7. Track each action through proposed, accepted, in progress, implemented, verified, or deferred.
8. At the next eligible window, check the stated success criterion and record improved, unchanged, worsened, or inconclusive.

Each recommendation requires action ID, affected surface, observed gap, evidence, proposed change, expected outcome, verification metric/window, owner or unassigned, status, and linked implementation evidence. Never claim causation from a simple before/after comparison. Never mark an action verified merely because someone says it shipped.

Example: high viewing time with weak thumbnail CTR may support testing a title or thumbnail. It does not establish that the video needs rewriting. Specify which video, the evidence period, the proposed change, and a comparable observation period before evaluating it.

## 9. Initial implementation priorities

As of September 10, 2026:

1. Repair VM2 normalization, time resolution, review and coverage reporting before publishing relationship metrics.
2. Verify post-consent ADL identifiers and validate website conversion events on both sites.
3. Use connected company LinkedIn and YouTube metrics with explicit completeness and lag checks.
4. Conduct the initial dated quality review and establish a complete content inventory.

This document defines the report contract; updating it does not itself repair VM2, install a recurring fetch, validate conversions, or migrate the dashboard UI. Record those implementation actions separately. Revisit thresholds only after sufficient comparable evidence, and version any future changes without rewriting historical results.

## Canonical sources

- Benchmark folder: https://drive.google.com/drive/folders/1iHGgxucjVfF9U0_OLNYZzlDmtfiEi2bE
- This benchmark's stable Drive file: https://drive.google.com/file/d/1DisTz42zdI6a19Eav57ZVVSM4c_vL40i/view
- LinkedIn IC Engagement: https://docs.google.com/document/d/124n4bxGXto5LFlKoPcD1w2bZSAKcDdlY1BYtkYmhQlo/edit
- Strategy Marketing Consistency: https://drive.google.com/file/d/18auM5XQCUy5Q6LPSLB950gp9o4J3yA8t/view
- Brand Consistency: https://drive.google.com/file/d/1MiLRKw9MWDphI4cu-hjuqyqHl0G98fFZ/view
- ADL Brand Guide: https://drive.google.com/file/d/1y0JVE31rAIiDdVYbMXT3B41tLEbHeRYd/view
