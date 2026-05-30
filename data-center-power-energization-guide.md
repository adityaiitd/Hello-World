# Powering the AI Build-Out: A Deep-Dive Guide to Data Center Power & Energization Companies (US & Global)

> **Purpose.** This document is both (1) a **research plan / playbook** for conducting a rigorous deep dive into the companies that energize data centers, and (2) a **landscape guide** that maps the demand picture, the technology stack, and the key players that handle end-to-end energy and power needs for data centers in the United States and globally.
>
> **As-of date:** May 2026. Power markets are moving fast; treat every figure as a snapshot and re-verify against primary sources (company filings, IEA, EIA, utility IRPs, JLL/CBRE research) before relying on it.

---

## 0. How to Use This Guide

The guide is organized in two layers:

1. **The Deep-Dive Plan (Sections 1–3 + 11–13):** the questions to answer, the framework for segmenting the market, the data sources, and the diligence/scoring methodology.
2. **The Landscape Reference (Sections 4–10):** the demand backdrop, the technology stack, the company taxonomy, named players, deal benchmarks, and regional view.

If you are running this as a project, follow the **8-phase workplan in Section 12** and populate the **templates in Section 13**.

---

## 1. Scope & Definitions

**"End-to-end energy and power" for a data center** spans the full chain from primary energy to the rack. A company can play in one link or integrate several:

| Layer | What it covers | Example question |
|---|---|---|
| **Fuel / primary energy** | Natural gas supply & midstream, uranium/SMR fuel, hydrogen, biogas, solar/wind resource | Who secures and delivers the molecules/electrons? |
| **Generation** | Turbines, engines, fuel cells, reactors, PV, storage | Who builds and owns the kW? |
| **Energization / interconnection** | Grid interconnection, substations, transmission, behind-the-meter (BTM) microgrids | Who gets power *to the fence line* and energized? |
| **Electrical distribution (inside the fence)** | Switchgear, transformers, MV/LV distribution, UPS, busway | Who moves power from the meter to the rack? |
| **Backup & resiliency** | Diesel/gas gensets, BESS, fuel cells in N+1 roles | Who keeps it up when primary fails? |
| **Cooling power & thermal** | Chillers, liquid cooling, heat reuse (energy-adjacent) | Who handles the ~30–40% of load that is cooling? |
| **Operations / EPC / development** | Engineer-procure-construct, O&M, power-as-a-service, project development | Who integrates and de-risks the whole thing? |

**Key term — "Time-to-power":** the elapsed time from a signed deal to energized, usable capacity. In the AI era this has become *the* competitive variable, more important than $/kW for many buyers.

**Key term — "Energization":** the act of bringing a site to live, usable electrical capacity — whether via a utility grid connection, a behind-the-meter generation plant, or a hybrid microgrid.

---

## 2. The Core Questions the Deep Dive Must Answer

Frame the whole effort around these. Each becomes a research workstream.

**Demand side**
1. How big is data center power demand today, and what is the credible range of growth to 2030 and 2035 (US and global)? What are the scenario drivers (AI training vs. inference, efficiency, chip supply, capital)?
2. Where is demand concentrating geographically, and why (power availability, latency, land, incentives, water)?
3. What load *shape* do AI data centers impose (high density, fast ramps, variability), and what does that require of the power system?

**Supply / company side**
4. What is the full value chain, and which companies occupy each link?
5. Who can credibly deliver **end-to-end** ("power-as-a-service" / turnkey energization), versus point solutions?
6. What is the realistic **time-to-power** for each technology, and who is winning on speed?
7. Where are the **bottlenecks** (gas turbines, transformers, switchgear, interconnection queues, skilled labor) and who controls them?
8. What are the business models (own-and-operate IPP, equipment OEM, EPC, PPA off-taker, fuel supplier) and unit economics ($/kW capex, $/MWh delivered, lead times)?

**Strategic**
9. Who are the winners by segment, and what is the competitive moat (technology, manufacturing slots, capital, permits, relationships)?
10. What are the risks (commodity, policy/permitting, technology, counterparty, stranded-asset)?
11. Where are the investment / partnership / M&A opportunities and white spaces?

---

## 3. Market Segmentation Framework

Segment the universe along several axes so you can compare like with like.

- **By value-chain position:** fuel → generation → energization → distribution → backup → EPC/ops.
- **By technology:** grid utility, heavy-duty gas turbine, aeroderivative turbine, reciprocating gas engine, fuel cell (SOFC / linear generator), nuclear (existing fleet, restarts, SMR/microreactor), solar+wind+storage, BESS.
- **By time-to-power tier (critical):**
  - **Tier 1 — Immediate (≈3–12 months):** fuel cells, mobile/rental gensets, reciprocating engines (fast track).
  - **Tier 2 — Medium (12–36 months):** aeroderivatives, recip-engine plants, solar-plus-storage, utility upgrades in fast queues.
  - **Tier 3 — Long (3+ years / 2030+):** heavy-duty gas combined cycle, large transmission builds, SMRs, new nuclear.
- **By ownership model:** hyperscaler self-build; colocation/IPP-owned; utility-owned; third-party power-as-a-service.
- **By geography:** US (and PJM/ERCOT/MISO/SPP/Southeast/West sub-markets) vs. EMEA, APAC, Middle East, LatAm.

---

## 4. The Demand Landscape (the "why now")

### 4.1 Headline numbers
- **Today:** Global data center electricity use was ~**415 TWh in 2024** (~1.5% of global electricity) and rose ~17% to roughly **485 TWh in 2025** (IEA).
- **2030 (IEA Base Case):** ~**945–950 TWh**, roughly **doubling**, ~3% of global electricity. Growth ~**15%/yr**, ~4x faster than total electricity demand.
- **2035 scenarios (IEA):** Base ~1,193 TWh; Lift-Off ~1,637 TWh; High-Efficiency ~1,013 TWh; Headwinds ~942 TWh. Wide cone of uncertainty.
- **Capacity view (JLL):** global data center capacity ~doubles to **~200 GW by 2030**, adding **~97–100 GW** between 2025/26 and 2030 — a ~**14% CAGR**.
- **AI mix:** AI was ~25% of workloads in 2025; could be **~50% by 2030**, with **inference overtaking training around 2027** as the dominant driver.
- **US specificity:** Data centers could account for roughly **half of US power-demand growth** through 2030.

### 4.2 What makes AI load different
- **Rack density:** peak densities now exceed **100 kW/rack**, up from ~20 kW five years ago — driving liquid cooling and new electrical architectures (e.g., higher-voltage DC distribution).
- **Variability:** training and inference create **large, fast power swings**, making **battery storage and fast-ramp generation** important for stability. IEA sees **~20–25 GW of BESS** paired with data centers by 2030.
- **Reliability overbuild:** delivering firm power to variable critical load can require **overbuilding onsite generation by ~30–70%** of demand.

### 4.3 The binding constraint: power, not capital
- **Interconnection queues:** average grid-connection wait in primary US markets now **exceeds ~4 years**; this is the #1 reason capital is migrating to **power-advantaged regions** and to **behind-the-meter** generation.
- Bloom Energy's 2026 Data Center Power Report and JLL both describe a **structural shift**: onsite generation moving from a temporary "bridge" to a **permanent part of long-term power strategy**, and capital concentrating where interconnection is achievable.

> **Deep-dive task:** Build a demand model with explicit scenarios (Base / Lift-Off / Headwinds), and a regional heat map of interconnection wait times and available headroom. Cross-check IEA vs. EIA vs. utility IRPs vs. JLL/CBRE.

---

## 5. The Technology / Energization Stack

Think of it as a **three-tier stack** sorted by time-to-power (the framing used by Rabobank, JLL, and Bloom).

### Tier 1 — Immediate energization (months)
- **Fuel cells (SOFC):** electrochemical, low local emissions/noise → faster air permitting. ~**$3,000–4,000/kW** capex; deployments cited at **~55–90 days**. Leader: **Bloom Energy**. Best where *permitting* (not fuel) is the binding constraint.
- **Linear generators (multi-fuel):** **Mainspring Energy** — near-zero NOx, no after-treatment, runs on gas/biogas/propane/hydrogen, fast start/ramp, factory-built modular.
- **Rental / mobile generation:** bridging power while permanent assets are built.

### Tier 2 — Medium-term backbone (≈12–36 months)
- **Reciprocating gas engines:** ~18-month install timelines, lower upfront capex, good for baseload + backup. OEMs: **Caterpillar, INNIO (Jenbacher), Wärtsilä, Rolls-Royce (mtu), Cummins**.
- **Aeroderivative gas turbines:** faster than heavy-duty, modular/skid-mounted. **Solar Turbines (Caterpillar)**, GE Vernova LM-class, Siemens Energy.
- **Solar + wind + storage:** Amazon leads corporate procurement; pairs with BESS for firming.
- **Distributed natural-gas microgrids (turnkey):** **VoltaGrid**, **ProEnergy**, others — power-as-a-service.

### Tier 3 — Long-horizon firm power (3+ years, 2030+)
- **Heavy-duty gas turbines (H-class):** >600 MW, >65% combined-cycle efficiency. The premium baseload solution — but **sold out through ~2028–2030** (see Section 8). OEMs: **GE Vernova, Siemens Energy, Mitsubishi Heavy Industries (MHI)** (~70%+ of capacity among the three).
- **Nuclear — existing fleet, restarts & uprates:** the fastest *firm carbon-free* route. Restarts (Three Mile Island/Crane, Duane Arnold), uprates, and life extensions via **Constellation, Vistra, Talen, NextEra**.
- **Nuclear — SMR / microreactors:** the long-term prize (firm, zero-carbon, scalable) but **first hyperscaler-procured power is ~2030+**, with most commercialization **early-to-mid 2030s**. Developers: **TerraPower, Oklo, X-energy, Kairos Power, NuScale, Westinghouse, Radiant**.

> **Deep-dive task:** Build a comparison matrix per technology: time-to-power, $/kW capex, $/MWh LCOE, emissions/permitting profile, scalability, fuel-supply risk, TRL/commercial readiness. (Template in Section 13.)

---

## 6. Company Taxonomy — Who Does What

Use this as the master "map of the territory." Named companies are representative, not exhaustive; verify current status.

### 6.1 Grid utilities & regulated power
- **Regulated utilities** (Dominion, AEP, Duke, Southern Co, Georgia Power, PG&E, Xcel, Entergy, NV Energy, AEP Ohio, comparable globally): own transmission/distribution and most interconnections; the default path but slow.
- **Role in deep dive:** interconnection queues, large-load tariffs, IRPs, transmission build plans, "bring-your-own-generation" rules.

### 6.2 Merchant / Independent Power Producers (IPPs)
Most leveraged to the power-supply squeeze; key counterparties for PPAs:
- **Constellation Energy** (~60 GW; largest US nuclear fleet) — TMI/Crane restart for Microsoft; Clinton for Meta.
- **Vistra** (~45 GW) — nuclear + gas; Meta nuclear deals (Perry, Davis-Besse, Beaver Valley).
- **Talen Energy** (~13 GW) — Susquehanna nuclear; Amazon (AWS) PPA (~1.92 GW front-of-meter).
- **NRG Energy** (~28 GW).
- **NextEra Energy** — renewables + nuclear (Duane Arnold restart study with Google).

### 6.3 Gas turbine OEMs (heavy-duty + aeroderivative)
- **GE Vernova**, **Siemens Energy**, **Mitsubishi Heavy Industries (MHI)** — the "big three" (>70% of large-turbine capacity). Massive backlogs (see Section 8).

### 6.4 Gas/recip engine & distributed power OEMs
- **Caterpillar** (incl. **Solar Turbines**), **Cummins**, **INNIO Jenbacher**, **Wärtsilä**, **Rolls-Royce Power Systems (mtu)**.

### 6.5 Onsite / behind-the-meter & power-as-a-service integrators
- **Bloom Energy** (SOFC fuel cells) — Oracle (up to 2.8 GW MSA), Brookfield ($5B partnership), CoreWeave, Nebius.
- **Mainspring Energy** (linear generators).
- **VoltaGrid** (turnkey gas microgrids) — Halliburton JV (Middle East/Eastern Hemisphere), Blackstone+Halliburton $1B equity, ABB, INNIO (1.5 GW), Oracle.
- **ProEnergy**, **Cummins/others** in modular plant solutions.

### 6.6 Nuclear — fleet operators & advanced reactor developers
- **Fleet/restarts/uprates:** Constellation, Vistra, Talen, NextEra, Dominion, TVA, Ontario Power Generation.
- **SMR/advanced:** TerraPower (Natrium), Oklo (Aurora), X-energy (Xe-100), Kairos Power (KP-FHR), NuScale, Westinghouse (AP300/eVinci), Radiant (microreactor), Holtec, Rolls-Royce SMR.

### 6.7 Electrical equipment & "inside-the-fence" power
- **Switchgear / transformers / MV-LV distribution / power management:** **ABB, Schneider Electric, Eaton, Siemens, Vertiv, Hitachi Energy, Mitsubishi Electric.**
- **UPS & critical power:** Vertiv, Schneider, Eaton, ABB.
- **Note:** transformers and switchgear are themselves **supply-constrained** — a major bottleneck.

### 6.8 EPC, development & infrastructure capital
- **EPC / engineering:** Bechtel, Fluor, Kiewit, Burns & McDonnell, Jacobs, Quanta Services (transmission), MasTec.
- **Infrastructure & private capital:** Blackstone, Brookfield, KKR, Global Infrastructure Partners, Energy Capital Partners, plus sovereign/oil-major entrants (Chevron, Halliburton, ExxonMobil exploring power solutions).

### 6.9 Fuel supply & midstream
- **Natural gas / midstream:** Chevron (e.g., West Texas co-located gas+data-center campus with Microsoft/Engine No. 1, ~2,500 MW, ~$7B), Williams, Energy Transfer, Kinder Morgan, EQT.
- **Hydrogen / biogas / uranium fuel suppliers** for the lower-carbon and nuclear paths.

> **Deep-dive task:** For each company, capture: value-chain position(s), technology, time-to-power, capacity/backlog, named data center deals, business model, financials, and moat. (Company profile template in Section 13.)

---

## 7. Benchmark Deals (calibration set)

These anchor "what good looks like" and reveal preferred models. Re-verify each; deal terms evolve.

**Behind-the-meter / onsite (fast energization)**
- **Bloom Energy × Oracle** — up to **2.8 GW** fuel cell MSA; ~1.2 GW contracted; **55-day** delivery record.
- **Bloom Energy × Brookfield** — ~$5B partnership for "AI factory" power.
- **Bloom × CoreWeave** — ~850 MW operational/ramping (one of the largest operational BTM fuel-cell fleets).
- **Bloom × Nebius** — up to $2.6B over a decade; 250 MW guaranteed / 328 MW installed.
- **VoltaGrid × Halliburton** — strategic JV; **400 MW** modular gas for 2028 (Eastern Hemisphere/Middle East); $1B Blackstone+Halliburton equity; 1.5 GW INNIO engine order; $5B financing package; Oracle collaboration.
- **Chevron + Microsoft + Engine No. 1** — co-located gas plant + AI campus, West Texas, ~**2,500 MW**, ~**$7B**.

**Nuclear PPAs / restarts (firm, carbon-free)**
- **Microsoft × Constellation** — Three Mile Island Unit 1 (Crane) restart, **835 MW**, first power ~2027.
- **Amazon (AWS) × Talen** — Susquehanna, ~**1.92 GW**, 17-yr PPA to 2042 (front-of-meter); + **X-energy** SMR (up to 12× Xe-100) and Dominion SMR study.
- **Google × Kairos Power** — first corporate SMR fleet agreement, **50 MW → ~500 MW by ~2035**; first power ~2030. + NextEra Duane Arnold restart study.
- **Meta** — largest cumulative nuclear procurer, **~6.6 GW** across Constellation (Clinton, ~1.1 GW, 20-yr), **Vistra** (Perry/Davis-Besse/Beaver Valley, ~2.2 GW + uprates), **TerraPower** (Natrium, ~690 MWe + rights to ~2.1 GW), **Oklo** (~0.75–1.2 GW).

**Engine / distributed**
- **INNIO Jenbacher × VoltaGrid** — 1.5 GW behind-the-meter engine order.
- **Caterpillar** — agreements with Vertiv and Joule Capital Partners; Solar Turbines expanding capacity ~2.5x.

> **Deep-dive task:** Maintain a living **deal tracker** (buyer, supplier, technology, MW, model BTM/FTM, $/MW if disclosed, first-power date, status). Use it to infer pricing and preferred structures.

---

## 8. Bottlenecks & Supply Constraints (where value & risk concentrate)

1. **Heavy-duty gas turbines — the headline bottleneck.**
   - GE Vernova, Siemens Energy, MHI control **>70%** of large-turbine capacity across a handful of factories.
   - Order books **sold out through ~2028**, with new slots quoted for **2029–2030**; lead times **3–5 years**.
   - **>$400B** of planned gas plants through 2030 are at risk of delay/cancellation for lack of turbine capacity (Bloomberg estimate).
   - Backlogs at records: GE Vernova orderbook ~80 GW (≈50/50 backlog/slot reservations); Siemens Energy record backlog (~€146B); MHI bookings +45% YoY. Data centers ≈ **20–33%** of GE Vernova's reservations.
   - Capacity additions mostly **post-2028** and OEMs are cautious about over-expanding if demand moderates.
2. **Transformers & switchgear** — multi-year lead times; constrains both grid and BTM builds.
3. **Grid interconnection** — >4-year waits in primary markets; transmission permitting/siting.
4. **Skilled labor & EPC capacity** — electricians, gas-plant builders, nuclear-qualified trades.
5. **Fuel logistics** — gas pipeline capacity (basin-specific, e.g., Permian/Texas), midstream relationships.
6. **Nuclear** — NRC licensing timelines; SMR supply chains immature (total SMR capacity before ~2033 likely <2 GW).

> **Strategic read:** Whoever controls a scarce link — turbine slots, transformer capacity, near-term fuel cells, gas+land in the right basin, or an existing nuclear plant — holds the pricing power. The deep dive should explicitly score each player on **bottleneck control**.

---

## 9. Regional Landscape

### 9.1 United States (largest, most contested)
- **PJM (Mid-Atlantic):** Northern Virginia ("Data Center Alley"), nuclear-heavy (Susquehanna, TMI, Clinton-adjacent), tight capacity, high prices.
- **ERCOT (Texas):** fast permitting, abundant gas (Permian associated gas), strong BTM/co-location appetite (Chevron/Microsoft); grid-edge friendly.
- **MISO / SPP / Southeast (Georgia Power, TVA, Entergy):** load growth, nuclear interest, new gas.
- **West (Arizona, Nevada — NV Energy, APS):** solar+storage, water constraints.
- **Trend:** capital migrating to **power-advantaged** regions; BTM and co-located generation rising.

### 9.2 EMEA
- **Europe:** Ireland (Dublin moratoria), Nordics (hydro/cheap clean power), Germany/Netherlands (grid constraints). Strong gas-turbine demand (US, Poland, Turkey cited by Siemens).
- **Middle East (fast-growing):** UAE, Saudi Arabia — large sovereign-backed AI build-outs; **VoltaGrid × Halliburton** targeting the region; abundant gas, ambition for scale and speed.

### 9.3 APAC
- **Japan, South Korea, Singapore (moratorium-era now easing), India, Malaysia (Johor), China.** China is large but on a separate supply chain (Dongfang, Shanghai Electric, Harbin Electric).

### 9.4 LatAm
- Brazil, Chile, Mexico — renewable-rich pockets; emerging.

> **Deep-dive task:** For each priority region, capture power price, interconnection timeline, fuel availability, policy/permitting, incentives, water, and the dominant energization model. Rank regions by attractiveness for new capacity.

---

## 10. Business Models & Unit Economics

Map each player to a model and the economics that drive it:

| Model | Who | Revenue logic | Key metrics |
|---|---|---|---|
| **Equipment OEM** | GE Vernova, Siemens Energy, MHI, Caterpillar, Cummins, INNIO, Wärtsilä, Bloom, Mainspring | Sell kit + long-term service agreements (LTSAs) | Backlog, book-to-bill, slot availability, service margin |
| **IPP / merchant power** | Constellation, Vistra, Talen, NRG | Energy + capacity + PPAs | $/MWh, capacity revenue, fleet MW, contracted % |
| **Power-as-a-service / BTM integrator** | VoltaGrid, Bloom, ProEnergy | Single "power agreement" (fuel+gen+O&M) | $/MWh delivered, MW under contract, time-to-power |
| **Regulated utility** | Dominion, AEP, Duke, Southern | Rate base growth | Capex, allowed ROE, large-load tariffs |
| **SMR/advanced developer** | TerraPower, Oklo, X-energy, Kairos | Reactor sales / build-own-operate + PPAs | First-power date, $/kW, licensing status |
| **EPC / dev** | Bechtel, Quanta, Burns & McDonnell | Project fees | Backlog, schedule certainty |
| **Fuel / midstream** | Chevron, Williams, EQT | Molecule margin + integrated power | Delivered gas $/MMBtu, pipeline capacity |

**Reference economics to collect:** $/kW installed capex by technology; $/MWh LCOE; lead time (months from firm order); emissions ($/ton implications for permitting); overbuild ratio for firm delivery (30–70%).

---

## 11. Data Sources & Method

**Primary / authoritative**
- **IEA** — *Energy and AI*, *Key Questions on Energy and AI* (demand scenarios).
- **US EIA** — electricity demand, generation, fuel.
- **Utility IRPs & FERC/RTO filings** — PJM, ERCOT, MISO interconnection queues; large-load tariffs.
- **NRC** — reactor licensing status.
- **Company 10-Ks/annual reports & earnings calls** — backlogs, order intake, capex (GE Vernova, Siemens Energy, MHI, Caterpillar, Constellation, Vistra, Talen, Bloom, etc.).

**Industry / market research**
- **JLL, CBRE, Cushman & Wakefield** — data center capacity & market outlooks.
- **Bloom Energy Data Center Power Report**, **Rabobank**, bank/sell-side research (note vendor bias — triangulate).
- **S&P Global, Wood Mackenzie, BloombergNEF, Uptime Institute, DCD (DataCenter Dynamics).**

**Deal & news tracking**
- Press releases, PPA trackers, M&A databases; build the **deal tracker** in Section 7.

**Method notes**
- Triangulate every number across ≥2 independent sources; flag vendor-sponsored figures.
- Separate **announced/LOI** from **contracted** from **operating** capacity (announcements overstate reality).
- Always tag a figure with its **as-of date** and **scenario**.

---

## 12. The 8-Phase Deep-Dive Workplan

1. **Scoping & framing** — lock definitions, segments, and the core questions (Sections 1–3).
2. **Demand modeling** — build US + global demand model with scenarios; regional heat map of interconnection/headroom (Section 4).
3. **Technology mapping** — complete the technology comparison matrix incl. time-to-power and economics (Sections 5, 10).
4. **Company census** — populate the taxonomy; build the master company list with profiles (Section 6).
5. **Deal & bottleneck analysis** — fill the deal tracker; quantify and attribute bottleneck control (Sections 7–8).
6. **Regional deep dives** — score priority regions (Section 9).
7. **Competitive & opportunity synthesis** — winners by segment, moats, white spaces, risks, opportunities (Sections 2.9–2.11).
8. **Deliverables** — landscape map, company scorecards, demand model, deal tracker, and a recommendations memo.

---

## 13. Templates

### 13.1 Company profile template
```
Company:
Ticker / ownership (public/PE/sovereign):
Value-chain position(s):
Technology / product:
Time-to-power (typical):
Capacity / backlog / slot availability:
Named data center deals (buyer, MW, model, date):
Business model & key economics ($/kW, $/MWh):
Bottleneck control (1–5):
Moat & differentiation:
Key risks:
Sources (with as-of date):
```

### 13.2 Technology comparison matrix (columns)
```
Technology | Time-to-power (mo) | $/kW capex | $/MWh LCOE | Emissions/permitting | Scalability | Fuel-supply risk | Commercial readiness | Best-fit use case
```

### 13.3 Deal tracker (columns)
```
Date | Buyer | Supplier | Technology | MW | BTM/FTM | $/MW (if disclosed) | First-power | Status (LOI/contracted/operating) | Source
```

### 13.4 Company scorecard (weighted)
```
Criteria (suggested weights):
- Time-to-power advantage (25%)
- Bottleneck control / scarcity (20%)
- Capacity & backlog visibility (15%)
- Unit economics / margin (15%)
- Balance sheet / capital access (10%)
- Technology readiness / moat (10%)
- Customer relationships / pipeline (5%)
Score each 1–5, compute weighted total, rank within segment.
```

---

## 14. Synthesis: The One-Paragraph Thesis (to validate or refute)

> AI is driving data center electricity demand to roughly **double to ~950 TWh by 2030** (~200 GW of capacity), and the binding constraint is no longer capital or chips but **power and time-to-power**. Multi-year **grid interconnection** queues and a **3–5 year gas-turbine backlog** controlled by three OEMs are pushing the industry toward a **parallel, behind-the-meter energy system**: fuel cells (Bloom) and linear/recip engines (Mainspring, Caterpillar, INNIO, VoltaGrid) for *immediate* energization; aeroderivatives and solar-plus-storage for the *medium term*; and heavy-duty gas plus **nuclear (restarts, uprates, then SMRs ~2030+)** for *long-horizon firm power*. The companies that win will be those that **control a scarce link** in the chain and can **compress time-to-power** while offering an **end-to-end ("power agreement") model**. Use the framework, templates, and trackers above to test which players actually deliver on that promise.

---

*Compiled May 2026. All quantitative figures are point-in-time estimates drawn from IEA, JLL, company disclosures, and industry/press reporting; verify against primary sources before decision-making.*
