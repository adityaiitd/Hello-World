/* GroundTruth OS — dashboard interactivity */
(function () {
  "use strict";

  const PALETTE = {
    accent: "#38e1b0", accent2: "#5b8cff", warn: "#ffb454", crit: "#ff6b6b",
    purple: "#b794ff", cyan: "#4dd2ff",
    grid: "rgba(255,255,255,.06)", muted: "#9aa7c2",
  };
  const SERIES = [PALETTE.accent, PALETTE.accent2, PALETTE.warn, PALETTE.crit, PALETTE.purple, PALETTE.cyan];
  const charts = {};
  const fmtUSD = (n) => "$" + Math.round(n).toLocaleString();
  const esc = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  if (document.readyState === "complete") init();
  else window.addEventListener("load", init);

  function init() {
    if (typeof Chart !== "undefined") {
      Chart.defaults.color = PALETTE.muted;
      Chart.defaults.font.family = "-apple-system, Segoe UI, Roboto, sans-serif";
      Chart.defaults.plugins.legend.labels.boxWidth = 12;
    }
    setupNav();
    renderKpis();
    renderVerdict();
    renderMarket();
    renderJourney();
    renderLandscape();
    renderWhyNow();
    renderReality();
    renderRevenue();
    renderHyper();
    renderPlaybooks();
    renderTraction();
    renderMoney();
    renderDisasterMap();
    renderPrivateMarkets();
    renderPrivateGtm();
    renderLadder();
    renderRisks();
    renderSources();
    setupModal();
    setupCalc();
  }

  function confClass(c) {
    const s = String(c || "").toLowerCase();
    if (s.includes("low") || s.includes("speculative")) return "conf-low";
    if (s.includes("moderate-high")) return "conf-moderate-high";
    if (s.includes("moderate")) return "conf-moderate";
    if (s.includes("high")) return "conf-high";
    return "conf-moderate";
  }
  function confBadge(c) {
    return `<span class="conf-badge ${confClass(c)}">${esc(c)}</span>`;
  }

  /* ---------------- Navigation ---------------- */
  function setupNav() {
    const tabs = document.querySelectorAll(".tab");
    const navToggle = document.getElementById("navToggle");
    const nav = document.getElementById("nav");

    function activate(view, scroll) {
      if (!view || !document.getElementById(view)) view = "verdict";
      tabs.forEach((x) => x.classList.toggle("active", x.dataset.view === view));
      document.querySelectorAll(".view").forEach((v) => v.classList.toggle("active", v.id === view));
      nav.classList.remove("open");
      if (scroll) window.scrollTo({ top: 0, behavior: "smooth" });
      lazyCharts(view);
    }
    const getView = () => (location.hash || "").replace(/^#\/?/, "");
    tabs.forEach((t) => t.addEventListener("click", () => {
      const view = t.dataset.view;
      if (history.replaceState) history.replaceState(null, "", "#/" + view);
      else location.hash = "/" + view;
      activate(view, true);
    }));
    navToggle.addEventListener("click", () => nav.classList.toggle("open"));
    window.addEventListener("hashchange", () => activate(getView(), true));
    activate(getView(), false);
  }

  function lazyCharts(view) {
    if (view === "market") buildEntitiesChart();
    else if (view === "revenue") buildMixChart();
    else if (view === "hyper") buildY1Chart();
    else if (view === "disastermap") buildSpendChart();
    Object.values(charts).forEach((c) => { if (c) c.resize(); });
  }

  /* ---------------- Verdict ---------------- */
  function renderKpis() {
    document.getElementById("kpis").innerHTML = KPIS.map((k) => `
      <div class="kpi"><div class="v">${esc(k.value)}</div><div class="l">${esc(k.label)}</div><div class="s">${esc(k.sub)}</div></div>`).join("");
  }
  function renderVerdict() {
    document.getElementById("verdictList").innerHTML = VERDICT.map((v) => `
      <div class="vitem"><h4>${esc(v.claim)}${confBadge(v.confidence)}</h4><p>${esc(v.detail)}</p></div>`).join("");
  }

  /* ---------------- Market ---------------- */
  function renderMarket() {
    document.getElementById("funnel").innerHTML = MARKET.funnel.map((f) => `
      <div class="fn"><div class="fn-top"><span class="fn-label">${esc(f.label)}</span><span class="fn-val">${esc(f.value)}</span></div><div class="fn-note">${esc(f.note)}</div></div>`).join("");
    document.getElementById("marketNotes").innerHTML = MARKET.notes.map((n) => `<li>${esc(n)}</li>`).join("");
    renderPathTable();
    document.getElementById("pathReset").addEventListener("click", () => {
      MARKET.path.forEach((p, i) => { p.customers = DEFAULT_PATH[i].customers; p.acv = DEFAULT_PATH[i].acv; });
      renderPathTable();
    });
  }
  const DEFAULT_PATH = MARKET.path.map((p) => ({ customers: p.customers, acv: p.acv }));
  function renderPathTable() {
    const tbody = document.querySelector("#pathTable tbody");
    tbody.innerHTML = MARKET.path.map((p, i) => `
      <tr>
        <td>${esc(p.seg)}</td>
        <td class="num"><input type="number" min="0" data-row="${i}" data-k="customers" value="${p.customers}" /></td>
        <td class="num"><input type="number" min="0" step="1000" data-row="${i}" data-k="acv" value="${p.acv}" /></td>
        <td class="num rev-cell">${fmtUSD(p.customers * p.acv)}</td>
      </tr>`).join("");
    tbody.querySelectorAll("input").forEach((inp) => inp.addEventListener("input", (e) => {
      const i = +e.target.dataset.row, k = e.target.dataset.k;
      MARKET.path[i][k] = Math.max(0, +e.target.value || 0);
      const row = e.target.closest("tr");
      row.querySelector(".rev-cell").textContent = fmtUSD(MARKET.path[i].customers * MARKET.path[i].acv);
      updatePathTotals();
    }));
    updatePathTotals();
  }
  function updatePathTotals() {
    const cust = MARKET.path.reduce((s, p) => s + p.customers, 0);
    const rev = MARKET.path.reduce((s, p) => s + p.customers * p.acv, 0);
    document.getElementById("pathCustTotal").textContent = cust.toLocaleString();
    document.getElementById("pathRevTotal").textContent = fmtUSD(rev);
  }
  function buildEntitiesChart() {
    if (typeof Chart === "undefined" || charts.entities) return;
    charts.entities = new Chart(document.getElementById("entitiesChart"), {
      type: "bar",
      data: { labels: MARKET.entities.map((e) => e.label),
        datasets: [{ label: "Count", data: MARKET.entities.map((e) => e.count), backgroundColor: SERIES }] },
      options: {
        responsive: true, maintainAspectRatio: false, animation: false, indexAxis: "y",
        plugins: { legend: { display: false }, tooltip: { callbacks: {
          label: (c) => `${c.parsed.x.toLocaleString()} — ${MARKET.entities[c.dataIndex].note}` } } },
        scales: { x: { grid: { color: PALETTE.grid }, beginAtZero: true }, y: { grid: { color: PALETTE.grid } } },
      },
    });
  }

  /* ---------------- Journey ---------------- */
  let journeyMode = "after";
  function renderJourney() {
    document.getElementById("breakinList").innerHTML = JOURNEY.breakin.map((s) => `<li>${esc(s)}</li>`).join("");
    document.getElementById("journeyWhy").innerHTML = esc(JOURNEY.why);
    document.querySelectorAll("#journeyToggle .chip").forEach((c) => c.addEventListener("click", () => {
      journeyMode = c.dataset.jr;
      document.querySelectorAll("#journeyToggle .chip").forEach((x) => x.classList.toggle("active", x === c));
      drawJourney();
    }));
    drawJourney();
  }
  function drawJourney() {
    const steps = journeyMode === "before" ? JOURNEY.before : JOURNEY.after;
    document.getElementById("journeySteps").innerHTML = steps.map((s) => `<li>${esc(s)}</li>`).join("");
  }

  /* ---------------- Landscape ---------------- */
  const compState = { search: "", layer: "All" };
  function renderLandscape() {
    const map = document.getElementById("layerMap");
    map.innerHTML = LAYER_MAP.cells.map((c) => {
      const cls = c.owned === true ? "owned" : c.owned === "partial" ? "partial" : "gap";
      const tag = c.owned === true ? "Owned" : c.owned === "partial" ? "Partial" : "WHITE SPACE";
      return `<div class="lm-cell ${cls}"><div class="lm-title">${esc(c.layer)}</div><div class="lm-who">${esc(c.who)}</div><span class="lm-tag">${tag}</span></div>`;
    }).join("");
    document.getElementById("layerGap").innerHTML = "<b>The gap:</b> " + esc(LAYER_MAP.gap);

    const layers = ["All", ...Array.from(new Set(COMPETITORS.map((c) => c.layer)))];
    document.getElementById("layerFilters").innerHTML = layers.map((l, i) =>
      `<button class="chip ${i === 0 ? "active" : ""}" data-layer="${esc(l)}">${esc(l)}</button>`).join("");
    document.querySelectorAll("#layerFilters .chip").forEach((c) => c.addEventListener("click", () => {
      compState.layer = c.dataset.layer;
      document.querySelectorAll("#layerFilters .chip").forEach((x) => x.classList.toggle("active", x === c));
      renderComps();
    }));
    document.getElementById("compSearch").addEventListener("input", (e) => { compState.search = e.target.value.toLowerCase(); renderComps(); });
    renderComps();
  }
  function filterComps() {
    return COMPETITORS.filter((c) => {
      if (compState.layer !== "All" && c.layer !== compState.layer) return false;
      if (compState.search) {
        const hay = (c.name + " " + c.layer + " " + c.stage + " " + c.what + " " + c.owns + " " + c.leaves).toLowerCase();
        if (!hay.includes(compState.search)) return false;
      }
      return true;
    });
  }
  function renderComps() {
    const list = filterComps();
    document.getElementById("compCount").textContent = `${list.length} of ${COMPETITORS.length} players`;
    document.getElementById("compGrid").innerHTML = list.map((c) => {
      const idx = COMPETITORS.indexOf(c);
      return `<div class="company" data-idx="${idx}">
        <div class="c-name">${esc(c.name)}</div>
        <div class="c-sub">${esc(c.region)}</div>
        <div class="badges"><span class="badge layer">${esc(c.layer)}</span><span class="badge stage">${esc(c.stage)}</span></div>
        <div class="c-metric">${esc(c.what)}</div>
        <div class="more">What they leave open →</div>
      </div>`;
    }).join("");
    document.querySelectorAll("#compGrid .company").forEach((el) =>
      el.addEventListener("click", () => openComp(+el.dataset.idx)));
  }
  function openComp(idx) {
    const c = COMPETITORS[idx];
    document.getElementById("modalBody").innerHTML = `
      <h2>${esc(c.name)}</h2>
      <p class="m-sub">${esc(c.layer)} · ${esc(c.region)} · ${esc(c.stage)}</p>
      <div class="m-section"><div class="label">What they do</div><p>${esc(c.what)}</p></div>
      <div class="m-section"><div class="label">Layer they own</div><p>${esc(c.owns)}</p></div>
      <div class="m-section"><div class="label">What they leave open (our wedge)</div><p>${esc(c.leaves)}</p></div>
      ${c.url ? `<a class="m-link" href="${esc(c.url)}" target="_blank" rel="noopener">Source ↗</a>` : ""}`;
    document.getElementById("modal").classList.add("open");
  }

  /* ---------------- Why now + hook ---------------- */
  function renderWhyNow() {
    document.getElementById("hookBlock").innerHTML = `
      <div class="hook land"><h4>${esc(HOOK.primary.title)}</h4><p>${esc(HOOK.primary.detail)}</p></div>
      <div class="hook expand"><h4>${esc(HOOK.expansion.title)}</h4><p>${esc(HOOK.expansion.detail)}</p></div>`;
    document.getElementById("whynowGrid").innerHTML = WHYNOW.map((w) => `
      <div class="reason"><h4>${esc(w.title)}${confBadge(w.confidence)}</h4><p>${esc(w.detail)}</p></div>`).join("");
  }

  /* ---------------- Reality ---------------- */
  function renderReality() {
    document.getElementById("realityList").innerHTML = REALITY.map((r) => `
      <div class="rc"><p>${esc(r.point)}</p>${confBadge(r.confidence)}</div>`).join("");
  }

  /* ---------------- Revenue ---------------- */
  function renderRevenue() {
    document.getElementById("revThesis").innerHTML = esc(REVENUE.thesis);
    document.getElementById("recurringList").innerHTML = REVENUE.recurring.map((r) => `<li>${esc(r)}</li>`).join("");
    document.getElementById("eventList").innerHTML = REVENUE.event.map((r) => `<li>${esc(r)}</li>`).join("");
    document.getElementById("feeNote").innerHTML = esc(REVENUE.feeNote);
  }
  function buildMixChart() {
    if (typeof Chart === "undefined" || charts.mix) return;
    charts.mix = new Chart(document.getElementById("mixChart"), {
      type: "doughnut",
      data: { labels: REVENUE.mix.labels, datasets: [{ data: REVENUE.mix.pct, backgroundColor: SERIES, borderColor: "#0b0f17", borderWidth: 2 }] },
      options: { responsive: true, maintainAspectRatio: false, animation: false,
        plugins: { legend: { position: "right", labels: { boxWidth: 12, font: { size: 10 } } },
          tooltip: { callbacks: { label: (c) => `${c.label}: ${c.parsed}%` } } } },
    });
  }

  /* ---------------- Hypergrowth ---------------- */
  function renderHyper() {
    document.getElementById("hyperPremise").innerHTML = esc(HYPER.premise);
    document.getElementById("enginesList").innerHTML = HYPER.engines.map((e) => `
      <div class="detail"><h4>${esc(e.name)}</h4><p>${esc(e.detail)}</p></div>`).join("");
    document.getElementById("archList").innerHTML = HYPER.architecture.map((a) => `<li>${esc(a)}</li>`).join("");
    document.getElementById("capitalList").innerHTML = HYPER.capital.map((c) => `
      <div class="detail"><span class="tag">${esc(c.stage)}</span><p>${esc(c.use)}</p></div>`).join("");
    document.getElementById("quartersList").innerHTML = HYPER.quarters.map((q) => `
      <div class="detail"><span class="tag">${esc(q.q)}</span><p>${esc(q.actions)}</p></div>`).join("");
    document.getElementById("indicatorsList").innerHTML = HYPER.indicators.map((i) => `<li>${esc(i)}</li>`).join("");
    document.getElementById("hyperKill").innerHTML = "<b>Kill-criterion:</b> " + esc(HYPER.kill);
    document.getElementById("hyperConf").innerHTML = "Confidence: " + esc(HYPER.confidence);
  }
  function buildY1Chart() {
    if (typeof Chart === "undefined" || charts.y1) return;
    const total = HYPER.y1mix.values.reduce((s, v) => s + v, 0);
    charts.y1 = new Chart(document.getElementById("y1Chart"), {
      type: "bar",
      data: { labels: HYPER.y1mix.labels, datasets: [{ label: "$000s", data: HYPER.y1mix.values, backgroundColor: SERIES }] },
      options: { responsive: true, maintainAspectRatio: false, animation: false, indexAxis: "y",
        plugins: { legend: { display: false },
          title: { display: true, text: "Total ≈ $" + (total / 1000).toFixed(1) + "M", color: PALETTE.accent },
          tooltip: { callbacks: { label: (c) => "$" + (c.parsed.x / 1000).toFixed(1) + "M" } } },
        scales: { x: { grid: { color: PALETTE.grid }, beginAtZero: true, ticks: { callback: (v) => "$" + (v / 1000) + "M" } }, y: { grid: { color: PALETTE.grid } } } },
    });
  }

  /* ---------------- Playbooks ---------------- */
  function renderPlaybooks() {
    document.getElementById("playbookGrid").innerHTML = PLAYBOOKS.map((p) => `
      <div class="reason">
        <h4>${esc(p.founder)}</h4>
        <p class="lens">${esc(p.lens)}</p>
        <ul>${p.points.map((pt) => `<li>${esc(pt)}</li>`).join("")}</ul>
      </div>`).join("");
  }

  /* ---------------- Traction ---------------- */
  function renderTraction() {
    document.getElementById("tractionList").innerHTML = TRACTION.map((t) => `
      <li><b>${esc(t.step)}</b><span class="sub">${esc(t.detail)}</span></li>`).join("");
  }
  function setupCalc() {
    const ids = ["ci_rolls", "ci_rollcost", "ci_hours", "ci_cust", "ci_chval", "ci_fema", "ci_doc"];
    ids.forEach((id) => document.getElementById(id).addEventListener("input", calc));
    calc();
  }
  function calc() {
    const g = (id) => +document.getElementById(id).value || 0;
    const rollSave = g("ci_rolls") * g("ci_rollcost");
    const outageSave = g("ci_hours") * g("ci_cust") * g("ci_chval");
    const femaSave = g("ci_fema") * (g("ci_doc") / 100);
    const total = rollSave + outageSave + femaSave;
    const out = [
      { v: fmtUSD(rollSave), l: "Avoided truck-roll cost" },
      { v: fmtUSD(outageSave), l: "Customer-hours value recovered" },
      { v: fmtUSD(femaSave), l: "FEMA-eligible $ documented" },
      { v: fmtUSD(total), l: "Total illustrative value / event" },
    ];
    document.getElementById("calcOut").innerHTML = out.map((o) => `<div class="co"><div class="v">${o.v}</div><div class="l">${o.l}</div></div>`).join("");
  }

  /* ---------------- Buyers & money ---------------- */
  function renderMoney() {
    document.getElementById("ownersList").innerHTML = BUYERS.owners.map((o) => `
      <div class="detail"><h4>${esc(o.role)}</h4><p>${esc(o.cares)}</p><p class="tag">Budget: ${esc(o.budget)}</p></div>`).join("");
    document.getElementById("fundingList").innerHTML = BUYERS.funding.map((f) => `
      <div class="detail"><h4>${esc(f.src)}</h4><p>${esc(f.note)}</p></div>`).join("");
    document.getElementById("moneyFlow").innerHTML = `
      <div class="row">
        <span class="node src">Ratepayers / members (rates)</span>
        <span class="node src">FEMA PA ≥75%</span>
        <span class="node src">GRIP / BRIC grants</span>
        <span class="node src">Insurers (claims)</span>
      </div>
      <div class="row"><span class="arrow">↓ fund the budget owner ↓</span></div>
      <div class="row"><span class="node">Co-op / Muni / IOU budget owner</span></div>
      <div class="row"><span class="arrow">↓ subscription + event surge + services ↓</span></div>
      <div class="row"><span class="node gt">GroundTruth OS</span><span class="arrow">↘ inorganic revenue</span><span class="node">Acquired storm-services / grant-mgmt books</span></div>
      <div class="row"><span class="arrow">↳ outputs:</span>
        <span class="node">Auto evidence → FEMA (fixed-fee)</span>
        <span class="node">Evidence + success fees → insurers</span>
        <span class="node">Risk/change data → insurers</span>
        <span class="node">Compliance reports → PUC</span>
      </div>
      <div class="row"><span class="arrow">channel:</span><span class="node src">Statewide assoc / G&amp;T / mutual aid (low-CAC)</span></div>`;
  }



  /* ---------------- Disaster spend map + private markets ---------------- */
  function renderDisasterMap() {
    const th = document.getElementById("disasterThesis");
    if (!th) return;
    th.innerHTML = esc(DISASTER_MARKET_MAP.thesis);
    document.querySelector("#hazardTable tbody").innerHTML = DISASTER_MARKET_MAP.hazards.map((h) => `
      <tr>
        <td><b>${esc(h.hazard)}</b></td>
        <td>${esc(h.annual)}</td>
        <td>${esc(h.payers)}</td>
        <td>${esc(h.opportunity)}</td>
        <td>${confBadge(h.confidence)}</td>
      </tr>`).join("");
    document.getElementById("payerList").innerHTML = DISASTER_MARKET_MAP.payers.map((p) => `
      <div class="detail"><h4>${esc(p.payer)}</h4><p>${esc(p.paysFor)}</p><p class="tag">Owner: ${esc(p.budgetOwner)}</p><p class="tag">Trigger: ${esc(p.buyTrigger)}</p></div>`).join("");
  }

  function spendValue(v) {
    const m = String(v).match(/\$([0-9.]+)/);
    if (!m) return 0;
    let n = +m[1];
    if (String(v).includes("T")) n *= 1000;
    return n;
  }
  function buildSpendChart() {
    if (typeof Chart === "undefined" || charts.spend) return;
    const rows = DISASTER_MARKET_MAP.spendAnchors;
    charts.spend = new Chart(document.getElementById("spendChart"), {
      type: "bar",
      data: { labels: rows.map((r) => r.label), datasets: [{ label: "$B scale", data: rows.map((r) => spendValue(r.value)), backgroundColor: SERIES }] },
      options: { responsive: true, maintainAspectRatio: false, animation: false, indexAxis: "y",
        plugins: { legend: { display: false }, tooltip: { callbacks: { label: (c) => `${rows[c.dataIndex].value} — ${rows[c.dataIndex].note}` } } },
        scales: { x: { grid: { color: PALETTE.grid }, beginAtZero: true, ticks: { callback: (v) => "$" + v + "B" } }, y: { grid: { color: PALETTE.grid }, ticks: { font: { size: 10 } } } } },
    });
  }

  const privateState = { search: "" };
  function renderPrivateMarkets() {
    const th = document.getElementById("privateThesis");
    if (!th) return;
    th.innerHTML = esc(PRIVATE_MARKETS.thesis);
    document.getElementById("privatePriority").innerHTML = PRIVATE_MARKETS.priority.map((p) => `
      <div class="detail priority"><span class="tag">#${p.rank}</span><h4>${esc(p.target)}</h4><p>${esc(p.reason)}</p></div>`).join("");
    document.getElementById("privateSearch").addEventListener("input", (e) => { privateState.search = e.target.value.toLowerCase(); drawPrivateMarkets(); });
    drawPrivateMarkets();
  }
  function filterPrivateMarkets() {
    return PRIVATE_MARKETS.segments.filter((s) => {
      if (!privateState.search) return true;
      const hay = (s.name + " " + s.buyers + " " + s.pain + " " + s.hook + " " + s.whyFast + " " + s.acv).toLowerCase();
      return hay.includes(privateState.search);
    });
  }
  function drawPrivateMarkets() {
    const list = filterPrivateMarkets();
    document.getElementById("privateCount").textContent = `${list.length} of ${PRIVATE_MARKETS.segments.length} private segments`;
    document.getElementById("privateGrid").innerHTML = list.map((s) => `
      <div class="company private-card">
        <div class="c-name">${esc(s.name)}</div>
        <div class="badges"><span class="badge layer">${esc(s.confidence)}</span><span class="badge stage">${esc(s.acv)}</span></div>
        <div class="c-metric"><b>Buyer:</b> ${esc(s.buyers)}</div>
        <div class="c-metric"><b>Pain:</b> ${esc(s.pain)}</div>
        <div class="c-metric"><b>Hook:</b> ${esc(s.hook)}</div>
        <div class="more">Why it can move: ${esc(s.whyFast)}</div>
      </div>`).join("");
  }

  function renderPrivateGtm() {
    const wedge = document.getElementById("privateGtmWedge");
    if (!wedge) return;
    wedge.innerHTML = esc(PRIVATE_GTM.wedge);
    document.getElementById("privateBefore").innerHTML = PRIVATE_GTM.privateJourney.before.map((s) => `<li>${esc(s)}</li>`).join("");
    document.getElementById("privateAfter").innerHTML = PRIVATE_GTM.privateJourney.after.map((s) => `<li>${esc(s)}</li>`).join("");
    document.getElementById("privateMotions").innerHTML = PRIVATE_GTM.motions.map((m) => `
      <div class="reason"><h4>${esc(m.motion)}</h4><p>${esc(m.why)}</p><ul>${m.steps.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div>`).join("");
  }

  /* ---------------- Ladder ---------------- */
  function renderLadder() {
    document.getElementById("ladderList").innerHTML = LADDER.map((l) => `
      <div class="rung">
        <div class="r-head"><span class="r-tier">${esc(l.tier)}</span><span class="r-label">${esc(l.label)}</span>${confBadge(l.confidence)}</div>
        <p>${esc(l.desc)}</p>
      </div>`).join("");
  }

  /* ---------------- Risks ---------------- */
  function renderRisks() {
    document.getElementById("riskList").innerHTML = RISKS.map((r) => `
      <div class="bn ${esc(r.severity)}">
        <div class="bn-head"><h4>${esc(r.name)}</h4><span class="sev ${esc(r.severity)}">${esc(r.severity)}</span></div>
        <p class="bn-detail">${esc(r.detail)}</p>
        <div class="bn-kill"><b>Kill:</b> ${esc(r.kill)}</div>
      </div>`).join("");
  }

  /* ---------------- Sources ---------------- */
  function renderSources() {
    const groups = {};
    SOURCES.forEach((s) => { (groups[s.group] = groups[s.group] || []).push(s); });
    document.getElementById("sourceList").innerHTML = Object.keys(groups).map((g) => `
      <div class="src-group"><h4>${esc(g)}</h4>
        ${groups[g].map((s) => `<a class="src" href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}<span class="u">${esc(s.url)}</span></a>`).join("")}
      </div>`).join("");
  }

  /* ---------------- Modal ---------------- */
  function setupModal() {
    const modal = document.getElementById("modal");
    modal.querySelectorAll("[data-close]").forEach((el) => el.addEventListener("click", () => modal.classList.remove("open")));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") modal.classList.remove("open"); });
  }
})();
