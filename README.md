# ☕ ABYNS STUDIO — Company Profile & Mini Cafe Website

Website profil kafe dan pemesanan online modern berestetika mewah (*ethereal luxury & cozy cream aesthetics*) yang dibangun dengan **HTML5, Vanilla CSS3, dan JavaScript murni**. Siap langsung diunggah ke **GitHub Pages**.

---

## ✨ Fitur Utama

1. **Desain Mewah & Ethereal**:
   - Skema warna *warm cream, ivory, soft latte & gold accents* terinspirasi dari referensi desain visual ABYNS STUDIO.
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
     - `ABYNSMAGIC`: Diskon 20%
     - `ABYNS10K`: Potongan langsung Rp 10.000
   - Diskon otomatis 10% untuk pesanan di atas Rp 100.000.

6. **Pemesanan WhatsApp dengan Format Rapi & Terstruktur**:
   - Tombol checkout otomatis merangkum data pesanan, nama pembeli, nomor WhatsApp, metode (*Dine In*, *Takeaway*, atau *Delivery*), nomor meja/alamat, serta rincian harga & diskon ke format pesan WhatsApp yang rapi dan profesional.

7. **Galeri Foto dengan Lightbox Pop-up**:
   - Pratinjau foto resolusi tinggi dengan efek zoom dan overlay "+12 More Photos".

8. **Responsif Sepenuhnya (Mobile, Tablet, Desktop)**:
   - Menu hamburger fleksibel, *touch-friendly buttons*, dan tombol keranjang melayang (*floating cart button*).

---

## 🚀 Panduan Upload ke GitHub Pages

1. Buat repositori baru di GitHub (contoh: `abyns-cafe`).
2. Buka terminal di folder project ini:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - ABYNS Studio Cafe"
   git branch -M main
   git remote add origin https://github.com/USERNAME_ANDA/abyns-cafe.git
   git push -u origin main
   ```
3. Buka tab **Settings** di repositori GitHub Anda.
4. Klik menu **Pages** di sebelah kiri.
5. Pada bagian **Build and deployment** > **Source**, pilih **Deploy from a branch**.
6. Pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.
7. Website Anda akan langsung aktif dalam hitungan menit di `https://USERNAME_ANDA.github.io/abyns-cafe/`!

---

## ⚙️ Kustomisasi Nomor WhatsApp & Kafe

Untuk mengganti nomor WhatsApp tujuan pemesanan kafe, buka file [`js/app.js`](file:///c:/xampp/htdocs/abynsstudio/company-profile-mini-cafe/js/app.js) pada baris ke-7:

```javascript
const CAFE_CONFIG = {
  name: "ABYNS STUDIO",
  whatsappNumber: "6281234567890", // Ganti dengan nomor WhatsApp Kafe Anda (format: 628xxx tanpa tanda +)
  currencySymbol: "Rp",
  ...
};
```
