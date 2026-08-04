"use strict";

document.documentElement.classList.add("js-enabled");

const TRUECOAT_IMAGE_ROOT = "https://images.unsplash.com/";

const TRUECOAT_IMAGES = {
  home: `${TRUECOAT_IMAGE_ROOT}photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=88`,
  painting: `${TRUECOAT_IMAGE_ROOT}photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1600&q=88`,
  painter: `${TRUECOAT_IMAGE_ROOT}photo-1595814433015-e6f5ce69614e?auto=format&fit=crop&w=1600&q=88`,
  exterior: `${TRUECOAT_IMAGE_ROOT}photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1600&q=88`,
  preparation: `${TRUECOAT_IMAGE_ROOT}photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1600&q=88`,
  protected: `${TRUECOAT_IMAGE_ROOT}photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=88`,

  mediterranean: `${TRUECOAT_IMAGE_ROOT}photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=88`,
  mediterraneanDetail: `${TRUECOAT_IMAGE_ROOT}photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=88`,
  mediterraneanEvening: `${TRUECOAT_IMAGE_ROOT}photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=88`,

  modern: `${TRUECOAT_IMAGE_ROOT}photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=88`,
  modernDetail: `${TRUECOAT_IMAGE_ROOT}photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=88`,
  modernEvening: `${TRUECOAT_IMAGE_ROOT}photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=88`,

  organic: `${TRUECOAT_IMAGE_ROOT}photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=88`,
  organicDetail: `${TRUECOAT_IMAGE_ROOT}photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=88`,
  organicEvening: `${TRUECOAT_IMAGE_ROOT}photo-1618220179428-22790b461013?auto=format&fit=crop&w=1600&q=88`,

  stone: `${TRUECOAT_IMAGE_ROOT}photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=88`,
  timber: `${TRUECOAT_IMAGE_ROOT}photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=88`,
  linen: `${TRUECOAT_IMAGE_ROOT}photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=88`,
  ceramic: `${TRUECOAT_IMAGE_ROOT}photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=88`,
  lighting: `${TRUECOAT_IMAGE_ROOT}photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1200&q=88`,
  furniture: `${TRUECOAT_IMAGE_ROOT}photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=88`,
  table: `${TRUECOAT_IMAGE_ROOT}photo-1532372320572-cda25653a694?auto=format&fit=crop&w=1200&q=88`,
  textile: `${TRUECOAT_IMAGE_ROOT}photo-1615874694520-474822394e73?auto=format&fit=crop&w=1200&q=88`,
  regionCyprus: `${TRUECOAT_IMAGE_ROOT}photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=88`,
  regionUK: `${TRUECOAT_IMAGE_ROOT}photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1600&q=88`
};

document.addEventListener("DOMContentLoaded", () => {
  initialiseImageSources();
  initialiseHeader();
  initialiseMobileNavigation();
  initialiseCurrentYear();
  initialiseRevealAnimations();
  initialiseSmoothAnchors();
  initialiseSurveyForm();
});

function initialiseImageSources() {
  const images = document.querySelectorAll("img");

  images.forEach((image) => {
    const source = image.getAttribute("src") || "";
    const filename = source.split("/").pop().toLowerCase();

    if (filename === "home-hero.jpg") {
      image.src = "images/hero-living-room.jpg";
      installImageFallback(image, TRUECOAT_IMAGES.home);
      return;
    }

    const replacement = findReplacementImage(filename);

    if (!replacement) return;

    image.src = replacement;
    image.referrerPolicy = "no-referrer";
  });
}

function findReplacementImage(filename) {
  if (
    filename.includes("painting-hero") ||
    filename.includes("service-painting") ||
    filename.includes("painting-interiors") ||
    filename.includes("difference-craft")
  ) {
    return TRUECOAT_IMAGES.painting;
  }

  if (
    filename.includes("painting-detail") ||
    filename.includes("paint-finish") ||
    filename.includes("material-paint")
  ) {
    return TRUECOAT_IMAGES.painter;
  }

  if (
    filename.includes("painting-exteriors") ||
    filename.includes("region-cyprus")
  ) {
    return filename.includes("region")
      ? TRUECOAT_IMAGES.regionCyprus
      : TRUECOAT_IMAGES.exterior;
  }

  if (
    filename.includes("painting-repairs") ||
    filename.includes("painting-tools") ||
    filename.includes("preparation")
  ) {
    return TRUECOAT_IMAGES.preparation;
  }

  if (
    filename.includes("furnished") ||
    filename.includes("rental-refresh") ||
    filename.includes("existing-home")
  ) {
    return TRUECOAT_IMAGES.protected;
  }

  if (filename.includes("region-uk")) {
    return TRUECOAT_IMAGES.regionUK;
  }

  if (
    filename.includes("project-mediterranean") ||
    filename.includes("mediterranean-living") ||
    filename.includes("mediterranean-adaptation")
  ) {
    return TRUECOAT_IMAGES.mediterranean;
  }

  if (
    filename.includes("mediterranean-detail") ||
    filename.includes("mediterranean-product-sofa") ||
    filename.includes("mediterranean-product-console")
  ) {
    return TRUECOAT_IMAGES.mediterraneanDetail;
  }

  if (filename.includes("mediterranean-evening")) {
    return TRUECOAT_IMAGES.mediterraneanEvening;
  }

  if (
    filename.includes("project-modern") ||
    filename.includes("modern-living") ||
    filename.includes("modern-adaptation")
  ) {
    return TRUECOAT_IMAGES.modern;
  }

  if (
    filename.includes("modern-detail") ||
    filename.includes("modern-product-sofa") ||
    filename.includes("modern-product-storage")
  ) {
    return TRUECOAT_IMAGES.modernDetail;
  }

  if (filename.includes("modern-evening")) {
    return TRUECOAT_IMAGES.modernEvening;
  }

  if (
    filename.includes("project-organic") ||
    filename.includes("organic-living") ||
    filename.includes("organic-adaptation")
  ) {
    return TRUECOAT_IMAGES.organic;
  }

  if (
    filename.includes("organic-detail") ||
    filename.includes("organic-product-sofa") ||
    filename.includes("organic-product-rug")
  ) {
    return TRUECOAT_IMAGES.organicDetail;
  }

  if (filename.includes("organic-evening")) {
    return TRUECOAT_IMAGES.organicEvening;
  }

  if (
    filename.includes("stone") ||
    filename.includes("limestone") ||
    filename.includes("product-table")
  ) {
    return TRUECOAT_IMAGES.stone;
  }

  if (
    filename.includes("timber") ||
    filename.includes("oak") ||
    filename.includes("console") ||
    filename.includes("storage")
  ) {
    return TRUECOAT_IMAGES.timber;
  }

  if (
    filename.includes("linen") ||
    filename.includes("wool") ||
    filename.includes("fibre") ||
    filename.includes("textile") ||
    filename.includes("rug")
  ) {
    return filename.includes("textile") || filename.includes("rug")
      ? TRUECOAT_IMAGES.textile
      : TRUECOAT_IMAGES.linen;
  }

  if (filename.includes("ceramic")) {
    return TRUECOAT_IMAGES.ceramic;
  }

  if (
    filename.includes("light") ||
    filename.includes("atmospheres-budget")
  ) {
    return TRUECOAT_IMAGES.lighting;
  }

  if (
    filename.includes("sofa") ||
    filename.includes("chair") ||
    filename.includes("furniture")
  ) {
    return TRUECOAT_IMAGES.furniture;
  }

  if (
    filename.includes("home-material-study") ||
    filename.includes("projects-planning") ||
    filename.includes("adaptation-detail")
  ) {
    return TRUECOAT_IMAGES.table;
  }

  if (
    filename.includes("service-atmospheres") ||
    filename.includes("atmospheres-hero") ||
    filename.includes("difference-hero") ||
    filename.includes("difference-restraint") ||
    filename.includes("home-regions") ||
    filename.includes("projects-existing")
  ) {
    return TRUECOAT_IMAGES.home;
  }

  return TRUECOAT_IMAGES.home;
}

function installImageFallback(image, fallbackSource) {
  image.addEventListener(
    "error",
    () => {
      if (image.src === fallbackSource) return;
      image.src = fallbackSource;
    },
    { once: true }
  );
}

function initialiseHeader() {
  const header = document.querySelector("[data-header]");

  if (!header) return;

  let previousScrollPosition = window.scrollY;
  let ticking = false;

  const updateHeader = () => {
    const currentScrollPosition = window.scrollY;
    const shouldFixHeader = currentScrollPosition > 80;

    header.classList.toggle("is-fixed", shouldFixHeader);

    if (
      shouldFixHeader &&
      currentScrollPosition > previousScrollPosition &&
      currentScrollPosition > 300
    ) {
      header.style.transform = "translateY(-100%)";
    } else {
      header.style.transform = "translateY(0)";
    }

    previousScrollPosition = currentScrollPosition;
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;

      window.requestAnimationFrame(updateHeader);
      ticking = true;
    },
    { passive: true }
  );

  updateHeader();
}

function initialiseMobileNavigation() {
  const menuButton = document.querySelector("[data-menu-toggle]");
  const navigation = document.querySelector("[data-navigation]");

  if (!menuButton || !navigation) return;

  const openMenu = () => {
    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "Close navigation");
    navigation.classList.add("is-open");
    document.body.classList.add("menu-open");
  };

  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    navigation.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  menuButton.addEventListener("click", () => {
    const menuIsOpen =
      menuButton.getAttribute("aria-expanded") === "true";

    menuIsOpen ? closeMenu() : openMenu();
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1080) closeMenu();
  });
}

function initialiseCurrentYear() {
  const currentYear = new Date().getFullYear();

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = currentYear;
  });
}

function initialiseRevealAnimations() {
  const revealSelectors = [
    ".section-heading",
    ".home-introduction__heading",
    ".home-introduction__body",
    ".service-feature",
    ".home-proof__statement",
    ".home-proof__facts",
    ".project-card",
    ".home-process__intro",
    ".process-list li",
    ".home-regions__panel",
    ".home-journal__visual",
    ".home-cta__content",
    ".painting-hero__copy",
    ".painting-hero__visual",
    ".painting-standard__heading",
    ".painting-standard__content",
    ".painting-service",
    ".painting-detail__gallery",
    ".painting-detail__content",
    ".painting-colour__content",
    ".painting-colour__palette",
    ".painting-process__steps li",
    ".painting-scope__grid article",
    ".painting-furnished__content",
    ".difference-hero__heading",
    ".difference-hero__summary",
    ".difference-belief__content",
    ".difference-pillar",
    ".difference-comparison__row",
    ".difference-experience__content",
    ".difference-materials__content",
    ".difference-materials__study",
    ".difference-levels__grid article",
    ".difference-restraint__content",
    ".difference-promise__heading",
    ".difference-promise__points",
    ".atmospheres-intro__heading",
    ".atmospheres-intro__content",
    ".atmosphere-entry",
    ".atmospheres-system__layers article",
    ".atmospheres-adaptation__content",
    ".atmospheres-included__grid article",
    ".atmospheres-journey__steps li",
    ".atmospheres-budget__content",
    ".projects-hero__content",
    ".projects-hero__aside",
    ".projects-featured__information",
    ".projects-grid__project",
    ".projects-philosophy__content",
    ".projects-comparison__row",
    ".projects-detail__content",
    ".projects-existing__content",
    ".projects-levels__options article",
    ".areas-hero__content",
    ".areas-hero__visual",
    ".areas-region",
    ".areas-project-types__grid article",
    ".areas-furnished__content",
    ".areas-survey-info__intro",
    ".areas-survey-info__steps li",
    ".survey-request__heading",
    ".survey-form",
    ".project-overview__title",
    ".project-overview__content",
    ".project-gallery figure",
    ".project-palette__content",
    ".project-palette__swatches",
    ".project-paint__content",
    ".project-materials__grid article",
    ".product-direction",
    ".project-lighting__content",
    ".project-lighting__visual",
    ".project-investment__options article",
    ".project-adaptation__content",
    ".project-navigation__links",
    ".project-cta__content"
  ];

  const revealElements = document.querySelectorAll(
    revealSelectors.join(",")
  );

  if (!revealElements.length) return;

  revealElements.forEach((element) => {
    element.setAttribute("data-reveal", "");
  });

  if (
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });

    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -6% 0px"
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
}

function initialiseSmoothAnchors() {
  const anchorLinks = document.querySelectorAll(
    'a[href^="#"]:not([href="#"])'
  );

  anchorLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      const target = targetId
        ? document.querySelector(targetId)
        : null;

      if (!target) return;

      event.preventDefault();

      const header = document.querySelector("[data-header]");
      const headerHeight = header ? header.offsetHeight : 0;
      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches
          ? "auto"
          : "smooth"
      });
    });
  });
}

function initialiseSurveyForm() {
  const form = document.querySelector("[data-survey-form]");
  const status = document.querySelector("[data-form-status]");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();

      if (status) {
        status.textContent = "Please complete all required fields.";
      }

      return;
    }

    const selectedServices = Array.from(
      form.querySelectorAll('input[name="Service"]:checked')
    ).map((input) => input.value);

    if (!selectedServices.length) {
      if (status) {
        status.textContent = "Please select at least one service.";
      }

      const firstService = form.querySelector(
        'input[name="Service"]'
      );

      if (firstService) firstService.focus();
      return;
    }

    const formData = new FormData(form);
    const name = cleanFormValue(formData.get("Name"));

    const subject = encodeURIComponent(
      `TRUECOAT project request — ${name}`
    );

    const body = encodeURIComponent(
      [
        "TRUECOAT PROJECT REQUEST",
        "",
        `Name: ${name}`,
        `Phone / WhatsApp: ${cleanFormValue(
          formData.get("Contact number")
        )}`,
        `Email: ${cleanFormValue(formData.get("Email"))}`,
        `Region: ${cleanFormValue(formData.get("Region"))}`,
        `Town or area: ${cleanFormValue(
          formData.get("Town or area")
        )}`,
        `Property type: ${cleanFormValue(
          formData.get("Property type")
        )}`,
        `Services: ${selectedServices.join(", ")}`,
        `Furnished property: ${cleanFormValue(
          formData.get("Furnished property")
        )}`,
        `Preferred timing: ${cleanFormValue(
          formData.get("Preferred timing")
        )}`,
        "",
        "PROJECT DETAILS",
        cleanFormValue(formData.get("Project details"))
      ].join("\n")
    );

    if (status) {
      status.textContent =
        "Opening your email app with the project details…";
    }

    window.location.href =
      `mailto:hello@truecoat.co?subject=${subject}&body=${body}`;
  });

  form.addEventListener("input", () => {
    if (status) status.textContent = "";
  });
}

function cleanFormValue(value) {
  return typeof value === "string" ? value.trim() : "";
}
