"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Users, Calendar, MapPinned, Play, Pause, Volume2, VolumeX } from "lucide-react"
import { useRef, useState } from "react"

const featuredProducts = [
  {
    id: 7,
    name: "Es Krim Susu Sapi",
    category: "Produk Olahan",
    description:
      "Es krim premium dengan berbagai varian rasa yang terbuat dari susu sapi segar. Tekstur lembut dan rasa yang nikmat.",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&q=80",
  },
  {
    id: 8,
    name: "Susu Kental Manis",
    category: "Produk Olahan",
    description: "Susu kental manis dari susu sapi murni. Cocok untuk campuran minuman, topping dessert, atau diminum langsung.",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80",
  },
  {
    id: 9,
    name: "Susu Bubuk Full Cream",
    category: "Produk Susu",
    description:
      "Susu bubuk full cream dengan kandungan nutrisi lengkap. Praktis dan tahan lama, cocok untuk segala usia.",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&q=80",
  },
]

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [showControls, setShowControls] = useState(false)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleVideoClick = () => {
    setShowControls(!showControls)
    // Auto-hide controls after 3 seconds on mobile
    if (!showControls) {
      setTimeout(() => {
        setShowControls(false)
      }, 3000)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section with Video */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-[url('/splash.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        
        <div className="container mx-auto px-4 py-4 md:py-8 relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 lg:items-start min-h-[calc(100vh-120px)]">
            
            {/* Heading - Order 1 on mobile, Order 2 on desktop */}
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-white/10 border border-white/30 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary-foreground">Website Resmi</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6 text-balance leading-tight">
                DESA GIRIMULYO
              </h1>
            </div>

            {/* Video Section - Order 2 on mobile, Order 1 on desktop */}
            <div className="relative lg:pt-20 group order-2 lg:order-1 lg:row-span-3">
              <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-white/30">
                <video
                  ref={videoRef}
                  className="w-full h-auto cursor-pointer"
                  loop
                  playsInline
                  preload="metadata"
                  muted
                  onClick={handleVideoClick}
                >
                  <source src="/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video Controls */}
                <div className={`absolute bottom-4 right-4 flex gap-2 transition-opacity duration-300 z-10 ${showControls ? 'opacity-100' : 'opacity-0'} md:opacity-0 md:group-hover:opacity-100`}>
                  <button
                    onClick={togglePlay}
                    className="p-3 bg-black/70 hover:bg-black/90 rounded-full backdrop-blur-sm transition-all"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 text-white" />
                    ) : (
                      <Play className="w-5 h-5 text-white" />
                    )}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="p-3 bg-black/70 hover:bg-black/90 rounded-full backdrop-blur-sm transition-all"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5 text-white" />
                    ) : (
                      <Volume2 className="w-5 h-5 text-white" />
                    )}
                  </button>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
            </div>

            {/* Description and Buttons - Order 3 on mobile, Order 3 on desktop */}
            <div className="space-y-6 order-3 lg:order-3">
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
                Temukan keindahan dan potensi Desa Girimulyo. Jelajahi informasi, produk unggulan, dan berbagai kegiatan masyarakat desa yang harmonis dan berkembang.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8" asChild>
                  <Link href="/profil">
                    Jelajahi Sekarang <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/30 hover:bg-white/20 text-white font-semibold px-8 backdrop-blur-sm"
                  asChild
                >
                  <Link href="/produk">Lihat Produk</Link>
                </Button>
              </div>

              {/* Stats or Quick Info */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-primary">3,500+</div>
                  <div className="text-sm text-gray-300">Penduduk</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-primary">450</div>
                  <div className="text-sm text-gray-300">Hektar</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-gray-300">UMKM</div>
                </div>
              </div>
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
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-accent relative">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    width={400}
                    height={192}
                    className="w-full h-full object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyovS/xV/ByXCrr1bwurf6/1oO//9k="
                  />
                </div>
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            ))}
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
                    <CardDescription>20 Desember - 7 Februari 2026</CardDescription>
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