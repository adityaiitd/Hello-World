/*
 * GroundTruth OS — Validation Report dataset
 * As-of: May 2026. Figures are point-in-time and drawn from primary sources
 * (NRECA, APPA, NOAA/NCEI via Climate Central, ASCE, FEMA, FAA, SEC filings,
 * company disclosures and press). Every figure is linked in SOURCES below.
 * Confidence labels: high / moderate / low. Verify before relying on any number.
 */

/* --------------------------------------------------------------------------
 * KPIs (overview strip)
 * ------------------------------------------------------------------------ */
const KPIS = [
  { value: "$149.3B/yr", label: "Avg. US billion-dollar disaster cost, 2020–2024", sub: "≈$746.5B over 5 yrs (NOAA/NCEI)" },
  { value: "97M+", label: "People served by co-ops (42M) + public power (55M+)", sub: "NRECA + APPA" },
  { value: "≥75%", label: "FEMA Public Assistance federal cost share", sub: "Category F utilities (Stafford Act)" },
  { value: "$330.7M", label: "Itron's acquisition of Urbint (Nov 2025)", sub: "Category validated + consolidating" },
  { value: "D+", label: "ASCE 2025 grade for US energy infrastructure", sub: "Downgraded from C- in 2021" },
  { value: "80%", label: "Share of US power outages that are weather-related", sub: "Since 2000 (ASCE 2025)" },
];

/* --------------------------------------------------------------------------
 * Headline verdict
 * ------------------------------------------------------------------------ */
const VERDICT = [
  { claim: "The category is validating and consolidating right now — bullish, not bearish.",
    detail: "Itron acquired Urbint (which had just bought WRM's Storm Manager) for ~$330.7M (Nov 2025); Neara raised $90M at a $1.1B valuation (Feb 2026); AiDash's cap table includes Duke, National Grid, Edison, Schneider and Shell. Real budgets, real exits. The risk is not 'no market' — it is 'incumbents close the gap before you do.'",
    confidence: "high" },
  { claim: "The unowned 'integrated live-event loop' is the real defensible secret.",
    detail: "Every competitor owns one slice (damage extent, vegetation, digital twin, logistics, inspection). None fuses multi-source live imagery → asset-level physical cause → prioritized dispatch → field-confirmed outcome → auto reimbursement/regulatory evidence, with a learning loop tying predictions to repairs. That outcome-linked dataset is the moat.",
    confidence: "high" },
  { claim: "The fastest, most fundable wedge is 'get your money back': FEMA / insurance / regulatory evidence automation.",
    detail: "FEMA Public Assistance reimburses eligible co-ops/munis at ≥75% for Category F utility restoration; the binding constraint is documentation (Project Worksheets, the '50% rule', conductor-damage thresholds). Hard dollars, recurring, low adoption risk — and it seeds the proprietary outcome dataset.",
    confidence: "high" },
  { claim: "'$100M via co-ops alone' is in tension with reality; you need the channel and IOUs.",
    detail: "Most of the 830 co-ops and ~2,000 public-power utilities are small (public power = 59% of utilities but only 15% of customers). The count that can fund a $250k+ SaaS line is far smaller. The math works only through statewide associations / G&Ts / mutual-aid networks (low-CAC distribution) plus eventual mid/large IOUs.",
    confidence: "moderate-high" },
  { claim: "Drones-at-scale is upside, not the foundation.",
    detail: "FAA Part 108 (BVLOS) is still finalizing (NPRM Aug 2025, final rule expected ~2026); disaster-zone Temporary Flight Restrictions persist. Lead with truck/fixed-camera/citizen/satellite ingestion; drones are a later expansion.",
    confidence: "high" },
];

/* --------------------------------------------------------------------------
 * Market sizing + the $100M path (editable model)
 * ------------------------------------------------------------------------ */
const MARKET = {
  entities: [
    { label: "Distribution co-ops", count: 830, note: "NRECA; serve 42M people across 56% of US landmass" },
    { label: "Public power utilities", count: 1998, note: "APPA; ~2,000 communities, 55M+ people, but ~75% are small" },
    { label: "Investor-owned utilities (IOUs)", count: 168, note: "EEI-member IOUs; ~66% of US customers — the real budgets" },
    { label: "G&T co-ops", count: 64, note: "Wholesale power; natural channel/aggregator" },
  ],
  funnel: [
    { label: "TAM — all US electric utilities", value: "~3,000 entities", note: "Co-ops + public power + IOUs" },
    { label: "SAM — disaster-exposed + budget to buy", value: "~400–600 entities", note: "Storm/fire/flood-prone with $250k+ software capacity, incl. mid/large IOUs" },
    { label: "SOM — winnable in 3–4 yrs via channel", value: "~150 logos", note: "The brief's $100M target customer count" },
  ],
  // Editable $100M-path segments (the dashboard lets you change customers/ACV)
  path: [
    { seg: "Small co-ops / munis", customers: 100, acv: 250000 },
    { seg: "Larger co-ops / munis", customers: 40, acv: 750000 },
    { seg: "Regional / large utilities", customers: 10, acv: 3000000 },
    { seg: "Disaster surge + hardware + services", customers: 1, acv: 15000000 },
  ],
  notes: [
    "NOAA/NCEI billion-dollar disasters averaged $149.3B/yr in 2020–2024 (~$746.5B), but NOAA retired the database in May 2025 — raising the value of private, auditable ground truth.",
    "ASCE 2025 graded US energy infrastructure D+ (down from C-); ~80% of outages since 2000 are weather-related; the 10-yr infrastructure investment gap is $3.7T.",
    "Public power: 59% of utilities by count but only 15% of customers — confirms most targets are small and price-sensitive.",
    "The $100M path is structurally possible but aggressive: it leans on ~150 logos plus $15M of surge/hardware/services. The channel (statewides, G&Ts, mutual aid) is the only way to reach that logo count affordably.",
  ],
};

/* --------------------------------------------------------------------------
 * Competitive landscape — grouped by the layer each player owns
 * layer ∈ Live-event response | Digital twin | Aerial/CV inspection |
 *         Drone hardware | Satellite/EO | Wildfire | Sensors/edge |
 *         Insurance/property | Emergency mgmt | DR consulting | System of record
 * ------------------------------------------------------------------------ */
const COMPETITORS = [
  { name: "Urbint (+ WRM Storm Manager)", layer: "Live-event response", stage: "Acquired by Itron ~$330.7M (Nov 2025)", region: "US",
    what: "AI storm-impact prediction + crew logistics / incident management. Closest thing to a full storm platform.",
    owns: "Pre-event impact prediction + crew/logistics + incident management.",
    leaves: "Live multimodal physical-cause detection and the auto reimbursement-evidence loop.",
    url: "https://www.urbint.com/storm-impact" },
  { name: "AiDash", layer: "Live-event response", stage: "Series C $58.5M (~$91.5M total)", region: "US/Global",
    what: "Satellite-first SaaS: IVMS (vegetation), CRIS (climate/outage forecasting), AIMS (asset inspection). Strategics: Duke, National Grid, Edison, Schneider, Shell.",
    owns: "Satellite vegetation, outage forecasting and asset inspection.",
    leaves: "Live-event orchestration, dispatch and reimbursement evidence.",
    url: "https://www.aidash.com/utility-storm-response-steps/" },
  { name: "Rhizome", layer: "Live-event response", stage: "Early stage", region: "US",
    what: "AI grid-resilience planning and capital prioritization (pre-event).",
    owns: "Resilience planning / where to harden.",
    leaves: "Real-time event operations and evidence.",
    url: "https://www.rhizomedata.com/" },
  { name: "Neara", layer: "Digital twin", stage: "Series D $90M, $1.1B valuation (Feb 2026)", region: "Global",
    what: "Physics-based 3D digital twin; simulate fire/flood/storm/ice; re-energization analysis.",
    owns: "Engineering-grade network twin + scenario simulation.",
    leaves: "Real-time operational command during the event + reimbursement.",
    url: "https://neara.com/solutions" },
  { name: "Sharper Shape", layer: "Digital twin", stage: "Private", region: "US/EU",
    what: "'Living Digital Twin' + LiDAR/drone linear inspection (Sharper CORE).",
    owns: "Linear-asset inspection + LiDAR analytics.",
    leaves: "Disaster orchestration + evidence.",
    url: "https://sharpershape.com/our-solutions/" },
  { name: "eSmart Systems (Grid Vision)", layer: "Aerial/CV inspection", stage: "~€40M raised; 75+ utilities", region: "Norway/Global",
    what: "Market leader in CV for grid inspection; image-source agnostic; now API-first 'AI Studio' (Mar 2026).",
    owns: "Routine inspection computer vision at enterprise scale.",
    leaves: "Disaster orchestration + reimbursement loop.",
    url: "https://www.esmartsystems.com/" },
  { name: "Buzz Solutions (PowerAI)", layer: "Aerial/CV inspection", stage: "Seed-stage; logos Dominion, NYPA, Ameren, AEP", region: "US",
    what: "CV defect detection + post-storm assessment + 24/7 substation monitoring (fixed cams + drones). Closest on 'post-storm assessment' framing.",
    owns: "Image triage for inspection, post-storm and substations.",
    leaves: "End-to-end live loop + dispatch + evidence packets.",
    url: "https://www.buzzsolutions.co/" },
  { name: "Skydio / Percepto / DroneDeploy", layer: "Drone hardware", stage: "Various (well-funded)", region: "US/Global",
    what: "Autonomous drones (Skydio), drone-in-a-box (Percepto), reality-capture mapping (DroneDeploy).",
    owns: "Autonomous capture hardware + flight ops.",
    leaves: "The intelligence/decision layer and reimbursement workflow — natural partners.",
    url: "https://www.skydio.com/" },
  { name: "ICEYE", layer: "Satellite/EO", stage: "€250M+ rev, €1.5B backlog, ~€2.4B val", region: "Finland/Global",
    what: "Largest SAR satellite constellation; near-real-time flood depth + property-level hurricane/wildfire damage. Launched utility/energy disaster response (May 2025).",
    owns: "All-weather, day/night damage extent from space.",
    leaves: "Asset-level cause, dispatch and reimbursement — best treated as a data supplier/partner, not rebuilt.",
    url: "https://www.iceye.com/newsroom/press-releases/iceye-expands-disaster-response-solutions-to-support-utility-and-energy-sectors" },
  { name: "Vexcel / Planet / Maxar / OroraTech", layer: "Satellite/EO", stage: "Various", region: "Global",
    what: "High-res aerial 'Gray Sky' captures (Vexcel), base satellite imagery (Planet/Maxar), thermal wildfire (OroraTech).",
    owns: "Imagery base layers.",
    leaves: "Interpretation + operations — input suppliers.",
    url: "https://vexcel.com/" },
  { name: "Pano AI", layer: "Wildfire", stage: "Series B $44M", region: "US/AU",
    what: "AI cameras + sensor fusion for early wildfire detection and situational awareness.",
    owns: "Wildfire ignition detection + cameras.",
    leaves: "Grid-asset cause analysis + recovery evidence.",
    url: "https://www.pano.ai/" },
  { name: "Technosylva", layer: "Wildfire", stage: "Private (PE-backed)", region: "US/Global",
    what: "Wildfire behavior/spread modeling; PSPS decision support for utilities.",
    owns: "Fire spread modeling + PSPS.",
    leaves: "Multi-hazard live response + evidence.",
    url: "https://technosylva.com/" },
  { name: "Gridware", layer: "Sensors/edge", stage: "Series A/B (well-funded)", region: "US",
    what: "Pole-mounted sensors detecting mechanical faults (struck poles, line slap) in real time.",
    owns: "Hardware sensing of mechanical grid events.",
    leaves: "Visual cause confirmation, dispatch and reimbursement — complementary signal.",
    url: "https://www.gridware.io/" },
  { name: "LineVision / Whisker Labs / Sentient Energy", layer: "Sensors/edge", stage: "Various", region: "US",
    what: "Transmission line monitoring/DLR (LineVision), grid fault sensing (Whisker Labs/Ting), line sensors (Sentient, owned by Itron).",
    owns: "Specific electrical/mechanical sensing signals.",
    leaves: "The visual ground-truth + workflow layer.",
    url: "https://www.linevisioninc.com/" },
  { name: "ZestyAI / Cape Analytics / Nearmap", layer: "Insurance/property", stage: "Various", region: "US",
    what: "Property-level risk underwriting (wildfire/wind/flood) and geospatial property intelligence for insurers.",
    owns: "Insurance underwriting risk data.",
    leaves: "Utility operations — but a future buyer for GroundTruth's risk data.",
    url: "https://zesty.ai/" },
  { name: "Juvare / One Concern / Veoci / Disaster Tech", layer: "Emergency mgmt", stage: "Various", region: "US",
    what: "Emergency-management ops, damage assessment (Crisis Track), resilience analytics (One Concern).",
    owns: "Government/EM workflow and situational awareness.",
    leaves: "Utility-grade physical cause + utility reimbursement.",
    url: "https://www.juvare.com/" },
  { name: "ICF / Tetra Tech / Hagerty / Tidal Basin / Witt O'Brien's / IEM", layer: "DR consulting", stage: "ICF ~$1.87B rev; Hagerty ~$31.7M", region: "US",
    what: "Labor-heavy disaster-recovery consulting + FEMA grant management + response surge staffing — the Year-1 fee pool to disrupt with AI.",
    owns: "Human-delivered recovery, grant management, financial reconciliation.",
    leaves: "Software margin + the live-data loop — the displacement opportunity.",
    url: "https://www.icf.com/" },
  { name: "Esri (ArcGIS)", layer: "System of record", stage: "Private (incumbent)", region: "Global",
    what: "Dominant GIS / static asset map for utilities.",
    owns: "The static map of what exists.",
    leaves: "Live reality and what changed — must integrate, not displace.",
    url: "https://www.esri.com/en-us/industries/electric/overview" },
  { name: "Schneider / Oracle / GE Vernova / Survalent", layer: "System of record", stage: "Public incumbents", region: "Global",
    what: "ADMS/OMS/DERMS and outage management — they show symptoms (who is out), not physical causes.",
    owns: "Outage/distribution management systems of record.",
    leaves: "Physical-cause ground truth — the integration surface for GroundTruth.",
    url: "https://www.se.com/us/en/work/solutions/for-business/electric-utilities/" },
  { name: "Itron / ARCOS / NISC / SEDC / Milsoft / Futura", layer: "System of record", stage: "Incumbents + co-op software co-ops", region: "US",
    what: "Grid analytics + crew callout/mutual aid (ARCOS) + co-op billing/GIS/outage (NISC, SEDC, Milsoft, Futura). Itron now owns Urbint + Sentient.",
    owns: "Co-op back-office + crew logistics + (now) resiliency analytics.",
    leaves: "The visual live-event truth layer — and the channel into 830 co-ops.",
    url: "https://www.itron.com/" },
];

const LAYER_MAP = {
  order: ["Inputs (capture)", "Extent (where/how bad)", "Cause (what broke)", "Decide (dispatch)", "Recover (reimburse)", "Learn (outcomes)"],
  cells: [
    { layer: "Inputs (capture)", who: "Skydio, Percepto, DroneDeploy, ICEYE, Vexcel, Gridware, fixed cams, Starlink kits", owned: true },
    { layer: "Extent (where/how bad)", who: "ICEYE (SAR), AiDash (satellite), Vexcel/Planet", owned: true },
    { layer: "Cause (what broke)", who: "eSmart, Buzz (narrow CV); Neara (physics twin) — none open-ended live", owned: "partial" },
    { layer: "Decide (dispatch)", who: "Urbint/Itron, ARCOS (logistics) — not vision-driven", owned: "partial" },
    { layer: "Recover (reimburse)", who: "ICF/Hagerty/Tidal Basin (humans) — no software product", owned: false },
    { layer: "Learn (outcomes)", who: "Nobody closes the predict→repair loop", owned: false },
  ],
  gap: "GroundTruth's wedge is the unowned right-hand side: open-ended live CAUSE detection → vision-driven DISPATCH → automated RECOVER (reimbursement evidence) → a LEARN loop that ties every prediction to the confirmed repair. The left side (capture + extent) is bought/partnered, not rebuilt.",
};

/* --------------------------------------------------------------------------
 * Why now (capabilities)
 * ------------------------------------------------------------------------ */
const WHYNOW = [
  { title: "Multimodal VLMs reason over open-ended disaster imagery", detail: "General vision-language models describe and reason about arbitrary damage scenes in natural language — collapsing the 'narrow CV model per object' limit that bounds eSmart/Buzz and making long-tail cause detection cheap.", confidence: "high" },
  { title: "Agentic LLMs auto-draft the paperwork", detail: "FEMA Project Worksheets, insurance claims and PUC filings can be generated from structured evidence — turning the reimbursement hook into software, not consulting.", confidence: "high" },
  { title: "Connectivity finally works when networks fail", detail: "Starlink/LEO + edge compute let field kits, trucks and fixed cameras keep uploading exactly when terrestrial networks are down — the moment disasters happen.", confidence: "high" },
  { title: "SAR + cheaper drones expand the input layer", detail: "ICEYE-class SAR gives all-weather, day/night coarse truth to fuse with ground RGB; drone autonomy + pending FAA Part 108 expand aerial coverage over time (upside).", confidence: "moderate" },
];

const HOOK = {
  primary: { title: "Land: 'Get your money back'", detail: "Reimbursement + regulatory evidence automation. Hard dollars (FEMA ≥75% federal share), low adoption risk (documentation, not safety-critical autonomy), recurring per declared event, and it seeds the proprietary outcome-linked dataset that becomes the moat." },
  expansion: { title: "Expand: 'Restore faster / fewer truck rolls'", detail: "Triage + dispatch — a bigger prize but harder to prove and directly contested by Itron/Urbint and AiDash. Earn the right to it with the reimbursement win first." },
};

/* --------------------------------------------------------------------------
 * Break-in + before/after user journey
 * ------------------------------------------------------------------------ */
const JOURNEY = {
  breakin: [
    "Pre-season: sign an MOU with one statewide co-op association / mutual-aid group / storm-restoration contractor (not 830 cold calls).",
    "Offer a near-zero-friction 'storm-surge' engagement: on the next declared event, deploy to produce the FEMA-ready evidence packet + a live damage map, priced fixed-fee on value.",
    "The disaster is the demo: deliver a quantified reimbursement + restoration-time result.",
    "Convert the design partner to an annual subscription and spread peer-to-peer along the mutual-aid graph.",
  ],
  before: [
    "Outage map shows affected customers — but not the physical reason.",
    "Crews drive out to inspect, largely blind.",
    "Photos/video scattered across text, email, radio and drone pilots.",
    "Supervisor manually guesses cause and priority.",
    "Wrong crew or wrong equipment sometimes dispatched.",
    "Repairs happen slowly; access (flooded roads, closed bridges) discovered the hard way.",
    "Documentation rebuilt months later for FEMA / insurance / regulators (the 6–18 month slog).",
  ],
  after: [
    "Field kits, truck cams, fixed cams, citizen uploads, satellite and drones feed GroundTruth over Starlink/edge.",
    "AI compares live imagery to the maintained baseline and names asset-level causes ('Feeder 12 down — tree at Pole 12-881').",
    "It flags access: 'Substation B road flooded; bridge on fastest route closed — reroute crew.'",
    "System ranks restoration by customers, critical facilities and access; recommends crew + equipment + route.",
    "Dispatcher clicks 'create restoration plan'; crews confirm or correct findings in the mobile app.",
    "Live map updates as repairs happen.",
    "Evidence package auto-generated for FEMA, insurance, regulator, board and customers.",
    "Every visual prediction is tied to the real repair outcome — the model gets smarter each event.",
  ],
  why: "Cheap, general multimodal cause detection is brand new; the category just proved budgets and exits yet left the integrated loop unowned; connectivity finally works in disasters; and documentation pressure is rising as the public data backbone frays (NOAA database retired May 2025).",
};

/* --------------------------------------------------------------------------
 * Reality check — what has to be true
 * ------------------------------------------------------------------------ */
const REALITY = [
  { point: "Sales cycles are slow even with a channel — expect 6–18 months to a first paid annual contract despite a fast pilot. Plan runway accordingly.", confidence: "moderate-high" },
  { point: "Cold-start integration is real work: you must ingest each utility's GIS/OMS/asset data (Esri/Schneider/Oracle/Survalent/Milsoft/Futura) and build a baseline before storm value appears.", confidence: "high" },
  { point: "CV reliability + liability: false negatives on downed/energized lines are a safety/legal hazard. Position as decision-support with human confirmation, not autonomy, early.", confidence: "high" },
  { point: "Episodic demand vs. SaaS durability: pure event revenue is lumpy and not venture-grade on its own — it must be paired with the year-round revenue engine.", confidence: "high" },
  { point: "Incumbent consolidation + OEM bundling (Itron/AiDash/Neara/eSmart) is real; the window is open but not indefinite.", confidence: "moderate-high" },
  { point: "Federal funding/data volatility: FEMA persists, but GRIP/BRIC appropriations and NOAA data are politically exposed — don't make the model depend on any single program.", confidence: "moderate" },
  { point: "Capital intensity if you do hardware: field kits/cameras/connectivity can be partner-supplied (Starlink, Skydio, fixed-cam vendors) to stay asset-light early.", confidence: "moderate" },
  { point: "Realistic near-term: first 18–24 months = 2–4 design partners, low-to-mid six-figure ARR, and one defensible reimbursement KPI — not a fast march to $100M.", confidence: "moderate" },
];

/* --------------------------------------------------------------------------
 * Revenue engine — recurring (off-season) vs event
 * ------------------------------------------------------------------------ */
const REVENUE = {
  thesis: "Storm response is the wedge and the differentiator, but recurring ARR comes from always-on work that is a byproduct of the same product: to detect what changed in a storm you must maintain the baseline year-round. That baseline maintenance is the durable business.",
  recurring: [
    "Baseline build + continuous refresh (the system of record for physical reality).",
    "Routine grid/asset inspection triage (the eSmart/Buzz budget).",
    "Vegetation encroachment monitoring (the AiDash budget).",
    "Wildfire-risk + substation 24/7 monitoring (fixed cameras).",
    "Asset-health scoring + 'Asset Memory' predictive failure.",
    "Reliability analytics (SAIDI/CAIDI) + annual NERC/state filing automation.",
  ],
  event: [
    "High-value storm-mode activation (per-event or burst pricing) on top of the subscription.",
    "Insurance-side success fees (allowed on private claims).",
    "Annual 'resilience & recovery' retainer that converts episodic wins to recurring spend.",
  ],
  feeNote: "Fee placement matters: success/contingency fees can only live on the private insurance side. FEMA work must be billed fixed-price or time-and-materials — contingency fees are unallowable and cost-plus-percentage-of-cost is prohibited under 2 CFR 200.323(d). The 'recover more, faster' ROI is the sales argument, not the contract structure.",
  // Target steady-state revenue mix (%) once scaled
  mix: { labels: ["Recurring subscription", "Event surge", "Services / forward-deployed", "Data + insurance", "Hardware pass-through"], pct: [55, 20, 12, 8, 5] },
};

/* --------------------------------------------------------------------------
 * Hypergrowth path — $10M Y1 -> $100M Y2 (the 10x engine)
 * ------------------------------------------------------------------------ */
const HYPER = {
  premise: "Pure organic product-led SaaS will not 10x to $100M in Year 2 — utility sales cycles forbid it. The credible mechanism is services/outcome-led GTM + an inorganic roll-up, then conversion to software margin (Palantir forward-deployed meets PE-roll-up-plus-AI). Capital is assumed available. This is execution- and capital-intensive, not a base case — but it is real.",
  architecture: [
    "Fixed-price storm-surge engagements (damage assessment + evidence packets + live map) — FEMA-compliant, billable per active event.",
    "Forward-deployed services that displace labor-heavy disaster-recovery consulting (ICF/Hagerty/Tidal Basin-style work) — a fragmented multi-billion-dollar pool (US disaster-management market ≈$46.67B in 2025).",
    "Annual subscriptions (baseline + routine inspection/vegetation/monitoring) attaching during and after each engagement.",
    "Insurance-side success fees (allowed; not FEMA).",
    "Hardware / Starlink pass-through.",
  ],
  engines: [
    { name: "Engine A — Organic active-season blitz", detail: "Sign 1–2 channel/framework deals pre-season (statewide association, G&T, large restoration contractor, or a state EM agency) that funnel many accounts at once; staff with forward-deployed teams; bill fixed-fee per event. ~12–25 utility/gov engagements at ~$300k–$1.5M ≈ $5–20M gross in Y1 — timing-dependent on an active hurricane/wildfire season." },
    { name: "Engine B — Inorganic roll-up", detail: "Acquire one or more storm-services / FEMA grant-management / aerial-inspection books of business (buy revenue + relationships + backlog), then transform margins with the AI product. This is the realistic spine of the 10x-to-$100M, funded by a large Series A/B." },
  ],
  capital: [
    { stage: "Seed", use: "Fund forward-deployed teams + first storm season + MVP (assessment + evidence packet). Build a roll-up target list." },
    { stage: "Series A (around/after first season)", use: "Fund the roll-up + national channel expansion + productization to cut the services ratio." },
    { stage: "Series B", use: "Scale subscriptions, integrate acquisitions, expand hazards/geographies." },
  ],
  quarters: [
    { q: "Q1", actions: "Sign channel/framework + 1 design partner; build MVP; assemble roll-up target list." },
    { q: "Q2", actions: "Pre-position kits; close first surge contracts ahead of season; first acquisition LOI." },
    { q: "Q3", actions: "Active-season blitz — maximize concurrent engagements (forward-deployed capacity is the bottleneck); close acquisition." },
    { q: "Q4", actions: "Convert engagements to subscriptions; book framework ARR; raise Series A." },
  ],
  indicators: [
    "≥1–2 pre-season framework/channel deals signed that funnel many accounts.",
    "Gross bookings per declared event; max concurrent engagements staffable.",
    "Services→software ratio trending down; NRR >130% as subscriptions attach.",
    "≥1 acquisition LOI by mid-Year-1.",
  ],
  kill: "If no framework/channel deal closes pre-season and no acquisition is sourced, the $10M/$100M timeline is not real — re-plan to a $100M-in-3-4-years organic path.",
  // Illustrative Y1 revenue-mix waterfall to ~$10M ($000s)
  y1mix: { labels: ["Surge engagements", "Forward-deployed services", "Acquired book (partial yr)", "Subscriptions (ramp)", "Insurance + hardware"], values: [3500, 2500, 2500, 1000, 500] },
  confidence: "$10M Y1 = moderate-low and season/channel-timing-dependent. $100M Y2 = low and requires inorganic acceleration + large raises.",
};

/* --------------------------------------------------------------------------
 * Founder playbooks
 * ------------------------------------------------------------------------ */
const PLAYBOOKS = [
  { founder: "Peter Thiel", lens: "Monopoly · secret · last mover",
    points: [
      "The secret: the value isn't the CV (commoditizing) — it's the closed outcome loop + reimbursement workflow lock-in, now buildable because multimodal models made open-ended scene understanding cheap.",
      "Monopolize a tiny niche first: storm + FEMA evidence for co-ops in 1–2 disaster-prone states.",
      "Build a data network effect (predictions ↔ repair outcomes) no incumbent has, because none closes the loop.",
      "Be the last mover: become the system of record for physical-infrastructure truth.",
      "10x test: an 18-month manual reimbursement process compressed to days.",
    ] },
  { founder: "Jeff Bezos", lens: "Work backwards · customer obsession · flywheel",
    points: [
      "Write the PR/FAQ first: 'Co-op X recovered 100% of eligible FEMA dollars in 30 days and cut restoration time X%.'",
      "Customers: the dispatcher and the co-op CFO — obsess over both.",
      "Flywheel: more events documented → better cause models → faster restoration + bigger reimbursements → more utilities → more data.",
      "Two-pizza teams; pick a durable need (storms recur; FEMA persists even as NOAA data frays).",
      "Regret-minimization: the consolidation window (Itron buying Urbint) is open now — move.",
    ] },
  { founder: "Nikolay Storonsky", lens: "Velocity · aggression · metrics",
    points: [
      "Ship weekly; ruthless KPI culture; instrument everything.",
      "Land-and-expand inside co-op networks for low CAC.",
      "Widen the product surface fast: storm → inspection → vegetation → wildfire → insurance data.",
      "Capture regulatory/funding tailwinds (DOE GRIP, FEMA BRIC/HMGP) as a wedge.",
      "Blitzscale + roll up to grab share before Itron/AiDash/Neara close the category.",
    ] },
];

/* --------------------------------------------------------------------------
 * Fastest traction (sequenced)
 * ------------------------------------------------------------------------ */
const TRACTION = [
  { step: "Sell an outcome during the next disaster, not a platform", detail: "'Storm-surge' engagements: deploy during a declared event, deliver a FEMA-ready evidence packet, price on value. The disaster is the demo — fastest proof + reference logo." },
  { step: "Channel for low CAC", detail: "Mutual-aid networks + statewide co-op associations + G&T co-ops + storm-restoration contractors. One tool that rides the mutual-aid graph spreads peer-to-peer." },
  { step: "Buyer sequence", detail: "Land with the CFO / regulatory / reimbursement buyer (hard ROI, low risk) → expand to ops/dispatch." },
  { step: "Fund from funded budgets", detail: "Make the software eligible inside GRIP/DOE resilience grants and FEMA BRIC/HMGP so it's not a net-new line item." },
  { step: "Geographic wedge", detail: "Dominate 1–2 disaster-prone, co-op-dense states; expand outward along mutual-aid ties." },
  { step: "Design partners", detail: "1 Gulf/SE hurricane co-op (via a statewide assoc), 1 Midwest ice-storm/derecho co-op, 1 municipal utility, 1 storm-restoration contractor." },
  { step: "Instrument the moat from day one", detail: "Tie every prediction to a confirmed repair outcome — that dataset is the durable advantage." },
];

/* --------------------------------------------------------------------------
 * Buyers & budgets + funding sources (money flow)
 * ------------------------------------------------------------------------ */
const BUYERS = {
  owners: [
    { role: "VP Operations / Storm Director", cares: "Restoration time, crew utilization, truck rolls, safety.", budget: "Operations / storm reserve." },
    { role: "CFO / Finance", cares: "Storm cost recovery, FEMA/insurance dollars recovered, rate-case support.", budget: "Owns the reimbursement upside — the easiest 'yes'." },
    { role: "Regulatory / Rates", cares: "PUC reporting, reliability metrics, prudency of storm spend.", budget: "Compliance budget." },
    { role: "GIS / Engineering", cares: "Asset records, baseline accuracy, integration.", budget: "IT/OT + capital planning." },
    { role: "Safety", cares: "Crew exposure to downed lines / unsafe sites.", budget: "Safety / EHS." },
  ],
  funding: [
    { src: "Ratepayer rates + storm reserves / securitization", note: "How utilities normally fund restoration and recover prudent storm costs." },
    { src: "FEMA Public Assistance (≥75%, Category F)", note: "Reimburses eligible co-ops/munis for declared disasters — documentation is the bottleneck." },
    { src: "DOE GRIP + FEMA BRIC/HMGP resilience grants", note: "Capex/resilience funding the software can be made eligible inside." },
    { src: "Private insurance claims", note: "The only place success/contingency fees are allowed." },
  ],
};

/* --------------------------------------------------------------------------
 * Expansion ladder
 * ------------------------------------------------------------------------ */
const LADDER = [
  { tier: "$0 → $100M", label: "Core — US electric", confidence: "moderate-high (aggressive timing)",
    desc: "Storm response + reimbursement + routine inspection/vegetation/asset-health for co-ops, munis, regional utilities. Recurring ARR + event surge + services." },
  { tier: "$1B", label: "Own the electric grid lifecycle, go wide on hazards/geos", confidence: "moderate",
    desc: "All IOUs; full all-hazard coverage (flood/fire/ice/wind); expand to gas + water utilities; the utility 'physical world model'; international (Australia, Canada, EU)." },
  { tier: "$10B", label: "Live truth layer for all physical infrastructure + data + marketplace", confidence: "low",
    desc: "Telecom/fiber, rail, roads/DOTs, pipelines, ports, airports, water; an insurance/reinsurance risk-data layer; a contractor/crew/equipment marketplace (take-rate); government/FEMA/defense. Mix shifts to SaaS + data licensing + transactional." },
  { tier: "$30B", label: "National/global physical-risk operating system", confidence: "low / speculative",
    desc: "The system of record that prices physical risk and feeds insurance, reinsurance, capital markets (CAT bonds), real estate and mortgage/credit risk (à la ICEYE's banking play); powers autonomous inspection/robotics; the default OS for physical-world emergencies. The prize, not the plan." },
];

/* --------------------------------------------------------------------------
 * Risks & kill-criteria
 * ------------------------------------------------------------------------ */
const RISKS = [
  { name: "Incumbent closes the loop first", severity: "Critical",
    detail: "Itron (Urbint+Sentient), AiDash (strategics) or Neara extends into the integrated live-event + reimbursement loop before you have logos and data.",
    kill: "If a funded incumbent ships an outcome-linked reimbursement product and signs your target channel, the differentiation collapses — pivot or sell." },
  { name: "Episodic revenue never becomes durable ARR", severity: "Critical",
    detail: "Storm demand is lumpy; if the year-round inspection/vegetation product doesn't win budget, the company is a consultancy, not a SaaS.",
    kill: "If <50% of revenue is recurring by end of Y2, the model is broken." },
  { name: "CV/safety liability event", severity: "High",
    detail: "A false negative on a downed/energized line tied to your output creates legal exposure and kills trust.",
    kill: "Any safety incident attributable to over-trusting automation without human confirmation." },
  { name: "Cold-start integration too slow", severity: "High",
    detail: "Per-customer GIS/OMS/asset onboarding takes too long to deliver storm value in the first season.",
    kill: "If baseline onboarding routinely exceeds one storm-season lead time, the wedge timing fails." },
  { name: "FEMA fee/compliance misstep", severity: "Medium",
    detail: "Mis-structuring fees (e.g., contingency on FEMA work) triggers OIG clawbacks for the customer and reputational damage.",
    kill: "Any customer disallowance traced to GroundTruth's contract structure." },
  { name: "Federal funding/data retrenchment", severity: "Medium",
    detail: "GRIP/BRIC cuts or further NOAA/FEMA changes reduce grant-funded budget appetite.",
    kill: "If grant-funded pipeline evaporates and no rate-base/insurance path replaces it." },
];



/* --------------------------------------------------------------------------
 * Private-sector expansion: asset owners, insurers, contractors, logistics
 * ------------------------------------------------------------------------ */
const PRIVATE_MARKETS = {
  thesis: "Utilities are the clean wedge because the assets are physical, distributed, regulated and disaster-exposed. But the same operating problem exists across private infrastructure: a storm/flood/fire/heat event hits; leaders do not know what physically broke, what is accessible, which vendor/crew should go first, what evidence supports insurance/business-interruption claims, and how to prevent recurrence. Private markets can buy faster than utilities when the product is framed as downtime reduction, claim acceleration and resilience ROI.",
  segments: [
    { name: "Property restoration & disaster-recovery contractors", buyers: "CEO/COO, dispatch, large-loss manager, carrier relations", pain: "Scattered site photos, manual estimates, slow scoping, labor allocation, carrier documentation, surge capacity.", hook: "AI damage scoping + evidence packets + crew/vendor dispatch for large-loss events.", whyFast: "They already sell into disasters; software can make every estimator/PM more productive; fragmented market suited to channel or roll-up.", acv: "$50k-$500k+ per platform; event usage on top", confidence: "high" },
    { name: "Insurers, reinsurers, TPAs & brokers", buyers: "Claims, CAT response, underwriting, risk engineering, reinsurance analytics", pain: "Slow/contested claims, uncertain ground truth, leakage, fraud, reserve uncertainty, poor post-event visibility.", hook: "Verified damage evidence + live claims triage + risk/change-detection data.", whyFast: "Clear dollar value in reducing loss-adjustment expense and claim cycle time; can buy data/API before full workflow.", acv: "$250k-$5M+ data/API + enterprise workflow", confidence: "high" },
    { name: "Telecom & broadband operators", buyers: "Network operations, field ops, emergency response, regulatory/public safety", pain: "Cell sites/fiber damaged by wind/fire/flood/theft; access blocked; temporary assets need placement; FCC/DIRS reporting.", hook: "Network damage map + access intelligence + SatCOW/COW placement + evidence for insurance/regulators.", whyFast: "Private operators have large NOC/field budgets and measurable service-restoration KPIs.", acv: "$500k-$5M+ for major carriers; lower for regional broadband", confidence: "moderate-high" },
    { name: "Freight railroads", buyers: "Network operations, engineering, maintenance-of-way, dispatch, risk", pain: "Flood washouts, heat buckling, wildfire, bridge/ballast damage, blocked routes and supply-chain knock-on effects.", hook: "Right-of-way damage intelligence + bridge/track/access triage + reroute evidence.", whyFast: "Railroads own the network and already spend billions on resilience; fewer large buyers but very high ACV.", acv: "$1M-$10M+ with long enterprise sales", confidence: "moderate" },
    { name: "Ports, terminals & logistics parks", buyers: "Port authority ops, terminal operators, drayage/logistics, risk managers", pain: "Hurricane/flood closures, power loss, damaged cranes/yards/roads/rail connectors, container dwell spikes.", hook: "Port/yard live damage + access map + recovery sequencing + claims/proof for tenants and insurers.", whyFast: "Ports/terminals are concentrated high-value nodes; private terminal operators can move faster than public authorities.", acv: "$250k-$3M+ per port/terminal network", confidence: "moderate" },
    { name: "Pipelines, midstream & energy assets", buyers: "Operations, integrity management, EHS, emergency response, insurance/risk", pain: "Flood, wildfire, subsidence, landslide and storm exposure across long linear assets; one segment can halt a system.", hook: "Corridor change detection + access/repair triage + incident evidence for regulators/insurers.", whyFast: "High asset value and downtime cost, but regulated/safety-critical workflows require careful integration.", acv: "$500k-$5M+ per operator/network", confidence: "moderate" },
    { name: "Data centers & critical digital infrastructure", buyers: "Site ops, facilities, risk, energy/procurement, insurers", pain: "Power outages, cooling failures, flooding/wildfire access, grid disruption, customer SLA exposure.", hook: "Facility/access/power-risk ground truth + vendor dispatch + insurance/SLA evidence.", whyFast: "Downtime is extremely expensive; buyers already fund resilience and monitoring.", acv: "$250k-$2M+ per operator/portfolio", confidence: "moderate" },
    { name: "Manufacturing & industrial facilities", buyers: "Plant manager, reliability, risk, finance, insurance", pain: "Flood/fire/power disruptions stop production; BI/CBI claims require detailed evidence; vendors must be dispatched fast.", hook: "Plant damage/access map + business-interruption evidence + recovery workplan.", whyFast: "High downtime cost, but facility-by-facility sales can fragment unless sold through insurers/brokers/industrial service firms.", acv: "$50k-$1M+ depending on portfolio", confidence: "moderate" },
    { name: "Commercial real estate, REITs & large landlords", buyers: "Asset management, property ops, risk/insurance, lenders", pain: "Insurance premiums, asset-value discounts, tenant disruption, roof/flood/fire damage, lender reporting.", hook: "Portfolio risk baseline + post-event damage evidence + capex prioritization for resilience.", whyFast: "Clear insurance/NOI/valuation pain; strong fit for portfolio dashboards and insurer partnerships.", acv: "$100k-$2M+ per portfolio", confidence: "moderate-high" },
    { name: "Engineering, EPC & resilience consultants", buyers: "Practice leads, disaster recovery, asset management, infrastructure advisory", pain: "Manual assessments, report drafting, field-photo chaos, shortage of skilled inspectors.", hook: "AI-native assessment/reporting workbench that multiplies consulting delivery capacity.", whyFast: "They can be channel partners, service buyers, or roll-up targets; fastest route to revenue and relationships.", acv: "$100k-$1M+ plus services margin", confidence: "high" },
  ],
  priority: [
    { rank: 1, target: "Restoration contractors + disaster-recovery consultants", reason: "Fastest revenue and distribution. They already show up after every event, already have customer relationships, and the product directly increases throughput. Also supports the roll-up strategy." },
    { rank: 2, target: "Insurers/TPAs/brokers", reason: "Best data/API buyer and best private payer. They care about claim cycle time, leakage, fraud, reserve accuracy and risk selection." },
    { rank: 3, target: "Telecom and data centers", reason: "Private operators with high downtime cost, centralized ops, and clear restoration KPIs. Easier to quantify than broad CRE." },
    { rank: 4, target: "Rail/ports/pipelines", reason: "Huge ACV and strategic importance, but fewer buyers and longer enterprise/safety/regulatory cycles." },
    { rank: 5, target: "CRE/REITs/industrial portfolios", reason: "Large market and insurance pain, but product may look like risk analytics unless paired with post-event recovery workflow." },
  ],
};

const DISASTER_MARKET_MAP = {
  thesis: "Annual disaster and physical-disruption spend is not one budget. It is a stack: direct asset damage, insured losses, business interruption, customer outage cost, emergency response/restoration labor, resilience capex, public grants and regulatory compliance. In aggregate it is comfortably multi-hundred-billion dollars annually in the US in bad years, and trillion-dollar-plus globally when supply-chain, infrastructure capex and resilience spend are included. The missing layer is auditable, asset-level ground truth that tells every payer what happened, what to fix first, what it costs, and what evidence supports payment.",
  hazards: [
    { hazard: "Severe convective storms (hail/tornado/wind)", annual: "$50B+ global insured losses in 2025; US frequently dominant", payers: "Insurers/reinsurers, property owners, utilities, restoration contractors", opportunity: "Roof/asset damage detection, claims triage, crew routing, evidence packs", confidence: "high" },
    { hazard: "Wildfire", annual: "$40B insured losses from 2025 LA wildfires alone (Swiss Re); property/capital loss estimates can be much higher", payers: "Insurers, homeowners/CRE, utilities, telecom, governments", opportunity: "Pre/post fire damage truth, access routes, utility/telecom restoration, defensible claims", confidence: "high" },
    { hazard: "Flood / storm surge / hurricanes", annual: "US billion-dollar disasters averaged $149.3B/yr (2020-2024); ports and coastal energy/telecom assets exposed", payers: "FEMA, NFIP/private insurers, ports, utilities, industrials, CRE owners", opportunity: "Flood extent + asset damage + ingress/egress + reimbursement evidence", confidence: "high" },
    { hazard: "Power outages", annual: "$121B US customer cost in 2024 major outages; $67B/yr average 2018-2024 (ORNL)", payers: "Commercial/industrial customers, utilities, backup-power vendors, insurers", opportunity: "Outage cause, facility impact, generator/vendor dispatch, BI evidence", confidence: "high" },
    { hazard: "Extreme heat / freeze / winter storms", annual: "Costs embedded in outage, rail, pipeline, property and industrial losses; no single clean annual number", payers: "Utilities, railroads, pipelines, industrials, insurers", opportunity: "Asset stress detection, access conditions, freeze/heat-risk baselines", confidence: "moderate" },
    { hazard: "Supply-chain disruption", annual: "~$184B annual business losses cited for 2025; climate/weather a major driver", payers: "Shippers, manufacturers, retailers, logistics firms, insurers", opportunity: "Physical disruption map across suppliers, ports, rail, warehouses, roads", confidence: "moderate" },
  ],
  payers: [
    { payer: "Insurers / reinsurers / TPAs", paysFor: "Property, BI/CBI, CAT claims, loss adjustment, risk data", budgetOwner: "Claims, underwriting, CAT response, reinsurance analytics", buyTrigger: "Claims surge, leakage/fraud, reserve uncertainty, portfolio-risk repricing" },
    { payer: "Private asset owners", paysFor: "Repair, downtime, vendor dispatch, resilience capex, insurance deductibles", budgetOwner: "COO, facilities, risk, finance", buyTrigger: "Downtime cost, SLA/customer impact, insurance premium pressure" },
    { payer: "Utilities / munis / co-ops", paysFor: "Restoration, crew/equipment, FEMA documentation, reliability reporting", budgetOwner: "Ops, CFO, regulatory", buyTrigger: "Declared disaster, SAIDI/CAIDI, FEMA reimbursement, rate-case prudency" },
    { payer: "Federal/state/local government", paysFor: "FEMA PA, BRIC/HMGP, DOT/DHS port grants, public infrastructure repair", budgetOwner: "FEMA/state EM/DOT/municipal agencies", buyTrigger: "Declared disaster, resilience grants, public safety" },
    { payer: "Restoration/EPC/service firms", paysFor: "Labor, assessments, reports, project management, surge staffing", budgetOwner: "COO, practice lead, dispatch", buyTrigger: "Event surge, margin pressure, shortage of estimators/inspectors" },
    { payer: "Capital markets / lenders", paysFor: "Risk diligence, asset-value protection, loan covenants, insurance availability", budgetOwner: "Risk, credit, asset management", buyTrigger: "Insurance repricing, stranded-asset risk, portfolio acquisition/refinancing" },
  ],
  spendAnchors: [
    { label: "Global natural catastrophe economic losses", value: "$220B", note: "Swiss Re estimate for 2025; insured losses $107B" },
    { label: "US billion-dollar weather/climate disasters", value: "$149.3B/yr", note: "NOAA/NCEI average 2020-2024; 2025 Climate Central estimate $115B" },
    { label: "US major power outage customer cost", value: "$121B", note: "ORNL estimate for 2024; $67B/yr average 2018-2024" },
    { label: "Global disaster restoration services", value: "$43B-$45B", note: "Mordor 2025-2026; low market concentration" },
    { label: "US damage restoration services (narrow)", value: "$7.1B", note: "IBISWorld / restoration-industry reports; broader property restoration estimates are much larger" },
    { label: "US freight rail resilience investment", value: "~$23B/yr", note: "AAR: annual investment to fortify network against climate-related disasters" },
    { label: "US port trade exposure", value: "$2.28T", note: "GAO: value of international trade handled by 300+ US water-side ports (2022)" },
    { label: "North American midstream infrastructure need", value: "$40B-$48B/yr", note: "INGAA Foundation report through 2052; resilience is one driver, not all spend" },
    { label: "REIT severe-event revenue at risk", value: "~$43B", note: "First Street analysis: 1-in-100-year event losses across 65 REITs" },
  ],
};

const PRIVATE_GTM = {
  wedge: "Run two parallel go-to-market lanes: (1) utilities/co-ops for the most coherent product narrative and FEMA wedge; (2) private restoration/claims/asset-owner markets for faster revenue, richer private data, and less political procurement. The product surface is the same: live damage truth + recovery workplan + evidence package.",
  motions: [
    { motion: "Partner/channel: restoration + disaster-recovery firms", steps: ["Sell an AI assessment/reporting workbench to large-loss teams.", "Offer surge-mode pricing during CAT events.", "Use partners' customers to collect cross-sector outcome data.", "Acquire/roll up smaller firms once the workflow improves margins."], why: "Fastest path to private revenue because they already monetize disasters and are labor-constrained." },
    { motion: "Data/API: insurers, TPAs, reinsurers, brokers", steps: ["Start with event-specific damage feeds and evidence APIs.", "Integrate into claims triage and reserve workflows.", "Sell portfolio risk/change-detection subscriptions between events.", "Expand to underwriting and reinsurance analytics."], why: "Best payer for verified truth. They can buy data before adopting a full workflow." },
    { motion: "Enterprise: telecom, data centers, rail/ports/pipelines", steps: ["Pick one vertical with a lighthouse logo and high downtime cost.", "Baseline assets and access routes before season.", "Run storm/flood/fire tabletop + live event activation.", "Convert to annual resilience/recovery subscription."], why: "High ACV, operational urgency and private budgets; sales are fewer but deeper." },
    { motion: "Portfolio: CRE/REITs/industrial", steps: ["Sell portfolio baseline + insurance documentation + post-event triage.", "Partner with brokers/lenders to reach many owners.", "Attach resilience capex prioritization.", "Feed evidence into BI/CBI claims."], why: "Huge surface area but needs channel leverage to avoid fragmented property-by-property sales." },
  ],
  privateJourney: {
    before: ["Storm/flood/fire hits a portfolio site.", "Ops does not know which buildings/assets are damaged or accessible.", "Photos arrive from property managers, contractors, guards and drones in separate threads.", "Claims teams and restoration contractors duplicate site visits.", "Business-interruption evidence is reconstructed weeks later.", "Vendors are dispatched based on phone calls, not verified severity."],
    after: ["GroundTruth shows each affected site, access route and suspected damage type.", "AI organizes photos/video/satellite/fixed-camera feeds into a verified evidence graph.", "System prioritizes sites by downtime, revenue, safety and customer/SLA impact.", "Restoration/EPC vendors receive scoped work packets with photos, location, parts and access notes.", "Insurance/BI/CBI claim packets are generated as the work happens.", "The asset baseline updates for the next event and for insurance renewal negotiations."],
  },
};

/* --------------------------------------------------------------------------
 * Sources (clickable bibliography)
 * ------------------------------------------------------------------------ */
const SOURCES = [
  { group: "Market & people served", label: "NRECA — Electric Co-op Facts & Figures (42M people, 56% landmass, 830 distribution co-ops)", url: "https://www.electric.coop/electric-cooperative-fact-sheet" },
  { group: "Market & people served", label: "APPA — Public power Stats & Facts (1,998 utilities, 55M+ people)", url: "https://www.publicpower.org/public-power/stats-and-facts" },
  { group: "Market & people served", label: "APPA — Public power advocacy by the numbers", url: "https://www.publicpower.org/periodical/article/public-power-advocacy-numbers" },
  { group: "Disaster cost & infrastructure", label: "NOAA/NCEI — Billion-Dollar Weather & Climate Disasters (archived; retired May 2025)", url: "https://www.ncei.noaa.gov/access/billions/" },
  { group: "Disaster cost & infrastructure", label: "Climate Central — $149B/yr avg 2020–2024 (citing NOAA)", url: "https://www.climatecentral.org/climate-matters/billion-dollar-disasters-2025" },
  { group: "Disaster cost & infrastructure", label: "CBS News — NOAA ending its billion-dollar disasters database", url: "https://www.cbsnews.com/news/noaa-ending-billion-dollar-disasters-database/" },
  { group: "Disaster cost & infrastructure", label: "ASCE — 2025 Report Card (overall C, Energy D+, $3.7T gap)", url: "https://www.asce.org/publications-and-news/civil-engineering-source/society-news/article/2025/03/25/asce-report-card-gives-us-infrastructure-highest-ever-c-grade" },
  { group: "Reimbursement & FEMA rules", label: "FEMA — Public Assistance fact sheet (≥75% cost share, Category F)", url: "https://www.fema.gov/sites/default/files/2020-07/fema_public-assistance-fact-sheet_10-2019.pdf" },
  { group: "Reimbursement & FEMA rules", label: "NRECA — Co-ops eligible for FEMA PA reimbursement", url: "https://www.electric.coop/wp-content/uploads/2016/03/fast_fact_fema_june_14_2016_update_final.pdf" },
  { group: "Reimbursement & FEMA rules", label: "FEMA — PA Management Costs Interim Policy (7%/5% caps)", url: "https://www.fema.gov/sites/default/files/2020-05/PA_Management_Costs_Interim_Policy_11-15-201830.pdf" },
  { group: "Reimbursement & FEMA rules", label: "FEMA — Public Assistance contracting requirements (no cost-plus-%-of-cost)", url: "https://www.fema.gov/press-release/20250121/public-assistance-contracting-requirements-checklist" },
  { group: "Drones / connectivity", label: "FAA — Beyond Visual Line of Sight (BVLOS) / Part 108", url: "https://www.faa.gov/newsroom/beyond-visual-line-sight-bvlos" },
  { group: "Competitors & consolidation", label: "Itron 10-K — Urbint acquisition ~$330.7M (Nov 2025)", url: "https://www.sec.gov/Archives/edgar/data/780571/000078057126000033/R26.htm" },
  { group: "Competitors & consolidation", label: "Urbint — Acquires WRM Software (Storm Manager)", url: "https://www.urbint.com/news/urbint-acquires-wrm-software-to-expand-utility-risk-offering-into-storm-response" },
  { group: "Competitors & consolidation", label: "AiDash — Series C $58.5M (strategics Duke/National Grid/Edison/Schneider/Shell)", url: "https://www.businesswire.com/news/home/20240430874835/en/AiDash-Closes-its-Oversubscribed-Series-C-Funding-Round-at-%2458.5-Million" },
  { group: "Competitors & consolidation", label: "Neara — Solutions (physics digital twin + re-energization)", url: "https://neara.com/solutions" },
  { group: "Competitors & consolidation", label: "ICEYE — Expands disaster response to utility & energy (May 2025)", url: "https://www.iceye.com/newsroom/press-releases/iceye-expands-disaster-response-solutions-to-support-utility-and-energy-sectors" },
  { group: "Competitors & consolidation", label: "Buzz Solutions — PowerAI momentum (Dominion, NYPA, Ameren, AEP)", url: "https://www.buzzsolutions.co/" },
  { group: "Competitors & consolidation", label: "eSmart Systems — Grid Vision / AI Studio", url: "https://www.esmartsystems.com/" },
  { group: "Fast-revenue pool", label: "ICF — 2025 10-K (~$1.87B revenue; energy/infra/disaster recovery)", url: "https://www.stocktitan.net/sec-filings/ICFI/10-k-icf-international-inc-files-annual-report-e82624e0f817.html" },
  { group: "Private-market disaster spend", label: "Swiss Re — 2025 nat-cat economic losses $220B, insured losses $107B", url: "https://www.swissre.com/institute/research/sigma-research/sigma-2026-01-natcat-2025-wildfire-storm-risk/global-natcat-losses-2025.html" },
  { group: "Private-market disaster spend", label: "ORNL — US major power outages cost $121B in 2024", url: "https://www.ornl.gov/news/analysis-shows-power-outages-cost-us-electricity-customers-billions" },
  { group: "Private-market disaster spend", label: "Mordor — Disaster restoration services market $43B-$45B (2025-2026)", url: "https://www.mordorintelligence.com/industry-reports/disaster-restoration-services-market" },
  { group: "Private-market disaster spend", label: "IBISWorld — US damage restoration services market $7.1B", url: "https://www.ibisworld.com/united-states/industry/damage-restoration-services/6278/" },
  { group: "Private infrastructure", label: "AAR — Freight rail invests ~$23B annually in climate resilience", url: "https://www.aar.org/issue/freight-rail-climate-change/" },
  { group: "Private infrastructure", label: "GAO — US ports handle $2.28T of trade and face disaster-resilience gaps", url: "https://www.gao.gov/products/gao-25-107159" },
  { group: "Private infrastructure", label: "INGAA — $1T+ North American midstream infrastructure need, $40B-$48B/yr", url: "https://ingaa.org/stay-current/what-they-are-saying-ingaa-foundation-midstream-infrastructure-report/" },
  { group: "Private infrastructure", label: "AT&T — Hurricane Milton network disaster recovery response", url: "https://about.att.com/pages/disaster-recovery/2024/storm-milton" },
  { group: "Private infrastructure", label: "Bisnow / First Street — CRE values 16.9% lower in higher-risk markets; insurance costs +154%", url: "https://www.bisnow.com/national/news/capital-markets/climate-risk-us-commercial-property-values-study-134469" },
  { group: "Private infrastructure", label: "HousingWire / First Street — REIT 1-in-100 event revenue losses near $43B", url: "https://www.housingwire.com/articles/climate-risk-reit-revenue-first-street/" },
  { group: "Private-market GTM", label: "ABA — Business interruption claim checklist and evidence needs", url: "https://www.americanbar.org/groups/gpsolo/resources/ereport/archive/filing-business-interruption-claim-checklist/" },
  { group: "Private-market GTM", label: "NetSuite — Supply chain disruptions cost businesses ~$184B annually", url: "https://www.netsuite.com/portal/resource/articles/inventory-management/supply-chain-risks.shtml" },
];
