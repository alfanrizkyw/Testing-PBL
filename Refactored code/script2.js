/**
 * Samudra Land — Core Application Engine
 * Refactored ES6+ Architecture with Lucide Icons Integration
 * Modern, secure, modular, and performant.
 */
"use strict";

/* ==========================================================================
   CONSTANTS & DATASETS
   ========================================================================== */

/**
 * Backward compatibility alias mapping for icon names.
 */
const ICON_NAME_ALIASES = Object.freeze({
  wave: 'waves',
  coaster: 'flame',
  ferris: 'disc',
  ghost: 'ghost',
  zipline: 'cable-car',
  droplet: 'droplets',
  train: 'train',
  mirror: 'copy',
  tornado: 'wind',
  carousel: 'sparkles',
  boat: 'ship',
  seal: 'fish',
  qr: 'qr-code',
  bank: 'landmark',
  card: 'credit-card',
  wallet: 'wallet',
  back: 'arrow-left',
  arrow: 'arrow-right',
  close: 'x',
  swipe: 'move-horizontal',
  mappin: 'map-pin',
  headset: 'headset'
});

const WAHANA = Object.freeze([
  { id: 'ombak-raksasa', nama: 'Ombak Raksasa', kategori: 'Ekstrem', harga: 85000, durasi: '3 mnt', tinggi: '140 cm', ic: 'flame', seed: 'coaster-ride', favorit: true, desc: 'Roller coaster tercepat di Samudra Land, menukik tajam menghadap laut lepas. Melewati tiga putaran penuh dengan kecepatan tinggi, cocok untuk pencari sensasi ekstrem.' },
  { id: 'seluncur-naga', nama: 'Seluncur Naga', kategori: 'Air', harga: 65000, durasi: '2 mnt', tinggi: '120 cm', ic: 'waves', seed: 'water-slide', favorit: true, desc: 'Perosotan air sepanjang 80 meter dengan tikungan berliku menyerupai tubuh naga. Meluncur dari ketinggian menuju kolam penampungan yang segar.' },
  { id: 'bianglala', nama: 'Bianglala Cakrawala', kategori: 'Santai', harga: 45000, durasi: '8 mnt', tinggi: 'Semua usia', ic: 'disc', seed: 'ferris-wheel', favorit: true, desc: 'Kincir raksasa dengan kabin tertutup, menawarkan pemandangan pantai dan seluruh area taman dari ketinggian 40 meter. Cocok untuk keluarga.' },
  { id: 'kapal-karam', nama: 'Kapal Karam', kategori: 'Ekstrem', harga: 55000, durasi: '10 mnt', tinggi: '130 cm', ic: 'ghost', seed: 'ghost-house', desc: 'Rumah hantu bertema kapal karam, menyusuri lorong gelap di bawah dermaga dengan efek suara dan visual yang mendebarkan.' },
  { id: 'kolam-ombak', nama: 'Kolam Ombak Buatan', kategori: 'Air', harga: 50000, durasi: 'Bebas', tinggi: 'Semua usia', ic: 'droplets', seed: 'wave-pool', favorit: true, desc: 'Kolam ombak buatan dengan gelombang yang dihasilkan setiap 15 menit sekali, memberi sensasi bermain ombak seperti di laut sungguhan.' },
  { id: 'flying-fox', nama: 'Flying Fox Camar', kategori: 'Ekstrem', harga: 70000, durasi: '1 mnt', tinggi: '135 cm', ic: 'cable-car', seed: 'zipline-ride', favorit: true, desc: 'Meluncur sejauh 250 meter di atas kanopi pantai dengan kecepatan angin laut yang menyegarkan.' },
  { id: 'kereta-mini', nama: 'Kereta Mini Pesisir', kategori: 'Santai', harga: 35000, durasi: '12 mnt', tinggi: 'Semua usia', ic: 'train', seed: 'mini-train', desc: 'Kereta wisata yang berkeliling seluruh area Samudra Land, melewati semua zona wahana sambil menikmati suasana pantai.' },
  { id: 'dunia-air-cilik', nama: 'Dunia Air Cilik', kategori: 'Anak', harga: 40000, durasi: 'Bebas', tinggi: 'Maks 120 cm', ic: 'droplets', seed: 'kids-water', desc: 'Area bermain air khusus anak dengan kedalaman aman dan berbagai wahana mini yang ramah untuk si kecil.' },
  { id: 'rumah-cermin', nama: 'Rumah Kaca Cermin', kategori: 'Santai', harga: 30000, durasi: '5 mnt', tinggi: 'Semua usia', ic: 'copy', seed: 'mirror-house', desc: 'Labirin cermin yang memantulkan cahaya ke segala arah. Menantang orientasi dan cocok untuk foto-foto unik bersama keluarga.' },
  { id: 'tornado-air', nama: 'Tornado Air', kategori: 'Air', harga: 75000, durasi: '3 mnt', tinggi: '130 cm', ic: 'wind', seed: 'tornado-slide', favorit: true, desc: 'Perosotan berbentuk corong raksasa yang berputar sebelum menjatuhkan pengunjung ke kolam di bawahnya. Sensasi berputar tiada henti.' },
  { id: 'komidi-putar', nama: 'Komidi Putar Bahari', kategori: 'Anak', harga: 25000, durasi: '6 mnt', tinggi: 'Maks 130 cm', ic: 'sparkles', seed: 'carousel-ride', desc: 'Komidi putar klasik dengan tema makhluk laut — kuda laut, kura-kura, dan ikan warna-warni. Aman dan ceria untuk anak-anak.' },
  { id: 'bumper-boat', nama: 'Bumper Boat', kategori: 'Air', harga: 45000, durasi: '5 mnt', tinggi: '110 cm', ic: 'ship', seed: 'bumper-boat', desc: 'Perahu kecil yang bisa ditabrakkan satu sama lain di kolam dangkal. Seru untuk dimainkan bersama teman atau keluarga.' },
  { id: 'taman-lumba', nama: 'Taman Lumba-Lumba', kategori: 'Anak', harga: 35000, durasi: 'Bebas', tinggi: 'Semua usia', ic: 'fish', seed: 'dolphin-park', desc: 'Area interaktif dengan pertunjukan lumba-lumba mini, kolam sentuh, dan taman edukasi tentang kehidupan laut.' }
]);

const ADMIN_FEE = 5000;
const TOPUP_PRESETS = Object.freeze([25000, 50000, 100000, 200000, 500000, 1000000]);
const TOPUP_MIN = 10000;

const TOPUP_METHODS = Object.freeze([
  { id: 'qris', label: 'QRIS', desc: 'Scan pakai aplikasi apa saja', ic: 'qr-code' },
  { id: 'transfer', label: 'Transfer Bank', desc: 'BCA · Mandiri · BNI · BRI', ic: 'landmark' },
  { id: 'ewallet', label: 'E-Wallet', desc: 'GoPay · OVO · Dana · ShopeePay', ic: 'wallet' },
  { id: 'kartu', label: 'Kartu Debit/Kredit', desc: 'Visa · Mastercard', ic: 'credit-card' }
]);

const STORAGE_KEYS = Object.freeze({
  ORDERS_INDEX: 'samudra_orders_index',
  ORDER_PREFIX: 'samudra_order_',
  SALDO: 'samudra_saldo'
});

/* ==========================================================================
   PERSISTENCE LAYER (STANDARD LOCALSTORAGE)
   ========================================================================== */

function getInitialSaldo() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SALDO);
    if (raw !== null) {
      const parsed = Number(raw);
      if (!Number.isNaN(parsed) && parsed >= 0) {
        return parsed;
      }
    }
  } catch (error) {
    console.warn('Failed to read saldo from localStorage:', error);
  }
  return 100000;
}

function persistSaldo(amount) {
  try {
    localStorage.setItem(STORAGE_KEYS.SALDO, String(amount));
  } catch (error) {
    console.warn('Failed to persist saldo to localStorage:', error);
  }
}

function saveOrderToStorage(order) {
  try {
    localStorage.setItem(`${STORAGE_KEYS.ORDER_PREFIX}${order.id}`, JSON.stringify(order));
    const rawIndex = localStorage.getItem(STORAGE_KEYS.ORDERS_INDEX);
    const index = rawIndex ? JSON.parse(rawIndex) : [];
    if (!index.includes(order.id)) {
      index.push(order.id);
      localStorage.setItem(STORAGE_KEYS.ORDERS_INDEX, JSON.stringify(index));
    }
  } catch (error) {
    console.error('Failed to save order to localStorage:', error);
  }
}

function loadAllOrdersFromStorage() {
  try {
    const rawIndex = localStorage.getItem(STORAGE_KEYS.ORDERS_INDEX);
    const index = rawIndex ? JSON.parse(rawIndex) : [];
    const orders = [];
    for (const id of index) {
      try {
        const rawOrder = localStorage.getItem(`${STORAGE_KEYS.ORDER_PREFIX}${id}`);
        if (rawOrder) {
          orders.push(JSON.parse(rawOrder));
        }
      } catch (err) {
        console.warn(`Failed to parse order with ID: ${id}`, err);
      }
    }
    return orders;
  } catch (error) {
    console.error('Failed to load orders from localStorage:', error);
    return [];
  }
}

/* ==========================================================================
   CENTRALIZED APPLICATION STATE
   ========================================================================== */

const appState = {
  saldo: getInitialSaldo(),
  activeCat: 'Semua',
  currentDetailId: null,
  detailQty: 1,
  pendingOrder: null,
  currentOrder: null,
  topupAmount: 0,
  topupMethod: 'qris',
  topupReturnTo: 'home',
  topupBusy: false,
  searchTimer: null,
  toastTimer: null,
  secretCount: 0,
  secretTimer: null
};

/* ==========================================================================
   SECURITY & STRING UTILITIES
   ========================================================================== */

/**
 * Escapes unsafe characters to prevent Cross-Site Scripting (XSS).
 * @param {string} str
 * @returns {string} Sanitized string
 */
function escapeHTML(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatRupiah(amount) {
  return `Rp ${Math.round(amount).toLocaleString('id-ID')}`;
}

function getAttractionImageUrl(wahana) {
  return `url('https://picsum.photos/seed/${encodeURIComponent(wahana.seed)}/700/460')`;
}

function getCategories() {
  const categories = new Set(WAHANA.map(w => w.kategori));
  return ['Semua', 'Favorit', ...categories];
}

function getFavoriteWahanaList() {
  return WAHANA.filter(w => w.favorit);
}

function parseDigits(str) {
  return parseInt((str || '').replace(/\D/g, ''), 10) || 0;
}

/**
 * Dynamic Lucide SVG icon generator for template literals.
 * Converts kebab-case to PascalCase and retrieves icon definition from Lucide CDN.
 * @param {string} name - Icon name
 * @param {number} size - Icon dimensions in pixels
 * @param {number} strokeWidth - Stroke thickness
 * @returns {string} SVG HTML markup
 */
function icon(name, size = 20, strokeWidth = 1.8) {
  const resolvedName = ICON_NAME_ALIASES[name] || name;
  const pascalName = resolvedName
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join('');

  const lucideRef = window.lucide;
  const iconDef = (lucideRef && lucideRef.icons)
    ? (lucideRef.icons[pascalName] || lucideRef.icons[resolvedName] || lucideRef.icons[name])
    : null;

  const attrs = {
    class: 'ic',
    width: size,
    height: size,
    'stroke-width': strokeWidth,
    fill: strokeWidth === 0 ? 'currentColor' : 'none'
  };

  if (iconDef) {
    if (typeof iconDef.toSvg === 'function') {
      try {
        return iconDef.toSvg(attrs);
      } catch (e) {}
    }
    if (lucideRef && typeof lucideRef.createElement === 'function') {
      try {
        const svgEl = lucideRef.createElement(iconDef, attrs);
        if (svgEl && svgEl.outerHTML) {
          return svgEl.outerHTML;
        }
      } catch (err) {
        console.warn('lucide.createElement failed for', name, err);
      }
    }
  }

  return `<i data-lucide="${escapeHTML(resolvedName)}" class="ic" style="width:${size}px;height:${size}px;display:inline-flex;"></i>`;
}

/* ==========================================================================
   BALANCE (SALDO) CONTROLLERS
   ========================================================================== */

function renderSaldo() {
  const saldoChip = document.getElementById('saldoChip');
  if (!saldoChip) return;
  saldoChip.innerHTML = `${icon('wallet', 16, 2)}<span><small>Saldo</small>${formatRupiah(appState.saldo)}</span>`;
}

function pulseSaldoChip() {
  const chip = document.getElementById('saldoChip');
  if (!chip) return;
  chip.classList.add('pulse');
  setTimeout(() => chip.classList.remove('pulse'), 320);
}

function animateSaldo(from, to, duration) {
  return new Promise(resolve => {
    const startTime = performance.now();
    const chip = document.getElementById('saldoChip');
    const topupEl = document.getElementById('topupCurrentSaldo');

    function tick(now) {
      const elapsed = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      const val = from + (to - from) * eased;
      appState.saldo = val;

      if (chip) {
        chip.innerHTML = `${icon('wallet', 16, 2)}<span><small>Saldo</small>${formatRupiah(val)}</span>`;
      }
      if (topupEl) {
        topupEl.textContent = formatRupiah(val);
      }

      if (elapsed < 1) {
        requestAnimationFrame(tick);
      } else {
        appState.saldo = to;
        persistSaldo(to);
        renderSaldo();
        if (topupEl) {
          topupEl.textContent = formatRupiah(to);
        }
        pulseSaldoChip();
        resolve();
      }
    }

    requestAnimationFrame(tick);
  });
}

/* ==========================================================================
   NAVIGATION & SPA ROUTING
   ========================================================================== */

function goToPage(pageId) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  const targetPage = document.getElementById(`page-${pageId}`);
  if (!targetPage) return;

  targetPage.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (pageId === 'pembayaran') renderPaymentPage();
  if (pageId === 'topup') renderTopupPage();
}

/* ==========================================================================
   SEARCH & AUTOCOMPLETE
   ========================================================================== */

function findMatches(query) {
  const normalizedQuery = query.toLowerCase();
  return WAHANA.filter(w =>
    w.nama.toLowerCase().includes(normalizedQuery) ||
    w.kategori.toLowerCase().includes(normalizedQuery)
  );
}

function renderSuggestions(matches) {
  const suggestBox = document.getElementById('searchSuggest');
  if (!suggestBox) return;

  if (!matches.length) {
    suggestBox.innerHTML = '<div class="suggest-empty">Wahana tidak ditemukan.</div>';
    suggestBox.classList.add('show');
    return;
  }

  suggestBox.innerHTML = matches.map(w => `
    <button class="suggest-item" type="button" onclick="pickSuggestion('${escapeHTML(w.id)}')">
      <div class="suggest-thumb" style="background-image:${getAttractionImageUrl(w)}"></div>
      <div class="suggest-info">
        <b>${escapeHTML(w.nama)}</b>
        <span>${escapeHTML(w.kategori)} · ${escapeHTML(w.durasi)} · ${escapeHTML(w.tinggi)}</span>
      </div>
      <div class="suggest-price">${formatRupiah(w.harga)}</div>
    </button>
  `).join('');

  suggestBox.classList.add('show');
}

function hideSuggestions() {
  const suggestBox = document.getElementById('searchSuggest');
  if (suggestBox) suggestBox.classList.remove('show');
}

function onSearchInput() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;

  const query = searchInput.value.trim();
  clearTimeout(appState.searchTimer);

  if (!query) {
    hideSuggestions();
    return;
  }

  const matches = findMatches(query);
  renderSuggestions(matches);

  if (matches.length === 1) {
    appState.searchTimer = setTimeout(() => {
      pickSuggestion(matches[0].id);
    }, 750);
  }
}

function onSearchKey(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    submitSearch();
  } else if (event.key === 'Escape') {
    hideSuggestions();
  }
}

function submitSearch() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;

  const query = searchInput.value.trim();
  if (!query) return;

  const matches = findMatches(query);
  if (matches.length) {
    pickSuggestion(matches[0].id);
  }
}

function pickSuggestion(wahanaId) {
  clearTimeout(appState.searchTimer);
  hideSuggestions();
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  openDetail(wahanaId);
}

/* ==========================================================================
   CATEGORY BAR & CATALOG CARDS
   ========================================================================== */

function renderCatBar() {
  const categories = getCategories();
  const bar = document.getElementById('catBar');
  if (!bar) return;

  bar.innerHTML = categories.map(cat => {
    let count = 0;
    if (cat === 'Semua') {
      count = WAHANA.length;
    } else if (cat === 'Favorit') {
      count = getFavoriteWahanaList().length;
    } else {
      count = WAHANA.filter(w => w.kategori === cat).length;
    }

    const isActive = cat === appState.activeCat;
    return `
      <button class="cat-chip ${isActive ? 'active' : ''}" type="button" onclick="setCategory('${escapeHTML(cat)}')">
        ${escapeHTML(cat)}<span class="cat-count">${count}</span>
      </button>
    `;
  }).join('');
}

function setCategory(category) {
  appState.activeCat = category;
  renderCatBar();
  const favoritSection = document.getElementById('favoritSection');
  if (favoritSection) {
    favoritSection.classList.toggle('hidden', category !== 'Semua');
  }
  renderWahanaGrid();
}

function wahanaCardHTML(w) {
  const starMarkup = w.favorit
    ? `<span class="card-star" title="Wahana favorit">${icon('star', 13, 0)}</span>`
    : '';

  return `
    <button class="card" type="button" onclick="openDetail('${escapeHTML(w.id)}')">
      <div class="card-media" style="background-image:${getAttractionImageUrl(w)};">
        <span class="card-tag">${escapeHTML(w.kategori)}</span>
        ${starMarkup}
      </div>
      <div class="card-body">
        <h3>${escapeHTML(w.nama)}</h3>
        <div class="card-meta">
          <span>${icon('clock', 14, 2)} ${escapeHTML(w.durasi)}</span>
          <span class="dot"></span>
          <span>${icon('ruler', 14, 2)} ${escapeHTML(w.tinggi)}</span>
        </div>
        <div class="card-foot">
          <div class="price">${formatRupiah(w.harga)}<small>per tiket</small></div>
          <span class="card-cta">Lihat <span style="display:inline-flex;">${icon('arrow-right', 13, 2.2)}</span></span>
        </div>
      </div>
    </button>
  `;
}

function renderWahanaGrid() {
  let list = [];
  if (appState.activeCat === 'Semua') {
    list = WAHANA;
  } else if (appState.activeCat === 'Favorit') {
    list = getFavoriteWahanaList();
  } else {
    list = WAHANA.filter(w => w.kategori === appState.activeCat);
  }

  const grid = document.getElementById('wahanaGrid');
  if (grid) {
    grid.innerHTML = list.length
      ? list.map(wahanaCardHTML).join('')
      : '<div class="empty-grid">Belum ada wahana di kategori ini.</div>';
  }

  let title = 'Semua wahana';
  if (appState.activeCat === 'Favorit') {
    title = 'Wahana favorit';
  } else if (appState.activeCat !== 'Semua') {
    title = `Wahana · ${appState.activeCat}`;
  }

  const sectionTitle = document.getElementById('sectionTitle');
  const resultCount = document.getElementById('resultCount');
  if (sectionTitle) sectionTitle.textContent = title;
  if (resultCount) resultCount.textContent = `${list.length} wahana`;

  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

function renderFavoritGrid() {
  const favorites = getFavoriteWahanaList();
  const grid = document.getElementById('favoritGrid');
  const count = document.getElementById('favCount');

  if (grid) grid.innerHTML = favorites.map(wahanaCardHTML).join('');
  if (count) count.textContent = `${favorites.length} pilihan`;

  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

/* ==========================================================================
   DETAIL VIEW
   ========================================================================== */

function openDetail(wahanaId) {
  appState.currentDetailId = wahanaId;
  appState.detailQty = 1;
  renderDetailPage();
  goToPage('detail');
}

function renderDetailPage() {
  const attraction = WAHANA.find(w => w.id === appState.currentDetailId);
  if (!attraction) return;

  const detailMedia = document.getElementById('detailMedia');
  const detailTag = document.getElementById('detailTag');
  const detailTitle = document.getElementById('detailTitle');
  const detailDesc = document.getElementById('detailDesc');
  const detailPrice = document.getElementById('detailPrice');
  const detailMetaRow = document.getElementById('detailMetaRow');
  const detailQtyLabel = document.getElementById('detailQtyLabel');
  const detailSubtotal = document.getElementById('detailSubtotal');

  if (detailMedia) detailMedia.style.backgroundImage = getAttractionImageUrl(attraction);
  if (detailTag) detailTag.textContent = attraction.kategori;
  if (detailTitle) detailTitle.textContent = attraction.nama;
  if (detailDesc) detailDesc.textContent = attraction.desc;
  if (detailPrice) detailPrice.textContent = formatRupiah(attraction.harga);

  if (detailMetaRow) {
    detailMetaRow.innerHTML = `
      <div class="detail-meta-item">${icon('clock', 16, 1.8)} Durasi <b>${escapeHTML(attraction.durasi)}</b></div>
      <div class="detail-meta-item">${icon('ruler', 16, 1.8)} Syarat tinggi <b>${escapeHTML(attraction.tinggi)}</b></div>
      <div class="detail-meta-item">${icon('ticket', 16, 1.8)} Kategori <b>${escapeHTML(attraction.kategori)}</b></div>
    `;
  }

  if (detailQtyLabel) detailQtyLabel.textContent = appState.detailQty;
  if (detailSubtotal) detailSubtotal.textContent = formatRupiah(attraction.harga * appState.detailQty);
}

function changeDetailQty(delta) {
  appState.detailQty = Math.max(1, Math.min(20, appState.detailQty + delta));
  const attraction = WAHANA.find(w => w.id === appState.currentDetailId);
  if (!attraction) return;

  const detailQtyLabel = document.getElementById('detailQtyLabel');
  const detailSubtotal = document.getElementById('detailSubtotal');

  if (detailQtyLabel) detailQtyLabel.textContent = appState.detailQty;
  if (detailSubtotal) detailSubtotal.textContent = formatRupiah(attraction.harga * appState.detailQty);
}

function buyFromDetail() {
  if (!appState.currentDetailId) return;
  const attraction = WAHANA.find(w => w.id === appState.currentDetailId);
  if (!attraction) return;

  appState.pendingOrder = {
    wahana: attraction,
    qty: appState.detailQty,
    subtotal: attraction.harga * appState.detailQty
  };
  goToPage('pembayaran');
}

/* ==========================================================================
   CHECKOUT & PAYMENT FLOW (SALDO SAMUDRA)
   ========================================================================== */

function renderPaymentPage() {
  if (!appState.pendingOrder) {
    goToPage('home');
    return;
  }

  const { wahana, qty, subtotal } = appState.pendingOrder;
  const total = subtotal + ADMIN_FEE;

  const paySaldoLine = document.getElementById('paySaldoLine');
  const warn = document.getElementById('paySaldoWarn');
  const btnBayar = document.getElementById('btnBayar');

  if (paySaldoLine) {
    paySaldoLine.textContent = `Saldo kamu: ${formatRupiah(appState.saldo)}`;
  }

  if (appState.saldo < total) {
    if (warn) warn.classList.remove('hidden');
    if (btnBayar) {
      btnBayar.disabled = true;
      btnBayar.textContent = 'Saldo tidak cukup';
    }
  } else {
    if (warn) warn.classList.add('hidden');
    if (btnBayar) {
      btnBayar.disabled = false;
      btnBayar.textContent = 'Bayar sekarang';
    }
  }

  const orderLineList = document.getElementById('orderLineList');
  if (orderLineList) {
    orderLineList.innerHTML = `
      <div class="order-line">
        <div class="thumb" style="background-image:${getAttractionImageUrl(wahana)}"></div>
        <div class="info">
          <b>${escapeHTML(wahana.nama)}</b>
          <span>${qty} tiket × ${formatRupiah(wahana.harga)}</span>
        </div>
        <div class="amt">${formatRupiah(subtotal)}</div>
      </div>
    `;
  }

  const notaItems = document.getElementById('notaItems');
  const notaFee = document.getElementById('notaFee');
  const notaTotal = document.getElementById('notaTotal');
  const notaDate = document.getElementById('notaDate');

  if (notaItems) {
    notaItems.innerHTML = `
      <div class="nota-row">
        <span>${escapeHTML(wahana.nama)} × ${qty}</span>
        <span>${formatRupiah(subtotal)}</span>
      </div>
    `;
  }

  if (notaFee) notaFee.textContent = formatRupiah(ADMIN_FEE);
  if (notaTotal) notaTotal.textContent = formatRupiah(total);
  if (notaDate) {
    notaDate.textContent = new Date().toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }
}

async function handleBayar() {
  if (!appState.pendingOrder) return;

  const inpNama = document.getElementById('inpNama');
  const inpHp = document.getElementById('inpHp');
  const errEl = document.getElementById('payError');
  const btn = document.getElementById('btnBayar');

  const nama = inpNama ? inpNama.value.trim() : '';
  const hp = inpHp ? inpHp.value.trim() : '';

  if (!nama || !hp) {
    if (errEl) {
      errEl.textContent = 'Nama dan nomor HP wajib diisi.';
      errEl.style.display = 'block';
    }
    return;
  }

  const total = appState.pendingOrder.subtotal + ADMIN_FEE;
  if (appState.saldo < total) {
    if (errEl) {
      errEl.textContent = 'Saldo kamu tidak cukup. Isi ulang dulu ya.';
      errEl.style.display = 'block';
    }
    return;
  }

  if (errEl) errEl.style.display = 'none';

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<span class="spin"></span> Memproses...';
  }

  await new Promise(resolve => setTimeout(resolve, 900));

  const orderId = `SBL${Date.now().toString().slice(-8)}`;
  const { wahana, qty, subtotal } = appState.pendingOrder;

  appState.currentOrder = {
    id: orderId,
    nama,
    hp,
    metode: 'Saldo Samudra',
    items: [{
      wahanaId: wahana.id,
      nama: wahana.nama,
      harga: wahana.harga,
      qty,
      subtotal
    }],
    adminFee: ADMIN_FEE,
    total,
    waktu: new Date().toISOString()
  };

  const oldSaldo = appState.saldo;
  const newSaldo = appState.saldo - total;
  await animateSaldo(oldSaldo, newSaldo, 700);

  saveOrderToStorage(appState.currentOrder);

  appState.pendingOrder = null;
  if (btn) {
    btn.disabled = false;
    btn.textContent = 'Bayar sekarang';
  }

  renderTicketPage();
  showToast('Tiket berhasil diterbitkan');
  goToPage('tiket');
}

/* ==========================================================================
   TOP-UP BALANCE FLOW
   ========================================================================== */

function openTopup(returnTo = 'home') {
  appState.topupReturnTo = returnTo;
  appState.topupAmount = 0;
  const customInput = document.getElementById('topupCustom');
  if (customInput) customInput.value = '';
  goToPage('topup');
}

function renderTopupPage() {
  const currentSaldoEl = document.getElementById('topupCurrentSaldo');
  const oldSaldoEl = document.getElementById('topupOld');
  const errorEl = document.getElementById('topupError');

  if (currentSaldoEl) currentSaldoEl.textContent = formatRupiah(appState.saldo);
  if (oldSaldoEl) oldSaldoEl.textContent = formatRupiah(appState.saldo);

  renderTopupPresets();
  renderTopupMethods();
  updateTopupSummary();

  if (errorEl) errorEl.style.display = 'none';
}

function renderTopupPresets() {
  const box = document.getElementById('topupPresets');
  if (!box) return;

  box.innerHTML = TOPUP_PRESETS.map(amount => `
    <button class="topup-preset ${appState.topupAmount === amount ? 'active' : ''}" type="button" onclick="pickTopupPreset(${amount})">
      ${formatRupiah(amount).replace('Rp ', '')}
    </button>
  `).join('');
}

function pickTopupPreset(amount) {
  appState.topupAmount = amount;
  const customInput = document.getElementById('topupCustom');
  if (customInput) customInput.value = amount.toLocaleString('id-ID');

  renderTopupPresets();
  updateTopupSummary();
}

function onTopupInput() {
  const inputEl = document.getElementById('topupCustom');
  if (!inputEl) return;

  const rawDigits = parseDigits(inputEl.value);
  inputEl.value = rawDigits ? rawDigits.toLocaleString('id-ID') : '';
  appState.topupAmount = rawDigits;

  renderTopupPresets();
  updateTopupSummary();
}

function renderTopupMethods() {
  const box = document.getElementById('topupMethods');
  if (!box) return;

  box.innerHTML = TOPUP_METHODS.map(method => `
    <button class="topup-method ${appState.topupMethod === method.id ? 'selected' : ''}" type="button" onclick="pickTopupMethod('${escapeHTML(method.id)}')">
      <div class="tmi">${icon(method.ic, 18, 1.8)}</div>
      <div class="tmb">
        <b>${escapeHTML(method.label)}</b>
        <span>${escapeHTML(method.desc)}</span>
      </div>
    </button>
  `).join('');

  const selectedMethod = TOPUP_METHODS.find(m => m.id === appState.topupMethod);
  const methodLabelEl = document.getElementById('topupMethodLabel');
  if (methodLabelEl) {
    methodLabelEl.innerHTML = selectedMethod
      ? `${icon(selectedMethod.ic, 14, 2)} ${escapeHTML(selectedMethod.label)}`
      : '—';
  }
}

function pickTopupMethod(methodId) {
  appState.topupMethod = methodId;
  renderTopupMethods();
}

function updateTopupSummary() {
  const addAmount = appState.topupAmount || 0;
  const topupAddEl = document.getElementById('topupAdd');
  const topupNewEl = document.getElementById('topupNew');

  if (topupAddEl) topupAddEl.textContent = formatRupiah(addAmount);
  if (topupNewEl) topupNewEl.textContent = formatRupiah(appState.saldo + addAmount);
}

async function handleTopup() {
  if (appState.topupBusy) return;

  const errEl = document.getElementById('topupError');
  if (!appState.topupAmount || appState.topupAmount < TOPUP_MIN) {
    if (errEl) {
      errEl.textContent = `Minimum isi ulang ${formatRupiah(TOPUP_MIN)}.`;
      errEl.style.display = 'block';
    }
    return;
  }

  if (!appState.topupMethod) {
    if (errEl) {
      errEl.textContent = 'Pilih metode pembayaran dulu ya.';
      errEl.style.display = 'block';
    }
    return;
  }

  if (errEl) errEl.style.display = 'none';

  appState.topupBusy = true;
  const btn = document.getElementById('btnTopup');
  const methodObj = TOPUP_METHODS.find(m => m.id === appState.topupMethod);
  const methodLabel = methodObj ? methodObj.label : 'pembayaran';

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<span class="spin"></span> Memproses ${escapeHTML(methodLabel)}...`;
  }

  /* 1. Simulate gateway processing */
  await new Promise(resolve => setTimeout(resolve, 1000));

  /* 2. Transition to balance replenishment */
  if (btn) btn.innerHTML = '<span class="spin"></span> Mengisi saldo...';
  await new Promise(resolve => setTimeout(resolve, 250));

  const oldSaldo = appState.saldo;
  const newSaldo = appState.saldo + appState.topupAmount;
  await animateSaldo(oldSaldo, newSaldo, 1400);

  /* 3. Feedback */
  if (btn) {
    btn.innerHTML = '✓ Pembayaran berhasil';
    btn.classList.remove('btn-primary');
    btn.classList.add('btn-success');
  }

  await new Promise(resolve => setTimeout(resolve, 550));

  if (btn) {
    btn.classList.add('btn-primary');
    btn.classList.remove('btn-success');
    btn.innerHTML = 'Bayar &amp; Isi Ulang';
    btn.disabled = false;
  }
  appState.topupBusy = false;

  const addedDiff = newSaldo - oldSaldo;
  appState.topupAmount = 0;
  const customInput = document.getElementById('topupCustom');
  if (customInput) customInput.value = '';

  showToast(`Pembayaran ${methodLabel} berhasil · Saldo +${formatRupiah(addedDiff)}`);
  goToPage(appState.topupReturnTo || 'home');
}

/* ==========================================================================
   TICKETS & QR CODE VIEW
   ========================================================================== */

function switchTicketTab(tab) {
  const tabTiketBtn = document.getElementById('tabTiketBtn');
  const tabNotaBtn = document.getElementById('tabNotaBtn');
  const ticketList = document.getElementById('ticketList');
  const notaFinal = document.getElementById('notaFinal');

  if (tabTiketBtn) tabTiketBtn.classList.toggle('active', tab === 'tiket');
  if (tabNotaBtn) tabNotaBtn.classList.toggle('active', tab === 'nota');
  if (ticketList) ticketList.classList.toggle('hidden', tab !== 'tiket');
  if (notaFinal) notaFinal.classList.toggle('hidden', tab !== 'nota');
}

function renderTicketPage() {
  if (!appState.currentOrder) return;

  const ticketList = document.getElementById('ticketList');
  const notaFinal = document.getElementById('notaFinal');

  if (ticketList) {
    ticketList.innerHTML = appState.currentOrder.items.map((item, index) => {
      const attraction = WAHANA.find(w => w.id === item.wahanaId) || {};
      const code = `${appState.currentOrder.id}-${item.wahanaId.toUpperCase()}-${String(index + 1).padStart(2, '0')}`;
      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&margin=0&data=${encodeURIComponent(code)}`;

      return `
        <div class="ticket-card">
          <div class="ticket-main">
            <div class="ticket-eyebrow">Tiket wahana · Samudra Land</div>
            <h3>${escapeHTML(attraction.nama || item.nama)}</h3>
            <div class="ticket-sub">
              Berlaku untuk ${item.qty} orang · ${new Date(appState.currentOrder.waktu).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
            </div>
            <div class="ticket-grid">
              <div><span>Pemesan</span><b>${escapeHTML(appState.currentOrder.nama)}</b></div>
              <div><span>Jumlah tiket</span><b>${item.qty} tiket</b></div>
              <div><span>Harga</span><b>${formatRupiah(item.subtotal)}</b></div>
            </div>
            <div class="ticket-code">${escapeHTML(code)}</div>
          </div>
          <div class="ticket-stub">
            <div class="qr-box"><img src="${qrUrl}" alt="QR tiket ${escapeHTML(code)}"></div>
            <small>Tunjukkan QR ini di pintu masuk</small>
          </div>
        </div>
      `;
    }).join('');
  }

  if (notaFinal) {
    notaFinal.innerHTML = `
      <div class="nota-head">
        <div><h4>Nota Pemesanan</h4><span>${escapeHTML(appState.currentOrder.id)}</span></div>
        <span>${new Date(appState.currentOrder.waktu).toLocaleString('id-ID')}</span>
      </div>
      ${appState.currentOrder.items.map(it => `
        <div class="nota-row">
          <span>${escapeHTML(it.nama)} × ${it.qty}</span>
          <span>${formatRupiah(it.subtotal)}</span>
        </div>
      `).join('')}
      <div class="nota-row sub"><span>Biaya admin</span><span>${formatRupiah(appState.currentOrder.adminFee)}</span></div>
      <div class="nota-row sub"><span>Metode pembayaran</span><span>${escapeHTML(appState.currentOrder.metode)}</span></div>
      <div class="nota-total"><span>Total dibayar</span><span>${formatRupiah(appState.currentOrder.total)}</span></div>
    `;
  }

  switchTicketTab('tiket');
}

function resetOrderFlow() {
  appState.currentOrder = null;
  goToPage('home');
}

/* ==========================================================================
   TOAST NOTIFICATION SYSTEM
   ========================================================================== */

function showToast(message) {
  const toastEl = document.getElementById('toast');
  const toastText = document.getElementById('toastText');
  const toastIcon = document.getElementById('toastIcon');

  if (!toastEl) return;
  if (toastText) toastText.textContent = message;
  if (toastIcon) toastIcon.innerHTML = icon('check', 13, 2.5);

  toastEl.classList.add('show');
  clearTimeout(appState.toastTimer);
  appState.toastTimer = setTimeout(() => {
    toastEl.classList.remove('show');
  }, 2600);
}

/* ==========================================================================
   MODAL DIALOGS
   ========================================================================== */

function openInfoModal() {
  const modal = document.getElementById('infoModalWrap');
  if (modal) modal.classList.add('show');
}

function closeInfoModal() {
  const modal = document.getElementById('infoModalWrap');
  if (modal) modal.classList.remove('show');
}

/* ==========================================================================
   ADMIN DASHBOARD (EASTER EGG TRIGGER)
   ========================================================================== */

function secretClick() {
  appState.secretCount++;
  clearTimeout(appState.secretTimer);
  appState.secretTimer = setTimeout(() => {
    appState.secretCount = 0;
  }, 1800);

  if (appState.secretCount >= 5) {
    appState.secretCount = 0;
    openAdmin();
  }
}

function openAdmin() {
  const overlay = document.getElementById('adminOverlay');
  if (overlay) overlay.classList.add('show');
  const orders = loadAllOrdersFromStorage();
  renderAdminDashboard(orders);
}

function closeAdmin() {
  const overlay = document.getElementById('adminOverlay');
  if (overlay) overlay.classList.remove('show');
}

function renderAdminDashboard(orders) {
  const totalTickets = orders.reduce((sum, ord) => sum + ord.items.reduce((s, it) => s + it.qty, 0), 0);
  const totalRevenue = orders.reduce((sum, ord) => sum + ord.total, 0);

  const perWahana = {};
  WAHANA.forEach(w => {
    perWahana[w.id] = { nama: w.nama, qty: 0, revenue: 0 };
  });

  orders.forEach(ord => {
    ord.items.forEach(it => {
      if (!perWahana[it.wahanaId]) {
        perWahana[it.wahanaId] = { nama: it.nama, qty: 0, revenue: 0 };
      }
      perWahana[it.wahanaId].qty += it.qty;
      perWahana[it.wahanaId].revenue += it.subtotal;
    });
  });

  const ranking = Object.values(perWahana).sort((a, b) => b.qty - a.qty);
  const maxQty = Math.max(1, ...ranking.map(r => r.qty));

  const adminStats = document.getElementById('adminStats');
  const adminBars = document.getElementById('adminBars');
  const adminOrdersTable = document.getElementById('adminOrdersTable');

  if (adminStats) {
    adminStats.innerHTML = `
      <div class="stat-box"><span>Total transaksi</span><b>${orders.length}</b></div>
      <div class="stat-box"><span>Total tiket terjual</span><b>${totalTickets}</b></div>
      <div class="stat-box"><span>Total pendapatan</span><b>${formatRupiah(totalRevenue)}</b></div>
      <div class="stat-box"><span>Wahana terlaris</span><b>${ranking[0] && ranking[0].qty > 0 ? escapeHTML(ranking[0].nama) : '—'}</b></div>
    `;
  }

  if (adminBars) {
    adminBars.innerHTML = ranking.map(r => `
      <div class="bar-row">
        <div class="lbl">${escapeHTML(r.nama)}</div>
        <div class="bar-track"><div class="bar-fill" style="width:${(r.qty / maxQty) * 100}%"></div></div>
        <div class="val">${r.qty} tiket</div>
      </div>
    `).join('');
  }

  if (adminOrdersTable) {
    adminOrdersTable.innerHTML = orders.length
      ? orders.slice().reverse().map(ord => `
          <tr>
            <td>${escapeHTML(ord.id)}</td>
            <td>${escapeHTML(ord.nama)}</td>
            <td>${formatRupiah(ord.total)}</td>
          </tr>
        `).join('')
      : '<tr><td colspan="3" style="color:var(--ink-soft);">Belum ada transaksi.</td></tr>';
  }
}

/* ==========================================================================
   GLOBAL EXPORTS (PRESERVE INLINE HTML ATTRIBUTES & COMPATIBILITY)
   ========================================================================== */

window.goToPage = goToPage;
window.openDetail = openDetail;
window.changeDetailQty = changeDetailQty;
window.buyFromDetail = buyFromDetail;
window.handleBayar = handleBayar;
window.openTopup = openTopup;
window.pickTopupPreset = pickTopupPreset;
window.onTopupInput = onTopupInput;
window.pickTopupMethod = pickTopupMethod;
window.handleTopup = handleTopup;
window.switchTicketTab = switchTicketTab;
window.resetOrderFlow = resetOrderFlow;
window.openInfoModal = openInfoModal;
window.closeInfoModal = closeInfoModal;
window.onSearchInput = onSearchInput;
window.onSearchKey = onSearchKey;
window.submitSearch = submitSearch;
window.pickSuggestion = pickSuggestion;
window.setCategory = setCategory;
window.secretClick = secretClick;
window.closeAdmin = closeAdmin;

/* ==========================================================================
   APPLICATION INITIALIZATION
   ========================================================================== */

function init() {
  /* Clean up legacy chatbot DOM element if present */
  const chatWidget = document.getElementById('chatWidget');
  if (chatWidget) {
    chatWidget.remove();
  }

  /* Render Static Lucide Icons */
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }

  const heroBg = document.getElementById('heroBg');
  if (heroBg) {
    heroBg.style.backgroundImage = "url('https://picsum.photos/seed/samudra-hero/1600/900')";
  }

  /* Render Primary Dynamic Views */
  renderSaldo();
  renderFavoritGrid();
  renderCatBar();
  renderWahanaGrid();

  /* Global Event Listeners */
  document.addEventListener('click', event => {
    const wrap = document.querySelector('.search-wrap');
    if (wrap && !wrap.contains(event.target)) {
      hideSuggestions();
    }
  });
}

/* Start Application when DOM is ready */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
