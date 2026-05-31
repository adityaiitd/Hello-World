/* Dashboard interactivity */
(function () {
  "use strict";

  const PALETTE = {
    accent: "#38e1b0", accent2: "#5b8cff", warn: "#ffb454", crit: "#ff6b6b",
    grid: "rgba(255,255,255,.06)", muted: "#9aa7c2", text: "#e7ecf5",
  };
  const SEG_COLORS = {
    "Utility": "#5b8cff", "IPP": "#38e1b0", "Turbine OEM": "#ff6b6b",
    "Engine/Distributed": "#ffb454", "BTM Integrator": "#b794ff",
    "Nuclear/SMR": "#4dd2ff", "Electrical Equipment": "#ff9ecb",
    "EPC/Dev": "#8de86a", "Capital": "#f7e06e", "Fuel/Midstream": "#ff8a5c",
  };
  const charts = {};

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
    renderDemandNotes();
    setupCompanies();
    setupDeals();
    renderTech();
    renderRegions();
    renderBottlenecks();
    renderStrategy();
    setupModal();
    buildOverviewCharts();
  }

  /* ---------------- Navigation ---------------- */
  function setupNav() {
    const tabs = document.querySelectorAll(".tab");
    const navToggle = document.getElementById("navToggle");
    const nav = document.getElementById("nav");

    function activate(view, scroll) {
      if (!view || !document.getElementById(view)) view = "overview";
      tabs.forEach((x) => x.classList.toggle("active", x.dataset.view === view));
      document.querySelectorAll(".view").forEach((v) =>
        v.classList.toggle("active", v.id === view));
      nav.classList.remove("open");
      if (scroll) window.scrollTo({ top: 0, behavior: "smooth" });
      lazyCharts(view);
    }

    // Hash is prefixed with "/" so it never matches a section id (avoids the
    // browser's native scroll-to-anchor jump on load/deep-link).
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
    if (view === "demand") buildDemandCharts();
    else if (view === "deals") buildDealChart();
    else if (view === "overview") buildOverviewCharts();
    // Resize already-built charts in case their container size changed while hidden.
    Object.values(charts).forEach((c) => { if (c) c.resize(); });
  }

  /* ---------------- KPIs ---------------- */
  function renderKpis() {
    const el = document.getElementById("kpis");
    el.innerHTML = KPIS.map((k) => `
      <div class="kpi">
        <div class="v">${k.value}</div>
        <div class="l">${k.label}</div>
        <div class="s">${k.sub}</div>
      </div>`).join("");
  }

  function renderDemandNotes() {
    document.getElementById("demandNotes").innerHTML =
      DEMAND.notes.map((n) => `<li>${n}</li>`).join("");
  }

  /* ---------------- Overview charts ---------------- */
  function buildOverviewCharts() {
    if (typeof Chart === "undefined") return;
    if (!charts.ovDemand) {
      charts.ovDemand = new Chart(document.getElementById("overviewDemandChart"), {
        type: "line",
        data: {
          labels: DEMAND.years,
          datasets: [{
            label: "Base Case",
            data: DEMAND.scenarios["Base Case"],
            borderColor: PALETTE.accent, backgroundColor: "rgba(56,225,176,.15)",
            fill: true, tension: .3, pointRadius: 4,
          }],
        },
        options: baseLineOpts("TWh"),
      });
    }
    if (!charts.segment) {
      const counts = {};
      COMPANIES.forEach((c) => counts[c.segment] = (counts[c.segment] || 0) + 1);
      const labels = Object.keys(counts);
      charts.segment = new Chart(document.getElementById("segmentChart"), {
        type: "doughnut",
        data: {
          labels,
          datasets: [{ data: labels.map((l) => counts[l]),
            backgroundColor: labels.map((l) => SEG_COLORS[l] || PALETTE.muted),
            borderColor: "#0b0f17", borderWidth: 2 }],
        },
        options: {
          responsive: true, maintainAspectRatio: false, animation: false,
          plugins: { legend: { position: "right", labels: { boxWidth: 12, font: { size: 10 } } } },
        },
      });
    }
  }

  /* ---------------- Demand charts ---------------- */
  let scenarioState = { "Base Case": true, "Lift-Off": true, "High Efficiency": true, "Headwinds": true };
  const SCEN_COLOR = {
    "Base Case": PALETTE.accent, "Lift-Off": PALETTE.crit,
    "High Efficiency": PALETTE.accent2, "Headwinds": PALETTE.warn,
  };

  function buildDemandCharts() {
    if (typeof Chart === "undefined") return;
    renderScenarioToggles();
    if (!charts.scenario) {
      charts.scenario = new Chart(document.getElementById("scenarioChart"), {
        type: "line",
        data: { labels: DEMAND.years, datasets: scenarioDatasets() },
        options: baseLineOpts("TWh"),
      });
    }
    if (!charts.capacity) {
      charts.capacity = new Chart(document.getElementById("capacityChart"), {
        type: "bar",
        data: { labels: DEMAND.capacity.years.map(String),
          datasets: [{ label: "GW", data: DEMAND.capacity.gw,
            backgroundColor: [PALETTE.accent2, PALETTE.accent] }] },
        options: baseBarOpts("GW"),
      });
    }
    if (!charts.aiShare) {
      charts.aiShare = new Chart(document.getElementById("aiShareChart"), {
        type: "bar",
        data: { labels: DEMAND.aiShare.years.map(String),
          datasets: [{ label: "% of workloads", data: DEMAND.aiShare.pct,
            backgroundColor: PALETTE.warn }] },
        options: baseBarOpts("%"),
      });
    }
  }

  function scenarioDatasets() {
    return Object.keys(DEMAND.scenarios)
      .filter((s) => scenarioState[s])
      .map((s) => ({
        label: s, data: DEMAND.scenarios[s],
        borderColor: SCEN_COLOR[s], backgroundColor: "transparent",
        tension: .3, pointRadius: 4, borderWidth: 2,
      }));
  }

  function renderScenarioToggles() {
    const el = document.getElementById("scenarioToggles");
    if (el.dataset.built) return;
    el.dataset.built = "1";
    el.innerHTML = Object.keys(DEMAND.scenarios).map((s) =>
      `<button class="chip active" data-scen="${s}">${s}</button>`).join("");
    el.querySelectorAll(".chip").forEach((chip) => chip.addEventListener("click", () => {
      const s = chip.dataset.scen;
      scenarioState[s] = !scenarioState[s];
      chip.classList.toggle("active", scenarioState[s]);
      charts.scenario.data.datasets = scenarioDatasets();
      charts.scenario.update();
    }));
  }

  /* ---------------- Companies ---------------- */
  const compState = { search: "", segment: "All", tier: "All" };

  function setupCompanies() {
    const segs = ["All", ...Array.from(new Set(COMPANIES.map((c) => c.segment)))];
    document.getElementById("segmentFilters").innerHTML =
      segs.map((s, i) => `<button class="chip ${i === 0 ? "active" : ""}" data-seg="${s}">${s}</button>`).join("");
    const tiers = ["All", "1", "2", "3"];
    document.getElementById("tierFilters").innerHTML =
      tiers.map((t, i) => `<button class="chip ${i === 0 ? "active" : ""}" data-tier="${t}">${t === "All" ? "All tiers" : "Tier " + t}</button>`).join("");

    document.querySelectorAll("#segmentFilters .chip").forEach((c) => c.addEventListener("click", () => {
      compState.segment = c.dataset.seg;
      setActive("#segmentFilters", c); renderCompanies();
    }));
    document.querySelectorAll("#tierFilters .chip").forEach((c) => c.addEventListener("click", () => {
      compState.tier = c.dataset.tier;
      setActive("#tierFilters", c); renderCompanies();
    }));
    document.getElementById("companySearch").addEventListener("input", (e) => {
      compState.search = e.target.value.toLowerCase(); renderCompanies();
    });
    renderCompanies();
  }

  function setActive(sel, active) {
    document.querySelectorAll(sel + " .chip").forEach((c) => c.classList.toggle("active", c === active));
  }

  function filterCompanies() {
    return COMPANIES.filter((c) => {
      if (compState.segment !== "All" && c.segment !== compState.segment) return false;
      if (compState.tier !== "All" && String(c.tier) !== compState.tier) return false;
      if (compState.search) {
        const hay = (c.name + " " + c.segment + " " + (c.tech || []).join(" ") + " " +
          (c.deals || []).join(" ") + " " + (c.metric || "") + " " + (c.note || "")).toLowerCase();
        if (!hay.includes(compState.search)) return false;
      }
      return true;
    });
  }

  function renderCompanies() {
    const list = filterCompanies();
    document.getElementById("companyCount").textContent =
      `${list.length} of ${COMPANIES.length} companies`;
    document.getElementById("companyGrid").innerHTML = list.map((c, idx) => {
      const realIdx = COMPANIES.indexOf(c);
      return `
      <div class="company" data-idx="${realIdx}">
        <div class="c-head">
          <div>
            <div class="c-name">${c.name}</div>
            <div class="c-ticker">${c.ticker || ""} · ${c.region || ""}</div>
          </div>
        </div>
        <div class="badges">
          <span class="badge seg">${c.segment}</span>
          <span class="badge tier${c.tier}">Tier ${c.tier}</span>
        </div>
        <div class="c-metric">${c.metric || ""}</div>
        ${c.deals && c.deals.length ? `<div class="deal-count">${c.deals.length} tracked deal${c.deals.length > 1 ? "s" : ""} →</div>` : ""}
      </div>`;
    }).join("");
    document.querySelectorAll(".company").forEach((el) =>
      el.addEventListener("click", () => openCompany(Number(el.dataset.idx))));
  }

  /* ---------------- Company modal ---------------- */
  function setupModal() {
    const modal = document.getElementById("modal");
    modal.querySelectorAll("[data-close]").forEach((el) =>
      el.addEventListener("click", () => modal.classList.remove("open")));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") modal.classList.remove("open");
    });
  }

  function openCompany(idx) {
    const c = COMPANIES[idx];
    const body = document.getElementById("modalBody");
    body.innerHTML = `
      <h2>${c.name}</h2>
      <p class="m-sub">${c.ticker || ""} · ${c.segment} · ${c.region || ""} · ${c.ownership || ""}</p>
      <div class="badges">
        <span class="badge seg">${c.segment}</span>
        <span class="badge tier${c.tier}">Tier ${c.tier} — ${tierShort(c.tier)}</span>
      </div>
      <div class="m-section">
        <div class="label">Scale / metric</div>
        <p>${c.metric || "—"}</p>
      </div>
      <div class="m-section">
        <div class="label">Technology</div>
        <div class="badges">${(c.tech || []).map((t) => `<span class="badge">${t}</span>`).join("") || "—"}</div>
      </div>
      ${c.deals && c.deals.length ? `
      <div class="m-section">
        <div class="label">Tracked deals</div>
        ${c.deals.map((d) => `<div class="m-deal">${d}</div>`).join("")}
      </div>` : ""}
      <div class="m-section">
        <div class="label">Moat / differentiation</div>
        <p>${c.moat || "—"}</p>
      </div>
      ${c.note ? `<div class="m-section"><div class="label">Note</div><p>${c.note}</p></div>` : ""}
    `;
    document.getElementById("modal").classList.add("open");
  }

  function tierShort(t) {
    return t === 1 ? "Immediate" : t === 2 ? "Medium-term" : "Long horizon";
  }

  /* ---------------- Deals ---------------- */
  const dealState = { search: "", model: "All", sortKey: "mw", sortDir: -1 };

  function setupDeals() {
    const models = ["All", ...Array.from(new Set(DEALS.map((d) => d.model)))];
    document.getElementById("dealModelFilters").innerHTML =
      models.map((m, i) => `<button class="chip ${i === 0 ? "active" : ""}" data-model="${m}">${m}</button>`).join("");
    document.querySelectorAll("#dealModelFilters .chip").forEach((c) => c.addEventListener("click", () => {
      dealState.model = c.dataset.model;
      setActive("#dealModelFilters", c); renderDeals();
    }));
    document.getElementById("dealSearch").addEventListener("input", (e) => {
      dealState.search = e.target.value.toLowerCase(); renderDeals();
    });
    document.querySelectorAll("#dealTable th").forEach((th) => th.addEventListener("click", () => {
      const k = th.dataset.sort;
      if (dealState.sortKey === k) dealState.sortDir *= -1;
      else { dealState.sortKey = k; dealState.sortDir = (k === "mw") ? -1 : 1; }
      renderDeals();
    }));
    renderDeals();
  }

  function filterDeals() {
    return DEALS.filter((d) => {
      if (dealState.model !== "All" && d.model !== dealState.model) return false;
      if (dealState.search) {
        const hay = (d.buyer + " " + d.supplier + " " + d.tech + " " + d.status + " " + (d.note || "")).toLowerCase();
        if (!hay.includes(dealState.search)) return false;
      }
      return true;
    }).sort((a, b) => {
      let av = a[dealState.sortKey], bv = b[dealState.sortKey];
      if (dealState.sortKey === "mw") { av = av || 0; bv = bv || 0; return (av - bv) * dealState.sortDir; }
      return String(av).localeCompare(String(bv)) * dealState.sortDir;
    });
  }

  function renderDeals() {
    const list = filterDeals();
    const tbody = document.querySelector("#dealTable tbody");
    tbody.innerHTML = list.map((d) => `
      <tr title="${(d.note || "").replace(/"/g, "'")}">
        <td>${d.buyer}</td>
        <td>${d.supplier}</td>
        <td>${d.tech}</td>
        <td class="num"><span class="mw-val">${d.mw ? d.mw.toLocaleString() : "—"}</span></td>
        <td><span class="pill ${d.model}">${d.model}</span></td>
        <td>${d.year}</td>
        <td>${d.status}</td>
      </tr>`).join("");
  }

  function buildDealChart() {
    if (typeof Chart === "undefined" || charts.dealTech) return;
    const byTech = {};
    DEALS.forEach((d) => { if (d.mw) byTech[d.tech] = (byTech[d.tech] || 0) + d.mw; });
    const labels = Object.keys(byTech).sort((a, b) => byTech[b] - byTech[a]);
    charts.dealTech = new Chart(document.getElementById("dealTechChart"), {
      type: "bar",
      data: { labels, datasets: [{ label: "MW (tracked deals)", data: labels.map((l) => byTech[l]),
        backgroundColor: PALETTE.accent2 }] },
      options: Object.assign(baseBarOpts("MW"), { indexAxis: "y" }),
    });
  }

  /* ---------------- Technologies ---------------- */
  function renderTech() {
    const container = document.getElementById("techTiers");
    [1, 2, 3].forEach((tier) => {
      const items = TECHNOLOGIES.filter((t) => t.tier === tier);
      const block = document.createElement("div");
      block.className = "tier-block";
      block.innerHTML = `
        <div class="tier-title t${tier}">${TIER_LABELS[tier]}</div>
        <div class="tech-grid">
          ${items.map((t) => `
            <div class="tech">
              <h4>${t.name}</h4>
              <div class="specs">
                <span class="k">Time-to-power</span><span>${t.ttp}</span>
                <span class="k">Capex</span><span>${t.capex}</span>
                <span class="k">Emissions</span><span>${t.emissions}</span>
                <span class="k">Readiness</span><span>${t.readiness}</span>
              </div>
              <p class="note">${t.note}</p>
              <div class="players">${t.players.map((p) => `<span class="badge">${p}</span>`).join("")}</div>
            </div>`).join("")}
        </div>`;
      container.appendChild(block);
    });
  }

  /* ---------------- Regions ---------------- */
  function renderRegions() {
    document.getElementById("regionGrid").innerHTML = REGIONS.map((r) => `
      <div class="region">
        <h4>${r.name}</h4>
        <p class="hub">${r.hub}</p>
        <p class="profile">${r.profile}</p>
        <div class="badges">${r.tags.map((t) => `<span class="badge">${t}</span>`).join("")}</div>
        <p class="model">Dominant model: <b>${r.model}</b></p>
      </div>`).join("");
  }

  /* ---------------- Bottlenecks ---------------- */
  function renderBottlenecks() {
    document.getElementById("bottleneckList").innerHTML = BOTTLENECKS.map((b) => `
      <div class="bn ${b.severity}">
        <div class="bn-head">
          <h4>${b.name}</h4>
          <span class="sev ${b.severity}">${b.severity}</span>
        </div>
        <p class="bn-detail">${b.detail}</p>
        <div class="badges">${b.controllers.map((c) => `<span class="badge">${c}</span>`).join("")}</div>
      </div>`).join("");
  }

  /* ---------------- Strategy ---------------- */
  function renderStrategy() {
    if (typeof STRATEGY === "undefined") return;
    const S = STRATEGY;
    const el = document.getElementById("strategyContent");
    el.innerHTML = `
      <!-- Opportunity -->
      <div class="card strat-hero">
        <h3>${S.opportunity.title}</h3>
        <p class="prose">${S.opportunity.text}</p>
      </div>

      <!-- Product -->
      <div class="card">
        <h3>${S.product.icon || "⚡"} ${S.product.name} — <span class="accent">${S.product.tagline}</span></h3>
        <p class="prose" style="margin-bottom:16px">${S.product.oneLiner}</p>
        <div class="product-layers">
          ${S.product.layers.map((l) => `
            <div class="p-layer">
              <div class="p-layer-head">
                <span class="p-icon">${l.icon}</span>
                <div>
                  <div class="p-name">${l.name}</div>
                  <div class="p-phase">${l.phase}</div>
                </div>
              </div>
              <div class="p-what">${l.what}</div>
              <p class="p-detail">${l.detail}</p>
              <div class="p-rev"><b>Revenue:</b> ${l.revenue}</div>
            </div>`).join("")}
        </div>
      </div>

      <!-- First Product -->
      <div class="card">
        <h3>First product: ${S.firstProduct.name}</h3>
        <div class="strat-section">
          <div class="label">Why this first</div>
          <ul class="facts">${S.firstProduct.why.map((w) => `<li>${w}</li>`).join("")}</ul>
        </div>
        <div class="strat-section">
          <div class="label">MVP scope</div>
          <ul class="facts">${S.firstProduct.mvp.map((m) => `<li>${m}</li>`).join("")}</ul>
        </div>
        <div class="strat-section">
          <div class="label">Timeline</div>
          <p>${S.firstProduct.timeline}</p>
        </div>
      </div>

      <!-- ICP -->
      <div class="card">
        <h3>${S.icp.title}</h3>
        <div class="icp-block primary">
          <div class="icp-header">Primary ICP: ${S.icp.primary.segment}</div>
          <div class="icp-specs">
            <div><span class="k">Size</span><span>${S.icp.primary.size}</span></div>
            <div><span class="k">Pain</span><span>${S.icp.primary.pain}</span></div>
            <div><span class="k">Budget</span><span>${S.icp.primary.budget}</span></div>
          </div>
          <div class="icp-examples">
            ${S.icp.primary.examples.map((e) => `
              <div class="icp-ex"><b>${e.name}</b> — ${e.why}</div>`).join("")}
          </div>
        </div>
        <div class="icp-block secondary">
          <div class="icp-header">Secondary ICP: ${S.icp.secondary.segment}</div>
          <div class="icp-specs">
            <div><span class="k">Size</span><span>${S.icp.secondary.size}</span></div>
            <div><span class="k">Pain</span><span>${S.icp.secondary.pain}</span></div>
            <div><span class="k">Budget</span><span>${S.icp.secondary.budget}</span></div>
          </div>
          <div class="icp-examples">
            ${S.icp.secondary.examples.map((e) => `
              <div class="icp-ex"><b>${e.name}</b> — ${e.why}</div>`).join("")}
          </div>
        </div>
      </div>

      <!-- Sell-to targets -->
      <div class="card">
        <h3>${S.sellTo.title}</h3>
        <div class="target-grid">
          ${S.sellTo.targets.map((t) => `
            <div class="target-card">
              <div class="t-head">
                <div class="t-name">${t.name}</div>
                <span class="badge tier${t.urgency === "Now" ? "1" : "2"}">${t.urgency}</span>
              </div>
              <div class="t-title">${t.title}</div>
              <div class="t-mw">${t.mw} MW</div>
              <p class="t-hook">"${t.hook}"</p>
            </div>`).join("")}
        </div>
      </div>

      <!-- Roadmap -->
      <div class="card">
        <h3>Roadmap</h3>
        <div class="roadmap">
          ${S.roadmap.map((r) => `
            <div class="rm-phase" style="border-left-color:${r.color}">
              <div class="rm-label" style="color:${r.color}">${r.phase}</div>
              <ul class="facts">${r.items.map((i) => `<li>${i}</li>`).join("")}</ul>
            </div>`).join("")}
        </div>
      </div>

      <!-- Competitive edge -->
      <div class="card">
        <h3>${S.competitiveEdge.title}</h3>
        ${S.competitiveEdge.comparisons.map((c) => `
          <div class="comp-row">
            <div class="comp-alt">${c.alternative}</div>
            <div class="comp-edge">${c.edge}</div>
          </div>`).join("")}
      </div>

      <!-- TAM -->
      <div class="card">
        <h3>${S.tam.title}</h3>
        <div class="table-wrap">
          <table class="data-table">
            <thead><tr><th>Metric</th><th>Value</th><th>Note</th></tr></thead>
            <tbody>
              ${S.tam.rows.map((r) => `
                <tr><td>${r.label}</td><td class="mw-val">${r.value}</td><td>${r.note}</td></tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  /* ---------------- Chart option helpers ---------------- */
  function baseLineOpts(unit) {
    return {
      responsive: true, maintainAspectRatio: false, animation: false,
      interaction: { intersect: false, mode: "index" },
      plugins: { legend: { display: true, position: "top" },
        tooltip: { callbacks: { label: (c) => `${c.dataset.label}: ${c.parsed.y.toLocaleString()} ${unit}` } } },
      scales: {
        x: { grid: { color: PALETTE.grid } },
        y: { grid: { color: PALETTE.grid }, ticks: { callback: (v) => v.toLocaleString() } },
      },
    };
  }
  function baseBarOpts(unit) {
    return {
      responsive: true, maintainAspectRatio: false, animation: false,
      plugins: { legend: { display: false },
        tooltip: { callbacks: { label: (c) => `${c.parsed.y !== undefined ? c.parsed.y : c.parsed.x} ${unit}` } } },
      scales: { x: { grid: { color: PALETTE.grid } }, y: { grid: { color: PALETTE.grid }, beginAtZero: true } },
    };
  }
})();
