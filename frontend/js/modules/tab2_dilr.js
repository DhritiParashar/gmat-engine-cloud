window.GMAT_DI_MODULES = [
  {
    id: "di_ds",
    badge: "GMAT FOCUS DATA INSIGHTS • PILLAR 1",
    title: "Data Sufficiency (DS): Algebra, Number Properties & Constraint Isolation",
    subtitle: "8–10 Qs per Section • Pure Logical Sufficiency (No Geometry)",
    overview: "GMAT Focus moved Data Sufficiency out of Quant and into Data Insights. You never compute a final number unless required to test uniqueness—your goal is to determine whether Statement (1) alone, Statement (2) alone, both together, or neither uniquely answers the target question.",
    bridge: "Always wipe Statement (1) from memory before testing Statement (2) alone. On Yes/No DS prompts, a definitive 'NO' is just as sufficient as a definitive 'YES'. Beware the C-Trap when combining statements looks suspiciously easy.",
    drills: [
      { q: "Is integer x > 0? (1) x^2 > 16  (2) x^3 < 27", opts: ["(1) Alone", "(2) Alone", "Both Together", "Each Alone", "Neither Sufficient"], ans: 4, exp: "x = -5 satisfies both (-5)^2 = 25 > 16 and (-5)^3 = -125 < 27, whereas x = 4.5 also satisfies both -> Neither sufficient (E)." },
      { q: "If positive integer n is divisible by 6, is n divisible by 12? (1) n is divisible by 4  (2) n/3 is odd", opts: ["(1) Alone", "(2) Alone", "Both Together", "Each Alone", "Neither Sufficient"], ans: 3, exp: "(1) lcm(6,4)=12 -> Yes. (2) n/3 odd means n is not divisible by 2*3*2=12 -> definitive No. Each statement alone is sufficient (D)." }
    ]
  },
  {
    id: "di_msr",
    badge: "GMAT FOCUS DATA INSIGHTS • PILLAR 2",
    title: "Multi-Source Reasoning (MSR) & Two-Part Analysis (TPA)",
    subtitle: "10–12 Qs per Section • 3-Tab Financial Memos, Table Analysis & Graphics",
    overview: "MSR presents 2–3 tabbed executive emails, financial tables, or operational memos followed by 3 linked questions. Two-Part Analysis (TPA) tests coupled constraints—such as portfolio allocation, conditional probability, or resource trade-offs—requiring two interdependent selections.",
    bridge: "Spend 45 seconds mapping what each MSR tab contains (e.g., Tab 1: Revenue Table, Tab 2: Margin Footnotes, Tab 3: Policy Exceptions) before reading Question 1. Most 705+ traps hide in Tab 2 footnotes.",
    drills: [
      { q: "A $100M fund allocates capital across Senior Debt (6% yield) and Mezzanine Notes (11% yield) to earn exactly $8.2M annual interest. How much is allocated to Mezzanine Notes?", opts: ["$36M", "$40M", "$44M", "$50M", "$56M"], ans: 2, exp: "0.06(100 - M) + 0.11M = 8.2 => 0.05M = 2.2 => M = $44M." },
      { q: "Division A revenue rose 20% to $120M while operating margin compressed from 25% to 20%. What was the net dollar change in Division A operating profit?", opts: ["-$3.0M", "-$1.0M", "+$1.0M", "+$2.0M", "+$4.0M"], ans: 1, exp: "Prior revenue = $100M at 25% = $25M profit. Current = $120M at 20% = $24M profit -> Net change = -$1.0M." }
    ]
  }
];

window.renderTab2 = function (el) {
  window._GMAT_DI_IDX = window._GMAT_DI_IDX || 0;
  const m = window.GMAT_DI_MODULES[window._GMAT_DI_IDX];
  const nav = window.GMAT_DI_MODULES.map((item, idx) => `
    <button type="button" onclick="window._GMAT_DI_IDX=${idx}; window.renderTab2(this.closest('#tab-content') || document.querySelector('[data-tab-panel]'));"
      class="w-full text-left p-4 rounded-2xl border transition cursor-pointer ${idx === window._GMAT_DI_IDX ? 'border-indigo-500 bg-indigo-50/70 dark:bg-indigo-950/40' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'}">
      <div class="font-extrabold text-sm text-slate-900 dark:text-white">${item.title}</div>
      <div class="text-xs text-slate-500 mt-1">${item.subtitle}</div>
    </button>
  `).join("");

  const drillsHtml = m.drills.map((d, i) => `
    <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 space-y-2">
      <div class="text-xs font-bold text-slate-900 dark:text-white">Q${i+1}. ${d.q}</div>
      <div class="flex flex-wrap gap-2">
        ${d.opts.map((o, oi) => `<button type="button" onclick="this.parentElement.nextElementSibling.classList.remove('hidden')" class="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-semibold hover:border-indigo-500 cursor-pointer">${o}</button>`).join("")}
      </div>
      <div class="hidden text-xs text-emerald-700 dark:text-emerald-300 pt-1"><strong>Correct Answer: ${d.opts[d.ans]}</strong> — ${d.exp}</div>
    </div>
  `).join("");

  el.innerHTML = `
    <div class="max-w-6xl mx-auto my-4 grid grid-cols-1 lg:grid-cols-12 gap-5">
      <div class="lg:col-span-4 space-y-3">
        <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-600">DATA INSIGHTS (2 CORE PILLARS)</div>
        ${nav}
      </div>
      <div class="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4 shadow-sm">
        <span class="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600">${m.badge}</span>
        <h2 class="text-xl font-extrabold text-slate-900 dark:text-white">${m.title}</h2>
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
          <div class="font-extrabold uppercase text-[11px] text-indigo-600">Comprehensive Module Overview &amp; 735+ Strategy</div>
          <p>${m.overview}</p>
          <p><strong>Execution Heuristic:</strong> ${m.bridge}</p>
        </div>
        <div class="space-y-3">${drillsHtml}</div>
      </div>
    </div>
  `;
};