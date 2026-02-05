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
    id: 2,
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
    featured: true,
    image: "/ayu2.jpeg",
  },
  {
    id: 3,
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
    id: 4,
    title: "Desain dan Standarisasi Kandang Sapi Perah",
    slug: "proker-1-raihan",
    excerpt:
      "Dokumentasi program kerja 1 dari Raihan untuk pengembangan desa.",
    pdfUrl: "/pdfs/Proker 1 - Raihan.pdf",
    content: `# Desain dan Standarisasi Kandang Sapi Perah

---

*Untuk informasi lebih lengkap, silakan unduh dokumen PDF di bawah.*
    `,
    author: "Raihan Pradipta",
    date: "23 Januari 2026",
    readTime: "5 menit",
    category: "Program Kerja",
    featured: true,
    image: "/raihan1.jpeg",
  },
  {
    id: 5,
    title: "Modul Komunikasi Efektif",
    slug: "modul-komunikasi-efektif",
    excerpt:
    "Booklet ini berisi materi komunikasi efektif yang mudah dipahami, mencakup active listening dan komunikasi asertif. Dilengkapi contoh penerapan dalam kehidupan sehari-hari untuk membangun hubungan saling menghargai dan terbuka dalam suatu kelompok.",
    pdfUrl: "/pdfs/Proker 1 - Ais.pdf",
    content: `# Modul Komunikasi Efektif

---

*Untuk informasi lebih lengkap, silakan unduh dokumen PDF di bawah.*
    `,
    author: "'Aisyah Khayyiratunnisa",
    date: "23 Januari 2026",
    readTime: "5 menit",
    category: "Program Kerja",
    featured: false,
    image: "/ais1.jpeg",
  },
  {
    id: 6,
    title: "Profile Desa Girimulyo",
    slug: "profile-desa-girimulyo",
    excerpt:
    "Mengenal profil lengkap Desa Girimulyo, mulai dari sejarah, geografis, demografi, hingga potensi dan program pengembangannya.",
    pdfUrl: "/pdfs/Proker 1 - Fifi.pdf",
    content: `# Profile Desa Girimulyo

## Pendahuluan

Program kerja ini disusun sebagai bagian dari upaya pengembangan dan pemberdayaan masyarakat Desa Girimulyo.

## Tujuan Program

Program ini bertujuan untuk meningkatkan kualitas kehidupan masyarakat desa melalui berbagai kegiatan pemberdayaan dan pengembangan potensi lokal.

## Pelaksanaan

Detail pelaksanaan program dapat dilihat pada dokumen PDF yang terlampir.

---

*Untuk informasi lebih lengkap, silakan unduh dokumen PDF di bawah.*
    `,
    author: "Aruhana Windusari",
    date: "23 Januari 2026",
    readTime: "5 menit",
    category: "Program Kerja",
    featured: false,
    image: "/fifi1.jpeg",
  },
  {
    id: 7,
    title: "panduan bagi peternak sapi perah untuk memanfaatkan ChatGPT sebagai asisten digital harian",
    slug: "panduan-peternak-sapi-perah-memanfaatkan-chatgpt",
    excerpt:
      "Booklet Tanya AI sang Robot Pintar karya Tim KKN PPM UGM 2025 menyajikan panduan bagi peternak sapi perah untuk memanfaatkan ChatGPT sebagai asisten digital harian. Modul ini memberikan tutorial praktis penggunaan ponsel untuk konsultasi pakan, kesehatan, hingga manajemen usaha secara mandiri selama 24 jam. Melalui metode bertanya S-P-K, teknologi ini diposisikan sebagai jembatan ilmu guna meningkatkan efisiensi dan keuntungan peternakan tanpa mengesampingkan pengalaman peternak itu sendiri",
    pdfUrl: "/pdfs/Proker 1 - Haidar.pdf",
    content: `# panduan bagi peternak sapi perah untuk memanfaatkan ChatGPT sebagai asisten digital harian

## Pendahuluan

Program kerja ini disusun sebagai bagian dari upaya pengembangan dan pemberdayaan masyarakat Desa Girimulyo.

## Tujuan Program

Program ini bertujuan untuk meningkatkan kualitas kehidupan masyarakat desa melalui berbagai kegiatan pemberdayaan dan pengembangan potensi lokal.

## Pelaksanaan

Detail pelaksanaan program dapat dilihat pada dokumen PDF yang terlampir.

---

*Untuk informasi lebih lengkap, silakan unduh dokumen PDF di bawah.*
    `,
    author: "Haidar",
    date: "23 Januari 2026",
    readTime: "5 menit",
    category: "Program Kerja",
    featured: false,
    image: "/haidar1.jpeg",
  },
  {
    id: 8,
    title: "Pedoman SOP dan Pembagian Tugas Kelompok Peternak",
    slug: "pedoman-sop-pembagian-tugas-kelompok-peternak",
    excerpt:
      "Modul ini berisi SOP peternakan dan pembagian kerja kelompok peternak yang memuat tentang kesehatan hewan, kebersihan dan pemerahan susu, nutrisi, kesejahteraan hewan, lingkungan, serta pengelolaan sosial dan ekonomi yang berdasarkan standarisasi internasional.",
    pdfUrl: "/pdfs/Proker 2 - Ais.pdf",
    content: `# Pedoman SOP dan Pembagian Tugas Kelompok Peternak

---

*Untuk informasi lebih lengkap, silakan unduh dokumen PDF di bawah.*
    `,
    author: "'Aisyah Khayyiratunnisa",
    date: "23 Januari 2026",
    readTime: "5 menit",
    category: "Program Kerja",
    featured: false,
    image: "/ais2.jpeg",
  },
  {
    id: 9,
    title: "Pengelolaan Limbah Peternakan Sapi Perah",
    slug: "pengelolaan-limbah-peternakan-sapi-perah",
    excerpt:
      "Modul ini membahas pengelolaan limbah peternakan sapi perah yang meliputi identifikasi jenis limbah, metode pengelolaan, pemanfaatan limbah sebagai pupuk organik, serta dampak lingkungan dan kesehatan masyarakat.",
    pdfUrl: "/Pengolahan.png",
    content: `# Pengelolaan Limbah Peternakan Sapi Perah`,
    author: "M. Kimi P.",
    date: "5 Januari 2026",
    readTime: "10 menit",
    category: "Peternakan",
    featured: false,
    image: "/Pengolahan.png",
  },
  {
    id: 10,
    title: "Manfaat Susu Sapi Perah bagi Kesehatan",
    slug: "manfaat-susu-sapi-perah-bagi-kesehatan",
    excerpt:
      "Modul ini membahas manfaat susu sapi perah bagi kesehatan yang meliputi kandungan nutrisi, efek positif pada sistem kekebalan tubuh, serta peranannya dalam pencegahan berbagai penyakit.",
    pdfUrl: "/proker 1 - Farhan.pdf",
    content: `# Manfaat Susu Sapi Perah bagi Kesehatan`,
    author: "Farhan Akmal H.",
    date: "5 Januari 2026",
    readTime: "10 menit",
    category: "Peternakan",
    featured: false,
    image: "/ManfaatSusu.png",
  },
  {
    id: 11,
    title: "Pengembangan Program Edu Agrowisata di Desa Girimulyo",
    slug: "pengembangan-program-edu-agrowisata-di-desa-girimulyo",
    excerpt:
      "Modul ini membahas pengembangan program edu agrowisata di Desa Girimulyo yang meliputi konsep, implementasi, manfaat, serta dampak sosial dan ekonomi bagi masyarakat setempat.",
    pdfUrl: "/Proker 1 - Jeremy.pdf",
    content: `# Pengembangan Program Edu Agrowisata di Desa Girimulyo`,
    author: "Jeremy Dharma E.",
    date: "5 Januari 2026",
    readTime: "10 menit",
    category: "Peternakan",
    featured: false,
    image: "/EduAgrowisata.png",
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
