"use strict";

(function () {
  const page = document.querySelector(".page-project-detail");

  if (!page) {
    return;
  }

  /* =========================================================
     CORE REFERENCES
     ========================================================= */

  const drawer = document.querySelector("[data-product-drawer]");
  const shareButton = document.querySelector("[data-share-project]");
  const productRail = document.querySelector("[data-product-rail]");

  const CART_STORAGE_KEY = "truecoat_cart_v1";

  const fallbackImage =
    "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
        <rect width="1200" height="900" fill="#e8e1d7"/>
        <circle cx="600" cy="390" r="84" fill="#b6a58e"/>
        <path d="M360 690 525 510l112 120 91-98 150 158H360Z" fill="#8c7b67"/>
        <text x="600" y="785" text-anchor="middle"
          font-family="Arial, sans-serif" font-size="34" letter-spacing="8"
          fill="#453b31">TRUECOAT</text>
      </svg>
    `);

  let lastFocusedElement = null;

  /* =========================================================
     HELPERS
     ========================================================= */

  function cleanText(value) {
    return String(value || "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function escapeHTML(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function getProjectName() {
    const heading = document.querySelector(
      ".project-showcase__content h1"
    );

    return cleanText(
      heading ? heading.textContent : "TRUECOAT Projesi"
    );
  }

  function getProjectSlug() {
    if (
      document.body.classList.contains(
        "page-project-mediterranean"
      )
    ) {
      return "mediterranean";
    }

    if (
      document.body.classList.contains(
        "page-project-modern"
      )
    ) {
      return "modern";
    }

    if (
      document.body.classList.contains(
        "page-project-organic"
      )
    ) {
      return "organic";
    }

    const path = window.location.pathname
      .split("/")
      .pop()
      .replace(".html", "");

    return path || "truecoat-project";
  }

  function getProductCard(productId) {
    if (!productId) {
      return null;
    }

    return document.getElementById(productId);
  }

  /* =========================================================
     PRODUCT DATA
     Supports both project card structures
     ========================================================= */

  function getProductData(card) {
    if (!card) {
      return null;
    }

    const button = card.querySelector(
      "[data-product-open], [data-product-trigger]"
    );

    const image =
      card.querySelector(
        ".project-product-card__media img"
      ) ||
      card.querySelector(
        ".project-product-card__button img"
      ) ||
      card.querySelector("img");

    const category = card.querySelector(
      ".project-product-card__content > p"
    );

    const name =
      card.querySelector(
        ".project-product-card__content > h3"
      ) ||
      card.querySelector(
        ".project-product-card__content > strong"
      );

    const detail = card.querySelector(
      ".project-product-card__content > span"
    );

    const price =
      card.querySelector(
        ".project-product-card__content > b"
      ) ||
      card.querySelector(
        ".project-product-card__content > strong:last-child"
      );

    const dataset = button ? button.dataset : {};

    const nameText = cleanText(
      dataset.productName ||
        (name ? name.textContent : "Seçilmiş ürün")
    );

    const priceText = cleanText(
      dataset.productPrice ||
        (price ? price.textContent : "Teklif alınır")
    );

    const detailText = cleanText(
      detail ? detail.textContent : ""
    );

    const detailParts = detailText
      .split("·")
      .map(function (item) {
        return cleanText(item);
      })
      .filter(Boolean);

    const categoryText = cleanText(
      category
        ? category.textContent
        : "Proje ürünü"
    );

    const productImage =
      dataset.productImage ||
      (image
        ? image.currentSrc || image.src
        : fallbackImage);

    return {
      id: card.id,

      cartId:
        getProjectSlug() +
        "::" +
        card.id,

      project: getProjectName(),

      projectSlug: getProjectSlug(),

      image:
        productImage ||
        fallbackImage,

      imageAlt:
        image && cleanText(image.alt)
          ? cleanText(image.alt)
          : nameText,

      category:
        categoryText,

      name:
        nameText,

      price:
        priceText,

      material:
        detailParts[0] ||
        detailText ||
        "Seçilmiş malzeme",

      colour:
        detailParts[1] ||
        "Proje paleti",

      location:
        categoryText,

      description:
        cleanText(
          dataset.productDescription ||
            (
              nameText +
              ", " +
              getProjectName() +
              " atmosferinin renk, doku ve kullanım dengesi düşünülerek seçildi."
            )
        )
    };
  }

  /* =========================================================
     PRODUCT DRAWER
     Supports current HTML + previous drawer structure
     ========================================================= */

  function setDrawerContent(product) {
    if (!drawer || !product) {
      return;
    }

    const drawerImage =
      drawer.querySelector(
        "[data-drawer-image]"
      ) ||
      drawer.querySelector(
        "[data-product-image]"
      );

    const drawerCategory =
      drawer.querySelector(
        "[data-drawer-category]"
      ) ||
      drawer.querySelector(
        "[data-product-category]"
      );

    const drawerName =
      drawer.querySelector(
        "[data-drawer-name]"
      ) ||
      drawer.querySelector(
        "[data-product-name]"
      );

    const drawerPrice =
      drawer.querySelector(
        "[data-drawer-price]"
      ) ||
      drawer.querySelector(
        "[data-product-price]"
      );

    const drawerDescription =
      drawer.querySelector(
        "[data-drawer-description]"
      ) ||
      drawer.querySelector(
        "[data-product-description]"
      );

    const drawerMaterial =
      drawer.querySelector(
        "[data-drawer-material]"
      ) ||
      drawer.querySelector(
        "[data-product-material]"
      );

    const drawerColour =
      drawer.querySelector(
        "[data-drawer-colour]"
      ) ||
      drawer.querySelector(
        "[data-product-colour]"
      );

    const drawerLocation =
      drawer.querySelector(
        "[data-drawer-location]"
      ) ||
      drawer.querySelector(
        "[data-product-location]"
      );

    const drawerNumber =
      drawer.querySelector(
        "[data-drawer-number]"
      );

    if (drawerImage) {
      drawerImage.src =
        product.image ||
        fallbackImage;

      drawerImage.alt =
        product.imageAlt ||
        product.name;
    }

    if (drawerCategory) {
      drawerCategory.textContent =
        product.category;
    }

    if (drawerName) {
      drawerName.textContent =
        product.name;
    }

    if (drawerPrice) {
      drawerPrice.textContent =
        product.price;
    }

    if (drawerDescription) {
      drawerDescription.textContent =
        product.description;
    }

    if (drawerMaterial) {
      drawerMaterial.textContent =
        product.material;
    }

    if (drawerColour) {
      drawerColour.textContent =
        product.colour;
    }

    if (drawerLocation) {
      drawerLocation.textContent =
        product.location;
    }

    if (drawerNumber) {
      const numberMatch =
        String(product.id || "").match(/\d+/);

      drawerNumber.textContent =
        numberMatch
          ? numberMatch[0]
          : "";
    }

    drawer.dataset.activeProduct =
      product.id;

    updateAddToCartButton();
  }

  function openProduct(productId, trigger) {
    if (!drawer) {
      return;
    }

    const card =
      getProductCard(productId);

    const product =
      getProductData(card);

    if (!product) {
      return;
    }

    lastFocusedElement =
      trigger instanceof HTMLElement
        ? trigger
        : document.activeElement;

    setDrawerContent(product);

    drawer.classList.add("is-open");

    drawer.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.classList.add(
      "drawer-open"
    );

    const closeButton =
      drawer.querySelector(
        ".product-drawer__close"
      );

    window.setTimeout(function () {
      if (closeButton) {
        closeButton.focus();
      }
    }, 50);
  }

  function closeProduct() {
    if (!drawer) {
      return;
    }

    drawer.classList.remove(
      "is-open"
    );

    drawer.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.classList.remove(
      "drawer-open"
    );

    if (
      lastFocusedElement &&
      typeof lastFocusedElement.focus ===
        "function"
    ) {
      window.setTimeout(function () {
        lastFocusedElement.focus();
      }, 50);
    }
  }

  function handleProductTrigger(trigger) {
    let productId =
      trigger.getAttribute(
        "data-product-trigger"
      );

    if (!productId) {
      const card = trigger.closest(
        ".project-product-card"
      );

      productId =
        card ? card.id : "";
    }

    if (!productId) {
      return;
    }

    openProduct(
      productId,
      trigger
    );
  }

  /* =========================================================
     CART STORAGE
     ========================================================= */

  function getCart() {
    try {
      const stored =
        localStorage.getItem(
          CART_STORAGE_KEY
        );

      if (!stored) {
        return [];
      }

      const parsed =
        JSON.parse(stored);

      return Array.isArray(parsed)
        ? parsed
        : [];
    } catch (error) {
      console.warn(
        "TRUECOAT cart could not be read.",
        error
      );

      return [];
    }
  }

  function saveCart(cart) {
    try {
      localStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(cart)
      );
    } catch (error) {
      console.warn(
        "TRUECOAT cart could not be saved.",
        error
      );
    }

    updateCartInterface();
  }

  function cartContains(product) {
    if (!product) {
      return false;
    }

    return getCart().some(
      function (item) {
        return (
          item.cartId ===
          product.cartId
        );
      }
    );
  }

  function addProductToCart(product) {
    if (!product) {
      return;
    }

    const cart = getCart();

    const alreadyExists =
      cart.some(
        function (item) {
          return (
            item.cartId ===
            product.cartId
          );
        }
      );

    if (!alreadyExists) {
      cart.push({
        cartId:
          product.cartId,

        id:
          product.id,

        project:
          product.project,

        projectSlug:
          product.projectSlug,

        name:
          product.name,

        category:
          product.category,

        price:
          product.price,

        image:
          product.image,

        imageAlt:
          product.imageAlt,

        material:
          product.material,

        colour:
          product.colour,

        location:
          product.location,

        quantity: 1,

        addedAt:
          Date.now()
      });

      saveCart(cart);
    }

    updateAddToCartButton();

    closeProduct();

    openCart();
  }

  function removeProductFromCart(cartId) {
    const cart =
      getCart().filter(
        function (item) {
          return (
            item.cartId !== cartId
          );
        }
      );

    saveCart(cart);

    updateAddToCartButton();
  }

  /* =========================================================
     PRICE / CURRENCY
     ========================================================= */

  function getCurrencyFromPrice(price) {
    const text =
      cleanText(price).toUpperCase();

    if (
      text.includes("TL") ||
      text.includes("₺")
    ) {
      return "TRY";
    }

    if (
      text.includes("GBP") ||
      text.includes("£")
    ) {
      return "GBP";
    }

    if (
      text.includes("EUR") ||
      text.includes("€")
    ) {
      return "EUR";
    }

    if (
      text.includes("USD") ||
      text.includes("$")
    ) {
      return "USD";
    }

    return null;
  }

  function parsePrice(price) {
    const text =
      String(price || "");

    const match =
      text.match(
        /([\d.,]+)/
      );

    if (!match) {
      return 0;
    }

    let value =
      match[1];

    const dotCount =
      (value.match(/\./g) || []).length;

    const commaCount =
      (value.match(/,/g) || []).length;

    if (
      value.includes(".") &&
      value.includes(",")
    ) {
      if (
        value.lastIndexOf(",") >
        value.lastIndexOf(".")
      ) {
        value =
          value
            .replace(/\./g, "")
            .replace(",", ".");
      } else {
        value =
          value
            .replace(/,/g, "");
      }
    } else if (
      dotCount > 1
    ) {
      value =
        value.replace(/\./g, "");
    } else if (
      commaCount > 1
    ) {
      value =
        value.replace(/,/g, "");
    } else if (
      value.includes(".")
    ) {
      const parts =
        value.split(".");

      if (
        parts[1] &&
        parts[1].length === 3
      ) {
        value =
          parts.join("");
      }
    } else if (
      value.includes(",")
    ) {
      const parts =
        value.split(",");

      if (
        parts[1] &&
        parts[1].length === 3
      ) {
        value =
          parts.join("");
      } else {
        value =
          value.replace(",", ".");
      }
    }

    const number =
      Number.parseFloat(value);

    return Number.isFinite(number)
      ? number
      : 0;
  }

  function getCartCurrency(cart) {
    const currencies =
      cart
        .map(function (item) {
          return getCurrencyFromPrice(
            item.price
          );
        })
        .filter(Boolean);

    if (!currencies.length) {
      return "TRY";
    }

    const uniqueCurrencies =
      Array.from(
        new Set(currencies)
      );

    if (
      uniqueCurrencies.length === 1
    ) {
      return uniqueCurrencies[0];
    }

    return "MIXED";
  }

  function getCartTotal(cart) {
    return cart.reduce(
      function (total, item) {
        return (
          total +
          parsePrice(item.price) *
            (item.quantity || 1)
        );
      },
      0
    );
  }

  function formatCurrency(
    value,
    currency
  ) {
    const number =
      Number(value || 0);

    try {
      return new Intl.NumberFormat(
        "tr-TR",
        {
          style: "currency",
          currency: currency,
          minimumFractionDigits:
            Number.isInteger(number)
              ? 0
              : 2,
          maximumFractionDigits: 2
        }
      ).format(number);
    } catch (error) {
      return (
        number.toLocaleString(
          "tr-TR"
        ) +
        " " +
        currency
      );
    }
  }

  function formatCartTotal(cart) {
    if (!cart.length) {
      return "0 TL";
    }

    const currency =
      getCartCurrency(cart);

    if (
      currency === "MIXED"
    ) {
      return "Birden fazla para birimi";
    }

    return formatCurrency(
      getCartTotal(cart),
      currency
    );
  }

  /* =========================================================
     ADD TO CART BUTTON STATE
     ========================================================= */

  function updateAddToCartButton() {
    if (!drawer) {
      return;
    }

    const button =
      drawer.querySelector(
        "[data-add-to-cart]"
      );

    if (!button) {
      return;
    }

    const productId =
      drawer.dataset.activeProduct;

    const card =
      getProductCard(productId);

    const product =
      getProductData(card);

    if (
      product &&
      cartContains(product)
    ) {
      button.textContent =
        "Sepette ✓";

      button.classList.add(
        "is-added"
      );

      return;
    }

    button.textContent =
      "Sepete ekle";

    button.classList.remove(
      "is-added"
    );
  }

  /* =========================================================
     CART UI
     ========================================================= */

  function createCartInterface() {
    if (
      document.querySelector(
        "[data-truecoat-cart]"
      )
    ) {
      return;
    }

    const cartButton =
      document.createElement(
        "button"
      );

    cartButton.type =
      "button";

    cartButton.className =
      "truecoat-cart-button";

    cartButton.setAttribute(
      "data-truecoat-cart-button",
      ""
    );

    cartButton.setAttribute(
      "aria-label",
      "Sepeti aç"
    );

    cartButton.innerHTML = `
      <span class="truecoat-cart-button__label">
        Sepet
      </span>

      <span
        class="truecoat-cart-button__count"
        data-cart-count
      >
        0
      </span>
    `;

    document.body.appendChild(
      cartButton
    );

    const cartDrawer =
      document.createElement(
        "div"
      );

    cartDrawer.className =
      "truecoat-cart";

    cartDrawer.setAttribute(
      "data-truecoat-cart",
      ""
    );

    cartDrawer.setAttribute(
      "aria-hidden",
      "true"
    );

    cartDrawer.innerHTML = `
      <button
        class="truecoat-cart__backdrop"
        type="button"
        data-cart-close
        aria-label="Sepeti kapat"
      ></button>

      <aside
        class="truecoat-cart__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="truecoat-cart-title"
      >
        <div class="truecoat-cart__header">
          <div>
            <p>
              TRUECOAT SEPET
            </p>

            <h2 id="truecoat-cart-title">
              Seçtiğiniz ürünler
            </h2>
          </div>

          <button
            class="truecoat-cart__close"
            type="button"
            data-cart-close
            aria-label="Sepeti kapat"
          >
            ×
          </button>
        </div>

        <div
          class="truecoat-cart__items"
          data-cart-items
        ></div>

        <div
          class="truecoat-cart__empty"
          data-cart-empty
        >
          <p>
            Henüz ürün seçmediniz.
          </p>

          <span>
            Projedeki ürünlere dokunarak
            kendi seçiminizi oluşturabilirsiniz.
          </span>
        </div>

        <div
          class="truecoat-cart__footer"
          data-cart-footer
        >
          <div
            class="truecoat-cart__summary"
          >
            <span>
              Seçilen ürünler
            </span>

            <strong
              data-cart-total
            >
              0 TL
            </strong>
          </div>

          <button
            class="truecoat-cart__continue"
            type="button"
            data-cart-close
          >
            Ürün seçmeye devam et
          </button>

          <button
            class="truecoat-cart__design"
            type="button"
            data-cart-design
          >
            Seçilen ürünleri alana uygula
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </aside>
    `;

    document.body.appendChild(
      cartDrawer
    );

    updateCartInterface();
  }

  function updateCartInterface() {
    const cart =
      getCart();

    const count =
      document.querySelector(
        "[data-cart-count]"
      );

    const items =
      document.querySelector(
        "[data-cart-items]"
      );

    const empty =
      document.querySelector(
        "[data-cart-empty]"
      );

    const footer =
      document.querySelector(
        "[data-cart-footer]"
      );

    const total =
      document.querySelector(
        "[data-cart-total]"
      );

    const cartButton =
      document.querySelector(
        "[data-truecoat-cart-button]"
      );

    if (count) {
      count.textContent =
        String(cart.length);
    }

    if (cartButton) {
      cartButton.classList.toggle(
        "has-items",
        cart.length > 0
      );
    }

    if (empty) {
      empty.hidden =
        cart.length > 0;
    }

    if (footer) {
      footer.hidden =
        cart.length === 0;
    }

    if (total) {
      total.textContent =
        formatCartTotal(cart);
    }

    if (!items) {
      return;
    }

    items.innerHTML = "";

    cart.forEach(
      function (item) {
        const element =
          document.createElement(
            "article"
          );

        element.className =
          "truecoat-cart-item";

        const safeImage =
          escapeHTML(
            item.image ||
            fallbackImage
          );

        const safeImageAlt =
          escapeHTML(
            item.imageAlt ||
            item.name
          );

        const safeProject =
          escapeHTML(
            item.project || ""
          );

        const safeName =
          escapeHTML(
            item.name || ""
          );

        const safeMaterial =
          escapeHTML(
            item.material || ""
          );

        const safeColour =
          escapeHTML(
            item.colour || ""
          );

        const safePrice =
          escapeHTML(
            item.price || ""
          );

        const safeCartId =
          escapeHTML(
            item.cartId || ""
          );

        element.innerHTML = `
          <div
            class="truecoat-cart-item__image"
          >
            <img
              src="${safeImage}"
              alt="${safeImageAlt}"
            >
          </div>

          <div
            class="truecoat-cart-item__content"
          >
            <p>
              ${safeProject}
            </p>

            <h3>
              ${safeName}
            </h3>

            <span>
              ${safeMaterial}
              ${
                safeColour
                  ? " · " + safeColour
                  : ""
              }
            </span>

            <strong>
              ${safePrice}
            </strong>
          </div>

          <button
            type="button"
            class="truecoat-cart-item__remove"
            data-cart-remove="${safeCartId}"
            aria-label="${safeName} ürününü sepetten çıkar"
          >
            ×
          </button>
        `;

        items.appendChild(
          element
        );
      }
    );
  }

  function openCart() {
    const cartDrawer =
      document.querySelector(
        "[data-truecoat-cart]"
      );

    if (!cartDrawer) {
      return;
    }

    updateCartInterface();

    cartDrawer.classList.add(
      "is-open"
    );

    cartDrawer.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.classList.add(
      "cart-open"
    );
  }

  function closeCart() {
    const cartDrawer =
      document.querySelector(
        "[data-truecoat-cart]"
      );

    if (!cartDrawer) {
      return;
    }

    cartDrawer.classList.remove(
      "is-open"
    );

    cartDrawer.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.classList.remove(
      "cart-open"
    );
  }

  /* =========================================================
     CLICK EVENTS
     ========================================================= */

  document.addEventListener(
    "click",
    function (event) {
      const addToCartButton =
        event.target.closest(
          "[data-add-to-cart]"
        );

      if (addToCartButton) {
        event.preventDefault();

        if (!drawer) {
          return;
        }

        const productId =
          drawer.dataset.activeProduct;

        const card =
          getProductCard(productId);

        const product =
          getProductData(card);

        addProductToCart(product);

        return;
      }

      const cartButton =
        event.target.closest(
          "[data-truecoat-cart-button]"
        );

      if (cartButton) {
        event.preventDefault();

        openCart();

        return;
      }

      const removeButton =
        event.target.closest(
          "[data-cart-remove]"
        );

      if (removeButton) {
        event.preventDefault();

        const cartId =
          removeButton.getAttribute(
            "data-cart-remove"
          );

        removeProductFromCart(
          cartId
        );

        return;
      }

      const cartClose =
        event.target.closest(
          "[data-cart-close]"
        );

      if (cartClose) {
        event.preventDefault();

        closeCart();

        return;
      }

      const designButton =
        event.target.closest(
          "[data-cart-design]"
        );

      if (designButton) {
        event.preventDefault();

        window.dispatchEvent(
          new CustomEvent(
            "truecoat:open-room-planner",
            {
              detail: {
                cart: getCart()
              }
            }
          )
        );

        return;
      }

      const productTrigger =
        event.target.closest(
          "[data-product-trigger], [data-product-open]"
        );

      if (productTrigger) {
        event.preventDefault();

        handleProductTrigger(
          productTrigger
        );

        return;
      }

      const closeButton =
        event.target.closest(
          "[data-product-close]"
        );

      if (closeButton) {
        event.preventDefault();

        closeProduct();
      }
    }
  );

  /* =========================================================
     KEYBOARD
     ========================================================= */

  document.addEventListener(
    "keydown",
    function (event) {
      const cartDrawer =
        document.querySelector(
          "[data-truecoat-cart]"
        );

      if (
        event.key === "Escape" &&
        cartDrawer &&
        cartDrawer.classList.contains(
          "is-open"
        )
      ) {
        closeCart();

        return;
      }

      if (
        event.key === "Escape" &&
        drawer &&
        drawer.classList.contains(
          "is-open"
        )
      ) {
        closeProduct();

        return;
      }

      if (
        event.key !== "Tab" ||
        !drawer ||
        !drawer.classList.contains(
          "is-open"
        )
      ) {
        return;
      }

      const focusableElements =
        Array.from(
          drawer.querySelectorAll(
            'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        ).filter(
          function (element) {
            return (
              element.offsetParent !==
              null
            );
          }
        );

      if (
        !focusableElements.length
      ) {
        return;
      }

      const firstElement =
        focusableElements[0];

      const lastElement =
        focusableElements[
          focusableElements.length - 1
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

  /* =========================================================
     SHARE
     ========================================================= */

  function copyShareLink(button) {
    const pageUrl =
      window.location.href;

    const originalText =
      button.textContent;

    function showResult(message) {
      button.textContent =
        message;

      window.setTimeout(
        function () {
          button.textContent =
            originalText;
        },
        1800
      );
    }

    if (
      navigator.clipboard &&
      typeof navigator.clipboard
        .writeText === "function"
    ) {
      navigator.clipboard
        .writeText(pageUrl)
        .then(function () {
          showResult(
            "Bağlantı kopyalandı"
          );
        })
        .catch(function () {
          showResult(
            "Bağlantıyı kopyalayın"
          );
        });

      return;
    }

    const temporaryInput =
      document.createElement(
        "textarea"
      );

    temporaryInput.value =
      pageUrl;

    temporaryInput.setAttribute(
      "readonly",
      ""
    );

    temporaryInput.style.position =
      "fixed";

    temporaryInput.style.opacity =
      "0";

    document.body.appendChild(
      temporaryInput
    );

    temporaryInput.select();

    try {
      document.execCommand(
        "copy"
      );

      showResult(
        "Bağlantı kopyalandı"
      );
    } catch (error) {
      showResult(
        "Bağlantıyı kopyalayın"
      );
    }

    temporaryInput.remove();
  }

  if (shareButton) {
    shareButton.addEventListener(
      "click",
      function () {
        const shareTitle =
          shareButton.getAttribute(
            "data-share-title"
          ) ||
          document.title;

        const shareData = {
          title:
            shareTitle,

          text:
            getProjectName() +
            " atmosferini TRUECOAT üzerinde inceleyin.",

          url:
            window.location.href
        };

        if (
          typeof navigator.share ===
          "function"
        ) {
          navigator
            .share(shareData)
            .catch(
              function (error) {
                if (
                  error &&
                  error.name !==
                    "AbortError"
                ) {
                  copyShareLink(
                    shareButton
                  );
                }
              }
            );
        } else {
          copyShareLink(
            shareButton
          );
        }
      }
    );
  }

  /* =========================================================
     IMAGE FALLBACKS
     ========================================================= */

  document
    .querySelectorAll(
      ".project-product-card img"
    )
    .forEach(
      function (image) {
        image.addEventListener(
          "error",
          function () {
            if (
              image.dataset
                .fallbackApplied ===
              "true"
            ) {
              return;
            }

            image.dataset
              .fallbackApplied =
              "true";

            image.src =
              fallbackImage;
          }
        );
      }
    );

  const showcaseImage =
    document.querySelector(
      ".project-showcase__visual > img"
    );

  if (showcaseImage) {
    showcaseImage.addEventListener(
      "error",
      function () {
        if (
          showcaseImage.dataset
            .fallbackApplied ===
          "true"
        ) {
          return;
        }

        showcaseImage.dataset
          .fallbackApplied =
          "true";

        showcaseImage.src =
          fallbackImage;
      }
    );
  }

  /* =========================================================
     PRODUCT RAIL
     ========================================================= */

  if (productRail) {
    productRail.setAttribute(
      "tabindex",
      "0"
    );

    productRail.setAttribute(
      "aria-label",
      "Projede kullanılan ürünler"
    );

    productRail.addEventListener(
      "wheel",
      function (event) {
        const canScrollHorizontally =
          productRail.scrollWidth >
          productRail.clientWidth;

        if (
          !canScrollHorizontally ||
          Math.abs(event.deltaX) >
            Math.abs(event.deltaY)
        ) {
          return;
        }

        if (
          window.innerWidth >
          1100
        ) {
          event.preventDefault();

          productRail.scrollLeft +=
            event.deltaY;
        }
      },
      {
        passive: false
      }
    );
  }

  /* =========================================================
     URL PRODUCT OPEN
     ========================================================= */

  const urlParameters =
    new URLSearchParams(
      window.location.search
    );

  const requestedProduct =
    urlParameters.get("product");

  if (
    requestedProduct &&
    getProductCard(
      requestedProduct
    )
  ) {
    window.setTimeout(
      function () {
        openProduct(
          requestedProduct,
          null
        );
      },
      250
    );
  }

  /* =========================================================
     INITIALISE
     ========================================================= */

  createCartInterface();

  updateCartInterface();

})();
