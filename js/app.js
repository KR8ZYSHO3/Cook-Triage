(function () {
  const state = {
    category: null,
    symptom: null,
    causeIndex: 0
  };

  const views = {
    home: document.getElementById("view-home"),
    triage: document.getElementById("view-triage")
  };

  const els = {
    categoryGrid: document.getElementById("category-grid"),
    breadcrumbCategory: document.getElementById("breadcrumb-category"),
    symptomTitle: document.getElementById("symptom-title"),
    symptomHint: document.getElementById("symptom-hint"),
    symptomOptions: document.getElementById("symptom-options"),
    causeCard: document.getElementById("cause-card"),
    fixCard: document.getElementById("fix-card"),
    btnAltCause: document.getElementById("btn-alt-cause"),
    btnToFix: document.getElementById("btn-to-fix"),
    btnStillStuck: document.getElementById("btn-still-stuck"),
    rescueLink: document.getElementById("rescue-link"),
    progressSteps: document.querySelectorAll(".progress-step"),
    steps: {
      symptom: document.getElementById("step-symptom"),
      cause: document.getElementById("step-cause"),
      fix: document.getElementById("step-fix")
    }
  };

  function showView(name) {
    Object.values(views).forEach((v) => {
      v.classList.remove("active");
      v.hidden = true;
    });
    views[name].classList.add("active");
    views[name].hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function setProgress(step) {
    els.progressSteps.forEach((el) => {
      const n = Number(el.dataset.step);
      el.classList.toggle("active", n === step);
      el.classList.toggle("done", n < step);
    });
  }

  function showTriageStep(name) {
    Object.values(els.steps).forEach((s) => {
      s.hidden = true;
      s.classList.remove("active");
    });
    els.steps[name].hidden = false;
    els.steps[name].classList.add("active");
  }

  function getCurrentSymptom() {
    return state.category.symptoms.find((s) => s.id === state.symptom);
  }

  function getCurrentCause() {
    const symptom = getCurrentSymptom();
    return symptom.causes[state.causeIndex];
  }

  function renderCategories() {
    els.categoryGrid.innerHTML = TRIAGE_DATA.map(
      (cat) => `
        <button type="button" class="category-card" data-category="${cat.id}" role="listitem">
          <span class="category-icon" aria-hidden="true">${cat.icon}</span>
          <h3>${cat.title}</h3>
          <p>${cat.description}</p>
        </button>
      `
    ).join("");
  }

  function startCategory(categoryId) {
    state.category = TRIAGE_DATA.find((c) => c.id === categoryId);
    state.symptom = null;
    state.causeIndex = 0;

    els.breadcrumbCategory.textContent = state.category.title;
    els.symptomTitle.textContent = "What's going on?";
    els.symptomHint.textContent = state.category.hint;

    els.symptomOptions.innerHTML = state.category.symptoms
      .map(
        (s) => `
          <button type="button" class="option-btn" data-symptom="${s.id}">
            ${s.label}
          </button>
        `
      )
      .join("");

    setProgress(1);
    showTriageStep("symptom");
    showView("triage");
  }

  function selectSymptom(symptomId) {
    state.symptom = symptomId;
    state.causeIndex = 0;
    renderCause();
    setProgress(2);
    showTriageStep("cause");
  }

  function renderCause() {
    const cause = getCurrentCause();
    const symptom = getCurrentSymptom();
    const altCount = symptom.causes.length;

    els.causeCard.innerHTML = `
      <h3>${cause.title}</h3>
      <p>${cause.explanation}</p>
    `;

    els.btnAltCause.hidden = altCount <= 1;
    els.btnAltCause.textContent =
      state.causeIndex < altCount - 1
        ? "Try another cause"
        : "Back to first cause";
  }

  function cycleCause() {
    const symptom = getCurrentSymptom();
    state.causeIndex = (state.causeIndex + 1) % symptom.causes.length;
    renderCause();
  }

  function renderFix() {
    const cause = getCurrentCause();

    els.fixCard.innerHTML = `
      <ol class="fix-steps">
        ${cause.fixes.map((f) => `<li>${f}</li>`).join("")}
      </ol>
      ${cause.tip ? `<div class="fix-tip"><strong>Next time:</strong> ${cause.tip}</div>` : ""}
    `;

    setProgress(3);
    showTriageStep("fix");
  }

  function goHome() {
    state.category = null;
    state.symptom = null;
    state.causeIndex = 0;
    showView("home");
  }

  function restart() {
    if (!state.category) return goHome();
    startCategory(state.category.id);
  }

  function scrollToRescue() {
    const link = els.rescueLink.href;
    if (link && !link.includes("placeholder")) {
      window.open(link, "_blank", "noopener");
      return;
    }
    goHome();
    els.rescueLink.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  document.addEventListener("click", (e) => {
    const categoryBtn = e.target.closest("[data-category]");
    if (categoryBtn) {
      startCategory(categoryBtn.dataset.category);
      return;
    }

    const symptomBtn = e.target.closest("[data-symptom]");
    if (symptomBtn) {
      selectSymptom(symptomBtn.dataset.symptom);
      return;
    }

    const action = e.target.closest("[data-action]");
    if (action) {
      if (action.dataset.action === "home") goHome();
      if (action.dataset.action === "restart") restart();
    }
  });

  els.btnAltCause.addEventListener("click", cycleCause);
  els.btnToFix.addEventListener("click", renderFix);
  els.btnStillStuck.addEventListener("click", scrollToRescue);

  renderCategories();
})();