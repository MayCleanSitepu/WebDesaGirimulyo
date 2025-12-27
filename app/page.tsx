import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Users, Calendar, MapPinned } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/splash.jpg')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
          Website Resmi Desa Girimulyo
        </h1>
        <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 text-pretty">
          Informasi, Potensi, dan Kegiatan Desa Girimulyo
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/profil">
          Profil Desa <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20"
          >
            <Link href="/produk">Produk Andalan</Link>
          </Button>
        </div>
          </div>
        </div>
      </section>

      {/* Tentang Desa */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tentang Desa Girimulyo</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <Image 
          src="/splash.jpg" 
          alt="Desa Girimulyo - Traditional Indonesian Village" 
          width={600}
          height={400}
          className="rounded-lg shadow-lg w-full object-cover"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyovS/xV/ByXCrr1bwurf6/1oO//9k="
          priority
            />
          </div>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Desa Girimulyo terletak di Kecamatan Girimulyo, Kabupaten Magelang, Jawa Tengah. Desa kami dikelilingi
                  oleh pemandangan alam yang indah dengan lahan pertanian yang subur.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Dengan luas wilayah sekitar 450 hektar dan jumlah penduduk lebih dari 3.500 jiwa, Desa Girimulyo terus
                  berkembang menjadi desa yang mandiri dan sejahtera dengan mengandalkan potensi pertanian dan UMKM
                  lokal.
                </p>
                <Button asChild variant="default" className="mt-4">
                  <Link href="/profil">
                    Selengkapnya <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produk Andalan */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Produk Andalan Desa</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Berbagai produk unggulan dari hasil pertanian dan UMKM masyarakat Desa Girimulyo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-accent relative">
                <Image 
                  src="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80" 
                  alt="Beras Organik - Organic Rice Farming" 
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyovS/xV/ByXCrr1bwurf6/1oO//9k="
                />
              </div>
              <CardHeader>
                <CardTitle>Beras Organik</CardTitle>
                <CardDescription>Produk Pertanian</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Beras organik berkualitas tinggi hasil pertanian warga dengan metode ramah lingkungan.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-accent relative">
                <Image 
                  src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&q=80" 
                  alt="Kerajinan Bambu - Traditional Bamboo Crafts" 
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyovS/xV/ByXCrr1bwurf6/1oO//9k="
                />
              </div>
              <CardHeader>
                <CardTitle>Kerajinan Bambu</CardTitle>
                <CardDescription>UMKM Lokal</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Berbagai produk kerajinan bambu handmade dengan desain modern dan tradisional.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-accent relative">
                <Image
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80"
                  alt="Makanan Tradisional - Traditional Indonesian Food"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyovS/xV/ByXCrr1bwurf6/1oO//9k="
                />
              </div>
              <CardHeader>
                <CardTitle>Makanan Tradisional</CardTitle>
                <CardDescription>Kuliner Khas</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Aneka makanan ringan dan kudapan tradisional khas Desa Girimulyo yang lezat.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="default" size="lg">
              <Link href="/produk">
                Lihat Semua Produk <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Kegiatan Desa Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kegiatan Desa</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Berbagai program dan kegiatan yang dilaksanakan di Desa Girimulyo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Posyandu Balita</CardTitle>
                    <CardDescription>15 Desember 2024</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Kegiatan pemeriksaan kesehatan rutin balita dan pemberian imunisasi di Balai Desa.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Program KKN UGM 2025</CardTitle>
                    <CardDescription>1-31 Desember 2024</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Mahasiswa KKN UGM 2025 melaksanakan program pengabdian masyarakat di berbagai bidang.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="/kegiatan">
                Lihat Semua Kegiatan <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Story Maps Preview */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <MapPinned className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Peta Desa Girimulyo</h2>
              <p className="text-muted-foreground">
                Jelajahi peta interaktif Desa Girimulyo untuk melihat batas wilayah, potensi desa, dan informasi
                geografis lainnya
              </p>
            </div>
            <Button asChild size="lg" variant="default">
              <Link href="/peta">
                Buka Story Maps <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
