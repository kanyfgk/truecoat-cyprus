"use strict";

(function () {
  const page = document.querySelector(".page-project-detail");

  if (!page) {
    return;
  }

  const drawer = document.querySelector("[data-product-drawer]");
  const shareButton = document.querySelector("[data-share-project]");
  const productRail = document.querySelector("[data-product-rail]");

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

  function cleanText(value) {
    return String(value || "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function getProjectName() {
    const heading = document.querySelector(".project-showcase__content h1");
    return cleanText(heading ? heading.textContent : "TRUECOAT Projesi");
  }

  function getProductCard(productId) {
    if (!productId) {
      return null;
    }

    return document.getElementById(productId);
  }

  function getProductData(card) {
    if (!card) {
      return null;
    }

    const image = card.querySelector(".project-product-card__media img");
    const category = card.querySelector(
      ".project-product-card__content > p"
    );
    const name = card.querySelector(
      ".project-product-card__content > h3"
    );
    const detail = card.querySelector(
      ".project-product-card__content > span"
    );
    const price = card.querySelector(
      ".project-product-card__content > strong"
    );

    const detailText = cleanText(detail ? detail.textContent : "");
    const detailParts = detailText
      .split("·")
      .map(function (item) {
        return cleanText(item);
      })
      .filter(Boolean);

    const categoryText = cleanText(
      category ? category.textContent : "Proje ürünü"
    );

    const nameText = cleanText(name ? name.textContent : "Seçilmiş ürün");

    return {
      id: card.id,
      image: image ? image.currentSrc || image.src : fallbackImage,
      imageAlt: image
        ? cleanText(image.alt)
        : nameText,
      category: categoryText,
      name: nameText,
      price: cleanText(price ? price.textContent : "Teklif alınır"),
      material: detailParts[0] || "Seçilmiş malzeme",
      colour: detailParts[1] || "Proje paleti",
      location: categoryText,
      description:
        nameText +
        ", " +
        getProjectName() +
        " atmosferinin renk, doku ve kullanım dengesi düşünülerek seçildi."
    };
  }

  function setDrawerContent(product) {
    if (!drawer || !product) {
      return;
    }

    const drawerImage = drawer.querySelector("[data-product-image]");
    const drawerCategory = drawer.querySelector(
      "[data-product-category]"
    );
    const drawerName = drawer.querySelector("[data-product-name]");
    const drawerPrice = drawer.querySelector("[data-product-price]");
    const drawerDescription = drawer.querySelector(
      "[data-product-description]"
    );
    const drawerMaterial = drawer.querySelector(
      "[data-product-material]"
    );
    const drawerColour = drawer.querySelector(
      "[data-product-colour]"
    );
    const drawerLocation = drawer.querySelector(
      "[data-product-location]"
    );

    if (drawerImage) {
      drawerImage.src = product.image || fallbackImage;
      drawerImage.alt = product.imageAlt || product.name;
    }

    if (drawerCategory) {
      drawerCategory.textContent = product.category;
    }

    if (drawerName) {
      drawerName.textContent = product.name;
    }

    if (drawerPrice) {
      drawerPrice.textContent = product.price;
    }

    if (drawerDescription) {
      drawerDescription.textContent = product.description;
    }

    if (drawerMaterial) {
      drawerMaterial.textContent = product.material;
    }

    if (drawerColour) {
      drawerColour.textContent = product.colour;
    }

    if (drawerLocation) {
      drawerLocation.textContent = product.location;
    }

    drawer.dataset.activeProduct = product.id;
  }

  function openProduct(productId, trigger) {
    if (!drawer) {
      return;
    }

    const card = getProductCard(productId);
    const product = getProductData(card);

    if (!product) {
      return;
    }

    lastFocusedElement =
      trigger instanceof HTMLElement
        ? trigger
        : document.activeElement;

    setDrawerContent(product);

    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("drawer-open");

    const closeButton = drawer.querySelector(
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

    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("drawer-open");

    if (
      lastFocusedElement &&
      typeof lastFocusedElement.focus === "function"
    ) {
      window.setTimeout(function () {
        lastFocusedElement.focus();
      }, 50);
    }
  }

  function handleProductTrigger(trigger) {
    const productId = trigger.getAttribute("data-product-trigger");

    if (!productId) {
      return;
    }

    openProduct(productId, trigger);
  }

  document.addEventListener("click", function (event) {
    const productTrigger = event.target.closest(
      "[data-product-trigger]"
    );

    if (productTrigger) {
      event.preventDefault();
      handleProductTrigger(productTrigger);
      return;
    }

    const closeButton = event.target.closest("[data-product-close]");

    if (closeButton) {
      event.preventDefault();
      closeProduct();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (
      event.key === "Escape" &&
      drawer &&
      drawer.classList.contains("is-open")
    ) {
      closeProduct();
      return;
    }

    if (
      event.key !== "Tab" ||
      !drawer ||
      !drawer.classList.contains("is-open")
    ) {
      return;
    }

    const focusableElements = Array.from(
      drawer.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    ).filter(function (element) {
      return element.offsetParent !== null;
    });

    if (!focusableElements.length) {
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement =
      focusableElements[focusableElements.length - 1];

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

  function copyShareLink(button) {
    const pageUrl = window.location.href;
    const originalText = button.textContent;

    function showResult(message) {
      button.textContent = message;

      window.setTimeout(function () {
        button.textContent = originalText;
      }, 1800);
    }

    if (
      navigator.clipboard &&
      typeof navigator.clipboard.writeText === "function"
    ) {
      navigator.clipboard
        .writeText(pageUrl)
        .then(function () {
          showResult("Bağlantı kopyalandı");
        })
        .catch(function () {
          showResult("Bağlantıyı kopyalayın");
        });

      return;
    }

    const temporaryInput = document.createElement("textarea");
    temporaryInput.value = pageUrl;
    temporaryInput.setAttribute("readonly", "");
    temporaryInput.style.position = "fixed";
    temporaryInput.style.opacity = "0";

    document.body.appendChild(temporaryInput);
    temporaryInput.select();

    try {
      document.execCommand("copy");
      showResult("Bağlantı kopyalandı");
    } catch (error) {
      showResult("Bağlantıyı kopyalayın");
    }

    temporaryInput.remove();
  }

  if (shareButton) {
    shareButton.addEventListener("click", function () {
      const shareTitle =
        shareButton.getAttribute("data-share-title") ||
        document.title;

      const shareData = {
        title: shareTitle,
        text:
          getProjectName() +
          " atmosferini TRUECOAT üzerinde inceleyin.",
        url: window.location.href
      };

      if (typeof navigator.share === "function") {
        navigator.share(shareData).catch(function (error) {
          if (error && error.name !== "AbortError") {
            copyShareLink(shareButton);
          }
        });
      } else {
        copyShareLink(shareButton);
      }
    });
  }

  document
    .querySelectorAll(".project-product-card__media img")
    .forEach(function (image) {
      image.addEventListener("error", function () {
        if (image.dataset.fallbackApplied === "true") {
          return;
        }

        image.dataset.fallbackApplied = "true";
        image.src = fallbackImage;
      });
    });

  const showcaseImage = document.querySelector(
    ".project-showcase__visual > img"
  );

  if (showcaseImage) {
    showcaseImage.addEventListener("error", function () {
      if (showcaseImage.dataset.fallbackApplied === "true") {
        return;
      }

      showcaseImage.dataset.fallbackApplied = "true";
      showcaseImage.src = fallbackImage;
    });
  }

  if (productRail) {
    productRail.setAttribute("tabindex", "0");
    productRail.setAttribute(
      "aria-label",
      "Projede kullanılan ürünler"
    );

    productRail.addEventListener(
      "wheel",
      function (event) {
        const canScrollHorizontally =
          productRail.scrollWidth > productRail.clientWidth;

        if (
          !canScrollHorizontally ||
          Math.abs(event.deltaX) > Math.abs(event.deltaY)
        ) {
          return;
        }

        if (window.innerWidth > 1100) {
          event.preventDefault();
          productRail.scrollLeft += event.deltaY;
        }
      },
      { passive: false }
    );
  }

  const urlParameters = new URLSearchParams(
    window.location.search
  );
  const requestedProduct = urlParameters.get("product");

  if (
    requestedProduct &&
    getProductCard(requestedProduct)
  ) {
    window.setTimeout(function () {
      openProduct(requestedProduct, null);
    }, 250);
  }
})();
