// ==============================================================================
// GMAT FOCUS TAB 3: FULL-DEPTH VERBAL STUDIO (CR & RC • ZERO SENTENCE CORRECTION)
// Independent Left & Right Split-Pane Workspace + Live GMAT Verbal PYQ Sync
// ==============================================================================
(function () {
  const GMAT_VERBAL_MODULES = [
    {
      id: "VR_ASSUMP",
      code: "MODULE 1 OF 5",
      title: "Critical Reasoning: Necessary & Sufficient Assumptions",
      sub: "5–6 Qs per Test • Negation Test & Gap-Bridging Logic",
      overview: "GMAT Focus Critical Reasoning eliminates Sentence Correction entirely, elevating Assumption-family questions to ~30% of Verbal Reasoning. A Necessary Assumption is a required link without which the author's conclusion collapses; a Sufficient Assumption is a strong rule that guarantees the conclusion 100%.",
      bridge: "Concept Bridge (The Negation Test): Logically negate the candidate answer choice ('all' -> 'not all'; 'will' -> 'may not'; 'primary' -> 'not primary'). If the negated statement destroys the conclusion, it is the correct Necessary Assumption.",
      prereq: "Prerequisites & Core Identities: Separate Premise (evidence/data) from Conclusion (prediction/claim). Eliminate extreme choices ('only', 'never', 'must') on Necessary Assumption items, but embrace strong universal rules on Sufficient Assumption items.",
      workedExample: {
        stimulus: "Municipal water utility analysts noted that households fitted with smart flow meters cut water consumption by 22% over six months. Therefore, installing smart flow meters in every residence citywide will reduce total municipal water demand by at least 20%.",
        question: "Which of the following is an assumption on which the argument depends?",
        correctChoice: "Commercial and industrial users do not account for the overwhelming majority of total municipal water demand.",
        breakdown: "1. Gap: Evidence is about *households* (-22%), while the conclusion is about *total municipal water demand* (-20%).\n2. Negation Test: Suppose commercial/industrial factories use 90% of municipal water. Even a 22% drop in the remaining 10% residential share reduces total city demand by only 2.2%, falsifying the 20% claim."
      },
      shortcuts: [
        "1. Gap-Finder Scan: Compare the key noun phrase in the final premise with the new concept introduced in the conclusion—the correct answer bridges those exact two terms.",
        "2. Defender vs. Supporter Type: Watch for 'Defender' choices that rule out an alternative factor that would otherwise undermine the conclusion.",
        "3. Sufficient vs. Necessary Direction: 'Properly drawn if which is assumed' = Sufficient (strong premise -> conclusion). 'Depends on which' = Necessary (conclusion -> required condition)."
      ],
      drills: [
        { q: "Premise: Solar panel installation costs fell 40% this year. Conclusion: Therefore, residential solar adoption will double next year. Which is a necessary assumption?", opts: ["A) Government subsidies will increase next year.", "B) Installation cost is a primary barrier preventing homeowners from adopting solar.", "C) Grid electricity prices will rise by at least 20%.", "D) All homeowners have roof space suitable for solar panels.", "E) Battery storage technology will become twice as efficient."], ans: 1, exp: "Negating (B): If installation cost is NOT a primary barrier (e.g., HOA bans or grid hookup delays block adoption), falling costs will not double adoption." },
        { q: "Premise: Every employee who completed the Python bootcamp was promoted within six months. Ravi was promoted within four months. Which additional premise guarantees Ravi completed the Python bootcamp?", opts: ["A) Most promoted employees took the Python bootcamp.", "B) Only employees who completed the Python bootcamp were promoted within six months.", "C) Ravi scored highest on the technical assessment.", "D) No employee was promoted without managerial approval.", "E) The Python bootcamp is mandatory for senior analysts."], ans: 1, exp: "Sufficient Assumption requires reversing the conditional: 'Promoted within 6 months -> Completed bootcamp', which is stated by 'Only employees who completed... were promoted' (B)." },
        { q: "Premise: Switching hospital surgical checklists from paper to tablet software cut missing-item errors by 60% in a 12-week pilot. Conclusion: Permanent adoption will sustain a 60% error reduction. Necessary assumption?", opts: ["A) Tablet software costs less than paper forms.", "B) The 60% drop was not merely a temporary novelty effect of being closely observed during the pilot.", "C) Surgeons prefer tablets over paper.", "D) Other hospitals have already adopted tablet checklists.", "E) All surgical errors are caused by missing checklist items."], ans: 1, exp: "Negating (B): If the drop was a temporary Hawthorne/novelty effect during the 12-week trial, permanent adoption will not sustain the 60% reduction." }
      ]
    },
    {
      id: "VR_WEAKEN",
      code: "MODULE 2 OF 5",
      title: "Critical Reasoning: Weaken, Strengthen & Logical Flaw",
      sub: "6–7 Qs per Test • Causality, Sampling Bias & Baseline Traps",
      overview: "Weaken and Strengthen items test whether you can attack or reinforce the inferential link between evidence and conclusion—most commonly correlation-vs-causation leaps, unrepresentative survey samples, or raw numbers confused with percentages.",
      bridge: "Concept Bridge (3-Way Causal Attack): To weaken 'X caused Y', either (1) introduce an Alternative Cause Z, (2) show Reverse Causation (Y caused X), or (3) show X occurred without Y (or Y without X).",
      prereq: "Prerequisites & Core Identities: Never argue with the stated premises—accept them as 100% true and target the unstated assumption connecting them to the conclusion.",
      workedExample: {
        stimulus: "A regional airline introduced free onboard Wi-Fi on its business routes in Q2 and saw business-class ticket revenue rise 18% in Q3. Management concluded that free Wi-Fi drove the revenue surge.",
        question: "Which of the following, if true, most seriously weakens management's conclusion?",
        correctChoice: "A major competing carrier suspended all flights on those same business routes at the start of Q3.",
        breakdown: "1. Causal Claim: Free Wi-Fi (X) -> 18% revenue jump (Y).\n2. Alternative Cause (Z): Competitor exit in Q3 forced stranded business travelers onto this airline regardless of Wi-Fi."
      },
      shortcuts: [
        "1. Number vs. Percentage Trap: An increase in total hospital admissions does NOT prove higher illness rates if the city population grew faster.",
        "2. Self-Selection Bias: Online polls or voluntary customer surveys over-represent extreme opinions and fail to generalize to the broader population.",
        "3. Plan-Goal Evaluation: When the conclusion is a policy plan ('Ban cars downtown to cut pollution'), weaken by showing a side-effect that defeats the goal (e.g., rerouted traffic increases idling emissions)."
      ],
      drills: [
        { q: "A study found that executives who read fiction daily report 30% lower stress than those who do not. Thus, reading fiction reduces executive stress. Which most seriously weakens this argument?", opts: ["A) Non-fiction readers also report lower stress than non-readers.", "B) Executives with manageable workloads have more free time to read fiction daily.", "C) Most fiction books are read in the evening rather than during work hours.", "D) Some executives listen to audiobooks instead of reading print.", "E) Stress levels vary across different industries."], ans: 1, exp: "(B) establishes Reverse Causation / Confounding Factor: lower workload causes both lower stress and the free time to read fiction." },
        { q: "In a voluntary website survey, 82% of respondents said they favor stricter data-privacy regulations. A tech columnist concluded that over four-fifths of all internet users support stricter rules. Primary logical flaw?", opts: ["A) Confusing a necessary condition with a sufficient condition.", "B) Generalizing from a self-selected sample that may not represent all internet users.", "C) Failing to define what constitutes a data-privacy regulation.", "D) Relying on outdated survey data.", "E) Appealing to popular opinion to establish truth."], ans: 1, exp: "Voluntary website respondents are self-selected (privacy-conscious users are far more likely to click and respond), creating severe sampling bias (B)." }
      ]
    },
    {
      id: "VR_BOLDFACE",
      code: "MODULE 3 OF 5",
      title: "Critical Reasoning: Boldface & Method of Reasoning",
      sub: "2–3 Qs per Test • Structural Role Mapping (705+ Discriminator)",
      overview: "Boldface questions appear heavily once your adaptive trajectory crosses 675+. Rather than evaluating truth, you classify the structural role of one or two boldfaced statements inside an argument containing competing viewpoints.",
      bridge: "Concept Bridge (Two-Speaker Map): Label every sentence before reading the choices: [BG] Background Fact, [OPP] Opposing Claim, [EV] Author's Evidence, [IC] Intermediate Conclusion, or [MC] Main Conclusion.",
      prereq: "Prerequisites & Core Identities: Pivot words ('However', 'Yet', 'Nevertheless') almost always separate the Opposing Viewpoint from the Author's Main Conclusion or Counter-Evidence.",
      workedExample: {
        stimulus: "Many urban planners contend that [BF1: widening urban highways permanently eliminates peak-hour congestion]. Yet longitudinal traffic studies across 30 metropolitan areas show that [BF2: expanded road capacity induces additional commuter driving within three years], restoring original delay times.",
        question: "In the argument above, the two boldfaced portions play which of the following roles?",
        correctChoice: "The first is a position that the argument seeks to refute; the second is an empirical finding cited to undermine that position.",
        breakdown: "1. Signal 'Many urban planners contend' + 'Yet' -> BF1 is the Opposing Position [OPP].\n2. 'Longitudinal traffic studies show' -> BF2 is Empirical Evidence [EV] refuting BF1."
      },
      shortcuts: [
        "1. Predict Roles First: Before looking at Choices A–E, write down 'First = Opposing position; Second = Evidence supporting author's main conclusion' and eliminate any choice that mislabels either role.",
        "2. Intermediate vs. Main Conclusion: If Statement X supports Statement Y, then X is an Intermediate Conclusion (and a premise for Y), never the Main Conclusion.",
        "3. Factual Finding vs. Judgment: Distinguish between an empirical observation ('finding/evidence') and a value/policy claim ('position/conclusion')."
      ],
      drills: [
        { q: "Critics argue that remote work erodes team innovation. However, patent filings per engineer rose 14% across hybrid tech firms last year, demonstrating that distributed teams innovate just as effectively. What role does the boldfaced phrase ('patent filings per engineer rose 14%') play?", opts: ["A) It is the main conclusion of the argument.", "B) It is a position that the argument seeks to refute.", "C) It provides empirical evidence supporting the author's main conclusion.", "D) It states an assumption required by the critics' claim.", "E) It acknowledges a limitation to the author's conclusion."], ans: 2, exp: "The boldfaced clause is factual evidence cited right after 'However' to prove the main conclusion ('distributed teams innovate just as effectively')." }
      ]
    },
    {
      id: "VR_PARADOX",
      code: "MODULE 4 OF 5",
      title: "Critical Reasoning: Resolve the Paradox & Inference",
      sub: "4–5 Qs per Test • Must-Be-True Quantified Bounds",
      overview: "Paradox questions present two seemingly contradictory facts and ask for a new fact that allows both to be true simultaneously. Inference ('Must Be True') questions have NO conclusion—you must deduce a statement 100% supported by the text without outside assumptions.",
      bridge: "Concept Bridge (Subgroup Split): Whenever overall averages rise while every individual segment falls (Simpson's Paradox), the resolution is a shift in mix/volume toward the higher-priced or higher-rate segment.",
      prereq: "Prerequisites & Core Identities: On Inference questions, avoid strong words ('all', 'always', 'best', 'causes') and favor cautious, provable quantifiers ('some', 'at least one', 'not all').",
      workedExample: {
        stimulus: "Between 2022 and 2025, an automaker's average profit margin per vehicle sold rose from 8% to 11%, even though the profit margin on every individual model it manufactures declined over that same period.",
        question: "Which of the following, if true, best resolves the apparent discrepancy?",
        correctChoice: "Sales volume shifted dramatically away from low-margin compact sedans toward high-margin luxury SUVs.",
        breakdown: "1. Paradox: Every model's margin fell, yet the overall average margin rose.\n2. Mix Shift: If luxury SUVs (15% -> 13% margin) grew from 20% to 75% of total sales, the weighted average rises from 8% to 11%."
      },
      shortcuts: [
        "1. Paradox Checklist: A valid resolution must explain BOTH sides of the tension—if it only explains Fact 1 while ignoring Fact 2, eliminate it.",
        "2. Inference Overlap Rule: If 'Most A are B' (>50%) and 'Most A are C' (>50%), it MUST be true that 'Some B are C' (pigeonhole overlap).",
        "3. Zero Outside Knowledge: Even if a choice is true in the real world, eliminate it if it cannot be deduced strictly from the stimulus."
      ],
      drills: [
        { q: "Last year, an airline cut average ticket prices by 15%, yet its total passenger revenue increased by 22% despite operating the exact same number of flights. Which best explains this discrepancy?", opts: ["A) Jet fuel prices declined by 10% over the same period.", "B) Lower fares filled previously empty seats, raising average flight occupancy from 58% to 84%.", "C) Competing airlines also reduced their fares on overlapping routes.", "D) Business-class passengers accounted for 20% of total bookings.", "E) The airline introduced a new loyalty rewards program."], ans: 1, exp: "A 15% price cut paired with a ~45% jump in seats sold (58% -> 84% load factor) yields 0.85 * 1.45 = 1.23 (+23% revenue), resolving both facts." }
      ]
    },
    {
      id: "VR_RC",
      code: "MODULE 5 OF 5",
      title: "Reading Comprehension: Structure, Tone & Inference",
      sub: "3–4 Passages (12–13 Qs) • 2-Minute Structural Map",
      overview: "GMAT Reading Comprehension tests structural synthesis across dense 250–350 word passages in Economics, Evolutionary Biology, Astrophysics, and Social History. High scorers read for structural function—not memorizing technical jargon.",
      bridge: "Concept Bridge (Paragraph Role Map): Summarize each paragraph in 5 words: P1 = Old Theory; P2 = New Evidence Challenging Theory; P3 = Author's Qualified Synthesis.",
      prereq: "Prerequisites & Core Identities: Distinguish between the Author's Tone (typically analytical, cautious, qualified) and the Tone of Cited Scholars.",
      workedExample: {
        stimulus: "Passage Excerpt: 'While early economists attributed industrial clustering solely to transport cost savings, recent empirical studies highlight localized knowledge spillovers among specialized engineers as the decisive driver in modern technology hubs.'",
        question: "What is the primary structural function of this sentence?",
        correctChoice: "To contrast a traditional explanation of industrial clustering with more recent empirical findings.",
        breakdown: "1. Pivot Structure: 'While early economists attributed [Old View]..., recent empirical studies highlight [New View]...'.\n2. Eliminate choices claiming the author 'disproves' or 'criticizes' early economists—the tone is purely comparative."
      },
      shortcuts: [
        "1. Main Point Formula: Combine the topic + the author's primary purpose ('evaluate a recent challenge to...', 'reconcile two competing explanations of...').",
        "2. Specific Detail Proof: Never answer a 'According to the passage' question from memory—verify the exact sentence in the left passage pane before clicking.",
        "3. Trap Answer Patterns: Eliminate choices that (a) distort degree ('disproves' vs. 'questions'), (b) swap relationships between two groups, or (c) bring in outside facts."
      ],
      drills: [
        { q: "Passage Excerpt: 'Although deep-sea hydrothermal vents lack sunlight, chemosynthetic bacteria oxidize hydrogen sulfide to fix carbon, sustaining dense ecosystems independent of photosynthesis.' What can be inferred from this excerpt?", opts: ["A) Most marine organisms rely on chemosynthesis rather than photosynthesis.", "B) Sunlight is not an absolute prerequisite for sustaining complex biological ecosystems.", "C) Hydrogen sulfide is toxic to all surface-dwelling bacteria.", "D) Hydrothermal vents exist in every ocean basin.", "E) Chemosynthetic bacteria evolved earlier than photosynthetic plants."], ans: 1, exp: "Because dense vent ecosystems thrive without sunlight via chemosynthesis, sunlight is not strictly required for all ecosystems (B)." }
      ]
    }
  ];

  window._GMAT_VR_MOD_IDX = window._GMAT_VR_MOD_IDX || 0;
  window._GMAT_VR_SUBTAB = window._GMAT_VR_SUBTAB || "theory";

  window.renderGmatVerbalStudio3 = function (el) {
    const target = el || document.getElementById("main-workspace");
    if (!target) return;

    const m = GMAT_VERBAL_MODULES[window._GMAT_VR_MOD_IDX] || GMAT_VERBAL_MODULES[0];
    const sub = window._GMAT_VR_SUBTAB;

    const sidebarHtml = GMAT_VERBAL_MODULES.map((item, i) => {
      const active = i === window._GMAT_VR_MOD_IDX;
      return `
        <button type="button" onclick="window._GMAT_VR_MOD_IDX=${i}; window.renderGmatVerbalStudio3();"
          class="w-full text-left p-4 rounded-2xl border transition cursor-pointer ${active
            ? "bg-indigo-50/90 dark:bg-indigo-950/60 border-indigo-500 shadow-sm"
            : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-indigo-300"}">
          <div class="text-sm font-extrabold ${active ? "text-indigo-700 dark:text-indigo-300" : "text-slate-900 dark:text-white"}">${item.title}</div>
          <div class="text-[11px] text-slate-500 mt-1">${item.sub}</div>
        </button>
      `;
    }).join("");

    const rightBodyHtml = sub === "theory" ? `
      <div class="space-y-4">
        <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-[11px] font-extrabold uppercase tracking-wider text-indigo-600">COMPREHENSIVE CHAPTER OVERVIEW &amp; CONCEPT BRIDGE</span>
            <span class="px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-extrabold">GMAT Focus Edition</span>
          </div>
          <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">${m.overview}</p>
          <p class="text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium"><strong>${m.bridge.split(":")[0]}:</strong>${m.bridge.slice(m.bridge.indexOf(":") + 1)}</p>
          <p class="text-xs text-indigo-700 dark:text-indigo-300 leading-relaxed"><strong>${m.prereq.split(":")[0]}:</strong>${m.prereq.slice(m.prereq.indexOf(":") + 1)}</p>
        </div>

        <div class="p-5 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 space-y-2.5">
          <div class="text-[11px] font-extrabold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">WORKED OFFICIAL-STYLE GMAT WALKTHROUGH</div>
          <p class="text-xs italic text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">"${m.workedExample.stimulus}"</p>
          <p class="text-xs font-extrabold text-slate-900 dark:text-white">${m.workedExample.question}</p>
          <div class="text-xs font-bold text-emerald-700 dark:text-emerald-300">Target Answer: ${m.workedExample.correctChoice}</div>
          <pre class="text-xs text-slate-600 dark:text-slate-300 whitespace-pre-wrap font-sans leading-relaxed">${m.workedExample.breakdown}</pre>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div class="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800"><div class="text-[10px] font-extrabold text-slate-400 uppercase">EXAM WEIGHTAGE</div><div class="font-extrabold mt-1">23 Qs / 45 Mins</div></div>
          <div class="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800"><div class="text-[10px] font-extrabold text-slate-400 uppercase">TARGET PACE</div><div class="font-extrabold mt-1">1.8 – 2.0 Mins / Q</div></div>
          <div class="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800"><div class="text-[10px] font-extrabold text-slate-400 uppercase">SCORING / FORMAT</div><div class="font-extrabold mt-1">5 Choices (A–E)</div></div>
          <div class="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800"><div class="text-[10px] font-extrabold text-slate-400 uppercase">705+ STRATEGY</div><div class="font-extrabold mt-1">Pre-phrase Before A–E</div></div>
        </div>
      </div>
    ` : `
      <div class="space-y-4">
        <div class="p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 space-y-2">
          <div class="text-xs font-extrabold uppercase tracking-wider text-amber-800 dark:text-amber-300">GMAT 705+ Elimination Shortcuts</div>
          ${m.shortcuts.map(s => `<p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">${s}</p>`).join("")}
        </div>
        <div class="space-y-3">
          ${m.drills.map((d, di) => `
            <div class="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2.5">
              <div class="text-xs font-extrabold text-indigo-600 uppercase">GMAT Focus Practice Drill ${di + 1}</div>
              <p class="text-sm font-bold text-slate-900 dark:text-white leading-relaxed">${d.q}</p>
              <div class="grid grid-cols-1 gap-1.5">
                ${d.opts.map((opt, oi) => `
                  <button type="button" onclick="const exp=document.getElementById('gvr-exp-${di}'); if(exp) exp.classList.remove('hidden'); this.classList.add('${oi === d.ans ? "bg-emerald-100 border-emerald-500 text-emerald-900" : "bg-rose-100 border-rose-400 text-rose-900"}');"
                    class="text-left px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-medium hover:border-indigo-400 cursor-pointer">${opt}</button>
                `).join("")}
              </div>
              <div id="gvr-exp-${di}" class="hidden p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 text-xs text-emerald-900 dark:text-emerald-200">
                <strong>Official Solution:</strong> ${d.exp}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;

    target.innerHTML = `
      <div class="max-w-7xl mx-auto my-3">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 split-pane-layout">
          <div class="lg:col-span-4 space-y-2.5 split-pane-left pane-scroll">
            <div class="text-[11px] font-extrabold uppercase tracking-wider text-indigo-600 px-1">GMAT VERBAL REASONING MODULES (5 CHAPTERS)</div>
            ${sidebarHtml}
          </div>
          <div class="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-5 split-pane-right pane-scroll">
            <div>
              <div class="text-[11px] font-extrabold uppercase tracking-wider text-indigo-600">GMAT VERBAL STUDIO (CR &amp; RC &bull; ZERO SC) &bull; ${m.code}</div>
              <h2 class="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">${m.title}</h2>
              <div class="flex flex-wrap gap-2 mt-3">
                <button type="button" onclick="window._GMAT_VR_SUBTAB='theory'; window.renderGmatVerbalStudio3();"
                  class="px-4 py-2 rounded-full text-xs font-extrabold cursor-pointer ${sub === "theory" ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-700"}">Chapter Refresher &amp; Theory</button>
                <button type="button" onclick="window._GMAT_VR_SUBTAB='drills'; window.renderGmatVerbalStudio3();"
                  class="px-4 py-2 rounded-full text-xs font-extrabold cursor-pointer ${sub === "drills" ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-700"}">Shortcuts &amp; Practice Drills (${m.drills.length})</button>
              </div>
            </div>
            ${rightBodyHtml}
          </div>
        </div>
      </div>
    `;
  };

  window.renderTab3 = window.renderGmatVerbalStudio3;
  window.renderVerbalStudio3 = window.renderGmatVerbalStudio3;

  const prevSelect = window.selectUnifiedTab;
  window.selectUnifiedTab = function (tab) {
    if (typeof prevSelect === "function") prevSelect(tab);
    const tNum = parseInt(String(tab).replace(/\D/g, ""), 10);
    if (tNum === 3) {
      window.renderGmatVerbalStudio3(document.getElementById("main-workspace"));
    }
  };
})();