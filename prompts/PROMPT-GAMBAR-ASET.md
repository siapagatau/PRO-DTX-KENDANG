# Prompt Gambar Aset – PRO DTX PAD

## Cara pakai
1. Generate **Aset 00 (Background Utama)** dulu. (Kamu sudah punya: `816713.png`, langit biru + padang rumput. Pakai itu sebagai referensi.)
2. Untuk semua aset lain: upload gambar background utama sebagai **gambar referensi** di pesan yang sama, lalu tempel prompt-nya.
3. Simpan hasil ke folder `assets/...` sesuai nama file, lalu daftarkan di file JSON bila perlu.
4. Tidak ada teks di dalam gambar. Semua teks ditulis lewat HTML.

---

## STYLE GUIDE VISUAL (dipakai ulang di SEMUA prompt)

**Tempel blok ini di awal setiap prompt:**

> STYLE: bright sunny Indonesian countryside poster mood, vivid saturated sky blue (#1e9bff) gradient, soft white cumulus clouds, lush fresh green meadow (#46c239) with tiny white daisies, warm golden sunlight flare from the top-left corner. Contrast accents in warm glowing orange (#ff8a1f) and amber (#ffc233). Dark charcoal (#121316 / #1d1e22) for electronic pad surfaces. Clean semi-realistic digital illustration with polished 3D-render feel, soft depth of field, crisp edges, subtle film grain. Energetic, cheerful, dramatic poster composition. Modern digital meets traditional Nusantara percussion.

| Elemen | Nilai |
|---|---|
| Palet | langit #1e9bff, navy #0a3a6b, rumput #46c239, oranye #ff8a1f, amber #ffc233, charcoal #121316 |
| Cahaya | matahari hangat dari kiri atas, lens flare lembut, rim light oranye pada benda gelap |
| Suasana | ceria, megah, penuh energi, seperti poster konser siang hari |
| Gaya | semi-realistis, render 3D halus, tepi tajam, depth of field lembut |
| Tekstur | rumput detail, awan lembut, permukaan pad karet gelap matte |

**Negative prompt standar (tempel di setiap prompt):**
> text, letters, words, watermark, signature, logo, brand names, fake UI, random symbols, distorted hands, extra fingers, deformed drums, blurry, low resolution, oversaturated neon, cluttered composition, people faces

---

## ASET 00 — Background Utama
- **Fungsi:** latar tetap seluruh halaman, referensi untuk aset lain
- **File:** `assets/backgrounds/bg-main.jpg`
- **Rasio:** 16:9 (min 1920×1080)

```
[STYLE GUIDE]
A wide landscape background: big vivid blue sky filling the upper two thirds with scattered fluffy white clouds, golden sun flare in the top-left corner, rolling green meadow hills in the lower third with fresh grass blades blurred in the foreground and tiny white daisies. Calm empty center area so text can be placed over it. No objects, no people, no buildings.
Negative: [NEGATIVE STANDAR]
```
*Keterangan:* bagian tengah dibiarkan lega untuk judul HTML.

## ASET 01 — Hero Poster Mockup
- **Fungsi:** visual utama hero (HP/pad), alternatif untuk screenshot
- **File:** `assets/ui/hero-art.png` | **Rasio:** 4:5 (1600×2000)

```
Use the main background reference image so colors, style and mood stay consistent.
[STYLE GUIDE]
A heroic product poster scene: a landscape-oriented smartphone floating in front of the sunny meadow, its screen showing a dark electronic drum pad grid with 6 rubber pads and orange glowing edges (no readable text on screen). Around it, a traditional Indonesian kendang drum on each side, warm wood and leather texture, slightly tilted with dynamic motion. Orange and amber shockwave rings and sound ripples radiating outward to suggest a loud "GLER" hit. Phone and drums lit with warm rim light. Plenty of empty sky space at the top.
Negative: [NEGATIVE STANDAR], real phone brand logos
```
*Keterangan:* dipakai kalau mau mengganti screenshot di hero dengan ilustrasi.

## ASET 02 — Background Seksi Fitur (Panggung Gelap)
- **File:** `assets/backgrounds/bg-fitur.jpg` | **Rasio:** 16:9

```
Use the main background reference image so colors, style and mood stay consistent.
[STYLE GUIDE]
Dark concert stage atmosphere in charcoal (#121316) with subtle warm orange spotlight cones from above, faint floating dust particles, soft vignette, a faint grass-green rim glow at the very bottom edge as a nod to the meadow. Large empty dark center for cards. No objects.
Negative: [NEGATIVE STANDAR]
```
*Keterangan:* gelap dan tenang supaya kartu fitur terbaca.

## ASET 03 — Background Galeri
- **File:** `assets/backgrounds/bg-galeri.jpg` | **Rasio:** 16:9

```
Use the main background reference image so colors, style and mood stay consistent.
[STYLE GUIDE]
Same sunny sky and meadow, but a lower camera angle with the horizon in the lower third, more white clouds drifting across, a gentle bokeh of sunlight. Very open and calm so screenshots can float on top.
Negative: [NEGATIVE STANDAR]
```

## ASET 04 — Background Demo Suara
- **File:** `assets/backgrounds/bg-demo.jpg` | **Rasio:** 16:9

```
Use the main background reference image so colors, style and mood stay consistent.
[STYLE GUIDE]
Dark studio backdrop in charcoal with faint orange equalizer-like light streaks and soft concentric sound-wave rings glowing amber on the floor, shallow depth of field, moody but warm. Empty center.
Negative: [NEGATIVE STANDAR]
```

## ASET 05 — Background Harga
- **File:** `assets/backgrounds/bg-harga.jpg` | **Rasio:** 16:9

```
Use the main background reference image so colors, style and mood stay consistent.
[STYLE GUIDE]
Dark charcoal background with a warm golden radial glow in the center like a spotlight on a stage, scattered tiny amber sparkles and soft confetti-like light dots, premium and celebratory feel. Empty center.
Negative: [NEGATIVE STANDAR]
```

## ASET 06 — Background FAQ
- **File:** `assets/backgrounds/bg-faq.jpg` | **Rasio:** 16:9

```
Use the main background reference image so colors, style and mood stay consistent.
[STYLE GUIDE]
Soft bright version of the sky and clouds only (no meadow), airy and clean with gentle white clouds and light blue gradient, very low contrast so white question cards stand out.
Negative: [NEGATIVE STANDAR]
```

## ASET 07 — Background Footer
- **File:** `assets/backgrounds/bg-footer.jpg` | **Rasio:** 21:9 (2400×1000)

```
Use the main background reference image so colors, style and mood stay consistent.
[STYLE GUIDE]
Dusk version of the meadow: deep navy (#0a3a6b) twilight sky fading into charcoal, a thin warm orange horizon glow, silhouette of rolling hills with tiny fireflies. Dark and quiet, lots of empty space.
Negative: [NEGATIVE STANDAR]
```

## ASET 08 — Banner Open Graph (share WhatsApp / sosmed)
- **File:** `assets/og/og-image.jpg` | **Rasio:** 1200×630 (1.91:1)

```
Use the main background reference image so colors, style and mood stay consistent.
[STYLE GUIDE]
Wide banner: sunny sky and meadow, on the right two dark electronic drum pads floating at an angle with orange glowing edges and sound ripples, left half left empty for a title added later. Energetic poster feel.
Negative: [NEGATIVE STANDAR]
```
*Keterangan:* judul "PRO DTX PAD" ditambahkan sendiri (Canva) setelah gambar jadi.

## ASET 09 — Efek GLER (overlay)
- **Fungsi:** efek getar/ledakan di belakang judul atau tombol
- **File:** `assets/ui/gler-burst.png` | **Rasio:** 1:1 (1024×1024), latar transparan atau hitam

```
Use the main background reference image so colors, style and mood stay consistent.
[STYLE GUIDE]
A radial burst of orange and amber energy: concentric sound shockwave rings, jagged comic-style impact rays, glowing sparks, centered, on a plain pure black background for easy removal. No text.
Negative: [NEGATIVE STANDAR]
```

## ASET 10 — Set Ikon Fitur
- **Fungsi:** pengganti ikon SVG bila ingin gaya ilustrasi
- **File:** `assets/ui/icon-*.png` | **Rasio:** 1:1 (512×512 per ikon)

```
Use the main background reference image so colors, style and mood stay consistent.
[STYLE GUIDE]
A single glossy 3D app-style icon, rounded square dark charcoal tile with glowing orange and amber symbol: (A) 2x2 drum pad grid, (B) stacked preset layers, (C) lightning bolt for GLER, (D) record button, (E) music note, (F) half-filled color circle. Centered, soft shadow, plain light blue background. Generate each one separately in the same style.
Negative: [NEGATIVE STANDAR]
```

## ASET 11 — Tekstur Kulit Kendang
- **Fungsi:** dekorasi pembatas seksi atau kartu
- **File:** `assets/ui/tekstur-kulit.jpg` | **Rasio:** 1:1, seamless

```
Use the main background reference image so colors, style and mood stay consistent.
[STYLE GUIDE]
Seamless close-up texture of traditional drum leather skin in warm cream and amber with subtle fiber grain and soft rope-lacing edge detail, even lighting, flat top-down view.
Negative: [NEGATIVE STANDAR]
```

## ASET 12 — Ikon Aplikasi / Favicon
- **File:** `assets/ui/app-icon.png` | **Rasio:** 1:1 (512×512)

```
Use the main background reference image so colors, style and mood stay consistent.
[STYLE GUIDE]
App icon: a bold stylized kendang drum viewed from the front on a dark charcoal rounded square, orange sound ripple ring around it, blue-sky gradient glow behind. Simple, readable at small size. No text.
Negative: [NEGATIVE STANDAR]
```

---

### Cara memakai hasilnya
Ubah path di `data/site.json` (`assets.background`) atau pakai sebagai `background-image` di `style.css`. Ganti file dengan nama yang sama untuk memperbarui tampilan tanpa mengubah kode.
