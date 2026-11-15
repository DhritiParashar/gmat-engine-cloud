window.renderTab3VarcVocab = function () {
  const container = document.getElementById("tab-content") || document.getElementById("main-tab-container");
  if (!container || !window.GMAT_OFFICIAL_BANK) return;
  const { verbal, dataInsights } = window.GMAT_OFFICIAL_BANK;

  const crHtml = verbal.criticalReasoning.map((q, idx) => `
    <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm space-y-3">
      <div class="flex justify-between items-center">
        <span class="px-2.5 py-1 text-xs font-bold rounded-full bg-indigo-100 text-indigo-800">${q.subtype}</span>
        <span class="text-xs font-medium text-slate-500">${q.difficulty}</span>
      </div>
      <p class="text-sm leading-relaxed text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-lg">${q.stimulus}</p>
      <p class="text-sm font-bold">${q.prompt}</p>
      <div class="space-y-1.5">
        ${q.options.map((opt, oIdx) => `
          <label class="flex items-start gap-2.5 p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800">
            <input type="radio" name="gmat_cr_${q.id}" value="${oIdx}" class="mt-1 accent-indigo-600">
            <span><strong>(${String.fromCharCode(65 + oIdx)})</strong> ${opt}</span>
          </label>
        `).join("")}
      </div>
      <div class="flex items-center gap-3">
        <button onclick="checkGmatMcq('cr', ${idx}, '${q.id}')" class="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold">Verify Logic</button>
        <span id="res_${q.id}" class="text-xs font-bold"></span>
      </div>
      <div id="exp_${q.id}" class="hidden p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-xs text-emerald-900 dark:text-emerald-200">${q.explanation}</div>
    </div>
  `).join("");

  const diHtml = dataInsights.map((q, idx) => {
    if (q.rows) {
      return `
        <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm space-y-3">
          <div class="flex justify-between items-center">
            <span class="px-2.5 py-1 text-xs font-bold rounded-full bg-amber-100 text-amber-800">${q.subtype}</span>
            <span class="text-xs font-medium text-slate-500">${q.difficulty}</span>
          </div>
          <p class="text-sm leading-relaxed">${q.stem}</p>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border border-slate-200 dark:border-slate-700 rounded-lg">
              <thead class="bg-slate-100 dark:bg-slate-800">
                <tr>
                  <th class="p-2 text-center">${q.col1Label}</th>
                  <th class="p-2 text-center">${q.col2Label}</th>
                  <th class="p-2 text-left">Candidate Allocation</th>
                </tr>
              </thead>
              <tbody>
                ${q.rows.map((rVal, rIdx) => `
                  <tr class="border-t border-slate-200 dark:border-slate-700">
                    <td class="p-2 text-center"><input type="radio" name="tpa_c1_${q.id}" value="${rIdx}" class="accent-amber-600"></td>
                    <td class="p-2 text-center"><input type="radio" name="tpa_c2_${q.id}" value="${rIdx}" class="accent-amber-600"></td>
                    <td class="p-2 font-medium">${rVal}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
          <div class="flex items-center gap-3">
            <button onclick="checkGmatTpa(${idx}, '${q.id}')" class="px-4 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold">Verify Both Columns</button>
            <span id="res_${q.id}" class="text-xs font-bold"></span>
          </div>
          <div id="exp_${q.id}" class="hidden p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-xs text-emerald-900 dark:text-emerald-200">${q.explanation}</div>
        </div>
      `;
    }
    return `
      <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm space-y-3">
        <div class="flex justify-between items-center">
          <span class="px-2.5 py-1 text-xs font-bold rounded-full bg-teal-100 text-teal-800">${q.subtype}</span>
          <span class="text-xs font-medium text-slate-500">${q.difficulty}</span>
        </div>
        <pre class="whitespace-pre-wrap font-sans text-sm leading-relaxed bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-lg">${q.stem}</pre>
        <div class="space-y-1.5">
          ${q.options.map((opt, oIdx) => `
            <label class="flex items-start gap-2.5 p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800">
              <input type="radio" name="gmat_di_${q.id}" value="${oIdx}" class="mt-1 accent-teal-600">
              <span><strong>(${String.fromCharCode(65 + oIdx)})</strong> ${opt}</span>
            </label>
          `).join("")}
        </div>
        <div class="flex items-center gap-3">
          <button onclick="checkGmatMcq('di', ${idx}, '${q.id}')" class="px-4 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold">Verify Sufficiency</button>
          <span id="res_${q.id}" class="text-xs font-bold"></span>
        </div>
        <div id="exp_${q.id}" class="hidden p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-xs text-emerald-900 dark:text-emerald-200">${q.explanation}</div>
      </div>
    `;
  }).join("");

  container.innerHTML = `
    <div class="space-y-8">
      <div class="p-4 rounded-xl bg-indigo-950 text-white">
        <h2 class="text-xl font-bold">GMAC GMAT Focus Edition — Verbal (CR &amp; RC) &amp; Data Insights Studio (205–805 Scale)</h2>
        <p class="text-xs text-slate-300 mt-1">100% aligned with GMAC GMAT Focus specifications: Critical Reasoning &amp; Reading Comprehension only in Verbal (zero grammar or vocab drills), plus Data Sufficiency &amp; Two-Part Analysis in Data Insights.</p>
      </div>
      <section class="space-y-4"><h3 class="text-lg font-bold">1. Verbal Reasoning — Critical Reasoning (Weaken, Assumption, Evaluate)</h3>${crHtml}</section>
      <section class="space-y-4"><h3 class="text-lg font-bold">2. Data Insights — Data Sufficiency &amp; Two-Part Analysis</h3>${diHtml}</section>
    </div>
  `;
};

window.checkGmatMcq = function (sec, idx, id) {
  const q = sec === "cr" ? window.GMAT_OFFICIAL_BANK.verbal.criticalReasoning[idx] : window.GMAT_OFFICIAL_BANK.dataInsights[idx];
  const sel = document.querySelector(`input[name="gmat_${sec}_${id}"]:checked`);
  const res = document.getElementById(`res_${id}`);
  const exp = document.getElementById(`exp_${id}`);
  if (!sel) { res.textContent = "Select an option first."; return; }
  const ok = parseInt(sel.value, 10) === q.correct;
  res.textContent = ok ? "Correct!" : `Incorrect — Answer is (${String.fromCharCode(65 + q.correct)}).`;
  res.className = ok ? "text-xs font-bold text-emerald-600" : "text-xs font-bold text-rose-600";
  exp.classList.remove("hidden");
};

window.checkGmatTpa = function (idx, id) {
  const q = window.GMAT_OFFICIAL_BANK.dataInsights[idx];
  const c1 = document.querySelector(`input[name="tpa_c1_${id}"]:checked`);
  const c2 = document.querySelector(`input[name="tpa_c2_${id}"]:checked`);
  const res = document.getElementById(`res_${id}`);
  const exp = document.getElementById(`exp_${id}`);
  if (!c1 || !c2) { res.textContent = "Select one radio button in BOTH columns."; return; }
  const ok = parseInt(c1.value, 10) === q.correctRow1 && parseInt(c2.value, 10) === q.correctRow2;
  res.textContent = ok ? "Correct! Both coupled constraints satisfied." : "Incorrect — GMAC awards zero partial credit on Two-Part Analysis.";
  res.className = ok ? "text-xs font-bold text-emerald-600" : "text-xs font-bold text-rose-600";
  exp.classList.remove("hidden");
};