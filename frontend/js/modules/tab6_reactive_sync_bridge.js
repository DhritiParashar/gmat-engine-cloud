// ==============================================================================
// REACTIVE TAB 6 SYNC BRIDGE (GMAT 205-805 & CAT 0-198)
// - Preserves default What-If Target Sliders
// - On clicking "Sync GMAT Mock" or "Sync CAT Mock": zeros to baseline if 0 full mocks,
//   or snaps all sliders & composite score to latest Full-Length Mock actuals
// ==============================================================================
(function () {
  function syncSlidersToActuals() {
    const isGmat = location.hostname.includes("gmat") || document.title.includes("GMAT");
    const rawHist = JSON.parse(localStorage.getItem("ipm_mock_history_v1") || "[]");
    const minFullQs = isGmat ? 64 : 66;
    const fullMocks = rawHist.filter(h =>
      Number(h.maxScore || 0) >= minFullQs || String(h.blueprint || "").toLowerCase().includes("full")
    );

    const sliders = Array.from(document.querySelectorAll("#main-workspace input[type='range'], #tab-6 input[type='range']"));
    if (sliders.length < 3) return;

    if (!fullMocks.length) {
      // Zero to actual baseline (GMAT: 60/60/60 -> 205/805; CAT: 0/0/0 -> 0/198)
      sliders.forEach(sl => {
        sl.value = isGmat ? 60 : 0;
        sl.dispatchEvent(new Event("input", { bubbles: true }));
        sl.dispatchEvent(new Event("change", { bubbles: true }));
      });
      const hdr = document.querySelector("#main-workspace .text-2xl, #main-workspace h2");
      if (hdr && hdr.nextElementSibling) {
        hdr.nextElementSibling.textContent = isGmat
          ? "Synced Actuals: 0 Full 64-Q Mocks → Zeroed to Baseline 205 / 805 (QR 60 • VR 60 • DI 60)"
          : "Synced Actuals: 0 Full 66-Q Mocks → Zeroed to Baseline 0 / 198 (VARC 0 • DILR 0 • QA 0)";
        hdr.nextElementSibling.className = "text-xs font-extrabold text-amber-600 mt-1";
      }
      return;
    }

    const latest = fullMocks[0];
    const ratio = Math.min(1, Math.max(0, Number(latest.score || 0) / Math.max(1, Number(latest.maxScore || minFullQs))));
    if (isGmat) {
      const secVal = Math.round(60 + ratio * 30);
      sliders.forEach(sl => {
        sl.value = secVal;
        sl.dispatchEvent(new Event("input", { bubbles: true }));
        sl.dispatchEvent(new Event("change", { bubbles: true }));
      });
    } else {
      const maxes = [72, 60, 66];
      sliders.forEach((sl, idx) => {
        sl.value = Math.round(ratio * (maxes[idx] || 66));
        sl.dispatchEvent(new Event("input", { bubbles: true }));
        sl.dispatchEvent(new Event("change", { bubbles: true }));
      });
    }
  }

  document.addEventListener("click", function (e) {
    const btn = e.target.closest("button");
    if (!btn) return;
    const txt = (btn.textContent || "").trim();
    if (txt.includes("Sync GMAT Mock") || txt.includes("Sync CAT Mock")) {
      setTimeout(syncSlidersToActuals, 25);
    }
  }, true);
})();