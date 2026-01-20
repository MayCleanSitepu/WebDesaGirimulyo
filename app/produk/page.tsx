'use client'

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Susu Segar Pasteurisasi",
    category: "Produk Susu",
    description:
      "Susu sapi segar yang telah dipasteurisasi dengan standar kebersihan tinggi. Diproduksi langsung dari peternakan sapi perah lokal dan dikemas dalam kondisi higienis.",
    features: ["Segar", "Pasteurisasi", "Tanpa Pengawet"],
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80",
    whatsapp: "6289681218436",
  },
  {
    id: 2,
    name: "Yogurt Susu Sapi",
    category: "Produk Olahan",
    description:
      "Yogurt premium dari susu sapi murni dengan berbagai varian rasa. Kaya probiotik dan baik untuk kesehatan pencernaan.",
    features: ["Probiotik", "Berbagai Rasa", "Sehat"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80",
    whatsapp: "6285678912345",
  },
  {
    id: 3,
    name: "Keju Cheddar Lokal",
    category: "Produk Olahan",
    description:
      "Keju cheddar berkualitas tinggi hasil olahan susu sapi perah desa. Proses pembuatan menggunakan teknik tradisional dengan sentuhan modern.",
    features: ["Kualitas Premium", "Rasa Khas", "Bersertifikat"],
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&q=80",
    whatsapp: "6287712345678",
  },
  {
    id: 4,
    name: "Susu UHT Kemasan",
    category: "Produk Susu",
    description:
      "Susu UHT dalam kemasan praktis dengan daya tahan lama. Cocok untuk konsumsi sehari-hari dan mudah dibawa kemana saja.",
    features: ["Tahan Lama", "Praktis", "Nutrisi Lengkap"],
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80",
    whatsapp: "6289876543210",
  },
  {
    id: 5,
    name: "Mentega Sapi Murni",
    category: "Produk Olahan",
    description:
      "Mentega premium dari susu sapi murni tanpa campuran bahan lain. Ideal untuk memasak, membuat kue, dan berbagai keperluan kuliner.",
    features: ["Murni 100%", "Aroma Khas", "Tanpa Pengawet"],
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&q=80",
    whatsapp: "6282134567891",
  },
  {
    id: 6,
    name: "Kefir Susu Sapi",
    category: "Produk Olahan",
    description: "Minuman fermentasi susu kaya probiotik. Memiliki tekstur creamy dan rasa yang unik, sangat baik untuk kesehatan pencernaan.",
    features: ["Probiotik Tinggi", "Fermentasi Alami", "Sehat"],
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&q=80",
    whatsapp: "6285234567892",
  },
  {
    id: 7,
    name: "Es Krim Susu Sapi",
    category: "Produk Olahan",
    description:
      "Es krim premium dengan berbagai varian rasa yang terbuat dari susu sapi segar. Tekstur lembut dan rasa yang nikmat.",
    features: ["Berbagai Rasa", "Creamy", "Susu Segar"],
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&q=80",
    whatsapp: "6287898765432",
  },
  {
    id: 8,
    name: "Susu Kental Manis",
    category: "Produk Olahan",
    description: "Susu kental manis dari susu sapi murni. Cocok untuk campuran minuman, topping dessert, atau diminum langsung.",
    features: ["Manis Alami", "Tekstur Kental", "Serbaguna"],
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80",
    whatsapp: "6281298765432",
  },
  {
    id: 9,
    name: "Susu Bubuk Full Cream",
    category: "Produk Susu",
    description:
      "Susu bubuk full cream dengan kandungan nutrisi lengkap. Praktis dan tahan lama, cocok untuk segala usia.",
    features: ["Nutrisi Lengkap", "Tahan Lama", "Praktis"],
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&q=80",
    whatsapp: "6285712345679",
  },
]



export default function ProdukPage() {
  const handleClick = (productName: string, whatsappNumber: string) => {
    const message = `Halo, saya tertarik dengan ${productName}. Bisa minta informasi lebih lanjut?`
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

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
                    <div className="w-full">
                    <Button 
                      onClick={() => handleClick(product.name, product.whatsapp)}
                      className="w-full flex items-center justify-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      Kontak Whatsapp
                    </Button>
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
