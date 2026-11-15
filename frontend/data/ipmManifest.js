window.IPM_MANIFEST = {
  brand: "GOALisB GMAT Focus Master Engine",
  tagline: "Adaptive Prep for GMAT Focus Edition (205–805 Scale) • M7, INSEAD, LBS & ISB",

  examModes: {
    ALL_IIM_MASTER: {
      id: "ALL_IIM_MASTER",
      label: "GMAT Focus Standard (64 Qs)",
      badge: "205–805 Scale",
      campuses: [
        "Harvard Business School", "Stanford GSB", "Wharton", "INSEAD",
        "London Business School", "Chicago Booth", "Kellogg", "ISB Hyderabad"
      ],
      programTypes: ["2-Yr MBA", "1-Yr Global MBA", "MiM / Deferred MBA"],
      totalQuestions: 64,
      durationMinutes: 135,
      sectionalTimeLock: true,
      marking: { mcqCorrect: 1, mcqWrong: 0, saCorrect: 1, saWrong: 0 },
      sections: [
        { id: "quant_core", name: "Quantitative Reasoning (Problem Solving — No Geometry)", questions: 21, minutes: 45, type: "MCQ" },
        { id: "varc", name: "Verbal Reasoning (Reading Comprehension & Critical Reasoning)", questions: 23, minutes: 45, type: "MCQ" },
        { id: "dilr", name: "Data Insights (Data Sufficiency, MSR, Table, Graphics & Two-Part)", questions: 20, minutes: 45, type: "MCQ" }
      ],
      selectionWeights: { test: 50, piWat: 30, academics10_12: 20 },
      keyFocus: "Computer-adaptive scoring (205–805), zero geometry in Quant, Data Sufficiency in Data Insights & up to 3 answer edits/section."
    },
    GMAT_DATA_INSIGHTS: {
      id: "GMAT_DATA_INSIGHTS",
      label: "Data Insights Deep Clinic",
      badge: "20 Qs • 45 Min",
      campuses: ["M7 MBA Programs", "INSEAD", "LBS", "ISB"],
      programTypes: ["Data Sufficiency", "Multi-Source Reasoning", "Two-Part Analysis"],
      totalQuestions: 20,
      durationMinutes: 45,
      sectionalTimeLock: true,
      marking: { mcqCorrect: 1, mcqWrong: 0, saCorrect: 1, saWrong: 0 },
      sections: [
        { id: "dilr", name: "Data Sufficiency, Multi-Source Reasoning & Table/Graphics Analysis", questions: 20, minutes: 45, type: "MCQ" }
      ],
      selectionWeights: { test: 100, piWat: 0, academics10_12: 0 },
      keyFocus: "All-or-nothing multi-part scoring, DS sufficiency traps & cross-tab MSR synthesis."
    },
    GMAT_705_PLUS_SPRINT: {
      id: "GMAT_705_PLUS_SPRINT",
      label: "705+ (99th %ile) Adaptive Sprint",
      badge: "Hard Pool",
      campuses: ["HBS", "GSB", "Wharton", "Booth", "Sloan", "Columbia"],
      programTypes: ["99th Percentile Adaptive Calibration"],
      totalQuestions: 32,
      durationMinutes: 68,
      sectionalTimeLock: true,
      marking: { mcqCorrect: 1, mcqWrong: 0, saCorrect: 1, saWrong: 0 },
      sections: [
        { id: "quant_core", name: "Hard Quant (Algebra, Number Properties & Rates)", questions: 11, minutes: 23, type: "MCQ" },
        { id: "varc", name: "Hard CR (Boldface, Flaw, Evaluate) & Dense RC", questions: 11, minutes: 23, type: "MCQ" },
        { id: "dilr", name: "Hard Data Insights & Two-Part Logic", questions: 10, minutes: 22, type: "MCQ" }
      ],
      selectionWeights: { test: 100, piWat: 0, academics10_12: 0 },
      keyFocus: "Eliminating early-question errors that cap adaptive ceiling + strategic review/edit discipline."
    }
  },

  curriculumPillars: [
    {
      id: "quant_core",
      title: "1. GMAT Quantitative Reasoning (Algebra, Arithmetic & Number Properties)",
      relevance: "21 Qs • 45 Mins (No Geometry or Data Sufficiency in Quant)",
      topics: ["Number Properties, Divisibility & Remainders", "Ratios, Percentages, Mixtures & Weighted Averages", "Rates, Work, Combinatorics & Probability", "Linear/Quadratic Equations, Inequalities & Absolute Value", "Functions, Sequences & Coordinate Basics"]
    },
    {
      id: "dilr",
      title: "2. GMAT Data Insights (DS, MSR, Table, Graphics & Two-Part)",
      relevance: "20 Qs • 45 Mins (High-Leverage Section for 685–755+ Scores)",
      topics: ["Data Sufficiency (Value & Yes/No AD/BCE Grid)", "Multi-Source Reasoning (3-Tab Synthesis)", "Two-Part Analysis (Algebraic & Verbal Trade-offs)", "Table Analysis (Sortable Data Filtering)", "Graphics Interpretation (Scatter, Bubble & Dual-Axis)"]
    },
    {
      id: "varc",
      title: "3. GMAT Verbal Reasoning (CR & RC — No Sentence Correction)",
      relevance: "23 Qs • 45 Mins",
      topics: ["Critical Reasoning: Assumption, Strengthen, Weaken & Evaluate", "Critical Reasoning: Boldface Role, Flaw & Paradox", "Reading Comprehension: Main Idea, Inference & Tone", "Business, Science & Humanities Passage Mapping"]
    }
  ]
};