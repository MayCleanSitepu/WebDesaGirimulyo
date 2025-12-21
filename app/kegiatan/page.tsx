import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Heart, BookOpen, Sprout, Award } from "lucide-react"
import Image from "next/image"

const activities = [
  {
    id: 1,
    title: "Posyandu Balita",
    date: "15 Desember 2024",
    category: "Kesehatan",
    description:
      "Kegiatan pemeriksaan kesehatan rutin balita, pemberian imunisasi, dan monitoring tumbuh kembang anak di Balai Desa Windusari.",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1609189608032-40efe68e4a05?w=500&q=80",
  },
  {
    id: 2,
    title: "Program KKN UNNES",
    date: "1-31 Desember 2024",
    category: "Pendidikan",
    description:
      "Mahasiswa KKN Universitas Negeri Semarang melaksanakan program pengabdian masyarakat di bidang pendidikan, kesehatan, dan pemberdayaan ekonomi.",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&q=80",
  },
  {
    id: 3,
    title: "Pelatihan UMKM Digital",
    date: "10 Desember 2024",
    category: "Ekonomi",
    description:
      "Pelatihan pemasaran digital untuk pelaku UMKM desa agar dapat memasarkan produk secara online dan memperluas jangkauan pasar.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500&q=80",
  },
  {
    id: 4,
    title: "Gotong Royong Bersih Desa",
    date: "8 Desember 2024",
    category: "Lingkungan",
    description:
      "Kegiatan kerja bakti membersihkan lingkungan desa, saluran air, dan area publik untuk menjaga kebersihan dan kesehatan lingkungan.",
    icon: Sprout,
    image: "https://images.unsplash.com/photo-1618477462146-c27c6a5b7ae5?w=500&q=80",
  },
  {
    id: 5,
    title: "Rapat Koordinasi RT/RW",
    date: "5 Desember 2024",
    category: "Pemerintahan",
    description:
      "Rapat koordinasi bulanan pengurus RT/RW membahas program kerja, permasalahan warga, dan rencana pembangunan desa.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&q=80",
  },
  {
    id: 6,
    title: "Penyuluhan Pertanian Organik",
    date: "1 Desember 2024",
    category: "Pertanian",
    description:
      "Penyuluhan dan pelatihan teknik pertanian organik untuk meningkatkan kualitas hasil panen dan ramah lingkungan.",
    icon: Sprout,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&q=80",
  },
  {
    id: 7,
    title: "Lomba 17 Agustus",
    date: "17 Agustus 2024",
    category: "Sosial",
    description:
      "Perayaan HUT RI dengan berbagai perlombaan tradisional seperti balap karung, panjat pinang, dan tarik tambang.",
    icon: Award,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&q=80",
  },
  {
    id: 8,
    title: "Kelas Literasi Anak",
    date: "Setiap Sabtu",
    category: "Pendidikan",
    description:
      "Program rutin setiap Sabtu untuk meningkatkan minat baca anak-anak desa melalui dongeng dan kegiatan kreatif.",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&q=80",
  },
  {
    id: 9,
    title: "Senam Lansia",
    date: "Setiap Jumat",
    category: "Kesehatan",
    description:
      "Kegiatan senam rutin untuk lansia guna menjaga kesehatan dan kebugaran tubuh serta mempererat silaturahmi.",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80",
  },
]

const getIconColor = (category: string) => {
  switch (category) {
    case "Kesehatan":
      return "text-red-600"
    case "Pendidikan":
      return "text-blue-600"
    case "Ekonomi":
      return "text-green-600"
    case "Lingkungan":
      return "text-emerald-600"
    case "Pemerintahan":
      return "text-purple-600"
    case "Pertanian":
      return "text-amber-600"
    case "Sosial":
      return "text-pink-600"
    default:
      return "text-gray-600"
  }
}

export default function KegiatanPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kegiatan Desa</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl">
            Berbagai program dan kegiatan yang dilaksanakan di Desa Windusari untuk kemajuan dan kesejahteraan
            masyarakat
          </p>
        </div>
      </section>

      {/* Activities Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {activities.map((activity) => {
              const IconComponent = activity.icon
              return (
                <Card key={activity.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-muted relative">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      width={500}
                      height={192}
                      className="w-full h-full object-cover"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyovS/xV/ByXCrr1bwurf6/1oO//9k="
                    />
                    <Badge className="absolute top-4 right-4 bg-background text-foreground">{activity.category}</Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-start gap-3 mb-2">
                      <div className={`p-2 bg-muted rounded-lg ${getIconColor(activity.category)}`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1">{activity.title}</CardTitle>
                        <CardDescription className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {activity.date}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{activity.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ikuti Kegiatan Desa</h2>
            <p className="text-muted-foreground mb-6">
              Masyarakat desa diharapkan dapat berpartisipasi aktif dalam berbagai kegiatan desa. Untuk informasi jadwal
              kegiatan terbaru, silakan hubungi perangkat desa atau pantau pengumuman di balai desa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <div>
                <p className="font-medium">Sekretariat Desa</p>
                <p className="text-muted-foreground">Jl. Raya Windusari No. 1</p>
              </div>
              <div>
                <p className="font-medium">Telepon</p>
                <p className="text-muted-foreground">(0293) 123456</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
