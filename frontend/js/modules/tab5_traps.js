window.GMAT_TRAPS_18 = [
  { cat: "Quantitative Reasoning", title: "Trap 1: Solving Data Sufficiency to a Numeric Value", bait: "Spending 3.5 minutes solving a complex system in Data Insights when only uniqueness is required.", fix: "Stop the instant you prove a unique value exists (or two valid values exist). Never waste time computing the final number." },
  { cat: "Quantitative Reasoning", title: "Trap 2: Assuming Variables Are Positive Integers", bait: "Concluding x^2 > x implies x > 1, forgetting x < 0 or 0 < x < 1.", fix: "Always test FROZEN cases: Fractions (1/2), Roots, One (1), Zero (0), Extremes (100), Negatives (-2)." },
  { cat: "Quantitative Reasoning", title: "Trap 3: Squaring Inequalities Without Sign Verification", bait: "Squaring x > y to get x^2 > y^2 when y is negative (e.g., 2 > -5, yet 4 < 25).", fix: "Never square both sides of an inequality unless both sides are guaranteed non-negative." },
  { cat: "Quantitative Reasoning", title: "Trap 4: Divisibility With Non-Integer Variables", bait: "Assuming x/y = 3/4 means x is a multiple of 3 when x = 1.5 and y = 2.", fix: "Apply prime-factor divisibility rules ONLY when variables are explicitly restricted to integers." },
  { cat: "Quantitative Reasoning", title: "Trap 5: Compound Percentage Base Shift", bait: "Treating +25% followed by -20% as a net +5% gain.", fix: "Multiply factors directly: 1.25 * 0.80 = 1.00 (0% net change)." },
  { cat: "Quantitative Reasoning", title: "Trap 6: Geometry Carryover Habit", bait: "Looking for circle/triangle formulas on GMAT Focus Quant.", fix: "GMAT Focus eliminated Geometry—reframe coordinate distance/slope questions as pure algebra." },
  { cat: "Data Insights (DS & MSR)", title: "Trap 7: Statement (2) Contamination", bait: "Carrying a constraint from Statement (1) into your evaluation of Statement (2).", fix: "Wipe Statement (1) completely from memory before testing Statement (2) alone." },
  { cat: "Data Insights (DS & MSR)", title: "Trap 8: 'No' Is Sufficient in Yes/No Data Sufficiency", bait: "Choosing Choice E because Statement (1) proves 'x is definitely NOT greater than 0'.", fix: "A definitive 'NO' answers the question uniquely—mark the statement Sufficient." },
  { cat: "Data Insights (DS & MSR)", title: "Trap 9: Multi-Source Reasoning Tab Blindness", bait: "Answering from Tab 1's table without checking Tab 2's footnote exception.", fix: "Scan all 3 MSR tabs for footnotes, currency units, and fiscal-year exclusions first." },
  { cat: "Data Insights (DS & MSR)", title: "Trap 10: Two-Part Analysis Coupled Constraints", bait: "Picking Column 1 and Column 2 independently when they must satisfy a joint equation.", fix: "Solve the linking equation first, then match ordered pairs (X, Y) in the table." },
  { cat: "Data Insights (DS & MSR)", title: "Trap 11: Correlation vs. Causation in Graphics", bait: "Inferring from a scatter plot that Variable A causes Variable B.", fix: "Select strictly descriptive relationships supported by the plotted axes." },
  { cat: "Data Insights (DS & MSR)", title: "Trap 12: C-Trap in Data Sufficiency", bait: "Picking Choice C immediately because combining (1) and (2) looks obviously sufficient.", fix: "Whenever (1)+(2) looks too easy, test if one statement ALONE already suffices (Choice A or B)." },
  { cat: "Verbal & Adaptive Strategy", title: "Trap 13: Leaving Final Questions Unanswered", bait: "Running out of time with 3 questions blank at the end of a 45-minute section.", fix: "GMAT Focus penalizes unanswered items far more heavily than wrong guesses—always click an answer before time expires." },
  { cat: "Verbal & Adaptive Strategy", title: "Trap 14: Reversal vs. Negation in CR Assumption", bait: "Confusing a Strengthener with a Necessary Assumption.", fix: "Apply the Negation Test: if negating the choice destroys the conclusion, it is the required assumption." },
  { cat: "Verbal & Adaptive Strategy", title: "Trap 15: Outside-Scope Knowledge in RC/CR", bait: "Choosing an answer that is factually true in real-world economics but unsupported by the passage.", fix: "Treat the passage as a closed universe; reject any choice introducing unmentioned mechanisms." },
  { cat: "Verbal & Adaptive Strategy", title: "Trap 16: Boldface Role Confusion", bait: "Mislabeling a counter-premise conceded by the author as the main conclusion.", fix: "Trace 'However / Yet / Therefore' pivots to separate the rejected claim from the author's thesis." },
  { cat: "Verbal & Adaptive Strategy", title: "Trap 17: Early-Question Careless Rush", bait: "Rushing Questions 1–5 to save time, anchoring the adaptive algorithm in a lower band.", fix: "Invest steady accuracy on Questions 1–7 to unlock the 705+ score trajectory." },
  { cat: "Verbal & Adaptive Strategy", title: "Trap 18: Over-Using the 3-Edit Review Allowance", bait: "Changing correct first instincts during the end-of-section Question Review & Edit screen.", fix: "Only use your 3 answer edits when you spot a concrete arithmetic or misread error." }
];

window.renderTab5 = function (el) {
  const cards = window.GMAT_TRAPS_18.map((t, i) => `
    <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 space-y-2 shadow-sm">
      <div class="flex items-center justify-between">
        <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-600 dark:text-indigo-300">${t.cat}</span>
        <span class="text-[11px] font-mono text-slate-400">#${i + 1} / 18</span>
      </div>
      <h4 class="font-extrabold text-sm text-slate-900 dark:text-white">${t.title}</h4>
      <div class="text-xs text-rose-600 dark:text-rose-300"><strong>Adaptive Bait:</strong> ${t.bait}</div>
      <div class="text-xs text-emerald-700 dark:text-emerald-300"><strong>735+ Defense:</strong> ${t.fix}</div>
    </div>
  `).join("");

  el.innerHTML = `
    <div class="max-w-6xl mx-auto my-4 space-y-4">
      <div class="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 shadow-lg">
        <span class="text-[10px] uppercase font-bold text-amber-300">GMAT Focus 205–805 Diagnostic Clinic</span>
        <h2 class="text-xl font-extrabold mt-1">18 High-Frequency GMAT Focus Adaptive &amp; Data Insights Traps</h2>
        <p class="text-xs text-slate-300 mt-1">Master Data Sufficiency elimination, Multi-Source Reasoning cross-checks, and computer-adaptive pacing to protect a 715+ score.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">${cards}</div>
    </div>
  `;
};