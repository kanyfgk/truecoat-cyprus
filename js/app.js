"use strict";

document.documentElement.classList.add("js-enabled");

document.addEventListener("DOMContentLoaded", () => {
  initialiseHeader();
  initialiseMobileNavigation();
  initialiseCurrentYear();
  initialiseRevealAnimations();
  initialiseSmoothAnchors();
  initialiseSurveyForm();
});

function initialiseHeader() {
  const header = document.querySelector("[data-header]");

  if (!header) return;

  let previousScrollPosition = window.scrollY;
  let ticking = false;

  const updateHeader = () => {
    const currentScrollPosition = window.scrollY;
    const shouldFixHeader = currentScrollPosition > 80;

    header.classList.toggle("is-fixed", shouldFixHeader);
    document.body.classList.toggle("has-fixed-header", shouldFixHeader);

    if (shouldFixHeader && currentScrollPosition > previousScrollPosition && currentScrollPosition > 300) {
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
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
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
    const menuIsOpen = menuButton.getAttribute("aria-expanded") === "true";

    if (menuIsOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1080) {
      closeMenu();
    }
  });
}

function initialiseCurrentYear() {
  const yearElements = document.querySelectorAll("[data-current-year]");
  const currentYear = new Date().getFullYear();

  yearElements.forEach((element) => {
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

  const revealElements = document.querySelectorAll(revealSelectors.join(","));

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
      root: null,
      threshold: 0.12,
      rootMargin: "0px 0px -6% 0px"
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
}

function initialiseSmoothAnchors() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId) return;

      const target = document.querySelector(targetId);

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
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth"
      });

      if (!target.hasAttribute("tabindex")) {
        target.setAttribute("tabindex", "-1");
      }

      window.setTimeout(() => {
        target.focus({ preventScroll: true });
      }, 500);
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

      const firstService = form.querySelector('input[name="Service"]');

      if (firstService) {
        firstService.focus();
      }

      return;
    }

    const formData = new FormData(form);

    const projectDetails = {
      name: cleanFormValue(formData.get("Name")),
      contact: cleanFormValue(formData.get("Contact number")),
      email: cleanFormValue(formData.get("Email")),
      region: cleanFormValue(formData.get("Region")),
      location: cleanFormValue(formData.get("Town or area")),
      property: cleanFormValue(formData.get("Property type")),
      furnished: cleanFormValue(formData.get("Furnished property")),
      timing: cleanFormValue(formData.get("Preferred timing")),
      message: cleanFormValue(formData.get("Project details")),
      services: selectedServices.join(", ")
    };

    const subject = encodeURIComponent(
      `TRUECOAT project request — ${projectDetails.name}`
    );

    const body = encodeURIComponent(
      [
        "TRUECOAT PROJECT REQUEST",
        "",
        `Name: ${projectDetails.name}`,
        `Phone / WhatsApp: ${projectDetails.contact}`,
        `Email: ${projectDetails.email}`,
        `Region: ${projectDetails.region}`,
        `Town or area: ${projectDetails.location}`,
        `Property type: ${projectDetails.property}`,
        `Services: ${projectDetails.services}`,
        `Furnished property: ${projectDetails.furnished}`,
        `Preferred timing: ${projectDetails.timing}`,
        "",
        "PROJECT DETAILS",
        projectDetails.message
      ].join("\n")
    );

    if (status) {
      status.textContent = "Opening your email app with the project details…";
    }

    window.location.href = `mailto:hello@truecoat.co?subject=${subject}&body=${body}`;
  });

  form.addEventListener("input", () => {
    if (status) {
      status.textContent = "";
    }
  });
}

function cleanFormValue(value) {
  return typeof value === "string" ? value.trim() : "";
}
