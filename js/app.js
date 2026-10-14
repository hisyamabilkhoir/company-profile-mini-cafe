/**
 * NANA CAFE - Interactive Application Logic
 * Pure JavaScript - GitHub Pages compatible
 */

// Cafe Configuration
const CAFE_CONFIG = {
  name: "NANA CAFE",
  whatsappNumber: "6282221519098", // 0822-2151-9098
  whatsappDisplay: "0822-2151-9098",
  instagramPrimary: "https://www.instagram.com/nana_cafeshop/",
  instagramBranch: "https://www.instagram.com/nanacafeshop_bkl/",
  tiktok: "https://www.tiktok.com/@nanacafeshop",
  currencySymbol: "Rp",
  discounts: {
    "HEAVEN15": { type: "percent", value: 15, label: "Diskon 15% Spesial Pembukaan" },
    "NANAMAGIC": { type: "percent", value: 20, label: "Magic Discount 20%" },
    "NANA10K": { type: "nominal", value: 10000, label: "Potongan Rp 10.000", minSpend: 50000 },
    "ABYNSMAGIC": { type: "percent", value: 20, label: "Magic Discount 20%" },
    "ABYNS10K": { type: "nominal", value: 10000, label: "Potongan Rp 10.000", minSpend: 50000 }
  },
  autoDiscountThreshold: 100000,
  autoDiscountPercent: 10
};

/* ==========================================================================
   PREVIOUS MENU ITEMS (BACKUP - COMMENTED OUT PER USER REQUEST)
   ==========================================================================
const PREVIOUS_MENU_ITEMS = [
  {
    id: "cloud-latte",
    name: "Cloud Latte",
    category: "coffee",
    price: 28000,
    oldPrice: 32000,
    image: "assets/images/cloud-latte.webp",
    badge: "BEST SELLER",
    badgeType: "crown",
    scriptAccent: "Velvety Smooth",
    desc: "Smooth espresso with velvety milk and vanilla cloud foam. A perfect balance of bold and creamy in every sip.",
    shortDesc: "Smooth espresso with velvety milk and vanilla cloud foam.",
    ingredients: [
      { name: "Espresso", icon: "espresso" },
      { name: "Fresh Milk", icon: "milk" },
      { name: "Vanilla Syrup", icon: "vanilla" },
      { name: "Cloud Foam", icon: "cloud" }
    ],
    flavorNotes: [
      { name: "Creamy", icon: "cloud" },
      { name: "Smooth", icon: "wave" },
      { name: "Vanilla", icon: "flower" },
      { name: "Light Sweet", icon: "leaf" }
    ],
    servings: ["Iced", "Hot"]
  },
  {
    id: "heavenly-matcha",
    name: "Heavenly Matcha",
    category: "non-coffee",
    price: 30000,
    oldPrice: null,
    image: "assets/images/heavenly-matcha.webp",
    badge: "FAVORITE",
    badgeType: "heart",
    scriptAccent: "Creamy Matcha",
    desc: "Earthy ceremonial matcha with creamy texture and gentle sweetness.",
    shortDesc: "Earthy ceremonial matcha with creamy texture and gentle sweetness.",
    ingredients: [
      { name: "Ceremonial Matcha", icon: "leaf" },
      { name: "Fresh Milk", icon: "milk" },
      { name: "Organic Honey", icon: "honey" },
      { name: "Cold Foam", icon: "cloud" }
    ],
    flavorNotes: [
      { name: "Earthy", icon: "leaf" },
      { name: "Velvety", icon: "wave" },
      { name: "Balanced", icon: "sparkle" },
      { name: "Gentle Sweet", icon: "flower" }
    ],
    servings: ["Iced", "Hot"]
  },
  {
    id: "angels-berry",
    name: "Angel's Berry",
    category: "non-coffee",
    price: 32000,
    oldPrice: 35000,
    image: "assets/images/angels-berry.webp",
    badge: "SEASONAL",
    badgeType: "seasonal",
    scriptAccent: "Fresh Floral",
    desc: "Fresh berries, pure milk and a delicate touch of floral rose syrup.",
    shortDesc: "Fresh berries, pure milk and a delicate touch of floral rose syrup.",
    ingredients: [
      { name: "Berry Compote", icon: "berry" },
      { name: "Pure Milk", icon: "milk" },
      { name: "Rose Petals", icon: "flower" },
      { name: "Whipped Cream", icon: "cloud" }
    ],
    flavorNotes: [
      { name: "Fruity", icon: "berry" },
      { name: "Floral", icon: "flower" },
      { name: "Refreshing", icon: "wave" },
      { name: "Sweet", icon: "sparkle" }
    ],
    servings: ["Iced"]
  },
  {
    id: "moon-croissant",
    name: "Moon Croissant",
    category: "pastry",
    price: 24000,
    oldPrice: null,
    image: "assets/images/moon-croissant.webp",
    badge: "SIGNATURE",
    badgeType: "star",
    scriptAccent: "Buttery Perfection",
    desc: "Buttery golden French croissant with homemade vanilla custard cream.",
    shortDesc: "Buttery golden French croissant with homemade vanilla custard cream.",
    ingredients: [
      { name: "French Butter", icon: "croissant" },
      { name: "Artisan Dough", icon: "wheat" },
      { name: "Vanilla Custard", icon: "vanilla" },
      { name: "Powdered Sugar", icon: "sparkle" }
    ],
    flavorNotes: [
      { name: "Flaky", icon: "wave" },
      { name: "Buttery", icon: "sparkle" },
      { name: "Vanilla", icon: "flower" },
      { name: "Crisp", icon: "wheat" }
    ],
    servings: ["Warm", "Standard"]
  },
  {
    id: "caramel-dream",
    name: "Caramel Dream",
    category: "coffee",
    price: 28000,
    oldPrice: null,
    image: "assets/images/caramel-dream.webp",
    badge: null,
    badgeType: null,
    scriptAccent: "Caramelized",
    desc: "A rich espresso balanced with handcrafted caramel and sea salt cream.",
    shortDesc: "A rich espresso balanced with handcrafted caramel and sea salt cream.",
    ingredients: [
      { name: "Espresso", icon: "espresso" },
      { name: "Handcraft Caramel", icon: "honey" },
      { name: "Fresh Milk", icon: "milk" },
      { name: "Sea Salt Cream", icon: "cloud" }
    ],
    flavorNotes: [
      { name: "Caramelized", icon: "honey" },
      { name: "Savory Sweet", icon: "sparkle" },
      { name: "Velvety", icon: "wave" },
      { name: "Bold", icon: "espresso" }
    ],
    servings: ["Iced", "Hot"]
  },
  {
    id: "matcha-heaven",
    name: "Matcha Heaven",
    category: "tea",
    price: 30000,
    oldPrice: null,
    image: "assets/images/matcha-heaven.webp",
    badge: null,
    badgeType: null,
    desc: "Pure Japanese Uji green tea infused with light steam and honey.",
    shortDesc: "Pure Japanese Uji green tea infused with light steam and honey.",
    ingredients: [
      { name: "Uji Green Tea", icon: "leaf" },
      { name: "Steam Infusion", icon: "wave" },
      { name: "Organic Honey", icon: "honey" },
      { name: "Almond Milk", icon: "milk" }
    ],
    flavorNotes: [
      { name: "Clean", icon: "leaf" },
      { name: "Grassy", icon: "leaf" },
      { name: "Aromatic", icon: "flower" },
      { name: "Calming", icon: "wave" }
    ],
    servings: ["Hot", "Iced"]
  },
  {
    id: "classic-americano",
    name: "Classic Americano",
    category: "coffee",
    price: 24000,
    oldPrice: null,
    image: "assets/images/classic-americano.webp",
    badge: "CLASSIC",
    badgeType: "crown",
    desc: "Pure double shot espresso balanced with hot or chilled water and rich golden crema.",
    shortDesc: "Pure double shot espresso balanced with golden crema.",
    ingredients: [
      { name: "Double Espresso", icon: "espresso" },
      { name: "Filtered Water", icon: "drop" },
      { name: "Golden Crema", icon: "wave" },
      { name: "Roasted Notes", icon: "sparkle" }
    ],
    flavorNotes: [
      { name: "Bold", icon: "espresso" },
      { name: "Nutty", icon: "sparkle" },
      { name: "Dark Roasted", icon: "espresso" },
      { name: "Clean Finish", icon: "wave" }
    ],
    servings: ["Hot", "Iced"]
  },
  {
    id: "vanilla-croissant",
    name: "Vanilla Croissant",
    category: "pastry",
    price: 24000,
    oldPrice: null,
    image: "assets/images/moon-croissant.webp",
    badge: null,
    badgeType: null,
    desc: "Crisp flaky Parisian croissant topped with pure Madagascar vanilla glaze.",
    shortDesc: "Crisp flaky Parisian croissant topped with vanilla glaze.",
    ingredients: [
      { name: "French Butter", icon: "croissant" },
      { name: "Vanilla Glaze", icon: "vanilla" },
      { name: "Artisan Dough", icon: "wheat" },
      { name: "Fine Sugar", icon: "sparkle" }
    ],
    flavorNotes: [
      { name: "Flaky", icon: "wave" },
      { name: "Buttery", icon: "sparkle" },
      { name: "Sweet Vanilla", icon: "flower" },
      { name: "Crisp", icon: "wheat" }
    ],
    servings: ["Warm", "Standard"]
  },
  {
    id: "strawberry-milk",
    name: "Strawberry Milk",
    category: "non-coffee",
    price: 32000,
    oldPrice: null,
    image: "assets/images/strawberry-milk.webp",
    badge: "SWEET",
    badgeType: "heart",
    desc: "Chunks of fresh organic strawberries blended in chilled milk and whipped topping.",
    shortDesc: "Fresh organic strawberries blended in chilled milk.",
    ingredients: [
      { name: "Strawberries", icon: "berry" },
      { name: "Chilled Milk", icon: "milk" },
      { name: "Vanilla Foam", icon: "cloud" },
      { name: "Strawberry Puree", icon: "honey" }
    ],
    flavorNotes: [
      { name: "Sweet", icon: "sparkle" },
      { name: "Creamy", icon: "cloud" },
      { name: "Tangy", icon: "berry" },
      { name: "Indulgent", icon: "wave" }
    ],
    servings: ["Iced"]
  }
];
========================================================================== */

// Menu Database (19 Menu Spesial Nana Cafe dari Katalog Terbaru)
const MENU_ITEMS = [
  {
    id: "kopi-latte",
    name: "Kopi Latte",
    category: "coffee",
    price: 18000,
    oldPrice: 22000,
    image: "assets/images/menu/kopi-latte.webp",
    badge: "BEST SELLER",
    badgeType: "crown",
    scriptAccent: "Silky Espresso",
    desc: "Kopi Latte memadukan seduhan espresso pilihan dengan susu murni yang di-steam halus. Aroma kopi tetap kaya dan seimbang dengan kelembutan tekstur susu yang creamy dan menenangkan.",
    shortDesc: "Espresso aromatik berpadu susu steamed halus menghasilkan latte yang lembut dan seimbang.",
    ingredients: [
      { name: "Espresso Blend", icon: "espresso" },
      { name: "Fresh Milk", icon: "milk" },
      { name: "Microfoam", icon: "cloud" },
      { name: "Gula Tebu Alami", icon: "honey" }
    ],
    flavorNotes: [
      { name: "Kopi Aromatik", icon: "espresso" },
      { name: "Susu Lembut", icon: "milk" },
      { name: "Creamy Seimbang", icon: "cloud" },
      { name: "Smooth Finish", icon: "wave" }
    ],
    servings: ["Hot", "Iced"]
  },
  {
    id: "matcha-latte",
    name: "Matcha Latte",
    category: "tea",
    price: 18000,
    oldPrice: null,
    image: "assets/images/menu/matcha-latte.webp",
    badge: "SIGNATURE",
    badgeType: "star",
    scriptAccent: "Smooth Ceremonial",
    desc: "Matcha Latte menghadirkan perpaduan rasa teh hijau matcha Jepang yang khas dengan susu lembut, menciptakan sensasi creamy yang menyejukkan. Warna hijau alaminya kontras elegan dengan putihnya susu.",
    shortDesc: "Teh hijau matcha autentik berpadu susu segar menciptakan sensasi lembut dan creamy.",
    ingredients: [
      { name: "Bubuk Matcha Asli", icon: "leaf" },
      { name: "Susu Segar", icon: "milk" },
      { name: "Air Seduhan Hangat", icon: "drop" },
      { name: "Madu / Sirup", icon: "honey" }
    ],
    flavorNotes: [
      { name: "Earthy Matcha", icon: "leaf" },
      { name: "Creamy Lembut", icon: "cloud" },
      { name: "Sedikit Pahit Manis", icon: "sparkle" },
      { name: "Aromatik", icon: "flower" }
    ],
    servings: ["Iced", "Hot"]
  },
  {
    id: "orange-coffee",
    name: "Orange Coffee",
    category: "coffee",
    price: 18000,
    oldPrice: 22000,
    image: "assets/images/menu/orange-coffee.webp",
    badge: "EXCLUSIVE BREW",
    badgeType: "crown",
    scriptAccent: "Espresso Citrus",
    desc: "Orange Coffee mempertemukan aroma kopi espresso yang kuat dengan karakter citrus segar dari jeruk pilihan. Rasa pahit khas espresso dan manis-asam jeruk menciptakan kontras yang menyegarkan.",
    shortDesc: "Kontras espresso pekat dengan segarnya sari jeruk citrus yang eksotis dan berenergi.",
    ingredients: [
      { name: "Espresso Shot", icon: "espresso" },
      { name: "Jus Jeruk Segar", icon: "orange" },
      { name: "Irisan Jeruk", icon: "sparkle" },
      { name: "Es Batu Kristal", icon: "drop" }
    ],
    flavorNotes: [
      { name: "Citrusy", icon: "sparkle" },
      { name: "Pahit Ringan", icon: "espresso" },
      { name: "Manis-Asam Jeruk", icon: "orange" },
      { name: "Eksotis Segar", icon: "wave" }
    ],
    servings: ["Iced"]
  },
  {
    id: "tropical-fruit-smoothies",
    name: "Tropical Fruit Smoothies",
    category: "non-coffee",
    price: 45000,
    oldPrice: 50000,
    image: "assets/images/menu/tropical-fruit-smoothies.webp",
    badge: "PREMIUM SMOOTHIE",
    badgeType: "star",
    scriptAccent: "Pure Fruit Energy",
    desc: "Tropical Fruit Smoothies adalah minuman buah bertekstur kental lembut yang memadukan nanas segar, apel manis, pisang creamy, serta stroberi aromatik. Penuh nutrisi dan kesegaran tropis maksimal.",
    shortDesc: "Smoothie kental kaya vitamin dari perpaduan nanas, apel, pisang, dan stroberi segar.",
    ingredients: [
      { name: "Nanas Madu", icon: "orange" },
      { name: "Apel Segar", icon: "leaf" },
      { name: "Pisang Manis", icon: "croissant" },
      { name: "Buah Stroberi", icon: "berry" }
    ],
    flavorNotes: [
      { name: "Asam-Manis Tropis", icon: "sparkle" },
      { name: "Kental Lembut", icon: "cloud" },
      { name: "Segar Alami", icon: "drop" },
      { name: "Kaya Rasa Buah", icon: "wave" }
    ],
    servings: ["Iced"]
  },
  {
    id: "avocado-milk-creamy",
    name: "Avocado Milk Creamy",
    category: "non-coffee",
    price: 18000,
    oldPrice: 22000,
    image: "assets/images/menu/avocado-milk-creamy.webp",
    badge: "FAVORITE",
    badgeType: "heart",
    scriptAccent: "Rich Avocado",
    desc: "Avocado Milk Creamy adalah minuman alpukat mentega premium dengan tekstur kental lembut yang dipadukan bersama susu dingin untuk menghadirkan rasa gurih-manis creamy di setiap tegukan.",
    shortDesc: "Alpukat matang bertekstur kental lembut dipadukan dengan susu segar creamy.",
    ingredients: [
      { name: "Alpukat Mentega", icon: "leaf" },
      { name: "Susu Segar", icon: "milk" },
      { name: "Es Batu Kristal", icon: "drop" },
      { name: "Kental Manis", icon: "honey" }
    ],
    flavorNotes: [
      { name: "Creamy Kental", icon: "cloud" },
      { name: "Gurih Alpukat", icon: "leaf" },
      { name: "Manis Pas", icon: "honey" },
      { name: "Segar Dingin", icon: "wave" }
    ],
    servings: ["Iced"]
  },
  {
    id: "choco-strawberry",
    name: "ChocoStrawBerry",
    category: "non-coffee",
    price: 36000,
    oldPrice: 40000,
    image: "assets/images/menu/choco-strawberry.webp",
    badge: "SIGNATURE DESSERT",
    badgeType: "crown",
    scriptAccent: "Indulgent Duo",
    desc: "ChocoStrawBerry mempertemukan cita rasa cokelat kaya dengan kesegaran stroberi dalam satu minuman dessert yang memanjakan. Perpaduan manis cokelat dan sedikit asam khas stroberi menghasilkan kontras rasa memikat.",
    shortDesc: "Perpaduan mewah cokelat pekat dan kesegaran stroberi dalam sajian dessert drink.",
    ingredients: [
      { name: "Saus Cokelat", icon: "espresso" },
      { name: "Buah Stroberi", icon: "berry" },
      { name: "Susu Segar", icon: "milk" },
      { name: "Krim Kocok", icon: "cloud" }
    ],
    flavorNotes: [
      { name: "Manis Cokelat", icon: "espresso" },
      { name: "Asam Segar", icon: "berry" },
      { name: "Creamy Rich", icon: "cloud" },
      { name: "Berlapis Mewah", icon: "sparkle" }
    ],
    servings: ["Iced"]
  },
  {
    id: "hojicha-latte",
    name: "Hojicha Latte",
    category: "tea",
    price: 18000,
    oldPrice: null,
    image: "assets/images/menu/hojicha-latte.webp",
    badge: "ROASTED TEA",
    badgeType: "sparkle",
    scriptAccent: "Smoky & Nutty",
    desc: "Hojicha Latte merupakan minuman teh Jepang dari daun teh hijau yang dipanggang (roasted), menghasilkan cita rasa bernuansa nutty, hangat, dan sedikit smoky dengan kelembutan susu penyeimbang.",
    shortDesc: "Teh hijau panggang Jepang beraroma roasted nutty unik yang hangat dan menenangkan.",
    ingredients: [
      { name: "Roasted Hojicha", icon: "leaf" },
      { name: "Susu Segar", icon: "milk" },
      { name: "Seduhan Khusus", icon: "drop" },
      { name: "Pemanis Ringan", icon: "honey" }
    ],
    flavorNotes: [
      { name: "Roasted Nutty", icon: "sparkle" },
      { name: "Smoky Halus", icon: "warm" },
      { name: "Creamy Lembut", icon: "cloud" },
      { name: "Menenangkan", icon: "wave" }
    ],
    servings: ["Iced", "Hot"]
  },
  {
    id: "herbs-tea-drink",
    name: "Herbs Tea Drink",
    category: "tea",
    price: 22000,
    oldPrice: 25000,
    image: "assets/images/menu/herbs-tea-drink.webp",
    badge: "HERBAL SIGNATURE",
    badgeType: "sparkle",
    scriptAccent: "Pure Herb Infusion",
    desc: "Minuman herbal dengan perpaduan jahe, kunyit, sereh, dan madu murni yang menghasilkan cita rasa hangat, aromatik, serta manis yang lembut. Tersedia dalam kemasan botol kaca higienis yang elegan.",
    shortDesc: "Perpaduan jahe, kunyit, sereh, dan madu dengan aroma hangat menenangkan.",
    ingredients: [
      { name: "Jahe Alami", icon: "espresso" },
      { name: "Kunyit Segar", icon: "leaf" },
      { name: "Sereh Wangi", icon: "leaf" },
      { name: "Madu Murni", icon: "honey" }
    ],
    flavorNotes: [
      { name: "Aromatik Rempah", icon: "sparkle" },
      { name: "Hangat Nyaman", icon: "warm" },
      { name: "Earthy", icon: "leaf" },
      { name: "Manis Madu", icon: "honey" }
    ],
    servings: ["Warm", "Iced"]
  },
  {
    id: "strawberry-milk",
    name: "Strawberry Milk",
    category: "non-coffee",
    price: 18000,
    oldPrice: 20000,
    image: "assets/images/menu/strawberry-milk.webp",
    badge: "SWEET DELIGHT",
    badgeType: "heart",
    scriptAccent: "Strawberry Swirl",
    desc: "Strawberry Milk memadukan rasa stroberi yang manis dan sedikit asam dengan susu segar yang lembut. Tampilan warna merah muda berpadu puree stroberi segar menghasilkan minuman creamy yang menyegarkan.",
    shortDesc: "Perpaduan manis stroberi segar dengan susu lembut menghasilkan minuman creamy manis.",
    ingredients: [
      { name: "Puree Stroberi", icon: "berry" },
      { name: "Susu Segar", icon: "milk" },
      { name: "Sirup Stroberi", icon: "honey" },
      { name: "Es Batu Kristal", icon: "drop" }
    ],
    flavorNotes: [
      { name: "Manis Susu", icon: "milk" },
      { name: "Asam Segar", icon: "berry" },
      { name: "Creamy", icon: "cloud" },
      { name: "Smooth", icon: "wave" }
    ],
    servings: ["Iced"]
  },
  {
    id: "orange-lemonade",
    name: "Orange Lemonade",
    category: "non-coffee",
    price: 15000,
    oldPrice: null,
    image: "assets/images/menu/orange-lemonade.webp",
    badge: "SUMMER REFRESH",
    badgeType: "sparkle",
    scriptAccent: "Zesty Citrus",
    desc: "Orange Lemonade memadukan rasa jeruk manis-segar dengan karakter lemon yang cerah dan sedikit asam. Menghadirkan sensasi citrusy yang sangat menyegarkan di cuaca tropis.",
    shortDesc: "Kombinasi jeruk manis dan perasan lemon segar berkarakter cerah yang membangkitkan energi.",
    ingredients: [
      { name: "Jeruk Manis", icon: "orange" },
      { name: "Lemon Segar", icon: "lemon" },
      { name: "Air Soda Segar", icon: "wave" },
      { name: "Gula Tebu", icon: "honey" }
    ],
    flavorNotes: [
      { name: "Citrusy", icon: "sparkle" },
      { name: "Manis-Asam", icon: "wave" },
      { name: "Sangat Segar", icon: "drop" },
      { name: "Ringan", icon: "flower" }
    ],
    servings: ["Iced"]
  },
  {
    id: "tropical-semangka-mangga",
    name: "Fruit Tropical - Semangka Mangga",
    category: "non-coffee",
    price: 18000,
    oldPrice: null,
    image: "assets/images/menu/tropical-semangka-mangga.webp",
    badge: "TROPICAL BLISS",
    badgeType: "sparkle",
    scriptAccent: "Juicy Watermelon",
    desc: "Fruit Tropical Drink varian Semangka Mangga memadukan semangka merah yang berair segar dengan rasa manis pekat khas mangga harum manis. Kontras rasa yang cerah dan menggoda selera.",
    shortDesc: "Kesegaran semangka juicy berpadu manis harum mangga tropis dalam sajian warna cerah.",
    ingredients: [
      { name: "Semangka Merah", icon: "berry" },
      { name: "Mangga Matang", icon: "orange" },
      { name: "Daun Mint Segar", icon: "leaf" },
      { name: "Es Kristal", icon: "drop" }
    ],
    flavorNotes: [
      { name: "Juicy Segar", icon: "drop" },
      { name: "Manis Mangga", icon: "honey" },
      { name: "Ringan Menyejukkan", icon: "wave" },
      { name: "Aroma Tropis", icon: "flower" }
    ],
    servings: ["Iced"]
  },
  {
    id: "tropical-nanas-bengkoang-naga",
    name: "Fruit Tropical - Nanas Bengkoang Naga",
    category: "non-coffee",
    price: 18000,
    oldPrice: null,
    image: "assets/images/menu/tropical-nanas-bengkoang-naga.webp",
    badge: "EXOTIC TRIO",
    badgeType: "star",
    scriptAccent: "Dragonfruit Blend",
    desc: "Fruit Tropical Drink varian Nanas, Bengkoang, dan Buah Naga menawarkan kombinasi tiga karakter buah dan umbi segar. Nanas memberi rasa asam-manis, bengkoang memberi sensasi renyah, dan buah naga memberi warna ungu memikat.",
    shortDesc: "Perpaduan unik nanas tropis, sensasi renyah bengkoang, dan buah naga merah eksotis.",
    ingredients: [
      { name: "Nanas Madu", icon: "orange" },
      { name: "Bengkoang Renyah", icon: "leaf" },
      { name: "Buah Naga Merah", icon: "berry" },
      { name: "Es Kristal", icon: "drop" }
    ],
    flavorNotes: [
      { name: "Asam-Manis Tropis", icon: "sparkle" },
      { name: "Renyah Segar", icon: "wave" },
      { name: "Warna Eksotis", icon: "flower" },
      { name: "Ringan", icon: "drop" }
    ],
    servings: ["Iced"]
  },
  {
    id: "puding-cokelat",
    name: "Puding Cokelat",
    category: "dessert",
    price: 10000,
    oldPrice: 12000,
    image: "assets/images/menu/puding-cokelat.webp",
    badge: "FAVORITE DESSERT",
    badgeType: "heart",
    scriptAccent: "Velvety Chocolate",
    desc: "Puding cokelat menghadirkan kelembutan tekstur kenyal dengan dominasi kakao pekat. Dipadukan dengan fla susu manis dan taburan serutan cokelat untuk kenikmatan dessert klasik yang memanjakan.",
    shortDesc: "Dessert cokelat lembut dengan cita rasa kakao kaya dan krim manis lumer.",
    ingredients: [
      { name: "Bubuk Kakao Murni", icon: "espresso" },
      { name: "Susu Segar", icon: "milk" },
      { name: "Gula Tebu", icon: "honey" },
      { name: "Serutan Cokelat", icon: "sparkle" }
    ],
    flavorNotes: [
      { name: "Cokelat Dominan", icon: "espresso" },
      { name: "Lembut Lumer", icon: "wave" },
      { name: "Manis Pas", icon: "honey" },
      { name: "Creamy", icon: "cloud" }
    ],
    servings: ["Chilled", "Standard"]
  },
  {
    id: "puding-matcha",
    name: "Puding Matcha",
    category: "dessert",
    price: 10000,
    oldPrice: null,
    image: "assets/images/menu/puding-matcha.webp",
    badge: "JAPANESE DESSERT",
    badgeType: "leaf",
    scriptAccent: "Green Tea Cream",
    desc: "Puding matcha menghadirkan cita rasa teh hijau yang khas dengan tekstur halus dan creamy. Nuansa earthy serta sedikit pahit khas matcha berpadu seimbang dengan manis ringan dan krim lembut.",
    shortDesc: "Kelembutan puding berpadu dengan karakter teh hijau Uji yang khas dan creamy.",
    ingredients: [
      { name: "Bubuk Matcha", icon: "leaf" },
      { name: "Susu Segar", icon: "milk" },
      { name: "Fla Vanilla", icon: "vanilla" },
      { name: "Taburan Matcha", icon: "sparkle" }
    ],
    flavorNotes: [
      { name: "Earthy Matcha", icon: "leaf" },
      { name: "Creamy Halus", icon: "wave" },
      { name: "Pahit Seimbang", icon: "sparkle" },
      { name: "Manis Pas", icon: "honey" }
    ],
    servings: ["Chilled", "Standard"]
  },
  {
    id: "puding-ubi-ungu",
    name: "Puding Ubi Ungu",
    category: "dessert",
    price: 10000,
    oldPrice: null,
    image: "assets/images/menu/puding-ubi-ungu.webp",
    badge: "NATURAL BEAUTY",
    badgeType: "sparkle",
    scriptAccent: "Purple Velvet",
    desc: "Puding ubi ungu memadukan cita rasa ubi yang lembut dan manis alami dengan tekstur puding yang halus lumer. Warna ungu alami yang cantik menjadi daya tarik visual yang memesona.",
    shortDesc: "Warna cantik alami dari ubi ungu matang dengan rasa manis lembut dan tekstur lumer.",
    ingredients: [
      { name: "Ubi Ungu Halus", icon: "leaf" },
      { name: "Susu Segar", icon: "milk" },
      { name: "Krim Lembut", icon: "cloud" },
      { name: "Gula Alami", icon: "honey" }
    ],
    flavorNotes: [
      { name: "Manis Ubi Alami", icon: "honey" },
      { name: "Creamy Lembut", icon: "cloud" },
      { name: "Aroma Umbi Ringan", icon: "flower" },
      { name: "Halus Lumer", icon: "wave" }
    ],
    servings: ["Chilled", "Standard"]
  },
  {
    id: "puding-labu",
    name: "Puding Labu",
    category: "dessert",
    price: 10000,
    oldPrice: null,
    image: "assets/images/menu/puding-labu.webp",
    badge: "GOLDEN HARVEST",
    badgeType: "crown",
    scriptAccent: "Pumpkin Sweet",
    desc: "Puding labu menawarkan perpaduan warna oranye keemasan, rasa manis yang lembut, dan tekstur halus lumer di mulut. Labu kuning memberi karakter rasa yang ringan dan comforting dinikmati kapan saja.",
    shortDesc: "Warna oranye keemasan dengan keharuman labu kuning matang dan tekstur lembut.",
    ingredients: [
      { name: "Labu Kuning Halus", icon: "leaf" },
      { name: "Susu Murni", icon: "milk" },
      { name: "Krim Lembut", icon: "cloud" },
      { name: "Gula Tebu", icon: "honey" }
    ],
    flavorNotes: [
      { name: "Manis Lembut", icon: "honey" },
      { name: "Creamy", icon: "cloud" },
      { name: "Karakter Labu", icon: "leaf" },
      { name: "Comforting", icon: "wave" }
    ],
    servings: ["Chilled", "Standard"]
  },
  {
    id: "sop-buah-special",
    name: "Sop Buah Special",
    category: "dessert",
    price: 26000,
    oldPrice: 30000,
    image: "assets/images/menu/sop-buah-special.webp",
    badge: "FRUIT BOWL",
    badgeType: "heart",
    scriptAccent: "Refreshing Bowl",
    desc: "Sop Buah Special menyajikan potongan apel segar, pir renyah, dan nanas tropis dalam kuah susu dingin manis yang seimbang. Pilihan dessert buah segar yang pas untuk dinikmati bersama teman atau keluarga.",
    shortDesc: "Potongan apel, pir, dan nanas segar dalam kuah susu manis dingin yang menyegarkan.",
    ingredients: [
      { name: "Apel Segar", icon: "leaf" },
      { name: "Pir Renyah", icon: "drop" },
      { name: "Nanas Tropis", icon: "orange" },
      { name: "Kuah Susu Manis", icon: "milk" }
    ],
    flavorNotes: [
      { name: "Renyah Juicy", icon: "sparkle" },
      { name: "Manis-Asam Buah", icon: "wave" },
      { name: "Creamy Kuah Susu", icon: "cloud" },
      { name: "Segar Dingin", icon: "drop" }
    ],
    servings: ["Chilled", "Standard"]
  },
  {
    id: "banana-nugget",
    name: "Banana Nugget",
    category: "pastry",
    price: 36000,
    oldPrice: 40000,
    image: "assets/images/menu/banana-nugget.webp",
    badge: "CRISPY SNACK",
    badgeType: "crown",
    scriptAccent: "Golden Crispy",
    desc: "Banana Nugget adalah camilan berbahan dasar pisang manis yang dibalut lapisan renyah lalu digoreng hingga keemasan. Bagian luar terasa garing gurih, sedangkan bagian dalamnya tetap lembut dan legit.",
    shortDesc: "Potongan pisang manis berbalut tepung renyah keemasan dengan topping lumer nikmat.",
    ingredients: [
      { name: "Pisang Pilihan", icon: "croissant" },
      { name: "Tepung Panir", icon: "wheat" },
      { name: "Cokelat Leleh", icon: "espresso" },
      { name: "Keju Parut", icon: "sparkle" }
    ],
    flavorNotes: [
      { name: "Manis Pisang", icon: "honey" },
      { name: "Renyah di Luar", icon: "wheat" },
      { name: "Lembut di Dalam", icon: "cloud" },
      { name: "Gurih Manis", icon: "sparkle" }
    ],
    servings: ["Warm", "Standard"]
  },
  {
    id: "french-fries-nugget",
    name: "French Fries & Nugget",
    category: "pastry",
    price: 32000,
    oldPrice: 35000,
    image: "assets/images/menu/french-fries-nugget.webp",
    badge: "SHARING PLATTER",
    badgeType: "star",
    scriptAccent: "Crispy & Savory",
    desc: "French Fries & Nugget menggabungkan kentang goreng berwarna keemasan dengan nugget yang gurih dan renyah pada bagian luarnya. Disajikan hangat lengkap dengan saus sambal dan tomat lezat.",
    shortDesc: "Kentang goreng renyah keemasan dan nugget gurih lembut untuk teman ngobrol santai.",
    ingredients: [
      { name: "Kentang Goreng", icon: "wheat" },
      { name: "Nugget Renyah", icon: "sparkle" },
      { name: "Saus Sambal / Tomat", icon: "honey" },
      { name: "Bumbu Gurih", icon: "wheat" }
    ],
    flavorNotes: [
      { name: "Gurih Asin", icon: "sparkle" },
      { name: "Renyah Garing", icon: "wheat" },
      { name: "Empuk di Dalam", icon: "cloud" },
      { name: "Hangat Nikmat", icon: "warm" }
    ],
    servings: ["Warm", "Standard"]
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
  initFloatingActions();
  initStoryGallery();
  initLocationShowcase();
  initInteractiveMap();
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
   HERO VIDEO & AMBIENT AUDIO CONTROLS
   ========================================================================== */
function initHeroVideo() {
  const video = document.getElementById("heroVideo");
  const toggleBtn = document.getElementById("videoToggleBtn");
  const icon = document.getElementById("playerBtnIcon");
  const soundBtn = document.getElementById("soundToggleBtn");
  const soundIcon = document.getElementById("soundBtnIcon");

  if (!video) return;

  // Safe muted autoplay initially
  video.muted = true;
  video.play().catch(() => {
    console.log("Autoplay was prevented, muted mode enabled.");
  });

  let isSoundActive = false;
  let cafeAudioEngine = null;

  const SOUND_ICONS = {
    muted: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`,
    playing: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>`
  };

  const PLAYER_ICONS = {
    pause: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"></rect><rect x="14" y="4" width="4" height="16" rx="1"></rect></svg>`,
    play: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg>`
  };

  // Video Play / Pause Handler
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        if (icon) icon.innerHTML = PLAYER_ICONS.pause;
        toggleBtn.setAttribute("title", "Jeda Video");
        if (isSoundActive && cafeAudioEngine) {
          cafeAudioEngine.resume();
        }
      } else {
        video.pause();
        if (icon) icon.innerHTML = PLAYER_ICONS.play;
        toggleBtn.setAttribute("title", "Putar Video");
        if (isSoundActive && cafeAudioEngine) {
          cafeAudioEngine.suspend();
        }
      }
    });
  }

  // Soothing Cafe Ambient Web Audio Synthesizer
  function createCafeAudioEngine() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return null;
      const ctx = new AudioCtx();

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0, ctx.currentTime);

      // Low-pass filter for warm, cozy vintage cafe aesthetic
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(1050, ctx.currentTime);
      filter.Q.setValueAtTime(1.1, ctx.currentTime);

      // Ambient room delay
      const delay = ctx.createDelay();
      delay.delayTime.setValueAtTime(0.38, ctx.currentTime);
      const delayFeedback = ctx.createGain();
      delayFeedback.gain.setValueAtTime(0.22, ctx.currentTime);

      masterGain.connect(filter);
      filter.connect(ctx.destination);
      filter.connect(delay);
      delay.connect(delayFeedback);
      delayFeedback.connect(delay);
      delay.connect(ctx.destination);

      // Warm Cafe Rhodes-like Chord Progressions (in Hz)
      const chords = [
        [261.63, 329.63, 392.00, 493.88, 587.33], // Cmaj9
        [220.00, 261.63, 329.63, 392.00, 493.88], // Am9
        [174.61, 261.63, 329.63, 349.23, 440.00], // Fmaj9
        [196.00, 246.94, 293.66, 329.63, 440.00], // G13
        [146.83, 220.00, 261.63, 349.23, 440.00], // Dm9
        [164.81, 246.94, 293.66, 329.63, 392.00]  // Em7
      ];

      let chordIndex = 0;
      let timer = null;

      function playChord(chordNotes) {
        if (ctx.state !== "running") return;
        const now = ctx.currentTime;

        chordNotes.forEach((freq, i) => {
          const osc1 = ctx.createOscillator();
          const osc2 = ctx.createOscillator();
          const noteGain = ctx.createGain();

          osc1.type = "sine";
          osc2.type = "triangle";

          osc1.frequency.setValueAtTime(freq, now);
          osc2.frequency.setValueAtTime(freq * 1.0025, now); // subtle chorusing

          const noteVolume = 0.038 / (1 + i * 0.15);
          noteGain.gain.setValueAtTime(0.0001, now);
          noteGain.gain.exponentialRampToValueAtTime(noteVolume, now + 0.08 + i * 0.02);
          noteGain.gain.exponentialRampToValueAtTime(noteVolume * 0.4, now + 2.4);
          noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 4.2);

          osc1.connect(noteGain);
          osc2.connect(noteGain);
          noteGain.connect(masterGain);

          osc1.start(now + i * 0.02);
          osc2.start(now + i * 0.02);
          osc1.stop(now + 4.4);
          osc2.stop(now + 4.4);
        });
      }

      function startLoop() {
        if (timer) clearInterval(timer);
        playChord(chords[chordIndex]);
        chordIndex = (chordIndex + 1) % chords.length;

        timer = setInterval(() => {
          if (ctx.state === "running") {
            playChord(chords[chordIndex]);
            chordIndex = (chordIndex + 1) % chords.length;
          }
        }, 4200);
      }

      return {
        start: () => {
          if (ctx.state === "suspended") ctx.resume();
          masterGain.gain.cancelScheduledValues(ctx.currentTime);
          masterGain.gain.setValueAtTime(masterGain.gain.value, ctx.currentTime);
          masterGain.gain.linearRampToValueAtTime(0.22, ctx.currentTime + 0.5);
          startLoop();
        },
        stop: () => {
          masterGain.gain.cancelScheduledValues(ctx.currentTime);
          masterGain.gain.setValueAtTime(masterGain.gain.value, ctx.currentTime);
          masterGain.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.35);
          setTimeout(() => {
            if (timer) clearInterval(timer);
          }, 360);
        },
        suspend: () => {
          masterGain.gain.cancelScheduledValues(ctx.currentTime);
          masterGain.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.2);
        },
        resume: () => {
          if (ctx.state === "suspended") ctx.resume();
          masterGain.gain.cancelScheduledValues(ctx.currentTime);
          masterGain.gain.linearRampToValueAtTime(0.22, ctx.currentTime + 0.4);
        }
      };
    } catch (e) {
      console.warn("Web Audio not supported or failed:", e);
      return null;
    }
  }

  // Sound Button Click Handler
  if (soundBtn) {
    soundBtn.addEventListener("click", () => {
      isSoundActive = !isSoundActive;

      if (isSoundActive) {
        if (!cafeAudioEngine) {
          cafeAudioEngine = createCafeAudioEngine();
        }
        if (cafeAudioEngine) {
          cafeAudioEngine.start();
        }

        // Also unmute video in case video media has sound
        video.muted = false;
        video.volume = 0.8;

        soundBtn.classList.add("sound-active");
        soundBtn.setAttribute("title", "Matikan Suara");
        if (soundIcon) soundIcon.innerHTML = SOUND_ICONS.playing;

        showToast("Suara diaktifkan — Suasana santai Nana Cafe");
      } else {
        if (cafeAudioEngine) {
          cafeAudioEngine.stop();
        }

        video.muted = true;

        soundBtn.classList.remove("sound-active");
        soundBtn.setAttribute("title", "Nyalakan Suara");
        if (soundIcon) soundIcon.innerHTML = SOUND_ICONS.muted;

        showToast("Suara dimatikan");
      }
    });
  }
}

/* ==========================================================================
   GLOBAL UI VECTOR ICONS (NO KEYBOARD EMOJIS)
   ========================================================================== */
const UI_ICONS = {
  leaf: `<svg class="ui-svg-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:-2px;"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
  sparkle: `<svg class="ui-svg-icon" width="12" height="12" viewBox="0 0 100 100" fill="currentColor" style="display:inline-block; vertical-align:-1px;"><path d="M50 0 C50 35 65 50 100 50 C65 50 50 65 50 100 C50 65 35 50 0 50 C35 50 50 35 50 0 Z"/></svg>`,
  coffee: `<svg class="ui-svg-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:-2px;"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`,
  ice: `<svg class="ui-svg-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:-2px;"><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line><path d="m20 16-4-4 4-4"></path><path d="m4 8 4 4-4 4"></path><path d="m16 4-4 4-4-4"></path><path d="m8 20 4-4 4 4"></path></svg>`,
  warm: `<svg class="ui-svg-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:-2px;"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3z"/></svg>`,
  plus: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
  minus: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
  close: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
  trash: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`
};

/* ==========================================================================
   SIGNATURE MENU - LUXURY CARDS WITH WAVE DIVIDER (~~) & SLIDER
   ========================================================================== */
const SIG_BADGE_ICONS = {
  "kopi-latte": `<svg width="12" height="12" viewBox="0 0 24 24" fill="#B58D5A"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg>`,
  "matcha-latte": `<svg width="11" height="11" viewBox="0 0 100 100" fill="#B58D5A"><path d="M50 0 C50 35 65 50 100 50 C65 50 50 65 50 100 C50 65 35 50 0 50 C35 50 50 35 50 0 Z"/></svg>`,
  "orange-coffee": `<svg width="12" height="12" viewBox="0 0 24 24" fill="#B58D5A"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg>`,
  "tropical-fruit-smoothies": `<svg width="11" height="11" viewBox="0 0 100 100" fill="#B58D5A"><path d="M50 0 C50 35 65 50 100 50 C65 50 50 65 50 100 C50 65 35 50 0 50 C35 50 50 35 50 0 Z"/></svg>`,
  "avocado-milk-creamy": `<svg width="11" height="11" viewBox="0 0 24 24" fill="#B58D5A"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
  "choco-strawberry": `<svg width="11" height="11" viewBox="0 0 24 24" fill="#B58D5A"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
  "cloud-latte": `<svg width="12" height="12" viewBox="0 0 24 24" fill="#B58D5A"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg>`,
  "heavenly-matcha": `<svg width="11" height="11" viewBox="0 0 24 24" fill="#B58D5A"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
  "angels-berry": `<svg width="11" height="11" viewBox="0 0 24 24" fill="#B58D5A"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.75C6.2 7.6 4.8 9.5 4 11.5c1.8-1.5 5.5-2.5 13-3.5z"/></svg>`,
  "moon-croissant": `<svg width="11" height="11" viewBox="0 0 100 100" fill="#B58D5A"><path d="M50 0 C50 35 65 50 100 50 C65 50 50 65 50 100 C50 65 35 50 0 50 C35 50 50 35 50 0 Z"/></svg>`,
  "caramel-dream": `<svg width="11" height="11" viewBox="0 0 24 24" fill="#B58D5A"><path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"/></svg>`,
  "vanilla-cloud-latte": `<svg width="11" height="11" viewBox="0 0 24 24" fill="#B58D5A"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z"/></svg>`
};

const SIG_WATERMARKS = {
  "kopi-latte": `<svg class="sig-card-watermark" viewBox="0 0 100 100" fill="none" stroke="#C5A880" stroke-width="1.3"><path d="M90 90 C70 80 50 75 40 50 C55 52 70 48 80 40 C75 55 65 65 90 90 Z M40 50 C35 40 38 25 50 15 C45 28 35 38 40 50 Z"/></svg>`,
  "matcha-latte": `<svg class="sig-card-watermark" viewBox="0 0 100 100" fill="none" stroke="#C5A880" stroke-width="1.3"><path d="M85 85 C65 75 55 60 50 40 C60 42 75 35 80 25 C75 40 65 50 85 85 Z M50 40 C40 35 30 40 20 50 C32 48 42 42 50 40 Z"/></svg>`,
  "orange-coffee": `<svg class="sig-card-watermark" viewBox="0 0 100 100" fill="none" stroke="#C5A880" stroke-width="1.3"><circle cx="50" cy="50" r="30" stroke-dasharray="3,3"/><path d="M50 20 L50 80 M20 50 L80 50"/></svg>`,
  "tropical-fruit-smoothies": `<svg class="sig-card-watermark" viewBox="0 0 100 100" fill="none" stroke="#C5A880" stroke-width="1.3"><path d="M95 95 C75 85 60 70 55 45 C68 48 80 40 85 30 C80 45 70 55 95 95 Z M55 45 C45 35 42 20 50 10 C46 22 40 32 55 45 Z"/></svg>`,
  "avocado-milk-creamy": `<svg class="sig-card-watermark" viewBox="0 0 100 100" fill="none" stroke="#C5A880" stroke-width="1.3"><path d="M50 20 C65 20 75 35 75 55 C75 75 65 85 50 85 C35 85 25 75 25 55 C25 35 35 20 50 20 Z"/><circle cx="50" cy="58" r="14"/></svg>`,
  "choco-strawberry": `<svg class="sig-card-watermark" viewBox="0 0 100 100" fill="none" stroke="#C5A880" stroke-width="1.3"><path d="M85 85 C65 75 55 60 50 40 C60 42 75 35 80 25 C75 40 65 50 85 85 Z"/></svg>`,
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
      <div class="sig-card-media" onclick="openMenuDetailModal('${item.id}')">
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
          <h4 class="sig-card-name" onclick="openMenuDetailModal('${item.id}')">${item.name}</h4>
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
          <button class="btn-sig-view-details" onclick="openMenuDetailModal('${item.id}')">
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
    showToast(`${item ? item.name : 'Menu'} ditambahkan ke favorit!`);
  } else {
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
  }
}


/* ==========================================================================
   MENU ICON HELPERS & MOCKUP FIDELITY
   ========================================================================== */
function getIngredientIcon(iconType) {
  switch (iconType) {
    case 'espresso':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8C6641" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="9" cy="13" rx="5" ry="6.5" transform="rotate(-30 9 13)"></ellipse><path d="M6.5 8.5c1.8 1.8 2.6 5 3.2 7.5"></path><ellipse cx="16" cy="11" rx="4.5" ry="5.5" transform="rotate(25 16 11)"></ellipse><path d="M14.5 7c1 1.5 1.5 4 1.8 6.5"></path></svg>`;
    case 'milk':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8C6641" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2h8v3H8z"></path><path d="M8 5l-2 3v13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8l-2-3"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg>`;
    case 'vanilla':
    case 'flower':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8C6641" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M12 2a4 4 0 0 0-4 4c0 2 2 3 4 3 2 0 4-1 4-3a4 4 0 0 0-4-4z"></path><path d="M12 22a4 4 0 0 0 4-4c0-2-2-3-4-3-2 0-4 1-4 3a4 4 0 0 0 4 4z"></path><path d="M2 12a4 4 0 0 0 4 4c2 0 3-2 3-4 0-2-1-4-3-4a4 4 0 0 0 4 4z"></path><path d="M22 12a4 4 0 0 0-4-4c-2 0-3 2-3 4 0 2 1 4 3 4a4 4 0 0 0 4-4z"></path></svg>`;
    case 'cloud':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8C6641" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>`;
    case 'leaf':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8C6641" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`;
    case 'croissant':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8C6641" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m4.5 16.5-1.5 3 4.5 1.5 1.5-3"></path><path d="m19.5 16.5 1.5 3-4.5 1.5-1.5-3"></path><path d="M6 18c0-5 3-10 6-10s6 5 6 10"></path></svg>`;
    case 'wheat':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8C6641" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 22 16 8"></path><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path><path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path><path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path></svg>`;
    case 'berry':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8C6641" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c1 2 2 3 4 3 2 0 3-1 4-2-1 4-3 7-5 10-2-3-4-6-5-10 1 1 2 2 4 2 2 0 3-1 4-3z"></path><path d="M7 10c0 5 2.5 11 5 12 2.5-1 5-7 5-12a5 5 0 0 0-10 0z"></path></svg>`;
    case 'honey':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8C6641" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3h8v2H8z"></path><path d="M6 7h12l-1.5 12a2 2 0 0 1-2 1.8h-5a2 2 0 0 1-2-1.8L6 7z"></path><path d="M9 11h6"></path><path d="M10 15h4"></path></svg>`;
    case 'orange':
    case 'lemon':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8C6641" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 3a9 9 0 0 1 9 9"></path><line x1="12" y1="12" x2="18.36" y2="5.64"></line><line x1="12" y1="12" x2="12" y2="3"></line><line x1="12" y1="12" x2="21" y2="12"></line></svg>`;
    case 'sparkle':
      return `<svg width="22" height="22" viewBox="0 0 100 100" fill="#8C6641"><path d="M50 0 C50 35 65 50 100 50 C65 50 50 65 50 100 C50 65 35 50 0 50 C35 50 50 35 50 0 Z"/></svg>`;
    case 'drop':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8C6641" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>`;
    case 'wave':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8C6641" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12c3-4 6-4 9 0s6 4 9 0 3-4 3-4"></path><path d="M2 17c3-4 6-4 9 0s6 4 9 0 3-4 3-4"></path></svg>`;
    default:
      return `<svg width="22" height="22" viewBox="0 0 100 100" fill="#8C6641"><path d="M50 0 C50 35 65 50 100 50 C65 50 50 65 50 100 C50 65 35 50 0 50 C35 50 50 35 50 0 Z"/></svg>`;
  }
}

function getFlavorIcon(iconType) {
  switch (iconType) {
    case 'cloud':
      return `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>`;
    case 'wave':
      return `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12c3-3 6-3 9 0s6 3 9 0"></path><path d="M2 16c3-3 6-3 9 0s6 3 9 0"></path></svg>`;
    case 'flower':
      return `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M12 3a3 3 0 0 0-3 3c0 1.5 1.5 2.5 3 2.5s3-1 3-2.5a3 3 0 0 0-3-3z"></path><path d="M12 21a3 3 0 0 0 3-3c0-1.5-1.5-2.5-3-2.5s-3 1-3 2.5a3 3 0 0 0 3 3z"></path><path d="M3 12a3 3 0 0 0 3 3c1.5 0 2.5-1.5 2.5-3S7.5 9.5 6 9.5A3 3 0 0 0 3 12z"></path><path d="M21 12a3 3 0 0 0-3-3c-1.5 0-2.5 1.5-2.5 3s1 2.5 2.5 2.5a3 3 0 0 0 3-2.5z"></path></svg>`;
    case 'leaf':
      return `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`;
    case 'berry':
      return `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="7"></circle><path d="M12 2v4"></path></svg>`;
    case 'espresso':
      return `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="12" rx="7" ry="9"></ellipse><path d="M12 3v18"></path></svg>`;
    case 'milk':
      return `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2h8v3H8z"></path><path d="M8 5l-2 3v13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8l-2-3"></path></svg>`;
    case 'orange':
      return `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 3a9 9 0 0 1 9 9"></path></svg>`;
    case 'drop':
      return `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>`;
    case 'honey':
      return `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3h8v2H8z"></path><path d="M6 7h12l-1.5 12a2 2 0 0 1-2 1.8h-5a2 2 0 0 1-2-1.8L6 7z"></path></svg>`;
    case 'warm':
      return `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 19h8a4 4 0 0 0 4-4V6H4v9a4 4 0 0 0 4 4z"></path><line x1="6" y1="2" x2="6" y2="4"></line><line x1="10" y1="2" x2="10" y2="4"></line><line x1="14" y1="2" x2="14" y2="4"></line></svg>`;
    case 'sparkle':
      return `<svg width="12" height="12" viewBox="0 0 100 100" fill="currentColor"><path d="M50 0 C50 35 65 50 100 50 C65 50 50 65 50 100 C50 65 35 50 0 50 C35 50 50 35 50 0 Z"/></svg>`;
    case 'wheat':
      return `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 22 16 8"></path><path d="M3.5 12.5 5 11l1.5 1.5"></path></svg>`;
    default:
      return `<svg width="12" height="12" viewBox="0 0 100 100" fill="currentColor"><path d="M50 0 C50 35 65 50 100 50 C65 50 50 65 50 100 C50 65 35 50 0 50 C35 50 50 35 50 0 Z"/></svg>`;
  }
}

function getBadgeIcon(badgeType) {
  switch (badgeType) {
    case 'crown':
      return `<svg width="11" height="11" viewBox="0 0 24 24" fill="#8C6641"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg>`;
    case 'heart':
      return `<svg width="11" height="11" viewBox="0 0 24 24" fill="#8C6641"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
    case 'seasonal':
      return `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#8C6641" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 14.14 14.14"></path></svg>`;
    case 'star':
      return `<svg width="10" height="10" viewBox="0 0 100 100" fill="#8C6641"><path d="M50 0 C50 35 65 50 100 50 C65 50 50 65 50 100 C50 65 35 50 0 50 C35 50 50 35 50 0 Z"/></svg>`;
    default:
      return `<svg width="10" height="10" viewBox="0 0 100 100" fill="#8C6641"><path d="M50 0 C50 35 65 50 100 50 C65 50 50 65 50 100 C50 65 35 50 0 50 C35 50 50 35 50 0 Z"/></svg>`;
  }
}

/* ==========================================================================
   FULL MENU GRID & FILTERS WITH PAGINATION (6 ITEMS PER PAGE)
   ========================================================================== */
const MENU_ITEMS_PER_PAGE = 6;
let currentMenuPage = 1;
let currentMenuCategory = "all";
let currentMenuSearchQuery = "";

/**
 * Determine if current viewport is mobile/tablet or preview panel is hidden
 */
function isMobileOrPreviewHidden() {
  const panel = document.getElementById("menuPreviewPanel");
  if (!panel) return true;
  if (window.innerWidth <= 1024) return true;
  const style = window.getComputedStyle(panel);
  return style.display === "none" || style.visibility === "hidden";
}

/**
 * Centralized Menu Card Click Handler:
 * - On Mobile / Tablet (where side preview panel is hidden): opens the Luxury Detail Modal
 * - On Desktop: selects & highlights item in the sticky live Preview Panel
 */
function handleMenuCardClick(itemId) {
  const found = MENU_ITEMS.find(m => m.id === itemId);
  if (found) {
    currentPreviewItem = found;
    document.querySelectorAll(".menu-card").forEach(card => {
      if (card.getAttribute("data-id") === itemId) {
        card.classList.add("active-preview");
      } else {
        card.classList.remove("active-preview");
      }
    });
  }

  if (isMobileOrPreviewHidden()) {
    openMenuDetailModal(itemId);
  } else {
    selectPreviewItem(itemId);
  }
}
window.handleMenuCardClick = handleMenuCardClick;
window.isMobileOrPreviewHidden = isMobileOrPreviewHidden;

function renderMenuGrid(category = "all", searchQuery = "", page = 1, shouldScroll = false) {
  const container = document.getElementById("menuGrid");
  const paginationContainer = document.getElementById("menuPagination");
  if (!container) return;

  // Track state
  currentMenuCategory = category;
  currentMenuSearchQuery = searchQuery;

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

  const totalItems = filtered.length;

  if (totalItems === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted)">
        <div style="margin-bottom: 12px; color: var(--accent-gold); opacity: 0.85;">${UI_ICONS.coffee}</div>
        <p style="font-size: 1.1rem; margin-bottom: 8px;">Menu tidak ditemukan</p>
        <p style="font-size: 0.85rem;">Coba cari dengan kata kunci lain atau pilih kategori lain.</p>
      </div>
    `;
    if (paginationContainer) {
      paginationContainer.innerHTML = "";
      paginationContainer.classList.add("hidden");
    }
    return;
  }

  // Calculate Pagination bounds
  const totalPages = Math.max(1, Math.ceil(totalItems / MENU_ITEMS_PER_PAGE));
  currentMenuPage = Math.min(Math.max(1, page), totalPages);

  const startIndex = (currentMenuPage - 1) * MENU_ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + MENU_ITEMS_PER_PAGE, totalItems);
  const paginatedItems = filtered.slice(startIndex, endIndex);

  // Render 6 items
  container.innerHTML = paginatedItems.map(item => `
    <div class="menu-card ${currentPreviewItem && currentPreviewItem.id === item.id ? 'active-preview' : ''}" 
         onclick="handleMenuCardClick('${item.id}')" data-id="${item.id}">
      <div class="menu-card-top">
        <img src="${item.image}" alt="${item.name}" class="menu-card-img" loading="lazy">
        
        ${item.badge ? `
          <div class="menu-card-badge">
            <span class="badge-icon">${getBadgeIcon(item.badgeType)}</span>
            <span class="badge-text">${item.badge}</span>
          </div>
        ` : ''}

        <button class="menu-card-heart" onclick="toggleWishlist(event, '${item.id}')" title="Sukai menu ini" aria-label="Favorite">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#5C4533" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>

      <div class="menu-card-content">
        <h4 class="menu-card-title">${item.name}</h4>
        <p class="menu-card-desc">${item.shortDesc || item.desc}</p>
        
        <div class="menu-card-footer">
          <div class="menu-card-price-group">
            <span class="menu-card-price">${formatRupiah(item.price)}</span>
            ${item.oldPrice ? `<span class="menu-card-old-price">${formatRupiah(item.oldPrice)}</span>` : ''}
          </div>
          
          <button class="menu-card-add-btn" onclick="event.stopPropagation(); addToCartDirect('${item.id}')" title="Tambah ke keranjang" aria-label="Tambah">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `).join("");

  // Render pagination bar
  renderMenuPagination(totalItems, totalPages, currentMenuPage, startIndex, endIndex);

  // Smooth scroll up to menu section on page change
  if (shouldScroll) {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      const navOffset = 90;
      const elementPosition = menuSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }

  // Initialize swipe gestures on menu grid
  initMenuGridSwipe();
}

function initMenuGridSwipe() {
  const grid = document.getElementById("menuGrid");
  if (!grid || grid.dataset.swipeInitialized) return;
  grid.dataset.swipeInitialized = "true";

  let touchStartX = 0;
  let touchStartY = 0;

  grid.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].screenX;
    touchStartY = e.touches[0].screenY;
  }, { passive: true });

  grid.addEventListener("touchend", (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const touchEndY = e.changedTouches[0].screenY;
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    // Check if horizontal swipe is dominant and significant
    if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY) * 1.4) {
      if (diffX < 0) {
        // Swipe left -> Next Page
        const nextBtn = document.querySelector(".page-next-btn");
        if (nextBtn && !nextBtn.disabled) nextBtn.click();
      } else {
        // Swipe right -> Prev Page
        const prevBtn = document.querySelector(".page-prev-btn");
        if (prevBtn && !prevBtn.disabled) prevBtn.click();
      }
    }
  }, { passive: true });
}

function renderMenuPagination(totalItems, totalPages, currentPage, startIndex, endIndex) {
  const pagContainer = document.getElementById("menuPagination");
  if (!pagContainer) return;

  if (totalPages <= 1) {
    pagContainer.innerHTML = `
      <div class="menu-pagination-info">
        <span>Menampilkan <strong>${totalItems}</strong> dari <strong>${totalItems}</strong> menu</span>
      </div>
      <div class="menu-pagination-controls">
        <span class="menu-page-btn active" style="min-width:36px; height:36px;">1</span>
      </div>
    `;
    pagContainer.classList.remove("hidden");
    return;
  }

  // Generate numbered buttons
  let pageButtonsHtml = "";
  for (let p = 1; p <= totalPages; p++) {
    pageButtonsHtml += `
      <button type="button" class="menu-page-btn ${p === currentPage ? 'active' : ''}" 
              onclick="goToMenuPage(${p})" aria-label="Halaman ${p}" ${p === currentPage ? 'aria-current="page"' : ''}>
        ${p}
      </button>
    `;
  }

  pagContainer.innerHTML = `
    <div class="menu-pagination-info">
      <span>Menampilkan <strong>${startIndex + 1}–${endIndex}</strong> dari <strong>${totalItems}</strong> menu</span>
    </div>

    <div class="menu-pagination-controls">
      <button type="button" class="menu-page-btn menu-page-arrow page-prev-btn" 
              ${currentPage === 1 ? 'disabled' : ''} 
              onclick="goToMenuPage(${currentPage - 1})" aria-label="Halaman Sebelumnya">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      ${pageButtonsHtml}

      <button type="button" class="menu-page-btn menu-page-arrow page-next-btn" 
              ${currentPage === totalPages ? 'disabled' : ''} 
              onclick="goToMenuPage(${currentPage + 1})" aria-label="Halaman Selanjutnya">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  `;
  pagContainer.classList.remove("hidden");
}

function goToMenuPage(targetPage) {
  renderMenuGrid(currentMenuCategory, currentMenuSearchQuery, targetPage, true);
}

// Expose globally for HTML onclick
window.goToMenuPage = goToMenuPage;

function initMenuFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-category");
      const searchVal = document.getElementById("menuSearchInput")?.value || "";
      currentMenuPage = 1;
      renderMenuGrid(category, searchVal, 1, false);
    });
  });
}

function initMenuSearch() {
  const searchInput = document.getElementById("menuSearchInput");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const activeCategory = document.querySelector(".filter-btn.active")?.getAttribute("data-category") || "all";
    currentMenuPage = 1;
    renderMenuGrid(activeCategory, e.target.value, 1, false);
  });
}

/* ==========================================================================
   STICKY MENU PREVIEW PANEL (EXACT LUXURY MOCKUP FIDELITY)
   ========================================================================== */
let recSliderIndex = 0;

function selectPreviewItem(itemId) {
  const found = MENU_ITEMS.find(m => m.id === itemId);
  if (!found) return;

  currentPreviewItem = found;
  currentServingSelection = found.servings && found.servings.length > 0 ? found.servings[0] : "Iced";
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

  // Recommendation items: all other items in MENU_ITEMS except current item
  const recommendedItems = MENU_ITEMS.filter(m => m.id !== item.id);

  panel.innerHTML = `
    <!-- Top Row: Badge & Circular Close Button -->
    <div class="preview-top-bar">
      ${item.badge ? `
        <div class="preview-badge-pill">
          <span class="badge-icon">${getBadgeIcon(item.badgeType)}</span>
          <span class="badge-text">${item.badge}</span>
        </div>
      ` : `<div></div>`}
      
      <button class="preview-close-circle" onclick="selectPreviewItem('kopi-latte')" aria-label="Tutup / Reset Preview">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7A6857" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>

    <!-- Header Split Row: Info on Left, 1:1 Photo on Right -->
    <div class="preview-header-split">
      <div class="preview-header-left">
        <h3 class="preview-item-title">${item.name}</h3>
        <div class="preview-price-row">
          <span class="preview-current-price">${formatRupiah(item.price)}</span>
          ${item.oldPrice ? `<span class="preview-old-price">${formatRupiah(item.oldPrice)}</span>` : ''}
        </div>
        <p class="preview-item-desc">${item.desc}</p>
      </div>

      <div class="preview-thumb-box">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
      </div>
    </div>

    <!-- Section: KOMPOSISI / INGREDIENTS -->
    <div class="preview-block">
      <div class="preview-section-title">KOMPOSISI / INGREDIENTS</div>
      <div class="preview-ingredients-grid">
        ${(item.ingredients || []).map(ing => `
          <div class="preview-ingredient-card">
            <div class="ing-icon">${getIngredientIcon(ing.icon)}</div>
            <span class="ing-name">${ing.name}</span>
          </div>
        `).join("")}
      </div>
    </div>

    <!-- Section: FLAVOR NOTES -->
    <div class="preview-block">
      <div class="preview-section-title">FLAVOR NOTES</div>
      <div class="preview-flavor-pills">
        ${(item.flavorNotes || []).map(fn => `
          <div class="flavor-pill">
            <span class="flavor-icon">${getFlavorIcon(fn.icon)}</span>
            <span class="flavor-name">${fn.name}</span>
          </div>
        `).join("")}
      </div>
    </div>

    <!-- Section: PILIHAN PENYAJIAN / SERVING -->
    ${item.servings && item.servings.length > 0 ? `
      <div class="preview-block">
        <div class="preview-section-title">PILIHAN PENYAJIAN / SERVING</div>
        <div class="preview-serving-toggle">
          ${item.servings.map(s => `
            <button class="serving-toggle-btn ${currentServingSelection === s ? 'active' : ''}" onclick="selectServing('${s}')">
              ${s === 'Iced' ? `
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <line x1="12" y1="2" x2="12" y2="22"></line>
                  <path d="m20 16-4-4 4-4"></path>
                  <path d="m4 8 4 4-4 4"></path>
                  <path d="m16 4-4 4-4-4"></path>
                  <path d="m8 20 4-4 4 4"></path>
                </svg>
                <span>Iced</span>
              ` : `
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                  <line x1="6" y1="2" x2="6" y2="4"></line>
                  <line x1="10" y1="2" x2="10" y2="4"></line>
                  <line x1="14" y1="2" x2="14" y2="4"></line>
                </svg>
                <span>${s}</span>
              `}
            </button>
          `).join("")}
        </div>
      </div>
    ` : ''}

    <!-- Action Row: Stepper + Add to Cart -->
    <div class="preview-action-row">
      <div class="preview-stepper">
        <button class="stepper-btn" onclick="adjustPreviewQty(-1)" aria-label="Kurangi">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
        <span class="stepper-val" id="previewQtyDisplay">${previewQuantity}</span>
        <button class="stepper-btn" onclick="adjustPreviewQty(1)" aria-label="Tambah">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </div>

      <button class="preview-cart-btn" onclick="addPreviewItemToCart()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <span>Tambah ke Keranjang</span>
      </button>
    </div>

    <!-- Section: YOU MIGHT ALSO LIKE (SLIDABLE & DRAGGABLE) -->
    <div class="preview-rec-section">
      <div class="rec-header">
        <span class="rec-title">YOU MIGHT ALSO LIKE</span>
        <div class="rec-arrows">
          <button class="rec-arrow-btn" onclick="slideRecItems(-1)" aria-label="Sebelumnya">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button class="rec-arrow-btn" onclick="slideRecItems(1)" aria-label="Selanjutnya">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>

      <div class="rec-cards-row" id="recCardsRow">
        ${recommendedItems.map(rec => `
          <div class="rec-card" onclick="handleMenuCardClick('${rec.id}')">
            <div class="rec-card-thumb">
              <img src="${rec.image}" alt="${rec.name}" loading="lazy">
            </div>
            <div class="rec-card-body">
              <div class="rec-card-name">${rec.name}</div>
              <div class="rec-card-price">${formatRupiah(rec.price)}</div>
            </div>
            <button class="rec-card-add" onclick="event.stopPropagation(); addToCartDirect('${rec.id}')" title="Tambah ke keranjang" aria-label="Tambah">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.8" stroke-linecap="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        `).join("")}
      </div>
    </div>
  `;

  // Initialize mouse drag & touch swipe on recommended items row
  initRecSliderDrag();
}

function initRecSliderDrag() {
  const row = document.getElementById("recCardsRow");
  if (!row) return;

  let isDown = false;
  let startX = 0;
  let scrollLeftStart = 0;
  let hasMoved = false;

  row.addEventListener("mousedown", (e) => {
    isDown = true;
    hasMoved = false;
    row.classList.add("dragging");
    startX = e.pageX - row.offsetLeft;
    scrollLeftStart = row.scrollLeft;
  });

  window.addEventListener("mouseup", () => {
    if (!isDown) return;
    isDown = false;
    row.classList.remove("dragging");
  });

  row.addEventListener("mouseleave", () => {
    if (!isDown) return;
    isDown = false;
    row.classList.remove("dragging");
  });

  row.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - row.offsetLeft;
    const walk = (x - startX) * 1.35;
    if (Math.abs(walk) > 6) {
      hasMoved = true;
    }
    row.scrollLeft = scrollLeftStart - walk;
  });

  // Touch Swipe for Mobile / Tablet
  let touchStartX = 0;
  let touchScrollStart = 0;

  row.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].pageX;
    touchScrollStart = row.scrollLeft;
    hasMoved = false;
  }, { passive: true });

  row.addEventListener("touchmove", (e) => {
    const touchX = e.touches[0].pageX;
    const diff = (touchX - touchStartX) * 1.25;
    if (Math.abs(diff) > 6) {
      hasMoved = true;
    }
    row.scrollLeft = touchScrollStart - diff;
  }, { passive: true });

  // Suppress accidental card click when dragging/geser
  row.querySelectorAll(".rec-card").forEach(card => {
    card.addEventListener("click", (e) => {
      if (hasMoved) {
        e.preventDefault();
        e.stopPropagation();
      }
    }, true);
  });
}

function selectServing(serving) {
  currentServingSelection = serving;
  const buttons = document.querySelectorAll(".serving-toggle-btn");
  buttons.forEach(btn => {
    if (btn.innerText.includes(serving)) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

function slideRecItems(direction) {
  const row = document.getElementById("recCardsRow");
  if (!row) return;
  row.scrollBy({ left: direction * 140, behavior: "smooth" });
}

function addPreviewItemToCart() {
  if (!currentPreviewItem) return;
  addItemToCart(currentPreviewItem, previewQuantity, currentServingSelection);
  showToast(`${previewQuantity}x ${currentPreviewItem.name} ditambahkan ke keranjang!`);
}

function addToCartDirect(itemId) {
  const item = MENU_ITEMS.find(m => m.id === itemId);
  if (!item) return;
  const serving = item.servings ? item.servings[0] : "Standard";
  addItemToCart(item, 1, serving);
  showToast(`1x ${item.name} ditambahkan ke keranjang!`);
}

/* ==========================================================================
   MENU ITEM DETAIL MODAL (LUXURY POPUP)
   ========================================================================== */
let currentModalItem = null;
let currentModalServing = "Iced";
let currentModalQty = 1;

function openMenuDetailModal(itemId) {
  const item = MENU_ITEMS.find(m => m.id === itemId);
  if (!item) return;

  currentModalItem = item;
  currentModalServing = item.servings && item.servings.length > 0 ? item.servings[0] : "Standard";
  currentModalQty = 1;

  const modal = document.getElementById("menuDetailModal");
  const content = document.getElementById("menuDetailModalContent");
  if (!modal || !content) return;

  const savings = item.oldPrice ? item.oldPrice - item.price : 0;

  content.innerHTML = `
    <!-- Left Column: Visual Media (1:1 Square Poster Card with Ambient Glow) -->
    <div class="modal-media-col">
      <div class="modal-ambient-blur" style="background-image: url('${item.image}')"></div>
      
      <div class="modal-poster-wrap">
        <img src="${item.image}" alt="${item.name}" class="modal-poster-img" loading="lazy">
        
        <!-- Top Vector Badge -->
        ${item.badge ? `
          <div class="modal-badge-pill">
            <span class="badge-icon-svg">${getBadgeIcon(item.badgeType)}</span>
            <span>${item.badge}</span>
          </div>
        ` : ''}

        <!-- Wishlist / Heart Button -->
        <button class="modal-fav-btn" onclick="toggleWishlist(event, '${item.id}')" title="Sukai menu ini" aria-label="Favorite">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5C4533" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Right Column: Details & Ordering -->
    <div class="modal-info-col">
      <div class="modal-info-top">
        <div class="modal-header-tag">
          <svg width="12" height="12" viewBox="0 0 100 100" fill="#D4AF37" style="display:inline-block; vertical-align:-1px;">
            <path d="M50 0 C50 35 65 50 100 50 C65 50 50 65 50 100 C50 65 35 50 0 50 C35 50 50 35 50 0 Z"/>
          </svg>
          <span>NANA SPECIALTY ${item.category ? item.category.toUpperCase() : 'SELECTION'}</span>
        </div>

        <h3 class="modal-item-name" id="modalItemName">${item.name}</h3>

        <div class="modal-price-row">
          <span class="modal-current-price" id="modalCurrentPrice">${formatRupiah(item.price)}</span>
          ${item.oldPrice ? `<span class="modal-old-price">${formatRupiah(item.oldPrice)}</span>` : ''}
          ${savings > 0 ? `<span class="modal-save-pill">Hemat ${formatRupiah(savings)}</span>` : ''}
        </div>

        <p class="modal-item-desc">${item.desc}</p>

        <!-- Komposisi & Bahan / Ingredients -->
        ${item.ingredients && item.ingredients.length > 0 ? `
          <div class="modal-section-group">
            <div class="modal-section-label">Komposisi & Bahan</div>
            <div class="modal-tags-list">
              ${item.ingredients.map(ing => {
                const name = typeof ing === 'object' ? ing.name : ing;
                const icon = (typeof ing === 'object' && ing.icon) ? getIngredientIcon(ing.icon) : UI_ICONS.leaf;
                return `<span class="modal-tag-chip">${icon} <span>${name}</span></span>`;
              }).join("")}
            </div>
          </div>
        ` : ''}

        <!-- Profil Rasa / Flavor Notes -->
        ${item.flavorNotes && item.flavorNotes.length > 0 ? `
          <div class="modal-section-group">
            <div class="modal-section-label">Profil Rasa / Flavor Notes</div>
            <div class="modal-tags-list">
              ${item.flavorNotes.map(fn => {
                const name = typeof fn === 'object' ? fn.name : fn;
                const icon = (typeof fn === 'object' && fn.icon) ? getFlavorIcon(fn.icon) : UI_ICONS.sparkle;
                return `<span class="modal-tag-chip">${icon} <span>${name}</span></span>`;
              }).join("")}
            </div>
          </div>
        ` : ''}

        <!-- Pilihan Penyajian / Serving Options -->
        ${item.servings && item.servings.length > 0 ? `
          <div class="modal-section-group">
            <div class="modal-section-label">Pilihan Penyajian</div>
            <div class="modal-servings-list">
              ${item.servings.map(s => `
                <button type="button" class="modal-serving-chip ${currentModalServing === s ? 'active' : ''}" data-serving="${s}" onclick="selectModalServing('${s}')">
                  ${s === 'Iced' ? UI_ICONS.ice + ' <span>Iced</span>' : (s === 'Hot' ? UI_ICONS.coffee + ' <span>Hot</span>' : (s === 'Warm' ? UI_ICONS.warm + ' <span>Warm</span>' : UI_ICONS.sparkle + ' <span>' + s + '</span>'))}
                </button>
              `).join("")}
            </div>
          </div>
        ` : ''}
      </div>

      <!-- Footer Actions -->
      <div class="modal-footer-actions">
        <div class="modal-qty-stepper">
          <button type="button" class="modal-qty-btn" onclick="adjustModalQty(-1)" aria-label="Kurangi Jumlah">${UI_ICONS.minus}</button>
          <span class="modal-qty-val" id="modalQtyDisplay">1</span>
          <button type="button" class="modal-qty-btn" onclick="adjustModalQty(1)" aria-label="Tambah Jumlah">${UI_ICONS.plus}</button>
        </div>

        <button type="button" class="modal-btn-add" id="modalAddToCartBtn" onclick="addModalItemToCart()">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span id="modalAddBtnText">Tambah • ${formatRupiah(item.price)}</span>
        </button>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.classList.add("modal-open");
}

function closeMenuDetailModal() {
  const modal = document.getElementById("menuDetailModal");
  if (modal) {
    modal.classList.remove("active");
  }
  document.body.classList.remove("modal-open");
}

function selectModalServing(serving) {
  currentModalServing = serving;
  const chips = document.querySelectorAll(".modal-serving-chip");
  chips.forEach(chip => {
    if (chip.getAttribute("data-serving") === serving || chip.innerText.includes(serving)) {
      chip.classList.add("active");
    } else {
      chip.classList.remove("active");
    }
  });
}

function adjustModalQty(change) {
  if (!currentModalItem) return;
  currentModalQty = Math.max(1, currentModalQty + change);
  const qtyDisplay = document.getElementById("modalQtyDisplay");
  if (qtyDisplay) qtyDisplay.innerText = currentModalQty;

  const addBtnText = document.getElementById("modalAddBtnText");
  if (addBtnText) {
    const totalPrice = currentModalItem.price * currentModalQty;
    addBtnText.innerText = `Tambah • ${formatRupiah(totalPrice)}`;
  }
}

function addModalItemToCart() {
  if (!currentModalItem) return;

  addItemToCart(currentModalItem, currentModalQty, currentModalServing);
  showToast(`${currentModalQty}x ${currentModalItem.name} (${currentModalServing}) ditambahkan!`);

  // Instant feedback on button
  const btn = document.getElementById("modalAddToCartBtn");
  if (btn) {
    btn.style.background = "#2E5E3B";
    btn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>Berhasil Masuk Keranjang!</span>
    `;

    setTimeout(() => {
      closeMenuDetailModal();
      btn.style.background = "";
    }, 550);
  } else {
    closeMenuDetailModal();
  }
}

// Global escape key listener to close modals
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenuDetailModal();
    const cartDrawer = document.getElementById("cartDrawer");
    if (cartDrawer && cartDrawer.classList.contains("open")) {
      closeCartDrawer();
    }
    const lightbox = document.getElementById("galleryLightbox");
    if (lightbox && lightbox.classList.contains("active")) {
      lightbox.classList.remove("active");
    }
  }
});

// Expose functions globally
window.openMenuDetailModal = openMenuDetailModal;
window.closeMenuDetailModal = closeMenuDetailModal;
window.selectModalServing = selectModalServing;
window.adjustModalQty = adjustModalQty;
window.addModalItemToCart = addModalItemToCart;
window.handleMenuCardClick = handleMenuCardClick;
window.isMobileOrPreviewHidden = isMobileOrPreviewHidden;

/* ==========================================================================
   CART SYSTEM & LOCAL STORAGE
   ========================================================================== */
function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem("nana_cart") || localStorage.getItem("abyns_cart");
    if (saved) cart = JSON.parse(saved);
  } catch (e) {
    cart = [];
  }
  updateCartUI();
}

function saveCartToStorage() {
  localStorage.setItem("nana_cart", JSON.stringify(cart));
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
        <div class="cart-empty-icon" style="color:var(--accent-gold); opacity:0.85;">
          <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
            <line x1="6" y1="1" x2="6" y2="4"></line>
            <line x1="10" y1="1" x2="10" y2="4"></line>
            <line x1="14" y1="1" x2="14" y2="4"></line>
          </svg>
        </div>
        <h4>Keranjang Belanja Kosong</h4>
        <p style="font-size:0.85rem; margin-top:6px;">Silakan pilih menu favorit Anda dan nikmati momen ajaib di Nana Cafe.</p>
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
            <button onclick="updateCartQty(${idx}, -1)" aria-label="Kurangi">${UI_ICONS.minus}</button>
            <span style="font-size:0.85rem; font-weight:700;">${item.quantity}</span>
            <button onclick="updateCartQty(${idx}, 1)" aria-label="Tambah">${UI_ICONS.plus}</button>
          </div>
          <button class="cart-item-remove" onclick="removeCartItem(${idx})">
            ${UI_ICONS.trash}
            <span>Hapus</span>
          </button>
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
      showToast(`Kode voucher ${code} berhasil dipasang!`);
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
  let message = `*PESANAN BARU - ${CAFE_CONFIG.name}*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `*Waktu:* ${dateStr} WIB\n`;
  message += `*Nama:* ${name}\n`;
  message += `*WhatsApp:* ${phone}\n`;
  message += `*Metode:* ${method}\n`;
  if (location) {
    message += `*Detail Tempat:* ${location}\n`;
  }
  message += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;
  message += `*RINCIAN PESANAN:*\n`;

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
    message += `\n*Catatan Khusus:*\n"${notes}"\n`;
  }

  message += `\nHalo kak, saya ingin mengonfirmasi pesanan ini di ${CAFE_CONFIG.name}. Terima kasih!`;

  // Encode & Send via WhatsApp
  const encodedText = encodeURIComponent(message);
  const waUrl = `https://wa.me/${CAFE_CONFIG.whatsappNumber}?text=${encodedText}`;

  window.open(waUrl, "_blank");
}


/* ==========================================================================
   GALLERY DATA & INTERACTIVE SLIDER / LIGHTBOX
   ========================================================================== */
const GALLERY_ITEMS = [
  {
    id: "our-space",
    title: "Our Space",
    script: "Our Space",
    desc: "Sunlit architectural sanctuary designed for calm, warmth, and conversation.",
    image: "assets/images/gallery-our-space.webp"
  },
  {
    id: "good-coffee",
    title: "Good Coffee",
    script: "Good Coffee",
    desc: "Artisanal espresso and silky rosetta latte art crafted with pure passion.",
    image: "assets/images/gallery-good-coffee.webp"
  },
  {
    id: "sweet-moments",
    title: "Sweet Moments",
    script: "Sweet Moments",
    desc: "Freshly baked flaky Parisian croissants dusted with delicate powdered sugar.",
    image: "assets/images/gallery-sweet-moments.webp"
  },
  {
    id: "warm-company",
    title: "Warm Company",
    script: "Warm Company",
    desc: "A welcoming communal sanctuary where stories are shared and friendships grow.",
    image: "assets/images/gallery-warm-company.webp"
  },
  {
    id: "behind-the-cup",
    title: "Behind The Cup",
    script: "Behind The Cup",
    desc: "Precision V60 pour-over ritual highlighting single-origin Ethiopian flavor profiles.",
    image: "assets/images/gallery-behind-the-cup.webp"
  },
  {
    id: "more-photos",
    title: "More Moments",
    script: "+12",
    desc: "Explore more captured memories and daily scenes at Nana Cafe.",
    image: "assets/images/gallery-our-space.webp",
    isMoreCard: true
  }
];

let currentLightboxIndex = 0;

function renderGalleryTrack() {
  const track = document.getElementById("gallerySliderTrack");
  if (!track) return;

  track.innerHTML = GALLERY_ITEMS.map((item, idx) => {
    if (item.isMoreCard) {
      return `
        <div class="gallery-card-luxury gallery-card-more" onclick="openGalleryLightbox(0)">
          <img src="${item.image}" alt="${item.title}" loading="lazy" class="gallery-card-bg-img">
          <div class="gallery-more-overlay">
            <div class="gallery-more-badge">
              <span class="more-num">+12</span>
              <span class="more-txt">MORE PHOTOS</span>
              <span class="more-dash">—</span>
            </div>
          </div>
        </div>
      `;
    }

    return `
      <div class="gallery-card-luxury" onclick="openGalleryLightbox(${idx})">
        <img src="${item.image}" alt="${item.title}" loading="lazy" class="gallery-card-bg-img">
        <div class="gallery-card-gradient"></div>
        <div class="gallery-card-bottom-info">
          <div class="gallery-script-title">${item.script}</div>
          <span class="gallery-script-dash">—</span>
        </div>
      </div>
    `;
  }).join("");
}

function initGallerySlider() {
  const track = document.getElementById("gallerySliderTrack");
  const prevBtn = document.getElementById("galleryPrevBtn");
  const nextBtn = document.getElementById("galleryNextBtn");

  if (!track || !prevBtn || !nextBtn) return;

  function getStep() {
    const card = track.querySelector(".gallery-card-luxury");
    if (!card) return 300;
    const gap = parseFloat(window.getComputedStyle(track).gap) || 18;
    return card.offsetWidth + gap;
  }

  function updateArrows() {
    const maxScroll = track.scrollWidth - track.clientWidth;
    prevBtn.disabled = track.scrollLeft <= 5;
    nextBtn.disabled = track.scrollLeft >= maxScroll - 5;
  }

  prevBtn.addEventListener("click", () => {
    track.scrollBy({ left: -getStep(), behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    track.scrollBy({ left: getStep(), behavior: "smooth" });
  });

  track.addEventListener("scroll", () => {
    requestAnimationFrame(updateArrows);
  }, { passive: true });

  window.addEventListener("resize", () => {
    updateArrows();
  }, { passive: true });

  updateArrows();
}

function openGalleryLightbox(index) {
  const modal = document.getElementById("galleryLightbox");
  if (!modal) return;

  const validItems = GALLERY_ITEMS.filter(it => !it.isMoreCard);
  currentLightboxIndex = (index >= validItems.length) ? 0 : Math.max(0, index);

  updateLightboxContent();
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeGalleryLightbox() {
  const modal = document.getElementById("galleryLightbox");
  if (!modal) return;

  modal.classList.remove("active");
  document.body.style.overflow = "";
}

function navigateLightbox(direction) {
  const validItems = GALLERY_ITEMS.filter(it => !it.isMoreCard);
  const total = validItems.length;
  currentLightboxIndex = (currentLightboxIndex + direction + total) % total;
  
  const img = document.getElementById("lightboxImage");
  if (img) {
    img.style.opacity = "0.3";
    img.style.transform = "scale(0.98)";
    setTimeout(() => {
      updateLightboxContent();
      img.style.opacity = "1";
      img.style.transform = "scale(1)";
    }, 140);
  } else {
    updateLightboxContent();
  }
}

function updateLightboxContent() {
  const validItems = GALLERY_ITEMS.filter(it => !it.isMoreCard);
  const item = validItems[currentLightboxIndex];
  if (!item) return;

  const img = document.getElementById("lightboxImage");
  const scriptEl = document.getElementById("lightboxScript");
  const descEl = document.getElementById("lightboxDesc");
  const counterEl = document.getElementById("lightboxCounter");

  if (img) img.src = item.image;
  if (scriptEl) scriptEl.textContent = item.script;
  if (descEl) descEl.textContent = item.desc;
  if (counterEl) counterEl.textContent = `${currentLightboxIndex + 1} / ${validItems.length}`;
}

function initGalleryLightbox() {
  renderGalleryTrack();
  initGallerySlider();

  // Keyboard navigation for lightbox
  window.addEventListener("keydown", (e) => {
    const modal = document.getElementById("galleryLightbox");
    if (!modal || !modal.classList.contains("active")) return;

    if (e.key === "ArrowLeft") {
      navigateLightbox(-1);
    } else if (e.key === "ArrowRight") {
      navigateLightbox(1);
    } else if (e.key === "Escape") {
      closeGalleryLightbox();
    }
  });

  // Touch swipe support for lightbox
  const modal = document.getElementById("galleryLightbox");
  if (modal) {
    let startX = 0;
    let endX = 0;
    modal.addEventListener("touchstart", (e) => {
      startX = e.changedTouches[0].screenX;
    }, { passive: true });

    modal.addEventListener("touchend", (e) => {
      endX = e.changedTouches[0].screenX;
      const diff = endX - startX;
      if (Math.abs(diff) > 50) {
        if (diff < 0) {
          navigateLightbox(1); // Swiped left -> next
        } else {
          navigateLightbox(-1); // Swiped right -> prev
        }
      }
    }, { passive: true });
  }
}

/* ==========================================================================
   REVIEWS SLIDER (LUXURY INTERACTIVE CAROUSEL WITH DRAG & SWIPE)
   ========================================================================== */
function initReviewsSlider() {
  const track = document.getElementById("reviewsSliderTrack");
  const prevBtn = document.getElementById("prevReviewBtn");
  const nextBtn = document.getElementById("nextReviewBtn");
  const dots = document.querySelectorAll("#reviewsPagination .review-dot");

  if (!track) return;

  function getStep() {
    const card = track.querySelector(".review-card-luxury");
    if (!card) return 380;
    const gap = parseFloat(window.getComputedStyle(track).gap) || 24;
    return card.offsetWidth + gap;
  }

  function updateState() {
    const cards = track.querySelectorAll(".review-card-luxury");
    if (cards.length === 0) return;
    const scrollLeft = track.scrollLeft;
    const step = getStep();
    const activeIdx = Math.min(cards.length - 1, Math.max(0, Math.round(scrollLeft / step)));

    dots.forEach((dot, idx) => {
      if (idx === activeIdx) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });

    if (prevBtn) prevBtn.disabled = track.scrollLeft <= 5;
    if (nextBtn) {
      const maxScroll = track.scrollWidth - track.clientWidth;
      nextBtn.disabled = track.scrollLeft >= maxScroll - 5;
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      track.scrollBy({ left: -getStep(), behavior: "smooth" });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      track.scrollBy({ left: getStep(), behavior: "smooth" });
    });
  }

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.getAttribute("data-index") || "0", 10);
      const cards = track.querySelectorAll(".review-card-luxury");
      if (cards[idx]) {
        cards[idx].scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
      }
    });
  });

  // Mouse Grab & Drag to Scroll ("Bisa Geser-Geser")
  let isDown = false;
  let startX = 0;
  let scrollLeftStart = 0;

  track.addEventListener("mousedown", (e) => {
    isDown = true;
    track.classList.add("dragging");
    startX = e.pageX - track.offsetLeft;
    scrollLeftStart = track.scrollLeft;
  });

  window.addEventListener("mouseup", () => {
    if (!isDown) return;
    isDown = false;
    track.classList.remove("dragging");
    updateState();
  });

  track.addEventListener("mouseleave", () => {
    if (!isDown) return;
    isDown = false;
    track.classList.remove("dragging");
    updateState();
  });

  track.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.4;
    track.scrollLeft = scrollLeftStart - walk;
  });

  // Touch Swipe for Mobile / Tablet
  let touchStartX = 0;
  let touchScrollStart = 0;

  track.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].pageX;
    touchScrollStart = track.scrollLeft;
  }, { passive: true });

  track.addEventListener("touchmove", (e) => {
    const touchX = e.touches[0].pageX;
    const diff = (touchX - touchStartX) * 1.2;
    track.scrollLeft = touchScrollStart - diff;
  }, { passive: true });

  track.addEventListener("scroll", () => {
    requestAnimationFrame(updateState);
  }, { passive: true });

  window.addEventListener("resize", () => {
    updateState();
  }, { passive: true });

  updateState();
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
    <span class="toast-icon">
      <svg width="18" height="18" viewBox="0 0 100 100" fill="#B58D5A">
        <path d="M50 0 C50 35 65 50 100 50 C65 50 50 65 50 100 C50 65 35 50 0 50 C35 50 50 35 50 0 Z"/>
      </svg>
    </span>
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

/* ==========================================================================
   FLOATING ACTIONS: BACK TO TOP CONTROLLER
   ========================================================================== */
function initFloatingActions() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (!backToTopBtn) return;

  function handleScroll() {
    if (window.scrollY > 280) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* ==========================================================================
   OUR STORY GALLERY CONTROLLER
   ========================================================================== */
/* PREVIOUS_STORY_IMAGES (BACKUP - PRESERVED PER USER REQUEST)
const PREVIOUS_STORY_IMAGES = [
  "assets/images/story-arch-main.webp",
  "assets/images/story-latte-badge.webp",
  "assets/images/story-corner-thumb.webp"
];
*/

const STORY_IMAGES = [
  "assets/images/story/cozy-pastel-cafe-counter.webp",
  "assets/images/story/nana-cafe-signboard.webp",
  "assets/images/story/sunlit-nana-cafe-corner.webp",
  "assets/images/story/cozy-pastel-cafe-corner-seating.webp",
  "assets/images/story/sunlit-cottagecore-vanity.webp"
];
let currentStoryIndex = 0;

function switchStoryImage(index, imgSrc) {
  const mainImg = document.getElementById("storyMainImg");
  const thumbs = document.querySelectorAll(".story-thumb-item");
  if (!mainImg) return;

  currentStoryIndex = index;
  mainImg.style.opacity = "0.2";
  setTimeout(() => {
    mainImg.src = imgSrc || STORY_IMAGES[currentStoryIndex];
    mainImg.style.opacity = "1";
  }, 160);

  thumbs.forEach((th, i) => {
    if (i === index) th.classList.add("active");
    else th.classList.remove("active");
  });
}

function initStoryGallery() {
  const prevBtn = document.getElementById("storyPrevThumbBtn");
  const nextBtn = document.getElementById("storyNextThumbBtn");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      const newIdx = (currentStoryIndex - 1 + STORY_IMAGES.length) % STORY_IMAGES.length;
      switchStoryImage(newIdx, STORY_IMAGES[newIdx]);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const newIdx = (currentStoryIndex + 1) % STORY_IMAGES.length;
      switchStoryImage(newIdx, STORY_IMAGES[newIdx]);
    });
  }
}

/* ==========================================================================
   LOCATION SHOWCASE THUMBNAIL SWITCHER
   ========================================================================== */
function initLocationShowcase() {
  const mainPhoto = document.getElementById("locationMainPhoto");
  const thumbBtns = document.querySelectorAll(".showcase-thumb-btn");
  const nextBtn = document.getElementById("locationNextThumbBtn");

  if (!mainPhoto || thumbBtns.length === 0) return;

  let currentIndex = 0;

  function switchLocationPhoto(index) {
    if (index < 0 || index >= thumbBtns.length) return;
    currentIndex = index;
    const targetSrc = thumbBtns[index].getAttribute("data-src");
    if (!targetSrc) return;

    mainPhoto.style.opacity = "0.2";
    setTimeout(() => {
      mainPhoto.src = targetSrc;
      mainPhoto.style.opacity = "1";
    }, 160);

    thumbBtns.forEach((btn, i) => {
      if (i === index) btn.classList.add("active");
      else btn.classList.remove("active");
    });
  }

  thumbBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      switchLocationPhoto(index);
    });
  });

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const nextIdx = (currentIndex + 1) % thumbBtns.length;
      switchLocationPhoto(nextIdx);
    });
  }
}

/* ==========================================================================
   INTERACTIVE MAP ZOOM & PAN SYSTEM
   ========================================================================== */
const MAP_MIN_ZOOM = 0.8;
const MAP_MAX_ZOOM = 2.6;
const MAP_ZOOM_STEP = 0.35;
let mapZoomLevel = 1.0;
let mapPanX = 0;
let mapPanY = 0;
let mapBadgeTimer = null;

function updateMapTransform(animate = true) {
  const layer = document.getElementById("mapZoomLayer");
  const badge = document.getElementById("mapZoomBadge");
  const inBtn = document.getElementById("mapZoomInBtn");
  const outBtn = document.getElementById("mapZoomOutBtn");
  if (!layer) return;

  if (animate) {
    layer.style.transition = "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)";
  } else {
    layer.style.transition = "none";
  }

  layer.style.transform = `translate(${mapPanX}px, ${mapPanY}px) scale(${mapZoomLevel})`;

  // Counter-scale marker slightly at high zoom so it remains crisp & balanced
  const marker = document.getElementById("mapCenterMarkerWrap");
  if (marker) {
    const markerScale = 1 / Math.pow(mapZoomLevel, 0.35);
    marker.style.transform = `translate(-50%, -50%) scale(${markerScale})`;
  }

  if (badge) {
    badge.innerText = `${Math.round(mapZoomLevel * 100)}%`;
    badge.classList.add("visible");
    clearTimeout(mapBadgeTimer);
    mapBadgeTimer = setTimeout(() => {
      if (badge) badge.classList.remove("visible");
    }, 1800);
  }

  if (inBtn) inBtn.disabled = mapZoomLevel >= MAP_MAX_ZOOM;
  if (outBtn) outBtn.disabled = mapZoomLevel <= MAP_MIN_ZOOM;
}

function clampMapPan() {
  const canvas = document.getElementById("mapAestheticCanvas");
  if (!canvas) return;
  const maxPanX = (canvas.offsetWidth * (mapZoomLevel - 1)) / 1.7;
  const maxPanY = (canvas.offsetHeight * (mapZoomLevel - 1)) / 1.7;
  mapPanX = Math.max(-maxPanX, Math.min(maxPanX, mapPanX));
  mapPanY = Math.max(-maxPanY, Math.min(maxPanY, mapPanY));
}

function handleMapZoom(direction) {
  let newZoom = mapZoomLevel + (direction * MAP_ZOOM_STEP);
  newZoom = Math.max(MAP_MIN_ZOOM, Math.min(MAP_MAX_ZOOM, parseFloat(newZoom.toFixed(2))));

  if (newZoom === mapZoomLevel) {
    showToast(direction > 0 ? "Sudah mencapai zoom maksimal" : "Sudah mencapai zoom minimal");
    return;
  }

  mapZoomLevel = newZoom;

  if (mapZoomLevel <= 1.0) {
    mapPanX = 0;
    mapPanY = 0;
  } else {
    clampMapPan();
  }

  updateMapTransform(true);
  showToast(direction > 0 ? `✦ Peta di-zoom in (${Math.round(mapZoomLevel * 100)}%)` : `✦ Peta di-zoom out (${Math.round(mapZoomLevel * 100)}%)`);
}

function resetMapPosition() {
  mapZoomLevel = 1.0;
  mapPanX = 0;
  mapPanY = 0;
  updateMapTransform(true);
  showToast("✦ Dipusatkan ke Nana Cafe (Jl. Senopati No. 45)");
}

function initInteractiveMap() {
  const canvas = document.getElementById("mapAestheticCanvas");
  const layer = document.getElementById("mapZoomLayer");
  if (!canvas || !layer) return;

  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let initialPanX = 0;
  let initialPanY = 0;

  // Pointer / Mouse drag
  canvas.addEventListener("mousedown", (e) => {
    if (e.target.closest(".map-ctrl-zoom, .map-ctrl-btn, .map-travel-pill, .map-floating-popup")) return;
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    initialPanX = mapPanX;
    initialPanY = mapPanY;
    canvas.style.cursor = "grabbing";
    layer.style.transition = "none";
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    mapPanX = initialPanX + dx;
    mapPanY = initialPanY + dy;
    clampMapPan();
    updateMapTransform(false);
  });

  window.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;
    canvas.style.cursor = "grab";
    updateMapTransform(true);
  });

  // Touch drag for mobile
  canvas.addEventListener("touchstart", (e) => {
    if (e.target.closest(".map-ctrl-zoom, .map-ctrl-btn, .map-travel-pill, .map-floating-popup")) return;
    if (e.touches.length === 1) {
      isDragging = true;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      initialPanX = mapPanX;
      initialPanY = mapPanY;
      layer.style.transition = "none";
    }
  }, { passive: true });

  canvas.addEventListener("touchmove", (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - startX;
    const dy = e.touches[0].clientY - startY;
    mapPanX = initialPanX + dx;
    mapPanY = initialPanY + dy;
    clampMapPan();
    updateMapTransform(false);
  }, { passive: true });

  canvas.addEventListener("touchend", () => {
    if (!isDragging) return;
    isDragging = false;
    updateMapTransform(true);
  });

  // Double click to zoom in
  canvas.addEventListener("dblclick", (e) => {
    if (e.target.closest(".map-ctrl-zoom, .map-ctrl-btn, .map-travel-pill, .map-floating-popup")) return;
    handleMapZoom(1);
  });

  // Mouse wheel zoom when hovering over map
  canvas.addEventListener("wheel", (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      handleMapZoom(1);
    } else {
      handleMapZoom(-1);
    }
  }, { passive: false });

  // Initial transform setup
  updateMapTransform(false);
}

// Expose map functions globally
window.handleMapZoom = handleMapZoom;
window.resetMapPosition = resetMapPosition;
window.initInteractiveMap = initInteractiveMap;

