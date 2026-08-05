"use strict";

document.documentElement.classList.add("is-enabled");

const TRUECOAT_IMAGE_ROOT = "https://images.unsplash.com/";

const TRUECOAT_IMAGES = {
  home:
    `${TRUECOAT_IMAGE_ROOT}photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=88`,

  painting:
    `${TRUECOAT_IMAGE_ROOT}photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1600&q=88`,

  painter:
    `${TRUECOAT_IMAGE_ROOT}photo-1595814433015-e6f5ce69614e?auto=format&fit=crop&w=1600&q=88`,

  exterior:
    `${TRUECOAT_IMAGE_ROOT}photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1600&q=88`,

  preparation:
    `${TRUECOAT_IMAGE_ROOT}photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1600&q=88`,

  protected:
    `${TRUECOAT_IMAGE_ROOT}photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=88`,

  mediterranean:
    `${TRUECOAT_IMAGE_ROOT}photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=88`,

  mediterraneanDetail:
    `${TRUECOAT_IMAGE_ROOT}photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=88`,

  mediterraneanEvening:
    `${TRUECOAT_IMAGE_ROOT}photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=88`,

  modern:
    `${TRUECOAT_IMAGE_ROOT}photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=88`,

  modernDetail:
    `${TRUECOAT_IMAGE_ROOT}photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=88`,

  modernEvening:
    `${TRUECOAT_IMAGE_ROOT}photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=88`,

  organic:
    `${TRUECOAT_IMAGE_ROOT}photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=88`,

  organicDetail:
    `${TRUECOAT_IMAGE_ROOT}photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=88`,

  organicEvening:
    `${TRUECOAT_IMAGE_ROOT}photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=88`,

  atmosphere:
    `${TRUECOAT_IMAGE_ROOT}photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=88`,

  service:
    `${TRUECOAT_IMAGE_ROOT}photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1600&q=88`
};

const TRUECOAT_CONTACT_EMAIL =
  document.body.dataset.contactEmail || "truecoatcyprus@gmail.com";

const SELECTORS = {
  header: "[data-header]",
  menuToggle: "[data-menu-toggle]",
  navigation: "[data-navigation], #primary-navigation",
  reveal: "[data-reveal], .reveal",
  hotspot: ".product-hotspot, [data-hotspot]",
  productCard: ".project-product-card, [data-product-card]",
  drawer: ".product-drawer, [data-product-drawer]",
  drawerPanel: ".product-drawer__panel, [data-drawer-panel]",
  drawerClose: ".product-drawer__close, [data-drawer-close]",
  listToggle: ".interactive-project__list-toggle, [data-list-toggle]",
  productList: ".project-product-list, [data-product-list]",
  requestForm: "[data-request-form]",
  photoInput: "[data-photo-input]",
  photoPreview: "[data-photo-preview]"
};

const state = {
  lastFocusedElement: null,
  activeProductId: null,
  uploadedPhotos: []
};

function query(selector, scope = document) {
  return scope.querySelector(selector);
}

function queryAll(selector, scope = document) {
  return Array.from(scope.querySelectorAll(selector));
}

function escapeSelector(value) {
  if (window.CSS && typeof window.CSS.escape === "function") {
    return window.CSS.escape(String(value));
  }

  return String(value).replace(/["\\]/g, "\\$&");
}

function setImageSource(image, source) {
  if (!image || !source) return;

  if (image.tagName === "IMG") {
    image.src = source;

    if (!image.hasAttribute("loading")) {
      image.loading = image.closest(".hero, .interactive-project__stage")
        ? "eager"
        : "lazy";
    }

    image.decoding = "async";
    return;
  }

  image.style.backgroundImage = `url("${source}")`;
}

function initialiseImages() {
  queryAll("[data-image]").forEach((element) => {
    const imageKey = element.dataset.image;
    const source = TRUECOAT_IMAGES[imageKey];

    if (source) {
      setImageSource(element, source);
    }
  });

  queryAll("[data-image-key]").forEach((element) => {
    const imageKey = element.dataset.imageKey;
    const source = TRUECOAT_IMAGES[imageKey];

    if (source) {
      setImageSource(element, source);
    }
  });
}

function initialiseHeader() {
  const header = query(SELECTORS.header);

  if (!header) return;

  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 18);
  };

  updateHeader();

  window.addEventListener("scroll", updateHeader, {
    passive: true
  });
}

function getFocusableElements(container) {
  if (!container) return [];

  return queryAll(
    [
      "a[href]",
      "button:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      '[tabindex]:not([tabindex="-1"])'
    ].join(","),
    container
  ).filter((element) => {
    return (
      !element.hasAttribute("hidden") &&
      element.getAttribute("aria-hidden") !== "true"
    );
  });
}

function initialiseNavigation() {
  const toggle = query(SELECTORS.menuToggle);
  const navigation = query(SELECTORS.navigation);

  if (!toggle || !navigation) return;

  const openNavigation = () => {
    state.lastFocusedElement = document.activeElement;

    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Menüyü kapat");

    navigation.classList.add("is-open");
    navigation.dataset.open = "true";

    document.body.classList.add("is-menu-open");

    const focusable = getFocusableElements(navigation);

    window.setTimeout(() => {
      focusable[0]?.focus();
    }, 60);
  };

  const closeNavigation = ({ restoreFocus = true } = {}) => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Menüyü aç");

    navigation.classList.remove("is-open");
    navigation.dataset.open = "false";

    document.body.classList.remove("is-menu-open");

    if (restoreFocus) {
      state.lastFocusedElement?.focus?.();
    }
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      closeNavigation();
    } else {
      openNavigation();
    }
  });

  queryAll("a", navigation).forEach((link) => {
    link.addEventListener("click", () => {
      closeNavigation({
        restoreFocus: false
      });
    });
  });

  document.addEventListener("keydown", (event) => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";

    if (!isOpen) return;

    if (event.key === "Escape") {
      closeNavigation();
      return;
    }

    if (event.key !== "Tab") return;

    const focusable = getFocusableElements(navigation);

    if (!focusable.length) return;

    const firstElement = focusable[0];
    const lastElement = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    }

    if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1080) {
      closeNavigation({
        restoreFocus: false
      });
    }
  });
}

function initialiseRevealAnimations() {
  const elements = queryAll(SELECTORS.reveal);

  if (!elements.length) return;

  if (
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    elements.forEach((element) => {
      element.classList.add("is-visible");
    });

    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px"
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
}

function normaliseProductId(element) {
  if (!element) return "";

  return (
    element.dataset.productId ||
    element.dataset.product ||
    element.dataset.target ||
    element.getAttribute("aria-controls") ||
    ""
  )
    .replace(/^#/, "")
    .trim();
}

function getProductCard(productId) {
  if (!productId) return null;

  const safeId = escapeSelector(productId);

  return (
    query(`[data-product-id="${safeId}"]`) ||
    query(`[data-product="${safeId}"]`) ||
    query(`#${safeId}`)
  );
}

function getText(element, selectors, fallback = "") {
  for (const selector of selectors) {
    const target = query(selector, element);

    if (target?.textContent?.trim()) {
      return target.textContent.trim();
    }
  }

  return fallback;
}

function getProductData(card, hotspot = null) {
  if (!card && !hotspot) return null;

  const source = card || hotspot;
  const image =
    query("img", card || source)?.currentSrc ||
    query("img", card || source)?.src ||
    source.dataset.image ||
    "";

  return {
    id: normaliseProductId(card) || normaliseProductId(hotspot),
    number:
      source.dataset.productNumber ||
      hotspot?.textContent?.trim() ||
      getText(source, [".project-product-card__number"], ""),
    title:
      source.dataset.productTitle ||
      getText(
        source,
        [
          ".project-product-card__title",
          "h3",
          "[data-product-title]"
        ],
        "Seçilen ürün"
      ),
    price:
      source.dataset.productPrice ||
      getText(
        source,
        [
          ".project-product-card__price",
          "[data-product-price]",
          ".price"
        ],
        ""
      ),
    source:
      source.dataset.productSource ||
      getText(
        source,
        [
          ".project-product-card__source",
          "[data-product-source]"
        ],
        ""
      ),
    description:
      source.dataset.productDescription ||
      getText(
        source,
        [
          ".project-product-card__description",
          "[data-product-description]"
        ],
        "Bu ürün seçilen atmosferin malzeme, renk ve form dengesini tamamlar."
      ),
    image,
    url:
      source.dataset.productUrl ||
      query("a[href]", source)?.href ||
      ""
  };
}

function setDrawerContent(drawer, product) {
  if (!drawer || !product) return;

  const image = query(
    "[data-drawer-image], .product-drawer__image img, .product-drawer__media img",
    drawer
  );

  const number = query(
    "[data-drawer-number], .product-drawer__number",
    drawer
  );

  const title = query(
    "[data-drawer-title], .product-drawer__title",
    drawer
  );

  const price = query(
    "[data-drawer-price], .product-drawer__price",
    drawer
  );

  const source = query(
    "[data-drawer-source], .product-drawer__source",
    drawer
  );

  const description = query(
    "[data-drawer-description], .product-drawer__description",
    drawer
  );

  const link = query(
    "[data-drawer-link], .product-drawer__link",
    drawer
  );

  if (image && product.image) {
    image.src = product.image;
    image.alt = product.title;
  }

  if (number) {
    number.textContent = product.number
      ? String(product.number)
      : "";
  }

  if (title) {
    title.textContent = product.title;
  }

  if (price) {
    price.textContent = product.price;
  }

  if (source) {
    source.textContent = product.source;
  }

  if (description) {
    description.textContent = product.description;
  }

  if (link) {
    if (product.url) {
      link.href = product.url;
      link.hidden = false;
    } else {
      link.hidden = true;
    }
  }
}

function openProductDrawer(drawer, product) {
  if (!drawer || !product) return;

  state.lastFocusedElement = document.activeElement;
  state.activeProductId = product.id;

  setDrawerContent(drawer, product);

  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");

  document.body.classList.add("is-drawer-open");

  const panel = query(SELECTORS.drawerPanel, drawer);

  window.setTimeout(() => {
    query(SELECTORS.drawerClose, drawer)?.focus();
    panel?.scrollTo?.({
      top: 0,
      behavior: "instant"
    });
  }, 60);
}

function closeProductDrawer(drawer) {
  if (!drawer) return;

  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");

  document.body.classList.remove("is-drawer-open");

  state.activeProductId = null;
  state.lastFocusedElement?.focus?.();
}

function initialiseProductDrawer() {
  const drawer = query(SELECTORS.drawer);

  if (!drawer) return;

  queryAll(SELECTORS.drawerClose, drawer).forEach((button) => {
    button.addEventListener("click", () => {
      closeProductDrawer(drawer);
    });
  });

  drawer.addEventListener("click", (event) => {
    if (event.target === drawer) {
      closeProductDrawer(drawer);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      drawer.classList.contains("is-open")
    ) {
      closeProductDrawer(drawer);
    }
  });
}

function activateProduct(productId, hotspot = null) {
  const card = getProductCard(productId);
  const drawer = query(SELECTORS.drawer);
  const product = getProductData(card, hotspot);

  queryAll(SELECTORS.hotspot).forEach((button) => {
    const isCurrent = normaliseProductId(button) === productId;

    button.classList.toggle("is-active", isCurrent);
    button.setAttribute(
      "aria-pressed",
      isCurrent ? "true" : "false"
    );
  });

  queryAll(SELECTORS.productCard).forEach((productCard) => {
    const isCurrent =
      normaliseProductId(productCard) === productId;

    productCard.classList.toggle("is-active", isCurrent);
  });

  if (drawer && product) {
    openProductDrawer(drawer, product);
    return;
  }

  if (card) {
    card.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    });
  }
}

function initialiseHotspots() {
  queryAll(SELECTORS.hotspot).forEach((hotspot, index) => {
    const productId =
      normaliseProductId(hotspot) ||
      `product-${index + 1}`;

    hotspot.dataset.productId = productId;

    if (!hotspot.hasAttribute("aria-label")) {
      hotspot.setAttribute(
        "aria-label",
        `${index + 1}. ürünü görüntüle`
      );
    }

    hotspot.setAttribute("aria-pressed", "false");

    hotspot.addEventListener("click", () => {
      activateProduct(productId, hotspot);
    });
  });

  queryAll(SELECTORS.productCard).forEach((card, index) => {
    if (!normaliseProductId(card)) {
      card.dataset.productId = `product-${index + 1}`;
    }

    const trigger =
      query("[data-product-open]", card) ||
      query("button", card);

    if (trigger) {
      trigger.addEventListener("click", (event) => {
        if (trigger.tagName === "A") return;

        event.preventDefault();
        activateProduct(normaliseProductId(card));
      });
    }
  });
}

function initialiseProductListToggle() {
  const toggle = query(SELECTORS.listToggle);
  const productList = query(SELECTORS.productList);

  if (!toggle || !productList) return;

  const originalText = toggle.textContent.trim();
  const hiddenText =
    toggle.dataset.showLabel ||
    "Ürün listesini göster";

  toggle.addEventListener("click", () => {
    const isHidden = productList.classList.toggle("is-collapsed");

    toggle.setAttribute(
      "aria-expanded",
      isHidden ? "false" : "true"
    );

    toggle.textContent = isHidden
      ? hiddenText
      : originalText;
  });
}

function initialiseHorizontalRails() {
  const rails = queryAll(
    [
      ".project-product-list__grid",
      ".product-rail",
      "[data-horizontal-rail]"
    ].join(",")
  );

  rails.forEach((rail) => {
    let startX = 0;
    let startScrollLeft = 0;
    let pointerActive = false;

    rail.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "touch") return;

      pointerActive = true;
      startX = event.clientX;
      startScrollLeft = rail.scrollLeft;

      rail.setPointerCapture?.(event.pointerId);
      rail.classList.add("is-dragging");
    });

    rail.addEventListener("pointermove", (event) => {
      if (!pointerActive) return;

      const distance = event.clientX - startX;
      rail.scrollLeft = startScrollLeft - distance;
    });

    const stopDragging = (event) => {
      if (!pointerActive) return;

      pointerActive = false;
      rail.releasePointerCapture?.(event.pointerId);
      rail.classList.remove("is-dragging");
    };

    rail.addEventListener("pointerup", stopDragging);
    rail.addEventListener("pointercancel", stopDragging);
    rail.addEventListener("pointerleave", stopDragging);
  });
}

function formatFileSize(bytes) {
  if (bytes < 1024 * 1024) {
    return `${Math.ceil(bytes / 1024)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function initialisePhotoUpload() {
  const input = query(SELECTORS.photoInput);
  const preview = query(SELECTORS.photoPreview);

  if (!input || !preview) return;

  input.addEventListener("change", () => {
    const files = Array.from(input.files || [])
      .filter((file) => file.type.startsWith("image/"))
      .slice(0, 4);

    state.uploadedPhotos.forEach((photo) => {
      URL.revokeObjectURL(photo.url);
    });

    state.uploadedPhotos = files.map((file) => ({
      file,
      url: URL.createObjectURL(file)
    }));

    preview.innerHTML = "";

    state.uploadedPhotos.forEach((photo, index) => {
      const item = document.createElement("div");
      const image = document.createElement("img");
      const remove = document.createElement("button");
      const details = document.createElement("small");

      item.className = "request-upload__preview-item";

      image.src = photo.url;
      image.alt = `Yüklenen oda fotoğrafı ${index + 1}`;

      remove.type = "button";
      remove.className = "request-upload__remove";
      remove.setAttribute(
        "aria-label",
        `${index + 1}. fotoğrafı kaldır`
      );
      remove.textContent = "×";

      details.textContent = formatFileSize(photo.file.size);

      remove.addEventListener("click", () => {
        URL.revokeObjectURL(photo.url);
        state.uploadedPhotos.splice(index, 1);
        item.remove();
      });

      item.append(image, remove, details);
      preview.append(item);
    });
  });
}

function setFieldError(form, fieldName, hasError) {
  const field = form.elements[fieldName];
  const error = query(
    `[data-error-for="${escapeSelector(fieldName)}"]`,
    form
  );

  if (field) {
    field.classList.toggle("has-error", hasError);
    field.setAttribute(
      "aria-invalid",
      hasError ? "true" : "false"
    );
  }

  if (error) {
    error.classList.toggle("is-visible", hasError);
  }
}

function validateRequestForm(form) {
  const values = new FormData(form);

  const fullName = String(values.get("fullName") || "").trim();
  const phone = String(values.get("phone") || "").trim();
  const email = String(values.get("email") || "").trim();
  const location = String(values.get("location") || "").trim();
  const roomType = String(values.get("roomType") || "").trim();
  const consent = values.get("consent");

  const phonePattern = /^[+0-9\s()/-]{8,}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const errors = {
    fullName: fullName.length < 3,
    phone: !phonePattern.test(phone),
    email: Boolean(email) && !emailPattern.test(email),
    location: !location,
    roomType: !roomType,
    consent: !consent
  };

  Object.entries(errors).forEach(([fieldName, hasError]) => {
    setFieldError(form, fieldName, hasError);
  });

  return !Object.values(errors).some(Boolean);
}

function buildRequestEmail(form) {
  const values = new FormData(form);

  const project =
    String(values.get("project") || "Atmosfer talebi").trim();

  const subject =
    `TRUECOAT Ücretsiz Keşif Talebi — ${project}`;

  const lines = [
    "TRUECOAT ÜCRETSİZ KEŞİF TALEBİ",
    "",
    `Atmosfer: ${project}`,
    `Ad Soyad: ${values.get("fullName") || ""}`,
    `Telefon: ${values.get("phone") || ""}`,
    `E-posta: ${values.get("email") || "Belirtilmedi"}`,
    `Bölge: ${values.get("location") || ""}`,
    `Oda Türü: ${values.get("roomType") || ""}`,
    `Yaklaşık Alan: ${values.get("roomSize") || "Belirtilmedi"} m²`,
    `Bütçe: ${values.get("budget") || "Keşif sonrasında"}`,
    "",
    "Müşteri Notu:",
    String(values.get("message") || "Not eklenmedi"),
    "",
    `Eklenmek istenen fotoğraf sayısı: ${state.uploadedPhotos.length}`
  ];

  return {
    subject,
    body: lines.join("\n")
  };
}

function initialiseRequestForm() {
  const form = query(SELECTORS.requestForm);

  if (!form) return;

  const status = query("[data-form-status]", form);
  const submitButton = query('[type="submit"]', form);

  queryAll("input, select, textarea", form).forEach((field) => {
    field.addEventListener("input", () => {
      if (field.name) {
        setFieldError(form, field.name, false);
      }
    });

    field.addEventListener("change", () => {
      if (field.name) {
        setFieldError(form, field.name, false);
      }
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!validateRequestForm(form)) {
      const firstInvalid = query(
        ".has-error, [aria-invalid='true']",
        form
      );

      firstInvalid?.focus();

      if (status) {
        status.hidden = false;
        status.className =
          "request-form__status is-error";
        status.textContent =
          "Lütfen işaretlenen alanları kontrol edin.";
      }

      return;
    }

    const email = buildRequestEmail(form);
    const mailto =
      `mailto:${encodeURIComponent(TRUECOAT_CONTACT_EMAIL)}` +
      `?subject=${encodeURIComponent(email.subject)}` +
      `&body=${encodeURIComponent(email.body)}`;

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.classList.add("is-loading");
      submitButton.textContent = "Talep hazırlanıyor…";
    }

    if (status) {
      status.hidden = false;
      status.className =
        "request-form__status is-success";
      status.textContent =
        "Talebiniz hazırlandı. E-posta uygulamanız açılıyor.";
    }

    window.setTimeout(() => {
      window.location.href = mailto;

      if (submitButton) {
        submitButton.disabled = false;
        submitButton.classList.remove("is-loading");
        submitButton.innerHTML =
          'Ücretsiz keşif talebini gönder <span aria-hidden="true">→</span>';
      }
    }, 500);
  });
}

function initialiseSmoothLinks() {
  queryAll('a[href^="#"]').forEach((link) => {
    const href = link.getAttribute("href");

    if (!href || href === "#") return;

    link.addEventListener("click", (event) => {
      const target = query(href);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
}

function initialiseCurrentNavigation() {
  const currentFile =
    window.location.pathname.split("/").pop() ||
    "index.html";

  queryAll(".site-navigation a").forEach((link) => {
    const linkFile =
      new URL(link.href, window.location.href)
        .pathname
        .split("/")
        .pop() || "index.html";

    const isCurrent = linkFile === currentFile;

    link.classList.toggle("is-current", isCurrent);

    if (isCurrent) {
      link.setAttribute("aria-current", "page");
    }
  });
}

function initialiseExternalLinks() {
  queryAll('a[target="_blank"]').forEach((link) => {
    const rel = new Set(
      String(link.getAttribute("rel") || "")
        .split(/\s+/)
        .filter(Boolean)
    );

    rel.add("noopener");
    rel.add("noreferrer");

    link.setAttribute("rel", Array.from(rel).join(" "));
  });
}

function initialiseApp() {
  initialiseImages();
  initialiseHeader();
  initialiseNavigation();
  initialiseRevealAnimations();
  initialiseProductDrawer();
  initialiseHotspots();
  initialiseProductListToggle();
  initialiseHorizontalRails();
  initialisePhotoUpload();
  initialiseRequestForm();
  initialiseSmoothLinks();
  initialiseCurrentNavigation();
  initialiseExternalLinks();

  document.body.classList.add("is-ready");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialiseApp);
} else {
  initialiseApp();
} 
