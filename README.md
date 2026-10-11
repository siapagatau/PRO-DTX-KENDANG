# PRO DTX PAD – Landing Page

Website statis (HTML, CSS, JS murni). Semua konten dimuat dari file JSON di folder `data/`.

## Struktur folder
```
/
├─ index.html
├─ style.css
├─ script.js
├─ data/
│  ├─ site.json       # judul hero, teks seksi, CTA, footer, SEO, tema warna, link beli
│  ├─ features.json   # kartu fitur
│  ├─ gallery.json    # galeri screenshot
│  ├─ why.json        # keunggulan
│  ├─ pricing.json    # harga & cara beli
│  └─ faq.json        # FAQ
├─ assets/
│  ├─ backgrounds/    # bg-main.jpg dan background lain
│  ├─ ui/             # poster, ikon, efek
│  ├─ screenshots/    # screenshot aplikasi
│  └─ og/             # og-image.jpg (1200x630)
└─ prompts/
   └─ PROMPT-GAMBAR-ASET.md
```

## Upload ke GitHub
1. Buat repo baru di github.com, misal `kendang-web` (Public).
2. Klik **Add file → Upload files**, tarik SEMUA isi folder ini (index.html, style.css, script.js, folder data, assets, prompts), lalu **Commit changes**.

## Hosting gratis
**GitHub Pages:** Repo → Settings → Pages → Source: *Deploy from a branch* → Branch `main` / folder `/ (root)` → Save. Alamat: `https://USERNAME.github.io/kendang-web/`.

**Vercel:** vercel.com → Add New Project → pilih repo → Deploy (tanpa pengaturan tambahan).

Tes di komputer: jalankan `python3 -m http.server` di folder ini lalu buka `http://localhost:8000`.
(Kalau `index.html` dibuka langsung tanpa server, data bawaan/fallback otomatis dipakai.)

## Cara mengganti konten
Edit file JSON langsung di GitHub (ikon pensil → edit → Commit). Website otomatis ikut berubah, tanpa menyentuh kode.

| Mau ganti | File | Kunci |
|---|---|---|
| Link Play Store | `data/site.json` | `playStoreUrl` |
| Judul & tagline hero | `data/site.json` | `hero.*` |
| Warna tema | `data/site.json` | `theme.*` |
| Nomor WhatsApp & footer | `data/site.json` | `footer.*` |
| Tambah fitur | `data/features.json` | tambah objek `{icon,title,text}` (icon: pad, preset, gler, rec, music, theme) |
| Tambah screenshot | `data/gallery.json` | taruh gambar di `assets/screenshots/`, tambah `{src,alt,caption}` |
| Harga | `data/pricing.json` | `priceText`, `priceNote` |
| FAQ | `data/faq.json` | tambah `{q,a}` |

Tips: pastikan JSON valid (tanda kutip dan koma). Cek di jsonlint.com kalau halaman kembali ke tampilan bawaan.

## Mode "database GitHub" tanpa deploy ulang
Di `script.js`, isi `DATA_BASE` dengan:
`https://raw.githubusercontent.com/USERNAME/REPO/main/`
Website akan membaca JSON langsung dari repo.
