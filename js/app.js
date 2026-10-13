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
    oldPrice: 32000,
    image: "assets/images/caramel-dream.jpg",
    badge: "CHEF'S PICK",
    badgeIcon: "☕",
    scriptAccent: "Caramelized",
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
    oldPrice: 30000,
    image: "assets/images/cloud-latte.jpg",
    badge: "POPULAR",
    badgeIcon: "✨",
    scriptAccent: "Sweet Vanilla",
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
  initSignatureSlider();
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
   SIGNATURE MENU - LUXURY CARDS WITH WAVE DIVIDER (~~) & SLIDER
   ========================================================================== */
const SIG_BADGE_ICONS = {
  "cloud-latte": `<svg width="12" height="12" viewBox="0 0 24 24" fill="#B58D5A"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg>`,
  "heavenly-matcha": `<svg width="11" height="11" viewBox="0 0 24 24" fill="#B58D5A"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
  "angels-berry": `<svg width="11" height="11" viewBox="0 0 24 24" fill="#B58D5A"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.75C6.2 7.6 4.8 9.5 4 11.5c1.8-1.5 5.5-2.5 13-3.5z"/></svg>`,
  "moon-croissant": `<svg width="11" height="11" viewBox="0 0 100 100" fill="#B58D5A"><path d="M50 0 C50 35 65 50 100 50 C65 50 50 65 50 100 C50 65 35 50 0 50 C35 50 50 35 50 0 Z"/></svg>`,
  "caramel-dream": `<svg width="11" height="11" viewBox="0 0 24 24" fill="#B58D5A"><path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"/></svg>`,
  "vanilla-cloud-latte": `<svg width="11" height="11" viewBox="0 0 24 24" fill="#B58D5A"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z"/></svg>`
};

const SIG_WATERMARKS = {
  "cloud-latte": `<svg class="sig-card-watermark" viewBox="0 0 100 100" fill="none" stroke="#C5A880" stroke-width="1.3"><path d="M90 90 C70 80 50 75 40 50 C55 52 70 48 80 40 C75 55 65 65 90 90 Z M40 50 C35 40 38 25 50 15 C45 28 35 38 40 50 Z"/></svg>`,
  "heavenly-matcha": `<svg class="sig-card-watermark" viewBox="0 0 100 100" fill="none" stroke="#C5A880" stroke-width="1.3"><path d="M85 85 C65 75 55 60 50 40 C60 42 75 35 80 25 C75 40 65 50 85 85 Z M50 40 C40 35 30 40 20 50 C32 48 42 42 50 40 Z"/></svg>`,
  "angels-berry": `<svg class="sig-card-watermark" viewBox="0 0 100 100" fill="none" stroke="#C5A880" stroke-width="1.3"><path d="M95 95 C75 85 60 70 55 45 C68 48 80 40 85 30 C80 45 70 55 95 95 Z M55 45 C45 35 42 20 50 10 C46 22 40 32 55 45 Z"/></svg>`,
  "moon-croissant": `<svg class="sig-card-watermark" viewBox="0 0 100 100" fill="none" stroke="#C5A880" stroke-width="1.3"><path d="M25 75 C35 55 55 45 80 55 C70 68 55 75 42 76 Z M38 58 C48 48 60 48 70 55 M46 48 C55 42 62 44 68 48"/></svg>`,
  "caramel-dream": `<svg class="sig-card-watermark" viewBox="0 0 100 100" fill="none" stroke="#C5A880" stroke-width="1.3"><path d="M90 90 C70 80 50 75 40 50 C55 52 70 48 80 40 C75 55 65 65 90 90 Z"/></svg>`,
  "vanilla-cloud-latte": `<svg class="sig-card-watermark" viewBox="0 0 100 100" fill="none" stroke="#C5A880" stroke-width="1.3"><path d="M85 85 C65 75 55 60 50 40 C60 42 75 35 80 25 C75 40 65 50 85 85 Z"/></svg>`
};

function renderSignatureMenu() {
  const container = document.getElementById("signatureSliderTrack");
  if (!container) return;

  const signatures = MENU_ITEMS.slice(0, 6);

  container.innerHTML = signatures.map(item => `
    <div class="sig-card-luxury sig-card-${item.id}" data-id="${item.id}">
      <div class="sig-card-media" onclick="selectPreviewItem('${item.id}')">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        
        <!-- Top Vector Badge -->
        <div class="sig-badge-pill">
          <span class="badge-icon-svg">${SIG_BADGE_ICONS[item.id] || ''}</span>
          <span class="badge-text">${item.badge || 'SIGNATURE'}</span>
        </div>

        <!-- Wishlist / Heart Button with SVG -->
        <button class="sig-heart-btn" onclick="toggleWishlist(event, '${item.id}')" title="Sukai menu ini" aria-label="Favorite">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#5C4533" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>

        <!-- Delicate Handwritten Script on Photo -->
        ${item.scriptAccent ? `<div class="sig-script-watermark script-${item.id}">${item.scriptAccent}</div>` : ''}

        <!-- Organic Wave Divider (~~) -->
        <div class="sig-wave-divider">
          <svg class="sig-wave-svg" viewBox="0 0 500 50" preserveAspectRatio="none">
            <path d="M0,20 C85,42 165,4 250,22 C335,42 415,4 500,24 L500,50 L0,50 Z" fill="#FFFFFF"></path>
          </svg>
        </div>
      </div>

      <div class="sig-card-info">
        <div class="sig-title-price-row">
          <h4 class="sig-card-name" onclick="selectPreviewItem('${item.id}')">${item.name}</h4>
          <div class="sig-price-box">
            <span class="sig-current-price">${formatRupiah(item.price)}</span>
            ${item.oldPrice ? `
              <span class="sig-strikethrough-price">${formatRupiah(item.oldPrice)}</span>
            ` : `
              <div class="sig-price-ornament">
                <svg width="24" height="6" viewBox="0 0 24 6" fill="none">
                  <line x1="0" y1="3" x2="8" y2="3" stroke="#D4AF37" stroke-width="0.8"/>
                  <circle cx="12" cy="3" r="1.5" fill="#D4AF37"/>
                  <line x1="16" y1="3" x2="24" y2="3" stroke="#D4AF37" stroke-width="0.8"/>
                </svg>
              </div>
            `}
          </div>
        </div>

        <p class="sig-card-caption">${item.desc}</p>

        <div class="sig-card-bottom-actions">
          <button class="btn-sig-view-details" onclick="selectPreviewItem('${item.id}'); document.getElementById('menu')?.scrollIntoView({behavior:'smooth'});">
            <span>View Details</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          
          <button class="btn-sig-quick-add" onclick="event.stopPropagation(); addToCartDirect('${item.id}')" title="Tambah ke keranjang" aria-label="Tambah">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>

      <!-- Botanical Line Art Sketch Watermark -->
      ${SIG_WATERMARKS[item.id] || ''}
    </div>
  `).join("");
}

/* Signature Slider Logic */
function initSignatureSlider() {
  const track = document.getElementById("signatureSliderTrack");
  const prevBtn = document.getElementById("sigPrevBtn");
  const nextBtn = document.getElementById("sigNextBtn");
  const dotsContainer = document.getElementById("sigSliderDots");
  if (!track || !prevBtn || !nextBtn || !dotsContainer) return;

  const cards = track.querySelectorAll(".sig-card-luxury");
  if (cards.length === 0) return;

  // Render pagination dots
  dotsContainer.innerHTML = Array.from(cards).map((_, idx) => `
    <button class="sig-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}" aria-label="Slide ${idx + 1}"></button>
  `).join("");

  const dots = dotsContainer.querySelectorAll(".sig-dot");

  function getScrollStep() {
    const firstCard = cards[0];
    if (!firstCard) return 300;
    const style = window.getComputedStyle(track);
    const gap = parseFloat(style.gap) || 22;
    return firstCard.offsetWidth + gap;
  }

  function updateSliderState() {
    const scrollLeft = track.scrollLeft;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const step = getScrollStep();
    const activeIndex = Math.min(cards.length - 1, Math.max(0, Math.round(scrollLeft / step)));

    // Update buttons
    prevBtn.disabled = scrollLeft <= 8;
    nextBtn.disabled = scrollLeft >= maxScroll - 8;

    // Update active dot
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === activeIndex);
    });
  }

  // Arrow navigation
  prevBtn.addEventListener("click", () => {
    const step = getScrollStep();
    track.scrollBy({ left: -step, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    const step = getScrollStep();
    track.scrollBy({ left: step, behavior: "smooth" });
  });

  // Dot navigation
  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      const step = getScrollStep();
      track.scrollTo({ left: idx * step, behavior: "smooth" });
    });
  });

  // Track scroll listener
  track.addEventListener("scroll", () => {
    requestAnimationFrame(updateSliderState);
  }, { passive: true });

  window.addEventListener("resize", () => {
    updateSliderState();
  }, { passive: true });

  // Initial state call
  updateSliderState();
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
