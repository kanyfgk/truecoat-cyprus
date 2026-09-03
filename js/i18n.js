/* =========================================================
   TRUECOAT I18N
   Languages: TR / EN / RU / FA / HE
   Build: 2026-09-03
========================================================= */

(() => {
  "use strict";

  const STORAGE_KEY = "truecoat_language";
  const DEFAULT_LANGUAGE = "tr";

  const LANGUAGES = Object.freeze({
    tr: {
      code: "TR",
      label: "Türkçe",
      locale: "tr-TR",
      direction: "ltr"
    },

    en: {
      code: "EN",
      label: "English",
      locale: "en-GB",
      direction: "ltr"
    },

    ru: {
      code: "RU",
      label: "Русский",
      locale: "ru-RU",
      direction: "ltr"
    },

    fa: {
      code: "FA",
      label: "فارسی",
      locale: "fa-IR",
      direction: "rtl"
    },

    he: {
      code: "HE",
      label: "עברית",
      locale: "he-IL",
      direction: "rtl"
    }
  });

  /* =====================================================
     TRANSLATIONS
  ===================================================== */

  const translations = {
    tr: {
      common: {
        skip: "İçeriğe geç",

        navPainting: "Boyama",
        navDifference: "Farkımız",
        navAtmospheres: "Atmosferler",
        navProjects: "Projeler",
        navInsights: "İçgörüler",
        navServiceAreas: "Hizmet Alanları",
        navDiscovery: "Ücretsiz Keşif",

        freeDiscovery: "Ücretsiz keşif",
        freeDiscoveryRequest: "Ücretsiz keşif talep et",

        whatsapp: "WhatsApp",
        contact: "İletişim",
        services: "Hizmetler",
        discover: "Keşfet",

        home: "Ana sayfa",
        backInsights: "İçgörülere dön",
        readPublication: "Yayını oku",
        viewAllPublications: "Tüm yayınları görüntüle",
        nextPublication: "Sonraki yayını oku",

        investorPartnership: "Yatırım ve iş birliği",
        developerPartnership: "Developer iş birliği",

        copyright:
          "© 2026 TRUECOAT. Tüm hakları saklıdır.",

        location:
          "Kuzey Kıbrıs Türk Cumhuriyeti",

        descriptor:
          "BOYAMA VE İÇ MEKÂNLAR"
      }
    },

    en: {
      common: {
        skip: "Skip to content",

        navPainting: "Painting",
        navDifference: "Why TRUECOAT",
        navAtmospheres: "Atmospheres",
        navProjects: "Projects",
        navInsights: "Insights",
        navServiceAreas: "Service Areas",
        navDiscovery: "Free Consultation",

        freeDiscovery: "Free consultation",
        freeDiscoveryRequest: "Request a free consultation",

        whatsapp: "WhatsApp",
        contact: "Contact",
        services: "Services",
        discover: "Explore",

        home: "Home",
        backInsights: "Back to Insights",
        readPublication: "Read article",
        viewAllPublications: "View all articles",
        nextPublication: "Read next article",

        investorPartnership: "Investment & partnerships",
        developerPartnership: "Developer partnership",

        copyright:
          "© 2026 TRUECOAT. All rights reserved.",

        location:
          "Turkish Republic of Northern Cyprus",

        descriptor:
          "PAINTING & INTERIORS"
      }
    },

    ru: {
      common: {
        skip: "Перейти к содержанию",

        navPainting: "Покраска",
        navDifference: "Наш подход",
        navAtmospheres: "Атмосферы",
        navProjects: "Проекты",
        navInsights: "Публикации",
        navServiceAreas: "Регионы обслуживания",
        navDiscovery: "Бесплатная консультация",

        freeDiscovery: "Бесплатная консультация",
        freeDiscoveryRequest:
          "Запросить бесплатную консультацию",

        whatsapp: "WhatsApp",
        contact: "Контакты",
        services: "Услуги",
        discover: "Обзор",

        home: "Главная",
        backInsights: "Вернуться к публикациям",
        readPublication: "Читать статью",
        viewAllPublications: "Все публикации",
        nextPublication: "Следующая статья",

        investorPartnership:
          "Инвестиции и партнёрство",

        developerPartnership:
          "Партнёрство с девелоперами",

        copyright:
          "© 2026 TRUECOAT. Все права защищены.",

        location:
          "Турецкая Республика Северного Кипра",

        descriptor:
          "ПОКРАСКА И ИНТЕРЬЕРЫ"
      }
    },

    fa: {
      common: {
        skip: "رفتن به محتوا",

        navPainting: "نقاشی",
        navDifference: "تفاوت ما",
        navAtmospheres: "فضاها",
        navProjects: "پروژه‌ها",
        navInsights: "دیدگاه‌ها",
        navServiceAreas: "مناطق خدمات",
        navDiscovery: "مشاوره رایگان",

        freeDiscovery: "مشاوره رایگان",
        freeDiscoveryRequest:
          "درخواست مشاوره رایگان",

        whatsapp: "واتساپ",
        contact: "ارتباط",
        services: "خدمات",
        discover: "کاوش",

        home: "صفحه اصلی",
        backInsights: "بازگشت به دیدگاه‌ها",
        readPublication: "مطالعه مقاله",
        viewAllPublications: "مشاهده همه مقالات",
        nextPublication: "مقاله بعدی",

        investorPartnership:
          "سرمایه‌گذاری و همکاری",

        developerPartnership:
          "همکاری با توسعه‌دهندگان",

        copyright:
          "© 2026 TRUECOAT. تمامی حقوق محفوظ است.",

        location:
          "جمهوری ترک قبرس شمالی",

        descriptor:
          "نقاشی و طراحی داخلی"
      }
    },

    he: {
      common: {
        skip: "מעבר לתוכן",

        navPainting: "צביעה",
        navDifference: "הגישה שלנו",
        navAtmospheres: "אווירות",
        navProjects: "פרויקטים",
        navInsights: "תובנות",
        navServiceAreas: "אזורי שירות",
        navDiscovery: "ייעוץ ללא עלות",

        freeDiscovery: "ייעוץ ללא עלות",
        freeDiscoveryRequest:
          "בקשת ייעוץ ללא עלות",

        whatsapp: "WhatsApp",
        contact: "יצירת קשר",
        services: "שירותים",
        discover: "גלו",

        home: "דף הבית",
        backInsights: "חזרה לתובנות",
        readPublication: "קריאת המאמר",
        viewAllPublications: "כל המאמרים",
        nextPublication: "למאמר הבא",

        investorPartnership:
          "השקעות ושותפויות",

        developerPartnership:
          "שותפות עם יזמים",

        copyright:
          "© 2026 TRUECOAT. כל הזכויות שמורות.",

        location:
          "הרפובליקה הטורקית של צפון קפריסין",

        descriptor:
          "צביעה ועיצוב פנים"
      }
    }
  };

  /* =====================================================
     EXACT TEXT MAPPING
     Works with existing TRUECOAT HTML without requiring
     every page to be rewritten immediately.
  ===================================================== */

  const commonTextMap = {
    "İçeriğe geç": "common.skip",

    "Boyama": "common.navPainting",
    "Farkımız": "common.navDifference",
    "Atmosferler": "common.navAtmospheres",
    "Projeler": "common.navProjects",
    "İçgörüler": "common.navInsights",
    "Hizmet Alanları": "common.navServiceAreas",
    "Hizmet alanları": "common.navServiceAreas",

    "Ücretsiz Keşif": "common.navDiscovery",
    "Ücretsiz keşif": "common.freeDiscovery",
    "Ücretsiz keşif talep et":
      "common.freeDiscoveryRequest",

    "WhatsApp": "common.whatsapp",
    "İletişim": "common.contact",
    "Hizmetler": "common.services",
    "Keşfet": "common.discover",

    "Ana sayfa": "common.home",
    "İçgörülere dön": "common.backInsights",
    "Yayını oku": "common.readPublication",
    "Tüm yayınları görüntüle":
      "common.viewAllPublications",
    "Sonraki yayını oku":
      "common.nextPublication",

    "Yatırım ve iş birliği":
      "common.investorPartnership",

    "Developer iş birliği":
      "common.developerPartnership",

    "© 2026 TRUECOAT. Tüm hakları saklıdır.":
      "common.copyright",

    "Kuzey Kıbrıs Türk Cumhuriyeti":
      "common.location",

    "BOYAMA VE İÇ MEKÂNLAR":
      "common.descriptor"
  };

  /* =====================================================
     HELPERS
  ===================================================== */

  function getNestedValue(object, path) {
    return path
      .split(".")
      .reduce(
        (value, key) =>
          value && value[key] !== undefined
            ? value[key]
            : null,
        object
      );
  }

  function translate(key, language) {
    const selected =
      translations[language] ||
      translations[DEFAULT_LANGUAGE];

    const fallback =
      translations[DEFAULT_LANGUAGE];

    return (
      getNestedValue(selected, key) ||
      getNestedValue(fallback, key) ||
      key
    );
  }

  function normaliseText(value) {
    return String(value || "")
      .replace(/\s+/g, " ")
      .trim();
  }

  /* =====================================================
     LANGUAGE STATE
  ===================================================== */

  function getSavedLanguage() {
    try {
      const saved =
        window.localStorage.getItem(STORAGE_KEY);

      if (saved && LANGUAGES[saved]) {
        return saved;
      }
    } catch (error) {
      console.warn(
        "TRUECOAT language storage unavailable.",
        error
      );
    }

    return null;
  }

  function detectBrowserLanguage() {
    const browserLanguage =
      String(
        navigator.language ||
        navigator.userLanguage ||
        ""
      )
        .toLowerCase()
        .split("-")[0];

    if (LANGUAGES[browserLanguage]) {
      return browserLanguage;
    }

    return DEFAULT_LANGUAGE;
  }

  function getInitialLanguage() {
    return (
      getSavedLanguage() ||
      detectBrowserLanguage() ||
      DEFAULT_LANGUAGE
    );
  }

  /* =====================================================
     DOM TRANSLATION
  ===================================================== */

  function translateMarkedElements(language) {
    document
      .querySelectorAll("[data-i18n]")
      .forEach((element) => {
        const key =
          element.getAttribute("data-i18n");

        if (!key) {
          return;
        }

        element.textContent =
          translate(key, language);
      });
  }

  function translateAttributes(language) {
    document
      .querySelectorAll("[data-i18n-placeholder]")
      .forEach((element) => {
        const key =
          element.getAttribute(
            "data-i18n-placeholder"
          );

        if (key) {
          element.setAttribute(
            "placeholder",
            translate(key, language)
          );
        }
      });

    document
      .querySelectorAll("[data-i18n-aria-label]")
      .forEach((element) => {
        const key =
          element.getAttribute(
            "data-i18n-aria-label"
          );

        if (key) {
          element.setAttribute(
            "aria-label",
            translate(key, language)
          );
        }
      });
  }

  function translateExistingCommonText(language) {
    const walker =
      document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT
      );

    const nodes = [];

    while (walker.nextNode()) {
      nodes.push(walker.currentNode);
    }

    nodes.forEach((node) => {
      const parent = node.parentElement;

      if (!parent) {
        return;
      }

      if (
        parent.closest(
          "script, style, textarea, code, pre"
        )
      ) {
        return;
      }

      if (
        parent.hasAttribute("data-i18n")
      ) {
        return;
      }

      const original =
        node.__truecoatOriginalText ||
        normaliseText(node.nodeValue);

      if (!original) {
        return;
      }

      node.__truecoatOriginalText = original;

      const key =
        commonTextMap[original];

      if (!key) {
        return;
      }

      node.nodeValue =
        translate(key, language);
    });
  }

  /* =====================================================
     DIRECTION
  ===================================================== */

  function applyDocumentLanguage(language) {
    const config =
      LANGUAGES[language] ||
      LANGUAGES[DEFAULT_LANGUAGE];

    document.documentElement.lang =
      language;

    document.documentElement.dir =
      config.direction;

    document.body.classList.toggle(
      "is-rtl",
      config.direction === "rtl"
    );

    document.body.dataset.language =
      language;
  }

  /* =====================================================
     LANGUAGE SWITCHER
  ===================================================== */

  function buildLanguageSwitcher() {
    const existing =
      document.querySelector(
        "[data-truecoat-language-switcher]"
      );

    if (existing) {
      return existing;
    }

    const wrapper =
      document.createElement("div");

    wrapper.className =
      "truecoat-language-switcher";

    wrapper.setAttribute(
      "data-truecoat-language-switcher",
      ""
    );

    wrapper.setAttribute(
      "aria-label",
      "Language"
    );

    Object.entries(LANGUAGES).forEach(
      ([language, config]) => {
        const button =
          document.createElement("button");

        button.type = "button";

        button.className =
          "truecoat-language-switcher__button";

        button.dataset.language =
          language;

        button.textContent =
          config.code;

        button.setAttribute(
          "aria-label",
          config.label
        );

        button.addEventListener(
          "click",
          () => {
            setLanguage(language);
          }
        );

        wrapper.appendChild(button);
      }
    );

    const header =
      document.querySelector(
        ".site-header__inner"
      );

    if (header) {
      header.appendChild(wrapper);
    } else {
      document.body.prepend(wrapper);
    }

    return wrapper;
  }

  function updateLanguageSwitcher(language) {
    document
      .querySelectorAll(
        ".truecoat-language-switcher__button"
      )
      .forEach((button) => {
        const isActive =
          button.dataset.language === language;

        button.classList.toggle(
          "is-active",
          isActive
        );

        button.setAttribute(
          "aria-pressed",
          String(isActive)
        );
      });

    document
      .querySelectorAll(
        ".insights-language span"
      )
      .forEach((element) => {
        const code =
          normaliseText(
            element.textContent
          ).toLowerCase();

        element.classList.toggle(
          "insights-language__active",
          code === language
        );
      });
  }

  /* =====================================================
     PUBLIC LANGUAGE CHANGE
  ===================================================== */

  function setLanguage(language) {
    if (!LANGUAGES[language]) {
      language = DEFAULT_LANGUAGE;
    }

    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        language
      );
    } catch (error) {
      console.warn(
        "TRUECOAT language preference could not be saved.",
        error
      );
    }

    applyDocumentLanguage(language);

    translateMarkedElements(language);
    translateAttributes(language);
    translateExistingCommonText(language);

    updateLanguageSwitcher(language);

    window.dispatchEvent(
      new CustomEvent(
        "truecoat:languagechange",
        {
          detail: {
            language,
            locale:
              LANGUAGES[language].locale,
            direction:
              LANGUAGES[language].direction
          }
        }
      )
    );
  }

  /* =====================================================
     STYLE
     Injected here so every page receives the language
     controller without another CSS file.
  ===================================================== */

  function injectLanguageStyles() {
    if (
      document.getElementById(
        "truecoat-i18n-style"
      )
    ) {
      return;
    }

    const style =
      document.createElement("style");

    style.id =
      "truecoat-i18n-style";

    style.textContent = `
      .truecoat-language-switcher {
        display: flex;
        align-items: center;
        gap: 3px;
        margin-left: 18px;
        padding: 4px;
        border: 1px solid rgba(20, 20, 20, 0.12);
        background: rgba(244, 241, 235, 0.78);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
      }

      .truecoat-language-switcher__button {
        appearance: none;
        min-width: 30px;
        height: 28px;
        padding: 0 7px;
        border: 0;
        background: transparent;
        color: rgba(20, 20, 20, 0.42);
        font-family: "Manrope", sans-serif;
        font-size: 9px;
        font-weight: 700;
        letter-spacing: 0.08em;
        cursor: pointer;
        transition:
          background 180ms ease,
          color 180ms ease;
      }

      .truecoat-language-switcher__button:hover {
        color: #171717;
      }

      .truecoat-language-switcher__button.is-active {
        background: #171717;
        color: #ffffff;
      }

      html[dir="rtl"] body {
        direction: rtl;
      }

      html[dir="rtl"] .brand,
      html[dir="rtl"] .primary-navigation,
      html[dir="rtl"] .site-footer,
      html[dir="rtl"] main {
        text-align: right;
      }

      html[dir="rtl"] .truecoat-language-switcher {
        margin-right: 18px;
        margin-left: 0;
      }

      @media (max-width: 959px) {
        .truecoat-language-switcher {
          order: 2;
          margin-right: 10px;
          margin-left: auto;
        }

        .truecoat-language-switcher__button {
          min-width: 27px;
          height: 27px;
          padding: 0 5px;
          font-size: 8px;
        }

        html[dir="rtl"] .truecoat-language-switcher {
          margin-right: auto;
          margin-left: 10px;
        }
      }
    `;

    document.head.appendChild(style);
  }

  /* =====================================================
     INIT
  ===================================================== */

  function init() {
    injectLanguageStyles();
    buildLanguageSwitcher();

    const initialLanguage =
      getInitialLanguage();

    setLanguage(initialLanguage);
  }

  /* =====================================================
     GLOBAL API
  ===================================================== */

  window.TRUECOAT_I18N = Object.freeze({
    languages: LANGUAGES,

    setLanguage,

    getLanguage() {
      return (
        document.body.dataset.language ||
        DEFAULT_LANGUAGE
      );
    },

    translate(key) {
      return translate(
        key,
        this.getLanguage()
      );
    }
  });

  if (
    document.readyState === "loading"
  ) {
    document.addEventListener(
      "DOMContentLoaded",
      init,
      { once: true }
    );
  } else {
    init();
  }
})();
