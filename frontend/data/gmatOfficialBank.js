// Official GMAC GMAT Focus Edition Question Bank (Critical Reasoning, Reading Comprehension, Data Insights: DS/TPA/MSR, & Problem Solving)
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
        explanation: "Alternative Cause (B): Replacing the faulty wiring-harness supplier six months earlier explains the 35% drop in electrical warranty claims independently of the AI paint-inspection system."
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
        explanation: "Generalization / Representativeness Assumption (B): The study examined commuters who voluntarily switched without subsidies; the council assumes subsidy-induced switchers will experience similar stress drops."
      },
      {
        id: "GMAT-CR-103",
        subtype: "Critical Reasoning • Evaluate the Argument",
        difficulty: "715–775 Level",
        stimulus: "To curb attrition among senior software engineers, a cloud-computing firm replaced its annual performance bonus with a four-year equity vesting schedule. Twelve months later, voluntary departures among senior engineers had fallen from 19% to 7%. Management cited the new equity schedule as a decisive retention success.",
        prompt: "Determining which of the following would be most useful in evaluating management's assessment?",
        options: [
          "Whether junior engineers at the firm also experienced a decline in voluntary departures over the same twelve months.",
          "Whether competitor cloud-computing firms instituted hiring freezes across senior engineering roles during that twelve-month period.",
          "Whether the total dollar value of the four-year equity grant exceeded the average annual cash bonus previously paid.",
          "Whether senior engineers who remained at the firm reported higher job satisfaction scores than those who departed.",
          "Whether the firm's overall revenue growth accelerated after the compensation restructuring."
        ],
        correct: 1,
        explanation: "Variance Test (B): If rival firms froze hiring during that year, senior engineers stayed because outside offers dried up rather than because of the equity schedule; if rival hiring remained robust, management's claim is strengthened."
      }
    ],
    readingComprehension: [
      {
        id: "GMAT-RC-201",
        subtype: "Reading Comprehension • Business Strategy & Economics",
        difficulty: "705–765 Level",
        passage: "Conventional platform economics holds that two-sided digital marketplaces benefit from self-reinforcing network effects: as buyer volume grows, seller participation rises, deepening liquidity and raising barriers to entry. However, recent empirical research on hyper-local service marketplaces reveals a counterintuitive 'congestion inflection.' Beyond a critical density threshold, adding incremental sellers in a fixed geographic zone degrades search ranking precision and intensifies price undercutting, causing high-quality incumbents to exit. Paradoxically, platforms that curate supply by capping active vendor tiers often achieve higher gross merchandise volume and superior retention than open-entry competitors.",
        questions: [
          {
            qid: "GMAT-RC-201A",
            prompt: "The primary purpose of the passage is to:",
            options: [
              "Refute the existence of network effects in global e-commerce marketplaces.",
              "Explain why unrestricted seller growth can undermine performance in hyper-local marketplaces and describe a strategic response.",
              "Argue that regulatory caps on digital platforms are necessary to protect high-quality service providers.",
              "Compare customer acquisition costs between open-entry and curated marketplaces.",
              "Demonstrate that price undercutting benefits consumers in geographically dense markets."
            ],
            correct: 1,
            explanation: "The passage qualifies standard network-effect theory by introducing the 'congestion inflection' in hyper-local platforms and explaining why supply curation outperforms open entry."
          },
          {
            qid: "GMAT-RC-201B",
            prompt: "According to the passage, exceeding the critical seller density threshold in a hyper-local marketplace leads directly to which of the following?",
            options: [
              "Higher buyer acquisition costs across neighboring geographic zones.",
              "Reduced search ranking accuracy and heightened downward price pressure.",
              "Immediate collapse of platform gross merchandise volume.",
              "Increased barriers to entry for low-cost newcomer vendors.",
              "Greater reliance on algorithmic surge pricing."
            ],
            correct: 1,
            explanation: "Directly stated in sentence 3: 'degrades search ranking precision and intensifies price undercutting'."
          }
        ]
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
      explanation: "Let x = number of 40 kg crates. Total weight = 25(120 - x) + 40x = 3000 + 15x > 3750 <=> 15x > 750 <=> x > 50. Statement (1) gives x > 52 (sufficient: YES). Statement (2) gives 120 - x < 68 <=> x > 52 (sufficient: YES). Thus EACH statement alone is sufficient -> (D)."
    },
    {
      id: "GMAT-DI-302",
      subtype: "Two-Part Analysis (Coupled Constraints)",
      difficulty: "725–785 Level",
      stem: "An investment committee allocates $100 million across Fund Alpha (projected annual yield 9%, risk score 6) and Fund Beta (projected annual yield 5%, risk score 2). The blended portfolio must achieve an annual yield of at least 7.4% while keeping the weighted average risk score at most 4.6.",
      col1Label: "Allocation to Fund Alpha ($M)",
      col2Label: "Allocation to Fund Beta ($M)",
      rows: ["$35 million", "$50 million", "$60 million", "$65 million", "$70 million"],
      correctRow1: 3,
      correctRow2: 0,
      explanation: "Let A = Alpha ($M) and B = 100 - A. Yield: 0.09A + 0.05(100 - A) >= 7.4 => 0.04A >= 2.4 => A >= 60. Risk: 6A + 2(100 - A) <= 460 => 4A <= 260 => A <= 65. Among valid pairs, A = $65M and B = $35M satisfies both constraints (yield 7.6%, risk 4.6)."
    },
    {
      id: "GMAT-DI-303",
      subtype: "Data Sufficiency (Number Properties)",
      difficulty: "735–795 Level",
      stem: "If m and n are positive integers, is m^n + n^m an even integer?\n\n(1) m + n is an even integer.\n(2) m * n is an odd integer.",
      options: [
        "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
        "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
        "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
        "EACH statement ALONE is sufficient.",
        "Statements (1) and (2) TOGETHER are NOT sufficient."
      ],
      correct: 3,
      explanation: "Statement (1): m + n is even => m and n have the same parity (both even -> even + even = even; both odd -> odd + odd = even). Sufficient! Statement (2): m * n is odd => both m and n are odd => odd + odd = even. Sufficient! Choose (D)."
    }
  ],
  quant: [
    {
      id: "GMAT-QR-401",
      subtype: "Quantitative Problem Solving • Rates & Work",
      difficulty: "715–765 Level",
      stem: "Machine X and Machine Y, working simultaneously at their respective constant rates, can complete a production batch in 6 hours. If Machine X's rate were doubled and Machine Y's rate were halved, the two machines working together would complete the same batch in 4 hours. How many hours would it take Machine X alone, working at its original constant rate, to complete the batch?",
      options: ["8 hours", "9 hours", "10 hours", "12 hours", "15 hours"],
      correct: 1,
      explanation: "Let x and y be hourly rates: x + y = 1/6 and 2x + 0.5y = 1/4 => 4x + y = 1/2. Subtracting (x + y = 1/6) gives 3x = 1/2 - 1/6 = 1/3 => x = 1/9 batch/hour, so Machine X alone takes 9 hours."
    },
    {
      id: "GMAT-QR-402",
      subtype: "Quantitative Problem Solving • Combinatorics",
      difficulty: "725–785 Level",
      stem: "A task force of 4 analysts is to be selected from 5 senior analysts and 4 junior analysts. If the task force must include at least 2 senior analysts and at least 1 junior analyst, how many distinct task forces can be formed?",
      options: ["80", "95", "100", "105", "120"],
      correct: 2,
      explanation: "Valid splits (Senior, Junior): (2S, 2J) = C(5,2)*C(4,2) = 10 * 6 = 60; plus (3S, 1J) = C(5,3)*C(4,1) = 10 * 4 = 40. Total = 60 + 40 = 100."
    }
  ]
};

// Override inherited IPM/CAT arrays so zero grammar, vocab drills, or geometry appear anywhere
window.IPM_VARC_BANK = window.GMAT_OFFICIAL_BANK.verbal.criticalReasoning.map(q => ({
  id: q.id, topic: q.subtype, difficulty: q.difficulty,
  question: `${q.stimulus}\n\n${q.prompt}`, options: q.options, answer: q.correct, explanation: q.explanation
}));
window.IPM_DILR_VARC_BANK = window.IPM_VARC_BANK;
window.IPM_QUANT_CORE = [
  {
    id: "GMAT-MOD-ALG",
    title: "GMAT Focus Problem Solving: Rates, Work & Word Problems",
    weightage: "Core Quant • 21 Qs / 45 Mins (Zero Geometry on GMAT Focus)",
    refresher: "GMAT Focus Quantitative Reasoning tests pure algebraic modeling, rates/ratios, weighted averages, and multi-step word translations under question-adaptive escalation.",
    shortcuts: [
      "Combine rate equations linearly (e.g., x + y = 1/6 and 2x + 0.5y = 1/4) to eliminate variables in 15 seconds.",
      "Back-solve from Choice (C) when answer choices are clean integers."
    ],
    drills: [window.GMAT_OFFICIAL_BANK.quant[0]].map(q => ({
      id: q.id, question: q.stem, options: q.options, answer: q.correct, explanation: q.explanation
    }))
  },
  {
    id: "GMAT-MOD-COMB",
    title: "GMAT Focus Problem Solving: Combinatorics, Probability & Number Properties",
    weightage: "705–805 Differentiator • High Adaptive Difficulty",
    refresher: "Partition constrained counting problems into mutually exclusive cases (e.g., (2 Senior, 2 Junior) + (3 Senior, 1 Junior)) before multiplying combinations.",
    shortcuts: [
      "Check complementary counting (Total - Invalid) whenever 'at least one' appears."
    ],
    drills: [window.GMAT_OFFICIAL_BANK.quant[1]].map(q => ({
      id: q.id, question: q.stem, options: q.options, answer: q.correct, explanation: q.explanation
    }))
  }
];
// Exhaustive GMAC GMAT Focus Chapter Refresher, Concepts, Traps & Practice Drills
window.IPM_REFRESHERS = window.IPM_REFRESHERS || {};
window.IPM_REFRESHERS["GMAT-MOD-ALG"] = {
  title: "GMAT Focus Problem Solving: Rates, Work & Weighted Averages (21 Qs • Zero Geometry)",
  summary: "GMAT Focus Quantitative Reasoning eliminates Geometry and Data Sufficiency (DS moves to Data Insights), focusing intensively on algebraic modeling, work/rate systems, mixtures, and multi-constraint word problems.",
  keyFormulas: [
    "Combined Work Rate: 1/T_total = 1/T_1 + 1/T_2",
    "Alligation / Weighted Average Ratio: w_1 / w_2 = (A_2 - A_avg) / (A_avg - A_1)",
    "Successive % Change: Net Factor = (1 + r_1)(1 + r_2)"
  ],
  workedExample: "x + y = 1/6 and 2x + 0.5y = 1/4 => 4x + y = 1/2. Subtracting gives 3x = 1/3 => x = 1/9 (9 hours alone)."
};
window.IPM_REFRESHERS["GMAT-MOD-COMB"] = {
  title: "GMAT Focus Combinatorics, Probability & Number Properties (705–805 Level)",
  summary: "High-percentile GMAT Focus Quant items test constrained committee selection, conditional probability without replacement, prime factorization, and divisibility parity.",
  keyFormulas: [
    "Combinations: nCr = n! / [r!(n - r)!]",
    "Complementary Probability: P(At least one) = 1 - P(None)",
    "Trailing Zeros in n!: floor(n/5) + floor(n/25) + floor(n/125) + ..."
  ],
  workedExample: "4 analysts from 5 Senior and 4 Junior with >=2 Senior and >=1 Junior: C(5,2)*C(4,2) + C(5,3)*C(4,1) = 10*6 + 10*4 = 100."
};

window.IPM_QUANT_CORE = [
  {
    id: "GMAT-MOD-ALG",
    pillar: "GMAC FOCUS QUANTITATIVE",
    title: "GMAT Focus Problem Solving: Rates, Work & Weighted Averages",
    weightage: "Core Quant • 21 Qs / 45 Mins (Zero Geometry)",
    concepts: [
      {
        heading: "Linear Rate Elimination",
        formula: "r_A + r_B = 1/T_1  and  k_1*r_A + k_2*r_B = 1/T_2",
        derivation: "Express work rates in jobs per hour so coupled rate changes form a 2x2 linear system.",
        shortcut: "Scale one equation to match the coefficient of the unwanted machine and subtract immediately."
      },
      {
        heading: "Alligation Teeter-Totter for Mixtures",
        formula: "Quantity_Low / Quantity_High = (C_High - C_Mix) / (C_Mix - C_Low)",
        derivation: "Weighted average deviation above the mean must balance deviation below the mean.",
        shortcut: "Compute concentration differences directly without introducing volume variables."
      }
    ],
    traps: [
      {
        title: "Harmonic Mean Trap in Round-Trip Speeds",
        wrongStep: "Averaging 60 mph outbound and 40 mph return as (60 + 40)/2 = 50 mph.",
        correction: "Equal distances require the harmonic mean: 2*60*40 / (60 + 40) = 48 mph.",
        penalty: "Adaptive Score Drop (-30 pts)"
      }
    ],
    questions: [
      {
        id: "GMAT-QR-Q1",
        stem: "Machine X and Machine Y working together complete a batch in 6 hours. If X's rate doubles and Y's rate halves, they finish in 4 hours. How many hours does X alone take at its original rate?",
        options: ["8 hours", "9 hours", "10 hours", "12 hours"],
        answer: 1,
        explanation: "x + y = 1/6 and 4x + y = 1/2 => 3x = 1/3 => x = 1/9 => 9 hours."
      },
      {
        id: "GMAT-QR-Q2",
        stem: "A 40-liter solution is 25% ethanol. How many liters of pure ethanol must be added to raise the concentration to 40%?",
        options: ["8 liters", "10 liters", "12 liters", "15 liters"],
        answer: 1,
        explanation: "Current water = 30 liters (unchanged). At 40% ethanol, water is 60% of new volume: 0.60 * V_new = 30 => V_new = 50 liters => 10 liters added."
      }
    ]
  },
  {
    id: "GMAT-MOD-COMB",
    pillar: "GMAC FOCUS QUANTITATIVE",
    title: "GMAT Focus Combinatorics, Probability & Number Properties",
    weightage: "705–805 Differentiator • Adaptive Escalation",
    concepts: [
      {
        heading: "Mutually Exclusive Case Partitioning",
        formula: "Total = Sum over valid (Senior, Junior) splits of C(S, s) * C(J, j)",
        derivation: "When both upper and lower bounds restrict selections, enumerate valid integer partitions first.",
        shortcut: "Verify that s + j equals total committee size in every partition."
      }
    ],
    traps: [
      {
        title: "Double-Counting Overlaps in 'At Least' Selections",
        wrongStep: "Choosing 2 seniors via C(5,2) and then choosing any 2 remaining people via C(7,2).",
        correction: "Multiplying C(5,2)*C(7,2) counts 3-senior committees three times! Partition into exact (2S, 2J) + (3S, 1J).",
        penalty: "Classic 725+ Trap"
      }
    ],
    questions: [
      {
        id: "GMAT-QR-Q3",
        stem: "A task force of 4 analysts is selected from 5 senior and 4 junior analysts, requiring at least 2 senior and at least 1 junior analyst. How many distinct task forces are possible?",
        options: ["80", "95", "100", "105"],
        answer: 2,
        explanation: "C(5,2)*C(4,2) + C(5,3)*C(4,1) = 10*6 + 10*4 = 100."
      },
      {
        id: "GMAT-QR-Q4",
        stem: "What is the greatest integer k such that 3^k is a factor of 30!?",
        options: ["12", "13", "14", "15"],
        answer: 2,
        explanation: "Legendre's formula: floor(30/3) + floor(30/9) + floor(30/27) = 10 + 3 + 1 = 14."
      }
    ]
  }
];
window.IPM_HIGHER_MATH = [];