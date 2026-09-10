# ADL marketing benchmark — first test run

Report ID: overall-marketing-2026-09-10-test-01  
Method: Overall Marketing Benchmark v0.2, repository revision ded5da1  
Run date: September 10, 2026  
Weekly operating cutoff: September 10, 2026, 00:00 America/New_York  
Disposition: completed test with partial evidence; no overall score.

The approved repository copy was used because the Drive connector still returned Unknown tool. The canonical Drive copy is not confirmed updated to v0.2. This tests live connector data and the reporting rules, not an unattended agent deployment. No live website changes, messages, or form submissions were made during this run.

## Four assessment results

| Assessment | Result | Evidence coverage |
|---|---|---|
| Message and brand quality | Qualitative findings available; rubric scores withheld | ADL homepage text, live contact form, live IC Summit homepage, two returned company LinkedIn posts, and 17 stored YouTube metadata records. Component strategy/brand rubrics could not be fetched; full visual assessment and complete publishing inventory were not established. |
| Audience attention | LinkedIn and YouTube measurements available, with source-timezone caveats | Fourteen daily records per channel cover each current/prior comparison. Website export contains only September 8. Four-week baseline unavailable. |
| Relevant relationships | Collection incomplete — all five performance metrics withheld for Nol and Colby | VM2 has partial captures, no collection checks, two time-uncertain records, and zero eligible report events. Its score_complete=true flag is rejected by the benchmark gates. |
| Action and conversion | Not yet measured | ADL inquiry form exists. IC Summit's observed calls to action lead to Substack and an industry survey. Successful completion events and attribution are not validated. |

## Audience attention

### Company LinkedIn

Source: Linked_In Analytics, linkedin_organic account 18059443. Current September 3–9; previous August 27–September 2. These are provider date labels; timezone was not established in this run. Results are source-native comparisons, not synchronized Eastern-time totals.

| Metric | Current | Previous | Change |
|---|---:|---:|---:|
| Impressions | 1,314 | 834 | +57.6% |
| Clicks | 48 | 32 | +50.0% |
| Total engagements | 83 | 58 | +43.1% |
| Engagement rate | 6.32% | 6.95% | -0.64 percentage points |

Engagements are the provider's sum of clicks, likes, comments and shares. Rate is total engagements divided by impressions; clicks are not added again. Reach and engagement volume increased, but engagement per impression decreased slightly. This is not enough evidence to classify audience quality or business impact. Net follower change is unavailable in this run, not zero. New-post performance is not inferred from account totals, which can include older content.

### YouTube

Source: adl-data-bq.youtube_raw channel_basic_a3_adl_ventures and channel_reach_basic_a1_adl_ventures, with titles from channel_basic_enriched. Current September 2–8; previous August 26–September 1. Both periods have seven represented dates. September 9 is absent. Source timezone and transfer-run completeness were not independently verified in this test; the comparisons are provisional source-native observations.

| Metric | Current | Previous | Change |
|---|---:|---:|---:|
| Views | 350 | 217 | +61.3% |
| Watch hours | 57.90 | 23.54 | +146.0% |
| Thumbnail impressions | 3,129 | 1,848 | +69.3% |
| Thumbnail CTR | 2.33% | 2.76% | -0.43 percentage points |

Watch hours are summed watch minutes / 60. CTR is weighted by thumbnail impressions, not an average of row percentages. Average viewing duration is withheld pending validation of the applicable denominator and content-type mix. Reach and watch data were aggregated independently to avoid join multiplication.

Top observed videos by watch hours, September 2–8:

| Video | Views | Watch hours |
|---|---:|---:|
| [Does Industrialized Construction Require Full Integration?](https://www.youtube.com/watch?v=4b33KINzRJI) | 27 | 12.49 |
| [Who Should Own What in Industrialized Construction?](https://www.youtube.com/watch?v=TMd1SM1xVrs) | 25 | 10.94 |
| [AEC Roles Must Change For Industrialized Construction](https://www.youtube.com/watch?v=WQyeJGCKN6U) | 39 | 8.03 |
| [Military Construction Is Going Industrialized](https://www.youtube.com/watch?v=LfZI2ufVTlk) | 82 | 7.03 |
| [When Industrialized Construction Beats Site-Built](https://www.youtube.com/watch?v=EbN-gXspQXk) | 31 | 6.77 |

Interpretation: viewing time increased faster than views. Integration and responsibility topics account for substantial observed watch time, while military construction leads these five in views. This supports further topic-level investigation, not a causal claim or a conclusion about transcript quality. Falling channel CTR alone does not identify a weak thumbnail: traffic mix and video-level reach must be examined first.

### Websites — single-day diagnostics only

The only available daily export is events_20260908. Neither website has a seven-day result or weekly comparison. Production hosts were separated; Squarespace preview hosts were excluded.

| September 8 diagnostic | ADL | IC Summit |
|---|---:|---:|
| Page-view events | 55 | 12 |
| Total events | 205 | 41 |
| Events missing user_pseudo_id | 205 | 0 |
| Observed device/browser users | Unavailable | 10 |

The 10 IC Summit users are distinct observed user_pseudo_id values, not a claim of GA4 active users. ADL's missing identifiers must not become zero users. Session, engaged-session, acquisition and key-page metrics are withheld from weekly reporting because the window is incomplete. No successful inquiry, signup or registration event appears in this one-day event-name set; this does not establish zero real conversions or prove the events are unconfigured.

## Message and brand observations

These are descriptive findings against the overall method, not scored substitutes for the inaccessible strategy and brand rubrics.

- **ADL homepage:** clearly presents Industrialized Construction, systems, and owner demand. Owners, AEC firms and investors receive distinct messages, but their calls to action converge on the same contact page. The contact page's wording still emphasizes accelerator programs and general inquiries, offering an opportunity to carry the audience-specific promise into the form. The form was verified after delayed loading; its completion was not tested. Sources: https://www.adlventures.com/ and https://www.adlventures.com/contact-adl .
- **IC Summit homepage:** describes coordinated demand, design, manufacturing, capital and policy, identifies relevant practitioner groups, and explains expansion beyond housing. Its current actions include joining Substack, early-bird notifications via Substack, viewing proceedings, and an industry survey. Benchmark conversion scope should reflect those actual destinations. Source: https://www.icsummit.org/ .
- **Company LinkedIn:** the two returned posts are a September 4 supply-side discussion and a September 7 Labor Day message. The first explicitly connects factory scaling to the surrounding system and invites industry input. It says links are in comments; their presence and destinations were not verified. The holiday post is community context. The connector result is not independently reconciled to a complete publishing inventory. Evidence IDs: urn:li:share:7501486275418517505 and urn:li:share:7502716296183287808.
- **YouTube metadata:** the observed IHS26 titles and descriptions articulate concrete industry questions and identify speakers. Three older records have empty descriptions; that is an archival maintenance finding, not a defect assigned to this week's new publications. The 17-record catalogue is seeded from analytics and cannot prove the full channel inventory. Actual video content and thumbnail visuals were not assessed.

## Relevant relationships — gate evaluation

VM2 was queried for September 3, 04:00 UTC through September 10, 04:00 UTC. It returned zero eligible events, two records with unresolved time, no coverage checks, partial collection, and model assessments requiring review. Capture freshness does not prove event-time eligibility. Both profiles' qualified breadth, weighted points, deep conversations, stewardship and persistence values are null with Collection incomplete status.

The report's score_complete=true flags do not override those facts. Its repeat definition uses distinct conversations within the week; the component benchmark requires a 28-day window with distinct days and four qualifying weeks. No target attainment or combined relationship score is published.

## Action and conversion

ADL's live form asks for name, email and message and has a Submit button. No synthetic submission was sent. The cookie banner with Accept and Decline is visible; analytics recovery cannot be checked in the pre-fix September 8 export.

IC Summit currently links subscription and early-bird notification actions to https://ethic2025.substack.com/ and its survey action to https://forms.gle/3ttERgE7HA1Ch3St5 . These are observed destinations, not verified completions. Substack and form-response access are not established in this run. Ticket sales should not be presumed to be the current conversion. Outbound clicks, subscriptions and survey completions must remain distinct measures.

## Three recommended next actions

| ID / priority | Action and evidence | Expected result and verification | Owner / status |
|---|---|---|---|
| TEST-01 / 1 | Repair VM2 event normalization, dates, reviews, coverage checks and 28-day persistence. Current report fails these gates. | One complete, reviewed seven-day result per profile with reproducible participant-conversation totals; persistence remains held until four qualifying weeks. Verify on the first complete post-repair window. | Unassigned / proposed |
| TEST-02 / 2 | Validate ADL post-consent identifiers and inquiry-success tracking; define IC Summit's Substack/survey funnel and completion sources. | Consented ADL test events retain expected identifiers; successful actions counted once and rejected/abandoned actions not counted as success. Validate test cases before interpreting a subsequent complete week. | Unassigned / proposed |
| TEST-03 / 3 | Align ADL contact-page language with the homepage's owners/AEC/investor promises and preserve audience context in the inquiry path. | All three paths communicate a matching next step. After conversion measurement is valid, compare inquiry completion rates over comparable periods; small samples remain inconclusive. | Unassigned / proposed |

Backlog: restore Drive rubric access and synchronization, perform full visual quality reviews, reconcile publication inventories, verify LinkedIn comment links, review per-video CTR before proposing thumbnail changes, and enrich older video descriptions where still strategically relevant.

## Verification of prior actions and limitations

- Consent banner: visible on live ADL contact page; implementation verified, analytics impact pending.
- YouTube metadata: title joins work in live queries; enrichment implemented. Weekly automation is not installed.
- Benchmark v0.2: repository copy available; canonical Drive synchronization still blocked.
- No four-week baseline, complete website week, numeric quality score, relationship performance score, conversion count, or overall score is supported by this run.

Raw connector evidence is retained in the local test deliverables. This report is published in the repository and displayed through the Latest benchmark dashboard view. It has not been uploaded to Drive. Historical dashboard snapshots remain unchanged.
