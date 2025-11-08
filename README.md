# Adeline Foundation Website

A bilingual (Indonesian/English) static website for Adeline Foundation, a Catholic non-profit focused on children's education and community health. The site uses plain HTML/CSS/JS with a lightweight client-side i18n system.

## Features
- Responsive, accessible static site (HTML/CSS/JS only)
- Bilingual content (ID/EN) with instant toggle
- Sections/pages:
  - Home, About (Our History), Programs, Gallery, Contact, Donate, Privacy
- Modern UI with Playfair Display + Lato, smooth interactions
- Simple content structure; easy to edit without frameworks

## Tech Stack
- HTML5 + CSS3 (no build step)
- Vanilla JavaScript (`staging/js/script.js`)
- Client-side translations (`staging/js/translations.js`)
- Assets in `staging/imgs/`

## Project Structure
```
/staging/                 ← live site in staging subfolder
  about.html
  contact.html
  donate.html
  gallery.html
  index.html
  privacy.html
  programs.html
  /css/styles.css
  /js/script.js
  /js/translations.js
  /imgs/*
/index.html              ← root maintenance page (temporary)
```

Note: The entire website was moved to `/staging/` and the root `/index.html` currently shows a maintenance message. When ready to go live at the root, move files from `/staging/` up one level, or adjust server routing.

## Running Locally
Because this is a static site, you can:
- Open `staging/index.html` directly in a browser, or
- Serve the folder via any static server, e.g. Python:

```bash
python3 -m http.server 8080
# then open http://localhost:8080/staging/
```

## Internationalization (i18n)
- Language toggle: header buttons (🇮🇩 default, 🇬🇧 English)
- Global API in JS: `window.AdelineFoundation`
  - `setLanguage('id' | 'en')`
  - `currentLang()`
- Translation keys are defined in `staging/js/translations.js` under `id` and `en` objects.
- To translate a DOM element, add `data-i18n="your.key"`. Example:

```html
<h2 data-i18n="programsPage.pageTitle">Program Kami</h2>
```

If an element has no `data-i18n`, it will not change when toggling languages. Custom paragraphs that must be translated should be bound to new keys in `translations.js`.

## Editing Content
- Page copy: edit the relevant `.html` files in `/staging/`
- Styles: `staging/css/styles.css`
- Scripts & i18n logic: `staging/js/script.js`
- Translations: `staging/js/translations.js`
- Images: `staging/imgs/`

### Common Edits
- Header language icons: in each page header (`lang-toggle`), the buttons are flags, default is 🇮🇩.
- Footer contact details (applied sitewide):
  - Address: `Jl. H. Agus Salim No.32B, Kebon Sirih, Menteng, Central Jakarta 10340`
  - Email: `info@adalinefoundation.org`
  - Phone: `(62) 021 5020-1021 | (62) 878 8002-0021 (WA)`
- About → Our History timeline years and items are editable in `staging/about.html` and their translations in `translations.js`.
- Programs page descriptions mirror the About summaries and are i18n-bound (`programsPage.*`).

## Videos (Embeds)
Responsive YouTube embeds use the `.video-embed` container (16:9, centered, max-width 800px). Add an iframe inside this container in the page content.

## Staging vs. Production
- Current working site: `/staging/`
- Root `/index.html` shows a maintenance message: “We are fixing the website, soon we will serve you”. Remove/replace when going live.

## Accessibility & SEO
- Semantic HTML, labeled buttons (`aria-label`) for language flags
- Add/update meta descriptions per page (`<meta name="description" ...>`)
- Use descriptive `alt` text for all images

## Deployment
This is a static site and can be hosted on any static server or CDN (e.g., Netlify, Vercel, GitHub Pages, S3/CloudFront). Typical steps:
1. Build step: none required.
2. Ensure your host serves `/staging/` (or move contents to root for production).
3. Set correct caching for `/css`, `/js`, and `/imgs`.

## Contributing / Maintenance
- Keep translations in sync for both `id` and `en` namespaces.
- When adding new content: create translation keys and bind with `data-i18n`.
- Maintain consistent footer/contact info across pages.
- For larger copy blocks, summarize into one paragraph on About (as implemented) and provide EN equivalents.

## Contact
- Website: adalinefoundation.org
- Email: info@adalinefoundation.org

Website multi-halaman bilingual (Indonesia/Inggris) untuk Yayasan Adeline Foundation - sebuah yayasan Katolik yang berfokus pada pendidikan anak-anak dan kesehatan masyarakat.

## Deskripsi

Website ini dirancang dengan tema Katolik yang lembut dan elegan, menampilkan:
- 7 halaman utama dengan konten lengkap
- Desain responsif (desktop, tablet, mobile)
- Fitur bilingual (Indonesia/Inggris)
- Animasi dan interaksi yang smooth
- Desain yang bersih dan profesional

## 🎨 Warna & Desain

- **Merah Katolik**: `#B22222` (primary)
- **Putih**: `#FAFAFA` (background)
- **Emas**: `#D4AF37` (accent)
- **Abu-abu Teks**: `#333333`

**Tipografi:**
- Heading: Playfair Display (serif)
- Body: Lato (sans-serif)

## 📁 Struktur File

```
adaline-foundation/
├── index.html              # Halaman Beranda
├── about.html              # Halaman Tentang Kami
├── programs.html           # Halaman Program
├── gallery.html            # Halaman Galeri
├── donate.html             # Halaman Donasi
├── contact.html            # Halaman Kontak
├── privacy.html            # Halaman Kebijakan Privasi
├── css/
│   └── styles.css          # Stylesheet utama
├── js/
│   ├── script.js           # JavaScript utama
│   └── translations.js     # Data terjemahan bilingual
└── imgs/                   # Folder gambar
    ├── coding-mom_*.webp   # Gambar program Coding Mom
    ├── wagethe-education_*.jpg # Gambar program Wagethe
    ├── health-vaccination_*.jpg # Gambar program kesehatan
    ├── hero-children_*.jpg # Gambar hero & galeri
    └── gallery_*.jpg       # Gambar galeri tambahan
```

## 🌐 Halaman Website

1. **Beranda** (`index.html`)
   - Hero banner dengan CTA donasi
   - Sekilas visi dan 3 kartu program
   - Preview program utama

2. **Tentang Kami** (`about.html`)
   - Visi dan Misi yayasan
   - Sejarah timeline (2019-2022)
   - Nilai-nilai organisasi
   - Kutipan Kitab Suci (Kolose 3:23)

3. **Program** (`programs.html`)
   - Detail 3 program utama:
     * Coding Mom
     * Pendidikan Wagethe (Papua)
     * Kesehatan & Vaksinasi
   - Testimoni relawan
   - Pencapaian program

4. **Galeri** (`gallery.html`)
   - Grid foto 3×3 kegiatan
   - Logo dan info mitra
   - Hover overlay dengan deskripsi

5. **Donasi** (`donate.html`)
   - Informasi penggunaan dana
   - Email donasi: donasi@adalinefoundation.org
   - Statistik dampak
   - FAQ donasi

6. **Kontak** (`contact.html`)
   - Formulir kontak (mailto)
   - Informasi kontak lengkap
   - Placeholder Google Maps
   - Jam operasional

7. **Kebijakan Privasi** (`privacy.html`)
   - Kebijakan perlindungan data
   - Hak pengguna
   - Informasi cookies

## ✨ Fitur Utama

### 1. Bilingual (Indonesia/Inggris)
- Toggle bahasa di header
- Menyimpan preferensi bahasa di localStorage
- Semua konten diterjemahkan

### 2. Responsif
- Mobile-first design
- Breakpoints: 768px (tablet), 1024px (desktop)
- Navigation hamburger untuk mobile

### 3. Interaktif
- Sticky header dengan shadow on scroll
- Smooth scrolling
- Card hover animations
- Back to top button
- Form handling dengan mailto

### 4. SEO Friendly
- Meta tags yang lengkap
- Semantic HTML5
- Heading hierarchy yang proper

## 🚀 Cara Menggunakan

1. **Buka website:**
   - Buka file `index.html` di browser
   - Atau deploy ke hosting web

2. **Ganti bahasa:**
   - Klik tombol `ID` atau `EN` di header
   - Bahasa akan tersimpan otomatis

3. **Navigasi:**
   - Gunakan menu di header
   - Responsive untuk mobile

4. **Donasi:**
   - Klik tombol "Donasi Sekarang"
   - Email client akan terbuka otomatis

5. **Kontak:**
   - Isi formulir di halaman Contact
   - Submit akan membuka email client

## 📧 Informasi Kontak

- **Email Umum**: info@adalinefoundation.org
- **Email Donasi**: donasi@adalinefoundation.org
- **Telepon**: +62 21 0000 0000
- **Alamat**: Jalan Damai Sejahtera No. 8, Jakarta Selatan

## 🎯 Program Utama

1. **Coding Mom** - Pelatihan digital untuk ibu dan anak
2. **Pendidikan Wagethe** - Dukungan pendidikan di Papua
3. **Kesehatan & Vaksinasi** - Layanan kesehatan masyarakat

## 🤝 Mitra

- Coding Mom Indonesia
- Gereja Katolik Wagethe, Papua
- Caritas Indonesia
- Kementerian Kesehatan RI
- Palang Merah Indonesia

## 🛠️ Teknologi

- **HTML5** - Struktur semantic
- **CSS3** - Styling modern dengan CSS variables
- **JavaScript (Vanilla)** - Interaktivitas tanpa framework
- **Google Fonts** - Playfair Display & Lato
- **SVG Icons** - Icons minimalis dan scalable

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔄 Update & Maintenance

Untuk mengupdate konten:
1. **Teks**: Edit file HTML atau `js/translations.js`
2. **Gambar**: Ganti file di folder `imgs/`
3. **Styling**: Edit `css/styles.css`
4. **Fungsi**: Edit `js/script.js`

## 📝 Lisensi

   184→© 2025 Adeline Foundation – All Rights Reserved

---

**Developed by**: Minimax Studio  
**Domain**: adalinefoundation.org  
**Theme**: Katolik lembut & elegan

*Faith, Hope, and Love – In All We Do*
# adelinefoundation-website
