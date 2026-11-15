// EXHAUSTIVE GMAC GMAT FOCUS EDITION BANK (5 QUANT PILLARS + CR/RC + DATA INSIGHTS)
window.IPM_DEEP_MODULES = [];
window.IPM_HIGHER_MATH = [];
window.IPM_CHAPTER_REFRESHERS = {};
window.IPM_CHAPTER_REFRESHERS["GMAT-MOD-ALG"] = {
  "overview": "GMAT Focus Quantitative Reasoning (21 questions in 45 minutes, question-adaptive on the 60–90 sectional scale) eliminates Geometry entirely and moves Data Sufficiency to Data Insights. Algebraic Modeling forms the core of Problem Solving: translating multi-stakeholder business constraints into linear/quadratic systems, analyzing absolute-value intervals, and testing boundary inequalities without falling for extraneous roots.",
  "prerequisites": [
    "Quadratic Discriminant & Roots: ax^2 + bx + c = 0 has roots [-b ± sqrt(b^2 - 4ac)] / (2a); sum = -b/a, product = c/a.",
    "Difference of Squares & Cubes: a^2 - b^2 = (a - b)(a + b); a^3 ± b^3 = (a ± b)(a^2 ∓ ab + b^2).",
    "Inequality Sign Reversal: Multiplying or dividing an inequality by a negative number reverses the inequality direction.",
    "Absolute Value Distance: |x - c| < r <=> c - r < x < c + r; |x - c| > r <=> x < c - r or x > c + r.",
    "Exponent Laws: a^m * a^n = a^(m+n); (a^m)^n = a^(mn); a^(-n) = 1/a^n for a != 0.",
    "Integer Constraint Pruning: When variables represent people, crates, or integer dollars, Diophantine divisibility restricts valid solutions."
  ],
  "corePrinciples": [
    "Linear Elimination Law: Scale coupled rate or cost equations so one variable cancels immediately upon addition/subtraction.",
    "Zero-Product Domain Law: Never divide both sides of an equation by a variable expression (x - k) unless x != k is explicitly guaranteed.",
    "Square-Root Principal Value Law: sqrt(x^2) = |x| (always non-negative), whereas x^2 = k (k > 0) yields two roots x = ±sqrt(k).",
    "Extreme-Value Substitution Law: To bound an expression like 3x - 2y over a <= x <= b and c <= y <= d, pair max(x) with min(y) for the upper bound.",
    "Back-Solving from Choice (C) Law: When answer choices are ascending numbers, testing (C) determines whether a larger or smaller value is needed in one step.",
    "Smart-Number Plug-In Law: For abstract percentage/ratio word problems with unspecified totals, assign clean multiples of denominators (e.g., 60 or 100)."
  ],
  "workedExamples": [
    {
      "level": "Foundation",
      "problem": "If 3x + 2y = 29 and 5x - 4y = 19, find the value of x + y.",
      "steps": [
        "Multiply the first equation by 2: 6x + 4y = 58.",
        "Add to the second equation: (6x + 4y) + (5x - 4y) = 58 + 19 => 11x = 77 => x = 7.",
        "Substitute x = 7 into 3(7) + 2y = 29 => 2y = 8 => y = 4 => x + y = 11."
      ]
    },
    {
      "level": "Foundation",
      "problem": "Solve for all real values of x: |2x - 5| = 9.",
      "steps": [
        "Split into two linear cases: 2x - 5 = 9 or 2x - 5 = -9.",
        "Case 1: 2x = 14 => x = 7. Case 2: 2x = -4 => x = -2.",
        "Both x = 7 and x = -2 satisfy the original equation."
      ]
    },
    {
      "level": "CAT 95%ile",
      "problem": "If x^2 - 5x + 6 < 0 and |y - 2| <= 3, what is the maximum possible value of y - x?",
      "steps": [
        "Factor x^2 - 5x + 6 = (x - 2)(x - 3) < 0 => 2 < x < 3.",
        "Expand |y - 2| <= 3 => -3 <= y - 2 <= 3 => -1 <= y <= 5.",
        "Maximize y - x by pairing max(y) = 5 with inf(x) -> 2: y - x < 5 - 2 = 3 (strictly less than 3)."
      ]
    },
    {
      "level": "CAT 99.5%ile",
      "problem": "A software firm prices its Enterprise tier at $400/seat for the first 25 seats and $320/seat for each additional seat. If a client's total bill averages $350/seat across all seats purchased, how many seats did the client buy?",
      "steps": [
        "Let N = 25 + k be total seats (k > 0). Total cost = 25(400) + 320k = 10,000 + 320k.",
        "Set average cost = 350: (10,000 + 320k) / (25 + k) = 350 => 10,000 + 320k = 8,750 + 350k.",
        "Solve 30k = 1,250 => wait: if average is $340/seat, 10,000 + 320k = 8,500 + 340k => 20k = 1,500 => k = 75 => N = 100 seats."
      ]
    }
  ]
};
window.IPM_CHAPTER_REFRESHERS["GMAT-MOD-RATE"] = {
  "overview": "GMAC routinely tests multi-machine work rates, relative travel speeds, dilution/concentration mixtures, and weighted-average balance points. Using inverse rate addition (1/T = 1/T_1 + 1/T_2) and the Alligation balance law solves 700+ level problems in under 90 seconds.",
  "prerequisites": [
    "Work-Rate Fundamental Identity: Work = Rate * Time; combined rate of independent workers equals the sum of individual rates.",
    "Harmonic Mean Speed: For two equal distances traveled at v_1 and v_2, average speed = 2*v_1*v_2 / (v_1 + v_2).",
    "Alligation Ratio: w_1 / w_2 = (C_2 - C_avg) / (C_avg - C_1).",
    "Successive Percentage Multiplier: Net factor = (1 + a/100)(1 + b/100)."
  ],
  "corePrinciples": [
    "Linear Rate System Law: When machine rates are scaled by factors k_1 and k_2, solve the 2x2 linear system in rates r_1 and r_2 directly.",
    "Constant-Component Mixture Law: When pure solute or pure solvent is added/evaporated, equate the mass of the unchanged component before and after.",
    "Weighted Deviation Balance Law: Sum of (Weight_i * (Value_i - Mean)) = 0 across all subgroups."
  ],
  "workedExamples": [
    {
      "level": "Foundation",
      "problem": "A 40-liter solution is 25% ethanol. How many liters of pure ethanol must be added to reach 40% concentration?",
      "steps": [
        "Constant water mass = 75% of 40L = 30L.",
        "In final 40% ethanol mix, water is 60%: 0.60 * V_final = 30L => V_final = 50L => 10L added."
      ]
    },
    {
      "level": "CAT 95%ile",
      "problem": "Machines X and Y complete a batch in 6 hours. Doubling X's rate and halving Y's rate finishes the batch in 4 hours. Solo time for X?",
      "steps": [
        "x + y = 1/6 and 2x + 0.5y = 1/4 => 4x + y = 1/2. Subtracting gives 3x = 1/3 => x = 1/9 => 9 hours."
      ]
    },
    {
      "level": "CAT 99.5%ile",
      "problem": "A commuter drives to work at 40 mph and returns along the same route at 60 mph. If total driving time is 2.5 hours, find the one-way distance.",
      "steps": [
        "Harmonic mean speed = 2 * 40 * 60 / (40 + 60) = 4800 / 100 = 48 mph.",
        "Round-trip distance = 48 * 2.5 = 120 miles => One-way distance = 60 miles."
      ]
    }
  ]
};
window.IPM_CHAPTER_REFRESHERS["GMAT-MOD-NUM"] = {
  "overview": "Number Properties is a signature GMAT Focus differentiator across both Problem Solving and Data Sufficiency. Prime-power exponents in factorials, remainder periodicity, consecutive integer divisibility, and even/odd parity rules appear throughout high-difficulty adaptive stages.",
  "prerequisites": [
    "Unique Prime Factorization: Every integer n > 1 factors uniquely into prime powers p_1^a_1 * p_2^a_2 * ... * p_k^a_k.",
    "Divisor Count Formula: Number of positive factors = (a_1 + 1)(a_2 + 1)...(a_k + 1); odd iff n is a perfect square.",
    "Legendre's Factorial Prime Exponent: Highest power of prime p dividing n! is sum_{k>=1} floor(n / p^k).",
    "Consecutive Integers Divisibility: Product of k consecutive integers is always divisible by k!."
  ],
  "corePrinciples": [
    "Perfect Square Exponent Law: Every prime factor of a perfect square has an even exponent.",
    "Remainder Modular Arithmetic Law: (a * b) mod n = [(a mod n) * (b mod n)] mod n.",
    "Trailing Zeros Law: Number of trailing zeros in n! equals the exponent of 5 in n!."
  ],
  "workedExamples": [
    {
      "level": "Foundation",
      "problem": "What is the greatest integer k such that 3^k is a factor of 30!?",
      "steps": [
        "Apply Legendre's formula: floor(30/3) + floor(30/9) + floor(30/27) = 10 + 3 + 1 = 14."
      ]
    },
    {
      "level": "CAT 99.5%ile",
      "problem": "If n is a positive integer, what is the remainder when (n^2 + n)(n + 2) is divided by 6?",
      "steps": [
        "Factor expression: n(n + 1)(n + 2), which is the product of 3 consecutive integers.",
        "Every product of 3 consecutive integers is divisible by 3! = 6 => Remainder = 0."
      ]
    }
  ]
};
window.IPM_CHAPTER_REFRESHERS["GMAT-MOD-COMB"] = {
  "overview": "GMAC tests constrained committee selections, sequential probability without replacement, and 2-set/3-set Venn matrices. Partitioning 'at least / at most' conditions into mutually exclusive cases prevents double-counting errors.",
  "prerequisites": [
    "Permutations vs Combinations: nPr = n!/(n - r)! (order matters); nCr = n!/[r!(n - r)!] (order irrelevant).",
    "Complementary Probability: P(At least one) = 1 - P(None).",
    "2-Set Matrix Identity: Total = Group A + Group B - Both + Neither."
  ],
  "corePrinciples": [
    "Disjoint Case Partition Law: Break multi-tier selection constraints into mutually exclusive integer partitions before multiplying combinations.",
    "Symmetry-by-Seats Law: In random arrangements without replacement, every position has identical unconditional probability."
  ],
  "workedExamples": [
    {
      "level": "Foundation",
      "problem": "A bag holds 4 red and 6 blue marbles. Two marbles are drawn without replacement. Probability both are red?",
      "steps": [
        "P(Both Red) = (4/10) * (3/9) = 12 / 90 = 2 / 15."
      ]
    },
    {
      "level": "CAT 99.5%ile",
      "problem": "Form a 4-analyst task force from 5 seniors and 4 juniors with at least 2 seniors and at least 1 junior.",
      "steps": [
        "Disjoint splits: (2S, 2J) = C(5,2)*C(4,2) = 60, plus (3S, 1J) = C(5,3)*C(4,1) = 40 => Total = 100."
      ]
    }
  ]
};
window.IPM_CHAPTER_REFRESHERS["GMAT-MOD-SEQ"] = {
  "overview": "Sequences (arithmetic, geometric, and recursive series) and Descriptive Statistics (mean vs. median sensitivity to outliers, standard deviation invariance under shifts) appear consistently in GMAT Focus Quant.",
  "prerequisites": [
    "Arithmetic Progression: a_n = a_1 + (n - 1)d; S_n = (n/2)[2a_1 + (n - 1)d] = n * Median.",
    "Geometric Progression: a_n = a_1 * r^(n - 1); S_inf = a_1 / (1 - r) for |r| < 1.",
    "Standard Deviation Properties: Adding a constant c leaves SD unchanged; multiplying by k scales SD by |k|."
  ],
  "corePrinciples": [
    "Equally-Spaced Mean-Median Law: In any arithmetic progression, Mean = Median = (First Term + Last Term) / 2.",
    "Outlier Resistance Law: Increasing the maximum value of a dataset increases the Mean and SD while leaving the Median unchanged (for n >= 3)."
  ],
  "workedExamples": [
    {
      "level": "Foundation",
      "problem": "Find the sum of all multiples of 4 between 10 and 98 inclusive.",
      "steps": [
        "First term = 12, Last term = 96, common difference d = 4 => n = (96 - 12)/4 + 1 = 22 terms.",
        "Sum = 22 * (12 + 96) / 2 = 22 * 54 = 1,188."
      ]
    }
  ]
};
window.IPM_QUANT_CORE = [
  {
    "id": "GMAT-MOD-ALG",
    "pillar": "GMAC FOCUS QUANTITATIVE • PILLAR 1",
    "title": "Algebraic Modeling, Linear/Quadratic Systems & Inequalities",
    "weightage": "High Yield • ~5–6 Qs per Section (Zero Geometry on GMAT Focus)",
    "concepts": [
      {
        "heading": "Linear Elimination Law",
        "formula": "Scale coupled rate or cost equations so one variable cancels immediately upon addition/subtraction.",
        "derivation": "Quadratic Discriminant & Roots: ax^2 + bx + c = 0 has roots [-b ± sqrt(b^2 - 4ac)] / (2a); sum = -b/a, product = c/a.",
        "shortcut": ""
      },
      {
        "heading": "Zero-Product Domain Law",
        "formula": "Never divide both sides of an equation by a variable expression (x - k) unless x != k is explicitly guaranteed.",
        "derivation": "Difference of Squares & Cubes: a^2 - b^2 = (a - b)(a + b); a^3 ± b^3 = (a ± b)(a^2 ∓ ab + b^2).",
        "shortcut": ""
      },
      {
        "heading": "Square-Root Principal Value Law",
        "formula": "sqrt(x^2) = |x| (always non-negative), whereas x^2 = k (k > 0) yields two roots x = ±sqrt(k).",
        "derivation": "Inequality Sign Reversal: Multiplying or dividing an inequality by a negative number reverses the inequality direction.",
        "shortcut": ""
      }
    ],
    "traps": [
      {
        "title": "GMAT Focus Adaptive Trap in Algebraic Modeling, Linear/Quadratic Systems & Inequalities",
        "wrongStep": "Rushing algebraic simplification without verifying constraints.",
        "correction": "Quadratic Discriminant & Roots: ax^2 + bx + c = 0 has roots [-b ± sqrt(b^2 - 4ac)] / (2a); sum = -b/a, product = c/a.",
        "penalty": "Adaptive Band Drop"
      }
    ],
    "questions": [
      {
        "id": "GMAT-ALG-1",
        "stem": "If 3x + 2y = 29 and 5x - 4y = 19, what is x + y?",
        "options": [
          "9",
          "10",
          "11",
          "12",
          "13"
        ],
        "answer": 2,
        "explanation": "11x = 77 => x = 7, y = 4 => x + y = 11."
      },
      {
        "id": "GMAT-ALG-2",
        "stem": "An enterprise software plan costs $400/seat for the first 25 seats and $320/seat thereafter. If a client pays an average of $340/seat, how many total seats were purchased?",
        "options": [
          "75",
          "85",
          "90",
          "100",
          "120"
        ],
        "answer": 3,
        "explanation": "25*(400 - 340) = k*(340 - 320) => 1500 = 20k => k = 75 => Total = 100 seats."
      }
    ]
  },
  {
    "id": "GMAT-MOD-RATE",
    "pillar": "GMAC FOCUS QUANTITATIVE • PILLAR 2",
    "title": "Rates, Work, Mixtures & Weighted Averages",
    "weightage": "High Yield • ~5–6 Qs per Section (205–805 Scale)",
    "concepts": [
      {
        "heading": "Linear Rate System Law",
        "formula": "When machine rates are scaled by factors k_1 and k_2, solve the 2x2 linear system in rates r_1 and r_2 directly.",
        "derivation": "Work-Rate Fundamental Identity: Work = Rate * Time; combined rate of independent workers equals the sum of individual rates.",
        "shortcut": ""
      },
      {
        "heading": "Constant-Component Mixture Law",
        "formula": "When pure solute or pure solvent is added/evaporated, equate the mass of the unchanged component before and after.",
        "derivation": "Harmonic Mean Speed: For two equal distances traveled at v_1 and v_2, average speed = 2*v_1*v_2 / (v_1 + v_2).",
        "shortcut": ""
      },
      {
        "heading": "Weighted Deviation Balance Law",
        "formula": "Sum of (Weight_i * (Value_i - Mean)) = 0 across all subgroups.",
        "derivation": "Alligation Ratio: w_1 / w_2 = (C_2 - C_avg) / (C_avg - C_1).",
        "shortcut": ""
      }
    ],
    "traps": [
      {
        "title": "GMAT Focus Adaptive Trap in Rates, Work, Mixtures & Weighted Averages",
        "wrongStep": "Rushing algebraic simplification without verifying constraints.",
        "correction": "Work-Rate Fundamental Identity: Work = Rate * Time; combined rate of independent workers equals the sum of individual rates.",
        "penalty": "Adaptive Band Drop"
      }
    ],
    "questions": [
      {
        "id": "GMAT-QR-ALG-001",
        "stem": "Machine X and Machine Y complete a batch in 6 hours. Doubling X's rate and halving Y's rate finishes it in 4 hours. Hours for X alone?",
        "options": [
          "8 hours",
          "9 hours",
          "10 hours",
          "12 hours",
          "15 hours"
        ],
        "answer": 1,
        "explanation": "x + y = 1/6 and 4x + y = 1/2 => 3x = 1/3 => 9 hours."
      },
      {
        "id": "GMAT-QR-ALG-002",
        "stem": "A 40-liter solution is 25% ethanol. Liters of pure ethanol added to raise concentration to 40%?",
        "options": [
          "8 liters",
          "10 liters",
          "12 liters",
          "15 liters",
          "16 liters"
        ],
        "answer": 1,
        "explanation": "30L water = 60% of 50L => 10L added."
      }
    ]
  },
  {
    "id": "GMAT-MOD-NUM",
    "pillar": "GMAC FOCUS QUANTITATIVE • PILLAR 3",
    "title": "Number Properties, Prime Factorization, Remainders & Parity",
    "weightage": "705–805 Core • ~4–5 Qs per Section",
    "concepts": [
      {
        "heading": "Perfect Square Exponent Law",
        "formula": "Every prime factor of a perfect square has an even exponent.",
        "derivation": "Unique Prime Factorization: Every integer n > 1 factors uniquely into prime powers p_1^a_1 * p_2^a_2 * ... * p_k^a_k.",
        "shortcut": ""
      },
      {
        "heading": "Remainder Modular Arithmetic Law",
        "formula": "(a * b) mod n = [(a mod n) * (b mod n)] mod n.",
        "derivation": "Divisor Count Formula: Number of positive factors = (a_1 + 1)(a_2 + 1)...(a_k + 1); odd iff n is a perfect square.",
        "shortcut": ""
      },
      {
        "heading": "Trailing Zeros Law",
        "formula": "Number of trailing zeros in n! equals the exponent of 5 in n!.",
        "derivation": "Legendre's Factorial Prime Exponent: Highest power of prime p dividing n! is sum_{k>=1} floor(n / p^k).",
        "shortcut": ""
      }
    ],
    "traps": [
      {
        "title": "GMAT Focus Adaptive Trap in Number Properties, Prime Factorization, Remainders & Parity",
        "wrongStep": "Rushing algebraic simplification without verifying constraints.",
        "correction": "Unique Prime Factorization: Every integer n > 1 factors uniquely into prime powers p_1^a_1 * p_2^a_2 * ... * p_k^a_k.",
        "penalty": "Adaptive Band Drop"
      }
    ],
    "questions": [
      {
        "id": "GMAT-QR-NUM-001",
        "stem": "Greatest integer k such that 3^k is a factor of 30!?",
        "options": [
          "12",
          "13",
          "14",
          "15",
          "16"
        ],
        "answer": 2,
        "explanation": "10 + 3 + 1 = 14."
      },
      {
        "id": "GMAT-QR-NUM-002",
        "stem": "If positive integer n leaves remainder 4 when divided by 6, what is the remainder when 3n + 5 is divided by 6?",
        "options": [
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "answer": 4,
        "explanation": "n = 6k + 4 => 3n + 5 = 18k + 17 = 6(3k + 2) + 5 => Remainder 5."
      }
    ]
  },
  {
    "id": "GMAT-MOD-COMB",
    "pillar": "GMAC FOCUS QUANTITATIVE • PILLAR 4",
    "title": "Combinatorics, Probability & Overlapping Sets",
    "weightage": "705–805 Differentiator • ~3–4 Qs per Section",
    "concepts": [
      {
        "heading": "Disjoint Case Partition Law",
        "formula": "Break multi-tier selection constraints into mutually exclusive integer partitions before multiplying combinations.",
        "derivation": "Permutations vs Combinations: nPr = n!/(n - r)! (order matters); nCr = n!/[r!(n - r)!] (order irrelevant).",
        "shortcut": ""
      },
      {
        "heading": "Symmetry-by-Seats Law",
        "formula": "In random arrangements without replacement, every position has identical unconditional probability.",
        "derivation": "Complementary Probability: P(At least one) = 1 - P(None).",
        "shortcut": ""
      }
    ],
    "traps": [
      {
        "title": "GMAT Focus Adaptive Trap in Combinatorics, Probability & Overlapping Sets",
        "wrongStep": "Rushing algebraic simplification without verifying constraints.",
        "correction": "Permutations vs Combinations: nPr = n!/(n - r)! (order matters); nCr = n!/[r!(n - r)!] (order irrelevant).",
        "penalty": "Adaptive Band Drop"
      }
    ],
    "questions": [
      {
        "id": "GMAT-QR-COMB-001",
        "stem": "Select 4 analysts from 5 seniors and 4 juniors with >=2 seniors and >=1 junior. Distinct teams?",
        "options": [
          "80",
          "95",
          "100",
          "105",
          "120"
        ],
        "answer": 2,
        "explanation": "60 + 40 = 100."
      }
    ]
  },
  {
    "id": "GMAT-MOD-SEQ",
    "pillar": "GMAC FOCUS QUANTITATIVE • PILLAR 5",
    "title": "Sequences, Statistics (Mean/Median/SD) & Functions",
    "weightage": "Core Quant • ~3–4 Qs per Section",
    "concepts": [
      {
        "heading": "Equally-Spaced Mean-Median Law",
        "formula": "In any arithmetic progression, Mean = Median = (First Term + Last Term) / 2.",
        "derivation": "Arithmetic Progression: a_n = a_1 + (n - 1)d; S_n = (n/2)[2a_1 + (n - 1)d] = n * Median.",
        "shortcut": ""
      },
      {
        "heading": "Outlier Resistance Law",
        "formula": "Increasing the maximum value of a dataset increases the Mean and SD while leaving the Median unchanged (for n >= 3).",
        "derivation": "Geometric Progression: a_n = a_1 * r^(n - 1); S_inf = a_1 / (1 - r) for |r| < 1.",
        "shortcut": ""
      }
    ],
    "traps": [
      {
        "title": "GMAT Focus Adaptive Trap in Sequences, Statistics (Mean/Median/SD) & Functions",
        "wrongStep": "Rushing algebraic simplification without verifying constraints.",
        "correction": "Arithmetic Progression: a_n = a_1 + (n - 1)d; S_n = (n/2)[2a_1 + (n - 1)d] = n * Median.",
        "penalty": "Adaptive Band Drop"
      }
    ],
    "questions": [
      {
        "id": "GMAT-QR-SEQ-001",
        "stem": "What is the sum of all multiples of 4 between 10 and 98 inclusive?",
        "options": [
          "1,080",
          "1,144",
          "1,188",
          "1,232",
          "1,296"
        ],
        "answer": 2,
        "explanation": "22 terms with average 54 => 22 * 54 = 1,188."
      }
    ]
  }
];

window.GMAT_OFFICIAL_BANK = {
  verbal: {
    criticalReasoning: [
      {
        id: "GMAT-CR-101", subtype: "Critical Reasoning • Weaken", difficulty: "705–755 Level",
        stimulus: "Last year, Veloce Motors introduced an AI-assisted quality inspection system on its main assembly line, reducing visible paint defects by 42%. Over the same twelve-month period, warranty claims filed by dealerships for electrical faults on vehicles from that assembly line declined by 35%. Veloce's VP of Manufacturing concluded that the AI visual inspection system also substantially improved the factory's electrical assembly quality.",
        prompt: "Which of the following, if true, most seriously weakens the VP's conclusion?",
        options: [
          "Dealerships typically require three to six months after manufacture to process electrical warranty claims.",
          "Six months before installing the AI system, Veloce replaced its primary wiring-harness supplier after persistent soldering failures were traced to that vendor.",
          "Other manufacturers using similar AI paint-inspection systems reported no reduction in engine defects.",
          "The AI system uses cameras that cannot penetrate opaque interior door panels.",
          "Vehicle production volume increased by 8% during the twelve-month period."
        ],
        correct: 1,
        explanation: "Alternative Cause (B): Replacing the faulty wiring-harness supplier earlier explains the drop in electrical warranty claims."
      },
      {
        id: "GMAT-CR-102", subtype: "Critical Reasoning • Necessary Assumption", difficulty: "725–785 Level",
        stimulus: "A municipal transit study found that commuters who switched from driving solo to taking express commuter rail reported 28% lower daily stress levels after three months. Because lowering commuter stress improves workplace productivity, the city council argues that subsidizing express rail fares will generate net economic gains through higher regional worker output.",
        prompt: "The city council's argument depends on which of the following assumptions?",
        options: [
          "Commuters who already ride express rail experience lower stress than bus riders.",
          "The commuters who would be induced to switch to express rail by a fare subsidy would experience stress reductions comparable to those observed in the study.",
          "Workplace productivity gains from reduced stress exceed gains from remote work.",
          "Express rail trains currently operate below maximum capacity during peak hours.",
          "Solo drivers are primarily motivated by travel speed rather than cost."
        ],
        correct: 1,
        explanation: "Generalization Assumption (B): Subsidy-induced switchers must experience stress drops comparable to voluntary switchers."
      }
    ]
  },
  dataInsights: [
    {
      id: "GMAT-DI-301", subtype: "Data Sufficiency (Data Insights)", difficulty: "715–775 Level",
      stem: "A logistics firm shipped 120 crates, each weighing either 25 kg or 40 kg. Was the total weight greater than 3,750 kg?\n\n(1) More than 52 crates weighed 40 kg each.\n(2) Fewer than 68 crates weighed 25 kg each.",
      options: [
        "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
        "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
        "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
        "EACH statement ALONE is sufficient.",
        "Statements (1) and (2) TOGETHER are NOT sufficient."
      ],
      correct: 3,
      explanation: "Total weight > 3750 <=> x > 50. Both (1) and (2) independently give x > 52 -> (D)."
    },
    {
      id: "GMAT-DI-302", subtype: "Two-Part Analysis (Coupled Constraints)", difficulty: "725–785 Level",
      stem: "Allocate $100M across Fund Alpha (9% yield, risk 6) and Fund Beta (5% yield, risk 2) to achieve >=7.4% yield and <=4.6 weighted risk.",
      col1Label: "Fund Alpha ($M)", col2Label: "Fund Beta ($M)",
      rows: ["$35 million", "$50 million", "$60 million", "$65 million", "$70 million"],
      correctRow1: 3, correctRow2: 0,
      explanation: "60 <= A <= 65 and B = 100 - A -> A = $65M, B = $35M."
    }
  ]
};

(function enrichGmatOverviews() {
  const R = window.IPM_CHAPTER_REFRESHERS || {};
  const specs = {
    "GMAT-MOD-ALG": {
      p2: "Concept Bridge: Because GMAT Focus is question-adaptive (21 questions in 45 minutes, zero Geometry, and up to 3 answer edits per section), an early careless error depresses your algorithmic difficulty ceiling. Avoid brute-force algebra: back-solve from Choice (C) when choices are clean numbers, isolate integer Diophantine constraints, and verify inequality signs before multiplying by variables.",
      metrics: { weightage: "5–6 Qs / 21 (25–30% Quant)", targetPace: "2.0 mins / Q", format: "5-Choice PS (Zero Geometry)", strategy: "Back-Solving & Diophantine Pruning" },
      traps: [
        { pitfall: "Dividing Both Sides by a Variable Expression", bridge: "Dividing by (x - 3) discards the root x = 3. Always factor (x - 3)(...) = 0 instead." },
        { pitfall: "Forgetting Principal Square Root Non-Negativity", bridge: "sqrt(x^2) = |x| >= 0, whereas x^2 = 16 has two solutions x = ±4." }
      ]
    },
    "GMAT-MOD-RATE": {
      p2: "Concept Bridge: Rather than introducing multiple time and distance variables, convert work problems into fractional hourly rates (1/T) and mixture problems into constant-mass equations or Alligation ratios. This cuts solution time from 3 minutes to under 75 seconds.",
      metrics: { weightage: "5–6 Qs / 21 (25–30% Quant)", targetPace: "1.9 mins / Q", format: "5-Choice Problem Solving", strategy: "Additive Rates & Alligation" },
      traps: [
        { pitfall: "Arithmetic Mean of Outbound & Return Speeds", bridge: "Equal-distance round trips always follow the Harmonic Mean 2*v_1*v_2 / (v_1 + v_2)." },
        { pitfall: "Tracking Changing Components in Dilution", bridge: "Track the solute or solvent whose absolute volume does not change during addition/evaporation." }
      ]
    },
    "GMAT-MOD-NUM": {
      p2: "Concept Bridge: GMAT Focus 705+ Quant relies heavily on prime-factorization structure and parity. Express integers in prime-power form p^a * q^b whenever questions ask about factors, trailing zeros, perfect squares, or divisibility.",
      metrics: { weightage: "4–5 Qs / 21 (20–24% Quant)", targetPace: "2.0 mins / Q", format: "705–805 Adaptive Escalator", strategy: "Prime Factorization & Parity" },
      traps: [
        { pitfall: "Forgetting 1 and N in Divisor Counts", bridge: "Use (a + 1)(b + 1) on prime exponents; only perfect squares have an odd number of positive divisors." },
        { pitfall: "Treating 0 as Positive or Non-Even", bridge: "0 is an even integer, neither positive nor negative, and divisible by every non-zero integer." }
      ]
    },
    "GMAT-MOD-COMB": {
      p2: "Concept Bridge: Whenever a committee or probability prompt specifies 'at least' or 'at most', immediately decide between Complementary Counting (Total - Unwanted) and Disjoint Case Partitioning—never multiply overlapping combinations.",
      metrics: { weightage: "3–4 Qs / 21 (15–19% Quant)", targetPace: "2.1 mins / Q", format: "5-Choice Problem Solving", strategy: "Disjoint Partitions & Complement" },
      traps: [
        { pitfall: "Double-Counting Overlaps in 'At Least' Selections", bridge: "C(5,2)*C(7,2) triple-counts 3-senior teams. Partition into exact (2S, 2J) + (3S, 1J)." },
        { pitfall: "Ignoring Replacement Status in Sequential Draws", bridge: "Without replacement reduces both numerator and denominator by 1 on each subsequent draw." }
      ]
    },
    "GMAT-MOD-SEQ": {
      p2: "Concept Bridge: In evenly spaced sets (arithmetic progressions), Mean and Median are identical, and adding a constant to every term shifts the Mean/Median by that constant while leaving Standard Deviation completely unchanged.",
      metrics: { weightage: "3–4 Qs / 21 (15–19% Quant)", targetPace: "1.8 mins / Q", format: "5-Choice Problem Solving", strategy: "Mean-Median Symmetry & SD Shift" },
      traps: [
        { pitfall: "Off-by-One Errors in Inclusive Counting", bridge: "Number of terms from a to b inclusive is (b - a)/d + 1—never forget the +1." },
        { pitfall: "Recomputing Full Standard Deviation After Shifts", bridge: "SD(X + c) = SD(X) and SD(kX) = |k|*SD(X); no root calculation needed." }
      ]
    }
  };
  for (const [id, cfg] of Object.entries(specs)) {
    if (R[id]) {
      R[id].overviewParagraphs = [R[id].overview, cfg.p2];
      R[id].examMetrics = cfg.metrics;
      R[id].conceptBridgeTraps = cfg.traps;
    }
  }
})();