window.GMAT_ADMIT_STATE = window.GMAT_ADMIT_STATE || {
  qr: 85, vr: 84, di: 83,
  ugCgpa10: 9.10, ugGpa: 3.64, workExYears: 4.0,
  track: "MBA", leadershipTier: "STRONG",
  lastMockSummary: "Ready — Click Correlate Latest Mock or Adjust Sliders"
};

window.calcGmatFocusTotal = function () {
  const s = window.GMAT_ADMIT_STATE;
  const sumSec = Number(s.qr) + Number(s.vr) + Number(s.di);
  const raw205 = Math.round(205 + ((sumSec - 180) / 90) * 600);
  return Math.min(805, Math.max(205, Math.round(raw205 / 10) * 10 + 5));
};

window.syncGmatFromLatestMock = function () {
  let hist = [];
  try { hist = JSON.parse(localStorage.getItem("ipm_mock_history_v1") || "[]"); } catch (e) {}
  if (!hist.length) {
    alert("Complete and submit a GMAT Focus Mock in Tab 4 first to correlate your score.");
    return;
  }
  const latest = hist[0];
  const ratio = Math.max(0, Math.min(1, Number(latest.score || 0) / Math.max(1, Number(latest.maxScore || 64))));
  const secVal = Math.min(90, Math.max(60, Math.round(60 + ratio * 30)));
  window.GMAT_ADMIT_STATE.qr = secVal;
  window.GMAT_ADMIT_STATE.vr = secVal;
  window.GMAT_ADMIT_STATE.di = Math.max(60, secVal - 1);
  window.GMAT_ADMIT_STATE.lastMockSummary = `Synced from Mock (${latest.score}/${latest.maxScore}) → Est. ${window.calcGmatFocusTotal()}/805`;
  window.renderActiveTab();
};

window.updateGmatAdmitField = function (field, val) {
  window.GMAT_ADMIT_STATE[field] = (field === "track" || field === "leadershipTier") ? String(val) : Number(val);
  if (field === "ugCgpa10") window.GMAT_ADMIT_STATE.ugGpa = Number(((window.GMAT_ADMIT_STATE.ugCgpa10 / 10) * 4.0).toFixed(2));
  window.renderActiveTab();
};

window.renderTab6 = function (el) {
  const s = window.GMAT_ADMIT_STATE;
  const totalScore = window.calcGmatFocusTotal();
  const leadBonus = s.leadershipTier === "EXCEPTIONAL" ? 20 : (s.leadershipTier === "STRONG" ? 10 : 0);
  const gpaBonus = (s.ugGpa - 3.3) * 35;
  const wxFit = s.track === "MIM" ? (s.workExYears <= 2 ? 15 : -10) : (s.workExYears >= 3 && s.workExYears <= 7 ? 15 : 5);
  const effectiveIndex = totalScore + leadBonus + gpaBonus + wxFit;

  const schools = [
    { name: "Wharton (UPenn) — MBA", median: 732, minDiQr: 82, fee: "$174K • Median Comp $215K", scholCut: 745 },
    { name: "INSEAD — 1-Year Global MBA", median: 705, minDiQr: 80, fee: "€103K • Global Consulting Leader", scholCut: 725 },
    { name: "London Business School (LBS) — MBA", median: 705, minDiQr: 80, fee: "£115K • London Finance/Strategy", scholCut: 725 },
    { name: "ISB Hyderabad/Mohali — PGP", median: 715, minDiQr: 81, fee: "₹42L • Avg CTC ₹36.2L (1-Yr PGP)", scholCut: 735 },
    { name: "Northwestern Kellogg — 2Y / 1Y MBA", median: 725, minDiQr: 81, fee: "$168K • PM & Strategy Powerhouse", scholCut: 745 },
    { name: "Chicago Booth — MBA", median: 728, minDiQr: 83, fee: "$170K • Quant Finance & PE", scholCut: 745 },
    { name: "HEC Paris — MBA / MiM", median: 695, minDiQr: 79, fee: "€98K • European Luxury & Strategy", scholCut: 715 },
    { name: "NUS Singapore — MBA", median: 675, minDiQr: 78, fee: "SGD 95K • APAC Tech & Finance", scholCut: 705 }
  ];

  const rowsHtml = schools.map(sc => {
    const quantWeak = s.qr < sc.minDiQr || s.di < sc.minDiQr;
    const diff = effectiveIndex - sc.median;
    const verdict = quantWeak
      ? `<span class="px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 text-[11px] font-bold">QR/DI Quant Rigor Flag (&lt;${sc.minDiQr})</span>`
      : (diff >= 15
          ? `<span class="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold">Strong Admit + Merit Scholarship</span>`
          : (diff >= -10
              ? `<span class="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-bold">Competitive Target (Essays/LOR Key)</span>`
              : `<span class="px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 text-[11px] font-bold">Reach (+${Math.ceil(sc.median - effectiveIndex)} GMAT pts)</span>`));
    const schol = totalScore >= sc.scholCut ? "High (25%–50% Fellowship)" : (totalScore >= sc.median ? "Moderate (10%–25%)" : "Low");
    return `
      <tr class="border-b border-slate-800/80 hover:bg-slate-950/60">
        <td class="py-3 px-3.5"><div class="font-bold text-white">${sc.name}</div><div class="text-[11px] text-emerald-400 font-semibold">${sc.fee}</div></td>
        <td class="py-3 px-3 font-mono text-xs text-slate-300">${sc.median} Focus (QR/DI &ge;${sc.minDiQr})</td>
        <td class="py-3 px-3 text-xs text-indigo-300 font-semibold">${schol}</td>
        <td class="py-3 px-3">${verdict}</td>
      </tr>
    `;
  }).join("");

  el.innerHTML = `
    <div class="max-w-6xl mx-auto my-4 space-y-5">
      <div class="bg-slate-900/95 border border-slate-800 rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4 shadow-xl">
        <div>
          <span class="text-[10px] px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-bold uppercase">Global Postgraduate Business School Admissions Engine</span>
          <h2 class="text-xl font-extrabold text-white mt-1">M7, INSEAD, LBS, ISB &amp; HEC Global MBA / MiM Admit &amp; Scholarship Predictor</h2>
          <p class="text-xs text-slate-400">Correlates your Tab 4 Mock score &amp; Official GMAT Focus (205–805) with Undergrad CGPA (/10 &rarr; 4.0 GPA) and Post-Grad Experience.</p>
          <div class="text-[11px] text-emerald-300 font-semibold mt-1">Mock Correlation Status: ${s.lastMockSummary}</div>
        </div>
        <button type="button" onclick="window.syncGmatFromLatestMock()" class="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold shadow cursor-pointer">&#8635; Correlate Latest Tab 4 Mock</button>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div class="bg-slate-900/95 border border-slate-800 rounded-2xl p-4 space-y-3">
          <div class="text-xs font-bold uppercase text-indigo-300">1. Official / Projected GMAT Focus (60–90)</div>
          <div><div class="flex justify-between text-xs text-slate-300"><span>Quantitative Reasoning (QR)</span><strong>${s.qr} / 90</strong></div><input type="range" min="60" max="90" value="${s.qr}" oninput="window.updateGmatAdmitField('qr', this.value)" class="w-full accent-indigo-500"></div>
          <div><div class="flex justify-between text-xs text-slate-300"><span>Verbal Reasoning (VR)</span><strong>${s.vr} / 90</strong></div><input type="range" min="60" max="90" value="${s.vr}" oninput="window.updateGmatAdmitField('vr', this.value)" class="w-full accent-indigo-500"></div>
          <div><div class="flex justify-between text-xs text-slate-300"><span>Data Insights (DI)</span><strong>${s.di} / 90</strong></div><input type="range" min="60" max="90" value="${s.di}" oninput="window.updateGmatAdmitField('di', this.value)" class="w-full accent-indigo-500"></div>
          <div class="p-2.5 rounded-xl bg-slate-950 border border-indigo-500/30 flex justify-between text-xs"><span class="text-slate-300">GMAT Focus Total:</span><strong class="text-base text-emerald-300">${totalScore} / 805</strong></div>
        </div>
        <div class="bg-slate-900/95 border border-slate-800 rounded-2xl p-4 space-y-3">
          <div class="text-xs font-bold uppercase text-indigo-300">2. Undergrad CGPA (/10 &rarr; 4.0 GPA) &amp; Experience</div>
          <div><div class="flex justify-between text-xs text-slate-300"><span>Undergrad CGPA (10-Pt Scale)</span><strong>${s.ugCgpa10.toFixed(2)} / 10 &rarr; ${s.ugGpa.toFixed(2)} / 4.0 GPA</strong></div><input type="range" min="5.5" max="10.0" step="0.05" value="${s.ugCgpa10}" oninput="window.updateGmatAdmitField('ugCgpa10', this.value)" class="w-full accent-indigo-500"></div>
          <div><div class="flex justify-between text-xs text-slate-300"><span>Full-Time Work Experience</span><strong>${s.workExYears.toFixed(1)} Years</strong></div><input type="range" min="0" max="10" step="0.5" value="${s.workExYears}" oninput="window.updateGmatAdmitField('workExYears', this.value)" class="w-full accent-indigo-500"></div>
        </div>
        <div class="bg-slate-900/95 border border-slate-800 rounded-2xl p-4 space-y-3">
          <div class="text-xs font-bold uppercase text-indigo-300">3. Target Postgraduate Degree &amp; Leadership</div>
          <select onchange="window.updateGmatAdmitField('track', this.value)" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-semibold">
            <option value="MBA" ${s.track==="MBA"?"selected":""}>Full-Time MBA / ISB PGP (2–7 Yrs Work-Ex)</option>
            <option value="MIM" ${s.track==="MIM"?"selected":""}>Master in Management (MiM • 0–2 Yrs Work-Ex)</option>
            <option value="EMBA" ${s.track==="EMBA"?"selected":""}>Executive MBA (7+ Yrs Leadership)</option>
          </select>
          <select onchange="window.updateGmatAdmitField('leadershipTier', this.value)" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-semibold">
            <option value="EXCEPTIONAL" ${s.leadershipTier==="EXCEPTIONAL"?"selected":""}>Fast-Track Promotions + International / P&amp;L Impact</option>
            <option value="STRONG" ${s.leadershipTier==="STRONG"?"selected":""}>Solid Analytical / Team Progression</option>
            <option value="STANDARD" ${s.leadershipTier==="STANDARD"?"selected":""}>Early-Career / Individual Contributor</option>
          </select>
        </div>
      </div>
      <div class="bg-slate-900/95 border border-slate-800 rounded-2xl p-4 overflow-x-auto shadow-xl">
        <table class="w-full text-left text-xs border-collapse">
          <thead><tr class="border-b border-slate-800 text-[11px] uppercase text-slate-400"><th class="py-2.5 px-3.5">Global B-School &amp; Tuition / Comp</th><th class="py-2.5 px-3">Median GMAT &amp; Quant Floor</th><th class="py-2.5 px-3">Merit Scholarship Odds</th><th class="py-2.5 px-3">Admit Strategy Verdict</th></tr></thead>
          <tbody>${rowsHtml}</tbody>
        </table>
      </div>
    </div>
  `;
};
// ==============================================================================
// POSTGRADUATE AUTH GATE RESCUE: 1ST LOGIN/REGISTER SCREEN + LOGOUT + HEADER SYNC
// ==============================================================================
(function initPostgradAuthGate() {
  const host = window.location.host.toLowerCase();
  const exam = host.includes("gmat") ? "GMAT" : (host.includes("gre") ? "GRE" : "CAT");
  const defaultCgpa = exam === "GRE" ? "9.25" : (exam === "GMAT" ? "9.10" : "8.70");
  const defaultWx   = exam === "GMAT" ? "48" : "24";

  function getActiveUser() {
    try {
      const raw = localStorage.getItem("ipm_user") || localStorage.getItem("goalisb_user");
      if (!raw) return null;
      const u = JSON.parse(raw);
      return (u && u.name) ? u : null;
    } catch (e) { return null; }
  }

  window.handlePostgradLogout = function () {
    localStorage.removeItem("ipm_user");
    localStorage.removeItem("goalisb_user");
    localStorage.removeItem("ipm_token");
    window.IPM_USER = null;
    window.location.reload();
  };

  window.openPostgradAuthGate = function (defaultMode) {
    let gate = document.getElementById("pg-auth-gate-overlay");
    if (!gate) {
      gate = document.createElement("div");
      gate.id = "pg-auth-gate-overlay";
      gate.className = "fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4 overflow-y-auto";
      document.body.appendChild(gate);
    }
    const mode = defaultMode || "REGISTER";
    const examTitle = exam === "GRE" ? "GRE General (260–340 + AWA)" : (exam === "GMAT" ? "GMAT Focus (205–805)" : "CAT 2026 & OMETs (IIM/FMS/XLRI)");
    const secLabel  = exam === "CAT" ? "Class 12 Board % (IIM AR Weight)" : "Work Experience (Months)";
    const secDefault = exam === "CAT" ? "90" : defaultWx;

    gate.innerHTML = `
      <div class="max-w-4xl w-full bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 border border-slate-200 dark:border-slate-800">
        <div class="md:col-span-5 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-7 flex flex-col justify-between">
          <div class="space-y-4">
            <span class="text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">${examTitle}</span>
            <h2 class="text-2xl font-extrabold leading-tight">GOALisB ${exam} Postgraduate Master Engine</h2>
            <p class="text-xs text-slate-300 leading-relaxed">Calibrated for MBA, PGP, MiM, MS &amp; PhD Admissions with 260+ PostgreSQL Questions &amp; Diagnostic Scorecards.</p>
            <ul class="space-y-2.5 text-xs text-slate-200 pt-2">
              <li>&#9745; <strong>260+ Postgraduate Questions:</strong> Official PYQs &amp; Chapter Drills</li>
              <li>&#9745; <strong>18 Interactive Trap Clinics:</strong> Adaptive &amp; Negative-Marking Defense</li>
              <li>&#9745; <strong>Admissions &amp; ROI Predictor:</strong> Live Mock-to-Official Score Sync</li>
            </ul>
          </div>
          <div class="text-[11px] text-slate-400 pt-6 border-t border-slate-800">Neon PostgreSQL Encrypted Student Portal</div>
        </div>

        <div class="md:col-span-7 p-7 space-y-4 text-slate-900 dark:text-slate-100">
          <div class="flex gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <button type="button" onclick="window.openPostgradAuthGate('LOGIN')" class="flex-1 py-2 rounded-xl text-xs font-bold ${mode==='LOGIN' ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'} cursor-pointer">Student Login</button>
            <button type="button" onclick="window.openPostgradAuthGate('REGISTER')" class="flex-1 py-2 rounded-xl text-xs font-bold ${mode==='REGISTER' ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'} cursor-pointer">Fresh Registration (Free Demo)</button>
          </div>

          ${mode === "LOGIN" ? `
            <div class="space-y-3">
              <h3 class="text-lg font-extrabold">Welcome Back, Aspirant</h3>
              <label class="block text-xs"><span class="font-semibold text-slate-500">Registered Email or Mobile</span>
                <input id="pg-login-email" type="text" value="dina.shah@goalisb.com" class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-xs font-semibold">
              </label>
              <label class="block text-xs"><span class="font-semibold text-slate-500">Password</span>
                <input id="pg-login-pass" type="password" value="demo1234" class="mt-1 w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-xs">
              </label>
              <button type="button" onclick="window.completePostgradAuth('LOGIN')" class="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-extrabold shadow-lg cursor-pointer">Enter Postgraduate Master Engine &rarr;</button>
            </div>
          ` : `
            <div class="space-y-3">
              <h3 class="text-lg font-extrabold">Create Postgraduate Account (Free Demo)</h3>
              <label class="block text-xs"><span class="font-semibold text-slate-500">Candidate Full Name</span>
                <input id="pg-reg-name" type="text" placeholder="e.g. Dina Shah" value="Dina Shah" class="mt-1 w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-xs font-semibold">
              </label>
              <div class="grid grid-cols-2 gap-3">
                <label class="block text-xs"><span class="font-semibold text-indigo-500">Undergrad CGPA (10-Pt Scale)</span>
                  <input id="pg-reg-cgpa" type="number" step="0.05" min="4" max="10" value="${defaultCgpa}" class="mt-1 w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-xs font-bold">
                </label>
                <label class="block text-xs"><span class="font-semibold text-indigo-500">${secLabel}</span>
                  <input id="pg-reg-sec" type="number" min="0" max="120" value="${secDefault}" class="mt-1 w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-xs font-bold">
                </label>
              </div>
              <div class="grid grid-cols-2 gap-3">
                <label class="block text-xs"><span class="font-semibold text-slate-500">Mobile Number</span>
                  <input id="pg-reg-phone" type="text" placeholder="+91 9876543210" class="mt-1 w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-xs">
                </label>
                <label class="block text-xs"><span class="font-semibold text-slate-500">Email Address</span>
                  <input id="pg-reg-email" type="email" placeholder="aspirant@example.com" class="mt-1 w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-xs">
                </label>
              </div>
              <button type="button" onclick="window.completePostgradAuth('REGISTER')" class="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-extrabold shadow-lg cursor-pointer">Activate Free Demo &amp; Sync Profile &rarr;</button>
            </div>
          `}
        </div>
      </div>
    `;
  };

  window.completePostgradAuth = function (mode) {
    const existing = getActiveUser() || {};
    const nameEl = document.getElementById("pg-reg-name");
    const cgpaEl = document.getElementById("pg-reg-cgpa");
    const secEl  = document.getElementById("pg-reg-sec");

    const name = (nameEl && nameEl.value.trim()) || existing.name || "Dina Shah";
    const cgpa = Number((cgpaEl && cgpaEl.value) || existing.ugCgpa10 || defaultCgpa);
    const sec  = Number((secEl && secEl.value) || (exam === "CAT" ? 90 : defaultWx));

    const profile = {
      name,
      tier: "FREE_DEMO",
      ugCgpa10: cgpa,
      ugGpa4: Number(((cgpa / 10) * 4.0).toFixed(2)),
      ugPct: Number(Math.min(100, (cgpa - 0.5) * 10).toFixed(1)),
      classXII: exam === "CAT" ? sec : 90,
      workExMonths: exam === "CAT" ? 24 : sec
    };

    localStorage.setItem("ipm_user", JSON.stringify(profile));
    localStorage.setItem("goalisb_postgrad_profile_v1", JSON.stringify(profile));
    window.IPM_USER = profile;

    const gate = document.getElementById("pg-auth-gate-overlay");
    if (gate) gate.remove();
    if (typeof window.savePostgradProfile === "function") window.savePostgradProfile(profile);
    window.location.reload();
  };

  // Bind top-right 'Free Demo Login / 2-Step Register' button & show Logout button when logged in
  setInterval(() => {
    const user = getActiveUser();
    document.querySelectorAll("button").forEach(btn => {
      const txt = (btn.textContent || "").trim();
      if (/Free Demo Login|2-Step Register/i.test(txt)) {
        if (user) {
          btn.textContent = "Logout";
          btn.className = "px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold cursor-pointer";
          btn.onclick = window.handlePostgradLogout;
        } else {
          btn.onclick = () => window.openPostgradAuthGate("REGISTER");
        }
      } else if (/^Logout$/i.test(txt)) {
        btn.onclick = window.handlePostgradLogout;
      }
    });

    // Show 1st Login/Register gate automatically if no user is signed in
    if (!user && !document.getElementById("pg-auth-gate-overlay")) {
      window.openPostgradAuthGate("REGISTER");
    }
  }, 350);
})();