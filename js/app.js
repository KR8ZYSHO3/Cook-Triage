(function () {
  const state = {
    category: null,
    symptom: null,
    variant: null,
    causeIndex: 0,
    searchQuery: ""
  };

  const views = {
    home: document.getElementById("view-home"),
    triage: document.getElementById("view-triage"),
    learn: document.getElementById("view-learn"),
    lesson: document.getElementById("view-lesson")
  };

  const els = {
    categoryGrid: document.getElementById("category-grid"),
    searchInput: document.getElementById("search-input"),
    searchResults: document.getElementById("search-results"),
    statsBar: document.getElementById("stats-bar"),
    breadcrumbCategory: document.getElementById("breadcrumb-category"),
    symptomTitle: document.getElementById("symptom-title"),
    symptomHint: document.getElementById("step-hint"),
    symptomOptions: document.getElementById("symptom-options"),
    causeCard: document.getElementById("cause-card"),
    fixCard: document.getElementById("fix-card"),
    btnAltCause: document.getElementById("btn-alt-cause"),
    btnToFix: document.getElementById("btn-to-fix"),
    btnStillStuck: document.getElementById("btn-still-stuck"),
    btnBackSymptom: document.getElementById("btn-back-symptom"),
    rescueLink: document.getElementById("rescue-link"),
    lessonGrid: document.getElementById("lesson-grid"),
    lessonArticle: document.getElementById("lesson-article"),
    breadcrumbLesson: document.getElementById("breadcrumb-lesson"),
    navBtns: document.querySelectorAll("[data-nav]"),
    progressSteps: document.querySelectorAll(".progress-step"),
    steps: {
      symptom: document.getElementById("step-symptom"),
      cause: document.getElementById("step-cause"),
      fix: document.getElementById("step-fix")
    }
  };

  const searchIndex = buildSearchIndex();

  function buildSearchIndex() {
    const items = [];
    TRIAGE_DATA.forEach((cat) => {
      cat.symptoms.forEach((symptom) => {
        const causeText = (symptom.causes || [])
          .concat((symptom.variants || []).flatMap((v) => v.causes || []))
          .map((c) => `${c.title} ${c.explanation}`)
          .join(" ");
        items.push({
          catId: cat.id,
          symptomId: symptom.id,
          label: symptom.label,
          category: cat.title,
          haystack: `${symptom.label} ${cat.title} ${cat.description} ${causeText}`.toLowerCase()
        });
      });
    });
    return items;
  }

  function getStats() {
    let symptoms = 0;
    let causes = 0;
    TRIAGE_DATA.forEach((cat) => {
      cat.symptoms.forEach((s) => {
        symptoms += 1;
        const pool = s.causes || [];
        const variantCauses = (s.variants || []).flatMap((v) => v.causes || []);
        causes += pool.length + variantCauses.length;
      });
    });
    return { categories: TRIAGE_DATA.length, symptoms, causes };
  }

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

  function getActiveCauses() {
    const symptom = getCurrentSymptom();
    if (!symptom) return [];
    if (state.variant && symptom.variants) {
      const variant = symptom.variants.find((v) => v.id === state.variant);
      return variant ? variant.causes : symptom.causes;
    }
    return symptom.causes || [];
  }

  function getCurrentCause() {
    const causes = getActiveCauses();
    return causes[state.causeIndex];
  }

  function likelihoodLabel(value) {
    if (value === "most-likely") return "Most likely";
    if (value === "common") return "Also common";
    if (value === "less-common") return "Less common — still check";
    return null;
  }

  function renderStats() {
    if (!els.statsBar) return;
    const s = getStats();
    els.statsBar.textContent = `${s.categories} categories · ${s.symptoms} symptoms · ${s.causes} cause paths`;
  }

  function renderCategories(filter = "") {
    const q = filter.trim().toLowerCase();
    const matchedCatIds = q
      ? new Set(
          searchIndex
            .filter((item) => item.haystack.includes(q))
            .map((item) => item.catId)
        )
      : null;

    const cats = matchedCatIds
      ? TRIAGE_DATA.filter((c) => matchedCatIds.has(c.id))
      : TRIAGE_DATA;

    els.categoryGrid.innerHTML = cats
      .map(
        (cat) => `
        <button type="button" class="category-card" data-category="${cat.id}" role="listitem">
          <span class="category-icon" aria-hidden="true">${cat.icon}</span>
          <h3>${cat.title}</h3>
          <p>${cat.description}</p>
          <span class="category-count">${cat.symptoms.length} symptoms</span>
        </button>
      `
      )
      .join("");

    renderSearchResults(q);
  }

  function renderSearchResults(q) {
    if (!els.searchResults) return;
    if (!q) {
      els.searchResults.hidden = true;
      els.searchResults.innerHTML = "";
      return;
    }

    const hits = searchIndex.filter((item) => item.haystack.includes(q)).slice(0, 12);
    if (!hits.length) {
      els.searchResults.hidden = false;
      els.searchResults.innerHTML = `<p class="search-empty">No matches. Try "salty", "mushy", "dry chicken", or "sauce split".</p>`;
      return;
    }

    els.searchResults.hidden = false;
    els.searchResults.innerHTML = `
      <p class="search-label">Jump to symptom</p>
      <div class="search-hit-list">
        ${hits
          .map(
            (hit) => `
          <button type="button" class="search-hit" data-jump-cat="${hit.catId}" data-jump-symptom="${hit.symptomId}">
            <span class="search-hit-label">${hit.label}</span>
            <span class="search-hit-cat">${hit.category}</span>
          </button>
        `
          )
          .join("")}
      </div>
    `;
  }

  function startCategory(categoryId, symptomId = null) {
    setNav("triage");
    state.category = TRIAGE_DATA.find((c) => c.id === categoryId);
    state.symptom = symptomId;
    state.variant = null;
    state.causeIndex = 0;

    els.breadcrumbCategory.textContent = state.category.title;

    if (symptomId) {
      const symptom = getCurrentSymptom();
      if (symptom.variants && symptom.variants.length) {
        renderVariantStep();
      } else {
        selectSymptom(symptomId, true);
      }
      showView("triage");
      return;
    }

    renderSymptomStep();
    setProgress(1);
    showTriageStep("symptom");
    showView("triage");
  }

  function renderSymptomStep() {
    els.symptomTitle.textContent = "What's going on?";
    els.symptomHint.textContent = state.category.hint;
    els.btnBackSymptom.hidden = true;

    els.symptomOptions.innerHTML = state.category.symptoms
      .map(
        (s) => `
          <button type="button" class="option-btn" data-symptom="${s.id}">
            <span class="option-label">${s.label}</span>
            ${s.variants ? `<span class="option-meta">${s.variants.length} branches</span>` : ""}
          </button>
        `
      )
      .join("");
  }

  function renderVariantStep() {
    const symptom = getCurrentSymptom();
    els.symptomTitle.textContent = "Narrow it down";
    els.symptomHint.textContent = `Same symptom, different fixes depending on what you're making.`;
    els.btnBackSymptom.hidden = false;

    els.symptomOptions.innerHTML = symptom.variants
      .map(
        (v) => `
          <button type="button" class="option-btn" data-variant="${v.id}">
            ${v.label}
          </button>
        `
      )
      .join("");
    setProgress(1);
    showTriageStep("symptom");
  }

  function selectSymptom(symptomId, skipVariantCheck = false) {
    state.symptom = symptomId;
    state.variant = null;
    state.causeIndex = 0;

    const symptom = getCurrentSymptom();
    if (!skipVariantCheck && symptom.variants && symptom.variants.length) {
      renderVariantStep();
      return;
    }

    renderCause();
    setProgress(2);
    showTriageStep("cause");
  }

  function selectVariant(variantId) {
    state.variant = variantId;
    state.causeIndex = 0;
    renderCause();
    setProgress(2);
    showTriageStep("cause");
  }

  function renderCause() {
    const cause = getCurrentCause();
    const causes = getActiveCauses();
    const badge = likelihoodLabel(cause.likelihood);

    els.causeCard.innerHTML = `
      <div class="cause-header">
        <h3>${cause.title}</h3>
        ${badge ? `<span class="likelihood-badge">${badge}</span>` : ""}
      </div>
      <p>${cause.explanation}</p>
      <p class="cause-counter">Cause ${state.causeIndex + 1} of ${causes.length}</p>
    `;

    els.btnAltCause.hidden = causes.length <= 1;
    els.btnAltCause.textContent =
      state.causeIndex < causes.length - 1
        ? "Doesn't fit — try next cause"
        : "Back to first cause";
  }

  function cycleCause() {
    const causes = getActiveCauses();
    state.causeIndex = (state.causeIndex + 1) % causes.length;
    renderCause();
  }

  function renderFix() {
    const cause = getCurrentCause();

    els.fixCard.innerHTML = `
      <ol class="fix-steps">
        ${cause.fixes.map((f) => `<li>${f}</li>`).join("")}
      </ol>
      ${cause.tip ? `<div class="fix-tip"><strong>Next time:</strong> ${cause.tip}</div>` : ""}
      ${cause.ifNotFixed ? `<div class="fix-escalate"><strong>Still broken?</strong> ${cause.ifNotFixed}</div>` : ""}
    `;

    setProgress(3);
    showTriageStep("fix");
  }

  function goHome() {
    state.category = null;
    state.symptom = null;
    state.variant = null;
    state.causeIndex = 0;
    setNav("triage");
    showView("home");
  }

  function setNav(mode) {
    els.navBtns.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.nav === mode);
    });
  }

  function showLearn() {
    setNav("learn");
    renderLessonGrid();
    showView("learn");
  }

  function renderLessonGrid() {
    if (!els.lessonGrid) return;
    els.lessonGrid.innerHTML = LESSONS_DATA.map(
      (lesson) => `
        <button type="button" class="lesson-card" data-lesson="${lesson.id}" role="listitem">
          <span class="lesson-icon" aria-hidden="true">${lesson.icon}</span>
          <h3>${lesson.title}</h3>
          <p>${lesson.subtitle}</p>
          <span class="lesson-meta">${lesson.readTime}</span>
        </button>
      `
    ).join("");
  }

  function openLesson(lessonId) {
    const lesson = LESSONS_DATA.find((l) => l.id === lessonId);
    if (!lesson || !els.lessonArticle) return;

    setNav("learn");
    els.breadcrumbLesson.textContent = lesson.title;

    const sectionsHtml = lesson.sections
      .map((sec) => {
        let html = "";
        if (sec.heading) html += `<h2>${sec.heading}</h2>`;
        if (sec.body) html += sec.body;
        if (sec.checklist) {
          html += `<ul class="lesson-checklist">${sec.checklist.map((item) => `<li>${item}</li>`).join("")}</ul>`;
        }
        return `<section class="lesson-section">${html}</section>`;
      })
      .join("");

    els.lessonArticle.innerHTML = `
      <header class="lesson-header">
        <span class="lesson-header-icon" aria-hidden="true">${lesson.icon}</span>
        <div>
          <h1>${lesson.title}</h1>
          <p class="lesson-tagline">${lesson.tagline}</p>
          <p class="lesson-read-time">${lesson.readTime} read</p>
        </div>
      </header>
      ${sectionsHtml}
    `;

    showView("lesson");
  }

  function restart() {
    if (!state.category) return goHome();
    startCategory(state.category.id);
  }

  function backToSymptoms() {
    state.variant = null;
    state.symptom = null;
    state.causeIndex = 0;
    renderSymptomStep();
    setProgress(1);
    showTriageStep("symptom");
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
    const jump = e.target.closest("[data-jump-cat]");
    if (jump) {
      startCategory(jump.dataset.jumpCat, jump.dataset.jumpSymptom);
      return;
    }

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

    const variantBtn = e.target.closest("[data-variant]");
    if (variantBtn) {
      selectVariant(variantBtn.dataset.variant);
      return;
    }

    const lessonBtn = e.target.closest("[data-lesson]");
    if (lessonBtn) {
      openLesson(lessonBtn.dataset.lesson);
      return;
    }

    const navBtn = e.target.closest("[data-nav]");
    if (navBtn) {
      if (navBtn.dataset.nav === "learn") showLearn();
      if (navBtn.dataset.nav === "triage") goHome();
      return;
    }

    const action = e.target.closest("[data-action]");
    if (action) {
      if (action.dataset.action === "home") goHome();
      if (action.dataset.action === "learn") showLearn();
      if (action.dataset.action === "restart") restart();
    }
  });

  if (els.searchInput) {
    els.searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      renderCategories(state.searchQuery);
    });
  }

  els.btnAltCause.addEventListener("click", cycleCause);
  els.btnToFix.addEventListener("click", renderFix);
  els.btnStillStuck.addEventListener("click", scrollToRescue);
  if (els.btnBackSymptom) els.btnBackSymptom.addEventListener("click", backToSymptoms);

  renderStats();
  renderCategories();
})();