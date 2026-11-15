window.IPM_DEEP_MODULES = [];
window.IPM_HIGHER_MATH = [];
window.IPM_CHAPTER_REFRESHERS = {
  "GMAT-MOD-ALG": {
    overview: "GMAT Focus Quantitative Reasoning (21 questions, 45 minutes, question-adaptive on the 60–90 sectional scale) completely eliminates Geometry and moves Data Sufficiency into Data Insights. Quant focuses exclusively on pure Problem Solving: coupled rate/work systems, weighted averages, mixtures, and multi-constraint algebraic modeling.",
    prerequisites: [
      "Combined Work Rate: 1/T_total = 1/T_1 + 1/T_2.",
      "Alligation Weight Ratio: w_1 / w_2 = (C_2 - C_avg) / (C_avg - C_1).",
      "Harmonic Mean Speed (Equal Distances): V_avg = 2*v_1*v_2 / (v_1 + v_2).",
      "Successive Percentage Factor: Net multiplier = (1 + r_1/100)(1 + r_2/100)."
    ],
    corePrinciples: [
      "Linear Rate Elimination Law: Express work rates in jobs/hour so modified-rate scenarios form a 2x2 linear system.",
      "Solute/Water Conservation Law: In pure-evaporation or pure-addition dilution problems, track the component whose absolute mass remains constant.",
      "Back-Solving Pivot Law: When answer choices are ordered integers, test Choice (C) first to eliminate 3 choices in one step."
    ],
    workedExamples: [
      {
        level: "Foundation",
        problem: "A 40-liter solution is 25% ethanol. How many liters of pure ethanol must be added to raise concentration to 40%?",
        steps: [
          "Non-ethanol water mass remains constant at 75% of 40L = 30L.",
          "At 40% ethanol, water constitutes 60% of the final volume: 0.60 * V_final = 30L.",
          "Solve V_final = 50L => 50 - 40 = 10 liters of pure ethanol added."
        ]
      },
      {
        level: "CAT 95%ile",
        problem: "Machines X and Y finish a batch together in 6 hours. Doubling X's rate and halving Y's rate finishes the batch in 4 hours. Find X's solo time.",
        steps: [
          "Set hourly rates: x + y = 1/6 and 2x + 0.5y = 1/4 => multiply second equation by 2: 4x + y = 1/2.",
          "Subtract (x + y = 1/6) from (4x + y = 1/2): 3x = 1/2 - 1/6 = 1/3 => x = 1/9 batch/hour.",
          "Machine X alone completes the batch in 9 hours."
        ]
      },
      {
        level: "CAT 99.5%ile",
        problem: "A fund manager invests $100M across Asset A (9% yield, risk 6) and Asset B (5% yield, risk 2) to achieve >=7.4% yield and <=4.6 weighted risk. Find the valid allocation range for Asset A.",
        steps: [
          "Yield constraint: 0.09A + 0.05(100 - A) >= 7.4 => 0.04A >= 2.4 => A >= $60M.",
          "Risk constraint: 6A + 2(100 - A) <= 460 => 4A <= 260 => A <= $65M.",
          "Any allocation A in [$60M, $65M] satisfies both coupled constraints simultaneously."
        ]
      }
    ]
  },
  "GMAT-MOD-COMB": {
    overview: "High-percentile GMAT Focus Quant (705–805 total score band) differentiates top candidates via constrained combinatorics, conditional probability without replacement, and prime-power divisibility.",
    prerequisites: [
      "Combinations Formula: nCr = n! / [r!(n - r)!].",
      "Complementary Counting: P(At least one) = 1 - P(None).",
      "Legendre's Prime Exponent Formula: Highest power of prime p dividing n! is sum_{k>=1} floor(n / p^k)."
    ],
    corePrinciples: [
      "Disjoint Partition Law: Always split 'at least / at most' committee constraints into mutually exclusive cases before multiplying combinations.",
      "Parity Invariance Law: Adding or subtracting even integers never alters parity; product of integers is odd iff every factor is odd."
    ],
    workedExamples: [
      {
        level: "Foundation",
        problem: "What is the greatest integer k such that 3^k divides 30!?",
        steps: [
          "Apply Legendre's formula: floor(30/3) + floor(30/9) + floor(30/27).",
          "Sum = 10 + 3 + 1 = 14."
        ]
      },
      {
        level: "CAT 99.5%ile",
        problem: "Form a 4-analyst task force from 5 seniors and 4 juniors requiring at least 2 seniors and at least 1 junior.",
        steps: [
          "Enumerate mutually exclusive valid splits: (2 Seniors, 2 Juniors) and (3 Seniors, 1 Junior).",
          "Count Case 1: C(5,2) * C(4,2) = 10 * 6 = 60. Count Case 2: C(5,3) * C(4,1) = 10 * 4 = 40.",
          "Total distinct task forces = 60 + 40 = 100."
        ]
      }
    ]
  }
};

window.GMAT_OFFICIAL_BANK = {
  verbal: {
    criticalReasoning: [
      {
        id: "GMAT-CR-101",
        subtype: "Critical Reasoning • Weaken the Argument",
        difficulty: "705–755 Level",
        stimulus: "Last year, Veloce Motors introduced an AI-assisted quality inspection system on its main assembly line, reducing visible paint defects by 42%. Over the same twelve-month period, warranty claims filed by dealerships for electrical faults on vehicles from that assembly line declined by 35%. Veloce's VP of Manufacturing concluded that the AI visual inspection system also substantially improved the factory's electrical assembly quality.",
        prompt: "Which of the following, if true, most seriously weakens the VP's conclusion?",
        options: [
          "Dealerships typically require three to six months after a vehicle's manufacture date to process and submit electrical warranty claims.",
          "Six months before installing the AI system, Veloce replaced its primary wiring-harness supplier after persistent soldering failures were traced to that vendor.",
          "Other automotive manufacturers that adopted similar AI paint-inspection systems reported no reduction in engine-block defects.",
          "The AI system flags surface blemishes using high-intensity cameras that cannot penetrate opaque interior door panels.",
          "Total vehicle production volume on Veloce's main assembly line increased by 8% during the twelve-month period."
        ],
        correct: 1,
        explanation: "Alternative Cause (B): Replacing the faulty wiring-harness vendor six months earlier explains the drop in electrical claims independently of the AI paint system."
      },
      {
        id: "GMAT-CR-102",
        subtype: "Critical Reasoning • Necessary Assumption",
        difficulty: "725–785 Level",
        stimulus: "A municipal transit study found that commuters who switched from driving solo to taking express commuter rail reported 28% lower daily stress levels after three months. Because lowering commuter stress improves workplace productivity, the city council argues that subsidizing express rail fares will generate net economic gains through higher regional worker output.",
        prompt: "The city council's argument depends on which of the following assumptions?",
        options: [
          "Commuters who already ride express rail experience lower stress than those who ride local municipal buses.",
          "The commuters who would be induced to switch to express rail by a fare subsidy would experience stress reductions comparable to those observed in the study.",
          "Workplace productivity gains from reduced stress are greater than gains from flexible remote-work policies.",
          "Express rail trains currently operate below maximum passenger capacity during peak morning rush hours.",
          "Solo drivers are primarily motivated by travel speed rather than out-of-pocket commuting cost."
        ],
        correct: 1,
        explanation: "Generalization Assumption (B): The study measured voluntary switchers; the council assumes subsidy-induced switchers will see comparable stress reductions."
      }
    ]
  },
  dataInsights: [
    {
      id: "GMAT-DI-301",
      subtype: "Data Sufficiency (Data Insights)",
      difficulty: "715–775 Level",
      stem: "A logistics firm shipped 120 crates, each weighing either 25 kg or 40 kg. Was the total weight of the 120 crates greater than 3,750 kg?\n\n(1) More than 52 of the crates weighed 40 kg each.\n(2) Fewer than 68 of the crates weighed 25 kg each.",
      options: [
        "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
        "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
        "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
        "EACH statement ALONE is sufficient.",
        "Statements (1) and (2) TOGETHER are NOT sufficient."
      ],
      correct: 3,
      explanation: "Total weight = 3000 + 15x > 3750 <=> x > 50. Both (1) and (2) independently establish x > 52 -> (D)."
    },
    {
      id: "GMAT-DI-302",
      subtype: "Two-Part Analysis (Coupled Constraints)",
      difficulty: "725–785 Level",
      stem: "An investment committee allocates $100 million across Fund Alpha (9% yield, risk 6) and Fund Beta (5% yield, risk 2). The blended portfolio must achieve at least 7.4% annual yield while keeping weighted average risk at most 4.6.",
      col1Label: "Allocation to Fund Alpha ($M)",
      col2Label: "Allocation to Fund Beta ($M)",
      rows: ["$35 million", "$50 million", "$60 million", "$65 million", "$70 million"],
      correctRow1: 3,
      correctRow2: 0,
      explanation: "60 <= A <= 65 and B = 100 - A -> A = $65M and B = $35M."
    }
  ]
};

window.IPM_QUANT_CORE = [
  {
    id: "GMAT-MOD-ALG",
    pillar: "GMAC FOCUS QUANTITATIVE (ZERO GEOMETRY)",
    title: "GMAT Focus Problem Solving: Rates, Work & Weighted Averages",
    weightage: "Core Quant • 21 Qs / 45 Mins (205–805 Scale)",
    concepts: [],
    traps: [{ title: "Harmonic Mean Trap in Round-Trip Speeds", wrongStep: "Averaging 60 mph and 40 mph as 50 mph.", correction: "Use harmonic mean 2*60*40/(60+40) = 48 mph.", penalty: "Adaptive Band Drop" }],
    questions: [
      { id: "GMAT-QR-ALG-001", stem: "Machine X and Machine Y finish a batch in 6 hours. Doubling X's rate and halving Y's rate finishes it in 4 hours. Hours for X alone?", options: ["8 hours", "9 hours", "10 hours", "12 hours", "15 hours"], answer: 1, explanation: "x + y = 1/6 and 4x + y = 1/2 => 3x = 1/3 => 9 hours." },
      { id: "GMAT-QR-ALG-002", stem: "A 40L solution is 25% ethanol. How many liters of pure ethanol raise concentration to 40%?", options: ["8 liters", "10 liters", "12 liters", "15 liters", "16 liters"], answer: 1, explanation: "30L water = 60% of 50L => 10L added." }
    ]
  },
  {
    id: "GMAT-MOD-COMB",
    pillar: "GMAC FOCUS QUANTITATIVE",
    title: "GMAT Focus Problem Solving: Combinatorics & Number Properties",
    weightage: "705–805 Differentiator • Question-Adaptive",
    concepts: [],
    traps: [{ title: "Overcounting Committees with 'At Least' Constraints", wrongStep: "Using C(5,2)*C(7,2) which triple-counts 3-senior teams.", correction: "Partition into disjoint cases: (2S, 2J) + (3S, 1J) = 100.", penalty: "725+ Ceiling Trap" }],
    questions: [
      { id: "GMAT-QR-COMB-001", stem: "Select 4 analysts from 5 seniors and 4 juniors with >=2 seniors and >=1 junior. Distinct teams?", options: ["80", "95", "100", "105", "120"], answer: 2, explanation: "C(5,2)*C(4,2) + C(5,3)*C(4,1) = 60 + 40 = 100." },
      { id: "GMAT-QR-NUM-001", stem: "Greatest integer k such that 3^k is a factor of 30!?", options: ["12", "13", "14", "15", "16"], answer: 2, explanation: "10 + 3 + 1 = 14." }
    ]
  }
];

// Live PostgreSQL Hydration for GMAT Focus
(async function hydrateGmatFromPostgres() {
  try {
    const res = await fetch("/api/questions?exam=GMAT_FOCUS&limit=150&t=" + Date.now());
    const data = await res.json();
    if (!data || !Array.isArray(data.questions) || !data.questions.length) return;
    window.GMAT_POSTGRES_BANK = data.questions;
    const qaItems = data.questions.filter(q => q.section === "QUANT_CORE");
    if (qaItems.length && window.IPM_QUANT_CORE) {
      const alg = qaItems.filter(q => /Rates|Mixtures|Algebra/i.test(q.topic || ""));
      const comb = qaItems.filter(q => /Combinatorics|Number/i.test(q.topic || ""));
      if (alg.length) window.IPM_QUANT_CORE[0].questions = alg.map(q => ({ id: q.id, stem: q.prompt, options: q.options, answer: Number(q.answer), explanation: q.explanation }));
      if (comb.length) window.IPM_QUANT_CORE[1].questions = comb.map(q => ({ id: q.id, stem: q.prompt, options: q.options, answer: Number(q.answer), explanation: q.explanation }));
    }
    if (typeof window.renderActiveTab === "function") window.renderActiveTab();
  } catch (e) { console.warn("GMAT Postgres hydration fallback:", e); }
})();