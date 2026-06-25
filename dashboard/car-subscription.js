/* US Car Subscription Economics Simulator Engine */
document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // Elements
  const presetNew = document.getElementById("presetNew");
  const presetUsed = document.getElementById("presetUsed");
  const presetSaaS = document.getElementById("presetSaaS");

  const inputs = {
    carValue: document.getElementById("inputCarValue"),
    discount: document.getElementById("inputDiscount"),
    subFee: document.getElementById("inputSubFee"),
    util: document.getElementById("inputUtil"),
    deprec: document.getElementById("inputDeprec"),
    interest: document.getElementById("inputInterest"),
    insurance: document.getElementById("inputInsurance"),
    maint: document.getElementById("inputMaint"),
    recon: document.getElementById("inputRecon"),
    logistics: document.getElementById("inputLogistics"),
    cac: document.getElementById("inputCAC")
  };

  const labels = {
    carValue: document.getElementById("lblCarValue"),
    discount: document.getElementById("lblDiscount"),
    subFee: document.getElementById("lblSubFee"),
    util: document.getElementById("lblUtil"),
    deprec: document.getElementById("lblDeprec"),
    interest: document.getElementById("lblInterest"),
    insurance: document.getElementById("lblInsurance"),
    maint: document.getElementById("lblMaint"),
    recon: document.getElementById("lblRecon"),
    logistics: document.getElementById("lblLogistics"),
    cac: document.getElementById("lblCAC")
  };

  const outputs = {
    netContribution: document.getElementById("valNetContribution"),
    subNetContribution: document.getElementById("subNetContribution"),
    breakevenUtil: document.getElementById("valBreakevenUtil"),
    subBreakevenDays: document.getElementById("subBreakevenDays"),
    roa: document.getElementById("valROA"),
    subROA: document.getElementById("subROA"),
    scenariostate: document.getElementById("scenariostate")
  };

  let chart = null;
  let activePreset = "new"; // "new", "used", "saas"

  // Preset Configurations
  const PRESETS = {
    new: {
      carValue: 42500,
      discount: 20,
      subFee: 899,
      util: 85,
      deprec: 12.5,
      interest: 8,
      insurance: 225,
      maint: 150,
      recon: 200,
      logistics: 400,
      cac: 500
    },
    used: {
      carValue: 26500,
      discount: 10, // Used car bought at wholesale auction (approx 10% off retail)
      subFee: 749,
      util: 85,
      deprec: 15,
      interest: 8,
      insurance: 225,
      maint: 1200, // No warranty, high unexpected repairs
      recon: 1000, // Paint correction, deep interior clean, mechanical prep
      logistics: 400,
      cac: 600
    },
    saas: {
      carValue: 26500,
      discount: 0, // We don't buy the asset!
      subFee: 749,
      util: 85,
      deprec: 0, // Zero balance-sheet asset risk
      interest: 0,
      insurance: 0, // Passed to dealer or custom program
      maint: 0,
      recon: 0,
      logistics: 0,
      cac: 350 // Lower CAC due to localized marketing via dealerships
    }
  };

  // Set Preset values to inputs
  function applyPreset(presetKey) {
    activePreset = presetKey;
    const config = PRESETS[presetKey];
    
    // UI states
    presetNew.classList.toggle("active", presetKey === "new");
    presetUsed.classList.toggle("active", presetKey === "used");
    presetSaaS.classList.toggle("active", presetKey === "saas");

    // Block sliders if SaaS to represent we do not control them
    const disabledSliders = ["carValue", "discount", "deprec", "interest", "insurance", "maint", "recon", "logistics"];
    for (const key in inputs) {
      inputs[key].value = config[key];
      if (presetKey === "saas" && disabledSliders.includes(key)) {
        inputs[key].disabled = true;
        inputs[key].style.opacity = "0.4";
      } else {
        inputs[key].disabled = false;
        inputs[key].style.opacity = "1";
      }
    }

    calculateEconomics();
  }

  // Formatting helpers
  const formatCurrency = (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
  const formatPercent = (val) => val.toFixed(1) + "%";

  // Calculate and Render
  function calculateEconomics() {
    // Get values from inputs
    const carValue = parseFloat(inputs.carValue.value);
    const discount = parseFloat(inputs.discount.value);
    const subFee = parseFloat(inputs.subFee.value);
    const util = parseFloat(inputs.util.value) / 100;
    const deprec = parseFloat(inputs.deprec.value) / 100;
    const interest = parseFloat(inputs.interest.value) / 100;
    const insurance = parseFloat(inputs.insurance.value);
    const maint = parseFloat(inputs.maint.value);
    const recon = parseFloat(inputs.recon.value);
    const logistics = parseFloat(inputs.logistics.value);
    const cac = parseFloat(inputs.cac.value);

    // Update slider labels
    labels.carValue.textContent = formatCurrency(carValue);
    labels.discount.textContent = discount + "%";
    labels.subFee.textContent = formatCurrency(subFee);
    labels.util.textContent = Math.round(util * 100) + "%";
    labels.deprec.textContent = deprec * 100 + "%";
    labels.interest.textContent = interest * 100 + "%";
    labels.insurance.textContent = formatCurrency(insurance);
    labels.maint.textContent = formatCurrency(maint);
    labels.recon.textContent = formatCurrency(recon);
    labels.logistics.textContent = formatCurrency(logistics);
    labels.cac.textContent = formatCurrency(cac);

    // Calc Formula Variables
    const assetCostBasis = carValue * (1 - discount / 100);
    
    let annualRevenue = 0;
    let annualDeprec = 0;
    let annualInterest = 0;
    let annualInsurance = 0;
    let annualMaint = 0;
    let turnCosts = 0;
    let totalOperatingCost = 0;
    let netContribution = 0;
    let marginPct = 0;
    let breakevenUtilPct = 0;
    let roa = 0;

    if (activePreset === "saas") {
      // DEALER SAAS MODE (Asset-Light, 15% Take-Rate)
      const takeRate = 0.15;
      annualRevenue = subFee * 12 * util * takeRate;
      
      // Platform overhead + CAC
      const platformOverhead = 100; // API hosting, subscription management, customer support per car/year
      turnCosts = cac + platformOverhead;
      
      totalOperatingCost = turnCosts;
      netContribution = annualRevenue - totalOperatingCost;
      marginPct = (netContribution / annualRevenue) * 100;
      
      // Breakeven utilization (when platform commission covers CAC + overhead)
      const annualRevAt100 = subFee * 12 * takeRate;
      breakevenUtilPct = (totalOperatingCost / annualRevAt100) * 100;
      
      // Return on Assets is technically infinite or extremely high because we hold no assets,
      // but let's represent it as "Equity Return" or "SaaS Capital Yield" relative to CAC
      roa = (netContribution / cac) * 100;
    } else {
      // TRADITIONAL ASSET-HEAVY MODE
      annualRevenue = subFee * 12 * util;
      annualDeprec = assetCostBasis * deprec;
      annualInterest = assetCostBasis * interest;
      annualInsurance = insurance * 12;
      annualMaint = maint;
      turnCosts = recon + logistics + cac;

      totalOperatingCost = annualDeprec + annualInterest + annualInsurance + annualMaint + turnCosts;
      netContribution = annualRevenue - totalOperatingCost;
      marginPct = (netContribution / annualRevenue) * 100;

      // Breakeven utilization (when revenue = costs)
      // Rev_100 * Util = Fixed_Costs + (Turn_Costs is flat)
      // Util = Total_Operating_Cost / Rev_100
      const annualRevAt100 = subFee * 12;
      breakevenUtilPct = (totalOperatingCost / annualRevAt100) * 100;

      roa = (netContribution / assetCostBasis) * 100;
    }

    // Update KPI UI
    outputs.netContribution.textContent = formatCurrency(netContribution);
    if (netContribution < 0) {
      outputs.netContribution.className = "num neg";
      outputs.subNetContribution.textContent = marginPct.toFixed(1) + "% Net Loss Margin";
      outputs.subNetContribution.style.color = "var(--crit)";
    } else {
      outputs.netContribution.className = "num";
      outputs.subNetContribution.textContent = "+" + marginPct.toFixed(1) + "% Net Profit Margin";
      outputs.subNetContribution.style.color = "var(--accent)";
    }

    if (breakevenUtilPct > 100) {
      outputs.breakevenUtil.textContent = ">100%";
      outputs.breakevenUtil.className = "num neg";
      outputs.subBreakevenDays.textContent = "Unprofitable at any scale";
      outputs.subBreakevenDays.style.color = "var(--crit)";
    } else {
      outputs.breakevenUtil.textContent = breakevenUtilPct.toFixed(1) + "%";
      outputs.breakevenUtil.className = "num";
      const breakDays = Math.round((breakevenUtilPct / 100) * 365);
      outputs.subBreakevenDays.textContent = `${breakDays} Days / Year`;
      outputs.subBreakevenDays.style.color = "var(--accent-2)";
    }

    outputs.roa.textContent = (roa > 0 ? "+" : "") + roa.toFixed(1) + "%";
    if (activePreset === "saas") {
      outputs.roa.className = "num";
      outputs.subROA.textContent = "SaaS Capital Yield";
      outputs.subROA.style.color = "var(--accent)";
    } else {
      if (roa < 0) {
        outputs.roa.className = "num neg";
        outputs.subROA.textContent = "Asset Value Drag";
        outputs.subROA.style.color = "var(--crit)";
      } else {
        outputs.roa.className = "num";
        outputs.subROA.textContent = "Unleveraged Return";
        outputs.subROA.style.color = "var(--accent-2)";
      }
    }

    // Render Insights Commentary
    renderInsights(netContribution, marginPct, breakevenUtilPct, roa, assetCostBasis, annualRevenue, totalOperatingCost);

    // Update Chart
    updateChart(annualRevenue, annualDeprec, annualInterest, annualInsurance, annualMaint, turnCosts);
  }

  function renderInsights(netContribution, marginPct, breakevenUtilPct, roa, assetCostBasis, annualRevenue, totalOperatingCost) {
    let html = "";
    if (activePreset === "new") {
      html += `
        <p><b>Analysis (New SUV Model)</b>: You are utilizing the standard FINN playbook. By securing a <b>20% OEM fleet discount</b> ($34,000 cost basis vs $42,500 MSRP), you compress the initial capital requirements.</p>
        <p>Because the car is brand new, maintenance is minimal ($150) and it remains under factory warranty. Resale risk is minimized via 12-month pre-sold dealer buyback agreements (12.5% depreciation).</p>
      `;

      if (netContribution < 0) {
        html += `
          <div class="warning-box">
            ⚠️ <b>Unit Unprofitable:</b> At a ${inputs.util.value}% utilization rate, the vehicle is sitting idle too long (${Math.round((1 - inputs.util.value/100)*365)} days/year). The interest expense ($${Math.round(assetCostBasis * parseFloat(inputs.interest.value)/100)}) and commercial insurance ($${parseFloat(inputs.insurance.value)*12}) are draining your margins. To fix this, raise utilization to <b>90%+</b> or increase the subscription price to <b>$950+</b>.
          </div>
        `;
      } else {
        html += `
          <div class="success-box">
            ✅ <b>Viable Strategy:</b> You have unlocked a positive contribution margin of <b>${formatCurrency(netContribution)}</b> per vehicle/year! This represents an unleveraged ROA of <b>${roa.toFixed(1)}%</b>. Because you have pre-sold the residual value, this margin is <b>extremely low risk</b> and can easily support 80% leverage from debt facilities, boosting your ROE to 20%+.
          </div>
        `;
      }
    } else if (activePreset === "used") {
      html += `
        <p><b>Analysis (Used SUV Model)</b>: This is the historical "Fair.com" model. You bought a 3-year-old car for $24,000 at wholesale auction, hoping to avoid steep new-car depreciation.</p>
        <p>However, <b>without the protection of a manufacturer warranty or buyback agreements</b>, you suffer from high out-of-warranty maintenance ($1,200) and steep reconditioning costs ($1,000) when turning the vehicle between subscribers.</p>
      `;

      if (breakevenUtilPct > 100) {
        html += `
          <div class="warning-box">
            ❌ <b>Structural Suicide:</b> At $749/mo, it is mathematically impossible to break even because the <b>reconditioning, logistics, and out-of-warranty repairs completely wipe out the revenue</b>. Sourcing used cars and owning them on your balance sheet is a high-risk, negative-margin trap in the US.
          </div>
        `;
      } else {
        html += `
          <div class="warning-box">
            ⚠️ <b>Extremely Volatile:</b> Even with optimized inputs, your cash flow is at the mercy of used-car auction volatility (no buyback agreement) and catastrophic mechanical failure risk. This is not a VC-investable model.
          </div>
        `;
      }
    } else if (activePreset === "saas") {
      html += `
        <p><b>Analysis (Dealer SaaS - Asset-Light)</b>: This is our recommended **Low-Risk, High-Margin strategic pivot** for the US market.</p>
        <p>Instead of raising millions of debt to buy cars, you act as the software, insurance, and billing layer for dealership groups. The dealer owns the cars (both new and used), absorbs 100% of the depreciation, and handles maintenance in their own bays at cost.</p>
        <p>You charge a <b>15% transaction commission</b> ($112/mo per car) and focus strictly on digital marketing, credit underwriting, and software scale.</p>
      `;

      if (netContribution < 0) {
        html += `
          <div class="warning-box">
            ⚠️ <b>High CAC Burn:</b> Your CAC of $350 is taking too long to amortize. You need to keep customers subscribed longer (average 18 months instead of 12) or optimize your digital customer acquisition pipeline.
          </div>
        `;
      } else {
        html += `
          <div class="success-box">
            🚀 <b>Elite SaaS Margins:</b> You are generating a <b>${marginPct.toFixed(1)}% net software margin</b>! Because you hold **zero assets on your balance sheet**, your return on capital is virtually limitless. Dealerships love this because it monetizes idle inventory sitting on their floorplans, turning cars into yield-producing assets while incubating future car buyers.
          </div>
        `;
      }
    }

    outputs.scenariostate.innerHTML = html;
  }

  function updateChart(revenue, deprec, interest, insurance, maint, turn) {
    const ctx = document.getElementById("costBreakdownChart").getContext("2d");
    
    let labelsArr = ["Revenue", "Depreciation", "Financing (Interest)", "Insurance", "Maintenance", "Turn Costs (Ops/CAC)"];
    let dataArr = [revenue, deprec, interest, insurance, maint, turn];
    let colors = ["#38e1b0", "#ff6b6b", "#ffb454", "#5b8cff", "#b794ff", "#ff9ecb"];

    if (activePreset === "saas") {
      // Modify labels/data for SaaS mode
      labelsArr = ["SaaS Revenue (15% Cut)", "Depreciation (0%)", "Interest (0%)", "Insurance (0%)", "Maintenance (0%)", "Platform Ops + CAC"];
      dataArr = [revenue, 0, 0, 0, 0, turn];
    }

    if (chart) {
      chart.data.labels = labelsArr;
      chart.data.datasets[0].data = dataArr;
      chart.update();
    } else {
      chart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: labelsArr,
          datasets: [{
            label: "Annualized USD ($)",
            data: dataArr,
            backgroundColor: colors,
            borderWidth: 0,
            borderRadius: 8
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          },
          scales: {
            x: {
              grid: { color: "rgba(255,255,255,.05)" },
              ticks: { color: "#9aa7c2", font: { size: 10 } }
            },
            y: {
              grid: { color: "rgba(255,255,255,.05)" },
              ticks: { color: "#9aa7c2" }
            }
          }
        }
      });
    }
  }

  // Event Listeners
  presetNew.addEventListener("click", () => applyPreset("new"));
  presetUsed.addEventListener("click", () => applyPreset("used"));
  presetSaaS.addEventListener("click", () => applyPreset("saas"));

  for (const key in inputs) {
    inputs[key].addEventListener("input", () => {
      // If we manually change any input, remove the active preset highlight unless it perfectly matches
      calculateEconomics();
    });
  }

  // Initialize
  applyPreset("new");
});
