# ☕ NANA CAFE — Company Profile & Mini Cafe Website

Website profil kafe dan pemesanan online modern berestetika mewah (*ethereal luxury & cozy cream aesthetics*) yang dibangun dengan **HTML5, Vanilla CSS3, dan JavaScript murni**. Siap langsung diunggah ke **GitHub Pages**.

---

## ✨ Fitur Utama

1. **Desain Mewah & Ethereal**:
   - Skema warna *warm cream, ivory, soft latte & gold accents* terinspirasi dari referensi desain visual NANA CAFE.
   - Tipografi editorial elegan menggabungkan *Cormorant Garamond*, *Italianno*, dan *Plus Jakarta Sans*.

2. **Banner Video Autoplay**:
   - Memutar otomatis video pembuka kafe (`assets/videos/hero-banner.mp4`) dengan looping halus, efek overlay kabut susu (*warm latte mist*), serta tombol kontrol jeda/putar dan mute suara.

3. **Menu Signature & Katalog Interaktif**:
   - Kategori: *Coffee, Non-Coffee, Tea, Pastry*.
   - Fitur pencarian menu langsung (*Live Search*).
   - Panel pratinjau detail resep, *flavor notes*, komposisi, serta pilihan penyajian (*Iced / Hot*).

4. **Sistem Keranjang Belanja & Drawer Modern**:
   - Tambah menu dengan 1 klik atau melalui detail item.
   - Pengaturan jumlah (+ / -) dan hapus item.
   - Tersimpan di `localStorage` peramban (data pesanan tidak hilang saat refresh).

5. **Sistem Promo & Diskon**:
   - Masukkan kode voucher promo:
     - `HEAVEN15`: Diskon 15%
     - `NANAMAGIC`: Diskon 20%
     - `NANA10K`: Potongan langsung Rp 10.000
   - Diskon otomatis 10% untuk pesanan di atas Rp 100.000.

6. **Pemesanan WhatsApp dengan Format Rapi & Terstruktur**:
   - Tombol checkout otomatis merangkum data pesanan, nama pembeli, nomor WhatsApp, metode (*Dine In*, *Takeaway*, atau *Delivery*), nomor meja/alamat, serta rincian harga & diskon ke format pesan WhatsApp yang rapi dan profesional.

7. **Galeri Foto dengan Lightbox Pop-up**:
   - Pratinjau foto resolusi tinggi dengan efek zoom dan overlay "+12 More Photos".

8. **Responsif Sepenuhnya (Mobile, Tablet, Desktop)**:
   - Menu hamburger fleksibel, *touch-friendly buttons*, dan tombol keranjang melayang (*floating cart button*).

---

## 🚀 Panduan Upload ke GitHub Pages & Custom Domain

1. Buka terminal di folder project ini:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Nana Cafe SEO Ready"
   git branch -M main
   git remote add origin https://github.com/hisyamabilkhoir/company-profile-mini-cafe.git
   git push -u origin main
   ```
2. Buka repositori di GitHub: `https://github.com/hisyamabilkhoir/company-profile-mini-cafe`.
3. Buka tab **Settings** > **Pages** di sebelah kiri.
4. Pada bagian **Build and deployment** > **Source**, pilih **Deploy from a branch** (`branch: main`, `folder: / (root)`), lalu klik **Save**.
5. Pada bagian **Custom domain**:
   - Ketikkan: `nanacafeshop.web.id`
   - Klik **Save** (File `CNAME` sudah otomatis tersedia di project ini).
   - Centang **Enforce HTTPS** setelah sertifikat SSL aktif.

### 🌐 Konfigurasi DNS di Registrar Domain (nanacafeshop.web.id):
Tambahkan DNS Record berikut pada dashboard penyedia domain Anda:
- **A Record**:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- **CNAME Record**:
  - Host: `www`
  - Target: `hisyamabilkhoir.github.io`

---

## ⚙️ Kustomisasi Nomor WhatsApp & Kafe

Untuk mengganti nomor WhatsApp tujuan pemesanan kafe, buka file [`js/app.js`](file:///c:/xampp/htdocs/abynsstudio/company-profile-mini-cafe/js/app.js) pada baris ke-7:

```javascript
const CAFE_CONFIG = {
  name: "NANA CAFE",
  whatsappNumber: "6282221519098", // 0822-2151-9098
  currencySymbol: "Rp",
  ...
};
```

---

## 🔍 Panduan Mendaftarkan Website ke Google Search Console

Website ini telah disetting menggunakan **Primary Domain Canonical**: `https://nanacafeshop.web.id/` (dengan auto-redirect dari `hisyamabilkhoir.github.io`).

### Langkah-Langkah Verifikasi Google Search Console:

1. **Buka Google Search Console**:
   - Masuk ke [Google Search Console](https://search.google.com/search-console/) dengan akun Google Anda.

2. **Tambahkan Properti**:
   - Pilih jenis properti **Awalan URL (URL Prefix)**.
   - Masukkan alamat website Anda: `https://nanacafeshop.web.id/` (bisa juga tambahkan properti kedua untuk `https://hisyamabilkhoir.github.io/company-profile-mini-cafe/`).
   - Klik **Lanjutkan**.

3. **Pilih Metode Verifikasi "Tag HTML"**:
   - Pada pilihan metode verifikasi, buka opsi **Tag HTML**.
   - Salin kode tag meta yang diberikan oleh Google, contoh:
     `<meta name="google-site-verification" content="abcdef123456xyz..." />`
   - Buka file [`index.html`](file:///c:/xampp/htdocs/abynsstudio/company-profile-mini-cafe/index.html) dan cari baris berikut:
     ```html
     <meta name="google-site-verification" content="MASUKKAN_KODE_VERIFIKASI_GOOGLE_CONSOLE_DI_SINI">
     ```
   - Ganti `MASUKKAN_KODE_VERIFIKASI_GOOGLE_CONSOLE_DI_SINI` dengan kode dari Google tersebut.
   - Simpan dan commit ke GitHub (`git add . && git commit -m "Add GSC verification code" && git push`).
   - Kembali ke Google Search Console dan klik tombol **Verifikasi**.

4. **Kirimkan Peta Situs (Sitemap)**:
   - Setelah terverifikasi, klik menu **Peta Situs (Sitemaps)** di sidebar kiri Google Search Console.
   - Pada kolom *Tambahkan peta situs baru*, ketik: `sitemap.xml`.
   - Klik **Kirim**.
   - Google akan segera mulai merayapi (*crawling*) dan mengindeks seluruh halaman serta foto produk menu kafe Anda.



