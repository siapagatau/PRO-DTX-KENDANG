/* ==========================================================
   PRO DTX PAD – script.js
   Konten dimuat dari file JSON di folder /data (repo GitHub).
   Kalau fetch gagal, dipakai FALLBACK bawaan di bawah ini.
   ========================================================== */

// Kosongkan untuk memakai folder yang sama dengan website (GitHub Pages / Vercel).
// Atau isi dengan URL raw GitHub agar konten bisa diubah tanpa deploy ulang, contoh:
// 'https://raw.githubusercontent.com/USERNAME/REPO/main/'
const DATA_BASE = '';
const FETCH_TIMEOUT_MS = 6000;

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.dtxpads.kendang.premium';

/* ---------- FALLBACK (cermin dari file di /data) ---------- */
const FALLBACK = {
  site: {
    playStoreUrl: PLAY_URL,
    hero: { stats: [{ value: '2', label: 'Tema pad' }, { value: 'GLER', label: 'Efek khas' }, { value: 'REC', label: 'Rekam langsung' }] },
    sections: {
      features: { eyebrow: 'Fitur Unggulan', title: 'Satu aplikasi, satu panggung', sub: 'Semua yang kamu butuhkan buat main kendang digital, tanpa ribet.' },
      gallery: { eyebrow: 'Tampilan Aplikasi', title: 'Lihat langsung isinya', sub: 'Dua tampilan pad dengan nuansa perangkat drum elektrik sungguhan.' },
      demo: { eyebrow: 'Coba Dulu', title: 'Tap pad, rasakan getarnya', sub: 'Ini simulasi singkat di browser. Suara asli kendang di aplikasi jauh lebih kaya.' },
      why: { eyebrow: 'Kenapa PRO DTX PAD', title: 'Dibuat buat yang serius main', sub: 'Dibuat supaya nyaman dipakai latihan sampai tampil.' },
      pricing: { eyebrow: 'Harga & Cara Beli', title: 'Sekali beli, langsung main', sub: 'Pembayaran lewat Google Play, aman dan resmi.' },
      faq: { eyebrow: 'FAQ', title: 'Pertanyaan yang sering muncul', sub: '' }
    },
    footer: {
      about: 'PRO DTX PAD adalah aplikasi pad kendang elektrik untuk Android. Dibuat untuk pemusik, pelajar, dan siapa pun yang suka menabuh.',
      contactLabel: 'Hubungi via WhatsApp', contactUrl: 'https://wa.me/6288216335309',
      links: [{ label: 'Play Store', url: PLAY_URL }, { label: 'WhatsApp', url: 'https://wa.me/6288216335309' }],
      credit: 'Dibuat oleh REL', year: '2026'
    },
    theme: {}
  },
  features: [
    { icon: 'pad', title: 'Pad Kendang Responsif', text: 'Pad besar yang peka sentuhan, dengan layout ala drum pad elektrik.' },
    { icon: 'preset', title: 'Preset P1, P2, dan Seterusnya', text: 'Simpan susunan pad favoritmu ke banyak preset, lalu ganti dalam satu tap.' },
    { icon: 'gler', title: 'Efek GLER', text: 'Tambahkan efek GLER khas untuk aksen dramatis di tengah permainan.' },
    { icon: 'rec', title: 'Rekam Permainan', text: 'Rekam tabuhanmu, putar ulang, dan dengarkan lagi.' },
    { icon: 'music', title: 'Putar Musik Pengiring', text: 'Mainkan kendang sambil memutar musik, volume pad dan musik terpisah.' },
    { icon: 'theme', title: 'Dua Tampilan Pad', text: 'Pilih gaya pad yang kamu suka.' }
  ],
  gallery: [
    { src: 'assets/screenshots/pad-dtx.png', alt: 'Tampilan pad gaya DTX', caption: 'Tampilan DTX' },
    { src: 'assets/screenshots/pad-dme.png', alt: 'Tampilan pad gaya DME', caption: 'Tampilan DME' },
    { src: 'assets/ui/poster.jpg', alt: 'Poster PRO DTX PAD', caption: 'Poster resmi' }
  ],
  why: [
    { number: '01', title: 'Ringan di HP', text: 'Dirancang supaya tetap lancar di banyak perangkat Android.' },
    { number: '02', title: 'Tampilan fokus', text: 'Antarmuka dibuat lega supaya perhatianmu tetap di permainan.' },
    { number: '03', title: 'Sekali beli', text: 'Bayar satu kali lewat Google Play, tanpa langganan bulanan.' },
    { number: '04', title: 'Cocok buat panggung', text: 'Preset dan efek siap pakai untuk latihan sampai tampil.' }
  ],
  pricing: {
    badge: 'Resmi di Google Play', priceText: 'Cek harga di Play Store',
    priceNote: 'Harga bisa berbeda tiap negara dan bisa berubah. Harga terbaru tertera di Play Store.',
    benefits: ['Semua fitur pad, preset, GLER, dan rekaman', 'Dua tampilan pad', 'Pembayaran aman lewat Google Play', 'Pembaruan lewat Play Store'],
    steps: ['Klik tombol Beli di Play Store', 'Selesaikan pembayaran di Google Play', 'Buka aplikasi dan mulai menabuh'],
    buyLabel: 'Beli di Play Store'
  },
  faq: [
    { q: 'Aplikasinya untuk HP apa saja?', a: 'Untuk perangkat Android. Cek kecocokan perangkat di halaman Play Store.' },
    { q: 'Bayarnya berapa kali?', a: 'Sekali beli lewat Google Play, tanpa langganan.' },
    { q: 'Bisa merekam permainan?', a: 'Bisa. Ada fitur rekaman untuk mendengarkan ulang permainanmu.' }
  ]
};

/* ---------- Util ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (v = '') => String(v).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const safeUrl = u => /^(https?:|\.?\/?[\w\-./%]+$|mailto:|tel:)/i.test(u || '') ? u : '#';
const get = (o, path) => path.split('.').reduce((a, k) => (a == null ? a : a[k]), o);

async function loadJSON(name) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(`${DATA_BASE}data/${name}.json`, { signal: ctrl.signal, cache: 'no-cache' });
    if (!res.ok) throw new Error(res.status);
    return await res.json();
  } catch (e) {
    console.warn(`[data] ${name}.json gagal dimuat, pakai fallback`, e);
    return null;
  } finally { clearTimeout(t); }
}

/* ---------- Ikon (SVG inline) ---------- */
const ICONS = {
  pad: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5"/></svg>',
  preset: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"><path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/></svg>',
  gler: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L4 14h6l-1 8 9-12h-6z"/></svg>',
  rec: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4" fill="currentColor"/></svg>',
  music: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/></svg>',
  theme: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 3v18" /><path d="M12 3a9 9 0 010 18z" fill="currentColor"/></svg>'
};

/* ---------- Render ---------- */
function applyText(site) {
  $$('[data-k]').forEach(el => {
    const v = get(site, el.dataset.k);
    if (typeof v === 'string' && v) el.textContent = v;
  });
}

function sectionHead(el, conf = {}) {
  el.innerHTML = `${conf.eyebrow ? `<p class="eyebrow">${esc(conf.eyebrow)}</p>` : ''}<h2>${esc(conf.title)}</h2>${conf.sub ? `<p>${esc(conf.sub)}</p>` : ''}`;
}

function render(d) {
  const s = d.site;
  const buy = safeUrl(s.playStoreUrl || PLAY_URL);

  // Tema
  const th = s.theme || {};
  const map = { sky: '--sky', skyDeep: '--sky-deep', ink: '--ink', pad: '--pad', accent: '--accent', accent2: '--accent2', grass: '--grass', paper: '--paper' };
  Object.entries(map).forEach(([k, v]) => th[k] && document.documentElement.style.setProperty(v, th[k]));
  if (s.assets && s.assets.background) $('.sky').style.backgroundImage = `url(${safeUrl(s.assets.background)})`;

  // SEO dinamis
  if (s.seo) {
    if (s.seo.title) document.title = s.seo.title;
    const md = $('meta[name="description"]'); if (md && s.seo.description) md.content = s.seo.description;
  }

  // Tombol beli
  $$('[data-buy]').forEach(a => { a.href = buy; a.target = '_blank'; a.rel = 'noopener'; });

  applyText(s);
  $$('[data-sec]').forEach(el => sectionHead(el, s.sections && s.sections[el.dataset.sec]));

  // Stat hero
  $('#heroStats').innerHTML = ((s.hero && s.hero.stats) || []).map(i => `<li><b>${esc(i.value)}</b><span>${esc(i.label)}</span></li>`).join('');

  // Fitur
  $('#featureGrid').innerHTML = d.features.map((f, i) => `
    <article class="card reveal" style="transition-delay:${i * 60}ms">
      <div class="ico">${ICONS[f.icon] || ICONS.pad}</div>
      <h3>${esc(f.title)}</h3><p>${esc(f.text)}</p>
    </article>`).join('');

  // Galeri
  $('#gallery').innerHTML = d.gallery.map(g => `
    <figure class="shot" data-src="${esc(safeUrl(g.src))}" data-cap="${esc(g.caption || '')}">
      <img src="${esc(safeUrl(g.src))}" alt="${esc(g.alt || '')}" loading="lazy" decoding="async">
      <figcaption>${esc(g.caption || '')}</figcaption>
    </figure>`).join('');

  // Kenapa
  $('#whyGrid').innerHTML = d.why.map((w, i) => `
    <article class="why-item reveal" style="transition-delay:${i * 60}ms">
      <div class="num">${esc(w.number)}</div><h3>${esc(w.title)}</h3><p>${esc(w.text)}</p>
    </article>`).join('');

  // Harga
  const p = d.pricing;
  $('#priceCard').innerHTML = `
    <div>
      <span class="badge">${esc(p.badge)}</span>
      <p class="price">${esc(p.priceText)}</p>
      <p class="price-note">${esc(p.priceNote)}</p>
      <ul class="ticks">${(p.benefits || []).map(b => `<li>${esc(b)}</li>`).join('')}</ul>
    </div>
    <div>
      <h3>Cara membeli</h3>
      <ol class="steps">${(p.steps || []).map(b => `<li>${esc(b)}</li>`).join('')}</ol>
      <a class="btn" href="${esc(buy)}" target="_blank" rel="noopener">${esc(p.buyLabel || 'Beli di Play Store')}</a>
    </div>`;

  // FAQ
  $('#faqList').innerHTML = d.faq.map(f => `<details class="reveal"><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join('');

  // Footer
  const ft = s.footer || {};
  $('#footLinks').innerHTML = (ft.links || []).map(l => `<li><a href="${esc(safeUrl(l.url))}" target="_blank" rel="noopener">${esc(l.label)}</a></li>`).join('');
  if (ft.contactUrl) $('#footContact').href = safeUrl(ft.contactUrl);
  if (ft.contactLabel) $('#footContact').textContent = ft.contactLabel;
  if (ft.credit) $('#footCredit').textContent = ft.credit;
  if (ft.year) $('#footYear').textContent = ft.year;

  initReveal();
  initGallery();
}

/* ---------- Reveal saat scroll ---------- */
function initReveal() {
  const els = $$('.reveal:not(.in)');
  if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
  els.forEach(e => io.observe(e));
}

/* ---------- Lightbox ---------- */
function initGallery() {
  const lb = $('#lightbox'); if (!lb || typeof lb.showModal !== 'function') return;
  $('#gallery').addEventListener('click', e => {
    const f = e.target.closest('.shot'); if (!f) return;
    $('img', lb).src = f.dataset.src; $('p', lb).textContent = f.dataset.cap;
    lb.showModal();
  });
  lb.addEventListener('click', e => { if (e.target === lb || e.target.closest('.lb-close')) lb.close(); });
}

/* ---------- Demo suara (sintesis WebAudio, tanpa file audio) ---------- */
const DEMO_PADS = [
  { key: '1', name: 'DUNG', type: 'dung' }, { key: '2', name: 'TAK', type: 'tak' }, { key: '3', name: 'TUNG', type: 'tung' },
  { key: '4', name: 'TING', type: 'ting' }, { key: '5', name: 'DANG', type: 'dang' }, { key: '6', name: 'GLER', type: 'gler' }
];
let ctx;
function audio() {
  if (!ctx) { const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return null; ctx = new AC(); }
  if (ctx.state === 'suspended') ctx.resume();
  return ctx;
}
function tone(c, { f0, f1, dur, type = 'sine', vol = .9 }) {
  const t = c.currentTime, o = c.createOscillator(), g = c.createGain();
  o.type = type; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f1, t + dur * .8);
  g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.001, t + dur);
  o.connect(g).connect(c.destination); o.start(t); o.stop(t + dur + .05);
}
function noise(c, { dur, f0, f1, q = 1, vol = .6, trem = 0 }) {
  const t = c.currentTime, n = Math.floor(c.sampleRate * dur), buf = c.createBuffer(1, n, c.sampleRate), ch = buf.getChannelData(0);
  for (let i = 0; i < n; i++) ch[i] = Math.random() * 2 - 1;
  const s = c.createBufferSource(); s.buffer = buf;
  const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = q;
  bp.frequency.setValueAtTime(f0, t); bp.frequency.exponentialRampToValueAtTime(f1, t + dur);
  const g = c.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.001, t + dur);
  if (trem) { const l = c.createOscillator(), lg = c.createGain(); l.frequency.value = trem; lg.gain.value = vol * .5; l.connect(lg).connect(g.gain); l.start(t); l.stop(t + dur); }
  s.connect(bp).connect(g).connect(c.destination); s.start(t);
}
function play(type) {
  const c = audio(); if (!c) return;
  if (type === 'dung') { tone(c, { f0: 170, f1: 70, dur: .45 }); }
  if (type === 'tak') { noise(c, { dur: .07, f0: 3000, f1: 1800, q: 2, vol: .7 }); tone(c, { f0: 900, f1: 500, dur: .08, vol: .3 }); }
  if (type === 'tung') { tone(c, { f0: 260, f1: 150, dur: .3, type: 'triangle' }); }
  if (type === 'ting') { tone(c, { f0: 520, f1: 360, dur: .2, type: 'triangle', vol: .7 }); noise(c, { dur: .04, f0: 4000, f1: 3000, vol: .25 }); }
  if (type === 'dang') { tone(c, { f0: 120, f1: 50, dur: .7 }); tone(c, { f0: 240, f1: 100, dur: .35, type: 'triangle', vol: .4 }); }
  if (type === 'gler') { noise(c, { dur: .8, f0: 5000, f1: 900, q: .8, vol: .6, trem: 28 }); tone(c, { f0: 140, f1: 60, dur: .6, vol: .5 }); }
}
function initDemo() {
  const box = $('#demoPads'); if (!box) return;
  box.innerHTML = DEMO_PADS.map(p => `<button class="dpad ${p.type === 'gler' ? 'gler' : ''}" data-type="${p.type}" data-key="${p.key}" type="button"><small>${p.key}</small>${p.name}</button>`).join('');
  const hit = btn => {
    play(btn.dataset.type);
    btn.classList.add('hit'); setTimeout(() => btn.classList.remove('hit'), 110);
    if (navigator.vibrate) navigator.vibrate(12);
    if (btn.dataset.type === 'gler' && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      box.classList.remove('shake'); void box.offsetWidth; box.classList.add('shake');
    }
  };
  box.addEventListener('pointerdown', e => { const b = e.target.closest('.dpad'); if (b) { e.preventDefault(); hit(b); } });
  addEventListener('keydown', e => {
    if (e.repeat || /input|textarea|select/i.test((e.target.tagName || ''))) return;
    const b = $(`.dpad[data-key="${e.key}"]`, box); if (b) hit(b);
  });
}

/* ---------- Mulai ---------- */
async function init() {
  const names = ['site', 'features', 'gallery', 'why', 'pricing', 'faq'];
  const loaded = await Promise.all(names.map(loadJSON));
  const data = {};
  names.forEach((n, i) => { data[n] = loaded[i] || FALLBACK[n]; });
  // gabung site dengan fallback agar field yang hilang tetap terisi
  data.site = { ...FALLBACK.site, ...data.site, sections: { ...FALLBACK.site.sections, ...(data.site.sections || {}) }, footer: { ...FALLBACK.site.footer, ...(data.site.footer || {}) } };
  render(data);
  initDemo();
}
init();
