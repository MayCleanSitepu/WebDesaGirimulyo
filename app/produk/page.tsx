import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Beras Organik Premium",
    category: "Pertanian",
    description:
      "Beras organik berkualitas tinggi yang ditanam tanpa pestisida kimia. Proses penanaman menggunakan pupuk alami dan metode pertanian ramah lingkungan.",
    features: ["Tanpa Pestisida", "Kualitas Premium", "Bersertifikat"],
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80",
  },
  {
    id: 2,
    name: "Kerajinan Bambu",
    category: "UMKM",
    description:
      "Berbagai produk kerajinan dari bambu seperti tas, tempat pensil, dan dekorasi rumah. Dikerjakan oleh pengrajin lokal dengan teknik tradisional.",
    features: ["Handmade", "Ramah Lingkungan", "Desain Unik"],
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&q=80",
  },
  {
    id: 3,
    name: "Kopi Robusta Windusari",
    category: "Pertanian",
    description:
      "Kopi robusta pilihan dari kebun kopi warga desa. Diproses dengan metode natural untuk menghasilkan cita rasa yang khas dan beraroma harum.",
    features: ["Biji Pilihan", "Aroma Khas", "Proses Natural"],
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&q=80",
  },
  {
    id: 4,
    name: "Madu Hutan Asli",
    category: "Pertanian",
    description:
      "Madu murni hasil ternak lebah dari hutan sekitar desa. Kaya nutrisi dan memiliki khasiat kesehatan yang baik.",
    features: ["Madu Murni", "Kaya Nutrisi", "Tanpa Campuran"],
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&q=80",
  },
  {
    id: 5,
    name: "Emping Melinjo",
    category: "UMKM",
    description:
      "Emping melinjo gurih dan renyah hasil olahan warga. Dibuat dari biji melinjo pilihan dengan resep turun-temurun.",
    features: ["Renyah", "Tanpa Pengawet", "Resep Tradisional"],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80",
  },
  {
    id: 6,
    name: "Sayuran Hidroponik",
    category: "Pertanian",
    description: "Sayuran segar hasil pertanian hidroponik modern. Selalu segar dan bebas dari pestisida berbahaya.",
    features: ["Segar", "Tanpa Pestisida", "Metode Modern"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
  },
  {
    id: 7,
    name: "Keripik Singkong",
    category: "UMKM",
    description:
      "Keripik singkong dengan berbagai varian rasa. Diproduksi oleh UMKM lokal dengan standar kebersihan yang baik.",
    features: ["Berbagai Rasa", "Higienis", "Harga Terjangkau"],
    image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&q=80",
  },
  {
    id: 8,
    name: "Gula Aren",
    category: "Pertanian",
    description: "Gula aren murni dari pohon aren lokal. Lebih sehat dan memiliki rasa manis alami yang khas.",
    features: ["Gula Murni", "Sehat", "Manis Alami"],
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&q=80",
  },
  {
    id: 9,
    name: "Anyaman Pandan",
    category: "UMKM",
    description:
      "Produk anyaman dari daun pandan seperti tas, tempat tisu, dan keranjang. Karya seni dari ibu-ibu PKK desa.",
    features: ["Handmade", "Seni Tradisional", "Multifungsi"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
  },
]

export default function ProdukPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Produk Andalan Desa</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl">
            Berbagai produk unggulan dari hasil pertanian dan UMKM masyarakat Desa Girimulyo
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="h-56 bg-muted relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={224}
                    className="w-full h-full object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyovS/xV/ByXCrr1bwurf6/1oO//9k="
                  />
                  <Badge className="absolute top-4 right-4 bg-primary">{product.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Tertarik dengan Produk Kami?</h2>
            <p className="text-muted-foreground mb-6">
              Untuk informasi lebih lanjut mengenai pemesanan dan harga produk, silakan hubungi kontak desa atau
              kunjungi langsung kantor desa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-sm">
                <p className="font-medium">Telepon:</p>
                <p className="text-muted-foreground">(0293) 123456</p>
              </div>
              <div className="text-sm">
                <p className="font-medium">Email:</p>
                <p className="text-muted-foreground">info@desa.girimulyo.id</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
