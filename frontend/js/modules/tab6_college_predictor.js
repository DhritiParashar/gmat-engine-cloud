window.GMAT_ADMIT_STATE = window.GMAT_ADMIT_STATE || {
  qr: 85, vr: 84, di: 83,
  ugCgpa10: 9.10, ugGpa: 3.64, workExYears: 4.0,
  track: "MBA", leadershipTier: "STRONG",
  mockSyncLabel: "Synced with Registered Profile"
};

window.calcGmatFocusTotal = function () {
  const s = window.GMAT_ADMIT_STATE;
  const sumSec = Number(s.qr) + Number(s.vr) + Number(s.di);
  const raw205 = Math.round(205 + ((sumSec - 180) / 90) * 600);
  return Math.min(805, Math.max(205, Math.round(raw205 / 10) * 10 + 5));
};

window.syncGmatFromLatestMock = function () {
  let hist = [];
  try { hist = JSON.parse(localStorage.getItem("ipm_mock_history_v1") || "[]"); } catch (e) {}
  if (!hist.length) {
    alert("Complete and submit a GMAT Focus Mock in Tab 4 first to correlate your score.");
    return;
  }
  const latest = hist[0];
  const ratio = Math.max(0, Math.min(1, Number(latest.score || 0) / Math.max(1, Number(latest.maxScore || 64))));
  const secVal = Math.min(90, Math.max(60, Math.round(60 + ratio * 30)));
  window.GMAT_ADMIT_STATE.qr = secVal;
  window.GMAT_ADMIT_STATE.vr = secVal;
  window.GMAT_ADMIT_STATE.di = Math.max(60, secVal - 1);
  window.GMAT_ADMIT_STATE.mockSyncLabel = `Imported Tab 4 Mock (${latest.score}/${latest.maxScore}) → Est. ${window.calcGmatFocusTotal()}/805`;
  window.renderTab6(window._LAST_TAB6_EL || document.getElementById("tab-content"));
};

window.updateGmatAdmitField = function (field, val) {
  window.GMAT_ADMIT_STATE[field] = (field === "track" || field === "leadershipTier") ? String(val) : Number(val);
  if (field === "ugCgpa10") window.GMAT_ADMIT_STATE.ugGpa = Number(((window.GMAT_ADMIT_STATE.ugCgpa10 / 10) * 4.0).toFixed(2));
  window.renderTab6(window._LAST_TAB6_EL || document.getElementById("tab-content"));
};

window.renderTab6 = function (el) {
  if (!el) return;
  window._LAST_TAB6_EL = el;
  try {
    const p = JSON.parse(localStorage.getItem("goalisb_postgrad_profile_v1") || "{}");
    if (p.ugCgpa10) { window.GMAT_ADMIT_STATE.ugCgpa10 = Number(p.ugCgpa10); window.GMAT_ADMIT_STATE.ugGpa = Number(p.ugGpa4 || (p.ugCgpa10/10)*4.0); }
    if (p.workExMonths !== undefined) window.GMAT_ADMIT_STATE.workExYears = Number((p.workExMonths / 12).toFixed(1));
  } catch (e) {}

  const s = window.GMAT_ADMIT_STATE;
  const totalScore = window.calcGmatFocusTotal();
  const leadBonus = s.leadershipTier === "EXCEPTIONAL" ? 20 : (s.leadershipTier === "STRONG" ? 10 : 0);
  const gpaBonus = (s.ugGpa - 3.3) * 35;
  const wxFit = s.track === "MIM" ? (s.workExYears <= 2 ? 15 : -10) : (s.workExYears >= 3 && s.workExYears <= 7 ? 15 : 5);
  const effectiveIndex = totalScore + leadBonus + gpaBonus + wxFit;

  const schools = [
    { name: "Wharton (UPenn) — MBA", median: 732, minDiQr: 82, fee: "$174K • Median Comp $215K", scholCut: 745 },
    { name: "INSEAD — 1-Year Global MBA", median: 705, minDiQr: 80, fee: "€103K • Global Consulting Leader", scholCut: 725 },
    { name: "London Business School (LBS) — MBA", median: 705, minDiQr: 80, fee: "£115K • London Finance/Strategy", scholCut: 725 },
    { name: "ISB Hyderabad/Mohali — PGP", median: 715, minDiQr: 81, fee: "₹42L • Avg CTC ₹36.2L (1-Yr PGP)", scholCut: 735 },
    { name: "Northwestern Kellogg — 2Y / 1Y MBA", median: 725, minDiQr: 81, fee: "$168K • PM & Strategy Powerhouse", scholCut: 745 },
    { name: "Chicago Booth — MBA", median: 728, minDiQr: 83, fee: "$170K • Quant Finance & PE", scholCut: 745 },
    { name: "HEC Paris — MBA / MiM", median: 695, minDiQr: 79, fee: "€98K • European Luxury & Strategy", scholCut: 715 },
    { name: "NUS Singapore — MBA", median: 675, minDiQr: 78, fee: "SGD 95K • APAC Tech & Finance", scholCut: 705 }
  ];

  const cardsHtml = schools.map(sc => {
    const quantWeak = s.qr < sc.minDiQr || s.di < sc.minDiQr;
    const diff = effectiveIndex - sc.median;
    const badge = quantWeak
      ? `<span class="px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 text-[11px] font-bold">QR/DI Quant Gate (&lt;${sc.minDiQr})</span>`
      : (diff >= 15
          ? `<span class="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[11px] font-bold">Strong Admit + Fellowship</span>`
          : (diff >= -10
              ? `<span class="px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 text-[11px] font-bold">Competitive Target</span>`
              : `<span class="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-bold">Reach (+${Math.ceil(sc.median - effectiveIndex)} pts)</span>`));
    const schol = totalScore >= sc.scholCut ? "High Merit Fellowship (25%–50%)" : (totalScore >= sc.median ? "Moderate (10%–25%)" : "Standard");
    return `
      <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 flex flex-wrap items-center justify-between gap-3 shadow-sm">
        <div class="space-y-0.5">
          <div class="font-extrabold text-sm text-slate-900 dark:text-white">${sc.name}</div>
          <div class="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">${sc.fee} &bull; Median ${sc.median} Focus (QR/DI &ge;${sc.minDiQr})</div>
          <div class="text-[11px] text-slate-500 dark:text-slate-400">Scholarship Outlook: ${schol}</div>
        </div>
        <div>${badge}</div>
      </div>
    `;
  }).join("");

  el.innerHTML = `
    <div class="max-w-6xl mx-auto my-4 grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div class="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-4 shadow-sm">
        <div class="flex items-start justify-between gap-2">
          <div>
            <span class="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600">Global MBA / MiM Command Center</span>
            <h2 class="text-lg font-extrabold text-slate-900 dark:text-white">M7, INSEAD, LBS, ISB &amp; HEC Predictor</h2>
          </div>
          <button type="button" onclick="window.syncGmatFromLatestMock()" class="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold cursor-pointer">&#8635; Sync Mock</button>
        </div>
        <div class="text-[11px] text-emerald-600 font-semibold">${s.mockSyncLabel}</div>

        <div class="space-y-2.5">
          <div><div class="flex justify-between text-xs"><span>Quantitative Reasoning (60–90)</span><strong>${s.qr} / 90</strong></div><input type="range" min="60" max="90" value="${s.qr}" oninput="window.updateGmatAdmitField('qr', this.value)" class="w-full accent-indigo-600"></div>
          <div><div class="flex justify-between text-xs"><span>Verbal Reasoning (60–90)</span><strong>${s.vr} / 90</strong></div><input type="range" min="60" max="90" value="${s.vr}" oninput="window.updateGmatAdmitField('vr', this.value)" class="w-full accent-indigo-600"></div>
          <div><div class="flex justify-between text-xs"><span>Data Insights (60–90)</span><strong>${s.di} / 90</strong></div><input type="range" min="60" max="90" value="${s.di}" oninput="window.updateGmatAdmitField('di', this.value)" class="w-full accent-indigo-600"></div>
          <div class="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 flex justify-between text-xs">
            <span class="font-bold text-slate-700 dark:text-slate-200">GMAT Focus Total:</span>
            <strong class="text-indigo-700 dark:text-indigo-300">${totalScore} / 805</strong>
          </div>
        </div>

        <div class="space-y-2.5 pt-2 border-t border-slate-200 dark:border-slate-800">
          <div><div class="flex justify-between text-xs"><span>Undergrad CGPA (/10 &rarr; 4.0 GPA)</span><strong>${s.ugCgpa10.toFixed(1)}/10 (${s.ugGpa.toFixed(2)} GPA)</strong></div><input type="range" min="5.5" max="10.0" step="0.1" value="${s.ugCgpa10}" oninput="window.updateGmatAdmitField('ugCgpa10', this.value)" class="w-full accent-indigo-600"></div>
          <div><div class="flex justify-between text-xs"><span>Post-Grad Work Experience</span><strong>${s.workExYears.toFixed(1)} Years</strong></div><input type="range" min="0" max="10" step="0.5" value="${s.workExYears}" oninput="window.updateGmatAdmitField('workExYears', this.value)" class="w-full accent-indigo-600"></div>
          <select onchange="window.updateGmatAdmitField('track', this.value)" class="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-xs font-semibold">
            <option value="MBA" ${s.track==="MBA"?"selected":""}>Full-Time MBA / ISB PGP (2–7 Yrs)</option>
            <option value="MIM" ${s.track==="MIM"?"selected":""}>Master in Management (MiM • 0–2 Yrs)</option>
            <option value="EMBA" ${s.track==="EMBA"?"selected":""}>Executive MBA (7+ Yrs)</option>
          </select>
        </div>
      </div>
      <div class="lg:col-span-7 space-y-2.5">${cardsHtml}</div>
    </div>
  `;
};
window.renderCollegePredictor = window.renderTab6;