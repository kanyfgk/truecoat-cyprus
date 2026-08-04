"use strict";

document.documentElement.classList.add("js-enabled");

loadAtmosphereStyles();

const TRUECOAT_STORAGE_KEY = "truecoat-atmosphere-selections";
const TRUECOAT_REQUEST_EMAIL = "hello@truecoat.co";
const TRUECOAT_IMAGE_ROOT = "https://images.unsplash.com/";

const TRUECOAT_IMAGES = {
  home:
    `${TRUECOAT_IMAGE_ROOT}photo-1600210492486-724fe5c67fb0` +
    "?auto=format&fit=crop&w=1800&q=88",

  painting:
    `${TRUECOAT_IMAGE_ROOT}photo-1562259949-e8e7689d7828` +
    "?auto=format&fit=crop&w=1600&q=88",

  painter:
    `${TRUECOAT_IMAGE_ROOT}photo-1595814433015-e6f5ce69614e` +
    "?auto=format&fit=crop&w=1600&q=88",

  exterior:
    `${TRUECOAT_IMAGE_ROOT}photo-1600585152915-d208bec867a1` +
    "?auto=format&fit=crop&w=1600&q=88",

  preparation:
    `${TRUECOAT_IMAGE_ROOT}photo-1589939705384-5185137a7f0f` +
    "?auto=format&fit=crop&w=1600&q=88",

  protected:
    `${TRUECOAT_IMAGE_ROOT}photo-1600566753190-17f0baa2a6c3` +
    "?auto=format&fit=crop&w=1600&q=88",

  mediterranean:
    `${TRUECOAT_IMAGE_ROOT}photo-1618221195710-dd6b41faaea6` +
    "?auto=format&fit=crop&w=1800&q=88",

  mediterraneanDetail:
    `${TRUECOAT_IMAGE_ROOT}photo-1600566753086-00f18fb6b3ea` +
    "?auto=format&fit=crop&w=1400&q=88",

  mediterraneanEvening:
    `${TRUECOAT_IMAGE_ROOT}photo-1600607687920-4e2a09cf159d` +
    "?auto=format&fit=crop&w=1600&q=88",

  modern:
    `${TRUECOAT_IMAGE_ROOT}photo-1600607687939-ce8a6c25118c` +
    "?auto=format&fit=crop&w=1800&q=88",

  modernDetail:
    `${TRUECOAT_IMAGE_ROOT}photo-1600566753190-17f0baa2a6c3` +
    "?auto=format&fit=crop&w=1400&q=88",

  modernEvening:
    `${TRUECOAT_IMAGE_ROOT}photo-1600607687920-4e2a09cf159d` +
    "?auto=format&fit=crop&w=1600&q=88",

  organic:
    `${TRUECOAT_IMAGE_ROOT}photo-1600566753086-00f18fb6b3ea` +
    "?auto=format&fit=crop&w=1800&q=88",

  organicDetail:
    `${TRUECOAT_IMAGE_ROOT}photo-1616486338812-3dadae4b4ace` +
    "?auto=format&fit=crop&w=1400&q=88",

  organicEvening:
    `${TRUECOAT_IMAGE_ROOT}photo-1618220179428-22790b461013` +
    "?auto=format&fit=crop&w=1600&q=88",

  stone:
    `${TRUECOAT_IMAGE_ROOT}photo-1618220179428-22790b461013` +
    "?auto=format&fit=crop&w=1200&q=88",

  timber:
    `${TRUECOAT_IMAGE_ROOT}photo-1616486338812-3dadae4b4ace` +
    "?auto=format&fit=crop&w=1200&q=88",

  linen:
    `${TRUECOAT_IMAGE_ROOT}photo-1600566753086-00f18fb6b3ea` +
    "?auto=format&fit=crop&w=1200&q=88",

  ceramic:
    `${TRUECOAT_IMAGE_ROOT}photo-1618221195710-dd6b41faaea6` +
    "?auto=format&fit=crop&w=1200&q=88",

  lighting:
    `${TRUECOAT_IMAGE_ROOT}photo-1540932239986-30128078f3c5` +
    "?auto=format&fit=crop&w=1200&q=88",

  furniture:
    `${TRUECOAT_IMAGE_ROOT}photo-1555041469-a586c61ea9bc` +
    "?auto=format&fit=crop&w=1400&q=88",

  table:
    `${TRUECOAT_IMAGE_ROOT}photo-1532372320572-cda25653a694` +
    "?auto=format&fit=crop&w=1200&q=88",

  textile:
    `${TRUECOAT_IMAGE_ROOT}photo-1615874694520-474822394e73` +
    "?auto=format&fit=crop&w=1200&q=88",

  regionCyprus:
    `${TRUECOAT_IMAGE_ROOT}photo-1600585154340-be6161a56a0c` +
    "?auto=format&fit=crop&w=1600&q=88",

  regionUK:
    `${TRUECOAT_IMAGE_ROOT}photo-1560185008-b033106af5c3` +
    "?auto=format&fit=crop&w=1600&q=88"
};

const TRUECOAT_PROJECTS = {
  "mediterranean-calm": {
    name: "Mediterranean Calm",
    number: "Atmosphere 01",
    description:
      "Natural materials, sun-washed colour and relaxed forms create a warm, balanced living space.",
    page: "project-mediterranean.html",
    image: TRUECOAT_IMAGES.mediterranean
  },

  "quiet-modern": {
    name: "Quiet Modern",
    number: "Atmosphere 02",
    description:
      "Architectural neutrals, controlled contrast and sculptural forms create a calm contemporary interior.",
    page: "project-modern.html",
    image: TRUECOAT_IMAGES.modern
  },

  "organic-retreat": {
    name: "Organic Retreat",
    number: "Atmosphere 03",
    description:
      "Earth-led colour, natural materials and softly rounded forms create a grounded, restorative interior.",
    page: "project-organic.html",
    image: TRUECOAT_IMAGES.organic
  }
};

document.addEventListener("DOMContentLoaded", () => {
  initialiseImageSources();
  initialiseHeader();
  initialiseMobileNavigation();
  initialiseCurrentYear();
  initialiseRevealAnimations();
  initialiseSmoothAnchors();
  initialiseSurveyForm();
  initialiseInteractiveAtmosphere();
  initialiseAtmosphereRequestPage();
});

/* =========================================================
   FEATURE STYLESHEET
========================================================= */

function loadAtmosphereStyles() {
  const featurePage =
    document.documentElement.querySelector?.("[data-atmosphere-page]") ||
    document.documentElement.querySelector?.(
      "[data-atmosphere-request-page]"
    );

  const currentPath = window.location.pathname;

  const shouldLoad =
    featurePage ||
    currentPath.includes("project-mediterranean") ||
    currentPath.includes("project-modern") ||
    currentPath.includes("project-organic") ||
    currentPath.includes("request-atmosphere");

  if (!shouldLoad) return;

  if (
    document.querySelector(
      'link[href="css/atmosphere-shop.css"]'
    )
  ) {
    return;
  }

  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = "css/atmosphere-shop.css";

  document.head.appendChild(stylesheet);
}

/* =========================================================
   IMAGE SYSTEM
========================================================= */

function initialiseImageSources() {
  document.querySelectorAll("img").forEach((image) => {
    replaceImageSource(image);
  });
}

function replaceImageSource(image) {
  const source = image.getAttribute("src") || "";

  if (
    source.startsWith("https://images.unsplash.com/") ||
    source.startsWith("data:") ||
    source.startsWith("blob:")
  ) {
    return;
  }

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
  installImageFallback(image, TRUECOAT_IMAGES.home);
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

  if (
    filename.includes("mediterranean-product-table") ||
    filename.includes("mediterranean-material-limestone")
  ) {
    return TRUECOAT_IMAGES.stone;
  }

  if (
    filename.includes("mediterranean-product-light") ||
    filename.includes("mediterranean-evening")
  ) {
    return filename.includes("evening")
      ? TRUECOAT_IMAGES.mediterraneanEvening
      : TRUECOAT_IMAGES.lighting;
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
    filename.includes("modern-product-sofa")
  ) {
    return TRUECOAT_IMAGES.modernDetail;
  }

  if (filename.includes("modern-product-table")) {
    return TRUECOAT_IMAGES.stone;
  }

  if (filename.includes("modern-product-storage")) {
    return TRUECOAT_IMAGES.timber;
  }

  if (
    filename.includes("modern-product-light") ||
    filename.includes("modern-evening")
  ) {
    return filename.includes("evening")
      ? TRUECOAT_IMAGES.modernEvening
      : TRUECOAT_IMAGES.lighting;
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
    filename.includes("organic-product-sofa")
  ) {
    return TRUECOAT_IMAGES.organicDetail;
  }

  if (filename.includes("organic-product-table")) {
    return TRUECOAT_IMAGES.timber;
  }

  if (filename.includes("organic-product-rug")) {
    return TRUECOAT_IMAGES.textile;
  }

  if (
    filename.includes("organic-product-light") ||
    filename.includes("organic-evening")
  ) {
    return filename.includes("evening")
      ? TRUECOAT_IMAGES.organicEvening
      : TRUECOAT_IMAGES.lighting;
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
    return filename.includes("textile") ||
      filename.includes("rug")
      ? TRUECOAT_IMAGES.textile
      : TRUECOAT_IMAGES.linen;
  }

  if (
    filename.includes("ceramic") ||
    filename.includes("vase")
  ) {
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

/* =========================================================
   HEADER
========================================================= */

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

/* =========================================================
   MOBILE NAVIGATION
========================================================= */

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
    const isOpen =
      menuButton.getAttribute("aria-expanded") === "true";

    isOpen ? closeMenu() : openMenu();
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

/* =========================================================
   CURRENT YEAR
========================================================= */

function initialiseCurrentYear() {
  const currentYear = new Date().getFullYear();

  document.querySelectorAll("[data-current-year]").forEach(
    (element) => {
      element.textContent = currentYear;
    }
  );
}

/* =========================================================
   REVEAL ANIMATIONS
========================================================= */

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
    ".painting-service",
    ".painting-detail__content",
    ".difference-pillar",
    ".atmosphere-entry",
    ".projects-grid__project",
    ".areas-region",
    ".project-product-list__heading",
    ".interactive-product-card",
    ".project-estimate",
    ".project-service-benefits__grid article",
    ".atmosphere-application__section",
    ".request-project-card",
    ".request-selected-products",
    ".request-benefits",
    ".request-investment",
    ".request-process__steps li"
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
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
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
      threshold: 0.1,
      rootMargin: "0px 0px -5% 0px"
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
}

/* =========================================================
   SMOOTH ANCHORS
========================================================= */

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

/* =========================================================
   INTERACTIVE ATMOSPHERE PROJECT
========================================================= */

function initialiseInteractiveAtmosphere() {
  const page = document.querySelector("[data-atmosphere-page]");

  if (!page) return;

  const projectId = page.dataset.projectId;
  const projectName = page.dataset.projectName;
  const productCards = Array.from(
    page.querySelectorAll("[data-product-card]")
  );

  if (!projectId || !productCards.length) return;

  const productMap = new Map();

  productCards.forEach((card) => {
    const product = readProductCard(card);

    if (product.id) {
      productMap.set(product.id, product);
    }
  });

  const storedProject = readStoredProject(projectId);

  const selectedIds = new Set(
    storedProject && Array.isArray(storedProject.selectedIds)
      ? storedProject.selectedIds.filter((id) =>
          productMap.has(id)
        )
      : Array.from(productMap.keys())
  );

  let currentProductId = null;

  const drawer = page.querySelector("[data-product-drawer]");
  const drawerClose = page.querySelector(
    "[data-product-drawer-close]"
  );

  const drawerSelect = page.querySelector(
    "[data-drawer-select]"
  );

  const list = page.querySelector("[data-product-list]");
  const listToggle = page.querySelector(
    "[data-product-list-toggle]"
  );

  updateAllProductStates();
  updateProjectEstimate();
  saveCurrentProject();

  page.querySelectorAll("[data-product-trigger]").forEach(
    (trigger) => {
      trigger.addEventListener("click", () => {
        const productId = trigger.dataset.productTrigger;

        if (!productMap.has(productId)) return;

        openProductDrawer(productId);
      });
    }
  );

  page.querySelectorAll("[data-product-toggle]").forEach(
    (button) => {
      button.addEventListener("click", () => {
        toggleProduct(button.dataset.productToggle);
      });
    }
  );

  if (drawerClose) {
    drawerClose.addEventListener("click", closeProductDrawer);
  }

  if (drawerSelect) {
    drawerSelect.addEventListener("click", () => {
      if (!currentProductId) return;
      toggleProduct(currentProductId);
      populateDrawer(productMap.get(currentProductId));
    });
  }

  if (drawer) {
    drawer.addEventListener("click", (event) => {
      if (event.target === drawer) {
        closeProductDrawer();
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeProductDrawer();
    }
  });

  if (listToggle && list) {
    listToggle.addEventListener("click", () => {
      const collapsed = list.classList.toggle("is-collapsed");

      listToggle.setAttribute(
        "aria-expanded",
        String(!collapsed)
      );

      const label = listToggle.querySelector(
        "[data-list-toggle-label]"
      );

      if (label) {
        label.textContent = collapsed
          ? "Show product list"
          : "Hide product list";
      }
    });
  }

  page.querySelectorAll("[data-request-atmosphere]").forEach(
    (link) => {
      link.addEventListener("click", () => {
        saveCurrentProject();
      });
    }
  );

  function openProductDrawer(productId) {
    const product = productMap.get(productId);

    if (!product || !drawer) return;

    currentProductId = productId;
    populateDrawer(product);

    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");

    page
      .querySelectorAll(".product-hotspot")
      .forEach((hotspot) => {
        hotspot.classList.toggle(
          "is-active",
          hotspot.dataset.productTrigger === productId
        );
      });
  }

  function closeProductDrawer() {
    if (!drawer) return;

    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");

    page
      .querySelectorAll(".product-hotspot")
      .forEach((hotspot) => {
        hotspot.classList.remove("is-active");
      });
  }

  function populateDrawer(product) {
    if (!product || !drawer) return;

    setText(drawer, "[data-drawer-number]", product.number);
    setText(drawer, "[data-drawer-name]", product.name);
    setText(
      drawer,
      "[data-drawer-price]",
      formatCurrency(product.price, product.currency)
    );

    setText(
      drawer,
      "[data-drawer-retailer]",
      product.retailer
    );

    setText(
      drawer,
      "[data-drawer-description]",
      product.description
    );

    setText(
      drawer,
      "[data-drawer-material]",
      product.material
    );

    setText(
      drawer,
      "[data-drawer-colour]",
      product.colour
    );

    setText(drawer, "[data-drawer-size]", product.size);

    const drawerImage = drawer.querySelector(
      "[data-drawer-image]"
    );

    if (drawerImage) {
      drawerImage.src = product.image;
      drawerImage.alt = product.name;
      replaceImageSource(drawerImage);
    }

    const drawerLink = drawer.querySelector(
      "[data-drawer-link]"
    );

    if (drawerLink) {
      drawerLink.href = product.link;
    }

    if (drawerSelect) {
      const selected = selectedIds.has(product.id);

      drawerSelect.textContent = selected
        ? "Remove from project"
        : "Add to project";

      drawerSelect.classList.toggle(
        "is-selected",
        selected
      );

      drawerSelect.setAttribute(
        "aria-pressed",
        String(selected)
      );
    }
  }

  function toggleProduct(productId) {
    if (!productMap.has(productId)) return;

    if (selectedIds.has(productId)) {
      selectedIds.delete(productId);
    } else {
      selectedIds.add(productId);
    }

    updateAllProductStates();
    updateProjectEstimate();
    saveCurrentProject();
  }

  function updateAllProductStates() {
    productCards.forEach((card) => {
      const productId = card.dataset.productId;
      const selected = selectedIds.has(productId);

      card.classList.toggle("is-selected", selected);

      const toggle = card.querySelector(
        "[data-product-toggle]"
      );

      if (toggle) {
        toggle.textContent = selected ? "Remove" : "Add";
        toggle.setAttribute(
          "aria-pressed",
          String(selected)
        );
      }
    });

    if (currentProductId && drawerSelect) {
      const selected = selectedIds.has(currentProductId);

      drawerSelect.textContent = selected
        ? "Remove from project"
        : "Add to project";

      drawerSelect.classList.toggle(
        "is-selected",
        selected
      );
    }
  }

  function updateProjectEstimate() {
    const selectedProducts = Array.from(selectedIds)
      .map((id) => productMap.get(id))
      .filter(Boolean);

    const total = selectedProducts.reduce(
      (sum, product) => sum + product.price,
      0
    );

    page.querySelectorAll("[data-selected-count]").forEach(
      (element) => {
        element.textContent =
          `${selectedProducts.length} ` +
          `${selectedProducts.length === 1 ? "item" : "items"}`;
      }
    );

    page.querySelectorAll("[data-product-total]").forEach(
      (element) => {
        element.textContent = formatCurrency(total, "GBP");
      }
    );

    page.querySelectorAll("[data-project-total]").forEach(
      (element) => {
        element.textContent =
          `From ${formatCurrency(total, "GBP")} + application`;
      }
    );
  }

  function saveCurrentProject() {
    const selectedProducts = Array.from(selectedIds)
      .map((id) => productMap.get(id))
      .filter(Boolean);

    const total = selectedProducts.reduce(
      (sum, product) => sum + product.price,
      0
    );

    const storage = readStorage();

    storage[projectId] = {
      projectId,
      projectName,
      selectedIds: Array.from(selectedIds),
      products: selectedProducts,
      total,
      currency: "GBP",
      updatedAt: new Date().toISOString()
    };

    writeStorage(storage);
  }
}

function readProductCard(card) {
  return {
    id: card.dataset.productId || "",
    number: card.dataset.productNumber || "",
    name: card.dataset.productName || "",
    price: Number(card.dataset.productPrice || 0),
    currency: card.dataset.productCurrency || "GBP",
    retailer: card.dataset.productRetailer || "",
    image: card.dataset.productImage || "",
    link: card.dataset.productLink || "",
    description: card.dataset.productDescription || "",
    material: card.dataset.productMaterial || "",
    colour: card.dataset.productColour || "",
    size: card.dataset.productSize || ""
  };
}

/* =========================================================
   ATMOSPHERE REQUEST PAGE
========================================================= */

function initialiseAtmosphereRequestPage() {
  const page = document.querySelector(
    "[data-atmosphere-request-page]"
  );

  if (!page) return;

  const parameters = new URLSearchParams(window.location.search);

  const requestedProjectId =
    parameters.get("project") || "mediterranean-calm";

  const project =
    TRUECOAT_PROJECTS[requestedProjectId] ||
    TRUECOAT_PROJECTS["mediterranean-calm"];

  const storedProject = readStoredProject(requestedProjectId);

  populateRequestProject(project, requestedProjectId);
  populateRequestProducts(storedProject);
  initialiseAtmosphereUpload();
  initialiseAtmosphereRequestForm(
    project,
    requestedProjectId,
    storedProject
  );
}

function populateRequestProject(project, projectId) {
  setText(
    document,
    "[data-request-project-number]",
    project.number
  );

  setText(
    document,
    "[data-request-project-name]",
    project.name
  );

  setText(
    document,
    "[data-request-project-description]",
    project.description
  );

  const projectImage = document.querySelector(
    "[data-request-project-image]"
  );

  if (projectImage) {
    projectImage.src = project.image;
    projectImage.alt = project.name;
  }

  const projectLink = document.querySelector(
    "[data-request-project-link]"
  );

  if (projectLink) {
    projectLink.href = project.page;
  }

  const backLink = document.querySelector(
    "[data-request-back-link]"
  );

  if (backLink) {
    backLink.href = project.page;
  }

  const projectInput = document.querySelector(
    "[data-request-project-input]"
  );

  if (projectInput) {
    projectInput.value = project.name;
  }

  document.title =
    `Request ${project.name} — TRUECOAT`;

  document.body.dataset.projectId = projectId;
}

function populateRequestProducts(storedProject) {
  const list = document.querySelector(
    "[data-request-selected-products]"
  );

  const count = document.querySelector(
    "[data-request-selected-count]"
  );

  const productTotal = document.querySelector(
    "[data-request-product-total]"
  );

  const projectTotal = document.querySelector(
    "[data-request-project-total]"
  );

  const productsInput = document.querySelector(
    "[data-request-products-input]"
  );

  const totalInput = document.querySelector(
    "[data-request-total-input]"
  );

  const products =
    storedProject && Array.isArray(storedProject.products)
      ? storedProject.products
      : [];

  const total =
    storedProject && Number.isFinite(storedProject.total)
      ? storedProject.total
      : 0;

  if (count) {
    count.textContent =
      `${products.length} ` +
      `${products.length === 1 ? "item" : "items"}`;
  }

  if (productTotal) {
    productTotal.textContent = products.length
      ? formatCurrency(total, "GBP")
      : "To be confirmed";
  }

  if (projectTotal) {
    projectTotal.textContent = products.length
      ? `From ${formatCurrency(total, "GBP")} + application`
      : "Tailored proposal required";
  }

  if (productsInput) {
    productsInput.value = products
      .map((product) => product.name)
      .join(", ");
  }

  if (totalInput) {
    totalInput.value = products.length
      ? formatCurrency(total, "GBP")
      : "Not selected";
  }

  if (!list) return;

  list.innerHTML = "";

  if (!products.length) {
    const empty = document.createElement("p");
    empty.className = "request-selected-products__empty";
    empty.textContent =
      "No saved products were found. You can still request the complete atmosphere.";

    list.appendChild(empty);
    return;
  }

  products.forEach((product) => {
    const item = document.createElement("article");
    item.className = "request-selected-product";

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = "";
    replaceImageSource(image);

    const information = document.createElement("div");

    const name = document.createElement("strong");
    name.textContent = product.name;

    const retailer = document.createElement("span");
    retailer.textContent =
      product.retailer || "Selected retailer";

    information.append(name, retailer);

    const price = document.createElement("strong");
    price.textContent = formatCurrency(
      product.price,
      product.currency || "GBP"
    );

    item.append(image, information, price);
    list.appendChild(item);
  });
}

/* =========================================================
   PHOTO UPLOAD PREVIEW
========================================================= */

function initialiseAtmosphereUpload() {
  const input = document.querySelector(
    "[data-atmosphere-file-input]"
  );

  const previews = document.querySelector(
    "[data-atmosphere-previews]"
  );

  const dropzone = document.querySelector(
    ".atmosphere-upload__dropzone"
  );

  if (!input || !previews || !dropzone) return;

  let selectedFiles = [];

  input.addEventListener("change", () => {
    selectedFiles = Array.from(input.files || []).slice(0, 6);
    renderPreviews();
  });

  ["dragenter", "dragover"].forEach((eventName) => {
    dropzone.addEventListener(eventName, (event) => {
      event.preventDefault();
      dropzone.classList.add("is-dragging");
    });
  });

  ["dragleave", "drop"].forEach((eventName) => {
    dropzone.addEventListener(eventName, (event) => {
      event.preventDefault();
      dropzone.classList.remove("is-dragging");
    });
  });

  dropzone.addEventListener("drop", (event) => {
    const droppedFiles = Array.from(
      event.dataTransfer?.files || []
    )
      .filter((file) => file.type.startsWith("image/"))
      .slice(0, 6);

    selectedFiles = droppedFiles;
    renderPreviews();
  });

  function renderPreviews() {
    previews.innerHTML = "";

    selectedFiles.forEach((file, index) => {
      const preview = document.createElement("figure");
      preview.className = "atmosphere-upload__preview";

      const image = document.createElement("img");
      image.src = URL.createObjectURL(file);
      image.alt = `Selected property photograph ${index + 1}`;

      image.addEventListener(
        "load",
        () => {
          URL.revokeObjectURL(image.src);
        },
        { once: true }
      );

      const removeButton = document.createElement("button");
      removeButton.type = "button";
      removeButton.setAttribute(
        "aria-label",
        `Remove photograph ${index + 1}`
      );

      removeButton.textContent = "×";

      removeButton.addEventListener("click", () => {
        selectedFiles.splice(index, 1);
        renderPreviews();
      });

      preview.append(image, removeButton);
      previews.appendChild(preview);
    });

    input.dataset.selectedFileNames = selectedFiles
      .map((file) => file.name)
      .join(", ");
  }
}

/* =========================================================
   ATMOSPHERE REQUEST FORM
========================================================= */

function initialiseAtmosphereRequestForm(
  project,
  projectId,
  storedProject
) {
  const form = document.querySelector(
    "[data-atmosphere-request-form]"
  );

  const status = document.querySelector(
    "[data-atmosphere-request-status]"
  );

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();

      if (status) {
        status.textContent =
          "Please complete all required fields.";
      }

      return;
    }

    const selectedServices = Array.from(
      form.querySelectorAll(
        'input[name="Requested service"]:checked'
      )
    ).map((input) => input.value);

    if (!selectedServices.length) {
      if (status) {
        status.textContent =
          "Please select at least one requested service.";
      }

      return;
    }

    const formData = new FormData(form);

    const uploadedInput = form.querySelector(
      "[data-atmosphere-file-input]"
    );

    const uploadedNames =
      uploadedInput?.dataset.selectedFileNames ||
      Array.from(uploadedInput?.files || [])
        .map((file) => file.name)
        .join(", ");

    const storedProducts =
      storedProject && Array.isArray(storedProject.products)
        ? storedProject.products
        : [];

    const storedTotal =
      storedProject && Number.isFinite(storedProject.total)
        ? formatCurrency(storedProject.total, "GBP")
        : "Not selected";

    const productLines = storedProducts.length
      ? storedProducts.map(
          (product, index) =>
            `${index + 1}. ${product.name} — ` +
            `${formatCurrency(
              product.price,
              product.currency || "GBP"
            )}`
        )
      : ["No individual products selected"];

    const subject = encodeURIComponent(
      `TRUECOAT atmosphere request — ${project.name} — ` +
      `${cleanFormValue(formData.get("Full name"))}`
    );

    const body = encodeURIComponent(
      [
        "TRUECOAT ATMOSPHERE REQUEST",
        "",
        `Atmosphere: ${project.name}`,
        `Project ID: ${projectId}`,
        "",
        "CLIENT DETAILS",
        `Name: ${cleanFormValue(formData.get("Full name"))}`,
        `Email: ${cleanFormValue(formData.get("Email"))}`,
        `Phone / WhatsApp: ${cleanFormValue(
          formData.get("Phone or WhatsApp")
        )}`,
        `Preferred contact: ${cleanFormValue(
          formData.get("Preferred contact method")
        )}`,
        "",
        "PROPERTY",
        `Location: ${cleanFormValue(
          formData.get("Property location")
        )}`,
        `Region: ${cleanFormValue(formData.get("Region"))}`,
        `Property type: ${cleanFormValue(
          formData.get("Property type")
        )}`,
        `Room type: ${cleanFormValue(
          formData.get("Room type")
        )}`,
        `Approximate size: ${cleanFormValue(
          formData.get("Approximate room size")
        )} m²`,
        `Furnished: ${cleanFormValue(
          formData.get("Furnished property")
        )}`,
        `Property status: ${cleanFormValue(
          formData.get("Property status")
        )}`,
        "",
        "PROJECT SCOPE",
        `Requested services: ${selectedServices.join(", ")}`,
        `Preferred budget: ${cleanFormValue(
          formData.get("Preferred budget")
        )}`,
        `Preferred timing: ${cleanFormValue(
          formData.get("Preferred timing")
        )}`,
        "",
        "SELECTED PRODUCTS",
        ...productLines,
        `Estimated product total: ${storedTotal}`,
        "",
        "PROJECT NOTES",
        cleanFormValue(formData.get("Project notes")),
        "",
        "PROPERTY PHOTOGRAPHS",
        uploadedNames
          ? `Selected files: ${uploadedNames}`
          : "No photographs selected",
        "",
        "Please attach the selected property photographs " +
          "to this email before sending."
      ].join("\n")
    );

    if (status) {
      status.textContent =
        "Opening your email application. Please attach your property photographs before sending.";
    }

    window.location.href =
      `mailto:${TRUECOAT_REQUEST_EMAIL}` +
      `?subject=${subject}&body=${body}`;
  });

  form.addEventListener("input", () => {
    if (status) status.textContent = "";
  });
}

/* =========================================================
   GENERAL SURVEY FORM
========================================================= */

function initialiseSurveyForm() {
  const form = document.querySelector("[data-survey-form]");
  const status = document.querySelector("[data-form-status]");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();

      if (status) {
        status.textContent =
          "Please complete all required fields.";
      }

      return;
    }

    const selectedServices = Array.from(
      form.querySelectorAll('input[name="Service"]:checked')
    ).map((input) => input.value);

    if (!selectedServices.length) {
      if (status) {
        status.textContent =
          "Please select at least one service.";
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
        "Opening your email application with the project details…";
    }

    window.location.href =
      `mailto:${TRUECOAT_REQUEST_EMAIL}` +
      `?subject=${subject}&body=${body}`;
  });

  form.addEventListener("input", () => {
    if (status) status.textContent = "";
  });
}

/* =========================================================
   STORAGE
========================================================= */

function readStorage() {
  try {
    const stored = localStorage.getItem(TRUECOAT_STORAGE_KEY);

    if (!stored) return {};

    const parsed = JSON.parse(stored);

    return parsed && typeof parsed === "object"
      ? parsed
      : {};
  } catch (error) {
    return {};
  }
}

function writeStorage(value) {
  try {
    localStorage.setItem(
      TRUECOAT_STORAGE_KEY,
      JSON.stringify(value)
    );
  } catch (error) {
    /* Storage may be unavailable in private browsing. */
  }
}

function readStoredProject(projectId) {
  const storage = readStorage();
  return storage[projectId] || null;
}

/* =========================================================
   HELPERS
========================================================= */

function setText(root, selector, value) {
  const element = root.querySelector(selector);

  if (element) {
    element.textContent = value || "";
  }
}

function formatCurrency(value, currency = "GBP") {
  const numericValue = Number(value) || 0;

  try {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(numericValue);
  } catch (error) {
    return `£${numericValue.toFixed(2)}`;
  }
}

function cleanFormValue(value) {
  return typeof value === "string" ? value.trim() : "";
}
