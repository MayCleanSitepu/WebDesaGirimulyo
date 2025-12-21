import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, User, Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"

const booklets = [
  {
    id: 1,
    title: "Panduan Lengkap Budidaya Padi Organik untuk Petani Windusari",
    slug: "panduan-budidaya-padi-organik",
    excerpt:
      "Pelajari teknik dan metode terbaik untuk menghasilkan padi organik berkualitas tinggi. Dari pemilihan bibit hingga panen, panduan lengkap untuk petani desa.",
    author: "Tim KKN UNNES",
    date: "18 Desember 2024",
    readTime: "8 menit",
    category: "Pertanian",
    featured: true,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80",
  },
  {
    id: 2,
    title: "Strategi Pemasaran Digital untuk UMKM Desa",
    slug: "strategi-pemasaran-digital-umkm",
    excerpt:
      "Tingkatkan penjualan produk UMKM Anda dengan memanfaatkan platform digital. Panduan praktis untuk memulai pemasaran online yang efektif.",
    author: "Ahmad Rizki",
    date: "15 Desember 2024",
    readTime: "6 menit",
    category: "Ekonomi",
    featured: true,
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&q=80",
  },
  {
    id: 3,
    title: "Sejarah dan Perkembangan Desa Windusari",
    slug: "sejarah-desa-windusari",
    excerpt:
      "Menelusuri perjalanan Desa Windusari dari masa ke masa. Dari desa tradisional hingga menjadi desa modern yang terus berkembang.",
    author: "Budi Santoso",
    date: "12 Desember 2024",
    readTime: "10 menit",
    category: "Sejarah",
    featured: false,
    image: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=400&q=80",
  },
  {
    id: 4,
    title: "Tips Mengolah Hasil Pertanian Menjadi Produk Bernilai Tinggi",
    slug: "mengolah-hasil-pertanian",
    excerpt:
      "Jangan hanya jual hasil panen mentah! Pelajari cara mengolah hasil pertanian menjadi produk olahan yang lebih menguntungkan.",
    author: "Siti Nurhaliza",
    date: "10 Desember 2024",
    readTime: "7 menit",
    category: "Pertanian",
    featured: false,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80",
  },
  {
    id: 5,
    title: "Pentingnya Menjaga Kebersihan Lingkungan Desa",
    slug: "kebersihan-lingkungan-desa",
    excerpt:
      "Lingkungan bersih adalah kunci kesehatan masyarakat. Mari bersama-sama menjaga kebersihan desa untuk generasi mendatang.",
    author: "Dr. Ani Wijayanti",
    date: "8 Desember 2024",
    readTime: "5 menit",
    category: "Lingkungan",
    featured: false,
    image: "https://images.unsplash.com/photo-1618477462146-c27c6a5b7ae5?w=400&q=80",
  },
  {
    id: 6,
    title: "Cara Membuat Kerajinan Bambu untuk Pemula",
    slug: "kerajinan-bambu-pemula",
    excerpt:
      "Mulai usaha kerajinan bambu dengan panduan step-by-step untuk pemula. Dari alat yang dibutuhkan hingga teknik dasar pembuatan.",
    author: "Pak Joko",
    date: "5 Desember 2024",
    readTime: "9 menit",
    category: "UMKM",
    featured: false,
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&q=80",
  },
]

export default function BookletPage() {
  const featuredBooklets = booklets.filter((b) => b.featured)
  const regularBooklets = booklets.filter((b) => !b.featured)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Booklet & Artikel</h1>
            <p className="text-lg text-primary-foreground/90">
              Kumpulan panduan, artikel, dan informasi bermanfaat untuk kemajuan masyarakat Desa Windusari
            </p>
          </div>
        </div>
      </section>

      {/* Featured Booklets */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Artikel Unggulan</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {featuredBooklets.map((booklet) => (
                <Card key={booklet.id} className="overflow-hidden hover:shadow-xl transition-all group">
                  <div className="h-64 bg-muted relative overflow-hidden">
                    <Image
                      src={booklet.image}
                      alt={booklet.title}
                      width={400}
                      height={256}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyovS/xV/ByXCrr1bwurf6/1oO//9k="
                    />
                    <Badge className="absolute top-4 left-4 bg-primary">{booklet.category}</Badge>
                  </div>
                  <CardHeader className="space-y-3">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{booklet.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{booklet.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{booklet.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl leading-tight group-hover:text-primary transition-colors">
                      {booklet.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">{booklet.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="gap-2 px-0 hover:gap-3 transition-all">
                      Baca Selengkapnya
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Regular Booklets */}
            <h2 className="text-2xl font-bold mb-8">Semua Artikel</h2>
            <div className="space-y-6">
              {regularBooklets.map((booklet) => (
                <Card key={booklet.id} className="overflow-hidden hover:shadow-lg transition-all group">
                  <div className="md:flex">
                    <div className="md:w-80 h-56 md:h-auto bg-muted relative overflow-hidden flex-shrink-0">
                      <Image
                        src={booklet.image}
                        alt={booklet.title}
                        width={320}
                        height={224}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyovS/xV/ByXCrr1bwurf6/1oO//9k="
                      />
                    </div>
                    <div className="flex-1">
                      <CardHeader className="space-y-3">
                        <Badge className="w-fit">{booklet.category}</Badge>
                        <CardTitle className="text-xl md:text-2xl leading-tight group-hover:text-primary transition-colors">
                          {booklet.title}
                        </CardTitle>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{booklet.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{booklet.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{booklet.readTime}</span>
                          </div>
                        </div>
                        <CardDescription className="leading-relaxed">{booklet.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="ghost" className="gap-2 px-0 hover:gap-3 transition-all">
                          Baca Selengkapnya
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ingin Berkontribusi?</h2>
            <p className="text-muted-foreground mb-6">
              Kami mengundang warga desa, pelaku UMKM, dan mahasiswa KKN untuk berbagi pengetahuan dan pengalaman
              melalui artikel atau panduan. Hubungi kami untuk informasi lebih lanjut.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <div>
                <p className="font-medium">Email</p>
                <p className="text-muted-foreground">info@desawindusari.id</p>
              </div>
              <div>
                <p className="font-medium">WhatsApp</p>
                <p className="text-muted-foreground">+62 812-3456-7890</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
