(function () {
  const QUICK_START = [
    { catId: "flavor", symptomId: "too-salty", label: "Too salty" },
    { catId: "grains", symptomId: "rice-mushy", label: "Mushy rice" },
    { catId: "sauces", symptomId: "split", label: "Sauce split" },
    { catId: "meat", symptomId: "dry-chicken", label: "Dry chicken" },
    { catId: "heat-pan", symptomId: "stuck", label: "Stuck to pan" },
    { catId: "eggs", symptomId: "rubbery", label: "Rubbery eggs" },
    { catId: "pasta", symptomId: "mushy", label: "Mushy pasta" },
    { catId: "baking", symptomId: "dense-cake", label: "Dense cake" }
  ];

  const state = {
    category: null,
    symptom: null,
    variant: null,
    causeIndex: 0,
    searchQuery: "",
    suppressHash: false
  };

  const views = {
    home: document.getElementById("view-home"),
    triage: document.getElementById("view-triage"),
    learn: document.getElementById("view-learn"),
    lesson: document.getElementById("view-lesson")
  };

  const els = {
    categoryGrid: document.getElementById("category-grid"),
    quickStartChips: document.getElementById("quick-start-chips"),
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
    rescueNote: document.getElementById("rescue-note"),
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

  function updateHash() {
    if (state.suppressHash) return;

    let hash = "#/";
    if (views.lesson.classList.contains("active") && els.breadcrumbLesson.textContent) {
      const lesson = LESSONS_DATA.find((l) => l.title === els.breadcrumbLesson.textContent);
      if (lesson) hash = `#/lesson/${lesson.id}`;
    } else if (views.learn.classList.contains("active")) {
      hash = "#/learn";
    } else if (views.triage.classList.contains("active") && state.category) {
      hash = `#/triage/${state.category.id}`;
      if (state.symptom) {
        hash += `/${state.symptom}`;
        if (state.variant) hash += `/${state.variant}`;
        const step = els.steps.fix.classList.contains("active")
          ? "fix"
          : els.steps.cause.classList.contains("active")
            ? "cause"
            : "symptom";
        if (step !== "symptom") hash += `/${step}`;
        if (step === "cause" || step === "fix") hash += `/${state.causeIndex}`;
      }
    }

    if (location.hash !== hash) {
      history.replaceState(null, "", hash);
    }
  }

  function parseHash() {
    const raw = location.hash.replace(/^#\/?/, "");
    if (!raw) return { view: "home" };

    const parts = raw.split("/");
    const route = parts[0];

    if (route === "learn") return { view: "learn" };
    if (route === "lesson" && parts[1]) return { view: "lesson", lessonId: parts[1] };
    if (route === "triage" && parts[1]) {
      return {
        view: "triage",
        catId: parts[1],
        symptomId: parts[2] || null,
        variantId: parts[3] && !["symptom", "cause", "fix"].includes(parts[3]) ? parts[3] : null,
        step: ["symptom", "cause", "fix"].includes(parts[3]) ? parts[3] : parts[4] || null,
        causeIndex: Number(parts[4] || parts[5]) || 0
      };
    }
    return { view: "home" };
  }

  function applyRoute(route) {
    state.suppressHash = true;

    if (route.view === "lesson" && route.lessonId) {
      openLesson(route.lessonId);
    } else if (route.view === "learn") {
      showLearn();
    } else if (route.view === "triage" && route.catId) {
      startCategory(route.catId, route.symptomId || null, {
        variantId: route.variantId,
        step: route.step,
        causeIndex: route.causeIndex
      });
    } else {
      goHome();
    }

    state.suppressHash = false;
  }

  function showView(name) {
    Object.values(views).forEach((v) => {
      v.classList.remove("active");
      v.hidden = true;
    });
    views[name].classList.add("active");
    views[name].hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
    updateHash();
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
    updateHash();
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
    els.statsBar.innerHTML = `
      <span class="stat-pill">${s.categories} categories</span>
      <span class="stat-pill">${s.symptoms} symptoms</span>
      <span class="stat-pill">${s.causes} fixes</span>
    `;
  }

  function renderQuickStart() {
    if (!els.quickStartChips) return;
    els.quickStartChips.innerHTML = QUICK_START.map(
      (item) => `
        <button type="button" class="quick-chip" data-jump-cat="${item.catId}" data-jump-symptom="${item.symptomId}" role="listitem">
          ${item.label}
        </button>
      `
    ).join("");
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
          <span class="card-icon-wrap category-icon-wrap" aria-hidden="true">${cat.icon}</span>
          <h3>${cat.title}</h3>
          <p>${cat.description}</p>
          <span class="card-footer">
            <span class="category-count">${cat.symptoms.length} symptoms</span>
            <span class="card-arrow" aria-hidden="true">→</span>
          </span>
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

  function startCategory(categoryId, symptomId = null, opts = {}) {
    const { variantId = null, step = null, causeIndex = 0 } = opts;

    setNav("triage");
    state.category = TRIAGE_DATA.find((c) => c.id === categoryId);
    if (!state.category) return goHome();

    state.symptom = symptomId;
    state.variant = variantId;
    state.causeIndex = causeIndex;

    els.breadcrumbCategory.textContent = state.category.title;

    if (symptomId) {
      const symptom = getCurrentSymptom();
      if (!symptom) {
        state.symptom = null;
        renderSymptomStep();
        setProgress(1);
        showTriageStep("symptom");
        showView("triage");
        return;
      }

      if (variantId) {
        selectVariant(variantId);
        if (step === "fix") renderFix();
        else if (step === "cause") renderCause();
        showView("triage");
        return;
      }

      if (symptom.variants && symptom.variants.length && !variantId) {
        renderVariantStep();
        showView("triage");
        return;
      }

      selectSymptom(symptomId, true);
      if (step === "fix") renderFix();
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
    if (!cause) {
      backToSymptoms();
      return;
    }
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
    if (!cause) return;

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
          <span class="card-icon-wrap lesson-icon-wrap" aria-hidden="true">${lesson.icon}</span>
          <h3>${lesson.title}</h3>
          <p>${lesson.subtitle}</p>
          <span class="card-footer">
            <span class="lesson-meta">${lesson.readTime}</span>
            <span class="card-arrow" aria-hidden="true">→</span>
          </span>
        </button>
      `
    ).join("");
  }

  function renderChecklist(sec, lessonId, sectionIndex) {
    const listClass = sec.interactive ? "lesson-checklist interactive" : "lesson-checklist";
    const storageKey = `cooktriage-check-${lessonId}-${sectionIndex}`;

    if (sec.interactive) {
      let saved = [];
      try {
        saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
      } catch (_) {
        saved = [];
      }

      return `
        <ul class="${listClass}" data-checklist-key="${storageKey}">
          ${sec.checklist
            .map((item, i) => {
              const checked = saved.includes(i) ? "checked" : "";
              return `
                <li class="${checked ? "done" : ""}">
                  <label class="checklist-label">
                    <input type="checkbox" class="checklist-input" data-index="${i}" ${checked}>
                    <span>${item}</span>
                  </label>
                </li>
              `;
            })
            .join("")}
        </ul>
        <p class="checklist-progress" data-progress-for="${storageKey}"></p>
      `;
    }

    return `<ul class="${listClass}">${sec.checklist.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  }

  function updateChecklistProgress(list) {
    const key = list.dataset.checklistKey;
    const progressEl = document.querySelector(`[data-progress-for="${key}"]`);
    if (!progressEl) return;
    const total = list.querySelectorAll(".checklist-input").length;
    const done = list.querySelectorAll(".checklist-input:checked").length;
    progressEl.textContent = done === total ? "All set — you're ready to cook." : `${done} of ${total} checked`;
  }

  function renderLessonSection(sec, lessonId, sectionIndex) {
    let html = "";
    if (sec.heading) {
      html += `<h2>${sec.heading}`;
      if (sec.science) html += ` <span class="science-badge">The why</span>`;
      html += `</h2>`;
    }
    if (sec.body) html += sec.body;
    if (sec.ingredients?.length) {
      html += `
        <div class="lesson-ingredients">
          <ul>${sec.ingredients.map((item) => `<li>${item}</li>`).join("")}</ul>
          ${sec.ingredientsNote ? `<p class="ingredients-note">${sec.ingredientsNote}</p>` : ""}
        </div>
      `;
    }
    if (sec.walkthrough?.length) {
      html += `
        <ol class="lesson-walkthrough">
          ${sec.walkthrough
            .map(
              (step, idx) => `
            <li>
              <span class="walkthrough-title">${step.title || `Step ${idx + 1}`}</span>
              <span class="walkthrough-text">${step.text}</span>
              ${step.watch ? `<span class="step-watch">Watch for: ${step.watch}</span>` : ""}
            </li>
          `
            )
            .join("")}
        </ol>
      `;
    }
    if (sec.checklist) html += renderChecklist(sec, lessonId, sectionIndex);
    return html;
  }

  function openLesson(lessonId) {
    const lesson = LESSONS_DATA.find((l) => l.id === lessonId);
    if (!lesson || !els.lessonArticle) return;

    setNav("learn");
    els.breadcrumbLesson.textContent = lesson.title;

    const sectionsHtml = lesson.sections
      .map((sec, i) => {
        const sectionClass = sec.science ? "lesson-section lesson-science" : "lesson-section";
        return `<section class="${sectionClass}">${renderLessonSection(sec, lesson.id, i)}</section>`;
      })
      .join("");

    const relatedHtml = lesson.relatedTriage?.length
      ? `
        <section class="lesson-related">
          <h2>Related triage paths</h2>
          <p class="lesson-related-hint">Jump straight to fixes for problems this lesson helps prevent.</p>
          <div class="lesson-related-links">
            ${lesson.relatedTriage
              .map(
                (link) => `
              <button type="button" class="related-triage-btn" data-jump-cat="${link.catId}" data-jump-symptom="${link.symptomId}">
                ${link.label} →
              </button>
            `
              )
              .join("")}
          </div>
        </section>
      `
      : "";

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
      ${relatedHtml}
    `;

    els.lessonArticle.querySelectorAll(".lesson-checklist.interactive").forEach((list) => {
      updateChecklistProgress(list);
    });

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

  function setupRescueCta() {
    const link = els.rescueLink?.href || "";
    const isPlaceholder = link.includes("placeholder");
    if (els.rescueNote) els.rescueNote.hidden = !isPlaceholder;
    if (isPlaceholder && els.rescueLink) {
      els.rescueLink.addEventListener("click", (e) => {
        e.preventDefault();
        els.rescueNote.hidden = false;
        els.rescueNote.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    }
  }

  function scrollToRescue() {
    const link = els.rescueLink.href;
    if (link && !link.includes("placeholder")) {
      window.open(link, "_blank", "noopener");
      return;
    }
    goHome();
    const rescueCard = document.querySelector(".rescue-card");
    if (rescueCard) rescueCard.scrollIntoView({ behavior: "smooth", block: "center" });
    if (els.rescueNote) els.rescueNote.hidden = false;
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

  document.addEventListener("change", (e) => {
    const input = e.target.closest(".checklist-input");
    if (!input) return;

    const list = input.closest(".lesson-checklist");
    const key = list.dataset.checklistKey;
    const items = [...list.querySelectorAll(".checklist-input")];
    const saved = items.map((cb, i) => (cb.checked ? i : null)).filter((i) => i !== null);

    input.closest("li").classList.toggle("done", input.checked);
    localStorage.setItem(key, JSON.stringify(saved));
    updateChecklistProgress(list);
  });

  if (els.searchInput) {
    els.searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      renderCategories(state.searchQuery);
    });
  }

  window.addEventListener("hashchange", () => {
    applyRoute(parseHash());
  });

  els.btnAltCause.addEventListener("click", cycleCause);
  els.btnToFix.addEventListener("click", renderFix);
  els.btnStillStuck.addEventListener("click", scrollToRescue);
  if (els.btnBackSymptom) els.btnBackSymptom.addEventListener("click", backToSymptoms);

  setupRescueCta();
  renderStats();
  renderQuickStart();
  renderCategories();

  if (location.hash) {
    applyRoute(parseHash());
  } else {
    updateHash();
  }
})();