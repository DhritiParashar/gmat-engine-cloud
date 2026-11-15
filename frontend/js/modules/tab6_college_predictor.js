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