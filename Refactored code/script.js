/* ================= ICONS ================= */
function icon(name, size, sw){
  size = size || 20; sw = sw || 1.8;
  const p = {
    wave: '<path d="M2 15c2-3 4-3 6 0s4 3 6 0 4-3 6 0 4 3 6 0"/><path d="M2 9c2-3 4-3 6 0s4 3 6 0 4-3 6 0 4 3 6 0"/>',
    coaster: '<path d="M3 16l4-8 3 5 4-9 3 6 4-7"/>',
    ferris: '<circle cx="12" cy="12" r="8"/><path d="M12 4v16M4 12h16M6.3 6.3l11.4 11.4M17.7 6.3L6.3 17.7"/><circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none"/>',
    ghost: '<path d="M6 20V11a6 6 0 0 1 12 0v9l-2.5-2-2 2-2-2-2 2-2-2Z"/><circle cx="9.5" cy="10.5" r="1" fill="currentColor" stroke="none"/><circle cx="14.5" cy="10.5" r="1" fill="currentColor" stroke="none"/>',
    zipline: '<path d="M4 18 20 6"/><circle cx="17" cy="8.5" r="2"/>',
    train: '<rect x="5" y="6" width="14" height="9" rx="2"/><path d="M5 11.5h14M9 15l-2 3M15 15l2 3"/><circle cx="9" cy="9" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="9" r="1" fill="currentColor" stroke="none"/>',
    droplet: '<path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11Z"/>',
    ticket: '<path d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V8Z"/><path d="M14 6.5v11" stroke-dasharray="2 2"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
    ruler: '<rect x="3" y="9" width="18" height="6" rx="1"/><path d="M7 9v2.5M11 9v2.5M15 9v2.5"/>',
    chat: '<path d="M4 5h16v11H9l-4 4V5Z"/>',
    bank: '<path d="M3 10 12 4l9 6"/><path d="M5 10v9M9 10v9M15 10v9M19 10v9"/><path d="M3 21h18"/>',
    qr: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M15 15h2v2h-2zM19 15h2M15 19h2M19 19h2"/>',
    card: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
    wallet: '<path d="M3 7a2 2 0 0 1 2-2h13v4H5a2 2 0 0 1-2-2Z"/><path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H9"/><circle cx="17" cy="14" r="1" fill="currentColor" stroke="none"/>',
    send: '<path d="M4 12l16-8-6 16-3-7-7-1Z"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
    headset: '<path d="M4 13v-1a8 8 0 0 1 16 0v1"/><rect x="2" y="13" width="5" height="7" rx="2"/><rect x="17" y="13" width="5" height="7" rx="2"/>',
    mappin: '<path d="M12 22s7-7.5 7-12a7 7 0 0 0-14 0c0 4.5 7 12 7 12Z"/><circle cx="12" cy="10" r="2.3"/>',
    back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    star: '<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 16.9l-5.2 2.8 1-5.9-4.3-4.1 5.9-.8L12 3.5Z" fill="currentColor" stroke="none"/>',
    swipe: '<path d="M4 12h16M8 8l-4 4 4 4M16 8l4 4-4 4"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    mirror: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M4 12h16M12 3v18" stroke-dasharray="2 3"/>',
    tornado: '<path d="M4 6h16M6 10h12M8 14h8M10 18h4"/>',
    carousel: '<path d="M12 3v18M4 8h16M4 16h16"/><circle cx="12" cy="8" r="1.5" fill="currentColor" stroke="none"/><path d="M4 8 8 4M20 8l-4-4M4 16l4 4M20 16l-4 4"/>',
    boat: '<path d="M3 15h18l-2 5H5l-2-5Z"/><path d="M12 3v12M7 8h10M7 12h10"/>',
    seal: '<circle cx="12" cy="10" r="4"/><path d="M8 14c-2 2-3 5-3 7M16 14c2 2 3 5 3 7"/><circle cx="10.5" cy="9.5" r=".6" fill="currentColor" stroke="none"/><circle cx="13.5" cy="9.5" r=".6" fill="currentColor" stroke="none"/>'
  };
  return '<svg class="ic" width="'+size+'" height="'+size+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="'+sw+'" stroke-linecap="round" stroke-linejoin="round">'+(p[name]||'')+'</svg>';
}

/* ================= DATA ================= */
const WAHANA = [
  {id:'ombak-raksasa', nama:'Ombak Raksasa', kategori:'Ekstrem', harga:85000, durasi:'3 mnt', tinggi:'140 cm', ic:'coaster', seed:'coaster-ride', favorit:true, desc:'Roller coaster tercepat di Samudra Land, menukik tajam menghadap laut lepas. Melewati tiga putaran penuh dengan kecepatan tinggi, cocok untuk pencari sensasi ekstrem.'},
  {id:'seluncur-naga', nama:'Seluncur Naga', kategori:'Air', harga:65000, durasi:'2 mnt', tinggi:'120 cm', ic:'wave', seed:'water-slide', favorit:true, desc:'Perosotan air sepanjang 80 meter dengan tikungan berliku menyerupai tubuh naga. Meluncur dari ketinggian menuju kolam penampungan yang segar.'},
  {id:'bianglala', nama:'Bianglala Cakrawala', kategori:'Santai', harga:45000, durasi:'8 mnt', tinggi:'Semua usia', ic:'ferris', seed:'ferris-wheel', favorit:true, desc:'Kincir raksasa dengan kabin tertutup, menawarkan pemandangan pantai dan seluruh area taman dari ketinggian 40 meter. Cocok untuk keluarga.'},
  {id:'kapal-karam', nama:'Kapal Karam', kategori:'Ekstrem', harga:55000, durasi:'10 mnt', tinggi:'130 cm', ic:'ghost', seed:'ghost-house', desc:'Rumah hantu bertema kapal karam, menyusuri lorong gelap di bawah dermaga dengan efek suara dan visual yang mendebarkan.'},
  {id:'kolam-ombak', nama:'Kolam Ombak Buatan', kategori:'Air', harga:50000, durasi:'Bebas', tinggi:'Semua usia', ic:'droplet', seed:'wave-pool', favorit:true, desc:'Kolam ombak buatan dengan gelombang yang dihasilkan setiap 15 menit sekali, memberi sensasi bermain ombak seperti di laut sungguhan.'},
  {id:'flying-fox', nama:'Flying Fox Camar', kategori:'Ekstrem', harga:70000, durasi:'1 mnt', tinggi:'135 cm', ic:'zipline', seed:'zipline-ride', favorit:true, desc:'Meluncur sejauh 250 meter di atas kanopi pantai dengan kecepatan angin laut yang menyegarkan.'},
  {id:'kereta-mini', nama:'Kereta Mini Pesisir', kategori:'Santai', harga:35000, durasi:'12 mnt', tinggi:'Semua usia', ic:'train', seed:'mini-train', desc:'Kereta wisata yang berkeliling seluruh area Samudra Land, melewati semua zona wahana sambil menikmati suasana pantai.'},
  {id:'dunia-air-cilik', nama:'Dunia Air Cilik', kategori:'Anak', harga:40000, durasi:'Bebas', tinggi:'Maks 120 cm', ic:'droplet', seed:'kids-water', desc:'Area bermain air khusus anak dengan kedalaman aman dan berbagai wahana mini yang ramah untuk si kecil.'},
  {id:'rumah-cermin', nama:'Rumah Kaca Cermin', kategori:'Santai', harga:30000, durasi:'5 mnt', tinggi:'Semua usia', ic:'mirror', seed:'mirror-house', desc:'Labirin cermin yang memantulkan cahaya ke segala arah. Menantang orientasi dan cocok untuk foto-foto unik bersama keluarga.'},
  {id:'tornado-air', nama:'Tornado Air', kategori:'Air', harga:75000, durasi:'3 mnt', tinggi:'130 cm', ic:'tornado', seed:'tornado-slide', favorit:true, desc:'Perosotan berbentuk corong raksasa yang berputar sebelum menjatuhkan pengunjung ke kolam di bawahnya. Sensasi berputar tiada henti.'},
  {id:'komidi-putar', nama:'Komidi Putar Bahari', kategori:'Anak', harga:25000, durasi:'6 mnt', tinggi:'Maks 130 cm', ic:'carousel', seed:'carousel-ride', desc:'Komidi putar klasik dengan tema makhluk laut — kuda laut, kura-kura, dan ikan warna-warni. Aman dan ceria untuk anak-anak.'},
  {id:'bumper-boat', nama:'Bumper Boat', kategori:'Air', harga:45000, durasi:'5 mnt', tinggi:'110 cm', ic:'boat', seed:'bumper-boat', desc:'Perahu kecil yang bisa ditabrakkan satu sama lain di kolam dangkal. Seru untuk dimainkan bersama teman atau keluarga.'},
  {id:'taman-lumba', nama:'Taman Lumba-Lumba', kategori:'Anak', harga:35000, durasi:'Bebas', tinggi:'Semua usia', ic:'seal', seed:'dolphin-park', desc:'Area interaktif dengan pertunjukan lumba-lumba mini, kolam sentuh, dan taman edukasi tentang kehidupan laut.'}
];

const ADMIN_FEE = 5000;
const TOPUP_PRESETS = [25000, 50000, 100000, 200000, 500000, 1000000];
const TOPUP_MIN = 10000;

/* Metode pembayaran untuk ISI ULANG saja */
const TOPUP_METHODS = [
  {id:'qris', label:'QRIS', desc:'Scan pakai aplikasi apa saja', ic:'qr'},
  {id:'transfer', label:'Transfer Bank', desc:'BCA · Mandiri · BNI · BRI', ic:'bank'},
  {id:'ewallet', label:'E-Wallet', desc:'GoPay · OVO · Dana · ShopeePay', ic:'wallet'},
  {id:'kartu', label:'Kartu Debit/Kredit', desc:'Visa · Mastercard', ic:'card'}
];

/* ================= STATE ================= */
let activeCat = 'Semua';
let currentOrder = null;
let chatHistory = [];
let currentDetailId = null;
let detailQty = 1;
let saldo = 100000;
let searchTimer = null;
let pendingOrder = null;
let topupReturnTo = 'home';
let topupAmount = 0;
let topupMethod = 'qris';
let topupBusy = false;

/* ================= HELPERS ================= */
function formatRupiah(n){ return 'Rp ' + Math.round(n).toLocaleString('id-ID'); }
function bgUrl(w){ return "url('https://picsum.photos/seed/"+w.seed+"/700/460')"; }
function getCategories(){
  const set = new Set(WAHANA.map(w=>w.kategori));
  return ['Semua', 'Favorit', ...set];
}
function favoriteList(){ return WAHANA.filter(w=>w.favorit); }
function parseDigits(str){ return parseInt((str||'').replace(/\D/g,''), 10) || 0; }

/* ================= SALDO ================= */
function renderSaldo(){
  document.getElementById('saldoChip').innerHTML =
    icon('wallet',16,2) + '<span><small>Saldo</small>' + formatRupiah(saldo) + '</span>';
}
function pulseSaldoChip(){
  const chip = document.getElementById('saldoChip');
  chip.classList.add('pulse');
  setTimeout(()=>chip.classList.remove('pulse'), 320);
}

/* ================= NAV / ROUTING ================= */
function goToPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const el = document.getElementById('page-'+id);
  if(!el) return;
  el.classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
  if(id==='pembayaran') renderPaymentPage();
  if(id==='topup') renderTopupPage();
}

/* ================= SEARCH ================= */
function findMatches(q){
  const s = q.toLowerCase();
  return WAHANA.filter(w =>
    w.nama.toLowerCase().includes(s) || w.kategori.toLowerCase().includes(s)
  );
}
function renderSuggestions(list){
  const box = document.getElementById('searchSuggest');
  if(!list.length){
    box.innerHTML = '<div class="suggest-empty">Wahana tidak ditemukan.</div>';
    box.classList.add('show');
    return;
  }
  box.innerHTML = list.map(w=>`
    <button class="suggest-item" onclick="pickSuggestion('${w.id}')">
      <div class="suggest-thumb" style="background-image:${bgUrl(w)}"></div>
      <div class="suggest-info">
        <b>${w.nama}</b>
        <span>${w.kategori} · ${w.durasi} · ${w.tinggi}</span>
      </div>
      <div class="suggest-price">${formatRupiah(w.harga)}</div>
    </button>
  `).join('');
  box.classList.add('show');
}
function hideSuggestions(){
  document.getElementById('searchSuggest').classList.remove('show');
}
function onSearchInput(){
  const q = document.getElementById('searchInput').value.trim();
  clearTimeout(searchTimer);
  if(!q){ hideSuggestions(); return; }
  const matches = findMatches(q);
  renderSuggestions(matches);
  if(matches.length === 1){
    searchTimer = setTimeout(()=>{ pickSuggestion(matches[0].id); }, 750);
  }
}
function onSearchKey(e){
  if(e.key === 'Enter'){ e.preventDefault(); submitSearch(); }
  if(e.key === 'Escape'){ hideSuggestions(); }
}
function submitSearch(){
  const q = document.getElementById('searchInput').value.trim();
  if(!q) return;
  const matches = findMatches(q);
  if(matches.length){ pickSuggestion(matches[0].id); }
}
function pickSuggestion(id){
  clearTimeout(searchTimer);
  hideSuggestions();
  document.getElementById('searchInput').value = '';
  openDetail(id);
}

/* ================= CATEGORY CHIPS ================= */
function renderCatBar(){
  const cats = getCategories();
  const bar = document.getElementById('catBar');
  bar.innerHTML = cats.map(c=>{
    let count;
    if(c === 'Semua') count = WAHANA.length;
    else if(c === 'Favorit') count = favoriteList().length;
    else count = WAHANA.filter(w=>w.kategori===c).length;
    const isActive = c === activeCat;
    return `<button class="cat-chip ${isActive?'active':''}" onclick="setCategory('${c}')">
      ${c}<span class="cat-count">${count}</span>
    </button>`;
  }).join('');
}
function setCategory(cat){
  activeCat = cat;
  renderCatBar();
  document.getElementById('favoritSection').classList.toggle('hidden', cat !== 'Semua');
  renderWahanaGrid();
}
function renderWahanaGrid(){
  let list;
  if(activeCat === 'Semua') list = WAHANA;
  else if(activeCat === 'Favorit') list = favoriteList();
  else list = WAHANA.filter(w=>w.kategori===activeCat);

  const grid = document.getElementById('wahanaGrid');
  grid.innerHTML = list.length
    ? list.map(wahanaCardHTML).join('')
    : '<div class="empty-grid">Belum ada wahana di kategori ini.</div>';

  let title;
  if(activeCat === 'Semua') title = 'Semua wahana';
  else if(activeCat === 'Favorit') title = 'Wahana favorit';
  else title = 'Wahana · ' + activeCat;
  document.getElementById('sectionTitle').textContent = title;
  document.getElementById('resultCount').textContent = list.length + ' wahana';
}
function renderFavoritGrid(){
  const favs = favoriteList();
  document.getElementById('favoritGrid').innerHTML = favs.map(wahanaCardHTML).join('');
  document.getElementById('favCount').textContent = favs.length + ' pilihan';
}

/* ================= INFO MODAL ================= */
function openInfoModal(){ document.getElementById('infoModalWrap').classList.add('show'); }
function closeInfoModal(){ document.getElementById('infoModalWrap').classList.remove('show'); }

/* ================= CARDS ================= */
function wahanaCardHTML(w){
  const star = w.favorit
    ? '<span class="card-star" title="Wahana favorit">'+icon('star',13,0)+'</span>'
    : '';
  return `
  <button class="card" onclick="openDetail('${w.id}')">
    <div class="card-media" style="background-image:${bgUrl(w)};">
      <span class="card-tag">${w.kategori}</span>
      ${star}
    </div>
    <div class="card-body">
      <h3>${w.nama}</h3>
      <div class="card-meta">
        <span>${icon('clock',14,2)} ${w.durasi}</span>
        <span class="dot"></span>
        <span>${icon('ruler',14,2)} ${w.tinggi}</span>
      </div>
      <div class="card-foot">
        <div class="price">${formatRupiah(w.harga)}<small>per tiket</small></div>
        <span class="card-cta">Lihat <span style="display:inline-flex;">${icon('arrow',13,2.2)}</span></span>
      </div>
    </div>
  </button>`;
}

/* ================= DETAIL ================= */
function openDetail(id){
  currentDetailId = id;
  detailQty = 1;
  renderDetailPage();
  goToPage('detail');
}
function renderDetailPage(){
  const w = WAHANA.find(x=>x.id===currentDetailId);
  if(!w) return;
  document.getElementById('detailMedia').style.backgroundImage = bgUrl(w);
  document.getElementById('detailTag').textContent = w.kategori;
  document.getElementById('detailTitle').textContent = w.nama;
  document.getElementById('detailDesc').textContent = w.desc;
  document.getElementById('detailPrice').textContent = formatRupiah(w.harga);
  document.getElementById('detailMetaRow').innerHTML = `
    <div class="detail-meta-item">${icon('clock',16,1.8)} Durasi <b>${w.durasi}</b></div>
    <div class="detail-meta-item">${icon('ruler',16,1.8)} Syarat tinggi <b>${w.tinggi}</b></div>
    <div class="detail-meta-item">${icon('ticket',16,1.8)} Kategori <b>${w.kategori}</b></div>
  `;
  document.getElementById('detailQtyLabel').textContent = detailQty;
  document.getElementById('detailSubtotal').textContent = formatRupiah(w.harga*detailQty);
}
function changeDetailQty(delta){
  detailQty = Math.max(1, Math.min(20, detailQty+delta));
  const w = WAHANA.find(x=>x.id===currentDetailId);
  document.getElementById('detailQtyLabel').textContent = detailQty;
  document.getElementById('detailSubtotal').textContent = formatRupiah(w.harga*detailQty);
}
function buyFromDetail(){
  if(!currentDetailId) return;
  const w = WAHANA.find(x=>x.id===currentDetailId);
  pendingOrder = { wahana: w, qty: detailQty, subtotal: w.harga*detailQty };
  goToPage('pembayaran');
}

/* ================= PAYMENT (tiket, hanya Saldo) ================= */
function renderPaymentPage(){
  if(!pendingOrder){ goToPage('home'); return; }
  const w = pendingOrder.wahana;
  const total = pendingOrder.subtotal + ADMIN_FEE;

  document.getElementById('paySaldoLine').textContent = 'Saldo kamu: ' + formatRupiah(saldo);

  const warn = document.getElementById('paySaldoWarn');
  const btn = document.getElementById('btnBayar');
  if(saldo < total){
    warn.classList.remove('hidden');
    btn.disabled = true;
    btn.textContent = 'Saldo tidak cukup';
  } else {
    warn.classList.add('hidden');
    btn.disabled = false;
    btn.textContent = 'Bayar sekarang';
  }

  document.getElementById('orderLineList').innerHTML = `
    <div class="order-line">
      <div class="thumb" style="background-image:${bgUrl(w)}"></div>
      <div class="info">
        <b>${w.nama}</b>
        <span>${pendingOrder.qty} tiket × ${formatRupiah(w.harga)}</span>
      </div>
      <div class="amt">${formatRupiah(pendingOrder.subtotal)}</div>
    </div>`;

  document.getElementById('notaItems').innerHTML =
    `<div class="nota-row"><span>${w.nama} × ${pendingOrder.qty}</span><span>${formatRupiah(pendingOrder.subtotal)}</span></div>`;
  document.getElementById('notaFee').textContent = formatRupiah(ADMIN_FEE);
  document.getElementById('notaTotal').textContent = formatRupiah(total);
  document.getElementById('notaDate').textContent = new Date().toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'});
}

async function handleBayar(){
  if(!pendingOrder) return;
  const nama = document.getElementById('inpNama').value.trim();
  const hp = document.getElementById('inpHp').value.trim();
  const errEl = document.getElementById('payError');
  if(!nama || !hp){ errEl.textContent = 'Nama dan nomor HP wajib diisi.'; errEl.style.display='block'; return; }

  const total = pendingOrder.subtotal + ADMIN_FEE;
  if(saldo < total){
    errEl.textContent = 'Saldo kamu tidak cukup. Isi ulang dulu ya.';
    errEl.style.display='block'; return;
  }
  errEl.style.display='none';

  const btn = document.getElementById('btnBayar');
  btn.disabled = true;
  btn.innerHTML = '<span class="spin"></span> Memproses...';
  await new Promise(r=>setTimeout(r,900));

  const id = 'SBL' + Date.now().toString().slice(-8);
  const w = pendingOrder.wahana;
  const items = [{
    wahanaId: w.id, nama: w.nama, harga: w.harga,
    qty: pendingOrder.qty, subtotal: pendingOrder.subtotal
  }];

  currentOrder = {
    id, nama, hp,
    metode: 'Saldo Samudra',
    items, adminFee: ADMIN_FEE, total,
    waktu: new Date().toISOString()
  };

  const oldSaldo = saldo;
  const newSaldo = saldo - total;
  await animateSaldo(oldSaldo, newSaldo, 700);

  await saveOrder(currentOrder);

  pendingOrder = null;
  btn.disabled = false;
  btn.textContent = 'Bayar sekarang';
  renderTicketPage();
  showToast('Tiket berhasil diterbitkan');
  goToPage('tiket');
}

/* ================= TOP UP ================= */
function openTopup(returnTo){
  topupReturnTo = returnTo || 'home';
  topupAmount = 0;
  document.getElementById('topupCustom').value = '';
  goToPage('topup');
}
function renderTopupPage(){
  document.getElementById('topupCurrentSaldo').textContent = formatRupiah(saldo);
  document.getElementById('topupOld').textContent = formatRupiah(saldo);
  renderTopupPresets();
  renderTopupMethods();
  updateTopupSummary();
  document.getElementById('topupError').style.display = 'none';
}
function renderTopupPresets(){
  const box = document.getElementById('topupPresets');
  box.innerHTML = TOPUP_PRESETS.map(amt=>`
    <button class="topup-preset ${topupAmount===amt?'active':''}" onclick="pickTopupPreset(${amt})">
      ${formatRupiah(amt).replace('Rp ','')}
    </button>
  `).join('');
}
function pickTopupPreset(amt){
  topupAmount = amt;
  document.getElementById('topupCustom').value = amt.toLocaleString('id-ID');
  renderTopupPresets();
  updateTopupSummary();
}
function onTopupInput(){
  const el = document.getElementById('topupCustom');
  const raw = parseDigits(el.value);
  if(raw){ el.value = raw.toLocaleString('id-ID'); }
  else { el.value = ''; }
  topupAmount = raw;
  renderTopupPresets();
  updateTopupSummary();
}
function renderTopupMethods(){
  const box = document.getElementById('topupMethods');
  box.innerHTML = TOPUP_METHODS.map(m=>`
    <button class="topup-method ${topupMethod===m.id?'selected':''}" onclick="pickTopupMethod('${m.id}')">
      <div class="tmi">${icon(m.ic,18,1.8)}</div>
      <div class="tmb">
        <b>${m.label}</b>
        <span>${m.desc}</span>
      </div>
    </button>
  `).join('');
  const m = TOPUP_METHODS.find(x=>x.id===topupMethod);
  document.getElementById('topupMethodLabel').innerHTML =
    (m ? icon(m.ic,14,2) + ' ' + m.label : '—');
}
function pickTopupMethod(id){
  topupMethod = id;
  renderTopupMethods();
}
function updateTopupSummary(){
  const add = topupAmount || 0;
  document.getElementById('topupAdd').textContent = formatRupiah(add);
  document.getElementById('topupNew').textContent = formatRupiah(saldo + add);
}

async function handleTopup(){
  if(topupBusy) return;
  const errEl = document.getElementById('topupError');
  if(!topupAmount || topupAmount < TOPUP_MIN){
    errEl.textContent = 'Minimum isi ulang ' + formatRupiah(TOPUP_MIN) + '.';
    errEl.style.display='block';
    return;
  }
  if(!topupMethod){
    errEl.textContent = 'Pilih metode pembayaran dulu ya.';
    errEl.style.display='block';
    return;
  }
  errEl.style.display='none';

  topupBusy = true;
  const btn = document.getElementById('btnTopup');
  const methodLabel = (TOPUP_METHODS.find(m=>m.id===topupMethod) || {}).label || 'pembayaran';
  btn.disabled = true;
  btn.innerHTML = '<span class="spin"></span> Memproses ' + methodLabel + '...';

  /* 1) Bayar dulu lewat metode yang dipilih */
  await new Promise(r=>setTimeout(r,1000));

  /* 2) Baru isi saldo dengan animasi */
  btn.innerHTML = '<span class="spin"></span> Mengisi saldo...';
  await new Promise(r=>setTimeout(r,250));

  const oldSaldo = saldo;
  const newSaldo = saldo + topupAmount;
  await animateSaldo(oldSaldo, newSaldo, 1400);

  /* 3) Feedback sukses */
  btn.innerHTML = '✓ Pembayaran berhasil';
  btn.classList.remove('btn-primary');
  btn.classList.add('btn-success');
  await new Promise(r=>setTimeout(r,550));

  /* reset tombol */
  btn.classList.add('btn-primary');
  btn.classList.remove('btn-success');
  btn.innerHTML = 'Bayar &amp; Isi Ulang';
  btn.disabled = false;
  topupBusy = false;

  /* reset form */
  topupAmount = 0;
  document.getElementById('topupCustom').value = '';

  showToast('Pembayaran ' + methodLabel + ' berhasil · Saldo +' + formatRupiah(newSaldo - oldSaldo));

  const dest = topupReturnTo || 'home';
  goToPage(dest);
}

/* ================= SALDO ANIMATION ================= */
function animateSaldo(from, to, duration){
  return new Promise(resolve=>{
    const startTime = performance.now();
    const chip = document.getElementById('saldoChip');
    const topupEl = document.getElementById('topupCurrentSaldo');
    function tick(now){
      const t = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = from + (to - from) * eased;
      saldo = val;
      chip.innerHTML = icon('wallet',16,2) + '<span><small>Saldo</small>' + formatRupiah(val) + '</span>';
      if(topupEl) topupEl.textContent = formatRupiah(val);
      if(t < 1){ requestAnimationFrame(tick); }
      else {
        saldo = to;
        renderSaldo();
        if(topupEl) topupEl.textContent = formatRupiah(to);
        pulseSaldoChip();
        resolve();
      }
    }
    requestAnimationFrame(tick);
  });
}

/* ================= TOAST ================= */
let toastTimer = null;
function showToast(msg){
  const el = document.getElementById('toast');
  document.getElementById('toastText').textContent = msg;
  document.getElementById('toastIcon').innerHTML = icon('check',13,2.5);
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>el.classList.remove('show'), 2600);
}

/* ================= STORAGE ================= */
async function saveOrder(order){
  try{
    await window.storage.set('order:'+order.id, JSON.stringify(order), true);
    let idx = [];
    try{
      const r = await window.storage.get('orders-index', true);
      idx = r ? JSON.parse(r.value) : [];
    }catch(e){ idx = []; }
    idx.push(order.id);
    await window.storage.set('orders-index', JSON.stringify(idx), true);
  }catch(e){ console.error('Gagal menyimpan pesanan', e); }
}
async function loadAllOrders(){
  try{
    const r = await window.storage.get('orders-index', true);
    const idx = r ? JSON.parse(r.value) : [];
    const orders = [];
    for(const id of idx){
      try{
        const o = await window.storage.get('order:'+id, true);
        if(o) orders.push(JSON.parse(o.value));
      }catch(e){}
    }
    return orders;
  }catch(e){ return []; }
}

/* ================= TICKET ================= */
function switchTicketTab(tab){
  document.getElementById('tabTiketBtn').classList.toggle('active', tab==='tiket');
  document.getElementById('tabNotaBtn').classList.toggle('active', tab==='nota');
  document.getElementById('ticketList').classList.toggle('hidden', tab!=='tiket');
  document.getElementById('notaFinal').classList.toggle('hidden', tab!=='nota');
}
function renderTicketPage(){
  if(!currentOrder) return;
  const el = document.getElementById('ticketList');
  el.innerHTML = currentOrder.items.map((it,i)=>{
    const w = WAHANA.find(x=>x.id===it.wahanaId);
    const code = currentOrder.id + '-' + it.wahanaId.toUpperCase() + '-' + String(i+1).padStart(2,'0');
    const qrUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&margin=0&data=' + encodeURIComponent(code);
    return `
    <div class="ticket-card">
      <div class="ticket-main">
        <div class="ticket-eyebrow">Tiket wahana · Samudra Land</div>
        <h3>${w.nama}</h3>
        <div class="ticket-sub">Berlaku untuk ${it.qty} orang · ${new Date(currentOrder.waktu).toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'})}</div>
        <div class="ticket-grid">
          <div><span>Pemesan</span><b>${currentOrder.nama}</b></div>
          <div><span>Jumlah tiket</span><b>${it.qty} tiket</b></div>
          <div><span>Harga</span><b>${formatRupiah(it.subtotal)}</b></div>
        </div>
        <div class="ticket-code">${code}</div>
      </div>
      <div class="ticket-stub">
        <div class="qr-box"><img src="${qrUrl}" alt="QR tiket ${code}"></div>
        <small>Tunjukkan QR ini di pintu masuk</small>
      </div>
    </div>`;
  }).join('');

  document.getElementById('notaFinal').innerHTML = `
    <div class="nota-head">
      <div><h4>Nota Pembayaran</h4><span>${currentOrder.id}</span></div>
      <span>${new Date(currentOrder.waktu).toLocaleString('id-ID')}</span>
    </div>
    ${currentOrder.items.map(it=>`<div class="nota-row"><span>${it.nama} × ${it.qty}</span><span>${formatRupiah(it.subtotal)}</span></div>`).join('')}
    <div class="nota-row sub"><span>Biaya admin</span><span>${formatRupiah(currentOrder.adminFee)}</span></div>
    <div class="nota-row sub"><span>Metode pembayaran</span><span>${currentOrder.metode}</span></div>
    <div class="nota-total"><span>Total dibayar</span><span>${formatRupiah(currentOrder.total)}</span></div>
  `;
  switchTicketTab('tiket');
}
function resetOrderFlow(){
  currentOrder = null;
  goToPage('home');
}

/* ================= ADMIN (hidden) ================= */
let secretCount = 0, secretTimer = null;
function secretClick(){
  secretCount++;
  clearTimeout(secretTimer);
  secretTimer = setTimeout(()=>{ secretCount = 0; }, 1800);
  if(secretCount>=5){
    secretCount = 0;
    openAdmin();
  }
}
async function openAdmin(){
  document.getElementById('adminOverlay').classList.add('show');
  const orders = await loadAllOrders();
  renderAdminDashboard(orders);
}
function closeAdmin(){ document.getElementById('adminOverlay').classList.remove('show'); }

function renderAdminDashboard(orders){
  const totalTiket = orders.reduce((s,o)=>s + o.items.reduce((a,it)=>a+it.qty,0), 0);
  const totalRevenue = orders.reduce((s,o)=>s+o.total,0);
  const perWahana = {};
  WAHANA.forEach(w=>perWahana[w.id] = {nama:w.nama, qty:0, revenue:0});
  orders.forEach(o=>o.items.forEach(it=>{
    if(!perWahana[it.wahanaId]) perWahana[it.wahanaId] = {nama:it.nama, qty:0, revenue:0};
    perWahana[it.wahanaId].qty += it.qty;
    perWahana[it.wahanaId].revenue += it.subtotal;
  }));
  const ranking = Object.values(perWahana).sort((a,b)=>b.qty-a.qty);
  const maxQty = Math.max(1, ...ranking.map(r=>r.qty));

  document.getElementById('adminStats').innerHTML = `
    <div class="stat-box"><span>Total transaksi</span><b>${orders.length}</b></div>
    <div class="stat-box"><span>Total tiket terjual</span><b>${totalTiket}</b></div>
    <div class="stat-box"><span>Total pendapatan</span><b>${formatRupiah(totalRevenue)}</b></div>
    <div class="stat-box"><span>Wahana terlaris</span><b>${ranking[0] && ranking[0].qty>0 ? ranking[0].nama : '—'}</b></div>
  `;
  document.getElementById('adminBars').innerHTML = ranking.map(r=>`
    <div class="bar-row">
      <div class="lbl">${r.nama}</div>
      <div class="bar-track"><div class="bar-fill" style="width:${(r.qty/maxQty*100)}%"></div></div>
      <div class="val">${r.qty} tiket</div>
    </div>
  `).join('');
  document.getElementById('adminOrdersTable').innerHTML = orders.length ? orders.slice().reverse().map(o=>`
    <tr><td>${o.id}</td><td>${o.nama}</td><td>${formatRupiah(o.total)}</td></tr>
  `).join('') : `<tr><td colspan="3" style="color:var(--ink-soft);">Belum ada transaksi.</td></tr>`;
}

/* ================= AI CS ================= */
const SYSTEM_PROMPT = `Kamu adalah "Kak Sam", customer service AI untuk taman wahana "Samudra Land" di Pantai Kertajaya, Surabaya, buka setiap hari 08.00-18.00.
Daftar wahana & harga (per tiket):
${WAHANA.map(w=>`- ${w.nama} (${w.kategori}): ${formatRupiah(w.harga)}, durasi ${w.durasi}, syarat tinggi ${w.tinggi}. ${w.desc}`).join('\n')}
Biaya admin tiket: Rp 5.000. Tiket hanya bisa dibayar pakai Saldo Samudra. Kalau saldo kurang, pengunjung klik tombol "Isi Ulang" di kanan atas. Di halaman isi ulang, nominal minimal Rp 10.000 dan bisa dibayar via QRIS, Transfer Bank, E-Wallet (GoPay/OVO/Dana/ShopeePay), atau Kartu Debit/Kredit. Setelah pembayaran berhasil, saldo otomatis bertambah.
Cara pesan tiket: klik kartu wahana di beranda, atur jumlah tiket, tekan "Lanjut ke pembayaran", isi nama & nomor HP, lalu bayar. Tiket dengan QR langsung terbit.
Jawab singkat, ramah, dalam Bahasa Indonesia. Situs ini tidak memakai sistem login/akun dan tidak meminta email. Jika ditanya di luar topik taman wahana, arahkan kembali dengan sopan.`;

function toggleChat(forceOpen){
  const panel = document.getElementById('chatPanel');
  const willOpen = forceOpen===true ? true : !panel.classList.contains('open');
  panel.classList.toggle('open', willOpen);
  if(willOpen && chatHistory.length===0){
    addChatBubble('assistant', 'Halo, aku Kak Sam. Ada yang bisa dibantu soal wahana, harga tiket, atau cara pemesanan di Samudra Land?');
  }
}
function addChatBubble(role, text){
  const body = document.getElementById('chatBody');
  const div = document.createElement('div');
  div.className = 'msg ' + role;
  div.textContent = text;
  body.appendChild(div);
  body.scrollTop = body.scrollHeight;
  return div;
}
async function sendChat(){
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if(!text) return;
  input.value = '';
  addChatBubble('user', text);
  chatHistory.push({role:'user', content:text});
  const typingEl = addChatBubble('assistant', 'Kak Sam sedang mengetik...');

  try{
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        model:'claude-sonnet-4-6',
        max_tokens:1000,
        system: SYSTEM_PROMPT,
        messages: chatHistory
      })
    });
    const data = await res.json();
    const reply = (data.content||[]).filter(b=>b.type==='text').map(b=>b.text).join('\n') || 'Maaf, aku belum bisa menjawab itu sekarang.';
    typingEl.textContent = reply;
    chatHistory.push({role:'assistant', content:reply});
  }catch(e){
    typingEl.textContent = 'Maaf, layanan CS AI sedang gangguan. Coba lagi sebentar ya, atau hubungi petugas di lokasi.';
  }
  document.getElementById('chatBody').scrollTop = document.getElementById('chatBody').scrollHeight;
}

/* ================= INIT ================= */
function init(){
  document.getElementById('brandIcon').innerHTML = icon('wave',16,2);
  document.getElementById('icSearch').innerHTML = icon('search',18,1.8);
  document.getElementById('icSearchBtn').innerHTML = icon('search',15,2);
  document.getElementById('icBack').innerHTML = icon('back',15,2);
  document.getElementById('icBackTopup').innerHTML = icon('back',15,2);
  document.getElementById('icModalClose').innerHTML = icon('close',18,1.8);
  document.getElementById('icInfoPin').innerHTML = icon('mappin',17,1.8);
  document.getElementById('icInfoClock').innerHTML = icon('clock',17,1.8);
  document.getElementById('icInfoHeadset').innerHTML = icon('headset',17,1.8);
  document.getElementById('chatBubble').innerHTML = icon('chat',21,1.8);
  document.getElementById('chatSendBtn').innerHTML = icon('send',15,1.8);
  document.getElementById('icStar').innerHTML = icon('star',18,0);
  document.getElementById('icSwipe').innerHTML = icon('swipe',14,2);
  document.getElementById('icPlusNav').innerHTML = icon('plus',14,2.4);
  document.getElementById('icPayWallet').innerHTML = icon('wallet',20,1.8);
  document.getElementById('icTopupWallet').innerHTML = icon('plus',22,2.4);

  document.getElementById('heroBg').style.backgroundImage =
    "url('https://picsum.photos/seed/samudra-hero/1600/900')";

  renderSaldo();
  renderFavoritGrid();
  renderCatBar();
  renderWahanaGrid();

  document.addEventListener('click', function(e){
    const wrap = document.querySelector('.search-wrap');
    if(wrap && !wrap.contains(e.target)) hideSuggestions();
  });
}
init();
