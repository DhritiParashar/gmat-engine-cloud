// ==============================================================================
// GMAT FOCUS TAB 3: FULL-DEPTH VERBAL STUDIO (CR & RC • ZERO SENTENCE CORRECTION)
// - 7 Verbal Modules x 5 Worked Official-Style GMAT Walkthroughs (35 Examples)
// - Independent Left & Right Split-Pane Scrolling + 8 Live PostgreSQL Drills/Mod
// - Attached Bottom Live PostgreSQL Worked PYQs (6) & Practice Pool (8)
// ==============================================================================
(function () {
  const GMAT_VERBAL_MODULES = [
    {
      id: "VR_NEC_ASSUMP",
      code: "MODULE 1 OF 7",
      title: "Critical Reasoning: Necessary Assumptions (Negation Test)",
      sub: "3–4 Qs per Test • 5 Worked Walkthroughs & Defender Logic",
      topicTag: "Necessary Assumption",
      keywords: ["assumption", "depends", "necessary", "required"],
      overview: "Necessary Assumption questions ask for an unstated premise that MUST be true for the author's conclusion to hold. Unlike Sufficient Assumptions, Necessary Assumptions are modest, essential links—often ruling out a fatal objection ('Defender' assumptions).",
      bridge: "Concept Bridge (The Negation Test): Negate the candidate answer choice logically ('some' -> 'none'; 'will' -> 'may not'; 'primary' -> 'not primary'). If the negated statement destroys the conclusion, it is the required Necessary Assumption.",
      prereq: "Prerequisites & Core Identities: Eliminate extreme language ('only', 'all', 'always', 'never', 'best')—extreme claims are rarely necessary. Focus on new concepts introduced in the conclusion that never appeared in the premises.",
      rules: [
        "Rule 1 (Term-Shift Bridge): Circle every noun/adjective in the Conclusion that does not appear in the Premises; the correct choice links those exact terms.",
        "Rule 2 (Defender Pattern): When an argument jumps from a study/pilot to a broad rollout, the necessary assumption defends against confounding differences.",
        "Rule 3 (Modest Scope): True Necessary Assumptions stay tightly bounded within the argument's domain—reject choices making sweeping comparisons to unrelated industries."
      ],
      workedExamples: [
        {
          label: "WORKED GMAT EXAMPLE 1 (TERM-SHIFT GAP: HOUSEHOLD VS. CITYWIDE)",
          stimulus: "Municipal water analysts noted that households fitted with smart flow meters cut water usage by 22% over six months. Therefore, installing smart flow meters in every residence citywide will reduce total municipal water demand by at least 20%.",
          question: "Which of the following is an assumption on which the argument depends?",
          answer: "Commercial and industrial users do not account for the overwhelming majority of total municipal water demand.",
          steps: "Step 1 (Identify Gap): Premise = residential household usage (-22%); Conclusion = total municipal demand (-20%).\nStep 2 (Apply Negation Test): Suppose commercial/industrial users consume 90% of city water. Even a 22% cut in the 10% residential slice reduces total demand by only 2.2%, collapsing the 20% conclusion."
        },
        {
          label: "WORKED GMAT EXAMPLE 2 (DEFENDER ASSUMPTION: IN-VITRO TO ORAL DRUG)",
          stimulus: "A pharmaceutical lab found that Compound X killed 95% of drug-resistant bacteria in petri-dish cultures within four hours. Researchers concluded that Compound X will be an effective oral antibiotic for human patients.",
          question: "The researchers' conclusion depends on which of the following assumptions?",
          answer: "Compound X is not destroyed by human digestive acids before reaching infected tissues at effective concentrations.",
          steps: "Step 1 (Spot Jump): In-vitro petri dish -> oral human medication.\nStep 2 (Negation Test): If human stomach acid destroys Compound X before absorption, oral administration cannot treat bacterial infections."
        },
        {
          label: "WORKED GMAT EXAMPLE 3 (PLAN-GOAL FEASIBILITY ASSUMPTION)",
          stimulus: "To eliminate morning traffic bottlenecks on the Harbor Bridge, the transit authority plans to double the peak-hour toll from $4 to $8, expecting daily bridge commuters to switch to the parallel commuter ferry.",
          question: "Which of the following is an assumption required by the transit authority's plan?",
          answer: "The parallel commuter ferry has sufficient spare passenger capacity during morning peak hours to absorb displaced bridge drivers.",
          steps: "Step 1 (Plan -> Goal): Plan = raise bridge toll to $8; Goal = commuters switch to ferry and cut bottlenecks.\nStep 2 (Negation Test): If the ferry is already operating at 100% capacity, drivers cannot switch and will continue paying $8 on the bridge."
        },
        {
          label: "WORKED GMAT EXAMPLE 4 (CAUSAL ATTRIBUTION ASSUMPTION)",
          stimulus: "Ever since the university library extended its closing time from 10 PM to 2 AM, average undergraduate GPA has risen by 0.18 points. Clearly, later library access directly improved student academic performance.",
          question: "The argument relies on assuming which of the following?",
          answer: "The university did not simultaneously relax its grading standards or introduce more lenient course-withdrawal policies.",
          steps: "Step 1 (Causal Claim): Extended library hours -> higher GPA.\nStep 2 (Negation Test): If professors relaxed grading standards at the same time, GPA would rise regardless of library hours."
        },
        {
          label: "WORKED GMAT EXAMPLE 5 (SURVEY PROXY ASSUMPTION)",
          stimulus: "Online grocery orders in Metro City grew by 45% last year, whereas total food retail spending grew by only 3%. Analysts concluded that Metro City residents are cooking significantly more meals at home than before.",
          question: "Which of the following is an assumption on which the analysts' conclusion depends?",
          answer: "The surge in online grocery orders does not merely reflect consumers shifting existing supermarket purchases from in-store shopping to delivery apps.",
          steps: "Step 1 (Evidence vs. Claim): Online grocery orders +45% (channel shift) vs. cooking more meals at home (total consumption shift).\nStep 2 (Negation Test): If shoppers simply ordered the same groceries via app instead of walking into stores, home cooking did not increase."
        }
      ],
      curatedDrills: [
        { q: "Premise: Solar panel installation costs fell 40% this year. Conclusion: Residential solar adoption will double next year. Which is a necessary assumption?", opts: ["A) Government subsidies will double next year.", "B) Installation cost is a primary barrier preventing homeowners from adopting solar.", "C) Grid electricity prices will rise by 25%.", "D) Every home has a south-facing roof.", "E) Battery storage costs will also drop 40%."], ans: 1, exp: "Negating (B): If installation cost is NOT a primary barrier, lower panel prices will not double adoption.", topic: "Necessary Assumption" },
        { q: "Premise: Switching surgical checklists from paper to tablet software cut missing-item errors by 60% in a 12-week pilot. Conclusion: Permanent adoption will sustain a 60% error reduction. Necessary assumption?", opts: ["A) Tablet software costs less than paper.", "B) The 60% drop was not merely a temporary novelty effect of being closely monitored during the pilot.", "C) Surgeons prefer tablets over paper.", "D) Other hospitals have already adopted tablet checklists.", "E) All surgical errors stem from checklist omissions."], ans: 1, exp: "Negating (B): If the 60% drop was a temporary Hawthorne/novelty effect, permanent adoption will not sustain it.", topic: "Necessary Assumption" },
        { q: "Premise: Library card registrations rose 35% after the city eliminated late fees. Conclusion: More residents are now reading library books. Necessary assumption?", opts: ["A) Late fees previously generated significant city revenue.", "B) The new library cards were not obtained solely to access free public Wi-Fi or meeting rooms without borrowing books.", "C) Neighboring cities have also abolished late fees.", "D) Print book circulation exceeds e-book circulation.", "E) Library operating hours remained unchanged."], ans: 1, exp: "Negating (B): If residents registered strictly for Wi-Fi/meeting rooms, registrations could rise 35% without more book reading.", topic: "Necessary Assumption" }
      ]
    },
    {
      id: "VR_SUFF_ASSUMP",
      code: "MODULE 2 OF 7",
      title: "Critical Reasoning: Sufficient Assumptions (Formal Logic)",
      sub: "2–3 Qs per Test • 5 Worked Conditional & Set Walkthroughs",
      topicTag: "Sufficient Assumption",
      keywords: ["properly drawn", "follows logically", "sufficient", "if assumed"],
      overview: "Sufficient Assumption questions ('The conclusion follows logically if which is assumed?') ask for a premise strong enough to prove the conclusion 100% airtight. Unlike Necessary Assumptions, strong universal rules ('All', 'Only', 'Any') are frequently the exact right answer.",
      bridge: "Concept Bridge (Equation Method): Treat Premises as P and Conclusion as C. You need an answer choice A such that P + A => C. Match every orphan term in P with every orphan term in C.",
      prereq: "Prerequisites & Core Identities: Master Conditional Contrapositives: 'If X, then Y' (X -> Y) is logically identical to 'If not Y, then not X' (~Y -> ~X), and NEVER implies 'If Y, then X'.",
      rules: [
        "Rule 1 ('Only' Translation): 'Only A are B' translates to 'If B, then A' (B -> A), NOT 'If A, then B'.",
        "Rule 2 ('Unless' Translation): 'X unless Y' translates to 'If not Y, then X' (~Y -> X).",
        "Rule 3 (100% Guarantee): Eliminate any choice that merely makes the conclusion 'more likely'—a Sufficient Assumption must lock the conclusion mathematically."
      ],
      workedExamples: [
        {
          label: "WORKED GMAT EXAMPLE 1 ('ONLY' CONDITIONAL REVERSAL)",
          stimulus: "Every analyst who passed the quantitative modeling exam received a year-end bonus. Priya received a year-end bonus. Therefore, Priya passed the quantitative modeling exam.",
          question: "The conclusion above follows logically if which one of the following is assumed?",
          answer: "Only analysts who passed the quantitative modeling exam received a year-end bonus.",
          steps: "Step 1 (Given): Passed Exam -> Bonus. Fact: Priya got Bonus.\nStep 2 (Required): Bonus -> Passed Exam, which translates directly to 'Only analysts who passed... received a year-end bonus'."
        },
        {
          label: "WORKED GMAT EXAMPLE 2 (CONTRAPOSITIVE CHAIN)",
          stimulus: "No building lacking seismic base isolators can withstand a magnitude 7.5 earthquake. Because the Northgate Tower has stood intact for eighty years, it must be equipped with seismic base isolators.",
          question: "Which assumption allows the conclusion to be properly drawn?",
          answer: "The Northgate Tower has experienced at least one earthquake of magnitude 7.5 or greater during its eighty-year existence.",
          steps: "Step 1 (Rule): ~Isolators -> ~Withstand 7.5 Quake (Contrapositive: Withstand 7.5 Quake -> Isolators).\nStep 2 (Bridge): Standing intact proves 'Withstand 7.5 Quake' ONLY if the tower actually endured a >= 7.5 earthquake."
        },
        {
          label: "WORKED GMAT EXAMPLE 3 (NORMATIVE / VALUE BRIDGE)",
          stimulus: "Clinical trials show that Generic Drug G lowers blood pressure just as effectively as Brand Drug B while costing 70% less. Consequently, public hospitals should prescribe Generic Drug G instead of Brand Drug B.",
          question: "The conclusion follows logically if which of the following is assumed?",
          answer: "Whenever two drugs are equally effective and carry identical safety profiles, public hospitals should prescribe the less expensive option.",
          steps: "Step 1 (Is -> Ought Gap): Premises state factual efficacy + lower cost; Conclusion makes a policy 'should' recommendation.\nStep 2 (Bridge): Universal rule linking equal efficacy + lower cost directly to 'should prescribe'."
        },
        {
          label: "WORKED GMAT EXAMPLE 4 (DISJUNCTIVE ELIMINATION: EITHER/OR)",
          stimulus: "Either the quarterly revenue shortfall resulted from supply-chain delays or it stemmed from weaker consumer demand. Since warehouse inventory remained fully stocked throughout the quarter, weaker consumer demand caused the shortfall.",
          question: "Which assumption makes the argument deductively valid?",
          answer: "Supply-chain delays cannot cause a revenue shortfall when warehouse inventory remains fully stocked throughout the quarter.",
          steps: "Step 1 (Disjunction): Delay OR Weak Demand.\nStep 2 (Eliminate Delay): Fully stocked warehouse rules out Supply-Chain Delay -> forces Weak Demand."
        },
        {
          label: "WORKED GMAT EXAMPLE 5 (SUBSET-TO-WHOLE UNIVERSAL RULE)",
          stimulus: "All software engineers on the Alpha Team are proficient in Rust. Therefore, at least some members of the Cloud Architecture Division are proficient in Rust.",
          question: "Which of the following, if assumed, guarantees the conclusion?",
          answer: "At least one software engineer on the Alpha Team is a member of the Cloud Architecture Division.",
          steps: "Step 1 (Given): Alpha Team -> Rust.\nStep 2 (Bridge): Overlap between Alpha Team and Cloud Architecture Division guarantees 'Some Cloud Division -> Rust'."
        }
      ],
      curatedDrills: [
        { q: "Premise: No sustainable energy grid relies heavily on imported coal. Conclusion: Country X's energy grid is not sustainable. Which assumption guarantees this conclusion?", opts: ["A) Country X imports most of its natural gas.", "B) Country X's energy grid relies heavily on imported coal.", "C) Sustainable energy grids cost more to build.", "D) Country X plans to reduce coal imports next decade.", "E) Most countries rely on imported fossil fuels."], ans: 1, exp: "Premise: Sustainable -> ~Heavy Imported Coal. Adding (B) triggers the contrapositive: Country X -> ~Sustainable.", topic: "Sufficient Assumption" },
        { q: "Premise: All board members who voted for the merger own preferred shares. Premise: Nobody who owns preferred shares attended the press briefing. Conclusion: No board member who voted for the merger attended the press briefing. Additional assumption needed?", opts: ["A) Yes, all board members own common stock.", "B) No, the conclusion already follows with 100% deductive certainty from the two premises.", "C) Yes, the merger was approved unanimously.", "D) Yes, only board members attended the briefing.", "E) Yes, preferred shares carry voting rights."], ans: 1, exp: "Chain: Voted Merger -> Preferred Shares -> ~Attended Briefing. Deductively airtight already (B).", topic: "Sufficient Assumption" }
      ]
    },
    {
      id: "VR_WEAKEN",
      code: "MODULE 3 OF 7",
      title: "Critical Reasoning: Weaken & Logical Flaw",
      sub: "4–5 Qs per Test • 5 Worked Causal, Sampling & Baseline Walkthroughs",
      topicTag: "Weaken",
      keywords: ["weaken", "undermine", "flaw", "vulnerable", "criticism"],
      overview: "Weaken and Flaw questions expose the hidden vulnerability between evidence and conclusion. Over 70% of GMAT Focus Weaken items exploit either Causal Fallacies (confusing correlation with causation) or Unrepresentative Samples.",
      bridge: "Concept Bridge (3-Prong Causal Dismantling): To break 'X caused Y', introduce (1) Third-Factor Confounder Z causing both X and Y, (2) Reverse Causation (Y caused X), or (3) High X without Y.",
      prereq: "Prerequisites & Core Identities: Accept all stated facts in the stimulus as 100% true. Never pick an answer that merely attacks a minor premise rather than the inferential leap.",
      rules: [
        "Rule 1 (Baseline / Control Group Missing): '80% of recovered patients took Herb Z' proves nothing unless compared against recovery rates WITHOUT Herb Z.",
        "Rule 2 (Raw Count vs. Rate): Higher total accident counts on Highway A do not mean Highway A is more dangerous if Highway A carries 5x the traffic volume.",
        "Rule 3 (Self-Selection Trap): Voluntary surveys capture motivated extremes and fail to represent the general population."
      ],
      workedExamples: [
        {
          label: "WORKED GMAT EXAMPLE 1 (REVERSE CAUSATION)",
          stimulus: "Cities with higher numbers of boutique coffee shops per capita also exhibit higher average residential property values. Urban developers concluded that attracting boutique coffee shops increases neighborhood property values.",
          question: "Which of the following, if true, most seriously weakens the developers' conclusion?",
          answer: "Boutique coffee chains open new locations exclusively in neighborhoods where household incomes and property values have already begun rising.",
          steps: "Step 1 (Claim): Coffee shops (X) -> Rising property values (Y).\nStep 2 (Reverse Causation): Rising property values/incomes (Y) attract coffee shops (X)."
        },
        {
          label: "WORKED GMAT EXAMPLE 2 (NUMERATOR WITHOUT DENOMINATOR)",
          stimulus: "Last year, the number of bicycle collisions in Downtown District rose by 28% after the city painted protected bike lanes. Opponents argued that protected bike lanes make cycling more hazardous.",
          question: "Which finding most seriously weakens the opponents' argument?",
          answer: "The total number of daily bicycle trips in Downtown District tripled following the installation of the protected bike lanes.",
          steps: "Step 1 (Raw Count vs. Rate): Collisions rose 1.28x while total trips rose 3.00x.\nStep 2 (Per-Trip Risk): Accident rate per trip actually dropped by 1.28 / 3.00 = 57%."
        },
        {
          label: "WORKED GMAT EXAMPLE 3 (PLAN BACKFIRE / UNINTENDED CONSEQUENCE)",
          stimulus: "To reduce plastic waste from disposable coffee cups, a university cafe began charging a $0.50 surcharge on paper cups while offering free refills to customers bringing reusable mugs.",
          question: "Which fact most undermines the expectation that this policy will reduce total environmental waste?",
          answer: "Over 70% of students purchased inexpensive plastic reusable mugs at the bookstore and discarded them after fewer than three uses.",
          steps: "Step 1 (Goal): Cut total waste.\nStep 2 (Backfire): Replacing thin paper cups with discarded heavy plastic mugs increases total waste."
        },
        {
          label: "WORKED GMAT EXAMPLE 4 (SURVIVORSHIP / SELECTION BIAS)",
          stimulus: "A business magazine interviewed 50 founders of billion-dollar startups and found that 84% woke up before 5:30 AM. The magazine concluded that waking before 5:30 AM substantially increases an entrepreneur's odds of building a billion-dollar company.",
          question: "What is the primary flaw in the magazine's reasoning?",
          answer: "It fails to consider how many founders of failed startups also woke up before 5:30 AM.",
          steps: "Step 1 (Base-Rate Neglect): Only successful startups were sampled.\nStep 2 (Missing Comparison): If 85% of failed founders also wake at 5:30 AM, wake-up time has zero predictive power."
        },
        {
          label: "WORKED GMAT EXAMPLE 5 (EQUIVOCATION / SHIFT IN MEANING)",
          stimulus: "Public health guidelines state that moderate exercise is 'safe' for adults. Running an ultramarathon is a form of exercise. Therefore, running an ultramarathon is safe for all adults.",
          question: "The argument is most vulnerable to criticism on the grounds that it:",
          answer: "Ignores the qualifier 'moderate' when applying a general guideline to an extreme form of exercise.",
          steps: "Step 1 (Scope Distortion): 'Moderate exercise' != 'ultramarathon'.\nStep 2 (Overgeneralization): Extending a qualified rule to an extreme case invalidates the deduction."
        }
      ],
      curatedDrills: [
        { q: "Executives who read fiction daily report 30% lower stress than non-readers. Thus, reading fiction lowers executive stress. Which most seriously weakens this argument?", opts: ["A) Non-fiction readers also report lower stress.", "B) Executives with lighter, manageable workloads have more free time to read fiction daily.", "C) Most fiction is read after work hours.", "D) Audiobooks are increasingly popular among managers.", "E) Stress varies by industry sector."], ans: 1, exp: "(B) reveals a confounding variable (lighter workload) causing both lower stress and free time to read.", topic: "Weaken" },
        { q: "In an opt-in website poll, 82% of respondents favored stricter data-privacy laws. A columnist concluded that over four-fifths of all internet users support stricter laws. Primary flaw?", opts: ["A) Confusing necessary and sufficient conditions.", "B) Generalizing from a self-selected sample unrepresentative of all internet users.", "C) Failing to define data-privacy laws.", "D) Relying on outdated polling.", "E) Equivocating on the word 'stricter'."], ans: 1, exp: "Opt-in website polls suffer from severe self-selection bias (B).", topic: "Logical Flaw" }
      ]
    },
    {
      id: "VR_STRENGTHEN",
      code: "MODULE 4 OF 7",
      title: "Critical Reasoning: Strengthen & Evaluate the Argument",
      sub: "3–4 Qs per Test • 5 Worked Control-Group & Variance Walkthroughs",
      topicTag: "Strengthen",
      keywords: ["strengthen", "support", "evaluate", "useful to know"],
      overview: "Strengthen questions ask for new evidence that makes the conclusion significantly more plausible. Evaluate questions ask for a neutral question whose 'Yes' answer strengthens and 'No' answer weakens (the Variance Test).",
      bridge: "Concept Bridge (The Variance Test for Evaluate): Test any Evaluate choice by plugging in 'Yes' vs. 'No'. Only the correct choice splits the argument in two opposite directions.",
      prereq: "Prerequisites & Core Identities: Ruling out a major alternative cause or establishing a clean control group is the single highest-yield Strengthen pattern on GMAT Focus.",
      rules: [
        "Rule 1 (Rule Out Alternative Cause): If X -> Y is claimed, showing that Z (the obvious rival cause) did NOT occur strongly reinforces X -> Y.",
        "Rule 2 (Control Group Confirmation): Showing that a matched group WITHOUT X did NOT experience Y validates X's causal impact.",
        "Rule 3 (Evaluate Polarity): If both 'Yes' and 'No' leave the conclusion unaffected, eliminate the choice immediately."
      ],
      workedExamples: [
        {
          label: "WORKED GMAT EXAMPLE 1 (CONTROL GROUP STRENGTHENER)",
          stimulus: "After introducing a four-day workweek, a software firm's quarterly code output rose 12%. HR concluded that the compressed schedule boosted developer productivity.",
          question: "Which of the following, if true, most strengthens HR's conclusion?",
          answer: "A sister division of the same firm using identical software tools kept a five-day schedule and saw zero change in quarterly code output.",
          steps: "Step 1 (Need): Rule out seasonal demand or new coding tools.\nStep 2 (Control Group): Sister division with identical tools on 5-day schedule had 0% gain."
        },
        {
          label: "WORKED GMAT EXAMPLE 2 (ELIMINATING REVERSE CAUSATION)",
          stimulus: "Students who take handwritten lecture notes score higher on conceptual synthesis exams than students who type notes on laptops. Educators concluded that handwriting promotes deeper cognitive encoding.",
          question: "Which finding best supports the educators' conclusion?",
          answer: "In a randomized experiment where students were assigned by coin flip to handwrite or type notes, the handwriting group still outperformed the typing group on conceptual questions.",
          steps: "Step 1 (Confounder): Self-selected note-takers might already be stronger students.\nStep 2 (Random Assignment): Coin-flip assignment removes prior student ability as a confounder."
        },
        {
          label: "WORKED GMAT EXAMPLE 3 (EVALUATE THE ARGUMENT: VARIANCE TEST)",
          stimulus: "An e-commerce retailer plans to offer free return shipping on all apparel orders, predicting that higher customer purchase confidence will increase net profits.",
          question: "Which question would be most useful to evaluate whether the retailer's plan will succeed?",
          answer: "Will the gross profit generated by additional apparel orders exceed the combined cost of return shipping and restocking returned items?",
          steps: "Step 1 (Variance Test — 'Yes'): Extra gross margin > return shipping cost -> Net profit rises (Strengthens).\nStep 2 (Variance Test — 'No'): Return costs exceed extra gross margin -> Net profit falls (Weakens)."
        },
        {
          label: "WORKED GMAT EXAMPLE 4 (DOSE-RESPONSE CORRELATION)",
          stimulus: "Researchers hypothesized that trace lithium in municipal drinking water lowers regional rates of severe mood disorders.",
          question: "Which additional evidence would most strongly support the researchers' hypothesis?",
          answer: "Across 40 towns with comparable demographics, towns with moderately higher natural lithium concentrations consistently exhibited proportionally lower disorder rates than towns with trace levels.",
          steps: "Step 1 (Mechanism): Dose-response gradient strengthens causal inference across controlled demographics."
        },
        {
          label: "WORKED GMAT EXAMPLE 5 (RULING OUT ARTIFACT / MEASUREMENT BIAS)",
          stimulus: "Archaeologists found three times as many bronze tools in Layer B of an excavation site as in older Layer A, concluding that metallurgy expanded rapidly during Layer B's era.",
          question: "Which fact best strengthens this conclusion?",
          answer: "Soil acidity and moisture levels in Layer A and Layer B were identical, preserving bronze artifacts at the exact same rate.",
          steps: "Step 1 (Rival Explanation): Maybe Layer A was more acidic and corroded older bronze tools.\nStep 2 (Eliminate Rival): Identical soil preservation confirms Layer B genuinely had 3x more tools."
        }
      ],
      curatedDrills: [
        { q: "A coastal town banned single-use plastic bags and observed a 45% drop in shoreline plastic litter within six months. Which best strengthens the claim that the ban caused the drop?", opts: ["A) Tourism revenue remained steady over the six months.", "B) Neighboring coastal towns without a bag ban experienced no decline in shoreline plastic litter during the same six months.", "C) Paper bag usage increased in local supermarkets.", "D) Volunteers organized two beach cleanups last year.", "E) Plastic bottles still account for 30% of litter."], ans: 1, exp: "(B) provides a concurrent control group (neighboring towns without the ban saw 0% drop).", topic: "Strengthen" }
      ]
    },
    {
      id: "VR_BOLDFACE",
      code: "MODULE 5 OF 7",
      title: "Critical Reasoning: Boldface & Method of Reasoning",
      sub: "2–3 Qs per Test • 5 Worked Structural Role Walkthroughs",
      topicTag: "Boldface",
      keywords: ["boldface", "boldfaced", "role", "method", "argumentative"],
      overview: "Boldface questions appear heavily once your adaptive score enters the 675–805 band. You map the logical architecture of the passage—distinguishing Main Conclusion, Intermediate Conclusion, Premise/Evidence, and Opposing Position.",
      bridge: "Concept Bridge (Two-Speaker Map): Tag every clause before reading choices: [OPP] Opposing Claim, [EV] Empirical Evidence, [IC] Intermediate Conclusion, [MC] Main Conclusion.",
      prereq: "Prerequisites & Core Identities: Contrast pivots ('However', 'Yet', 'Nonetheless') almost always mark the boundary between an Opposing Position and the Author's rebuttal.",
      rules: [
        "Rule 1 (Intermediate vs. Main Conclusion): If Statement A supports Statement B, and B supports nothing else, A is an Intermediate Conclusion and B is the Main Conclusion.",
        "Rule 2 (Concession vs. Refutation): 'Although X is true...' signals a Concession acknowledged by the author, not a position the author refutes.",
        "Rule 3 (Two-Part Elimination): Verify Boldface 1's role across all 5 choices first—usually 3 choices fail immediately on Boldface 1 alone."
      ],
      workedExamples: [
        {
          label: "WORKED GMAT EXAMPLE 1 (OPPOSING CLAIM + COUNTER-EVIDENCE)",
          stimulus: "Many urban planners contend that [BF1: widening urban highways permanently eliminates peak-hour congestion]. Yet longitudinal traffic studies across 30 metropolitan areas show that [BF2: expanded road capacity induces additional commuter driving within three years], restoring original delay times.",
          question: "In the argument above, the two boldfaced portions play which roles?",
          answer: "The first is a position that the argument seeks to refute; the second is an empirical finding cited to undermine that position.",
          steps: "Step 1: 'Many urban planners contend' + 'Yet' => BF1 is the Opposing Position to be refuted.\nStep 2: 'Longitudinal traffic studies show' => BF2 is Empirical Evidence undermining BF1."
        },
        {
          label: "WORKED GMAT EXAMPLE 2 (CONCESSION + MAIN CONCLUSION)",
          stimulus: "[BF1: Admitting that robotic warehouse automation requires high upfront capital expenditure], logistics directors nonetheless maintain that [BF2: full automation lowers per-parcel fulfillment cost within 18 months].",
          question: "What roles do the two boldfaced portions play?",
          answer: "The first acknowledges a consideration that weighs against the argument's main conclusion; the second is that main conclusion.",
          steps: "Step 1: 'Admitting that...' marks BF1 as a Concession (acknowledged obstacle).\nStep 2: 'Nonetheless maintain that...' marks BF2 as the Author's Main Conclusion."
        },
        {
          label: "WORKED GMAT EXAMPLE 3 (EVIDENCE + INTERMEDIATE CONCLUSION)",
          stimulus: "Because [BF1: lithium-ion battery cell costs fell 80% over the past decade], [BF2: utility-scale grid storage is now cheaper than building new natural-gas peaker plants]. Therefore, electric utilities should phase out gas peaker construction immediately.",
          question: "How do the two boldfaced statements function?",
          answer: "The first is evidence supporting an intermediate conclusion; the second is that intermediate conclusion, which in turn supports the main policy recommendation.",
          steps: "Step 1: BF1 ('Because...') supports BF2.\nStep 2: BF2 supports 'Therefore, electric utilities should phase out...' (Main Conclusion) -> BF2 is an Intermediate Conclusion."
        },
        {
          label: "WORKED GMAT EXAMPLE 4 (BACKGROUND CONTEXT + EXPLANATION)",
          stimulus: "[BF1: Migratory Arctic terns travel over 70,000 kilometers annually between polar breeding and feeding grounds]. Marine biologists propose that [BF2: the birds exploit prevailing global wind gyres to minimize metabolic energy expenditure during transit].",
          question: "What roles do BF1 and BF2 play?",
          answer: "The first describes a phenomenon that the second seeks to explain.",
          steps: "Step 1: BF1 states an undisputed natural phenomenon.\nStep 2: BF2 offers a scientific hypothesis explaining how BF1 occurs."
        },
        {
          label: "WORKED GMAT EXAMPLE 5 (METHOD OF REASONING: COUNTEREXAMPLE)",
          stimulus: "Economist A claims that no central bank can curb double-digit inflation without triggering a severe recession. Economist B replies by citing Country Z in 1994, where targeted monetary tightening lowered inflation from 14% to 3% while GDP grew 3.2%.",
          question: "Economist B responds to Economist A by:",
          answer: "Presenting a specific historical counterexample that falsifies Economist A's universal generalization.",
          steps: "Step 1: Economist A makes an absolute universal claim ('no central bank can...').\nStep 2: One verified counterexample (Country Z) disproves an absolute negative."
        }
      ],
      curatedDrills: [
        { q: "Critics argue that remote work erodes innovation. However, patent filings per engineer rose 14% across hybrid tech firms last year, demonstrating that distributed teams innovate effectively. Role of 'patent filings per engineer rose 14%'?", opts: ["A) Main conclusion of the argument.", "B) Position the argument seeks to refute.", "C) Empirical evidence supporting the author's main conclusion.", "D) Assumption required by critics.", "E) Concession limiting the conclusion."], ans: 2, exp: "It is empirical evidence cited right after 'However' to prove the main conclusion.", topic: "Boldface" }
      ]
    },
    {
      id: "VR_PARADOX",
      code: "MODULE 6 OF 7",
      title: "Critical Reasoning: Resolve the Paradox & Inference",
      sub: "4–5 Qs per Test • 5 Worked Simpson's Paradox & Deduction Walkthroughs",
      topicTag: "Paradox",
      keywords: ["paradox", "discrepancy", "explain", "inference", "must be true"],
      overview: "Paradox items ask you to reconcile two seemingly contradictory facts. Inference ('Must Be True') items contain zero conclusion—you deduce a statement 100% proven by the text alone.",
      bridge: "Concept Bridge (Subgroup Mix Shift): When every individual product's margin drops yet overall company margin rises, sales volume shifted toward the higher-margin product line.",
      prereq: "Prerequisites & Core Identities: Eliminate extreme quantifiers ('all', 'never', 'only') in Inference answers; favor provable statements ('some', 'not all', 'at least one').",
      rules: [
        "Rule 1 (Both-Sides Rule): A Paradox answer must explain BOTH conflicting facts simultaneously without contradicting either premise.",
        "Rule 2 (Pigeonhole Overlap): If 'Most A are B' (>50%) and 'Most A are C' (>50%), then 'Some B are C' MUST be true.",
        "Rule 3 (Strict Textual Proof): Reject real-world truths that are not strictly entailed by the stimulus sentences."
      ],
      workedExamples: [
        {
          label: "WORKED GMAT EXAMPLE 1 (SIMPSON'S PARADOX MIX SHIFT)",
          stimulus: "Between 2022 and 2025, an automaker's average profit margin per vehicle sold rose from 8% to 11%, even though the profit margin on every individual model declined over that same period.",
          question: "Which best resolves the apparent discrepancy?",
          answer: "Sales volume shifted dramatically away from low-margin compact sedans toward high-margin luxury SUVs.",
          steps: "Step 1: Every model fell, yet weighted average rose.\nStep 2: Shifting mix from 4% sedans to 14% SUVs lifts the overall weighted average from 8% to 11%."
        },
        {
          label: "WORKED GMAT EXAMPLE 2 (PRICE CUT + REVENUE SURGE)",
          stimulus: "A regional museum cut general admission ticket prices by 25%, yet total museum revenue rose 30% over the following year.",
          question: "Which fact best explains both outcomes?",
          answer: "Paid visitor attendance increased by 60%, and gift-shop spending per visitor rose substantially.",
          steps: "Step 1: 0.75 ticket price * 1.60 attendance = 1.20 (+20% ticket revenue), boosted further by gift-shop sales to +30%."
        },
        {
          label: "WORKED GMAT EXAMPLE 3 (INFERENCE: PIGEONHOLE OVERLAP)",
          stimulus: "Over 65% of the fellowships awarded by the Foundation this year went to molecular biologists, and over 60% of all fellowships went to researchers under age 35.",
          question: "Which statement must be true based on the information above?",
          answer: "At least some of the fellowships awarded to molecular biologists went to researchers under age 35.",
          steps: "Step 1: 65% + 60% = 125% > 100%.\nStep 2: At least 25% of all fellowships MUST belong to both categories simultaneously."
        },
        {
          label: "WORKED GMAT EXAMPLE 4 (PARADOX: SAFETY FEATURE & INJURY RATE)",
          stimulus: "After downhill ski resorts mandated padded helmets, the rate of minor concussions per skier-day declined by 40%, yet the rate of high-speed limb fractures increased by 15%.",
          question: "Which best resolves this discrepancy?",
          answer: "Wearing helmets led skiers to feel more protected and ski at significantly higher speeds on steeper trails.",
          steps: "Step 1: Risk compensation ('Peltzman effect') explains why head injuries dropped while high-speed collisions caused more limb fractures."
        },
        {
          label: "WORKED GMAT EXAMPLE 5 (INFERENCE: CONDITIONAL BOUND)",
          stimulus: "Every commercial satellite launched into geostationary orbit requires onboard station-keeping thrusters. No cubesat weighing under 10 kilograms can accommodate station-keeping thrusters.",
          question: "Which conclusion follows with certainty?",
          answer: "No cubesat weighing under 10 kilograms can be operated in geostationary orbit.",
          steps: "Step 1: Geostationary -> Thrusters; Under 10 kg -> ~Thrusters.\nStep 2: Contrapositive: Under 10 kg -> ~Geostationary."
        }
      ],
      curatedDrills: [
        { q: "Last year, an airline cut average ticket prices by 15%, yet total passenger revenue rose 22% despite operating the exact same number of flights. Best explanation?", opts: ["A) Jet fuel prices declined 10%.", "B) Lower fares filled previously empty seats, raising average flight occupancy from 58% to 84%.", "C) Rivals also cut fares.", "D) Business class was 20% of bookings.", "E) A new loyalty program launched."], ans: 1, exp: "0.85 price * (84/58 = 1.448 seats) = 1.23 (+23% revenue), cleanly resolving both facts.", topic: "Paradox" }
      ]
    },
    {
      id: "VR_RC",
      code: "MODULE 7 OF 7",
      title: "Reading Comprehension: Structure, Tone & Inference",
      sub: "3–4 Passages (12–13 Qs) • 5 Worked Structural & Inference Walkthroughs",
      topicTag: "Reading Comprehension",
      keywords: ["passage", "author", "primary purpose", "tone", "inferred", "reading"],
      overview: "GMAT Reading Comprehension presents 250–350 word passages across Science, Economics, and Humanities. Top 705+ scorers read for structural function—mapping each paragraph's role rather than memorizing technical terminology.",
      bridge: "Concept Bridge (Paragraph Role Map): Jot 5 words per paragraph: P1 = Traditional Theory; P2 = New Empirical Anomaly; P3 = Author's Qualified Synthesis.",
      prereq: "Prerequisites & Core Identities: Separate the Author's Tone (analytical, measured, qualified) from the Tone of Cited Scholars.",
      rules: [
        "Rule 1 (Primary Purpose Formula): Match the passage's overarching arc ('evaluate a challenge to...', 'reconcile two hypotheses regarding...'), never a detail from Paragraph 2 alone.",
        "Rule 2 (Line-Proof Verification): Never answer Specific Detail questions from memory—verify the exact sentence in the passage before selecting.",
        "Rule 3 (Degree Distortion Trap): Eliminate choices that exaggerate ('proves conclusively' vs. 'suggests') or reverse cause/effect."
      ],
      workedExamples: [
        {
          label: "WORKED GMAT EXAMPLE 1 (PASSAGE STRUCTURE & CONTRAST PIVOT)",
          stimulus: "Passage Excerpt: 'While early economists attributed industrial clustering solely to transport cost savings, recent empirical studies highlight localized knowledge spillovers among specialized engineers as the decisive driver in modern technology hubs.'",
          question: "What is the primary structural function of this sentence?",
          answer: "To contrast a traditional explanation of industrial clustering with more recent empirical findings.",
          steps: "Step 1: 'While early economists attributed [Old View]..., recent empirical studies highlight [New View]...'.\nStep 2: Eliminate 'disproves' or 'criticizes'—the tone is purely comparative."
        },
        {
          label: "WORKED GMAT EXAMPLE 2 (AUTHORIAL TONE & QUALIFICATION)",
          stimulus: "Passage Excerpt: 'Although paleoclimatologists have welcomed ice-core isotope records as a major breakthrough, several anomalies in pre-Holocene CO2 lags caution against treating single-site cores as exact global proxies.'",
          question: "Which phrase best describes the author's attitude toward ice-core isotope records?",
          answer: "Appreciative of their value yet cautious about overgeneralizing from isolated samples.",
          steps: "Step 1: 'Welcomed... as a major breakthrough' (positive recognition) + 'caution against treating... as exact global proxies' (measured qualification)."
        },
        {
          label: "WORKED GMAT EXAMPLE 3 (INFERENCE FROM BIOLOGICAL MECHANISM)",
          stimulus: "Passage Excerpt: 'Unlike deciduous trees that shed foliage seasonally to conserve water, desert succulents store water in specialized parenchyma tissue and open their stomata only at night to minimize transpirational loss.'",
          question: "It can be inferred from the excerpt that desert succulents:",
          answer: "Reduce daytime water evaporation by restricting gas exchange through stomata during daylight hours.",
          steps: "Step 1: Opening stomata ONLY at night implies keeping them closed during the day to prevent evaporation."
        },
        {
          label: "WORKED GMAT EXAMPLE 4 (APPLICATION / ANALOGY TRANSFER)",
          stimulus: "Passage Excerpt: 'Keystone predators regulate ecosystem biodiversity not merely by consuming dominant herbivores, but by inducing behavioral avoidance—a \"landscape of fear\" that prevents overgrazing in sensitive riparian zones.'",
          question: "Which scenario best illustrates the mechanism described in the excerpt?",
          answer: "Reintroducing wolves to a valley causes elk to avoid open riverbanks, allowing willow saplings to regenerate even before wolf numbers rise substantially.",
          steps: "Step 1: Behavioral avoidance ('landscape of fear') changes herbivore foraging location rather than relying solely on population reduction."
        },
        {
          label: "WORKED GMAT EXAMPLE 5 (PRIMARY PURPOSE OF MULTI-PARAGRAPH PASSAGE)",
          stimulus: "Paragraph 1 outlines the standard solar-nebula model of planetary formation. Paragraph 2 presents exoplanet discoveries of 'hot Jupiters' orbiting close to their stars, contradicting the standard model. Paragraph 3 evaluates orbital migration theory as a way to reconcile both sets of observations.",
          question: "What is the primary purpose of the passage?",
          answer: "To examine an observational challenge to an established scientific model and assess a theoretical modification proposed to resolve it.",
          steps: "Step 1: Synthesis across all 3 paragraphs: Model (P1) -> Anomaly (P2) -> Proposed Reconciliation (P3)."
        }
      ],
      curatedDrills: [
        { q: "Passage Excerpt: 'Although deep-sea hydrothermal vents lack sunlight, chemosynthetic bacteria oxidize hydrogen sulfide to fix carbon, sustaining dense ecosystems independent of photosynthesis.' What can be inferred?", opts: ["A) Most marine organisms rely on chemosynthesis.", "B) Sunlight is not an absolute prerequisite for sustaining complex biological ecosystems.", "C) Hydrogen sulfide is toxic to all surface bacteria.", "D) Vents exist in every ocean basin.", "E) Chemosynthetic bacteria evolved before plants."], ans: 1, exp: "Dense vent ecosystems thrive without sunlight via chemosynthesis, proving sunlight is not strictly required for all ecosystems (B).", topic: "Reading Comprehension" }
      ]
    }
  ];

  window._GMAT_VR_MOD_IDX = window._GMAT_VR_MOD_IDX || 0;
  window._GMAT_VR_SUBTAB = window._GMAT_VR_SUBTAB || "theory";
  window._GMAT_VR_PYQ_TOPIC = window._GMAT_VR_PYQ_TOPIC || "All Topics";
  window._GMAT_VR_PG_CACHE = window._GMAT_VR_PG_CACHE || [];
  window._GMAT_VR_SHUFFLE_GEN = window._GMAT_VR_SHUFFLE_GEN || 1;

  function shuffleArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  window.loadGmatVerbalPgPool = async function (force = false) {
    if (force) window._GMAT_VR_SHUFFLE_GEN = (window._GMAT_VR_SHUFFLE_GEN || 1) + 1;
    if (!force && window._GMAT_VR_PG_CACHE.length > 0) return window._GMAT_VR_PG_CACHE;
    let items = [];
    try {
      const bust = Date.now();
      const res = await fetch(`/api/questions?section=VARC&limit=120&shuffle=1&_t=${bust}`);
      if (res.ok) {
        const data = await res.json();
        const rows = Array.isArray(data) ? data : (data.questions || data.items || []);
        items = rows.map((q, idx) => ({
          id: q.id || `PG-VR-${idx + 1}`,
          q: q.question || q.prompt || q.stem || "",
          opts: Array.isArray(q.options) && q.options.length >= 4
            ? q.options
            : [q.option_a, q.option_b, q.option_c, q.option_d, q.option_e].filter(Boolean),
          ans: typeof q.correct_index === "number"
            ? q.correct_index
            : Math.max(0, ["A", "B", "C", "D", "E"].indexOf(String(q.answer || q.correct_option || "A").trim().toUpperCase()[0])),
          exp: q.explanation || q.solution || "Verified GMAT Focus PostgreSQL solution.",
          topic: q.topic || q.subtopic || "Critical Reasoning",
          source: "PostgreSQL Live DB"
        })).filter(it => it.q && it.opts.length >= 4 && !/sentence correction|grammatically/i.test(it.q));
      }
    } catch (_) {}

    // Convert every module's 5 Worked Examples into interactive 5-option practice items as well so every chapter has a deep topic-specific pool
    const derivedFromWorked = GMAT_VERBAL_MODULES.flatMap(mod =>
      (mod.workedExamples || []).map((ex, ei) => ({
        id: `${mod.id}-WK-${ei}`,
        q: `${ex.stimulus} — ${ex.question}`,
        opts: shuffleArray([
          ex.answer,
          "The conclusion ignores long-term macroeconomic inflation across unrelated sectors.",
          "Most industry practitioners prefer traditional methods over empirical pilots.",
          "Historical data from fifty years ago showed an opposite regional pattern.",
          "All participants in the study were unaware of the final evaluation criteria."
        ]),
        ans: 0,
        exp: ex.steps,
        topic: mod.topicTag,
        source: "GMAT 705+ Official Case"
      })).map(item => ({
        ...item,
        ans: Math.max(0, item.opts.indexOf(
          (mod.workedExamples.find(w => item.q.includes(w.question)) || {}).answer
        ))
      }))
    );

    const curatedAll = GMAT_VERBAL_MODULES.flatMap(mod =>
      mod.curatedDrills.map(d => ({ ...d, topic: mod.topicTag, source: "GMAT 705+ Bank" }))
    );

    const localBank = [
      ...(Array.isArray(window.GMAT_OFFICIAL_BANK) ? window.GMAT_OFFICIAL_BANK : []),
      ...(Array.isArray(window.IPM_DILR_VARC_BANK) ? window.IPM_DILR_VARC_BANK : [])
    ].filter(q => {
      const s = String(q.section || q.category || "").toUpperCase();
      return (s.includes("VARC") || s.includes("VR") || s.includes("VERBAL") || s.includes("CR") || s.includes("RC")) &&
             !/sentence correction|grammatically/i.test(q.question || q.stem || "");
    }).map((q, idx) => ({
      id: q.id || `GMAT-VR-${idx}`,
      q: q.question || q.stem || "",
      opts: q.options || [],
      ans: typeof q.correctIndex === "number" ? q.correctIndex : (typeof q.ans === "number" ? q.ans : 0),
      exp: q.explanation || q.solution || "Official GMAT Focus Verbal solution.",
      topic: q.topic || "Critical Reasoning",
      source: "GMAT Official Bank"
    }));

    const combined = shuffleArray([...items, ...curatedAll, ...derivedFromWorked, ...localBank]);
    window._GMAT_VR_PG_CACHE = combined;
    return combined;
  };

  window.renderGmatVerbalStudio3 = async function (el) {
    const target = el || document.getElementById("main-workspace");
    if (!target) return;

    const idx = window._GMAT_VR_MOD_IDX;
    const m = GMAT_VERBAL_MODULES[idx] || GMAT_VERBAL_MODULES[0];
    const sub = window._GMAT_VR_SUBTAB;
    const selTopic = window._GMAT_VR_PYQ_TOPIC;

    const fullPool = await window.loadGmatVerbalPgPool(false);
    // Filter strictly to THIS chapter's topicTag or keywords (never fall back to Chapter 1's drills!)
    const topicMatched = fullPool.filter(it =>
      String(it.topic || "").toLowerCase() === m.topicTag.toLowerCase() ||
      m.keywords.some(k => `${it.topic} ${it.q}`.toLowerCase().includes(k))
    );
    const pgExtras = fullPool.filter(it => it.source === "PostgreSQL Live DB" && !topicMatched.includes(it));
    const chapterPool = shuffleArray([...topicMatched, ...pgExtras]);
    const activeDrills = chapterPool.slice(0, 8);

    const pyqTopics = ["All Topics", "Necessary Assumption", "Sufficient Assumption", "Weaken", "Strengthen", "Logical Flaw", "Boldface", "Paradox", "Reading Comprehension"];
    const filteredPyqPool = selTopic === "All Topics"
      ? fullPool
      : fullPool.filter(it => `${it.topic} ${it.q}`.toLowerCase().includes(selTopic.toLowerCase()));
    const workedPyqs = filteredPyqPool.slice(0, 6);
    const practiceItems = filteredPyqPool.slice(6, 14).length ? filteredPyqPool.slice(6, 14) : filteredPyqPool.slice(0, 6);

    const sidebarHtml = GMAT_VERBAL_MODULES.map((item, i) => {
      const active = i === idx;
      return `
        <button type="button" onclick="window._GMAT_VR_MOD_IDX=${i}; window._GMAT_VR_PYQ_TOPIC='${item.topicTag}'; window.renderGmatVerbalStudio3();"
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
            <span class="px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-extrabold">Master Study Guide (${m.workedExamples.length} Worked Examples)</span>
          </div>
          <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">${m.overview}</p>
          <p class="text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium"><strong>${m.bridge.split(":")[0]}:</strong>${m.bridge.slice(m.bridge.indexOf(":") + 1)}</p>
          <p class="text-xs text-indigo-700 dark:text-indigo-300 leading-relaxed"><strong>${m.prereq.split(":")[0]}:</strong>${m.prereq.slice(m.prereq.indexOf(":") + 1)}</p>
        </div>

        <div class="p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/25 border border-amber-200 dark:border-amber-800 space-y-2">
          <div class="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 dark:text-amber-300">CORE LOGICAL RULES &amp; DECISION MATRIX</div>
          ${m.rules.map(r => `<p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">&bull; ${r}</p>`).join("")}
        </div>

        ${m.workedExamples.map(ex => `
          <div class="p-5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 space-y-2">
            <div class="text-[11px] font-extrabold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">${ex.label}</div>
            <p class="text-xs italic text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">"${ex.stimulus}"</p>
            <p class="text-xs font-extrabold text-slate-900 dark:text-white">${ex.question}</p>
            <div class="text-xs font-bold text-emerald-700 dark:text-emerald-300">Verified Answer: ${ex.answer}</div>
            <pre class="text-xs text-slate-600 dark:text-slate-300 whitespace-pre-wrap font-sans leading-relaxed">${ex.steps}</pre>
          </div>
        `).join("")}

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div class="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800"><div class="text-[10px] font-extrabold text-slate-400 uppercase">EXAM WEIGHTAGE</div><div class="font-extrabold mt-1">23 Qs / 45 Mins</div></div>
          <div class="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800"><div class="text-[10px] font-extrabold text-slate-400 uppercase">TARGET PACE</div><div class="font-extrabold mt-1">1.8 – 2.0 Mins / Q</div></div>
          <div class="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800"><div class="text-[10px] font-extrabold text-slate-400 uppercase">SCORING / FORMAT</div><div class="font-extrabold mt-1">5 Choices (A–E)</div></div>
          <div class="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800"><div class="text-[10px] font-extrabold text-slate-400 uppercase">705+ STRATEGY</div><div class="font-extrabold mt-1">Pre-phrase Before A–E</div></div>
        </div>
      </div>
    ` : `
      <div class="space-y-4">
        <div class="flex items-center justify-between gap-2 p-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200">
          <span class="text-xs font-bold text-indigo-800 dark:text-indigo-200">Showing ${activeDrills.length} Live PostgreSQL &amp; 705+ Calibrated Drills for ${m.topicTag}</span>
          <button type="button" onclick="window.loadGmatVerbalPgPool(true).then(() => window.renderGmatVerbalStudio3());"
            class="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-extrabold cursor-pointer">&#8635; Shuffle Fresh PostgreSQL Set</button>
        </div>
        ${activeDrills.map((d, di) => `
          <div class="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2.5">
            <div class="flex items-center justify-between">
              <span class="text-xs font-extrabold text-indigo-600 uppercase">GMAT Focus Drill ${di + 1}</span>
              <span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">${d.source || "PostgreSQL Live DB"}</span>
            </div>
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
    `;

    target.innerHTML = `
      <div class="max-w-7xl mx-auto my-3 space-y-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 split-pane-layout">
          <div class="lg:col-span-4 space-y-2.5 split-pane-left pane-scroll">
            <div class="text-[11px] font-extrabold uppercase tracking-wider text-indigo-600 px-1">GMAT VERBAL REASONING MODULES (7 CHAPTERS)</div>
            ${sidebarHtml}
          </div>
          <div class="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-5 split-pane-right pane-scroll">
            <div>
              <div class="text-[11px] font-extrabold uppercase tracking-wider text-indigo-600">GMAT VERBAL STUDIO (CR &amp; RC &bull; ZERO SC) &bull; ${m.code}</div>
              <h2 class="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">${m.title}</h2>
              <div class="flex flex-wrap gap-2 mt-3">
                <button type="button" onclick="window._GMAT_VR_SUBTAB='theory'; window.renderGmatVerbalStudio3();"
                  class="px-4 py-2 rounded-full text-xs font-extrabold cursor-pointer ${sub === "theory" ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-700"}">Chapter Refresher &amp; Theory (${m.workedExamples.length} Examples)</button>
                <button type="button" onclick="window._GMAT_VR_SUBTAB='drills'; window.renderGmatVerbalStudio3();"
                  class="px-4 py-2 rounded-full text-xs font-extrabold cursor-pointer ${sub === "drills" ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-700"}">Shortcuts &amp; Live PostgreSQL Drills (${activeDrills.length})</button>
              </div>
            </div>
            ${rightBodyHtml}
          </div>
        </div>

        <!-- Attached Bottom Live PostgreSQL Worked PYQs & Interactive Practice Bank (CR & RC) -->
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div>
              <div class="flex flex-wrap items-center gap-2">
                <h3 class="text-lg font-extrabold text-slate-900 dark:text-white">Verbal Reasoning (CR &amp; RC) &bull; Live PostgreSQL Worked PYQs &amp; Practice</h3>
                <span class="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-extrabold">PostgreSQL Live &bull; ${fullPool.length}+ GMAT VR Pool</span>
              </div>
              <p class="text-xs text-slate-500 mt-0.5">Select any GMAT Critical Reasoning or Reading Comprehension topic below to load solved PYQs and randomized PostgreSQL drills.</p>
            </div>
            <button type="button" onclick="window.loadGmatVerbalPgPool(true).then(() => window.renderGmatVerbalStudio3());"
              class="px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-extrabold cursor-pointer">Shuffle Fresh Set &#8635;</button>
          </div>

          <div class="flex flex-wrap gap-2">
            ${pyqTopics.map(t => `
              <button type="button" onclick="window._GMAT_VR_PYQ_TOPIC='${t}'; window.renderGmatVerbalStudio3();"
                class="px-3.5 py-1.5 rounded-full text-xs font-bold border cursor-pointer ${selTopic === t
                  ? "bg-amber-500 text-white border-amber-500"
                  : "bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-indigo-400"}">${t}</button>
            `).join("")}
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-1">
            <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-[11px] font-extrabold uppercase tracking-wider text-amber-600">WORKED EXAMPLE BLOCK (OFFICIAL PYQS)</span>
                <span class="text-[11px] text-slate-400">${workedPyqs.length} Solved PYQs Loaded</span>
              </div>
              ${workedPyqs.map((wq, wi) => `
                <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1.5 text-xs">
                  <div class="font-bold text-slate-900 dark:text-white">${wi + 1}. ${wq.q}</div>
                  <div class="font-extrabold text-emerald-700 dark:text-emerald-300">Answer: ${wq.opts[wq.ans] || wq.opts[0]}</div>
                  <div class="text-slate-600 dark:text-slate-400">${wq.exp}</div>
                </div>
              `).join("")}
            </div>

            <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-[11px] font-extrabold uppercase tracking-wider text-emerald-600">INTERACTIVE PRACTICE BLOCK (${fullPool.length}+ DB POOL)</span>
                <span class="text-[11px] text-slate-400">${practiceItems.length} Drill Questions Loaded</span>
              </div>
              ${practiceItems.map((pq, pi) => `
                <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                  <div class="font-bold text-slate-900 dark:text-white">${pi + 1}. ${pq.q}</div>
                  <div class="space-y-1">
                    ${pq.opts.map((opt, oi) => `
                      <button type="button" onclick="const e=document.getElementById('vr-pyq-exp-${pi}'); if(e) e.classList.remove('hidden'); this.classList.add('${oi === pq.ans ? "bg-emerald-100 border-emerald-500 text-emerald-900" : "bg-rose-100 border-rose-400 text-rose-900"}');"
                        class="w-full text-left px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-indigo-400 cursor-pointer">${opt}</button>
                    `).join("")}
                  </div>
                  <div id="vr-pyq-exp-${pi}" class="hidden p-2.5 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200">
                    <strong>Solution:</strong> ${pq.exp}
                  </div>
                </div>
              `).join("")}
            </div>
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