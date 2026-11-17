// ==============================================================================
// GMAT FOCUS EDITION (205-805) FULL-LENGTH-MOCK-ONLY SCORE FORECASTER (TAB 6)
// - Calibrated strictly from completed Full-Length 64-Q Mocks (score > 0)
// - Excludes practice drills, sectional sprints, and 0-score unattempted runs
// ==============================================================================
(function () {
  window.renderGmatFullMockForecaster6 = function (el) {
    const target = el || document.getElementById("main-workspace");
    if (!target) return;

    const rawHist = JSON.parse(localStorage.getItem("ipm_mock_history_v1") || "[]");
    const fullMocks = rawHist.filter(h =>
      (Number(h.maxScore || 0) >= 64 || String(h.blueprint || "").toLowerCase().includes("full")) &&
      Number(h.score || 0) > 0
    );

    const hasMocks = fullMocks.length > 0;
    const latest = hasMocks ? fullMocks[0] : null;
    const getGmat805 = (m) => {
      if (Number(m.scaled805 || 0) >= 205) return Number(m.scaled805);
      const raw = Number(m.score || 0);
      const max = Math.max(1, Number(m.maxScore || 64));
      return Math.min(805, Math.max(205, Math.round((205 + (raw / max) * 600) / 10) * 10 + 5));
    };

    const latest805 = hasMocks ? getGmat805(latest) : null;
    const avg805 = hasMocks ? Math.round((fullMocks.reduce((a, m) => a + getGmat805(m), 0) / fullMocks.length) / 10) * 10 + 5 : null;
    const best805 = hasMocks ? Math.max(...fullMocks.map(getGmat805)) : null;
    const projected805 = hasMocks
      ? Math.min(805, Math.max(205, Math.round((0.60 * latest805 + 0.25 * avg805 + 0.15 * best805) / 10) * 10 + 5))
      : null;

    const tiers = [
      { band: "715+ (99th %ile) • HBS / Stanford GSB / Wharton", req: "Target Split: Q88+ • V86+ • DI85+ (Equiv. 760+ Classic GMAT)", target: 715 },
      { band: "695+ (97th %ile) • Booth / Kellogg / Sloan / Columbia", req: "Target Split: Q86+ • V84+ • DI83+ (Equiv. 740+ Classic GMAT)", target: 695 },
      { band: "675+ (94th %ile) • INSEAD / LBS / Tuck / Yale SOM", req: "Target Split: Q85+ • V83+ • DI81+ (Equiv. 720+ Classic GMAT)", target: 675 },
      { band: "645+ (86th %ile) • ISB / Ross / Duke Fuqua / Darden", req: "Target Split: Q83+ • V81+ • DI79+ (Equiv. 700+ Classic GMAT)", target: 645 }
    ];

    target.innerHTML = `
      <div class="max-w-7xl mx-auto pt-4 pb-8 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div class="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4 shadow-sm">
          <div class="flex items-center justify-between gap-2">
            <div>
              <div class="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600">FULL-MOCK-ONLY DIAGNOSTIC ENGINE</div>
              <h2 class="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">GMAT Focus Forecast (205–805)</h2>
            </div>
            <button type="button" onclick="window.renderGmatFullMockForecaster6();"
              class="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold cursor-pointer">&#8635; Refresh Full Mocks</button>
          </div>

          <div class="p-3 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-[11px] text-indigo-900 dark:text-indigo-200 font-semibold">
            Calibrated <strong>exclusively</strong> from completed Full-Length 64-Question GMAT Focus Mocks (Quant 21 + Verbal 23 + DI 20). Practice drills and sectional sprints do not alter this forecast.
          </div>

          ${hasMocks ? `
            <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3">
              <div class="flex items-baseline justify-between">
                <span class="text-xs font-extrabold uppercase text-slate-500">Projected GMAT Focus Score</span>
                <span class="text-3xl font-extrabold text-indigo-600">${projected805} / 805</span>
              </div>
              <div class="text-xs font-bold text-slate-700 dark:text-slate-300">
                Latest Full Mock (<strong>${latest.serialId || "GMAT-MOCK"}</strong>): <span class="text-emerald-600 font-extrabold">${latest805} / 805</span> (${latest.score}/${latest.maxScore} &bull; ${latest.accuracy || 0}%)
              </div>
              <div class="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200 dark:border-slate-800 text-xs">
                <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border"><div class="text-[10px] font-bold text-slate-400">FULL MOCKS</div><div class="font-extrabold mt-0.5">${fullMocks.length} Valid</div></div>
                <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border"><div class="text-[10px] font-bold text-slate-400">FULL-MOCK AVG</div><div class="font-extrabold text-indigo-600 mt-0.5">${avg805} / 805</div></div>
                <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border"><div class="text-[10px] font-bold text-slate-400">PEAK FULL MOCK</div><div class="font-extrabold text-emerald-600 mt-0.5">${best805} / 805</div></div>
              </div>
            </div>
            <div class="space-y-2">
              <div class="text-xs font-extrabold uppercase text-slate-500">Verified Full-Length GMAT Focus Trajectory</div>
              ${fullMocks.slice(0, 5).map(m => `
                <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs">
                  <div><span class="font-mono font-extrabold text-indigo-600">${m.serialId || "GMAT-2026"}</span> <span class="text-slate-500 ml-1.5">${m.date || ""}</span></div>
                  <div class="font-extrabold">${getGmat805(m)} / 805 <span class="text-[11px] font-semibold text-slate-500">(${m.score}/${m.maxScore} &bull; ${m.accuracy || 0}%)</span></div>
                </div>
              `).join("")}
            </div>
          ` : `
            <div class="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 space-y-3 text-xs">
              <div class="font-extrabold text-amber-900 dark:text-amber-200 text-sm">No Scored Full-Length 64-Q GMAT Focus Mocks Completed Yet</div>
              <p class="text-slate-700 dark:text-slate-300 leading-relaxed">Practice drills and unattempted (0-score) launches are excluded. Complete at least one Full-Length 64-Question GMAT Focus Simulation to unlock your calibrated 205–805 B-School Admit Forecast.</p>
            </div>
          `}

          ${rawHist.some(h => Number(h.score || 0) <= 0) ? `
            <button type="button" onclick="const clean=JSON.parse(localStorage.getItem('ipm_mock_history_v1')||'[]').filter(h=>Number(h.score||0)>0); localStorage.setItem('ipm_mock_history_v1',JSON.stringify(clean)); window.renderGmatFullMockForecaster6();"
              class="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-[11px] font-extrabold cursor-pointer">Remove Unattempted (0-Score) Test Entries</button>
          ` : ""}
        </div>

        <div class="lg:col-span-7 space-y-3">
          ${tiers.map(t => {
            const gap = hasMocks ? (t.target - projected805) : null;
            return `
              <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-1.5">
                <div class="flex flex-wrap items-center justify-between gap-2">
                  <h3 class="text-base font-extrabold text-slate-900 dark:text-white">${t.band}</h3>
                  <span class="px-3 py-1 rounded-full text-xs font-extrabold ${!hasMocks ? "bg-slate-100 text-slate-600" : (gap <= 0 ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800")}">
                    ${!hasMocks ? "Awaiting Full 64-Q Mock" : (gap <= 0 ? "Target Achieved ✓" : `Need +${gap} GMAT Points`)}
                  </span>
                </div>
                <div class="text-xs font-bold text-indigo-600">${t.req}</div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  };

  window.renderTab6 = window.renderGmatFullMockForecaster6;
  window.renderCallPredictor6 = window.renderGmatFullMockForecaster6;
  window.renderCallPredictor = window.renderGmatFullMockForecaster6;
  window.renderCollegePredictor = window.renderGmatFullMockForecaster6;
  const _origGmatSwitch = window.switchTab;
  window.switchTab = function (n) {
    if (typeof _origGmatSwitch === "function") _origGmatSwitch(n);
    if (Number(n) === 6) setTimeout(() => window.renderGmatFullMockForecaster6(), 30);
  };
  window.addEventListener("DOMContentLoaded", () => {
    const _s = window.switchTab;
    window.switchTab = function (n) {
      if (typeof _s === "function") _s(n);
      if (Number(n) === 6) setTimeout(() => window.renderGmatFullMockForecaster6(), 30);
    };
  });
})();