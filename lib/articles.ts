export interface Article {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  featured: boolean
  image: string
  pdfUrl?: string
}

export const articles: Article[] = [
  {
    id: 1,
    title: "Panduan Lengkap Budidaya Padi Organik untuk Petani Windusari",
    slug: "panduan-budidaya-padi-organik",
    excerpt:
      "Pelajari teknik dan metode terbaik untuk menghasilkan padi organik berkualitas tinggi. Dari pemilihan bibit hingga panen, panduan lengkap untuk petani desa.",
    pdfUrl: "/pdfs/Report.pdf",
    content: `
# Panduan Lengkap Budidaya Padi Organik untuk Petani Windusari

## Pendahuluan

Budidaya padi organik semakin diminati karena menghasilkan beras yang lebih sehat dan ramah lingkungan. Panduan ini disusun khusus untuk petani Desa Windusari yang ingin beralih ke pertanian organik.

## Persiapan Lahan

### 1. Pengolahan Tanah
- Bajak tanah 2-3 minggu sebelum tanam
- Bersihkan dari gulma dan sisa tanaman sebelumnya
- Ratakan permukaan sawah dengan baik
- Buat sistem irigasi yang optimal

### 2. Pemupukan Dasar
- Gunakan pupuk kompos 2-3 ton per hektar
- Tambahkan pupuk kandang yang sudah matang
- Campurkan merata dengan tanah

## Pemilihan Bibit

### Kriteria Bibit Berkualitas:
- Bersertifikat dan bebas hama
- Varietas yang cocok untuk iklim lokal
- Daya tumbuh minimal 85%
- Sehat dan tidak terinfeksi penyakit

### Varietas yang Direkomendasikan:
1. **Ciherang** - Cocok untuk dataran rendah
2. **IR 64** - Tahan hama dan penyakit
3. **Inpari 32** - Produktivitas tinggi
4. **Segreng** - Varietas lokal unggul

## Penanaman

### Langkah-langkah:
1. Rendam benih dalam air 24 jam
2. Tiriskan dan peram 2 hari hingga berkecambah
3. Semai di persemaian selama 15-20 hari
4. Pindahkan bibit dengan jarak tanam 25x25 cm
5. Tanam 2-3 batang per lubang

### Tips Penanaman:
- Lakukan penanaman di pagi atau sore hari
- Pastikan kedalaman air 2-5 cm
- Tanam dalam posisi tegak lurus

## Perawatan

### Pengairan
- Atur ketinggian air sesuai fase pertumbuhan
- Fase vegetatif: 5-10 cm
- Fase generatif: 2-5 cm
- Keringkan 2 minggu sebelum panen

### Penyiangan
- Lakukan penyiangan pertama umur 15 hari
- Penyiangan kedua umur 30 hari
- Penyiangan ketiga umur 45 hari

### Pemupukan Organik
**Pupuk Cair Organik:**
- Aplikasi setiap 2 minggu
- Dosis 2-3 liter per tangki
- Semprot di pagi atau sore hari

**Pupuk Padat:**
- Kompos pada umur 30 hari
- Pupuk kandang pada umur 45 hari

## Pengendalian Hama dan Penyakit

### Metode Alami:
1. **Penanaman Refugia** - Bunga-bungaan di pematang
2. **Perangkap Lampu** - Untuk hama malam hari
3. **Pestisida Nabati** - Ekstrak daun nimba, bawang putih
4. **Predator Alami** - Burung pemakan serangga

### Hama Umum dan Penanganannya:
- **Walang Sangit**: Perangkap dan predator alami
- **Tikus**: Gropyokan dan perangkap
- **Keong Mas**: Ambil manual, bebek pengembala

## Panen dan Pasca Panen

### Waktu Panen:
- 30-35 hari setelah berbunga
- Malai menunduk dan 90% menguning
- Kadar air butir 22-25%

### Teknik Panen:
- Panen di pagi hari
- Potong pada pangkal batang
- Kumpulkan dan ikat dalam satu ikatan

### Pengolahan:
1. Perontokan segera setelah panen
2. Penjemuran hingga kadar air 14%
3. Pembersihan dan sortasi
4. Penyimpanan dalam karung atau silo

## Pemasaran

### Strategi Pemasaran:
- **Sertifikasi Organik** - Tingkatkan nilai jual
- **Branding Lokal** - "Beras Organik Windusari"
- **Koperasi Petani** - Pemasaran kolektif
- **Online Marketing** - Media sosial dan e-commerce

### Perhitungan Ekonomi:
- Biaya produksi: Rp 8-10 juta/hektar
- Hasil panen: 5-6 ton/hektar
- Harga jual organik: Rp 15.000-20.000/kg
- Keuntungan bersih: Rp 65-110 juta/hektar

## Kesimpulan

Budidaya padi organik memerlukan kesabaran dan ketekunan, namun memberikan keuntungan jangka panjang baik secara ekonomi maupun lingkungan. Dengan mengikuti panduan ini, petani Windusari dapat menghasilkan beras organik berkualitas tinggi.

## Kontak dan Konsultasi

Untuk konsultasi lebih lanjut, hubungi:
- **Tim KKN UGM 2025**
- Balai Penyuluhan Pertanian Windusari
- Kelompok Tani Windusari

---

*Artikel ini disusun berdasarkan pengalaman petani lokal dan standar pertanian organik Indonesia.*
    `,
    author: "Tim KKN UGM 2025",
    date: "18 Desember 2024",
    readTime: "8 menit",
    category: "Pertanian",
    featured: true,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=80",
  },
  {
    id: 2,
    title: "Strategi Pemasaran Digital untuk UMKM Desa",
    slug: "strategi-pemasaran-digital-umkm",
    excerpt:
      "Tingkatkan penjualan produk UMKM Anda dengan memanfaatkan platform digital. Panduan praktis untuk memulai pemasaran online yang efektif.",
    content: `
# Strategi Pemasaran Digital untuk UMKM Desa

## Mengapa Pemasaran Digital Penting?

Di era digital ini, pemasaran online bukan lagi pilihan, tetapi kebutuhan. UMKM desa yang memanfaatkan platform digital dapat menjangkau pasar lebih luas dan meningkatkan penjualan hingga 300%.

## Persiapan Dasar

### 1. Foto Produk Berkualitas
- Gunakan pencahayaan natural
- Background bersih dan menarik
- Tampilkan detail produk
- Minimal 3-5 foto per produk

### 2. Deskripsi Produk Menarik
- Jelaskan keunggulan produk
- Sertakan bahan dan ukuran
- Cantumkan cara perawatan
- Gunakan bahasa yang mudah dipahami

## Platform Pemasaran

### 1. Media Sosial

**Instagram:**
- Posting rutin 1-2 kali sehari
- Gunakan Instagram Stories
- Manfaatkan Reels untuk konten viral
- Hashtag lokal dan nasional

**Facebook:**
- Buat halaman bisnis
- Gabung grup jual beli lokal
- Facebook Marketplace
- Live selling untuk interaksi langsung

**TikTok:**
- Video pendek 15-60 detik
- Konten behind the scenes
- Tutorial penggunaan produk
- Ikuti trend terkini

### 2. E-Commerce

**Shopee:**
- Gratis ongkir untuk pembeli
- Promo flash sale
- Cashback dan voucher

**Tokopedia:**
- Sistem pembayaran aman
- Banyak pilihan ekspedisi
- Program affiliate

**Marketplace Lokal:**
- Lebih dekat dengan konsumen
- Ongkir lebih murah
- COD lebih mudah

## Content Marketing

### Jenis Konten:
1. **Edukasi** - Tips menggunakan produk
2. **Behind the Scenes** - Proses pembuatan
3. **Testimoni** - Review dari pembeli
4. **Promo** - Diskon dan penawaran khusus
5. **Storytelling** - Cerita di balik produk

### Jadwal Posting:
- **Senin**: Motivasi dan inspirasi
- **Rabu**: Edukasi produk
- **Jumat**: Promo weekend
- **Minggu**: Behind the scenes

## Strategi Pemasaran

### 1. Bangun Branding
- Logo dan nama unik
- Kemasan menarik
- Konsisten di semua platform
- Ceritakan nilai lokal

### 2. Engagement dengan Pelanggan
- Balas komentar dan pesan cepat
- Buat polling dan kuis
- Minta feedback pelanggan
- Apresiasi pelanggan setia

### 3. Kolaborasi
- Kerjasama dengan influencer lokal
- Partnership dengan UMKM lain
- Sponsor acara desa
- Bergabung dengan komunitas

## WhatsApp Business

### Fitur Unggulan:
- Katalog produk
- Pesan otomatis
- Label pelanggan
- Status untuk promosi

### Tips Penggunaan:
- Buat broadcast list
- Gunakan Quick Reply
- Status 2-3 kali sehari
- Profesional dalam berkomunikasi

## Iklan Berbayar

### Facebook & Instagram Ads:
- Budget mulai Rp 10.000/hari
- Target audiens spesifik
- Tracking hasil kampanye
- A/B testing untuk optimasi

### Google My Business:
- Gratis dan efektif
- Muncul di Google Maps
- Pelanggan bisa review
- Tampilkan jam operasional

## Analisis dan Evaluasi

### Metrik Penting:
- Jumlah followers
- Engagement rate
- Reach dan impressions
- Conversion rate
- Penjualan

### Tools Gratis:
- Instagram Insights
- Facebook Analytics
- Google Analytics
- Shopee Seller Center

## Tips Sukses

### Do's:
✓ Konsisten posting
✓ Responsif terhadap pesan
✓ Update stok secara berkala
✓ Gunakan foto asli produk
✓ Berikan pelayanan terbaik

### Don'ts:
✗ Spam di grup
✗ Posting terlalu banyak promosi
✗ Foto produk tidak jelas
✗ Mengabaikan komplain
✗ Harga tidak kompetitif

## Studi Kasus: Keripik Singkong Ibu Siti

**Background:**
Ibu Siti memproduksi keripik singkong rumahan dengan penjualan lokal sekitar 50 pack/bulan.

**Strategi Digital:**
1. Membuat Instagram @kripiksingkongwindusari
2. Posting foto produk berkualitas
3. Live Instagram setiap Sabtu
4. Gabung marketplace Shopee

**Hasil Setelah 3 Bulan:**
- Penjualan naik 250% menjadi 175 pack/bulan
- Pelanggan dari luar kota 40%
- Omzet naik dari 2,5 juta menjadi 8,75 juta/bulan
- Dapat permintaan reseller

## Kesimpulan

Pemasaran digital membuka peluang besar bagi UMKM desa. Dengan strategi yang tepat dan konsistensi, UMKM dapat berkembang pesat dan menjangkau pasar lebih luas.

## Action Plan

**Minggu 1-2:**
- Buat akun media sosial
- Foto produk berkualitas
- Setup WhatsApp Business

**Minggu 3-4:**
- Posting konten rutin
- Daftar marketplace
- Mulai promosi

**Bulan 2-3:**
- Evaluasi strategi
- Coba iklan berbayar
- Kembangkan konten

---

*Untuk konsultasi pemasaran digital, hubungi Tim Pendamping UMKM Windusari.*
    `,
    author: "Ahmad Rizki",
    date: "15 Desember 2024",
    readTime: "6 menit",
    category: "Ekonomi",
    featured: true,
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80",
  },
  {
    id: 3,
    title: "Sejarah dan Perkembangan Desa Windusari",
    slug: "sejarah-desa-windusari",
    excerpt:
      "Menelusuri perjalanan Desa Windusari dari masa ke masa. Dari desa tradisional hingga menjadi desa modern yang terus berkembang.",
    content: `
# Sejarah dan Perkembangan Desa Windusari

## Asal Usul Nama Windusari

Nama "Windusari" berasal dari dua kata dalam bahasa Jawa: "Windu" yang berarti delapan tahun atau periode waktu, dan "Sari" yang berarti inti atau yang terbaik. Menurut cerita turun-temurun, desa ini didirikan oleh para sesepuh dengan harapan menjadi tempat yang berkembang dan memberikan hasil terbaik setiap periode waktu.

## Masa Pra-Kemerdekaan

### Abad ke-19
Wilayah Windusari pada masa kolonial Belanda merupakan bagian dari kawasan perkebunan dan pertanian. Penduduk setempat banyak bekerja sebagai buruh tani dengan sistem tanam paksa.

### Masa Perjuangan
Selama masa perjuangan kemerdekaan, Desa Windusari menjadi salah satu basis perlawanan. Banyak pemuda desa yang bergabung dengan laskar perjuangan.

## Era Kemerdekaan (1945-1970)

### Pembentukan Desa
Secara resmi, Desa Windusari dibentuk pada tahun 1952 dengan kepala desa pertama adalah Mbah Kartoredjo. Pada masa ini, desa masih sangat tradisional dengan mayoritas penduduk berprofesi sebagai petani.

### Infrastruktur Awal
- Jalan setapak menghubungkan antar dusun
- Irigasi sederhana dari sungai
- Tidak ada listrik
- Pendidikan terbatas

## Era Pembangunan (1970-2000)

### Revolusi Hijau
Tahun 1970-an membawa perubahan besar dengan program revolusi hijau. Petani Windusari mulai mengenal:
- Bibit unggul
- Pupuk kimia
- Pestisida modern
- Sistem irigasi teknis

### Modernisasi
**1975:** Listrik masuk desa
**1980:** Jalan desa diaspal
**1985:** SD Windusari dibangun
**1990:** Balai desa direnovasi
**1995:** Air bersih mengalir

## Era Reformasi (2000-2015)

### Otonomi Desa
Dengan otonomi daerah, desa mendapat kewenangan lebih besar dalam pengelolaan pembangunan. Dana desa mulai dialokasikan untuk:
- Infrastruktur jalan
- Fasilitas umum
- Pemberdayaan masyarakat
- Pengembangan ekonomi

### Perkembangan Ekonomi
- Munculnya UMKM kerajinan
- Pengolahan hasil pertanian
- Koperasi desa aktif
- Pasar desa berkembang

## Era Digital (2015-Sekarang)

### Transformasi Digital
Windusari tidak ketinggalan dalam era digital:
- Internet masuk ke desa (2016)
- Website desa diluncurkan (2018)
- E-government untuk pelayanan
- UMKM go online

### Program Unggulan
1. **Desa Wisata** - Mengembangkan potensi wisata alam
2. **Pertanian Organik** - Kembali ke alam
3. **Kampung Digital** - Literasi digital untuk warga
4. **Smart Village** - Teknologi untuk pelayanan

## Kepala Desa dari Masa ke Masa

### 1. Mbah Kartoredjo (1952-1967)
Kepala desa pertama yang meletakkan fondasi desa. Fokus pada pertanian dan kerukunan warga.

### 2. Pak Suparman (1967-1985)
Era modernisasi awal. Menghadirkan listrik dan jalan aspal ke desa.

### 3. Pak Sutarjo (1985-2005)
Masa pembangunan pesat. Pendidikan dan kesehatan menjadi prioritas.

### 4. Ibu Siti Aminah (2005-2015)
Kepala desa perempuan pertama. Fokus pada pemberdayaan perempuan dan UMKM.

### 5. Pak Bambang Wijaya (2015-sekarang)
Era digital dan inovasi. Membawa Windusari menjadi desa modern.

## Demografi dan Populasi

### Perkembangan Jumlah Penduduk:
- 1952: ±500 jiwa
- 1970: ±1.200 jiwa
- 1990: ±2.500 jiwa
- 2010: ±4.200 jiwa
- 2024: ±5.800 jiwa

### Komposisi:
- Petani: 45%
- Buruh: 20%
- UMKM: 18%
- PNS/Swasta: 12%
- Lainnya: 5%

## Prestasi dan Penghargaan

### Tingkat Kabupaten:
- Juara 1 Desa Berprestasi (2018)
- Desa Terbersih (2019, 2021)
- Desa Inovatif (2022)

### Tingkat Provinsi:
- Desa Wisata Terbaik (2020)
- Desa Digital Terbaik (2023)

## Tradisi dan Budaya

### Upacara Adat:
1. **Bersih Desa** - Setiap tahun setelah panen
2. **Sedekah Bumi** - Syukuran hasil pertanian
3. **Ngalap Berkah** - Ziarah makam leluhur

### Kesenian:
- Wayang Kulit
- Kuda Lumping
- Jathilan
- Karawitan

## Potensi dan Tantangan

### Potensi:
✓ Lahan pertanian subur
✓ Sumber daya manusia produktif
✓ Lokasi strategis
✓ Budaya yang kuat
✓ Semangat gotong royong tinggi

### Tantangan:
✗ Urbanisasi anak muda
✗ Ketergantungan pupuk kimia
✗ Perubahan iklim
✗ Persaingan pasar global
✗ Regenerasi petani

## Visi Masa Depan

### Windusari 2030:
1. **Desa Mandiri** - Ekonomi kuat dan berkelanjutan
2. **Desa Cerdas** - SDM berkualitas dan berdaya saing
3. **Desa Sejahtera** - Kesejahteraan merata
4. **Desa Ramah Lingkungan** - Pertanian organik dan energi terbarukan
5. **Desa Wisata Unggul** - Destinasi wisata desa terkemuka

## Kesimpulan

Perjalanan Desa Windusari dari desa tradisional menjadi desa modern menunjukkan bahwa dengan kerja keras, inovasi, dan semangat gotong royong, kemajuan pasti bisa diraih. Generasi muda Windusari diharapkan dapat melanjutkan estafet pembangunan desa menuju masa depan yang lebih cerah.

---

*Artikel ini disusun berdasarkan arsip desa, wawancara dengan sesepuh, dan dokumentasi sejarah lokal.*
    `,
    author: "Budi Santoso",
    date: "12 Desember 2024",
    readTime: "10 menit",
    category: "Sejarah",
    featured: false,
    image: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=800&q=80",
  },
  {
    id: 4,
    title: "Tips Mengolah Hasil Pertanian Menjadi Produk Bernilai Tinggi",
    slug: "mengolah-hasil-pertanian",
    excerpt:
      "Jangan hanya jual hasil panen mentah! Pelajari cara mengolah hasil pertanian menjadi produk olahan yang lebih menguntungkan.",
    content: `
# Tips Mengolah Hasil Pertanian Menjadi Produk Bernilai Tinggi

## Mengapa Perlu Mengolah Hasil Pertanian?

Menjual hasil panen mentah seringkali menghasilkan keuntungan minimal. Dengan mengolahnya menjadi produk jadi, nilai jual bisa meningkat 200-500%. Misalnya, singkong Rp 2.000/kg menjadi keripik bisa dijual Rp 50.000/kg.

## Analisis Potensi Bahan Baku

### Hasil Pertanian Lokal Windusari:
1. **Padi/Beras**
2. **Singkong**
3. **Jagung**
4. **Ubi Jalar**
5. **Sayuran**
6. **Buah-buahan**

## Produk Olahan dari Beras

### 1. Beras Analog
Beras campuran dengan bahan lokal untuk kesehatan:
- Beras + jagung
- Beras + ubi
- Beras + sorgum

**Keunggulan:**
- Harga lebih tinggi
- Target pasar health conscious
- Nilai gizi lebih baik

### 2. Tepung Beras
**Produk turunan:**
- Kue tradisional
- Cookies
- Brownies
- Onde-onde

**Modal & Keuntungan:**
- Modal: Rp 5 juta (penggiling)
- Beras 10 kg → Tepung 9 kg
- Harga beras Rp 12.000/kg
- Harga tepung Rp 18.000/kg
- Profit margin: 50%

### 3. Beras Instan
Beras yang sudah setengah matang, tinggal diseduh:
- Praktis untuk traveler
- Tahan lama (6 bulan)
- Harga premium

## Produk Olahan dari Singkong

### 1. Keripik Singkong
**Variasi rasa:**
- Original
- Balado
- Keju
- BBQ
- Pedas manis

**Perhitungan:**
- Singkong 10 kg (Rp 20.000)
- Minyak & bumbu (Rp 30.000)
- Kemasan (Rp 20.000)
- Menghasilkan 50 pack @ 100gr
- Harga jual Rp 5.000/pack
- Omzet Rp 250.000
- Profit Rp 180.000

### 2. Tape Singkong
Produk fermentasi dengan nilai jual tinggi:
- Singkong Rp 2.000/kg
- Tape Rp 15.000/kg
- Tambahan: tape goreng, tape bakar

### 3. Tiwul Instan
Makanan tradisional dalam kemasan modern:
- Target: Nostalgia & kesehatan
- Harga: Rp 15.000-25.000/pack
- Shelf life: 6 bulan

### 4. Tepung Mocaf (Modified Cassava Flour)
- Pengganti tepung terigu
- Bebas gluten
- Harga Rp 20.000-30.000/kg

## Produk Olahan dari Jagung

### 1. Popcorn Premium
**Variasi:**
- Caramel
- Cheese
- Chocolate
- BBQ

**Keunggulan:**
- Modal kecil
- Proses cepat
- Margin besar

### 2. Jasuke (Jagung Susu Keju)
Produk trendi untuk anak muda:
- Cup kecil Rp 8.000
- Cup besar Rp 12.000
- Topping extra (keju, coklat, oreo)

### 3. Tepung Maizena Lokal
- Untuk bahan kue
- Industri makanan
- Kosmetik

## Produk Olahan dari Ubi

### 1. Stik Ubi
Camilan renyah dan bergizi:
- Ubi 5 kg (Rp 15.000)
- Hasil 100 pack @ Rp 5.000
- Omzet Rp 500.000

### 2. Brownies Ubi
Target pasar kelas menengah:
- Harga Rp 30.000-50.000/loyang
- Margin 60-70%

### 3. Selai Ubi
Produk awetan dengan nilai tinggi:
- Shelf life 6-12 bulan
- Kemasan jar cantik
- Harga Rp 25.000-35.000

## Peralatan & Investasi

### Level Pemula (< Rp 5 juta)
- Kompor gas
- Wajan besar
- Spinner (pengering minyak)
- Sealer plastik
- Timbangan digital

### Level Menengah (Rp 5-20 juta)
- Mesin penggiling
- Deep fryer listrik
- Mesin vacuum sealer
- Oven besar

### Level Lanjut (> Rp 20 juta)
- Mesin industrial
- Cold storage
- Mesin packaging otomatis

## Proses Produksi Standar

### 1. Persiapan Bahan
- Seleksi bahan berkualitas
- Cuci bersih
- Sortir sesuai ukuran

### 2. Pengolahan
- Ikuti resep standar
- Kontrol suhu dan waktu
- Jaga kebersihan

### 3. Pengemasan
- Gunakan food grade packaging
- Desain menarik
- Label lengkap (komposisi, expired, izin)

### 4. Penyimpanan
- Tempat kering dan sejuk
- Sistem FIFO (First In First Out)
- Cek berkala

## Perizinan dan Sertifikasi

### Wajib:
✓ NIB (Nomor Induk Berusaha)
✓ PIRT (Pangan Industri Rumah Tangga)
✓ Halal (untuk produk tertentu)

### Opsional tapi Recommended:
- BPOM
- SNI
- Organic certification
- ISO (untuk skala besar)

## Packaging dan Branding

### Tips Packaging:
1. **Food Grade** - Aman untuk makanan
2. **Kedap Udara** - Produk tahan lama
3. **Desain Menarik** - Eye catching
4. **Informatif** - Komposisi, expired, kontak

### Elemen Branding:
- Logo unik
- Tagline menarik
- Cerita produk (storytelling)
- Identitas lokal (Windusari)

## Strategi Pemasaran

### Online:
- Media sosial (Instagram, Facebook)
- Marketplace (Shopee, Tokopedia)
- WhatsApp Business
- Website/landing page

### Offline:
- Toko oleh-oleh
- Warung/minimarket lokal
- Event pameran
- Kantin sekolah/kantor

### Kemitraan:
- Reseller
- Dropshipper
- Distributor
- Koperasi

## Studi Kasus Sukses

### Keripik Singkong "Bu Yanti"
**Awal:**
- Modal Rp 2 juta
- Produksi 50 pack/hari
- Omzet Rp 7,5 juta/bulan

**Setelah 2 Tahun:**
- Modal berkembang Rp 50 juta
- Produksi 500 pack/hari
- Omzet Rp 75 juta/bulan
- Punya 15 karyawan
- Ekspor ke Malaysia

**Kunci Sukses:**
- Konsistensi rasa
- Packaging menarik
- Marketing digital aktif
- Pelayanan prima

## Tantangan dan Solusi

### Tantangan:
❌ Bahan baku tidak stabil
❌ Kompetisi ketat
❌ Modal terbatas
❌ Skill kurang

### Solusi:
✅ Kerjasama dengan petani
✅ Diferensiasi produk
✅ Mulai dari kecil, reinvestasi
✅ Ikut pelatihan UMKM

## Action Plan

### Bulan 1:
- Riset pasar dan produk
- Ikut pelatihan
- Siapkan modal
- Buat business plan

### Bulan 2-3:
- Mulai produksi trial
- Test pasar kecil
- Perbaiki resep
- Urus izin PIRT

### Bulan 4-6:
- Produksi rutin
- Branding & packaging
- Marketing intensif
- Evaluasi dan perbaikan

## Kesimpulan

Mengolah hasil pertanian menjadi produk bernilai tinggi adalah peluang besar untuk meningkatkan kesejahteraan petani dan pelaku UMKM. Dengan kreativitas, konsistensi, dan strategi yang tepat, produk olahan lokal bisa bersaing di pasar nasional bahkan internasional.

---

*Untuk konsultasi dan pendampingan, hubungi Tim Pemberdayaan UMKM Desa Windusari.*
    `,
    author: "Siti Nurhaliza",
    date: "10 Desember 2024",
    readTime: "7 menit",
    category: "Pertanian",
    featured: false,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
  },
  {
    id: 5,
    title: "Pentingnya Menjaga Kebersihan Lingkungan Desa",
    slug: "kebersihan-lingkungan-desa",
    excerpt:
      "Lingkungan bersih adalah kunci kesehatan masyarakat. Mari bersama-sama menjaga kebersihan desa untuk generasi mendatang.",
    content: `
# Pentingnya Menjaga Kebersihan Lingkungan Desa

## Mengapa Kebersihan Lingkungan Penting?

Kebersihan lingkungan adalah fondasi kesehatan masyarakat. Desa yang bersih tidak hanya indah dipandang, tetapi juga:
- Mengurangi penyebaran penyakit
- Meningkatkan kualitas hidup
- Menarik wisatawan
- Meningkatkan harga properti
- Mencerminkan kualitas masyarakat

## Dampak Lingkungan Kotor

### Kesehatan:
- Penyakit diare
- Demam berdarah
- Leptospirosis
- Infeksi kulit
- Penyakit pernapasan

### Ekonomi:
- Biaya kesehatan meningkat
- Produktivitas menurun
- Potensi wisata hilang
- Citra desa buruk

### Sosial:
- Konflik antar warga
- Menurunnya rasa bangga
- Ketidaknyamanan hidup

## Prinsip 3R dalam Pengelolaan Sampah

### 1. Reduce (Mengurangi)
**Di Rumah Tangga:**
- Belanja dengan tas kain
- Hindari produk sekali pakai
- Pilih kemasan yang bisa diisi ulang
- Memasak sesuai kebutuhan

**Di Tingkat Desa:**
- Kampanye pengurangan sampah
- Larangan kantong plastik sekali pakai
- Promosi produk ramah lingkungan

### 2. Reuse (Menggunakan Kembali)
**Contoh Praktis:**
- Botol bekas untuk pot tanaman
- Kaleng bekas untuk tempat pensil
- Kardus untuk kerajinan
- Kain perca untuk lap
- Plastik tebal untuk tas belanja

**Kreativitas:**
- Workshop kerajinan dari barang bekas
- Kompetisi daur ulang
- Pameran produk upcycling

### 3. Recycle (Mendaur Ulang)
**Jenis Sampah yang Bisa Didaur Ulang:**
- Kertas dan kardus
- Plastik (botol, kemasan)
- Kaleng dan logam
- Kaca

**Bank Sampah:**
- Kumpulkan sampah terpilah
- Tukar dengan uang
- Kelola bersama kelompok

## Pengelolaan Sampah Organik

### Komposter Rumah Tangga
**Bahan yang Bisa Dikompos:**
✓ Sisa sayuran
✓ Kulit buah
✓ Daun kering
✓ Sisa nasi
✓ Ampas kopi

**Bahan yang Tidak Boleh:**
✗ Daging dan tulang
✗ Produk susu
✗ Minyak dan lemak
✗ Kotoran hewan

### Cara Membuat Kompos:
1. Siapkan komposter/drum
2. Masukkan sampah organik
3. Tambahkan tanah dan air
4. Aduk setiap 3 hari
5. Siap dalam 3-4 minggu

### Manfaat:
- Mengurangi volume sampah 40%
- Pupuk organik gratis
- Menghemat biaya TPA
- Mengurangi emisi gas metana

## Program Bank Sampah Desa

### Cara Kerja:
1. **Pengumpulan** - Warga kumpulkan sampah terpilah
2. **Penimbangan** - Ditimbang dan dicatat
3. **Penilaian** - Diberi nilai rupiah
4. **Tabungan** - Masuk rekening bank sampah
5. **Penarikan** - Bisa diambil kapan saja

### Harga Sampah (Per Kg):
- Kardus: Rp 1.500
- Kertas putih: Rp 2.000
- Botol plastik: Rp 3.000
- Besi: Rp 3.500
- Kaleng: Rp 1.000

### Manfaat:
- Tambahan penghasilan Rp 50.000-200.000/bulan
- Lingkungan bersih
- Edukasi keluarga
- Kebersamaan warga

## Pengelolaan Limbah Cair

### Sumber Limbah Cair:
- Air cucian
- Air sabun mandi
- Air bekas masak
- Limbah peternakan
- Limbah industri rumah tangga

### Solusi:
**1. Biopori**
- Lubang resapan air
- Mengolah sampah organik
- Mencegah banjir
- Mengisi air tanah

**2. IPAL Komunal**
- Instalasi Pengolahan Air Limbah
- Mengolah limbah sebelum ke sungai
- Untuk beberapa rumah
- Bantuan dari pemerintah

**3. Septic Tank Ramah Lingkungan**
- Sistem pengolahan modern
- Tidak mencemari air tanah
- Perlu dikuras 3-5 tahun sekali

## Program Kebersihan Desa

### Kerja Bakti Rutin
**Jadwal:**
- Minggu ke-1: Bersih jalan desa
- Minggu ke-2: Bersih saluran air
- Minggu ke-3: Bersih fasilitas umum
- Minggu ke-4: Bersih lingkungan RT

**Koordinasi:**
- RT/RW mengkoordinir
- Semua warga berpartisipasi
- Penyediaan alat kebersihan
- Konsumsi bersama setelah kerja bakti

### Jumat Bersih
Program mingguan setiap Jumat:
- 06.00-07.00: Bersih halaman
- Lingkungan rumah masing-masing
- Buang sampah pada tempatnya
- Potong rumput liar

### Lomba Kebersihan
**Kategori:**
- Rumah terbersih
- RT terbersih
- Dusun terbersih
- Sekolah terbersih

**Hadiah:**
- Piala dan sertifikat
- Uang pembinaan
- Bantuan alat kebersihan

## Peran Serta Masyarakat

### Tingkat Individu:
✓ Buang sampah pada tempatnya
✓ Pisahkan sampah organik-anorganik
✓ Tidak membakar sampah
✓ Ikut kerja bakti
✓ Edukasi keluarga

### Tingkat RT/RW:
✓ Sediakan tempat sampah terpilah
✓ Jadwal pengangkutan sampah
✓ Koordinasi kerja bakti
✓ Monitor kebersihan

### Tingkat Desa:
✓ Penyediaan TPS (Tempat Pembuangan Sementara)
✓ Armada pengangkut sampah
✓ Koordinasi dengan dinas terkait
✓ Sosialisasi dan edukasi
✓ Reward dan punishment

## Teknologi Pengolahan Sampah

### 1. Insinerator Sederhana
- Membakar sampah dengan teknologi
- Mengurangi asap dan polusi
- Hasil abu untuk pupuk

### 2. Mesin Pencacah Plastik
- Mengubah plastik jadi biji plastik
- Bisa dijual ke pabrik
- Modal sekitar Rp 15-30 juta

### 3. Komposter Otomatis
- Proses lebih cepat (2 minggu)
- Tidak berbau
- Hasil kompos berkualitas

## Edukasi dan Kampanye

### Di Sekolah:
- Pelajaran tentang lingkungan
- Praktek pemilahan sampah
- Lomba poster dan puisi
- Kunjungan ke bank sampah

### Di Posyandu:
- Edukasi ibu-ibu
- Bahaya sampah plastik
- Demo membuat kompos
- Demo membuat ecobrick

### Di Masjid/Gereja:
- Ceramah tentang kebersihan
- Islam/agama dan lingkungan
- Kerja bakti bersama

## Sanksi dan Peraturan

### Perdes (Peraturan Desa):
- Larangan buang sampah sembarangan
- Kewajiban pisah sampah
- Jadwal buang sampah
- Denda pelanggaran

### Sanksi:
**Pelanggaran Pertama:**
- Teguran lisan

**Pelanggaran Kedua:**
- Teguran tertulis

**Pelanggaran Ketiga:**
- Sanksi sosial (kerja bakti ekstra)
- Denda Rp 100.000-500.000

## Kisah Sukses Desa Bersih

### Desa Windusari Menuju Zero Waste

**Tahun 2020:**
- Sampah 10 ton/hari ke TPA
- Biaya operasional Rp 15 juta/bulan
- Lingkungan kotor

**Program yang Dijalankan:**
1. Bank sampah di 8 RT
2. Komposter di 200 rumah
3. Pelatihan pemilahan sampah
4. Kampanye kurangi plastik

**Hasil 2024:**
- Sampah ke TPA turun 60%
- Hemat biaya Rp 9 juta/bulan
- Lingkungan bersih
- Juara Desa Terbersih Provinsi

**Income dari Sampah:**
- Bank sampah: Rp 8 juta/bulan
- Penjualan kompos: Rp 5 juta/bulan
- Total: Rp 13 juta/bulan

## Tips Praktis Sehari-hari

### Di Rumah:
1. Sediakan 2 tempat sampah (organik & anorganik)
2. Cuci bersih sampah plastik sebelum dibuang
3. Lipat kardus agar tidak makan tempat
4. Buat kompos dari sampah dapur
5. Gunakan kembali kantong belanja

### Di Jalan:
1. Bawa tas untuk sampah pribadi
2. Tidak membuang sampah dari kendaraan
3. Ambil sampah yang terlihat
4. Ajak teman peduli lingkungan

### Saat Belanja:
1. Bawa tas belanja sendiri
2. Tolak sedotan plastik
3. Pilih produk kemasan minimal
4. Beli sesuai kebutuhan
5. Support produk ramah lingkungan

## Kesimpulan

Menjaga kebersihan lingkungan desa adalah tanggung jawab bersama. Dengan kesadaran, komitmen, dan aksi nyata dari setiap warga, kita bisa mewujudkan Desa Windusari yang bersih, sehat, dan lestari untuk generasi mendatang.

**Mulai dari diri sendiri, mulai dari sekarang, mulai dari hal kecil.**

---

*Mari bersama-sama ciptakan Windusari yang bersih dan hijau!*
    `,
    author: "Dr. Ani Wijayanti",
    date: "8 Desember 2024",
    readTime: "5 menit",
    category: "Lingkungan",
    featured: false,
    image: "https://images.unsplash.com/photo-1618477462146-c27c6a5b7ae5?w=800&q=80",
  },
  {
    id: 6,
    title: "Cara Membuat Kerajinan Bambu untuk Pemula",
    slug: "kerajinan-bambu-pemula",
    excerpt:
      "Mulai usaha kerajinan bambu dengan panduan step-by-step untuk pemula. Dari alat yang dibutuhkan hingga teknik dasar pembuatan.",
    content: `
# Cara Membuat Kerajinan Bambu untuk Pemula

## Mengapa Kerajinan Bambu?

Bambu adalah sumber daya alam yang melimpah di Indonesia, termasuk di Desa Windusari. Kerajinan bambu memiliki banyak keunggulan:
- **Ramah lingkungan** - Renewable dan biodegradable
- **Kuat dan tahan lama** - Dengan perawatan tepat bisa bertahan puluhan tahun
- **Nilai ekonomi tinggi** - Harga jual menarik
- **Pasar luas** - Domestik hingga ekspor
- **Modal relatif kecil** - Bahan baku mudah didapat

## Jenis Bambu untuk Kerajinan

### 1. Bambu Petung (Dendrocalamus asper)
- Diameter besar (8-20 cm)
- Cocok untuk furniture
- Dinding tebal dan kuat

### 2. Bambu Tali (Gigantochloa apus)
- Diameter sedang (5-8 cm)
- Elastis dan lentur
- Bagus untuk anyaman

### 3. Bambu Apus (Gigantochloa apus)
- Serat halus dan rapat
- Cocok untuk kerajinan detail
- Tahan rayap

### 4. Bambu Wulung (Gigantochloa atroviolacea)
- Warna hitam alami
- Sangat dekoratif
- Harga lebih mahal

## Alat dan Bahan

### Alat Dasar (Investasi Rp 500.000-1.000.000):
1. **Gergaji bambu** - Rp 50.000-100.000
2. **Pisau/cutter** - Rp 20.000-50.000
3. **Parang** - Rp 75.000-150.000
4. **Amplas** - Berbagai grit, Rp 5.000-10.000
5. **Penggaris dan pensil** - Rp 20.000
6. **Bor listrik** - Rp 300.000-500.000
7. **Obeng set** - Rp 50.000-100.000
8. **Tang** - Rp 30.000-50.000

### Alat Tambahan (Optional):
- Mesin amplas - Rp 500.000-1.500.000
- Mesin potong - Rp 1.000.000-3.000.000
- Mesin belah bambu - Rp 2.000.000-5.000.000

### Bahan:
- Bambu sesuai jenis kerajinan
- Lem kayu/lem bambu
- Paku kecil atau sekrup
- Cat/finishing (vernis, melamin, dll)
- Tali rafia atau rotan (untuk anyaman)

## Persiapan Bambu

### 1. Pemilihan Bambu
- Umur bambu 3-4 tahun (optimal)
- Tidak retak atau berlubang
- Warna merata
- Tidak terserang hama

### 2. Penebangan
- Waktu terbaik: Pagi hari, bulan gelap
- Potong 30 cm dari tanah
- Pangkal untuk konstruksi, ujung untuk anyaman

### 3. Pengawetan
**Metode Tradisional:**
- Rendam air mengalir 1-2 minggu
- Rendam air kapur 3 hari
- Jemur hingga kering

**Metode Modern:**
- Rendaman borax 5% selama 3 hari
- Fumigasi dengan belerang
- Treatment kimia (untuk komersial)

### 4. Pengeringan
- Jemur di tempat teduh 2-4 minggu
- Tidak langsung kena matahari (akan retak)
- Kadar air ideal 10-15%
- Simpan di tempat kering dan berangin

## Teknik Dasar Kerajinan Bambu

### 1. Membelah Bambu
**Alat:** Parang dan palu
**Cara:**
- Tandai garis belahan
- Tusuk ujung bambu dengan parang
- Pukul parang dengan palu
- Belah perlahan mengikuti serat

**Tips:**
- Mulai dari ujung yang lebih kecil
- Gunakan bambu yang sudah kering
- Jangan memaksakan jika serat tidak lurus

### 2. Menyerut Bambu
**Tujuan:** Menghaluskan dan menipiskan
**Cara:**
- Jepit bambu dengan kuat
- Serut mengikuti arah serat
- Gunakan pisau tajam
- Hati-hati jangan sampai terluka

### 3. Membuat Iratan Bambu
**Untuk anyaman:**
- Belah bambu menjadi strip tipis
- Lebar seragam (5mm, 10mm, dll)
- Ketebalan rata
- Amplas halus

### 4. Teknik Anyaman

**Anyaman Sederhana (Plain Weave):**
- Iratan horizontal dan vertikal
- Silang-menyilang 1-1
- Paling mudah untuk pemula

**Anyaman Kepang:**
- Menggunakan 3 atau lebih iratan
- Dikepang seperti rambut
- Untuk handle dan detail

**Anyaman Kepar:**
- Pola diagonal
- Lebih kuat dari plain weave
- Lebih estetik

## Proyek Pemula

### Proyek 1: Tempat Pensil Bambu

**Bahan:**
- Bambu diameter 5-8 cm, panjang 15 cm
- Amplas
- Vernis

**Cara Membuat:**
1. Potong bambu 15 cm
2. Bersihkan bagian dalam
3. Amplas hingga halus
4. Poles dengan vernis
5. Jemur hingga kering
6. Siap digunakan

**Waktu:** 2-3 jam
**Modal:** Rp 5.000
**Harga jual:** Rp 25.000-35.000

### Proyek 2: Lampu Hias Bambu

**Bahan:**
- Bambu diameter 10-15 cm
- Fitting lampu
- Kabel listrik
- Amplas dan cat

**Cara Membuat:**
1. Potong bambu 20-30 cm
2. Lubangi untuk kabel
3. Amplas halus
4. Cat atau vernis
5. Pasang fitting dan kabel
6. Test nyala lampu

**Waktu:** 4-5 jam
**Modal:** Rp 30.000
**Harga jual:** Rp 100.000-150.000

### Proyek 3: Keranjang Bambu Mini

**Bahan:**
- Iratan bambu 1 cm x 30 cm (20 strip)
- Tali rafia
- Lem

**Cara Membuat:**
1. Buat alas anyaman 10x10 cm
2. Tekuk iratan ke atas untuk dinding
3. Anyam dinding setinggi 8 cm
4. Rapikan ujung atas
5. Ikat dengan tali rafia
6. Tambahkan handle (optional)

**Waktu:** 5-6 jam
**Modal:** Rp 15.000
**Harga jual:** Rp 50.000-75.000

### Proyek 4: Vas Bunga Bambu

**Bahan:**
- Bambu diameter 8-12 cm
- Botol plastik bekas (untuk wadah air)
- Tali goni atau rafia
- Vernis

**Cara Membuat:**
1. Potong bambu 25 cm
2. Pasang botol di dalam untuk air
3. Hias bagian luar dengan tali
4. Amplas dan vernis
5. Jemur hingga kering

**Waktu:** 3-4 jam
**Modal:** Rp 10.000
**Harga jual:** Rp 40.000-60.000

## Finishing dan Pewarnaan

### 1. Pengamplasan
- Mulai dari amplas kasar (P80)
- Lanjut sedang (P120)
- Terakhir halus (P220-P400)
- Amplas searah serat
- Bersihkan debu setelah amplas

### 2. Pewarnaan Alami

**Coklat Tua:**
- Rendam air kelapa tua 2 hari
- Jemur hingga kering

**Hitam:**
- Lumuri oli bekas (untuk outdoor)
- Campuran arang dan air

**Merah Kecoklatan:**
- Rebusan kayu secang
- Aplikasikan dengan kuas

### 3. Pewarnaan Modern

**Cat Kayu:**
- Banyak pilihan warna
- Tahan lama
- Mudah diaplikasikan

**Melamine:**
- Glossy/doff
- Warna natural kayu
- Tahan air

**Vernis:**
- Melindungi dari air
- Menonjolkan serat bambu
- Glossy atau matte

### 4. Aplikasi Finishing
1. Pastikan bambu bersih dan kering
2. Aplikasikan base coat (opsional)
3. Amplas halus setelah kering
4. Cat/vernis lapis pertama
5. Amplas halus lagi
6. Lapis kedua dan ketiga
7. Jemur hingga benar-benar kering

## Tips Sukses Bisnis Kerajinan Bambu

### 1. Mulai dari yang Sederhana
- Kuasai teknik dasar dulu
- Jangan langsung ambil order besar
- Belajar dari kesalahan
- Tingkatkan skill bertahap

### 2. Konsistensi Kualitas
- Standarisasi ukuran
- Finishing rapi
- Quality control ketat
- Jaminan kepuasan pelanggan

### 3. Inovasi Produk
- Ikuti trend terkini
- Gabungkan dengan material lain
- Custom order
- Limited edition

### 4. Packaging Menarik
- Kotak atau bungkus cantik
- Include care instruction
- Kartu ucapan terima kasih
- Branding yang konsisten

### 5. Pricing Strategy
**Hitung biaya:**
- Bahan baku
- Tenaga kerja
- Overhead (listrik, sewa, dll)
- Margin keuntungan 30-50%

**Contoh Perhitungan Tempat Pensil:**
- Bambu: Rp 2.000
- Amplas: Rp 1.000
- Vernis: Rp 2.000
- Tenaga: Rp 5.000
- Total: Rp 10.000
- Harga jual: Rp 15.000-20.000 (retail)
- Harga jual: Rp 12.000-15.000 (reseller)

## Pemasaran

### Online:
- Instagram dengan foto produk menarik
- Facebook Marketplace
- Shopee, Tokopedia, Bukalapak
- WhatsApp Business dengan katalog

### Offline:
- Toko oleh-oleh
- Gift shop
- Gallery kerajinan
- Pameran craft

### B2B:
- Hotel dan resort
- Restaurant dan cafe
- Corporate gift
- Event organizer

## Kisah Sukses: Pak Joko - Pengrajin Bambu Windusari

**Background:**
Pak Joko mulai belajar kerajinan bambu tahun 2018 setelah mengikuti pelatihan desa.

**Perjalanan:**
- **2018**: Mulai dengan modal Rp 500.000
- **2019**: Produk mulai dikenal, omzet Rp 3 juta/bulan
- **2020**: Dapat order korporat, omzet naik jadi Rp 15 juta/bulan
- **2021**: Buka toko online, ekspor ke Jepang
- **2024**: Omzet Rp 50 juta/bulan, punya 8 karyawan

**Kunci Sukses:**
- Konsistensi kualitas
- Inovasi desain
- Customer service excellent
- Networking yang baik

**Produk Andalan:**
- Lampu hias bambu: Rp 150.000-300.000
- Kursi bambu: Rp 500.000-1.500.000
- Set tempat tidur bambu: Rp 5.000.000-10.000.000

## Tantangan dan Solusi

### Tantangan:
❌ Persaingan harga dengan produk impor
❌ Musim hujan, bambu susah kering
❌ Hama rayap
❌ Skill perlu waktu

### Solusi:
✅ Fokus kualitas dan custom
✅ Gunakan oven pengering
✅ Treatment anti rayap
✅ Ikut pelatihan dan mentoring

## Kesimpulan

Kerajinan bambu adalah peluang usaha yang menjanjikan dengan modal relatif kecil. Dengan ketekunan, kreativitas, dan konsistensi, siapa saja bisa sukses di bidang ini. Mulai dari yang sederhana, terus belajar, dan jangan takut gagal.

**Bambu adalah emas hijau yang menunggu untuk diolah menjadi karya bernilai tinggi.**

---

*Untuk workshop dan pelatihan kerajinan bambu, hubungi Pak Joko di Sanggar Kerajinan Bambu Windusari.*
    `,
    author: "Pak Joko",
    date: "5 Desember 2024",
    readTime: "9 menit",
    category: "UMKM",
    featured: false,
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&q=80",
  },
  {
    id: 7,
    title: "Pengenalan & Manfaat Bibit Rumput Unggul Gama Umami",
    slug: "pengenalan-bibit-rumput-gama-umami",
    excerpt:
      "Bibit rumput Gama Umami adalah solusi tepat untuk pakan ternak berkualitas tinggi. Pelajari keunggulan dan cara budidayanya di sini.",
    pdfUrl: "/pdfs/Proker 1 - Ayu.pdf",
    content: `# Pengenalan & Manfaat Bibit Rumput Unggul Gama Umami`,
    author: "Ayu Mei S",
    date: "5 Januari 2026",
    readTime: "10 menit",
    category: "Peternakan",
    featured: false,
    image: "/ayu1.jpg",
  },
  {
    id: 8,
    title: "Cara Penanaman Bibit Rumput Unggul Gama Umami",
    slug: "cara-penanaman-bibit-rumput-gama-umami",
    excerpt:
      "Bibit rumput Gama Umami adalah solusi tepat untuk pakan ternak berkualitas tinggi. Pelajari keunggulan dan cara budidayanya di sini.",
    pdfUrl: "/pdfs/Proker 2 - Ayu.pdf",
    content: `# Cara Penanaman Bibit Rumput Unggul Gama Umami`,
    author: "Ayu Mei S",
    date: "5 Januari 2026",
    readTime: "10 menit",
    category: "Peternakan",
    featured: false,
    image: "/ayu2.jpeg",
  },
  {
    id: 9,
    title: "Teknik Pemanenan Bibit Rumput Unggul Gama Umami",
    slug: "teknik-pemanenan-bibit-rumput-gama-umami",
    excerpt:
      "Bibit rumput Gama Umami adalah solusi tepat untuk pakan ternak berkualitas tinggi. Pelajari keunggulan dan cara budidayanya di sini.",
    pdfUrl: "/pdfs/Proker 3 - Ayu.pdf",
    content: `# Teknik Pemanenan Bibit Rumput Unggul Gama Umami`,
    author: "Ayu Mei S",
    date: "5 Januari 2026",
    readTime: "10 menit",
    category: "Peternakan",
    featured: false,
    image: "/ayu3.jpg",
  },
  {
    id: 10,
    title: "test",
    slug: "test",
    excerpt:
      "test",
    pdfUrl: "/pdfs/Report.pdf",
    content: `# Pengenalan & Manfaat Bibit Rumput Unggul Gama Umami`,
    author: "Ayu Mei S",
    date: "5 Januari 2026",
    readTime: "10 menit",
    category: "Peternakan",
    featured: false,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80",
  },
  {
    id: 11,
    title: "test",
    slug: "test",
    excerpt:
      "test",
    pdfUrl: "/pdfs/Report.pdf",
    content: `# Pengenalan & Manfaat Bibit Rumput Unggul Gama Umami`,
    author: "Ayu Mei S",
    date: "5 Januari 2026",
    readTime: "10 menit",
    category: "Peternakan",
    featured: false,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80",
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

export function getAllArticles(): Article[] {
  return articles
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((article) => article.featured)
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((article) => article.category === category)
}
