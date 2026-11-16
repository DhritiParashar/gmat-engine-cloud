window.GMAT_PREP_STATE = window.GMAT_PREP_STATE || {
  qr: 84, vr: 83, di: 82,
  syncNote: "Synced with Tab 4 Mock Ledger (Adjust sliders or click Sync Mock)"
};

window.calcGmatFocusTotal = function () {
  const s = window.GMAT_PREP_STATE;
  const sumSec = Number(s.qr) + Number(s.vr) + Number(s.di);
  const raw205 = Math.round(205 + ((sumSec - 180) / 90) * 600);
  return Math.min(805, Math.max(205, Math.round(raw205 / 10) * 10 + 5));
};

window.syncGmatPrepFromMock = function () {
  let hist = [];
  try { hist = JSON.parse(localStorage.getItem("ipm_mock_history_v1") || "[]"); } catch (e) {}
  if (!hist.length) {
    alert("Complete and submit a Timed Adaptive Mock in Tab 4 first to load your live GMAT Focus telemetry.");
    return;
  }
  const latest = hist[0];
  const ratio = Math.max(0, Math.min(1, Number(latest.score || 0) / Math.max(1, Number(latest.maxScore || 64))));
  const secVal = Math.min(90, Math.max(60, Math.round(60 + ratio * 30)));
  window.GMAT_PREP_STATE.qr = secVal;
  window.GMAT_PREP_STATE.vr = secVal;
  window.GMAT_PREP_STATE.di = Math.max(60, secVal - 1);
  window.GMAT_PREP_STATE.syncNote = `Synced from Mock #${hist.length} (${latest.score}/${latest.maxScore}) → Est. ${window.calcGmatFocusTotal()}/805`;
  window.renderTab6(window._LAST_TAB6_EL || document.getElementById("tab-content"));
};

window.updateGmatPrepField = function (field, val) {
  window.GMAT_PREP_STATE[field] = Number(val);
  window.renderTab6(window._LAST_TAB6_EL || document.getElementById("tab-content"));
};

window.renderTab6 = function (el) {
  if (!el) return;
  window._LAST_TAB6_EL = el;
  const s = window.GMAT_PREP_STATE;
  const totalScore = window.calcGmatFocusTotal();

  const bands = [
    { label: "735+ (99.6th %ile) Mastery Band", target: 735, split: "QR 87+ • VR 86+ • DI 86+", pace: "≤ 2.0 min/Q in QR • Zero unanswered questions • Max 1–2 hard misses in Q1–Q7", focus: "Eliminate DS C-Traps and master 3-tab MSR synthesis under 2.2 mins/Q." },
    { label: "715+ (99th %ile) Benchmark", target: 715, split: "QR 85+ • VR 85+ • DI 84+", pace: "100% completion across all 3 sections (21 QR / 23 VR / 20 DI)", focus: "Protect early-question accuracy (Q1–Q6) to anchor the upper computer-adaptive band." },
    { label: "685+ (96th %ile) Benchmark", target: 685, split: "QR 84+ • VR 83+ • DI 82+", pace: "Use 3-question Review & Edit allowance only on flagged arithmetic checks", focus: "Drill Tab 1 Weighted Averages/Algebra + Tab 2 Data Sufficiency isolation." },
    { label: "655+ (91st %ile) Foundation Band", target: 655, split: "QR 82+ • VR 81+ • DI 80+", pace: "Strict 45-min section discipline — never leave final 2 questions blank", focus: "Complete all 18 GMAT Adaptive Traps in Tab 5." }
  ];

  const weakest = [
    { name: "Data Insights (DI)", val: s.di, tip: "Drill Tab 2 Data Sufficiency & Multi-Source Reasoning sets to push DI ≥ 85." },
    { name: "Quantitative Reasoning (QR)", val: s.qr, tip: "Practice Tab 1 Zero-Geometry Algebra & Number Properties back-solving." },
    { name: "Verbal Reasoning (VR)", val: s.vr, tip: "Master Tab 3 Boldface & Necessary Assumption negation tests." }
  ].sort((a, b) => a.val - b.val)[0];

  const cardsHtml = bands.map(b => {
    const diff = totalScore - b.target;
    const status = diff >= 0
      ? `<span class="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[11px] font-bold">Achieved (+${diff} pts)</span>`
      : `<span class="px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 text-[11px] font-bold">Need +${Math.abs(diff)} Focus Points</span>`;
    return `
      <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 space-y-1.5 shadow-sm">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div class="font-extrabold text-sm text-slate-900 dark:text-white">${b.label}</div>
          <div>${status}</div>
        </div>
        <div class="text-[11px] font-mono text-indigo-600 dark:text-indigo-300 font-semibold">Required Sectional Floor: ${b.split}</div>
        <div class="text-xs text-slate-600 dark:text-slate-300"><strong>Adaptive Pacing Rule:</strong> ${b.pace}</div>
        <div class="text-[11px] text-slate-500 dark:text-slate-400"><strong>Prep Prescription:</strong> ${b.focus}</div>
      </div>
    `;
  }).join("");

  el.innerHTML = `
    <div class="max-w-6xl mx-auto my-4 grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div class="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-4 shadow-sm">
        <div class="flex items-start justify-between gap-2">
          <div>
            <span class="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600">GMAT Focus 205–805 Diagnostic Engine</span>
            <h2 class="text-lg font-extrabold text-slate-900 dark:text-white">Adaptive Score &amp; Readiness Forecaster</h2>
          </div>
          <button type="button" onclick="window.syncGmatPrepFromMock()" class="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold cursor-pointer">&#8635; Sync Mock</button>
        </div>
        <div class="text-[11px] text-emerald-600 font-semibold">${s.syncNote}</div>

        <div class="space-y-3">
          <div><div class="flex justify-between text-xs"><span>Quantitative Reasoning (21 Qs • 45m)</span><strong>${s.qr} / 90</strong></div><input type="range" min="60" max="90" value="${s.qr}" oninput="window.updateGmatPrepField('qr', this.value)" class="w-full accent-indigo-600"></div>
          <div><div class="flex justify-between text-xs"><span>Verbal Reasoning (23 Qs • 45m)</span><strong>${s.vr} / 90</strong></div><input type="range" min="60" max="90" value="${s.vr}" oninput="window.updateGmatPrepField('vr', this.value)" class="w-full accent-indigo-600"></div>
          <div><div class="flex justify-between text-xs"><span>Data Insights (20 Qs • 45m)</span><strong>${s.di} / 90</strong></div><input type="range" min="60" max="90" value="${s.di}" oninput="window.updateGmatPrepField('di', this.value)" class="w-full accent-indigo-600"></div>
        </div>

        <div class="p-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 space-y-1">
          <div class="flex justify-between text-xs"><span class="font-bold">Projected GMAT Focus Total:</span><strong class="text-indigo-700 dark:text-indigo-300 text-sm">${totalScore} / 805</strong></div>
          <div class="text-[11px] text-slate-600 dark:text-slate-300"><strong>Highest-Leverage Section (${weakest.name}):</strong> ${weakest.tip}</div>
        </div>
      </div>
      <div class="lg:col-span-7 space-y-2.5">${cardsHtml}</div>
    </div>
  `;
};
window.renderCollegePredictor = window.renderTab6;