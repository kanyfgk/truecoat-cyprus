"use strict";

document.documentElement.classList.add("is-enabled");

/* =========================================================
   TRUECOAT
   Global Application Runtime
========================================================= */

const TRUECOAT_CONTACT = Object.freeze({
  phoneDisplay: "+90 548 849 08 37",
  phoneHref: "tel:+905488490837",
  email: "truecoatcyprus@gmail.com",
  emailHref: "mailto:truecoatcyprus@gmail.com"
});

const TRUECOAT_CART_STORAGE_KEY = "truecoat_cart_v1";

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
    `${TRUECOAT_IMAGE_ROOT}photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=88`,

  mediterraneanDetail:
    `${TRUECOAT_IMAGE_ROOT}photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=88`,

  mediterraneanEvening:
    `${TRUECOAT_IMAGE_ROOT}photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=88`,

  modern:
    `${TRUECOAT_IMAGE_ROOT}photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=88`,

  modernDetail:
    `${TRUECOAT_IMAGE_ROOT}photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=88`,

  modernEvening:
    `${TRUECOAT_IMAGE_ROOT}photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=88`,

  organic:
    `${TRUECOAT_IMAGE_ROOT}photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=88`,

  organicDetail:
    `${TRUECOAT_IMAGE_ROOT}photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=88`,

  organicEvening:
    `${TRUECOAT_IMAGE_ROOT}photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=88`
};


/* =========================================================
   PROJECTS
========================================================= */

const PROJECT_DETAILS = {
  mediterranean: {
    name: "Akdeniz Sakinliği",
    label: "Proje 01",
    style: "Akdeniz Modern",
    room: "24–32 m² oturma odası",
    duration: "5–7 gün",
    image: TRUECOAT_IMAGES.mediterranean,
    page: "project-mediterranean.html"
  },

  "mediterranean-silence": {
    name: "Akdeniz Sakinliği",
    label: "Proje 01",
    style: "Akdeniz Modern",
    room: "24–32 m² oturma odası",
    duration: "5–7 gün",
    image: TRUECOAT_IMAGES.mediterranean,
    page: "project-mediterranean.html"
  },

  modern: {
    name: "Modern Denge",
    label: "Proje 02",
    style: "Modern Minimal",
    room: "20–30 m² oturma odası",
    duration: "4–6 gün",
    image: TRUECOAT_IMAGES.modern,
    page: "project-modern.html"
  },

  "modern-balance": {
    name: "Modern Denge",
    label: "Proje 02",
    style: "Modern Minimal",
    room: "20–30 m² oturma odası",
    duration: "4–6 gün",
    image: TRUECOAT_IMAGES.modern,
    page: "project-modern.html"
  },

  organic: {
    name: "Organik Sadelik",
    label: "Proje 03",
    style: "Organik Çağdaş",
    room: "22–30 m² oturma odası",
    duration: "5–7 gün",
    image: TRUECOAT_IMAGES.organic,
    page: "project-organic.html"
  },

  "organic-simplicity": {
    name: "Organik Sadelik",
    label: "Proje 03",
    style: "Organik Çağdaş",
    room: "22–30 m² oturma odası",
    duration: "5–7 gün",
    image: TRUECOAT_IMAGES.organic,
    page: "project-organic.html"
  },

  painting: {
    name: "Profesyonel Boyama",
    label: "Boyama hizmeti",
    style: "Yüzeye özel uygulama",
    room: "Proje kapsamında belirlenir",
    duration: "Keşif sonrası belirlenir",
    image: TRUECOAT_IMAGES.painting,
    page: "painting.html"
  }
};


/* =========================================================
   PRODUCT LIBRARY
========================================================= */

const PRODUCT_LIBRARY = {
  "travertine-table": {
    number: "1",
    name: "Traverten Orta Sehpa",
    price: "19.750 TL",
    store: "D-Home",
    description:
      "Doğal taş görünümünü modern ve sade bir formla birleştiren yuvarlak orta sehpa.",
    dimensions: "Çap: 70 cm · Yükseklik: 35 cm",
    material: "Traverten görünümlü yüzey",
    colour: "Bej / Traverten",
    image:
      `${TRUECOAT_IMAGE_ROOT}photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=88`,
    url: "https://www.etsy.com/search?q=travertine+coffee+table"
  },

  armchair: {
    number: "2",
    name: "Krem Bukle Berjer",
    price: "14.250 TL",
    store: "Dekor seçkisi",
    description:
      "Yumuşak bukle dokusu ve dengeli formuyla sıcak, rahat bir oturma parçası.",
    dimensions: "Yaklaşık: 76 × 78 × 80 cm",
    material: "Bukle kumaş ve ahşap gövde",
    colour: "Krem",
    image:
      `${TRUECOAT_IMAGE_ROOT}photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=88`,
    url: "https://www.etsy.com/search?q=cream+boucle+armchair"
  },

  lamp: {
    number: "3",
    name: "Seramik Masa Lambası",
    price: "6.950 TL",
    store: "Dekor seçkisi",
    description:
      "Mat seramik gövdesi ve keten başlığıyla yumuşak bir akşam ışığı oluşturur.",
    dimensions: "Yükseklik: yaklaşık 52 cm",
    material: "Seramik ve keten",
    colour: "Kum beji",
    image:
      `${TRUECOAT_IMAGE_ROOT}photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=88`,
    url: "https://www.etsy.com/search?q=ceramic+table+lamp+linen"
  },

  "side-table": {
    number: "4",
    name: "Traverten Yan Sehpa",
    price: "8.900 TL",
    store: "Dekor seçkisi",
    description:
      "Heykelsi formu ve doğal tonu sayesinde oturma alanına güçlü bir yüzey ekler.",
    dimensions: "Yaklaşık: 40 × 40 × 48 cm",
    material: "Taş görünümlü kompozit",
    colour: "Doğal bej",
    image:
      `${TRUECOAT_IMAGE_ROOT}photo-1532323544230-7191fd51bc1b?auto=format&fit=crop&w=1000&q=88`,
    url: "https://www.etsy.com/search?q=travertine+side+table"
  },

  rug: {
    number: "5",
    name: "Krem Dokuma Halı",
    price: "9.850 TL",
    store: "Dekor seçkisi",
    description:
      "Dokulu yüzeyiyle oturma grubunu bir araya getiren sıcak ve sade zemin parçası.",
    dimensions: "Yaklaşık: 200 × 300 cm",
    material: "Dokuma tekstil",
    colour: "Krem / Kum",
    image:
      `${TRUECOAT_IMAGE_ROOT}photo-1600166898405-da9535204843?auto=format&fit=crop&w=1000&q=88`,
    url: "https://www.etsy.com/search?q=cream+woven+rug"
  },

  cushion: {
    number: "6",
    name: "Keten Dokulu Kırlent",
    price: "1.250 TL",
    store: "Dekor seçkisi",
    description:
      "Doğal keten görünümüyle kanepe üzerindeki renk ve doku dengesini tamamlar.",
    dimensions: "Yaklaşık: 45 × 45 cm",
    material: "Keten karışımlı tekstil",
    colour: "Doğal krem",
    image:
      `${TRUECOAT_IMAGE_ROOT}photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=88`,
    url: "https://www.etsy.com/search?q=linen+cushion+cover"
  },

  artwork: {
    number: "7",
    name: "Dokulu Soyut Tablo",
    price: "5.950 TL",
    store: "Dekor seçkisi",
    description:
      "Sade tonlarda dokulu yüzeyiyle duvara derinlik kazandıran soyut çalışma.",
    dimensions: "Yaklaşık: 80 × 100 cm",
    material: "Tuval üzeri dokulu çalışma",
    colour: "Kum / Kireç",
    image:
      `${TRUECOAT_IMAGE_ROOT}photo-1549490349-8643362247b5?auto=format&fit=crop&w=1000&q=88`,
    url: "https://www.etsy.com/search?q=neutral+textured+wall+art"
  },

  olive: {
    number: "8",
    name: "Dekoratif Zeytin Ağacı",
    price: "7.450 TL",
    store: "Dekor seçkisi",
    description:
      "Mekâna doğal yükseklik, hareket ve Akdeniz karakteri kazandıran dekoratif ağaç.",
    dimensions: "Yükseklik: yaklaşık 160–180 cm",
    material: "Dekoratif bitki ve saksı",
    colour: "Doğal yeşil",
    image:
      `${TRUECOAT_IMAGE_ROOT}photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1000&q=88`,
    url: "https://www.etsy.com/search?q=artificial+olive+tree"
  }
};


/* =========================================================
   CONTACT
========================================================= */

function initTruecoatContactDetails() {
  document
    .querySelectorAll('a[href^="tel:"]')
    .forEach((link) => {
      link.href = TRUECOAT_CONTACT.phoneHref;
      link.textContent = TRUECOAT_CONTACT.phoneDisplay;
    });

  document
    .querySelectorAll('a[href^="mailto:"]')
    .forEach((link) => {
      link.href = TRUECOAT_CONTACT.emailHref;
      link.textContent = TRUECOAT_CONTACT.email;
    });

  document
    .querySelectorAll("[data-truecoat-phone]")
    .forEach((element) => {
      element.textContent = TRUECOAT_CONTACT.phoneDisplay;

      if (element.tagName === "A") {
        element.href = TRUECOAT_CONTACT.phoneHref;
      }
    });

  document
    .querySelectorAll("[data-truecoat-email]")
    .forEach((element) => {
      element.textContent = TRUECOAT_CONTACT.email;

      if (element.tagName === "A") {
        element.href = TRUECOAT_CONTACT.emailHref;
      }
    });
}


/* =========================================================
   UTILITIES
========================================================= */

function getFocusableElements(container) {
  if (!container) {
    return [];
  }

  return Array.from(
    container.querySelectorAll(
      [
        "a[href]",
        "button:not([disabled])",
        "input:not([disabled])",
        "select:not([disabled])",
        "textarea:not([disabled])",
        '[tabindex]:not([tabindex="-1"])'
      ].join(",")
    )
  ).filter((element) => !element.hasAttribute("hidden"));
}

function lockPage() {
  document.documentElement.classList.add("is-locked");
  document.body.classList.add("is-locked");
}

function unlockPage() {
  document.documentElement.classList.remove("is-locked");
  document.body.classList.remove("is-locked");
}


/* =========================================================
   NAVIGATION
========================================================= */

function initNavigation() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const navigation = document.querySelector("[data-navigation]");

  if (!toggle || !navigation) {
    return;
  }

  let previouslyFocusedElement = null;

  function openNavigation() {
    previouslyFocusedElement = document.activeElement;

    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Navigasyonu kapat");

    navigation.classList.add("is-open");
    document.body.classList.add("menu-is-open");

    lockPage();

    const focusableElements =
      getFocusableElements(navigation);

    if (focusableElements.length) {
      window.setTimeout(
        () => focusableElements[0].focus(),
        100
      );
    }
  }

  function closeNavigation({
    restoreFocus = true
  } = {}) {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Navigasyonu aç");

    navigation.classList.remove("is-open");
    document.body.classList.remove("menu-is-open");

    unlockPage();

    if (
      restoreFocus &&
      previouslyFocusedElement &&
      typeof previouslyFocusedElement.focus === "function"
    ) {
      previouslyFocusedElement.focus();
    }
  }

  toggle.addEventListener("click", () => {
    const isOpen =
      toggle.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      closeNavigation();
    } else {
      openNavigation();
    }
  });

  navigation
    .querySelectorAll("a[href]")
    .forEach((link) => {
      link.addEventListener("click", () => {
        closeNavigation({
          restoreFocus: false
        });
      });
    });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      navigation.classList.contains("is-open")
    ) {
      closeNavigation();
    }

    if (
      event.key !== "Tab" ||
      !navigation.classList.contains("is-open")
    ) {
      return;
    }

    const focusableElements =
      getFocusableElements(navigation);

    if (!focusableElements.length) {
      return;
    }

    const firstElement = focusableElements[0];

    const lastElement =
      focusableElements[
        focusableElements.length - 1
      ];

    if (
      event.shiftKey &&
      document.activeElement === firstElement
    ) {
      event.preventDefault();
      lastElement.focus();
    } else if (
      !event.shiftKey &&
      document.activeElement === lastElement
    ) {
      event.preventDefault();
      firstElement.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (
      window.innerWidth >= 960 &&
      navigation.classList.contains("is-open")
    ) {
      closeNavigation({
        restoreFocus: false
      });
    }
  });
}


/* =========================================================
   HEADER
========================================================= */

function initHeader() {
  const header =
    document.querySelector("[data-header]");

  if (!header) {
    return;
  }

  let previousScrollPosition = window.scrollY;
  let ticking = false;

  function updateHeader() {
    const currentScrollPosition = window.scrollY;

    header.classList.toggle(
      "is-scrolled",
      currentScrollPosition > 20
    );

    if (
      currentScrollPosition >
        previousScrollPosition &&
      currentScrollPosition > 160 &&
      !document.body.classList.contains(
        "menu-is-open"
      )
    ) {
      header.classList.add("is-hidden");
    } else {
      header.classList.remove("is-hidden");
    }

    previousScrollPosition =
      Math.max(currentScrollPosition, 0);

    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(
          updateHeader
        );

        ticking = true;
      }
    },
    {
      passive: true
    }
  );

  updateHeader();
}


/* =========================================================
   CURRENT NAVIGATION
========================================================= */

function initCurrentNavigation() {
  const currentFile =
    window.location.pathname
      .split("/")
      .filter(Boolean)
      .pop() || "index.html";

  document
    .querySelectorAll(
      ".primary-navigation a[href], .site-footer a[href]"
    )
    .forEach((link) => {
      const href =
        link.getAttribute("href");

      if (
        !href ||
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
      ) {
        return;
      }

      const linkFile =
        href
          .split("?")[0]
          .split("#")[0];

      if (linkFile === currentFile) {
        link.classList.add("is-current");

        if (
          link.closest(
            ".primary-navigation"
          )
        ) {
          link.setAttribute(
            "aria-current",
            "page"
          );
        }
      }
    });
}


/* =========================================================
   REVEAL
========================================================= */

function initRevealAnimations() {
  if (
    window
      .matchMedia(
        "(prefers-reduced-motion: reduce)"
      )
      .matches
  ) {
    document.documentElement.classList.add(
      "reduce-motion"
    );

    return;
  }

  const elements =
    document.querySelectorAll(
      [
        "[data-reveal]",
        ".section-heading",
        ".service-entry",
        ".atmosphere-preview-card",
        ".principle-card",
        ".painting-service-card",
        ".property-card",
        ".area-card",
        ".process-steps > li",
        ".painting-process__steps > li",
        ".difference-flow__steps > li"
      ].join(",")
    );

  if (
    !elements.length ||
    !("IntersectionObserver" in window)
  ) {
    elements.forEach((element) =>
      element.classList.add("is-visible")
    );

    return;
  }

  elements.forEach((element) =>
    element.classList.add("reveal-item")
  );

  const observer =
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add(
            "is-visible"
          );

          observer.unobserve(
            entry.target
          );
        });
      },
      {
        threshold: 0.12,
        rootMargin:
          "0px 0px -40px 0px"
      }
    );

  elements.forEach((element) =>
    observer.observe(element)
  );
}


/* =========================================================
   RESPONSIVE IMAGES
========================================================= */

function initResponsiveImages() {
  document
    .querySelectorAll("[data-image-key]")
    .forEach((element) => {
      const key =
        element.dataset.imageKey;

      const imageUrl =
        TRUECOAT_IMAGES[key];

      if (!imageUrl) {
        return;
      }

      if (element.tagName === "IMG") {
        element.src = imageUrl;
      } else {
        element.style.backgroundImage =
          `url("${imageUrl}")`;
      }
    });
}


/* =========================================================
   PRODUCT RAILS
========================================================= */

function initNativeProductRails() {
  const rails =
    document.querySelectorAll(
      [
        "[data-product-rail]",
        ".product-rail",
        ".project-products__rail",
        ".featured-products__rail",
        ".atmosphere-products__rail"
      ].join(",")
    );

  rails.forEach((rail) => {
    rail.classList.add("is-ready");

    rail.addEventListener(
      "wheel",
      (event) => {
        if (
          window.innerWidth >= 960 &&
          Math.abs(event.deltaY) >
            Math.abs(event.deltaX) &&
          rail.scrollWidth >
            rail.clientWidth
        ) {
          event.preventDefault();

          rail.scrollLeft +=
            event.deltaY;
        }
      },
      {
        passive: false
      }
    );

    rail.addEventListener(
      "scroll",
      () => {
        const maximumScroll =
          rail.scrollWidth -
          rail.clientWidth;

        rail.classList.toggle(
          "is-at-start",
          rail.scrollLeft <= 4
        );

        rail.classList.toggle(
          "is-at-end",
          maximumScroll <= 4 ||
            rail.scrollLeft >=
              maximumScroll - 4
        );
      },
      {
        passive: true
      }
    );

    rail.dispatchEvent(
      new Event("scroll")
    );
  });

  document
    .querySelectorAll(
      "[data-rail-next]"
    )
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          const selector =
            button.dataset.railNext;

          const rail = selector
            ? document.querySelector(
                selector
              )
            : button
                .closest("section")
                ?.querySelector(
                  "[data-product-rail]"
                );

          if (!rail) {
            return;
          }

          const card =
            rail.querySelector(
              ".product-card, .project-product-card, article"
            );

          const cardWidth = card
            ? card.getBoundingClientRect()
                .width
            : rail.clientWidth * 0.78;

          rail.scrollBy({
            left: cardWidth + 16,
            behavior: "smooth"
          });
        }
      );
    });

  document
    .querySelectorAll(
      "[data-rail-previous]"
    )
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          const selector =
            button.dataset
              .railPrevious;

          const rail = selector
            ? document.querySelector(
                selector
              )
            : button
                .closest("section")
                ?.querySelector(
                  "[data-product-rail]"
                );

          if (!rail) {
            return;
          }

          const card =
            rail.querySelector(
              ".product-card, .project-product-card, article"
            );

          const cardWidth = card
            ? card.getBoundingClientRect()
                .width
            : rail.clientWidth * 0.78;

          rail.scrollBy({
            left: -(cardWidth + 16),
            behavior: "smooth"
          });
        }
      );
    });
}


/* =========================================================
   LEGACY / ORGANIC PRODUCT SUPPORT
========================================================= */

function getProductFromCard(card) {
  if (!card) {
    return null;
  }

  const dataset = card.dataset;

  const name =
    dataset.productName ||
    dataset.productTitle ||
    card
      .querySelector(
        "[data-product-name], [data-product-title], h3, h2"
      )
      ?.textContent?.trim();

  if (!name) {
    return null;
  }

  const imageElement =
    card.querySelector("img");

  const linkElement =
    card.querySelector(
      "a[href]:not([href='#'])"
    );

  return {
    number:
      dataset.productNumber || "",

    name,

    price:
      dataset.productPrice ||
      card
        .querySelector(
          "[data-product-price]"
        )
        ?.textContent?.trim() ||
      "Teklif alınır",

    store:
      dataset.productStore ||
      dataset.productSource ||
      "TRUECOAT seçkisi",

    description:
      dataset.productDescription ||
      card
        .querySelector(
          "[data-product-description]"
        )
        ?.textContent?.trim() ||
      "Bu ürün, seçilen atmosferin renk ve malzeme dengesiyle uyumlu olduğu için projeye dahil edilmiştir.",

    dimensions:
      dataset.productDimensions ||
      "Ürün sayfasında belirtilir",

    material:
      dataset.productMaterial ||
      "Ürün sayfasında belirtilir",

    colour:
      dataset.productColour ||
      "Atmosfer paletiyle uyumlu",

    image:
      dataset.productImage ||
      imageElement?.src ||
      TRUECOAT_IMAGES.organicDetail,

    url:
      dataset.productUrl ||
      linkElement?.href ||
      "projects.html"
  };
}

function findProduct(
  productKey,
  trigger
) {
  if (
    productKey &&
    PRODUCT_LIBRARY[productKey]
  ) {
    return PRODUCT_LIBRARY[
      productKey
    ];
  }

  if (productKey) {
    const escapedKey =
      window.CSS &&
      typeof window.CSS.escape ===
        "function"
        ? CSS.escape(productKey)
        : productKey.replace(
            /["\\]/g,
            "\\$&"
          );

    const matchingCard =
      document.querySelector(
        `[data-product-card][data-product-id="${escapedKey}"], [data-product-id="${escapedKey}"][data-product-card]`
      );

    const cardProduct =
      getProductFromCard(
        matchingCard
      );

    if (cardProduct) {
      return cardProduct;
    }
  }

  if (!trigger) {
    return null;
  }

  const parentCard =
    trigger.closest(
      "[data-product-card]"
    );

  const productFromCard =
    getProductFromCard(parentCard);

  if (productFromCard) {
    return productFromCard;
  }

  const dataset =
    trigger.dataset;

  const name =
    dataset.productName ||
    dataset.productTitle;

  if (!name) {
    return null;
  }

  return {
    number:
      dataset.productNumber || "",

    name,

    price:
      dataset.productPrice ||
      "Teklif alınır",

    store:
      dataset.productStore ||
      dataset.productSource ||
      "TRUECOAT seçkisi",

    description:
      dataset.productDescription ||
      "Bu ürün, seçilen atmosferin renk ve malzeme dengesiyle uyumlu olduğu için projeye dahil edilmiştir.",

    dimensions:
      dataset.productDimensions ||
      "Ürün sayfasında belirtilir",

    material:
      dataset.productMaterial ||
      "Ürün sayfasında belirtilir",

    colour:
      dataset.productColour ||
      "Atmosfer paletiyle uyumlu",

    image:
      dataset.productImage ||
      TRUECOAT_IMAGES.mediterraneanDetail,

    url:
      dataset.productUrl ||
      "projects.html"
  };
}


/* =========================================================
   PRODUCT DRAWER
========================================================= */

function initProductDrawer() {
  /*
    Mediterranean / Modern canonical project pages
    are handled exclusively by project-detail.js.
  */
  if (
    document.body.classList.contains(
      "page-project-detail"
    )
  ) {
    return;
  }

  const drawer =
    document.querySelector(
      "[data-product-drawer]"
    );

  const backdrop =
    document.querySelector(
      "[data-drawer-backdrop]"
    );

  if (!drawer) {
    return;
  }

  const closeButtons =
    drawer.querySelectorAll(
      "[data-drawer-close]"
    );

  const drawerImage =
    drawer.querySelector(
      "[data-drawer-image]"
    );

  const drawerNumber =
    drawer.querySelector(
      "[data-drawer-number]"
    );

  const drawerName =
    drawer.querySelector(
      "[data-drawer-name], [data-drawer-title]"
    );

  const drawerPrice =
    drawer.querySelector(
      "[data-drawer-price]"
    );

  const drawerStore =
    drawer.querySelector(
      "[data-drawer-store], [data-drawer-source]"
    );

  const drawerDescription =
    drawer.querySelector(
      "[data-drawer-description]"
    );

  const drawerDimensions =
    drawer.querySelector(
      "[data-drawer-dimensions]"
    );

  const drawerMaterial =
    drawer.querySelector(
      "[data-drawer-material]"
    );

  const drawerColour =
    drawer.querySelector(
      "[data-drawer-colour]"
    );

  const drawerLink =
    drawer.querySelector(
      "[data-drawer-link]"
    );

  let lastFocusedElement = null;

  function renderProduct(product) {
    if (drawerImage) {
      drawerImage.src =
        product.image;

      drawerImage.alt =
        product.name;
    }

    if (drawerNumber) {
      drawerNumber.textContent =
        product.number;
    }

    if (drawerName) {
      drawerName.textContent =
        product.name;
    }

    if (drawerPrice) {
      drawerPrice.textContent =
        product.price;
    }

    if (drawerStore) {
      drawerStore.textContent =
        product.store;
    }

    if (drawerDescription) {
      drawerDescription.textContent =
        product.description;
    }

    if (drawerDimensions) {
      drawerDimensions.textContent =
        product.dimensions;
    }

    if (drawerMaterial) {
      drawerMaterial.textContent =
        product.material;
    }

    if (drawerColour) {
      drawerColour.textContent =
        product.colour;
    }

    if (drawerLink) {
      drawerLink.href =
        product.url;

      drawerLink.setAttribute(
        "target",
        "_blank"
      );

      drawerLink.setAttribute(
        "rel",
        "noopener noreferrer"
      );
    }
  }

  function openDrawer(
    product,
    trigger
  ) {
    lastFocusedElement =
      trigger ||
      document.activeElement;

    renderProduct(product);

    drawer.hidden = false;

    drawer.setAttribute(
      "aria-hidden",
      "false"
    );

    drawer.classList.add(
      "is-open"
    );

    if (backdrop) {
      backdrop.hidden = false;

      backdrop.classList.add(
        "is-visible"
      );
    }

    document.body.classList.add(
      "drawer-is-open"
    );

    lockPage();

    const focusableElements =
      getFocusableElements(drawer);

    if (focusableElements.length) {
      window.setTimeout(
        () =>
          focusableElements[
            0
          ].focus(),
        80
      );
    }
  }

  function closeDrawer() {
    drawer.classList.remove(
      "is-open"
    );

    drawer.setAttribute(
      "aria-hidden",
      "true"
    );

    if (backdrop) {
      backdrop.classList.remove(
        "is-visible"
      );
    }

    document.body.classList.remove(
      "drawer-is-open"
    );

    unlockPage();

    window.setTimeout(() => {
      drawer.hidden = true;

      if (backdrop) {
        backdrop.hidden = true;
      }
    }, 300);

    if (
      lastFocusedElement &&
      typeof lastFocusedElement.focus ===
        "function"
    ) {
      lastFocusedElement.focus();
    }
  }

  document
    .querySelectorAll(
      [
        "[data-product]",
        "[data-product-open]",
        "[data-product-id]"
      ].join(",")
    )
    .forEach((trigger) => {
      trigger.addEventListener(
        "click",
        (event) => {
          const productKey =
            trigger.dataset.product ||
            trigger.dataset
              .productOpen ||
            trigger.dataset
              .productId;

          const product =
            findProduct(
              productKey,
              trigger
            );

          if (!product) {
            return;
          }

          event.preventDefault();

          openDrawer(
            product,
            trigger
          );
        }
      );
    });

  closeButtons.forEach(
    (button) => {
      button.addEventListener(
        "click",
        closeDrawer
      );
    }
  );

  if (backdrop) {
    backdrop.addEventListener(
      "click",
      closeDrawer
    );
  }

  document.addEventListener(
    "keydown",
    (event) => {
      if (
        event.key === "Escape" &&
        drawer.classList.contains(
          "is-open"
        )
      ) {
        closeDrawer();
      }

      if (
        event.key !== "Tab" ||
        !drawer.classList.contains(
          "is-open"
        )
      ) {
        return;
      }

      const focusableElements =
        getFocusableElements(drawer);

      if (
        !focusableElements.length
      ) {
        return;
      }

      const firstElement =
        focusableElements[0];

      const lastElement =
        focusableElements[
          focusableElements.length -
            1
        ];

      if (
        event.shiftKey &&
        document.activeElement ===
          firstElement
      ) {
        event.preventDefault();
        lastElement.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement ===
          lastElement
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  );
}


/* =========================================================
   HOTSPOTS
========================================================= */

function initHotspots() {
  /*
    Canonical project pages use project-detail.js.
    This prevents double event handlers and wrong products.
  */
  if (
    document.body.classList.contains(
      "page-project-detail"
    )
  ) {
    return;
  }

  const hotspots =
    document.querySelectorAll(
      "[data-hotspot], .project-hotspot"
    );

  hotspots.forEach((hotspot) => {
    hotspot.addEventListener(
      "click",
      () => {
        const productKey =
          hotspot.dataset.hotspot ||
          hotspot.dataset.product ||
          hotspot.dataset
            .productOpen ||
          hotspot.dataset.productId;

        if (!productKey) {
          return;
        }

        const escapedKey =
          window.CSS &&
          typeof window.CSS.escape ===
            "function"
            ? CSS.escape(
                productKey
              )
            : productKey.replace(
                /["\\]/g,
                "\\$&"
              );

        const matchingTrigger =
          document.querySelector(
            [
              `[data-product="${escapedKey}"]`,
              `[data-product-open="${escapedKey}"]`,
              `[data-product-id="${escapedKey}"][data-product-card]`,
              `[data-product-card][data-product-id="${escapedKey}"]`
            ].join(",")
          );

        if (
          matchingTrigger &&
          matchingTrigger !== hotspot
        ) {
          matchingTrigger.click();
        }
      }
    );
  });
}


/* =========================================================
   PRODUCT LIST TOGGLE
========================================================= */

function initProductListToggle() {
  document
    .querySelectorAll(
      "[data-list-toggle]"
    )
    .forEach((button) => {
      const targetSelector =
        button.dataset.listTarget;

      const target =
        targetSelector
          ? document.querySelector(
              targetSelector
            )
          : document.querySelector(
              "[data-product-list]"
            );

      if (!target) {
        return;
      }

      const showLabel =
        button.dataset.showLabel ||
        "Ürün listesini göster";

      const hideLabel =
        button.dataset.hideLabel ||
        "Ürün listesini gizle";

      function updateButton() {
        const isHidden =
          target.classList.contains(
            "is-hidden"
          );

        button.setAttribute(
          "aria-expanded",
          String(!isHidden)
        );

        const textElement =
          button.querySelector(
            "[data-list-toggle-text], span"
          );

        if (textElement) {
          textElement.textContent =
            isHidden
              ? showLabel
              : hideLabel;
        } else {
          button.textContent =
            isHidden
              ? showLabel
              : hideLabel;
        }
      }

      button.addEventListener(
        "click",
        () => {
          target.classList.toggle(
            "is-hidden"
          );

          updateButton();
        }
      );

      updateButton();
    });
}


/* =========================================================
   PROJECT → REQUEST
========================================================= */

function initProjectRequestLinks() {
  const bodyProject =
    document.body.dataset.project ||
    document.querySelector(
      "[data-project-page]"
    )?.dataset.projectPage;

  if (!bodyProject) {
    return;
  }

  document
    .querySelectorAll(
      'a[href="request-atmosphere.html"], a[href^="request-atmosphere.html?"]'
    )
    .forEach((link) => {
      const url =
        new URL(
          link.href,
          window.location.href
        );

      if (
        !url.searchParams.has(
          "project"
        )
      ) {
        url.searchParams.set(
          "project",
          bodyProject
        );
      }

      link.href =
        `${url.pathname
          .split("/")
          .pop()}${url.search}`;
    });
}


/* =========================================================
   REQUEST PROJECT CONTEXT
========================================================= */

function getSelectedProject() {
  const parameters =
    new URLSearchParams(
      window.location.search
    );

  const rawProject =
    parameters.get("project") ||
    parameters.get("service") ||
    "mediterranean";

  return (
    PROJECT_DETAILS[rawProject] ||
    PROJECT_DETAILS.mediterranean
  );
}

function initRequestProjectContext() {
  if (
    !document.body.classList.contains(
      "page-request-atmosphere"
    )
  ) {
    return;
  }

  const project =
    getSelectedProject();

  const projectInput =
    document.querySelector(
      'input[name="project"], [data-request-project-input]'
    );

  const serviceInput =
    document.querySelector(
      'input[name="service"], [data-request-service-input]'
    );

  if (projectInput) {
    projectInput.value =
      project.name;
  }

  if (
    serviceInput &&
    project ===
      PROJECT_DETAILS.painting
  ) {
    serviceInput.value =
      "Profesyonel Boyama";
  }

  document
    .querySelectorAll(
      "[data-request-project-name]"
    )
    .forEach((element) => {
      element.textContent =
        project.name;
    });

  document
    .querySelectorAll(
      "[data-request-project-label]"
    )
    .forEach((element) => {
      element.textContent =
        project.label;
    });

  document
    .querySelectorAll(
      "[data-request-project-style]"
    )
    .forEach((element) => {
      element.textContent =
        project.style;
    });

  document
    .querySelectorAll(
      "[data-request-project-room]"
    )
    .forEach((element) => {
      element.textContent =
        project.room;
    });

  document
    .querySelectorAll(
      "[data-request-project-duration]"
    )
    .forEach((element) => {
      element.textContent =
        project.duration;
    });

  document
    .querySelectorAll(
      "[data-request-project-image]"
    )
    .forEach((element) => {
      if (
        element.tagName === "IMG"
      ) {
        element.src =
          project.image;

        element.alt =
          `${project.name} proje görünümü`;
      } else {
        element.style.backgroundImage =
          `url("${project.image}")`;
      }
    });

  document
    .querySelectorAll(
      "[data-request-project-link]"
    )
    .forEach((element) => {
      element.href =
        project.page;

      if (
        element.classList.contains(
          "request-atmosphere__back"
        )
      ) {
        element.textContent =
          `← ${project.name} projesine dön`;
      }
    });
}


/* =========================================================
   PHOTO UPLOAD
========================================================= */

function initPhotoUpload() {
  const inputs =
    document.querySelectorAll(
      [
        'input[type="file"][data-photo-input]',
        'input[type="file"][name="photos"]',
        'input[type="file"][name="photos[]"]',
        'input[type="file"][name="roomPhotos"]',
        'input[type="file"][name="attachment"]'
      ].join(",")
    );

  inputs.forEach((input) => {
    const form =
      input.closest("form");

    const previewSelector =
      input.dataset.previewTarget;

    const previewContainer =
      previewSelector
        ? document.querySelector(
            previewSelector
          )
        : form?.querySelector(
            "[data-photo-preview]"
          );

    const statusElement =
      form?.querySelector(
        "[data-photo-status]"
      );

    const MAX_FILES = 4;

    const MAX_TOTAL_SIZE =
      10 * 1024 * 1024;

    const ALLOWED_TYPES = [
      "image/jpeg",
      "image/png",
      "image/webp"
    ];

    let selectedFiles = [];

    function totalSize(files) {
      return files.reduce(
        (sum, file) =>
          sum + file.size,
        0
      );
    }

    function updateInputFiles() {
      if (
        typeof DataTransfer ===
        "undefined"
      ) {
        return;
      }

      const transfer =
        new DataTransfer();

      selectedFiles.forEach(
        (file) => {
          transfer.items.add(
            file
          );
        }
      );

      input.files =
        transfer.files;
    }

    function renderPreviews() {
      if (previewContainer) {
        previewContainer.innerHTML =
          "";
      }

      selectedFiles.forEach(
        (file, index) => {
          if (
            !previewContainer
          ) {
            return;
          }

          const preview =
            document.createElement(
              "div"
            );

          preview.className =
            "photo-preview";

          const image =
            document.createElement(
              "img"
            );

          image.alt =
            `Yüklenen mekân fotoğrafı ${index + 1}`;

          const removeButton =
            document.createElement(
              "button"
            );

          removeButton.type =
            "button";

          removeButton.className =
            "photo-preview__remove";

          removeButton.setAttribute(
            "aria-label",
            `${file.name} fotoğrafını kaldır`
          );

          removeButton.textContent =
            "×";

          const reader =
            new FileReader();

          reader.addEventListener(
            "load",
            () => {
              image.src =
                reader.result;
            }
          );

          reader.readAsDataURL(
            file
          );

          removeButton.addEventListener(
            "click",
            () => {
              selectedFiles.splice(
                index,
                1
              );

              updateInputFiles();
              renderPreviews();
            }
          );

          preview.append(
            image,
            removeButton
          );

          previewContainer.appendChild(
            preview
          );
        }
      );

      if (statusElement) {
        if (
          !selectedFiles.length
        ) {
          statusElement.textContent =
            "Henüz fotoğraf seçilmedi";
        } else {
          const megabytes =
            (
              totalSize(
                selectedFiles
              ) /
              1024 /
              1024
            ).toFixed(1);

          statusElement.textContent =
            `${selectedFiles.length} fotoğraf seçildi · ${megabytes} MB`;
        }
      }
    }

    input.addEventListener(
      "change",
      () => {
        const incomingFiles =
          Array.from(
            input.files || []
          );

        let rejectedType = false;
        let rejectedLimit = false;

        for (
          const file of
          incomingFiles
        ) {
          if (
            !ALLOWED_TYPES.includes(
              file.type
            )
          ) {
            rejectedType = true;
            continue;
          }

          if (
            selectedFiles.length >=
            MAX_FILES
          ) {
            rejectedLimit = true;
            break;
          }

          const nextTotal =
            totalSize(
              selectedFiles
            ) + file.size;

          if (
            nextTotal >
            MAX_TOTAL_SIZE
          ) {
            rejectedLimit = true;
            continue;
          }

          const duplicate =
            selectedFiles.some(
              (selectedFile) =>
                selectedFile.name ===
                  file.name &&
                selectedFile.size ===
                  file.size &&
                selectedFile
                  .lastModified ===
                  file.lastModified
            );

          if (!duplicate) {
            selectedFiles.push(
              file
            );
          }
        }

        updateInputFiles();
        renderPreviews();

        if (statusElement) {
          if (rejectedType) {
            statusElement.textContent =
              "Yalnızca JPG, PNG veya WEBP fotoğrafları yükleyebilirsiniz.";
          } else if (
            rejectedLimit
          ) {
            statusElement.textContent =
              "En fazla 4 fotoğraf yükleyebilirsiniz ve toplam dosya boyutu 10 MB'ı geçemez.";
          }
        }
      }
    );

    if (form) {
      form.addEventListener(
        "reset",
        () => {
          window.setTimeout(
            () => {
              selectedFiles = [];

              input.value = "";

              if (
                previewContainer
              ) {
                previewContainer.innerHTML =
                  "";
              }

              if (
                statusElement
              ) {
                statusElement.textContent =
                  "Henüz fotoğraf seçilmedi";
              }
            },
            0
          );
        }
      );
    }

    renderPreviews();
  });
}


/* =========================================================
   FORM VALIDATION
========================================================= */

function validateRequestForm(form) {
  let isValid = true;

  form
    .querySelectorAll(
      "[required]"
    )
    .forEach((field) => {
      const wrapper =
        field.closest(
          ".form-field"
        ) ||
        field.closest(
          ".request-field"
        ) ||
        field.parentElement;

      let fieldIsValid =
        field.checkValidity();

      if (
        field.type ===
        "checkbox"
      ) {
        fieldIsValid =
          field.checked;
      }

      if (wrapper) {
        wrapper.classList.toggle(
          "has-error",
          !fieldIsValid
        );
      }

      field.setAttribute(
        "aria-invalid",
        String(!fieldIsValid)
      );

      if (!fieldIsValid) {
        isValid = false;
      }
    });

  return isValid;
}


/* =========================================================
   CART SUMMARY FOR REQUEST EMAIL
========================================================= */

function appendCartSummary(
  formData
) {
  try {
    const storedCart =
      localStorage.getItem(
        TRUECOAT_CART_STORAGE_KEY
      );

    if (!storedCart) {
      return;
    }

    const cart =
      JSON.parse(storedCart);

    if (
      !Array.isArray(cart) ||
      !cart.length
    ) {
      return;
    }

    const lines =
      cart.map(
        (item, index) => {
          const name =
            item.name ||
            item.title ||
            "Ürün";

          const price =
            item.price || "";

          const project =
            item.projectName ||
            item.projectSlug ||
            "";

          let line =
            `${index + 1}. ${name}`;

          if (price) {
            line +=
              ` — ${price}`;
          }

          if (project) {
            line +=
              ` — ${project}`;
          }

          return line;
        }
      );

    formData.set(
      "selectedProducts",
      lines.join("\n")
    );
  } catch (error) {
    console.warn(
      "TRUECOAT cart summary could not be read:",
      error
    );
  }
}


/* =========================================================
   AUTOMATIC EMAIL SUBMISSION
========================================================= */

async function submitRequestForm(
  form
) {
  const formData =
    new FormData(form);

  const selectedProject =
    getSelectedProject();

  formData.set(
    "_subject",
    `TRUECOAT keşif talebi — ${selectedProject.name}`
  );

  formData.set(
    "_template",
    "table"
  );

  formData.set(
    "_captcha",
    "false"
  );

  formData.set(
    "project",
    selectedProject.name
  );

  appendCartSummary(
    formData
  );

  const response =
    await fetch(
      "https://formsubmit.co/ajax/truecoatcyprus@gmail.com",
      {
        method: "POST",

        headers: {
          Accept:
            "application/json"
        },

        body: formData
      }
    );

  let responseData = null;

  try {
    responseData =
      await response.json();
  } catch (error) {
    responseData = null;
  }

  if (!response.ok) {
    throw new Error(
      responseData?.message ||
        "Form gönderilemedi."
    );
  }

  return responseData;
}


/* =========================================================
   REQUEST FORM
========================================================= */

function initRequestForms() {
  const forms =
    document.querySelectorAll(
      "[data-request-form], .request-form"
    );

  forms.forEach((form) => {
    const submitButton =
      form.querySelector(
        '[type="submit"]'
      );

    const statusElement =
      form.querySelector(
        "[data-form-status], .form-status"
      );

    form
      .querySelectorAll(
        "input, select, textarea"
      )
      .forEach((field) => {
        const clearError = () => {
          const wrapper =
            field.closest(
              ".form-field"
            ) ||
            field.closest(
              ".request-field"
            ) ||
            field.parentElement;

          if (wrapper) {
            wrapper.classList.remove(
              "has-error"
            );
          }

          field.removeAttribute(
            "aria-invalid"
          );
        };

        field.addEventListener(
          "input",
          clearError
        );

        field.addEventListener(
          "change",
          clearError
        );
      });

    form.addEventListener(
      "submit",
      async (event) => {
        event.preventDefault();

        if (statusElement) {
          statusElement.hidden =
            false;

          statusElement.classList.remove(
            "is-error",
            "is-success"
          );
        }

        if (
          !validateRequestForm(
            form
          )
        ) {
          if (statusElement) {
            statusElement.textContent =
              "Lütfen zorunlu alanları kontrol edin.";

            statusElement.classList.add(
              "is-error"
            );
          }

          const firstInvalidField =
            form.querySelector(
              '[aria-invalid="true"]'
            );

          if (
            firstInvalidField
          ) {
            firstInvalidField.focus();
          }

          return;
        }

        if (submitButton) {
          submitButton.disabled =
            true;

          submitButton.classList.add(
            "is-loading"
          );
        }

        if (statusElement) {
          statusElement.textContent =
            "Talebiniz TRUECOAT ekibine gönderiliyor...";
        }

        try {
          await submitRequestForm(
            form
          );

          if (
            statusElement
          ) {
            statusElement.hidden =
              false;

            statusElement.textContent =
              "Talebiniz başarıyla gönderildi. TRUECOAT ekibi sizinle iletişime geçecektir.";

            statusElement.classList.remove(
              "is-error"
            );

            statusElement.classList.add(
              "is-success"
            );
          }

          form.reset();
        } catch (error) {
          console.error(
            "TRUECOAT form gönderim hatası:",
            error
          );

          if (
            statusElement
          ) {
            statusElement.hidden =
              false;

            statusElement.textContent =
              "Talep gönderilemedi. Lütfen bağlantınızı kontrol edip tekrar deneyin.";

            statusElement.classList.remove(
              "is-success"
            );

            statusElement.classList.add(
              "is-error"
            );
          }
        } finally {
          if (
            submitButton
          ) {
            submitButton.disabled =
              false;

            submitButton.classList.remove(
              "is-loading"
            );
          }
        }
      }
    );
  });
}


/* =========================================================
   DETAILS / FAQ
========================================================= */

function initDetails() {
  document
    .querySelectorAll("details")
    .forEach((detail) => {
      const summary =
        detail.querySelector(
          "summary"
        );

      if (!summary) {
        return;
      }

      detail.addEventListener(
        "toggle",
        () => {
          summary.setAttribute(
            "aria-expanded",
            String(detail.open)
          );

          const symbol =
            summary.querySelector(
              "span"
            );

          if (symbol) {
            symbol.textContent =
              detail.open
                ? "−"
                : "+";
          }
        }
      );
    });
}


/* =========================================================
   EXTERNAL LINKS
========================================================= */

function initSafeExternalLinks() {
  document
    .querySelectorAll(
      'a[target="_blank"]'
    )
    .forEach((link) => {
      const currentRel =
        new Set(
          (
            link.getAttribute(
              "rel"
            ) || ""
          )
            .split(" ")
            .filter(Boolean)
        );

      currentRel.add(
        "noopener"
      );

      currentRel.add(
        "noreferrer"
      );

      link.setAttribute(
        "rel",
        Array.from(
          currentRel
        ).join(" ")
      );
    });
}


/* =========================================================
   INVALID LINKS
========================================================= */

function removeInvalidEmptyLinks() {
  document
    .querySelectorAll(
      'a[href="#"], a[href=""]'
    )
    .forEach((link) => {
      if (
        link.hasAttribute(
          "data-product"
        ) ||
        link.hasAttribute(
          "data-product-open"
        ) ||
        link.hasAttribute(
          "data-product-id"
        ) ||
        link.getAttribute(
          "role"
        ) === "button"
      ) {
        link.setAttribute(
          "href",
          "projects.html"
        );
      }
    });
}


/* =========================================================
   INIT
========================================================= */

function init() {
  initTruecoatContactDetails();

  removeInvalidEmptyLinks();

  initNavigation();

  initHeader();

  initCurrentNavigation();

  initRevealAnimations();

  initResponsiveImages();

  initNativeProductRails();

  initProductDrawer();

  initHotspots();

  initProductListToggle();

  initProjectRequestLinks();

  initRequestProjectContext();

  initPhotoUpload();

  initRequestForms();

  initDetails();

  initSafeExternalLinks();

  document.body.classList.add(
    "is-ready"
  );
}


/* =========================================================
   BOOT
========================================================= */

if (
  document.readyState ===
  "loading"
) {
  document.addEventListener(
    "DOMContentLoaded",
    init
  );
} else {
  init();
}
