window.GMAT_ADMIT_STATE = window.GMAT_ADMIT_STATE || {
  qr: 85, vr: 84, di: 83,
  ugCgpa10: 9.1, ugGpa: 3.64, workExYears: 4.0,
  track: "MBA", leadershipTier: "STRONG"
};

window.calcGmatFocusTotal = function () {
  const s = window.GMAT_ADMIT_STATE;
  const sumSec = Number(s.qr) + Number(s.vr) + Number(s.di);
  const raw205 = Math.round(205 + ((sumSec - 180) / 90) * 600);
  return Math.min(805, Math.max(205, Math.round(raw205 / 10) * 10 + 5));
};

window.updateGmatAdmitField = function (field, val) {
  window.GMAT_ADMIT_STATE[field] = (field === "track" || field === "leadershipTier") ? String(val) : Number(val);
  if (field === "ugCgpa10") { window.GMAT_ADMIT_STATE.ugGpa = Number(((window.GMAT_ADMIT_STATE.ugCgpa10 / 10) * 4.0).toFixed(2)); }
  if (field === "ugGpa") { window.GMAT_ADMIT_STATE.ugCgpa10 = Number(((window.GMAT_ADMIT_STATE.ugGpa / 4.0) * 10).toFixed(1)); }
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
      <div class="bg-slate-900/95 border border-slate-800 rounded-2xl p-5 shadow-xl">
        <span class="text-[10px] px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-bold uppercase">Global Postgraduate Business School Admissions Engine</span>
        <h2 class="text-xl font-extrabold text-white mt-1">M7, INSEAD, LBS, ISB &amp; HEC Global MBA / MiM Admit &amp; Scholarship Predictor</h2>
        <p class="text-xs text-slate-400">Calibrated to the 205–805 GMAT Focus Edition scale, Undergraduate GPA (4.0), Post-Grad Work Experience, and Quant/Data Insights rigor thresholds.</p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div class="bg-slate-900/95 border border-slate-800 rounded-2xl p-4 space-y-3">
          <div class="text-xs font-bold uppercase text-indigo-300">1. GMAT Focus Sectional Scores (60–90)</div>
          <div><div class="flex justify-between text-xs text-slate-300"><span>Quantitative Reasoning (QR)</span><strong>${s.qr} / 90</strong></div><input type="range" min="60" max="90" value="${s.qr}" oninput="window.updateGmatAdmitField('qr', this.value)" class="w-full accent-indigo-500"></div>
          <div><div class="flex justify-between text-xs text-slate-300"><span>Verbal Reasoning (VR)</span><strong>${s.vr} / 90</strong></div><input type="range" min="60" max="90" value="${s.vr}" oninput="window.updateGmatAdmitField('vr', this.value)" class="w-full accent-indigo-500"></div>
          <div><div class="flex justify-between text-xs text-slate-300"><span>Data Insights (DI)</span><strong>${s.di} / 90</strong></div><input type="range" min="60" max="90" value="${s.di}" oninput="window.updateGmatAdmitField('di', this.value)" class="w-full accent-indigo-500"></div>
          <div class="p-2.5 rounded-xl bg-slate-950 border border-indigo-500/30 flex justify-between text-xs"><span class="text-slate-300">GMAT Focus Total:</span><strong class="text-base text-emerald-300">${totalScore} / 805</strong></div>
        </div>
        <div class="bg-slate-900/95 border border-slate-800 rounded-2xl p-4 space-y-3">
          <div class="text-xs font-bold uppercase text-indigo-300">2. Undergraduate GPA &amp; Post-Grad Experience</div>
          <div><div class="flex justify-between text-xs text-slate-300"><span>Undergrad CGPA (10-Pt Scale)</span><strong>${(s.ugCgpa10 || 9.1).toFixed(1)} / 10 &rarr; ${s.ugGpa.toFixed(2)} / 4.0 GPA</strong></div><input type="range" min="5.5" max="10.0" step="0.1" value="${s.ugCgpa10 || 9.1}" oninput="window.updateGmatAdmitField('ugCgpa10', this.value)" class="w-full accent-indigo-500"></div>
          <div><div class="flex justify-between text-xs text-slate-300"><span>Full-Time Work Experience</span><strong>${s.workExYears.toFixed(1)} Years</strong></div><input type="range" min="0" max="10" step="0.5" value="${s.workExYears}" oninput="window.updateGmatAdmitField('workExYears', this.value)" class="w-full accent-indigo-500"></div>
          <div class="text-[11px] text-slate-400">Global AdComs evaluate Undergrad GPA + Post-Grad Career Trajectory (0% weight on Class X/XII school marks).</div>
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
// POSTGRADUATE REGISTRATION ENRICHER & REGISTERED PROFILE HEADER SYNC
// ==============================================================================
window.getPostgradProfile = function () {
  const host = window.location.host.toLowerCase();
  const exam = host.includes("gmat") ? "GMAT" : (host.includes("gre") ? "GRE" : "CAT");
  let saved = {};
  try {
    saved = JSON.parse(localStorage.getItem("goalisb_postgrad_profile_v1") || localStorage.getItem("ipm_user") || "{}");
  } catch (e) {}

  return {
    name: saved.name || "Dina Shah",
    classXII: Number(saved.classXII || saved.class12 || 90),
    ugCgpa10: Number(saved.ugCgpa10 || (exam === "GRE" ? 9.25 : (exam === "GMAT" ? 9.1 : 8.7))),
    ugGpa4: Number(saved.ugGpa4 || (exam === "GRE" ? 3.70 : 3.64)),
    ugPct: Number(saved.ugPct || 82),
    workExMonths: Number(saved.workExMonths !== undefined ? saved.workExMonths : (exam === "GMAT" ? 48 : 24)),
    targetTrack: saved.targetTrack || (exam === "GRE" ? "MS CS / AI" : (exam === "GMAT" ? "Global MBA / MiM" : "IIM A/B/C PGP")),
    researchTier: saved.researchTier || "PUB",
    category: saved.category || "GEN"
  };
};

window.savePostgradProfile = function (updates) {
  const cur = window.getPostgradProfile();
  const next = { ...cur, ...updates };
  if (updates.ugCgpa10 !== undefined) {
    const c10 = Math.min(10, Math.max(4, Number(updates.ugCgpa10)));
    next.ugCgpa10 = Number(c10.toFixed(2));
    next.ugGpa4 = Number(((c10 / 10) * 4.0).toFixed(2));
    next.ugPct = Number(Math.min(100, (c10 - 0.5) * 10).toFixed(1));
  }
  localStorage.setItem("goalisb_postgrad_profile_v1", JSON.stringify(next));

  // Sync into Tab 6 state automatically
  if (window.CAT_CALL_STATE) {
    window.CAT_CALL_STATE.classXII = next.classXII;
    window.CAT_CALL_STATE.gradCgpa = next.ugCgpa10;
    window.CAT_CALL_STATE.gradPct = next.ugPct;
    window.CAT_CALL_STATE.workExMonths = next.workExMonths;
    window.CAT_CALL_STATE.category = next.category;
  }
  if (window.GMAT_ADMIT_STATE) {
    window.GMAT_ADMIT_STATE.ugCgpa10 = next.ugCgpa10;
    window.GMAT_ADMIT_STATE.ugGpa = next.ugGpa4;
    window.GMAT_ADMIT_STATE.workExYears = Number((next.workExMonths / 12).toFixed(1));
  }
  if (window.GRE_GRAD_STATE) {
    window.GRE_GRAD_STATE.ugCgpa10 = next.ugCgpa10;
    window.GRE_GRAD_STATE.ugGpa = next.ugGpa4;
    window.GRE_GRAD_STATE.researchTier = next.researchTier;
  }
  window.syncRegisteredHeaderAndForms();
  if (typeof window.renderActiveTab === "function") window.renderActiveTab();
};

window.openPostgradProfileModal = function () {
  const p = window.getPostgradProfile();
  const host = window.location.host.toLowerCase();
  const exam = host.includes("gmat") ? "GMAT" : (host.includes("gre") ? "GRE" : "CAT");

  let modal = document.getElementById("postgrad-profile-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "postgrad-profile-modal";
    modal.className = "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4";
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="bg-slate-900 border border-slate-700 rounded-2xl max-w-md w-full p-5 space-y-4 text-xs text-slate-200 shadow-2xl">
      <div class="flex justify-between items-center border-b border-slate-800 pb-2.5">
        <div>
          <span class="text-[10px] uppercase font-bold text-indigo-400">Registered Candidate Profile</span>
          <h3 class="text-base font-extrabold text-white">Postgraduate Academic &amp; Experience Credentials</h3>
        </div>
        <button type="button" onclick="document.getElementById('postgrad-profile-modal').remove()" class="text-slate-400 hover:text-white text-lg font-bold">&times;</button>
      </div>
      <div class="space-y-3">
        <label class="block"><span class="text-slate-400">Candidate Full Name</span>
          <input id="pg-prof-name" type="text" value="${p.name}" class="mt-1 w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-semibold">
        </label>
        <div class="grid grid-cols-2 gap-2.5">
          <label class="block"><span class="text-slate-400">Undergrad CGPA (10-Pt)</span>
            <input id="pg-prof-cgpa" type="number" step="0.05" min="4" max="10" value="${p.ugCgpa10}" class="mt-1 w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold">
          </label>
          <label class="block"><span class="text-slate-400">${exam === "CAT" ? "Class XII Board %" : "Work Experience (Months)"}</span>
            <input id="pg-prof-sec" type="number" min="0" max="120" value="${exam === "CAT" ? p.classXII : p.workExMonths}" class="mt-1 w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold">
          </label>
        </div>
        ${exam === "CAT" ? `
        <div class="grid grid-cols-2 gap-2.5">
          <label class="block"><span class="text-slate-400">Work Experience (Months)</span>
            <input id="pg-prof-wx" type="number" min="0" max="96" value="${p.workExMonths}" class="mt-1 w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold">
          </label>
          <label class="block"><span class="text-slate-400">Category</span>
            <select id="pg-prof-cat" class="mt-1 w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-semibold">
              <option value="GEN" ${p.category==="GEN"?"selected":""}>General</option>
              <option value="EWS" ${p.category==="EWS"?"selected":""}>EWS</option>
              <option value="NCOBC" ${p.category==="NCOBC"?"selected":""}>NC-OBC</option>
              <option value="SC" ${p.category==="SC"?"selected":""}>SC</option>
              <option value="ST" ${p.category==="ST"?"selected":""}>ST</option>
            </select>
          </label>
        </div>` : `
        <label class="block"><span class="text-slate-400">Target Postgraduate Track</span>
          <input id="pg-prof-track" type="text" value="${p.targetTrack}" class="mt-1 w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-semibold">
        </label>`}
      </div>
      <div class="flex justify-end gap-2 pt-2 border-t border-slate-800">
        <button type="button" onclick="document.getElementById('postgrad-profile-modal').remove()" class="px-3.5 py-2 rounded-xl bg-slate-800 text-slate-300 font-semibold">Cancel</button>
        <button type="button" onclick="
          const exam = window.location.host.includes('gmat') ? 'GMAT' : (window.location.host.includes('gre') ? 'GRE' : 'CAT');
          window.savePostgradProfile({
            name: document.getElementById('pg-prof-name').value.trim() || 'Dina Shah',
            ugCgpa10: Number(document.getElementById('pg-prof-cgpa').value || 8.8),
            classXII: exam === 'CAT' ? Number(document.getElementById('pg-prof-sec').value || 90) : 90,
            workExMonths: exam === 'CAT' ? Number(document.getElementById('pg-prof-wx').value || 24) : Number(document.getElementById('pg-prof-sec').value || 24),
            category: document.getElementById('pg-prof-cat') ? document.getElementById('pg-prof-cat').value : 'GEN',
            targetTrack: document.getElementById('pg-prof-track') ? document.getElementById('pg-prof-track').value : 'Postgrad'
          });
          document.getElementById('postgrad-profile-modal').remove();
        " class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold cursor-pointer">Save &amp; Sync Profile</button>
      </div>
    </div>
  `;
};

window.syncRegisteredHeaderAndForms = function () {
  const p = window.getPostgradProfile();
  const host = window.location.host.toLowerCase();
  const exam = host.includes("gmat") ? "GMAT" : (host.includes("gre") ? "GRE" : "CAT");

  let hist = [];
  try { hist = JSON.parse(localStorage.getItem("ipm_mock_history_v1") || "[]"); } catch (e) {}
  const latest = hist[0];

  let summary = "";
  if (exam === "GMAT") {
    const est = latest && latest.maxScore ? Math.min(805, Math.max(205, Math.round((205 + (latest.score / latest.maxScore) * 600) / 10) * 10 + 5)) : null;
    summary = `CGPA: ${p.ugCgpa10.toFixed(1)}/10 (${p.ugGpa4.toFixed(2)} GPA) | WX: ${(p.workExMonths/12).toFixed(1)}y &bull; ${est ? `Mock &rarr; ${est}/805` : "Target: 715+ Focus"}`;
  } else if (exam === "GRE") {
    const est = latest && latest.maxScore ? Math.min(340, Math.max(260, Math.round(260 + (latest.score / latest.maxScore) * 80))) : null;
    summary = `CGPA: ${p.ugCgpa10.toFixed(1)}/10 (${p.ugGpa4.toFixed(2)} GPA) | ${p.targetTrack} &bull; ${est ? `Mock &rarr; ${est}/340` : "Target: 328+ GRE"}`;
  } else {
    const scaled198 = latest && latest.maxScore ? Math.round((latest.score / latest.maxScore) * 198) : null;
    summary = `XII: ${p.classXII}% | CGPA: ${p.ugCgpa10.toFixed(1)}/10 (${p.ugPct}%) | WX: ${p.workExMonths}m &bull; ${scaled198 !== null ? `Mock &rarr; ${scaled198}/198` : "Target: 99.2+%ile"}`;
  }

  // Update the top-bar candidate profile pill & make it clickable to edit Postgraduate credentials
  document.querySelectorAll("header span, header div, nav span, nav div").forEach(el => {
    if (el.children.length <= 3 && (/Class\s*(X|XII|10|12)/i.test(el.textContent || "") || el.dataset.pgSynced === "1")) {
      el.dataset.pgSynced = "1";
      el.style.cursor = "pointer";
      el.title = "Click to edit Registered Postgraduate Profile (CGPA, Work-Ex, Target Track)";
      el.onclick = window.openPostgradProfileModal;
      el.innerHTML = `<span class="font-bold">&#128100; ${p.name}</span> <span class="mx-1.5 opacity-50">|</span> <span class="text-indigo-600 dark:text-indigo-300 font-semibold">${summary}</span> <span class="ml-1.5 text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/15 text-indigo-400">Edit</span>`;
    }
  });

  // Also upgrade any Registration Modal inputs labeled 'Class 10 %' / 'Class 12 %' to Postgraduate fields
  document.querySelectorAll("label, input").forEach(node => {
    if (node.tagName === "LABEL" && /Class\s*10/i.test(node.textContent || "")) {
      node.innerHTML = node.innerHTML.replace(/Class\s*10\s*%/gi, "Undergrad CGPA (10-Pt Scale)");
    }
    if (node.tagName === "LABEL" && /Class\s*12/i.test(node.textContent || "") && exam !== "CAT") {
      node.innerHTML = node.innerHTML.replace(/Class\s*12\s*%/gi, "Work Experience (Months)");
    }
  });
};

setInterval(window.syncRegisteredHeaderAndForms, 500);