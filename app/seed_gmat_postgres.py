import json
from sqlalchemy import text

GMAT_FOCUS_QUESTIONS = [
    # --- QUANTITATIVE REASONING (PROBLEM SOLVING ONLY - ZERO GEOMETRY) ---
    {
        "q_code": "GMAT-QR-ALG-001",
        "source_tag": "GMAT_FOCUS_OFFICIAL",
        "section": "QUANT_CORE",
        "topic": "Quant • Rates, Work & Linear Elimination",
        "exam_tags": "GMAT_FOCUS",
        "q_type": "MCQ",
        "difficulty": "715–765 Band",
        "prompt": "Machine X and Machine Y, working simultaneously at their respective constant rates, complete a production batch in 6 hours. If Machine X's rate were doubled and Machine Y's rate were halved, the two machines working together would complete the same batch in 4 hours. How many hours would it take Machine X alone, working at its original constant rate, to complete the batch?",
        "options": ["8 hours", "9 hours", "10 hours", "12 hours", "15 hours"],
        "answer": "1",
        "explanation": "Let x and y be hourly rates: x + y = 1/6 and 2x + 0.5y = 1/4 => 4x + y = 1/2. Subtracting (x + y = 1/6) gives 3x = 1/3 => x = 1/9 batch/hr => 9 hours alone.",
        "is_pyq": False, "pyq_year": "2026", "pyq_exam": "GMAT Focus"
    },
    {
        "q_code": "GMAT-QR-ALG-002",
        "source_tag": "GMAT_FOCUS_OFFICIAL",
        "section": "QUANT_CORE",
        "topic": "Quant • Mixtures & Weighted Averages",
        "exam_tags": "GMAT_FOCUS",
        "q_type": "MCQ",
        "difficulty": "685–725 Band",
        "prompt": "A 40-liter chemical solution is 25% ethanol by volume. How many liters of pure ethanol must be added to this solution to raise the ethanol concentration to 40%?",
        "options": ["8 liters", "10 liters", "12 liters", "15 liters", "16 liters"],
        "answer": "1",
        "explanation": "Non-ethanol water remains constant at 75% of 40L = 30L. At 40% ethanol, water is 60% of final volume: 0.60 * V_final = 30 => V_final = 50L => 10L added.",
        "is_pyq": False, "pyq_year": "2026", "pyq_exam": "GMAT Focus"
    },
    {
        "q_code": "GMAT-QR-COMB-001",
        "source_tag": "GMAT_FOCUS_OFFICIAL",
        "section": "QUANT_CORE",
        "topic": "Quant • Combinatorics & Counting",
        "exam_tags": "GMAT_FOCUS",
        "q_type": "MCQ",
        "difficulty": "725–785 Band",
        "prompt": "A task force of 4 analysts is to be selected from 5 senior analysts and 4 junior analysts. If the task force must include at least 2 senior analysts and at least 1 junior analyst, how many distinct task forces can be formed?",
        "options": ["80", "95", "100", "105", "120"],
        "answer": "2",
        "explanation": "Disjoint valid cases: (2S, 2J) = C(5,2)*C(4,2) = 10*6 = 60, plus (3S, 1J) = C(5,3)*C(4,1) = 10*4 = 40. Total = 100.",
        "is_pyq": False, "pyq_year": "2026", "pyq_exam": "GMAT Focus"
    },
    {
        "q_code": "GMAT-QR-NUM-001",
        "source_tag": "GMAT_FOCUS_OFFICIAL",
        "section": "QUANT_CORE",
        "topic": "Quant • Number Properties & Factorials",
        "exam_tags": "GMAT_FOCUS",
        "q_type": "MCQ",
        "difficulty": "715–765 Band",
        "prompt": "What is the greatest integer k such that 3^k is a factor of 30!?",
        "options": ["12", "13", "14", "15", "16"],
        "answer": "2",
        "explanation": "Legendre's formula: floor(30/3) + floor(30/9) + floor(30/27) = 10 + 3 + 1 = 14.",
        "is_pyq": False, "pyq_year": "2026", "pyq_exam": "GMAT Focus"
    },

    # --- VERBAL REASONING (CRITICAL REASONING & READING COMPREHENSION ONLY) ---
    {
        "q_code": "GMAT-VR-CR-001",
        "source_tag": "GMAT_FOCUS_OFFICIAL",
        "section": "VARC",
        "topic": "Verbal • Critical Reasoning (Weaken)",
        "exam_tags": "GMAT_FOCUS",
        "q_type": "MCQ",
        "difficulty": "705–755 Band",
        "prompt": "Last year, Veloce Motors introduced an AI-assisted quality inspection system on its main assembly line, reducing visible paint defects by 42%. Over the same twelve-month period, warranty claims filed by dealerships for electrical faults on vehicles from that assembly line declined by 35%. Veloce's VP of Manufacturing concluded that the AI visual inspection system also substantially improved the factory's electrical assembly quality.\n\nWhich of the following, if true, most seriously weakens the VP's conclusion?",
        "options": [
          "Dealerships typically require three to six months after a vehicle's manufacture date to process electrical warranty claims.",
          "Six months before installing the AI system, Veloce replaced its primary wiring-harness supplier after persistent soldering failures were traced to that vendor.",
          "Other automotive manufacturers that adopted similar AI paint-inspection systems reported no reduction in engine-block defects.",
          "The AI system flags surface blemishes using high-intensity cameras that cannot penetrate interior door panels.",
          "Total vehicle production volume on Veloce's main assembly line increased by 8% during the twelve-month period."
        ],
        "answer": "1",
        "explanation": "Alternative Cause (B): Replacing the defective wiring-harness vendor six months earlier explains the 35% drop in electrical warranty claims independently of the AI system.",
        "is_pyq": False, "pyq_year": "2026", "pyq_exam": "GMAT Focus"
    },
    {
        "q_code": "GMAT-VR-CR-002",
        "source_tag": "GMAT_FOCUS_OFFICIAL",
        "section": "VARC",
        "topic": "Verbal • Critical Reasoning (Necessary Assumption)",
        "exam_tags": "GMAT_FOCUS",
        "q_type": "MCQ",
        "difficulty": "725–785 Band",
        "prompt": "A municipal transit study found that commuters who switched from driving solo to taking express commuter rail reported 28% lower daily stress levels after three months. Because lowering commuter stress improves workplace productivity, the city council argues that subsidizing express rail fares will generate net economic gains through higher regional worker output.\n\nThe city council's argument depends on which of the following assumptions?",
        "options": [
          "Commuters who already ride express rail experience lower stress than those who ride local municipal buses.",
          "The commuters who would be induced to switch to express rail by a fare subsidy would experience stress reductions comparable to those observed in the study.",
          "Workplace productivity gains from reduced stress are greater than gains from flexible remote-work policies.",
          "Express rail trains currently operate below maximum passenger capacity during peak morning rush hours.",
          "Solo drivers are primarily motivated by travel speed rather than out-of-pocket commuting cost."
        ],
        "answer": "1",
        "explanation": "Generalization Assumption (B): The study examined voluntary switchers; the council assumes subsidy-induced switchers will experience comparable stress drops.",
        "is_pyq": False, "pyq_year": "2026", "pyq_exam": "GMAT Focus"
    },

    # --- DATA INSIGHTS (DATA SUFFICIENCY & MULTI-SOURCE ANALYSIS) ---
    {
        "q_code": "GMAT-DI-DS-001",
        "source_tag": "GMAT_FOCUS_OFFICIAL",
        "section": "DILR",
        "topic": "Data Insights • Data Sufficiency (Word Problem)",
        "exam_tags": "GMAT_FOCUS",
        "q_type": "MCQ",
        "difficulty": "715–775 Band",
        "prompt": "A logistics firm shipped 120 crates, each weighing either 25 kg or 40 kg. Was the total weight of the 120 crates greater than 3,750 kg?\n\n(1) More than 52 of the crates weighed 40 kg each.\n(2) Fewer than 68 of the crates weighed 25 kg each.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "3",
        "explanation": "Let x = number of 40 kg crates. Total weight = 3000 + 15x > 3750 <=> x > 50. (1) x > 52 (Sufficient). (2) 120 - x < 68 <=> x > 52 (Sufficient). Thus EACH statement alone is sufficient -> (D).",
        "is_pyq": False, "pyq_year": "2026", "pyq_exam": "GMAT Focus"
    },
    {
        "q_code": "GMAT-DI-DS-002",
        "source_tag": "GMAT_FOCUS_OFFICIAL",
        "section": "DILR",
        "topic": "Data Insights • Data Sufficiency (Number Properties)",
        "exam_tags": "GMAT_FOCUS",
        "q_type": "MCQ",
        "difficulty": "735–795 Band",
        "prompt": "If m and n are positive integers, is m^n + n^m an even integer?\n\n(1) m + n is an even integer.\n(2) m * n is an odd integer.",
        "options": [
          "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
          "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
          "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.",
          "EACH statement ALONE is sufficient.",
          "Statements (1) and (2) TOGETHER are NOT sufficient."
        ],
        "answer": "3",
        "explanation": "(1) m + n even => same parity => even + even = even or odd + odd = even (Sufficient). (2) m * n odd => both odd => odd + odd = even (Sufficient). Choose (D).",
        "is_pyq": False, "pyq_year": "2026", "pyq_exam": "GMAT Focus"
    }
]

def seed_gmat_focus_postgres(engine):
    with engine.begin() as conn:
        conn.execute(text("DELETE FROM ipm_questions WHERE exam_tags NOT LIKE '%GMAT_FOCUS%'"))
        upsert_sql = text("""
            INSERT INTO ipm_questions
              (q_code, source_tag, section, topic, exam_tags, q_type, difficulty, prompt, options_json, answer, explanation, is_pyq, pyq_year, pyq_exam)
            VALUES
              (:q_code, :source_tag, :section, :topic, :exam_tags, :q_type, :difficulty, :prompt, :options_json, :answer, :explanation, :is_pyq, :pyq_year, :pyq_exam)
            ON CONFLICT (q_code) DO UPDATE SET
              section = EXCLUDED.section,
              topic = EXCLUDED.topic,
              exam_tags = EXCLUDED.exam_tags,
              q_type = EXCLUDED.q_type,
              difficulty = EXCLUDED.difficulty,
              prompt = EXCLUDED.prompt,
              options_json = EXCLUDED.options_json,
              answer = EXCLUDED.answer,
              explanation = EXCLUDED.explanation,
              is_pyq = EXCLUDED.is_pyq,
              pyq_year = EXCLUDED.pyq_year,
              pyq_exam = EXCLUDED.pyq_exam
        """)
        for q in GMAT_FOCUS_QUESTIONS:
            conn.execute(upsert_sql, {
                "q_code": q["q_code"],
                "source_tag": q["source_tag"],
                "section": q["section"],
                "topic": q["topic"],
                "exam_tags": q["exam_tags"],
                "q_type": q["q_type"],
                "difficulty": q["difficulty"],
                "prompt": q["prompt"],
                "options_json": json.dumps(q["options"]),
                "answer": str(q["answer"]),
                "explanation": q["explanation"],
                "is_pyq": bool(q["is_pyq"]),
                "pyq_year": q["pyq_year"],
                "pyq_exam": q["pyq_exam"],
            })