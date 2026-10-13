/**
 * ABYNS STUDIO - Interactive Application Logic
 * Pure JavaScript - GitHub Pages compatible
 */

// Cafe Configuration
const CAFE_CONFIG = {
  name: "ABYNS STUDIO",
  whatsappNumber: "6281234567890", // Ganti dengan nomor WhatsApp Cafe Anda
  currencySymbol: "Rp",
  discounts: {
    "HEAVEN15": { type: "percent", value: 15, label: "Diskon 15% Spesial Pembukaan" },
    "ABYNSMAGIC": { type: "percent", value: 20, label: "Magic Discount 20%" },
    "ABYNS10K": { type: "nominal", value: 10000, label: "Potongan Rp 10.000", minSpend: 50000 }
  },
  autoDiscountThreshold: 100000,
  autoDiscountPercent: 10
};

// Menu Database
const MENU_ITEMS = [
  {
    id: "cloud-latte",
    name: "Cloud Latte",
    category: "coffee",
    price: 28000,
    oldPrice: 32000,
    image: "assets/images/cloud-latte.jpg",
    badge: "BEST SELLER",
    badgeIcon: "👑",
    scriptAccent: "Velvety Smooth",
    desc: "Smooth espresso with velvety milk and vanilla cloud foam.",
    ingredients: ["Espresso", "Fresh Milk", "Vanilla Syrup", "Cloud Cream"],
    flavorNotes: ["Creamy", "Smooth", "Vanilla", "Light Sweet"],
    servings: ["Iced", "Hot"]
  },
  {
    id: "heavenly-matcha",
    name: "Heavenly Matcha",
    category: "non-coffee",
    price: 30000,
    oldPrice: null,
    image: "assets/images/heavenly-matcha.jpg",
    badge: "FAVORITE",
    badgeIcon: "🤎",
    scriptAccent: "Creamy Matcha",
    desc: "Earthy matcha with creamy texture and gentle sweetness.",
    ingredients: ["Ceremonial Matcha", "Oat Milk", "Cold Foam", "Honey"],
    flavorNotes: ["Earthy", "Velvety", "Balanced", "Fragrant"],
    servings: ["Iced", "Hot"]
  },
  {
    id: "angels-berry",
    name: "Angel's Berry",
    category: "non-coffee",
    price: 32000,
    oldPrice: 35000,
    image: "assets/images/angels-berry.jpg",
    badge: "SEASONAL",
    badgeIcon: "🍃",
    scriptAccent: "Fresh Floral",
    desc: "Fresh berries, milk and a delicate touch of floral rose syrup.",
    ingredients: ["Strawberry Compote", "Pure Milk", "Rose Petals", "Cream"],
    flavorNotes: ["Fruity", "Floral", "Refreshing", "Sweet"],
    servings: ["Iced"]
  },
  {
    id: "moon-croissant",
    name: "Moon Croissant",
    category: "pastry",
    price: 24000,
    oldPrice: null,
    image: "assets/images/moon-croissant.jpg",
    badge: "SIGNATURE",
    badgeIcon: "✦",
    scriptAccent: "Buttery Perfection",
    desc: "Buttery golden French croissant with homemade vanilla custard cream.",
    ingredients: ["French Butter", "Flour", "Vanilla Pod", "Powdered Sugar"],
    flavorNotes: ["Flaky", "Buttery", "Vanilla", "Crisp"],
    servings: ["Warm"]
  },
  {
    id: "caramel-dream",
    name: "Caramel Dream",
    category: "coffee",
    price: 28000,
    oldPrice: null,
    image: "assets/images/caramel-dream.jpg",
    badge: null,
    desc: "A rich espresso balanced with handcrafted artisanal caramel and sea salt cream.",
    ingredients: ["Espresso", "Sea Salt Caramel", "Fresh Milk", "Cream Foam"],
    flavorNotes: ["Caramelized", "Savory Sweet", "Velvety", "Bold"],
    servings: ["Iced", "Hot"]
  },
  {
    id: "matcha-heaven",
    name: "Matcha Heaven",
    category: "tea",
    price: 30000,
    oldPrice: null,
    image: "assets/images/matcha-heaven.jpg",
    badge: null,
    desc: "Pure Japanese Uji green tea infused with light steam and honey.",
    ingredients: ["Uji Matcha", "Almond Milk", "Organic Honey"],
    flavorNotes: ["Clean", "Grassy", "Aromatic", "Calming"],
    servings: ["Hot", "Iced"]
  },
  {
    id: "strawberry-milk",
    name: "Strawberry Milk",
    category: "non-coffee",
    price: 32000,
    oldPrice: null,
    image: "assets/images/strawberry-milk.jpg",
    badge: null,
    desc: "Chunks of fresh organic strawberries blended in chilled milk and whipped topping.",
    ingredients: ["Strawberries", "Chilled Milk", "Vanilla Cold Foam"],
    flavorNotes: ["Sweet", "Creamy", "Tangy", "Indulgent"],
    servings: ["Iced"]
  },
  {
    id: "vanilla-cloud-latte",
    name: "Vanilla Cloud Latte",
    category: "coffee",
    price: 28000,
    oldPrice: null,
    image: "assets/images/cloud-latte.jpg",
    badge: "Popular",
    desc: "Our signature blend of single-origin espresso and Madagascar vanilla cream.",
    ingredients: ["Arabica Espresso", "Whole Milk", "Vanilla Bean", "Cloud Foam"],
    flavorNotes: ["Smooth", "Floral Vanilla", "Silky", "Rich"],
    servings: ["Iced", "Hot"]
  }
];

// App State
let cart = [];
let appliedDiscount = null;
let currentPreviewItem = MENU_ITEMS[0];
let currentServingSelection = "Iced";
let previewQuantity = 1;

// Format Rupiah
function formatRupiah(number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(number);
}

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  loadCartFromStorage();
  initNavbar();
  initHeroVideo();
  renderSignatureMenu();
  renderMenuGrid("all");
  initMenuFilters();
  initMenuSearch();
  initPreviewPanel(currentPreviewItem);
  initCartDrawer();
  initPromoSystem();
  initWhatsAppCheckout();
  initGalleryLightbox();
  initReviewsSlider();
});

/* ==========================================================================
   NAVBAR & MOBILE MENU
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector(".site-header");
  const mobileToggle = document.querySelector(".mobile-menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("open")) {
        navMenu.classList.remove("open");
      }
    });
  });
}

/* ==========================================================================
   HERO VIDEO CONTROLS
   ========================================================================== */
function initHeroVideo() {
  const video = document.getElementById("heroVideo");
  const toggleBtn = document.getElementById("videoToggleBtn");
  const icon = document.getElementById("playerBtnIcon");

  if (!video) return;

  // Try autoplay safely
  video.play().catch(() => {
    console.log("Autoplay was prevented, muted mode enabled.");
    video.muted = true;
    video.play();
  });

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        if (icon) icon.innerText = "❚❚";
        toggleBtn.setAttribute("title", "Jeda Video");
      } else {
        video.pause();
        if (icon) icon.innerText = "▶";
        toggleBtn.setAttribute("title", "Putar Video");
      }
    });
  }
}

/* ==========================================================================
   SIGNATURE MENU - REDESIGNED
   ========================================================================== */
function renderSignatureMenu() {
  const container = document.getElementById("signatureMenuGrid");
  if (!container) return;

  const signatures = MENU_ITEMS.slice(0, 4);

  container.innerHTML = signatures.map(item => `
    <div class="sig-card-luxury" data-id="${item.id}">
      <div class="sig-card-media" onclick="selectPreviewItem('${item.id}')">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        
        <!-- Top Badge -->
        <div class="sig-badge-pill">
          <span class="badge-icon">${item.badgeIcon || '✦'}</span>
          <span class="badge-text">${item.badge || 'SIGNATURE'}</span>
        </div>

        <!-- Wishlist / Heart Button -->
        <button class="sig-heart-btn" onclick="toggleWishlist(event, '${item.id}')" title="Sukai menu ini" aria-label="Favorite">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>

        <!-- Script Overlay Watermark -->
        ${item.scriptAccent ? `<div class="sig-script-watermark">${item.scriptAccent}</div>` : ''}
      </div>

      <div class="sig-card-info">
        <div class="sig-title-price-row">
          <h4 class="sig-card-name" onclick="selectPreviewItem('${item.id}')">${item.name}</h4>
          <div class="sig-price-box">
            <span class="sig-current-price">${formatRupiah(item.price)}</span>
            ${item.oldPrice ? `<span class="sig-strikethrough-price">${formatRupiah(item.oldPrice)}</span>` : ''}
          </div>
        </div>

        <p class="sig-card-caption">${item.desc}</p>

        <div class="sig-card-bottom-actions">
          <button class="btn-sig-view-details" onclick="selectPreviewItem('${item.id}'); document.getElementById('menu')?.scrollIntoView({behavior:'smooth'});">
            <span>View Details</span>
            <span>→</span>
          </button>
          <button class="btn-sig-quick-add" onclick="event.stopPropagation(); addToCartDirect('${item.id}')" title="Tambah ke keranjang">
            +
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

function toggleWishlist(e, itemId) {
  e.stopPropagation();
  const btn = e.currentTarget;
  btn.classList.toggle("favorited");
  const svg = btn.querySelector("svg");
  if (btn.classList.contains("favorited")) {
    svg.setAttribute("fill", "#c25e5e");
    svg.setAttribute("stroke", "#c25e5e");
    const item = MENU_ITEMS.find(m => m.id === itemId);
    showToast(`❤️ ${item ? item.name : 'Menu'} ditambahkan ke favorit!`);
  } else {
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
  }
}

/* ==========================================================================
   FULL MENU GRID & FILTERS
   ========================================================================== */
function renderMenuGrid(category = "all", searchQuery = "") {
  const container = document.getElementById("menuGrid");
  if (!container) return;

  let filtered = MENU_ITEMS;

  if (category !== "all") {
    filtered = filtered.filter(item => item.category === category);
  }

  if (searchQuery.trim() !== "") {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(item => 
      item.name.toLowerCase().includes(q) || 
      item.desc.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted)">
        <p style="font-size: 1.1rem; margin-bottom: 8px;">Menu tidak ditemukan ☕</p>
        <p style="font-size: 0.85rem;">Coba cari dengan kata kunci lain atau pilih kategori lain.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="menu-card ${currentPreviewItem && currentPreviewItem.id === item.id ? 'active-preview' : ''}" 
         onclick="selectPreviewItem('${item.id}')" data-id="${item.id}">
      <div class="card-img-wrap">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        ${item.badge ? `<span class="card-badge">${item.badge}</span>` : ''}
      </div>
      <div class="card-content">
        <h4 class="card-title">${item.name}</h4>
        <p class="card-desc">${item.desc}</p>
        <div class="card-footer">
          <div class="card-price-group">
            <span class="card-price">${formatRupiah(item.price)}</span>
            ${item.oldPrice ? `<span class="card-price-old">${formatRupiah(item.oldPrice)}</span>` : ''}
          </div>
          <button class="card-add-btn" onclick="event.stopPropagation(); addToCartDirect('${item.id}')" title="Tambah ke keranjang">
            +
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

function initMenuFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-category");
      const searchVal = document.getElementById("menuSearchInput")?.value || "";
      renderMenuGrid(category, searchVal);
    });
  });
}

function initMenuSearch() {
  const searchInput = document.getElementById("menuSearchInput");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const activeCategory = document.querySelector(".filter-btn.active")?.getAttribute("data-category") || "all";
    renderMenuGrid(activeCategory, e.target.value);
  });
}

/* ==========================================================================
   MENU PREVIEW PANEL
   ========================================================================== */
function selectPreviewItem(itemId) {
  const found = MENU_ITEMS.find(m => m.id === itemId);
  if (!found) return;

  currentPreviewItem = found;
  currentServingSelection = found.servings && found.servings.length > 0 ? found.servings[0] : "Standard";
  previewQuantity = 1;
  initPreviewPanel(currentPreviewItem);

  // Highlight active card
  document.querySelectorAll(".menu-card").forEach(card => {
    if (card.getAttribute("data-id") === itemId) {
      card.classList.add("active-preview");
    } else {
      card.classList.remove("active-preview");
    }
  });
}

function initPreviewPanel(item) {
  const panel = document.getElementById("menuPreviewPanel");
  if (!panel || !item) return;

  panel.innerHTML = `
    <div class="preview-header">
      <div class="preview-title-group">
        <h3>${item.name}</h3>
        <div class="preview-price">${formatRupiah(item.price)}</div>
      </div>
      <button onclick="panelCloseOnMobile()" style="color:var(--text-muted); font-size:1.2rem; display:none;" id="previewCloseBtn">&times;</button>
    </div>

    <div class="preview-image-wrap">
      <img src="${item.image}" alt="${item.name}">
    </div>

    <p class="preview-desc">${item.desc}</p>

    <div class="preview-detail-section">
      <div class="preview-detail-title">Komposisi / Ingredients</div>
      <div class="tag-list">
        ${item.ingredients.map(ing => `<span class="preview-tag">☕ ${ing}</span>`).join("")}
      </div>
    </div>

    <div class="preview-detail-section">
      <div class="preview-detail-title">Flavor Notes</div>
      <div class="tag-list">
        ${item.flavorNotes.map(fn => `<span class="preview-tag">✨ ${fn}</span>`).join("")}
      </div>
    </div>

    ${item.servings && item.servings.length > 1 ? `
      <div class="preview-detail-section">
        <div class="preview-detail-title">Pilihan Penyajian / Serving</div>
        <div class="serving-selector">
          ${item.servings.map(s => `
            <button class="serving-btn ${currentServingSelection === s ? 'active' : ''}" onclick="selectServing('${s}')">
              ${s === 'Iced' ? '❄️ Iced' : '☕ Hot'}
            </button>
          `).join("")}
        </div>
      </div>
    ` : ''}

    <div class="preview-actions">
      <div class="qty-control">
        <button class="qty-btn" onclick="adjustPreviewQty(-1)">-</button>
        <span class="qty-number" id="previewQtyDisplay">${previewQuantity}</span>
        <button class="qty-btn" onclick="adjustPreviewQty(1)">+</button>
      </div>
      <button class="btn btn-primary" style="flex:1" onclick="addPreviewItemToCart()">
        <span>+ Tambah ke Keranjang</span>
      </button>
    </div>
  `;
}

function selectServing(serving) {
  currentServingSelection = serving;
  const buttons = document.querySelectorAll(".serving-btn");
  buttons.forEach(btn => {
    if (btn.innerText.includes(serving)) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

function adjustPreviewQty(change) {
  previewQuantity = Math.max(1, previewQuantity + change);
  const display = document.getElementById("previewQtyDisplay");
  if (display) display.innerText = previewQuantity;
}

function addPreviewItemToCart() {
  if (!currentPreviewItem) return;
  addItemToCart(currentPreviewItem, previewQuantity, currentServingSelection);
  showToast(`✨ ${previewQuantity}x ${currentPreviewItem.name} ditambahkan ke keranjang!`);
}

function addToCartDirect(itemId) {
  const item = MENU_ITEMS.find(m => m.id === itemId);
  if (!item) return;
  const serving = item.servings ? item.servings[0] : "Standard";
  addItemToCart(item, 1, serving);
  showToast(`✨ 1x ${item.name} ditambahkan ke keranjang!`);
}

/* ==========================================================================
   CART SYSTEM & LOCAL STORAGE
   ========================================================================== */
function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem("abyns_cart");
    if (saved) cart = JSON.parse(saved);
  } catch (e) {
    cart = [];
  }
  updateCartUI();
}

function saveCartToStorage() {
  localStorage.setItem("abyns_cart", JSON.stringify(cart));
}

function addItemToCart(item, quantity = 1, serving = "Standard") {
  const existingIndex = cart.findIndex(c => c.id === item.id && c.serving === serving);
  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      serving: serving,
      quantity: quantity
    });
  }
  saveCartToStorage();
  updateCartUI();
  bumpCartBadge();
}

function updateCartQty(index, change) {
  if (cart[index]) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    saveCartToStorage();
    updateCartUI();
  }
}

function removeCartItem(index) {
  if (cart[index]) {
    const removedName = cart[index].name;
    cart.splice(index, 1);
    saveCartToStorage();
    updateCartUI();
    showToast(`Dihapus: ${removedName}`);
  }
}

function bumpCartBadge() {
  const badge = document.getElementById("cartCountBadge");
  if (!badge) return;
  badge.classList.add("bump");
  setTimeout(() => badge.classList.remove("bump"), 300);
}

function updateCartUI() {
  const countBadge = document.getElementById("cartCountBadge");
  const floatingCount = document.getElementById("floatingCartCount");
  const itemsContainer = document.getElementById("cartItemsList");
  const subtotalDisplay = document.getElementById("cartSubtotal");
  const discountDisplay = document.getElementById("cartDiscount");
  const totalDisplay = document.getElementById("cartTotal");
  const discountRow = document.getElementById("cartDiscountRow");

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (countBadge) countBadge.innerText = totalItems;
  if (floatingCount) floatingCount.innerText = totalItems;

  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon">☕</div>
        <h4>Keranjang Belanja Kosong</h4>
        <p style="font-size:0.85rem; margin-top:6px;">Silakan pilih menu favorit Anda dan nikmati momen ajaib di ABYNS Studio.</p>
      </div>
    `;
    if (subtotalDisplay) subtotalDisplay.innerText = formatRupiah(0);
    if (discountDisplay) discountDisplay.innerText = formatRupiah(0);
    if (totalDisplay) totalDisplay.innerText = formatRupiah(0);
    if (discountRow) discountRow.style.display = "none";
    return;
  }

  itemsContainer.innerHTML = cart.map((item, idx) => `
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-variant">Penyajian: ${item.serving}</div>
        <div class="cart-item-price">${formatRupiah(item.price)}</div>
        <div class="cart-item-actions">
          <div class="cart-item-qty">
            <button onclick="updateCartQty(${idx}, -1)">-</button>
            <span style="font-size:0.85rem; font-weight:700;">${item.quantity}</span>
            <button onclick="updateCartQty(${idx}, 1)">+</button>
          </div>
          <button class="cart-item-remove" onclick="removeCartItem(${idx})">Hapus</button>
        </div>
      </div>
    </div>
  `).join("");

  // Calculate Totals
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let discountAmount = 0;

  if (appliedDiscount) {
    if (appliedDiscount.type === "percent") {
      discountAmount = Math.round(subtotal * (appliedDiscount.value / 100));
    } else if (appliedDiscount.type === "nominal") {
      discountAmount = appliedDiscount.value;
    }
  } else if (subtotal >= CAFE_CONFIG.autoDiscountThreshold) {
    // Automatic discount for orders above threshold
    discountAmount = Math.round(subtotal * (CAFE_CONFIG.autoDiscountPercent / 100));
  }

  // Ensure discount doesn't exceed subtotal
  discountAmount = Math.min(discountAmount, subtotal);
  const total = subtotal - discountAmount;

  if (subtotalDisplay) subtotalDisplay.innerText = formatRupiah(subtotal);

  if (discountRow && discountDisplay) {
    if (discountAmount > 0) {
      discountRow.style.display = "flex";
      discountDisplay.innerText = `- ${formatRupiah(discountAmount)}`;
    } else {
      discountRow.style.display = "none";
    }
  }

  if (totalDisplay) totalDisplay.innerText = formatRupiah(total);
}

function initCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartBackdrop");
  const openButtons = document.querySelectorAll(".open-cart-btn");
  const closeBtn = document.getElementById("closeCartBtn");

  const openCart = () => {
    if (drawer && backdrop) {
      drawer.classList.add("active");
      backdrop.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  };

  const closeCart = () => {
    if (drawer && backdrop) {
      drawer.classList.remove("active");
      backdrop.classList.remove("active");
      document.body.style.overflow = "";
    }
  };

  openButtons.forEach(btn => btn.addEventListener("click", openCart));
  if (closeBtn) closeBtn.addEventListener("click", closeCart);
  if (backdrop) backdrop.addEventListener("click", closeCart);
}

/* ==========================================================================
   PROMO CODE SYSTEM
   ========================================================================== */
function initPromoSystem() {
  const applyBtn = document.getElementById("applyPromoBtn");
  const promoInput = document.getElementById("promoCodeInput");
  const msgEl = document.getElementById("promoMessage");

  if (!applyBtn || !promoInput) return;

  applyBtn.addEventListener("click", () => {
    const code = promoInput.value.trim().toUpperCase();
    if (!code) {
      msgEl.className = "promo-message error";
      msgEl.innerText = "Masukkan kode promo terlebih dahulu.";
      return;
    }

    const promo = CAFE_CONFIG.discounts[code];
    if (promo) {
      const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      if (promo.minSpend && subtotal < promo.minSpend) {
        msgEl.className = "promo-message error";
        msgEl.innerText = `Kode berlaku untuk minimal belanja ${formatRupiah(promo.minSpend)}.`;
        return;
      }

      appliedDiscount = promo;
      msgEl.className = "promo-message success";
      msgEl.innerText = `Berhasil! ${promo.label} telah diterapkan.`;
      updateCartUI();
      showToast(`🎉 Kode voucher ${code} berhasil dipasang!`);
    } else {
      msgEl.className = "promo-message error";
      msgEl.innerText = "Kode promo tidak valid atau telah kedaluwarsa.";
    }
  });
}

function applyPresetPromo(code) {
  const promoInput = document.getElementById("promoCodeInput");
  if (promoInput) {
    promoInput.value = code;
    document.getElementById("applyPromoBtn")?.click();
  }
  // Open cart drawer to see applied promo
  document.querySelector(".open-cart-btn")?.click();
}

/* ==========================================================================
   WHATSAPP ORDER FORMATTER & CHECKOUT
   ========================================================================== */
function initWhatsAppCheckout() {
  const checkoutBtn = document.getElementById("whatsappCheckoutBtn");
  if (!checkoutBtn) return;

  // Order method radio buttons
  const methodLabels = document.querySelectorAll(".method-label");
  methodLabels.forEach(label => {
    label.addEventListener("click", () => {
      methodLabels.forEach(l => l.classList.remove("active"));
      label.classList.add("active");
      const radio = label.querySelector("input");
      if (radio) radio.checked = true;

      // Update placeholder for address/table input
      const detailInput = document.getElementById("customerLocation");
      if (detailInput) {
        if (radio.value === "Dine In") {
          detailInput.placeholder = "Nomor Meja (Contoh: Meja 05)";
        } else if (radio.value === "Takeaway") {
          detailInput.placeholder = "Waktu Pengambilan (Contoh: Pk 14.30)";
        } else {
          detailInput.placeholder = "Alamat Lengkap Pengiriman";
        }
      }
    });
  });

  checkoutBtn.addEventListener("click", handleWhatsAppCheckout);
}

function handleWhatsAppCheckout() {
  if (cart.length === 0) {
    alert("Keranjang belanja masih kosong! Silakan pilih menu terlebih dahulu.");
    return;
  }

  const nameInput = document.getElementById("customerName");
  const phoneInput = document.getElementById("customerPhone");
  const locationInput = document.getElementById("customerLocation");
  const notesInput = document.getElementById("orderNotes");
  const selectedMethodRadio = document.querySelector("input[name='orderMethod']:checked");

  const name = nameInput ? nameInput.value.trim() : "";
  const phone = phoneInput ? phoneInput.value.trim() : "";
  const location = locationInput ? locationInput.value.trim() : "";
  const notes = notesInput ? notesInput.value.trim() : "";
  const method = selectedMethodRadio ? selectedMethodRadio.value : "Dine In";

  if (!name) {
    alert("Mohon masukkan Nama Pemesan.");
    if (nameInput) nameInput.focus();
    return;
  }

  if (!phone) {
    alert("Mohon masukkan Nomor WhatsApp Pemesan.");
    if (phoneInput) phoneInput.focus();
    return;
  }

  // Calculate Costs
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let discountAmount = 0;
  let discountLabel = "";

  if (appliedDiscount) {
    if (appliedDiscount.type === "percent") {
      discountAmount = Math.round(subtotal * (appliedDiscount.value / 100));
    } else if (appliedDiscount.type === "nominal") {
      discountAmount = appliedDiscount.value;
    }
    discountLabel = appliedDiscount.label;
  } else if (subtotal >= CAFE_CONFIG.autoDiscountThreshold) {
    discountAmount = Math.round(subtotal * (CAFE_CONFIG.autoDiscountPercent / 100));
    discountLabel = `Diskon Otomatis ${CAFE_CONFIG.autoDiscountPercent}% (> ${formatRupiah(CAFE_CONFIG.autoDiscountThreshold)})`;
  }

  discountAmount = Math.min(discountAmount, subtotal);
  const total = subtotal - discountAmount;

  // Format Date
  const now = new Date();
  const dateStr = now.toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });

  // Construct WhatsApp Message
  let message = `✨ *PESANAN BARU - ${CAFE_CONFIG.name}* ✨\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `📅 *Waktu:* ${dateStr} WIB\n`;
  message += `👤 *Nama:* ${name}\n`;
  message += `📱 *WhatsApp:* ${phone}\n`;
  message += `🍽️ *Metode:* ${method}\n`;
  if (location) {
    message += `📍 *Detail Tempat:* ${location}\n`;
  }
  message += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;
  message += `📋 *RINCIAN PESANAN:*\n`;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    message += `${index + 1}. *${item.name}* (${item.serving})\n`;
    message += `   ↳ ${item.quantity}x @ ${formatRupiah(item.price)} = *${formatRupiah(itemTotal)}*\n`;
  });

  message += `\n━━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `Subtotal: ${formatRupiah(subtotal)}\n`;
  if (discountAmount > 0) {
    message += `Diskon (${discountLabel}): -${formatRupiah(discountAmount)}\n`;
  }
  message += `*TOTAL BAYAR: ${formatRupiah(total)}*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━━\n`;

  if (notes) {
    message += `\n📝 *Catatan Khusus:*\n"${notes}"\n`;
  }

  message += `\nHalo kak, saya ingin mengonfirmasi pesanan ini di ${CAFE_CONFIG.name}. Terima kasih! ☕✨`;

  // Encode & Send via WhatsApp
  const encodedText = encodeURIComponent(message);
  const waUrl = `https://wa.me/${CAFE_CONFIG.whatsappNumber}?text=${encodedText}`;

  window.open(waUrl, "_blank");
}

/* ==========================================================================
   GALLERY LIGHTBOX
   ========================================================================== */
function initGalleryLightbox() {
  const modal = document.getElementById("galleryLightbox");
  const lightboxImg = document.getElementById("lightboxImage");
  const closeBtn = document.getElementById("closeLightboxBtn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  if (!modal || !lightboxImg) return;

  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      if (img) {
        lightboxImg.src = img.src;
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    });
  });

  const closeModal = () => {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}

/* ==========================================================================
   REVIEWS SLIDER
   ========================================================================== */
function initReviewsSlider() {
  const prevBtn = document.getElementById("prevReviewBtn");
  const nextBtn = document.getElementById("nextReviewBtn");
  const cardsContainer = document.querySelector(".reviews-grid");

  if (!cardsContainer || !prevBtn || !nextBtn) return;

  prevBtn.addEventListener("click", () => {
    cardsContainer.scrollBy({ left: -320, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    cardsContainer.scrollBy({ left: 320, behavior: "smooth" });
  });
}

/* ==========================================================================
   TOAST NOTIFICATION SYSTEM
   ========================================================================== */
function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <span class="toast-icon">✨</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Trigger show animation
  setTimeout(() => toast.classList.add("show"), 20);

  // Remove toast after delay
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}
