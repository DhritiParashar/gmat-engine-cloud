// ==============================================================================
// AUTHORITATIVE GMAT FOCUS MODE-SYNC ENGINE (STANDARD | DI_CLINIC | SPRINT_705)
// ==============================================================================
(function () {
  window._ACTIVE_GMAT_MODE = window._ACTIVE_GMAT_MODE || "STANDARD";

  window.getGmatModeKey = function () {
    const idx = Number(window._ACTIVE_MODE_IDX || 0);
    if (idx === 1) return "DI_CLINIC";
    if (idx === 2) return "SPRINT_705";
    return window._ACTIVE_GMAT_MODE || "STANDARD";
  };

  window.isFullGmatMockRecord = function (entry) {
    const sid = String(entry?.serialId || "").toUpperCase();
    const bp = String(entry?.blueprint || "");
    return (sid.startsWith("GMAT") || bp.includes("GMAT")) && (bp.includes("Full") || bp.includes("64 Qs"));
  };

  window.getFullGmatHistory = function () {
    const all = JSON.parse(localStorage.getItem("ipm_mock_history_v1") || "[]");
    return all.filter(window.isFullGmatMockRecord);
  };

  window.clearGmatFullMockHistory = function () {
    if (!confirm("Clear all logged Full-Length GMAT Focus mocks? This resets your Tab 6 Score & Percentile Forecaster baseline.")) return;
    const all = JSON.parse(localStorage.getItem("ipm_mock_history_v1") || "[]");
    const kept = all.filter(item => !window.isFullGmatMockRecord(item));
    localStorage.setItem("ipm_mock_history_v1", JSON.stringify(kept));
    window.syncGmatPortalState();
  };

  window.syncGmatPortalState = function () {
    const mode = window.getGmatModeKey();
    const fullLogs = window.getFullGmatHistory();

    // Update top header readiness badge strictly from Full-Length GMAT Mocks
    let latest205 = "205";
    if (fullLogs.length > 0) {
      const r = fullLogs[0].maxScore > 0 ? Math.max(0, Math.min(1, fullLogs[0].score / fullLogs[0].maxScore)) : 0;
      const raw = Math.round(205 + r * 600);
      latest205 = String(Math.min(805, Math.max(205, Math.round(raw / 10) * 10 + 5)));
    }

    document.querySelectorAll("span, div, a").forEach(el => {
      if (el.children.length === 0 && el.textContent && (el.textContent.includes("Mocks:") || el.textContent.includes("Readiness:"))) {
        el.textContent = `GMAT Full Mocks: ${fullLogs.length} • Latest Scaled: ${latest205}/805`;
      }
    });

    // Rename Tab 6 button consistently to "6. Score & Percentile Forecaster"
    document.querySelectorAll("button").forEach(b => {
      const txt = (b.textContent || "").trim();
      if (txt.startsWith("6.") && txt.includes("Forecaster")) {
        b.textContent = "6. Score & Percentile Forecaster";
      }
    });

    const ws = document.getElementById("main-workspace");
    if (!ws) return;
    const activeTabBtn = Array.from(document.querySelectorAll("button")).find(b =>
      ((b.className || "").includes("bg-indigo-600") || b.classList.contains("active")) && /^[1-6]\./.test((b.textContent || "").trim())
    );
    const activeNum = activeTabBtn ? parseInt((activeTabBtn.textContent || "").trim()[0], 10) : 0;
    if (activeNum === 4) {
      setTimeout(() => window.patchGmatTab4Ledger(), 120);
    } else if (activeNum === 6) {
      window.renderAuthoritativeGmatTab6(ws);
    }
  };

  window.patchGmatTab4Ledger = function () {
    const fullLogs = window.getFullGmatHistory();
    const ws = document.getElementById("main-workspace");
    if (!ws) return;

    ws.querySelectorAll("h3").forEach(h => {
      if (h.textContent.includes("Serial Mock ID") || h.textContent.includes("Full-Length Mock Ledger")) {
        h.innerHTML = `GMAT Focus Full-Length Mock Ledger (${fullLogs.length} Full 64-Q Mocks Logged) <span class="block text-[11px] font-medium text-slate-500 mt-0.5">Only Full-Length 64-Question GMAT Focus Simulations are logged here to calibrate Tab 6&#39;s 205–805 Forecaster. Short sectionals &amp; 705+ sprints provide instant scorecards &amp; PDFs without skewing your composite score.</span>`;
      }
    });

    ws.querySelectorAll("button").forEach(b => {
      if (b.textContent.includes("Clear") && b.textContent.includes("Log")) {
        b.innerHTML = `&#128465; Clear GMAT Log`;
        b.onclick = () => window.clearGmatFullMockHistory();
      }
    });

    const tbody = ws.querySelector("table tbody");
    if (tbody) {
      tbody.innerHTML = fullLogs.length
        ? fullLogs.map(h => `
            <tr class="border-t border-slate-200 dark:border-slate-800 text-xs">
              <td class="py-2.5 px-3 font-mono font-extrabold text-indigo-600">${h.serialId}</td>
              <td class="py-2.5 px-3 text-slate-500">${h.date || ""} ${h.time || ""}</td>
              <td class="py-2.5 px-3 font-bold text-slate-800 dark:text-slate-200">${h.blueprint}</td>
              <td class="py-2.5 px-3 font-extrabold text-emerald-600">${h.score} / ${h.maxScore}</td>
              <td class="py-2.5 px-3 font-bold">${h.accuracy}% (${h.correct || 0}C/${h.wrong || 0}W)</td>
              <td class="py-2.5 px-3 text-right">
                <button type="button" onclick="window.downloadOfficialMarksheet4('${h.serialId}')" class="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-bold cursor-pointer">PDF</button>
              </td>
            </tr>
          `).join("")
        : `<tr><td colspan="6" class="py-5 text-center text-xs text-slate-400">No Full-Length 64-Question GMAT Focus Mocks logged yet. Complete Blueprint 1 above to generate your GMAT-2026-XXXX Serial ID and enable Tab 6&#39;s 205–805 Forecaster.</td></tr>`;
    }
  };

  window.renderAuthoritativeGmatTab6 = function (el) {
    if (!el) return;
    const fullLogs = window.getFullGmatHistory();

    let wSum = 0, ratioSum = 0, accSum = 0;
    fullLogs.forEach((h, i) => {
      const w = Math.pow(0.75, i);
      const r = h.maxScore > 0 ? Math.max(0, Math.min(1, h.score / h.maxScore)) : 0;
      wSum += w;
      ratioSum += w * r;
      accSum += w * (h.accuracy || 0);
    });

    const hasMocks = fullLogs.length > 0;
    const avgRatio = hasMocks && wSum > 0 ? ratioSum / wSum : 0.55;
    const avgAcc = hasMocks && wSum > 0 ? Math.round(accSum / wSum) : 0;

    // Equal-weighted GMAT Focus sectional scores (60 to 90 each)
    const initQR = Math.round(60 + avgRatio * 30);
    const initVR = Math.round(60 + avgRatio * 30);
    const initDI = Math.round(60 + avgRatio * 30);

    const calcComposite205 = (qr, vr, di) => {
      const sum = qr + vr + di; // 180 to 270
      const raw = 205 + ((sum - 180) / 90) * 600;
      const snapped = Math.min(805, Math.max(205, Math.round(raw / 10) * 10 + 5));
      const pct = snapped >= 735 ? "99.6" : (snapped >= 705 ? "98.8" : (snapped >= 675 ? "95.4" : (snapped >= 645 ? "88.5" : (snapped >= 605 ? "74.0" : "55.0"))));
      return `${snapped} / 805 (${pct}%ile)`;
    };

    let prepStage = "Stage 1: Complete 1 Full 64-Q GMAT Mock";
    let stageBadge = "bg-slate-100 text-slate-700";
    if (hasMocks) {
      if (avgRatio >= 0.78 && avgAcc >= 80) { prepStage = "Tier 4: 705+ M7 / Wharton Elite Ready"; stageBadge = "bg-emerald-100 text-emerald-800 border-emerald-300"; }
      else if (avgRatio >= 0.65 && avgAcc >= 72) { prepStage = "Tier 3: 675+ INSEAD / LBS / ISB Contender"; stageBadge = "bg-indigo-100 text-indigo-800 border-indigo-300"; }
      else if (avgRatio >= 0.45) { prepStage = "Tier 2: 645+ Adaptive Pacing Build"; stageBadge = "bg-amber-100 text-amber-800 border-amber-300"; }
      else { prepStage = "Tier 1: Foundation & Q1–Q6 Accuracy Build"; stageBadge = "bg-rose-100 text-rose-800 border-rose-300"; }
    }

    window.updateGmatSliders6 = function () {
      const qr = parseInt(document.getElementById("gmat-qr")?.value || initQR, 10);
      const vr = parseInt(document.getElementById("gmat-vr")?.value || initVR, 10);
      const di = parseInt(document.getElementById("gmat-di")?.value || initDI, 10);
      const l1 = document.getElementById("gmat-qr-lbl");
      const l2 = document.getElementById("gmat-vr-lbl");
      const l3 = document.getElementById("gmat-di-lbl");
      const tot = document.getElementById("gmat-total-val");
      if (l1) l1.textContent = `${qr} / 90`;
      if (l2) l2.textContent = `${vr} / 90`;
      if (l3) l3.textContent = `${di} / 90`;
      if (tot) tot.textContent = calcComposite205(qr, vr, di);
    };

    const logRows = fullLogs.length
      ? fullLogs.map(h => `
          <tr class="border-t border-slate-200 dark:border-slate-800 text-xs">
            <td class="py-2.5 px-3 font-mono font-extrabold text-indigo-600">${h.serialId}</td>
            <td class="py-2.5 px-3 text-slate-500">${h.date || ""} ${h.time || ""}</td>
            <td class="py-2.5 px-3 font-bold">${h.blueprint}</td>
            <td class="py-2.5 px-3 font-extrabold text-emerald-600">${h.score} / ${h.maxScore}</td>
            <td class="py-2.5 px-3 font-bold">${h.accuracy}%</td>
            <td class="py-2.5 px-3 text-right">
              <button type="button" onclick="window.downloadOfficialMarksheet4('${h.serialId}')" class="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-bold cursor-pointer">PDF</button>
            </td>
          </tr>
        `).join("")
      : `<tr><td colspan="6" class="py-6 text-center text-xs text-slate-500"><strong>Action Required:</strong> Complete at least one <strong>Full-Length 64-Question GMAT Focus Mock</strong> in Tab 4 to unlock live 205–805 Score &amp; Percentile Forecasting (short sectionals &amp; 705+ sprints are excluded so your composite prediction stays accurate).</td></tr>`;

    el.innerHTML = `
      <div class="max-w-7xl mx-auto my-4 space-y-5">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div class="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
            <div class="flex items-start justify-between gap-2">
              <div>
                <span class="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600">GMAT FOCUS READINESS ENGINE (205–805 SCALE)</span>
                <h2 class="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">Score, Percentile &amp; Adaptive Forecaster</h2>
                <p class="text-[11px] text-slate-500 mt-0.5">Calculated strictly from <strong>${fullLogs.length} Full-Length GMAT Mock(s)</strong></p>
              </div>
              <button type="button" onclick="window.syncGmatPortalState()"
                class="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold shadow cursor-pointer shrink-0">
                &#8635; Sync GMAT Mock
              </button>
            </div>

            <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs">
              <span class="font-bold text-slate-500">GMAT Focus Readiness:</span>
              <span class="px-2.5 py-1 rounded-full border font-extrabold text-[11px] ${stageBadge}">${prepStage}</span>
            </div>

            <div class="space-y-3 pt-1">
              <div>
                <div class="flex justify-between text-xs font-bold mb-1"><span>Quantitative Reasoning (60–90 &bull; 21 Qs / 45m)</span><span id="gmat-qr-lbl" class="text-indigo-600 font-extrabold">${initQR} / 90</span></div>
                <input id="gmat-qr" type="range" min="60" max="90" value="${initQR}" oninput="window.updateGmatSliders6()" class="w-full accent-indigo-600">
              </div>
              <div>
                <div class="flex justify-between text-xs font-bold mb-1"><span>Verbal Reasoning (60–90 &bull; 23 Qs / 45m)</span><span id="gmat-vr-lbl" class="text-indigo-600 font-extrabold">${initVR} / 90</span></div>
                <input id="gmat-vr" type="range" min="60" max="90" value="${initVR}" oninput="window.updateGmatSliders6()" class="w-full accent-indigo-600">
              </div>
              <div>
                <div class="flex justify-between text-xs font-bold mb-1"><span>Data Insights (60–90 &bull; 20 Qs / 45m)</span><span id="gmat-di-lbl" class="text-indigo-600 font-extrabold">${initDI} / 90</span></div>
                <input id="gmat-di" type="range" min="60" max="90" value="${initDI}" oninput="window.updateGmatSliders6()" class="w-full accent-indigo-600">
              </div>
            </div>

            <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 space-y-1">
              <div class="flex items-center justify-between text-xs">
                <span class="font-bold text-slate-700 dark:text-slate-300">Projected GMAT Focus Composite:</span>
                <strong id="gmat-total-val" class="text-sm font-extrabold text-indigo-700 dark:text-indigo-300">${calcComposite205(initQR, initVR, initDI)}</strong>
              </div>
              <p class="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">Equal-weight composite across QR, VR &amp; DI. Protect Q1–Q6 accuracy, use up to 3 Review Edits strategically, and never leave items unanswered.</p>
            </div>
          </div>

          <div class="lg:col-span-7 space-y-3">
            <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-1">
              <div class="text-sm font-extrabold text-slate-900 dark:text-white">705+ (99th %ile) Harvard / Stanford / Wharton / MIT Sloan Zone</div>
              <div class="text-xs font-bold text-indigo-600 dark:text-indigo-400">Target Split: QR 86/90 • VR 85/90 • DI 84/90 (Sum = 255)</div>
              <div class="text-xs text-slate-600 dark:text-slate-300">Execution Pace: <= 2.0 mins/Q • Zero unanswered items • >= 85% accuracy on Q1–Q8</div>
              <div class="text-[11px] text-slate-500">Next Drill Focus: Master DS C-Trap eliminations &amp; Multi-Source Reasoning tab synthesis.</div>
            </div>
            <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-1">
              <div class="text-sm font-extrabold text-slate-900 dark:text-white">675+ (95th %ile) INSEAD / LBS / Kellogg / Booth / ISB PGP Zone</div>
              <div class="text-xs font-bold text-indigo-600 dark:text-indigo-400">Target Split: QR 84/90 • VR 83/90 • DI 83/90 (Sum = 250)</div>
              <div class="text-xs text-slate-600 dark:text-slate-300">Execution Pace: Clean 2.1 mins/Q rhythm • Bookmark max 2 time-sink items for Review Edit</div>
              <div class="text-[11px] text-slate-500">Next Drill Focus: Lock Necessary Assumption &amp; Boldface CR logic in Tab 3.</div>
            </div>
            <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-1">
              <div class="text-sm font-extrabold text-slate-900 dark:text-white">645+ (89th %ile) Top-20 Global MBA / IIM Executive Zone</div>
              <div class="text-xs font-bold text-indigo-600 dark:text-indigo-400">Target Split: QR 82/90 • VR 82/90 • DI 81/90 (Sum = 245)</div>
              <div class="text-xs text-slate-600 dark:text-slate-300">Execution Pace: Steady pacing with educated guesses in final 60s to avoid blank penalty</div>
              <div class="text-[11px] text-slate-500">Next Drill Focus: Eliminate algebraic sign slips in Zero-Geometry Quant drills.</div>
            </div>
          </div>
        </div>

        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-3">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 class="text-sm font-extrabold text-slate-900 dark:text-white">GMAT Focus Full-Length Mock Ledger (${fullLogs.length} Full Mocks Synced)</h3>
              <p class="text-[11px] text-slate-500">Only Full-Length 64-Question GMAT Focus Simulations are recorded here to evaluate composite readiness.</p>
            </div>
            <button type="button" onclick="window.clearGmatFullMockHistory()"
              class="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-extrabold cursor-pointer">&#128465; Clear GMAT Log</button>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="text-[10px] font-extrabold uppercase text-slate-400 bg-slate-50 dark:bg-slate-950">
                  <th class="py-2 px-3">Serial Mock ID</th>
                  <th class="py-2 px-3">Date &amp; Time</th>
                  <th class="py-2 px-3">GMAT Full Blueprint</th>
                  <th class="py-2 px-3">Raw Score</th>
                  <th class="py-2 px-3">Accuracy</th>
                  <th class="py-2 px-3 text-right">Marksheet</th>
                </tr>
              </thead>
              <tbody>${logRows}</tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  };

  window.renderTab6 = window.renderAuthoritativeGmatTab6;
  window.renderCollegePredictor = window.renderAuthoritativeGmatTab6;
  window.renderScoreForecaster6 = window.renderAuthoritativeGmatTab6;

  // Hook top mode selector (GMAT Focus Standard | Data Insights Deep Clinic | 705+ Adaptive Sprint)
  const origSelectMode = window.selectExamMode;
  window.selectExamMode = function (idx) {
    if (typeof origSelectMode === "function") origSelectMode(idx);
    const n = Number(idx || 0);
    window._ACTIVE_GMAT_MODE = n === 1 ? "DI_CLINIC" : (n === 2 ? "SPRINT_705" : "STANDARD");
    // Auto-select matching Tab 4 blueprint when mode changes
    window._SELECTED_MOCK_BP = n === 1 ? 3 : (n === 2 ? 4 : 0);
    setTimeout(() => window.syncGmatPortalState(), 60);
  };

  const origSwitchTab = window.selectUnifiedTab;
  window.selectUnifiedTab = function (tab) {
    if (typeof origSwitchTab === "function") origSwitchTab(tab);
    const tNum = parseInt(String(tab).replace(/\D/g, ""), 10);
    const ws = document.getElementById("main-workspace");
    if (tNum === 4) setTimeout(() => window.patchGmatTab4Ledger(), 150);
    else if (tNum === 6 && ws) window.renderAuthoritativeGmatTab6(ws);
    window.syncGmatPortalState();
  };

  window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      window.syncGmatPortalState();
      window.patchGmatTab4Ledger();
    }, 250);
  });
})();