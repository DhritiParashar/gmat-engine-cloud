// ==============================================================================
// EXACT TAB 6 COMPOSITE SCORE, PERCENTILE & HEADER READINESS UPDATER (CAT & GMAT)
// ==============================================================================
(function () {
  const isGmat = location.hostname.includes("gmat") || document.title.includes("GMAT");

  function computeCatPercentile(raw) {
    if (raw <= 0) return "0.00";
    if (raw < 20) return (raw * 1.8).toFixed(2);
    if (raw < 40) return (36 + (raw - 20) * 1.9).toFixed(2);
    if (raw < 60) return (74 + (raw - 40) * 0.85).toFixed(2);
    if (raw < 85) return (91 + (raw - 60) * 0.28).toFixed(2);
    if (raw < 110) return (98.0 + (raw - 85) * 0.072).toFixed(2);
    return "99.90";
  }

  function computeGmatComposite(qr, vr, di) {
    const sum = qr + vr + di; // 180 (min) to 270 (max)
    if (sum <= 180) return { score: 205, pct: "0.0" };
    const ratio = (sum - 180) / 90;
    const raw805 = 205 + ratio * 600;
    const snapped = Math.min(805, Math.max(205, Math.round((raw805 - 5) / 10) * 10 + 5));
    const pct = snapped <= 205 ? "0.0" : Math.min(100.0, Math.round(Math.pow(ratio, 0.72) * 1000) / 10).toFixed(1);
    return { score: snapped, pct };
  }

  function refreshCompositeReadout() {
    const sliders = Array.from(document.querySelectorAll("input[type='range']"));
    if (sliders.length < 3) return;

    const v1 = Number(sliders[0].value || 0);
    const v2 = Number(sliders[1].value || 0);
    const v3 = Number(sliders[2].value || 0);

    let labelText = "";
    let headerText = "";
    if (isGmat) {
      const res = computeGmatComposite(v1, v2, v3);
      labelText = `${res.score} / 805 (${res.pct}%ile)`;
      headerText = `Readiness: ${res.score}/805`;
    } else {
      const total = v1 + v2 + v3;
      const pct = computeCatPercentile(total);
      labelText = `${total} / 198 (${pct}%ile)`;
      headerText = `Readiness: ${total}/198 (~${pct}%ile)`;
    }

    // 1. Find the exact row containing "Projected CAT Scaled Score:" or "Projected GMAT Focus Composite:"
    document.querySelectorAll("div, p, span, strong").forEach(el => {
      const txt = (el.textContent || "").trim();
      if (txt === "Projected CAT Scaled Score:" || txt === "Projected GMAT Focus Composite:") {
        const valNode = el.nextElementSibling;
        if (valNode) valNode.textContent = labelText;
      }
      // Also catch any leaf or 1-child node matching "/ 198 (" or "/ 805 ("
      if (el.children.length <= 1 && ((isGmat && /^\d{3}\s*\/\s*805\s*\(/.test(txt)) || (!isGmat && /^\d+\s*\/\s*198\s*\(/.test(txt)))) {
        el.textContent = labelText;
      }
    });

    // 2. Update Top Header Readiness pill (handles combined "Target: ... • Readiness: ..." node)
    document.querySelectorAll("header span, header div, header strong").forEach(el => {
      const t = el.textContent || "";
      if (t.includes("Readiness:")) {
        el.innerHTML = el.innerHTML.replace(/Readiness:\s*[^<•|]+/, headerText + " ");
      }
    });
  }

  function syncSlidersToActuals() {
    const rawHist = JSON.parse(localStorage.getItem("ipm_mock_history_v1") || "[]");
    const minFullQs = isGmat ? 64 : 66;
    const fullMocks = rawHist.filter(h =>
      Number(h.maxScore || 0) >= minFullQs || String(h.blueprint || "").toLowerCase().includes("full")
    );

    const sliders = Array.from(document.querySelectorAll("input[type='range']"));
    if (sliders.length < 3) return;

    if (!fullMocks.length) {
      sliders.forEach(sl => {
        sl.value = isGmat ? 60 : 0;
        sl.dispatchEvent(new Event("input", { bubbles: true }));
      });
      const hdr = document.querySelector("#main-workspace .text-2xl, #main-workspace h2");
      if (hdr && hdr.nextElementSibling) {
        hdr.nextElementSibling.textContent = isGmat
          ? "Synced Actuals: 0 Full 64-Q Mocks → Zeroed to Baseline 205 / 805 (QR 60 • VR 60 • DI 60)"
          : "Synced Actuals: 0 Full 66-Q Mocks → Zeroed to Baseline 0 / 198 (VARC 0 • DILR 0 • QA 0)";
        hdr.nextElementSibling.className = "text-xs font-extrabold text-amber-600 mt-1";
      }
      setTimeout(refreshCompositeReadout, 30);
      return;
    }

    const latest = fullMocks[0];
    const ratio = Math.min(1, Math.max(0, Number(latest.score || 0) / Math.max(1, Number(latest.maxScore || minFullQs))));
    if (isGmat) {
      const secVal = Math.round(60 + ratio * 30);
      sliders.forEach(sl => {
        sl.value = secVal;
        sl.dispatchEvent(new Event("input", { bubbles: true }));
      });
    } else {
      const maxes = [72, 60, 66];
      sliders.forEach((sl, idx) => {
        sl.value = Math.round(ratio * (maxes[idx] || 66));
        sl.dispatchEvent(new Event("input", { bubbles: true }));
      });
    }
    setTimeout(refreshCompositeReadout, 30);
  }

  document.addEventListener("input", function (e) {
    if (e.target && e.target.type === "range") {
      setTimeout(refreshCompositeReadout, 20);
    }
  }, true);

  document.addEventListener("click", function (e) {
    const btn = e.target.closest("button");
    if (!btn) return;
    const txt = (btn.textContent || "").trim();
    if (txt.includes("Sync GMAT Mock") || txt.includes("Sync CAT Mock")) {
      setTimeout(syncSlidersToActuals, 30);
    }
  }, true);
})();