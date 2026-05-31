# GroundTruth OS — Validation Report & Build Plan

> **What this is.** A real, decision-grade validation of **GroundTruth OS** — *the live truth layer for grid and infrastructure recovery* — for electric co-ops, municipal utilities, and regional/large utilities. It maps the landscape, names the startups and incumbents, finds the genuine gap, places the revenue hook, and lays out how to break in, make money between disasters, hit aggressive growth, and expand toward a very large company.
>
> **Stance.** Lead with the strongest counterargument, then commit to the sharpest path. No negging for its own sake — there is a venture-scale company here. Every major claim carries an explicit confidence label (high / moderate / low). Every headline figure is linked to a primary source.
>
> **As-of:** May 2026. Treat figures as a snapshot and re-verify against primary sources before relying on them.
>
> **Interactive companion.** A mobile- and desktop-friendly dashboard version of this analysis lives in [`dashboard/groundtruth/index.html`](dashboard/groundtruth/index.html) — filter the competitor map, stress-test the $100M path, toggle the before/after journey, model the Year-1 revenue mix, and click through to every source. The underlying data is in [`dashboard/groundtruth/data.js`](dashboard/groundtruth/data.js) and is easy to extend.

---

## 0. The verdict in one screen

| # | Claim | Confidence |
|---|---|---|
| 1 | **The category is validating and consolidating right now — bullish, not bearish.** Itron acquired Urbint (which had just bought WRM's *Storm Manager*) for **~$330.7M** (Nov 2025); Neara raised **$90M at a $1.1B valuation** (Feb 2026); AiDash's cap table includes Duke, National Grid, Edison, Schneider, and Shell. Real budgets, real exits. The risk is not "no market" — it is "incumbents close the gap before you do." | High |
| 2 | **The unowned "integrated live-event loop" is the real defensible secret.** Every competitor owns one slice (damage extent, vegetation, digital twin, logistics, inspection). None fuses *live multi-source imagery → asset-level physical cause → prioritized dispatch → field-confirmed outcome → auto reimbursement evidence*, with a learning loop tying predictions to repairs. | High |
| 3 | **The fastest, most fundable wedge is "get your money back": FEMA / insurance / regulatory evidence automation.** FEMA Public Assistance reimburses eligible co-ops/munis at **≥75%** for Category F utility restoration; the binding constraint is *documentation*. Hard dollars, recurring, low adoption risk — and it seeds the proprietary outcome dataset. | High |
| 4 | **"$100M via co-ops alone" is in tension with reality.** Public power is ~59% of utilities by count but only ~15% of customers; most targets are small. The math works only through statewide associations / G&Ts / mutual-aid networks (low-CAC distribution) plus eventual mid/large IOUs. | Moderate-high |
| 5 | **Drones-at-scale is upside, not the foundation.** FAA Part 108 (BVLOS) is still finalizing; disaster-zone TFRs persist. Lead with truck/fixed-camera/citizen/satellite ingestion. | High |

---

## 1. The idea, restated precisely

When a storm, fire, flood, or outage hits, a utility knows *customers are out* but often does not know the *physical reason* fast enough. GroundTruth OS ingests imagery from drones, truck cameras, fixed cameras, citizen uploads, and satellites (over Starlink/edge when networks fail), compares it to a maintained baseline, and tells the utility **what broke, where, how bad, what crew/equipment is needed, what roads are blocked, and what evidence is required for reimbursement, insurance, regulators, and customers**.

It is not a drone company, not GIS, not outage alerts. It is the missing layer between **physical reality** and **operational action** — and, over time, the **live truth layer for physical infrastructure**.

**Why the buyer cares (in their language, not "AI"):** faster restoration, fewer truck rolls, better crew utilization, lower storm cost, less regulatory heat, better FEMA/insurance recovery, fewer customer outage-hours, safer crews.

---

## 2. Market & money: is the prize real?

**Yes, the demand and the budgets are real.** Confidence: high.

- **Electric co-ops:** 830 distribution co-ops + 64 G&T co-ops serve **42M people across 56% of the US landmass** ([NRECA](https://www.electric.coop/electric-cooperative-fact-sheet)).
- **Public power:** **1,998 utilities** in ~2,000 communities serving **55M+ people** ([APPA](https://www.publicpower.org/public-power/stats-and-facts)) — but ~59% of US utilities by count vs only ~15% of customers, i.e. *most are small*.
- **IOUs:** ~168 investor-owned utilities serve ~66% of US customers — the deepest budgets, and where $100M ultimately must come from.
- **Disaster cost:** US billion-dollar disasters averaged **$149.3B/yr in 2020–2024** (~$746.5B), per NOAA/NCEI as summarized by [Climate Central](https://www.climatecentral.org/climate-matters/billion-dollar-disasters-2025). **Caveat and signal:** NOAA *retired* the billion-dollar disasters database in May 2025 ([CBS News](https://www.cbsnews.com/news/noaa-ending-billion-dollar-disasters-database/)) — the public data backbone is fraying, which *raises* the value of private, auditable ground truth.
- **Infrastructure stress:** ASCE's 2025 Report Card gave US infrastructure an overall **C** but **downgraded energy to D+**, noted **~80% of outages since 2000 are weather-related**, and put the 10-year investment gap at **$3.7T** ([ASCE](https://www.asce.org/publications-and-news/civil-engineering-source/society-news/article/2025/03/25/asce-report-card-gives-us-infrastructure-highest-ever-c-grade)).

### 2.1 The $100M path — structurally possible, aggressive

| Segment | Customers | Avg ACV | Revenue |
|---|---:|---:|---:|
| Small co-ops / munis | 100 | $250k | $25M |
| Larger co-ops / munis | 40 | $750k | $30M |
| Regional / large utilities | 10 | $3M | $30M |
| Disaster surge + hardware + services | — | — | $15M |
| **Total** | **150** | — | **$100M** |

This is reachable *only* through the channel (statewide associations, G&Ts, mutual-aid networks) plus mid/large IOUs — not 830 cold calls. The interactive dashboard lets you change any cell and watch the total recompute; note how much rests on the 10 large utilities and the $15M services line. Confidence on reaching $100M in 3–4 years: **moderate-high, aggressive on timing**.

---

## 3. The landscape — who is already here (be real)

This is **not** greenfield. The honest read: the category is crowded *and consolidating*, which is validation. The opening is that **every player owns one horizontal slice and none closes the live-event loop end to end.**

### 3.1 The layer map

| Layer | Who owns it today | Status |
|---|---|---|
| **Inputs (capture)** | Skydio, Percepto, DroneDeploy, ICEYE, Vexcel, Gridware, fixed cams, Starlink | Owned (partner, don't rebuild) |
| **Extent (where / how bad)** | ICEYE (SAR), AiDash (satellite), Vexcel/Planet | Owned (partner/supply) |
| **Cause (what broke)** | eSmart, Buzz (narrow CV); Neara (physics twin) — none open-ended live | **Partial — contested** |
| **Decide (dispatch)** | Urbint/Itron, ARCOS (logistics) — not vision-driven | **Partial — contested** |
| **Recover (reimburse)** | ICF/Hagerty/Tidal Basin (humans) — no software product | **White space** |
| **Learn (outcomes)** | Nobody closes the predict→repair loop | **White space** |

**The wedge** is the unowned right-hand side: open-ended live **cause** detection → vision-driven **dispatch** → automated **recover** (reimbursement evidence) → a **learn** loop tying every prediction to the confirmed repair. The left side is bought or partnered. Confidence: high.

### 3.2 The players (grouped by layer)

**Live-event storm response & risk**
- **Urbint (+ WRM "Storm Manager")** — AI storm-impact prediction + crew logistics/incident management; the closest thing to a full storm platform. **Acquired by Itron for ~$330.7M, Nov 2025** ([Itron 10-K](https://www.sec.gov/Archives/edgar/data/780571/000078057126000033/R26.htm); [Urbint](https://www.urbint.com/news/urbint-acquires-wrm-software-to-expand-utility-risk-offering-into-storm-response)). Leaves open: live multimodal cause detection + reimbursement loop.
- **AiDash** — satellite-first IVMS (vegetation), CRIS (climate/outage forecasting), AIMS (asset inspection). Series C **$58.5M** (~$91.5M total), strategics Duke/National Grid/Edison/Schneider/Shell ([BusinessWire](https://www.businesswire.com/news/home/20240430874835/en/AiDash-Closes-its-Oversubscribed-Series-C-Funding-Round-at-%2458.5-Million)). Leaves open: live-event orchestration + dispatch + evidence.
- **Rhizome** — AI grid-resilience planning / capital prioritization (pre-event).

**Network model / digital twin**
- **Neara** — physics-based 3D digital twin; simulate fire/flood/storm/ice; re-energization analysis. **$90M Series D, $1.1B valuation (Feb 2026)** ([Neara](https://neara.com/solutions)). Leaves open: real-time operational command + reimbursement.
- **Sharper Shape** — "Living Digital Twin" + LiDAR/drone linear inspection.

**Aerial / fixed-camera CV inspection**
- **eSmart Systems (Grid Vision)** — market leader CV for grid inspection; **75+ utilities**, ~€40M raised; now API-first "AI Studio" (Mar 2026) ([eSmart](https://www.esmartsystems.com/)).
- **Buzz Solutions (PowerAI)** — CV defect detection + **post-storm assessment** + 24/7 substation monitoring; logos Dominion, NYPA, Ameren, AEP ([Buzz](https://www.buzzsolutions.co/)). Closest on the "post-storm assessment" framing — watch closely.
- Optelos / Cyberhawk / Heliolytics — aerial inspection analytics.

**Drone hardware / autonomy / drone-in-a-box:** Skydio, Percepto, DroneDeploy — natural partners, not rivals.

**Satellite / Earth-observation extent**
- **ICEYE** — largest SAR constellation; near-real-time flood depth + property-level hurricane/wildfire damage; **launched utility/energy disaster response May 2025**; €250M+ revenue, €1.5B backlog ([ICEYE](https://www.iceye.com/newsroom/press-releases/iceye-expands-disaster-response-solutions-to-support-utility-and-energy-sectors)). Best treated as a **data supplier/partner**, not rebuilt.
- Vexcel (Gray Sky aerial), Planet/Maxar (base imagery), OroraTech (thermal wildfire).

**Wildfire:** Pano AI (Series B $44M; cameras + detection), Technosylva (spread/PSPS modeling).

**Sensors / edge:** Gridware (pole fault sensors), LineVision (line monitoring), Whisker Labs/Ting, Sentient Energy (Itron).

**Insurance / property risk (adjacent buyer + data):** ZestyAI, Cape Analytics, Nearmap/Betterview — future *buyers* of GroundTruth's risk data.

**Emergency management (gov-adjacent):** Juvare (Crisis Track), One Concern, Veoci, Disaster Tech.

**Disaster-recovery consulting (the Year-1 fee pool to disrupt):** ICF (~$1.87B revenue; [10-K](https://www.stocktitan.net/sec-filings/ICFI/10-k-icf-international-inc-files-annual-report-e82624e0f817.html)), Tetra Tech, Hagerty (~$31.7M), Tidal Basin, Witt O'Brien's, IEM — fragmented, labor-heavy, fee-based. The US disaster-management market is ≈**$46.67B (2025)**, with recovery the fastest-growing segment.

**Incumbent systems of record (integrate, don't displace):** Esri (ArcGIS / static GIS), Schneider / Oracle / GE Vernova / Survalent (ADMS/OMS — symptoms, not causes), Itron / ARCOS / NISC / SEDC / Milsoft / Futura (co-op back office + crew logistics + the channel into 830 co-ops).

---

## 4. Why now (what current models & abilities unlock)

1. **Multimodal VLMs reason over open-ended disaster imagery** in natural language — collapsing the "narrow CV model per object" limit that bounds eSmart/Buzz and making long-tail cause detection cheap. *High.*
2. **Agentic LLMs auto-draft the paperwork** — FEMA Project Worksheets, insurance claims, PUC filings from structured evidence. The reimbursement hook becomes software, not consulting. *High.*
3. **Connectivity finally works when networks fail** — Starlink/LEO + edge compute keep field kits/trucks/cameras uploading exactly when terrestrial networks are down. *High.*
4. **SAR + cheaper drones expand the input layer** — ICEYE-class SAR gives all-weather/day-night coarse truth to fuse with ground RGB; drone autonomy + pending FAA Part 108 ([FAA BVLOS](https://www.faa.gov/newsroom/beyond-visual-line-sight-bvlos)) expand aerial coverage over time. *Moderate.*

---

## 5. The right hook

- **Land — "Get your money back."** Reimbursement + regulatory evidence automation. Hard dollars (FEMA **≥75%** federal share for Category F restoration — [FEMA fact sheet](https://www.fema.gov/sites/default/files/2020-07/fema_public-assistance-fact-sheet_10-2019.pdf); co-ops eligible as nonprofits — [NRECA](https://www.electric.coop/wp-content/uploads/2016/03/fast_fact_fema_june_14_2016_update_final.pdf)), low adoption risk (documentation, not safety-critical autonomy), recurring per declared event, and it seeds the proprietary outcome dataset. The documentation burden is real: FEMA evaluates conductor damage thresholds, the "50% rule," and Project Worksheets, and the OIG claws back poorly documented or non-compliant claims.
- **Expand — "Restore faster / fewer truck rolls."** Triage + dispatch: a bigger prize but harder to prove and directly contested by Itron/Urbint and AiDash. Earn the right to it with the reimbursement win first.

---

## 6. How we break in + the before/after journey

### 6.1 Break-in motion (first-touch → paid)
1. **Pre-season:** sign an MOU with one statewide co-op association / mutual-aid group / storm-restoration contractor — not 830 cold calls.
2. **Storm-surge engagement:** on the next declared event, deploy to produce the FEMA-ready evidence packet + a live damage map, priced **fixed-fee** on value.
3. **The disaster is the demo:** deliver a quantified reimbursement + restoration-time result.
4. **Convert** the design partner to an annual subscription and **spread peer-to-peer** along the mutual-aid graph.

### 6.2 Before (today, manual)
Outage map shows affected customers → crews drive out largely blind → photos/video scattered across text, email, radio, drone pilots → supervisor guesses cause and priority → wrong crew/equipment sometimes dispatched → repairs happen slowly; access (flooded roads, closed bridges) discovered the hard way → documentation rebuilt over **6–18 months** for FEMA / insurance / regulators.

### 6.3 After (with GroundTruth)
Field kits/truck cams/fixed cams/citizen/satellite/drones feed GroundTruth over Starlink/edge → AI compares to the maintained baseline and names asset-level causes ("Feeder 12 down — tree at Pole 12-881") → flags access ("Substation B road flooded; bridge closed — reroute crew") → ranks restoration by customers/critical facilities/access; recommends crew + equipment + route → dispatcher clicks "create restoration plan"; crews confirm/correct in mobile → live map updates → evidence packet auto-generated → **every prediction is tied to the real repair outcome**, so the model gets smarter each event.

### 6.4 Why it works now
Cheap, general multimodal cause detection is brand new; the category just proved budgets and exits yet left the integrated loop unowned; connectivity finally works in disasters; documentation pressure is rising as the public data backbone frays. Confidence: high / moderate.

---

## 7. Reality check — what has to be true

| What has to be true | Confidence |
|---|---|
| Sales cycles are slow even with a channel — 6–18 months to a first paid annual contract despite a fast pilot. Plan runway. | Moderate-high |
| Cold-start integration per customer (GIS/OMS/asset baselining) before storm value appears. | High |
| CV reliability + liability: false negatives on downed/energized lines = safety/legal hazard → decision-support + human confirmation, not autonomy, early. | High |
| Episodic demand vs SaaS durability → must be paired with the year-round revenue engine (§8). | High |
| Incumbent consolidation + OEM bundling (Itron/AiDash/Neara/eSmart); window open but not indefinite. | Moderate-high |
| Federal funding/data volatility (GRIP/BRIC/NOAA) → don't depend on any one program. | Moderate |
| Capital intensity if hardware → partner-supplied (Starlink/Skydio/fixed-cam) to stay asset-light early. | Moderate |
| Realistic near-term: first 18–24 months = 2–4 design partners, low-to-mid six-figure ARR, one defensible reimbursement KPI — not a fast march to $100M. | Moderate |

---

## 8. Making money between disasters (the off-season engine)

Storm response is the **wedge and differentiator**; recurring ARR comes from **always-on work that is a byproduct of the same product** — to detect what *changed* in a storm you must maintain the baseline year-round. That baseline maintenance is the durable business (and is exactly where AiDash/eSmart/Neara already earn recurring revenue, which validates the model).

**Always-on subscription (ARR base):** baseline build/refresh; routine inspection triage; vegetation monitoring; wildfire-risk + substation 24/7 monitoring; asset-health/"Asset Memory" predictive failure; reliability (SAIDI/CAIDI) + annual NERC/state filing automation.

**Event & outcome revenue:** high-value storm-mode activation on top of subscription; insurance-side success fees; an annual "resilience & recovery" retainer.

> **Fee placement matters (read this).** Success/contingency fees can only live on the **private insurance** side. **FEMA work must be billed fixed-price or time-and-materials** — contingency fees are unallowable and **cost-plus-percentage-of-cost is prohibited under 2 CFR 200.323(d)** ([FEMA contracting checklist](https://www.fema.gov/press-release/20250121/public-assistance-contracting-requirements-checklist)); management costs are capped (7% recipient / 5% subrecipient — [FEMA policy](https://www.fema.gov/sites/default/files/2020-05/PA_Management_Costs_Interim_Policy_11-15-201830.pdf)). The "recover more, faster" ROI is the *sales argument*, not the contract structure.

**Honest implication:** you must also win the boring year-round inspection/vegetation budget where AiDash/eSmart/Neara compete — storm response gets you in the door and is your edge, but it cannot be the whole product. Confidence: high.

---

## 9. The hypergrowth path — $10M Year 1 → $100M Year 2 (the 10x engine)

**The honest mechanism.** Pure organic product-led SaaS will not 10x to $100M in Year 2 — utility sales cycles forbid it. The credible path is **services/outcome-led GTM + an inorganic roll-up**, then conversion to software margin (Palantir forward-deployed meets PE-roll-up-plus-AI). Capital is assumed available. This is execution- and capital-intensive, **not a base case — but it is real.** Don't admit defeat; do be precise about what must be true.

### 9.1 Revenue architecture (front-loaded on gross dollars, converting to ARR)
- Fixed-price **storm-surge engagements** (assessment + evidence packets + live map) — FEMA-compliant, billable per active event.
- **Forward-deployed services** that displace labor-heavy disaster-recovery consulting (ICF/Hagerty/Tidal Basin-style work) — a fragmented multi-billion-dollar pool (US disaster-management market ≈$46.67B in 2025).
- **Annual subscriptions** (baseline + routine inspection/vegetation/monitoring) attaching during/after each engagement.
- **Insurance-side success fees** (allowed; not FEMA).
- Hardware / Starlink pass-through.

### 9.2 Two engines (need both)
- **Engine A — Organic active-season blitz.** Sign 1–2 channel/framework deals pre-season (statewide association, G&T, large restoration contractor, or a state EM agency) that funnel many accounts at once; staff with forward-deployed teams; bill fixed-fee per event. **~12–25 engagements at ~$300k–$1.5M ≈ $5–20M gross in Year 1** — timing-dependent on an active hurricane/wildfire season.
- **Engine B — Inorganic roll-up.** Acquire one or more storm-services / FEMA grant-management / aerial-inspection books of business (buy revenue + relationships + backlog), then transform margins with the AI product. **This is the realistic spine of the 10x-to-$100M**, funded by a large Series A/B.

### 9.3 Illustrative Year-1 revenue mix (→ ~$10M)
| Component | $ (000s) |
|---|---:|
| Surge engagements | 3,500 |
| Forward-deployed services | 2,500 |
| Acquired book (partial year) | 2,500 |
| Subscriptions (ramp) | 1,000 |
| Insurance + hardware | 500 |
| **Total** | **≈10,000** |

### 9.4 Capital plan
- **Seed** — fund forward-deployed teams + first storm season + MVP (assessment + evidence packet); build a roll-up target list.
- **Series A (around/after first season)** — fund the roll-up + national channel + productization to cut the services ratio.
- **Series B** — scale subscriptions, integrate acquisitions, expand hazards/geographies.

### 9.5 Year-1 motion (quarterly)
- **Q1** — sign channel/framework + 1 design partner; build MVP; assemble roll-up target list.
- **Q2** — pre-position kits; close first surge contracts ahead of season; first acquisition LOI.
- **Q3** — active-season blitz (maximize concurrent engagements — forward-deployed capacity is the bottleneck); close acquisition.
- **Q4** — convert engagements to subscriptions; book framework ARR; raise Series A.

### 9.6 Leading indicators & kill-criteria
- ≥1–2 pre-season framework/channel deals signed that funnel many accounts.
- Gross bookings per declared event; max concurrent engagements staffable.
- Services→software ratio trending down; NRR >130% as subscriptions attach.
- ≥1 acquisition LOI by mid-Year-1.

> **Kill-criterion.** If no framework/channel deal closes pre-season and no acquisition is sourced, the $10M/$100M timeline is not real — re-plan to a $100M-in-3-4-years organic path.

**Confidence:** $10M Year 1 = **moderate-low** and season/channel-timing-dependent. $100M Year 2 = **low** and requires inorganic acceleration + large raises.

---

## 10. Founder playbooks

**Peter Thiel — monopoly / secret / last mover.** The secret: the value isn't the CV (commoditizing) — it's the closed outcome loop + reimbursement workflow lock-in, now buildable because multimodal models made open-ended scene understanding cheap. Monopolize a tiny niche first (storm + FEMA evidence for co-ops in 1–2 disaster-prone states); build a data network effect (predictions ↔ repair outcomes) no incumbent has; be the last mover that becomes the system of record for physical-infrastructure truth. 10x test: an 18-month manual reimbursement compressed to days.

**Jeff Bezos — work backwards / customer obsession / flywheel.** Write the PR/FAQ first: "Co-op X recovered 100% of eligible FEMA dollars in 30 days and cut restoration time X%." Customers: the dispatcher and the co-op CFO. Flywheel: more events documented → better cause models → faster restoration + bigger reimbursements → more utilities → more data. Two-pizza teams; durable need (storms recur; FEMA persists even as NOAA data frays). Regret-minimization: the consolidation window is open now.

**Nikolay Storonsky — velocity / aggression / metrics.** Ship weekly; ruthless KPI culture; instrument everything. Land-and-expand inside co-op networks for low CAC. Widen the product surface fast (storm → inspection → vegetation → wildfire → insurance data). Capture regulatory/funding tailwinds (DOE GRIP, FEMA BRIC/HMGP). Blitzscale + roll up to grab share before Itron/AiDash/Neara close the category.

---

## 11. Fastest traction (sequenced)

1. **Sell an outcome during the next disaster, not a platform** — "storm-surge" engagements; the disaster is the demo.
2. **Channel for low CAC** — mutual-aid networks + statewide associations + G&T co-ops + storm-restoration contractors.
3. **Buyer sequence** — land with the CFO/regulatory/reimbursement buyer (hard ROI, low risk) → expand to ops/dispatch.
4. **Fund from funded budgets** — make the software eligible inside GRIP/DOE resilience grants and FEMA BRIC/HMGP.
5. **Geographic wedge** — dominate 1–2 disaster-prone, co-op-dense states; expand along mutual-aid ties.
6. **Design partners** — 1 Gulf/SE hurricane co-op, 1 Midwest ice-storm/derecho co-op, 1 municipal utility, 1 storm-restoration contractor.
7. **Instrument the moat from day one** — tie every prediction to a confirmed repair outcome.

---

## 12. Buyers, budgets & money flow

**Who owns the budget:** VP Operations / Storm Director (restoration time, crew utilization, safety); **CFO / Finance** (storm cost recovery, FEMA/insurance recovery — the easiest "yes"); Regulatory/Rates (PUC reporting, prudency); GIS/Engineering (asset records, integration); Safety (crew exposure).

**Where the money comes from:** ratepayer rates + storm reserves/securitization; **FEMA Public Assistance (≥75%, Category F)**; DOE GRIP + FEMA BRIC/HMGP resilience grants; private insurance claims (the only place success fees are allowed).

```
Ratepayers/members ─ rates ─┐
FEMA PA (>=75%) ────────────┤
GRIP / BRIC grants ─────────┼──► Co-op / Muni / IOU budget owner
Insurers (claims) ──────────┘                 │
                                              │ subscription + event surge + services
                                              ▼
                                        GroundTruth OS ◄── inorganic ── Acquired storm-services / grant-mgmt books
                                              │
        ┌──── auto evidence (fixed-fee) ──────┼──► FEMA
        ├──── evidence + success fees ────────┼──► Insurers
        ├──── risk / change-detection data ───┼──► Insurers / reinsurers
        └──── compliance / outage reports ────┴──► State PUC / regulator

Channel (low-CAC): Statewide assoc / G&T / mutual aid ──► utilities
```



---

## 13. Private markets: the parallel wedge we should not ignore

Utilities are the cleanest first narrative, but the underlying problem is not utility-specific. Any private company with distributed physical assets faces the same failure mode after a disaster: leaders do not know what physically broke, what is accessible, which crew/vendor should go first, what evidence supports insurance or business-interruption recovery, and how to update the baseline so the next event is less expensive.

**The implication:** GroundTruth should run two parallel go-to-market lanes:

1. **Utilities / co-ops** — best narrative coherence, FEMA wedge, regulatory pressure, mutual-aid distribution.
2. **Private asset owners + claims/restoration ecosystem** — faster revenue, more private budgets, richer data, less political procurement.

The product surface is the same: **live damage truth + recovery workplan + evidence package**.

### 13.1 The overall spend map: this is bigger than utility storm response

Annual disaster and physical-disruption spend is not one budget. It is a stack:

- direct asset damage;
- insured losses;
- uninsured losses / deductibles;
- business interruption and contingent business interruption;
- customer outage cost;
- emergency response and restoration labor;
- resilience capex;
- public grants and regulatory compliance;
- insurance/reinsurance risk pricing;
- supply-chain rerouting and expedited logistics.

Selected anchors:

| Cost / spend pool | Anchor | Why it matters |
|---|---:|---|
| Global natural catastrophe economic losses | **$220B** in 2025 | Swiss Re; insured losses were **$107B**, so even in a high-insurance year there is a major protection gap. |
| US billion-dollar weather/climate disasters | **$149.3B/yr** avg 2020-2024 | NOAA/NCEI via Climate Central; 2025 Climate Central estimate was **$115B**. |
| US major power outage customer cost | **$121B** in 2024 | ORNL; $67B/yr average 2018-2024. This is the hidden private-business pain behind utility outages. |
| Global disaster restoration services | **$43B-$45B** 2025-2026 | Low-concentration market; labor-heavy; ripe for AI-native workflow and roll-up. |
| US narrow damage restoration services | **$7.1B** | IBISWorld-style narrow category; broader property-restoration/rebuild estimates are much larger depending on scope. |
| Freight rail climate resilience investment | **~$23B/yr** | AAR; railroads already spend to fortify networks against floods, wildfires, storms and heat. |
| US port trade exposure | **$2.28T** of trade | GAO; ports are concentrated, high-value physical nodes affected by hurricanes/flooding. |
| North American midstream infrastructure need | **$40B-$48B/yr** | INGAA Foundation through 2052; not all resilience, but physical-risk hardening is embedded in the capex story. |
| REIT severe-event revenue at risk | **~$43B** | First Street analysis of 65 REITs for a 1-in-100-year event. |

**Bottom line:** the addressable spend is comfortably **multi-hundred-billion dollars annually** in the US in bad years, and **trillion-dollar-plus globally** once supply-chain losses, resilience capex, infrastructure exposure and insurance/reinsurance capital are included. GroundTruth does not need to capture the spend directly; it needs to become the evidence and action layer that influences how that spend is allocated.

### 13.2 Hazards and who pays

| Hazard / physical issue | Cost anchor | Who pays | GroundTruth opportunity |
|---|---|---|---|
| Severe convective storms (hail/tornado/wind) | $50B+ global insured losses in 2025 | Insurers, reinsurers, property owners, utilities, restoration firms | Roof/asset damage detection, claims triage, crew routing, evidence packs |
| Wildfire | $40B insured losses from 2025 LA wildfires alone | Insurers, CRE/homeowners, utilities, telecom, government | Pre/post fire damage truth, access routes, utility/telecom restoration, defensible claims |
| Flood / storm surge / hurricanes | US disaster losses average $149.3B/yr (2020-2024) | FEMA, NFIP/private insurers, ports, utilities, industrials, CRE owners | Flood extent + asset damage + ingress/egress + reimbursement evidence |
| Power outages | $121B US customer cost in 2024 | Commercial/industrial customers, utilities, backup-power vendors, insurers | Outage cause, facility impact, generator/vendor dispatch, BI evidence |
| Extreme heat / freeze / winter storms | Embedded across outage, rail, pipeline, property, industrial losses | Utilities, railroads, pipelines, industrials, insurers | Asset stress detection, access conditions, freeze/heat-risk baselines |
| Supply-chain disruption | ~$184B annual business losses cited for 2025 | Shippers, manufacturers, retailers, logistics firms, insurers | Physical disruption map across suppliers, ports, rail, warehouses, roads |

### 13.3 Private segments to sell into

| Segment | Buyer | Pain | Hook | Priority |
|---|---|---|---|---:|
| Restoration contractors / disaster-recovery consultants | CEO/COO, dispatch, large-loss manager | Scattered photos, manual estimates, slow scoping, labor allocation, carrier documentation | AI damage scoping + evidence packets + crew/vendor dispatch | 1 |
| Insurers, reinsurers, TPAs, brokers | Claims, CAT response, underwriting, reinsurance analytics | Slow claims, leakage, fraud, reserve uncertainty, poor ground truth | Verified damage evidence + live claims triage + risk/change-detection data | 2 |
| Telecom / broadband operators | Network ops, field ops, emergency response | Cell sites/fiber damaged by wind/fire/flood/theft; access blocked | Network damage map + access intelligence + temporary-asset placement | 3 |
| Data centers / critical digital infrastructure | Site ops, facilities, risk, energy | Power/cooling/access failures, SLA exposure | Facility/access/power-risk truth + vendor dispatch + insurance/SLA evidence | 3 |
| Freight railroads | Network ops, engineering, maintenance-of-way | Flood washouts, heat buckling, wildfire, bridge/ballast damage | ROW damage intelligence + route/access triage | 4 |
| Ports, terminals, logistics parks | Port ops, terminal operators, drayage/logistics | Hurricane/flood closures, yard damage, dwell spikes | Yard/port live damage + recovery sequencing | 4 |
| Pipelines / midstream / energy assets | Ops, integrity, EHS, emergency response | Flood/wildfire/subsidence/landslide across long linear assets | Corridor change detection + access/repair triage | 4 |
| CRE / REITs / large landlords | Asset mgmt, property ops, risk/insurance | Insurance premiums, asset-value discounts, tenant disruption | Portfolio baseline + post-event evidence + capex prioritization | 5 |
| Manufacturing / industrial | Plant manager, reliability, finance, insurance | Flood/fire/power stops production; BI/CBI evidence burden | Plant damage/access map + BI evidence + recovery workplan | 5 |
| EPC / engineering / resilience consultants | Practice leads, disaster recovery, infrastructure advisory | Manual assessments, report drafting, shortage of inspectors | AI assessment/reporting workbench that multiplies delivery capacity | 1 |

### 13.4 Private-market GTM

**Motion 1 — Partner/channel: restoration + disaster-recovery firms.** Sell an AI assessment/reporting workbench to large-loss teams; offer surge-mode pricing during CAT events; use partners' customers to collect cross-sector outcome data; acquire/roll up smaller firms once the workflow improves margins. This is the fastest route to revenue because they already monetize disasters and are labor-constrained.

**Motion 2 — Data/API: insurers, TPAs, reinsurers, brokers.** Start with event-specific damage feeds and evidence APIs; integrate into claims triage and reserve workflows; sell portfolio risk/change-detection subscriptions between events; expand to underwriting and reinsurance analytics. This is the best payer for verified truth because they can buy data before adopting a full workflow.

**Motion 3 — Enterprise: telecom, data centers, rail/ports/pipelines.** Pick one vertical with a lighthouse logo and high downtime cost; baseline assets and access routes before season; run tabletop + live event activation; convert to annual resilience/recovery subscription. High ACV, but longer cycles.

**Motion 4 — Portfolio: CRE/REITs/industrial.** Sell portfolio baseline + insurance documentation + post-event triage; partner with brokers/lenders to reach many owners; attach resilience capex prioritization; feed evidence into BI/CBI claims.

### 13.5 Private journey: before vs. after

**Before:** storm/flood/fire hits a portfolio site -> ops does not know which buildings/assets are damaged or accessible -> photos arrive from property managers, contractors, guards and drones in separate threads -> claims teams and restoration contractors duplicate site visits -> business-interruption evidence is reconstructed weeks later -> vendors are dispatched based on phone calls, not verified severity.

**After:** GroundTruth shows each affected site, access route and suspected damage type -> AI organizes photos/video/satellite/fixed-camera feeds into a verified evidence graph -> system prioritizes sites by downtime, revenue, safety and customer/SLA impact -> restoration/EPC vendors receive scoped work packets -> insurance/BI/CBI claim packets are generated as work happens -> the asset baseline updates for the next event and for insurance renewal negotiations.

### 13.6 What we were missing

The first version was too utility-centric. The bigger company is not merely "AI storm response for utilities." It is the **evidence, dispatch and recovery operating layer for physical disruption**. Utilities are still the clean wedge, but restoration firms, insurers, telecom/data centers and private infrastructure operators may be faster monetization channels and better proof of the broader platform.


---

## 14. Expansion ladder — $1B → $10B → $30B

The wedge is storm response. The company is the live truth layer for physical infrastructure. Higher tiers are aspirational and low-confidence — the prize, not the plan.

- **$0 → $100M — Core (US electric).** Storm + reimbursement + routine inspection/vegetation/asset-health for co-ops/munis/regional utilities. *Moderate-high reachable; aggressive timing.*
- **$1B — Own the grid lifecycle, go wide.** All IOUs; full all-hazard coverage; gas + water utilities; the utility "physical world model"; international (AU/CA/EU). *Moderate.*
- **$10B — Live truth layer for all physical infrastructure + data + marketplace.** Telecom/fiber, rail, roads/DOTs, pipelines, ports, airports, water; an insurance/reinsurance risk-data layer; a contractor/crew/equipment marketplace (take-rate); government/FEMA/defense. Mix shifts to SaaS + data licensing + transactional. *Low.*
- **$30B — National/global physical-risk operating system.** The system of record that *prices* physical risk and feeds insurance, reinsurance, capital markets (CAT bonds), real estate, and mortgage/credit risk (à la ICEYE's banking play); powers autonomous inspection/robotics; the default OS for physical-world emergencies. Requires near-monopoly + multi-vertical + data flywheel. *Low / speculative.*

---

## 15. Risks & kill-criteria

| Risk | Severity | Kill-criterion |
|---|---|---|
| Incumbent closes the loop first (Itron/AiDash/Neara) | Critical | A funded incumbent ships an outcome-linked reimbursement product and signs your target channel → differentiation collapses; pivot or sell. |
| Episodic revenue never becomes durable ARR | Critical | <50% of revenue recurring by end of Year 2 → model is broken. |
| CV/safety liability event | High | Any safety incident attributable to over-trusting automation without human confirmation. |
| Cold-start integration too slow | High | Baseline onboarding routinely exceeds one storm-season lead time → wedge timing fails. |
| FEMA fee/compliance misstep | Medium | Any customer disallowance traced to GroundTruth's contract structure. |
| Federal funding/data retrenchment | Medium | Grant-funded pipeline evaporates and no rate-base/insurance path replaces it. |

---

## 16. Where to start (90-day to first-season checklist)

1. Pick **1–2 disaster-prone, co-op-dense states**; map the statewide association, G&Ts, and mutual-aid graph.
2. Sign **one channel/framework MOU** and **one design partner** (a storm-prone co-op).
3. Build the **MVP**: ingest the partner's GIS/OMS baseline; deliver the **storm damage assessment + FEMA-ready evidence packet** first (not full dispatch).
4. Line up **input partners** (Starlink kits, a drone/DiB vendor, a SAR/imagery supplier like ICEYE) — asset-light.
5. Assemble a **roll-up target list** of storm-services / grant-management / aerial-inspection firms.
6. Define and instrument the **reimbursement KPI** (eligible $ documented, time-to-packet) and the **outcome loop** (prediction ↔ confirmed repair) from day one.
7. Pre-position before the season; run the **storm-surge engagement**; convert to subscription; raise the Series A on the proof.

---

## 17. Sources

**Market & people served**
- NRECA — Electric Co-op Facts & Figures: <https://www.electric.coop/electric-cooperative-fact-sheet>
- APPA — Public power Stats & Facts: <https://www.publicpower.org/public-power/stats-and-facts>
- APPA — Advocacy by the numbers: <https://www.publicpower.org/periodical/article/public-power-advocacy-numbers>

**Disaster cost & infrastructure**
- NOAA/NCEI — Billion-Dollar Disasters (archived): <https://www.ncei.noaa.gov/access/billions/>
- Climate Central — $149B/yr avg 2020–2024: <https://www.climatecentral.org/climate-matters/billion-dollar-disasters-2025>
- CBS News — NOAA ending the database: <https://www.cbsnews.com/news/noaa-ending-billion-dollar-disasters-database/>
- ASCE — 2025 Report Card (overall C, Energy D+, $3.7T gap): <https://www.asce.org/publications-and-news/civil-engineering-source/society-news/article/2025/03/25/asce-report-card-gives-us-infrastructure-highest-ever-c-grade>

**Reimbursement & FEMA rules**
- FEMA — Public Assistance fact sheet (≥75%, Category F): <https://www.fema.gov/sites/default/files/2020-07/fema_public-assistance-fact-sheet_10-2019.pdf>
- NRECA — Co-ops eligible for FEMA PA: <https://www.electric.coop/wp-content/uploads/2016/03/fast_fact_fema_june_14_2016_update_final.pdf>
- FEMA — PA Management Costs Interim Policy (7%/5% caps): <https://www.fema.gov/sites/default/files/2020-05/PA_Management_Costs_Interim_Policy_11-15-201830.pdf>
- FEMA — PA contracting requirements (no cost-plus-%-of-cost): <https://www.fema.gov/press-release/20250121/public-assistance-contracting-requirements-checklist>

**Drones / connectivity**
- FAA — Beyond Visual Line of Sight (BVLOS) / Part 108: <https://www.faa.gov/newsroom/beyond-visual-line-sight-bvlos>

**Competitors & consolidation**
- Itron 10-K — Urbint acquisition ~$330.7M: <https://www.sec.gov/Archives/edgar/data/780571/000078057126000033/R26.htm>
- Urbint — acquires WRM Software (Storm Manager): <https://www.urbint.com/news/urbint-acquires-wrm-software-to-expand-utility-risk-offering-into-storm-response>
- AiDash — Series C $58.5M: <https://www.businesswire.com/news/home/20240430874835/en/AiDash-Closes-its-Oversubscribed-Series-C-Funding-Round-at-%2458.5-Million>
- Neara — Solutions: <https://neara.com/solutions>
- ICEYE — utility & energy disaster response: <https://www.iceye.com/newsroom/press-releases/iceye-expands-disaster-response-solutions-to-support-utility-and-energy-sectors>
- Buzz Solutions — PowerAI: <https://www.buzzsolutions.co/>
- eSmart Systems — Grid Vision / AI Studio: <https://www.esmartsystems.com/>

**Fast-revenue pool**
- ICF — 2025 10-K (~$1.87B revenue): <https://www.stocktitan.net/sec-filings/ICFI/10-k-icf-international-inc-files-annual-report-e82624e0f817.html>

**Private-market disaster spend & infrastructure**
- Swiss Re — 2025 nat-cat losses ($220B economic / $107B insured): <https://www.swissre.com/institute/research/sigma-research/sigma-2026-01-natcat-2025-wildfire-storm-risk/global-natcat-losses-2025.html>
- ORNL — US major outages cost $121B in 2024: <https://www.ornl.gov/news/analysis-shows-power-outages-cost-us-electricity-customers-billions>
- Mordor — Disaster restoration services market: <https://www.mordorintelligence.com/industry-reports/disaster-restoration-services-market>
- IBISWorld — US damage restoration services: <https://www.ibisworld.com/united-states/industry/damage-restoration-services/6278/>
- AAR — Freight rail invests ~$23B/yr in climate resilience: <https://www.aar.org/issue/freight-rail-climate-change/>
- GAO — US ports handle $2.28T of trade and face resilience gaps: <https://www.gao.gov/products/gao-25-107159>
- INGAA — $1T+ North American midstream infrastructure need: <https://ingaa.org/stay-current/what-they-are-saying-ingaa-foundation-midstream-infrastructure-report/>
- AT&T — Hurricane Milton network disaster response: <https://about.att.com/pages/disaster-recovery/2024/storm-milton>
- Bisnow / First Street — CRE climate risk, insurance and valuation: <https://www.bisnow.com/national/news/capital-markets/climate-risk-us-commercial-property-values-study-134469>
- HousingWire / First Street — REIT climate revenue loss: <https://www.housingwire.com/articles/climate-risk-reit-revenue-first-street/>
- ABA — Business interruption claim checklist: <https://www.americanbar.org/groups/gpsolo/resources/ereport/archive/filing-business-interruption-claim-checklist/>
- NetSuite — Supply-chain disruptions cost businesses ~$184B annually: <https://www.netsuite.com/portal/resource/articles/inventory-management/supply-chain-risks.shtml>
