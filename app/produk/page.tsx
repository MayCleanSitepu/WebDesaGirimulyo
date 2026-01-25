'use client'

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const suppliers = [
  {
    id: 1,
    name: "Nur Cholifah",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "015/005",
    whatsapp: "628xxxxxxxxxx",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80",
    description: "Supplier susu sapi perah berkualitas dengan pengalaman bertahun-tahun",
  },
  {
    id: 2,
    name: "Siti Ismiyah",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "014/005",
    whatsapp: "628xxxxxxxxxx",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80",
    description: "Menyediakan susu segar setiap hari dengan standar kebersihan tinggi",
  },
  {
    id: 3,
    name: "Ummi Chabibah",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "002/003",
    whatsapp: "628xxxxxxxxxx",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80",
    description: "Peternak sapi perah profesional dengan produksi susu berkualitas",
  },
  {
    id: 4,
    name: "Rumiyah",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "013/005",
    whatsapp: "628xxxxxxxxxx",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80",
    description: "Mengutamakan kualitas dan kesegaran susu untuk kepuasan pelanggan",
  },
  {
    id: 5,
    name: "Nuriyah",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "013/005",
    whatsapp: "628xxxxxxxxxx",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80",
    description: "Supplier susu sapi murni tanpa bahan campuran tambahan",
  },
  {
    id: 6,
    name: "Istiqomah",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "014/005",
    whatsapp: "628xxxxxxxxxx",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80",
    description: "Berpengalaman dalam menghasilkan susu sapi dengan kualitas terbaik",
  },
  {
    id: 7,
    name: "Nurul Hikmah",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "014/005",
    whatsapp: "628xxxxxxxxxx",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80",
    description: "Menyediakan susu segar dari peternakan sendiri setiap hari",
  },
  {
    id: 8,
    name: "Pawit",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "015/005",
    whatsapp: "628xxxxxxxxxx",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80",
    description: "Peternakan sapi perah modern dengan sistem kebersihan terjaga",
  },
  {
    id: 9,
    name: "Muniyatun",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "016/005",
    whatsapp: "628xxxxxxxxxx",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80",
    description: "Supplier susu sapi perah terpercaya dengan harga kompetitif",
  },
  {
    id: 10,
    name: "Umiyati",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "015/005",
    whatsapp: "628xxxxxxxxxx",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80",
    description: "Menghasilkan susu berkualitas tinggi dari sapi yang sehat",
  },
  {
    id: 11,
    name: "Isrowiyah",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "002/005",
    whatsapp: "628xxxxxxxxxx",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80",
    description: "Pemasok susu segar dengan proses pemerahan yang higienis",
  },
  {
    id: 12,
    name: "Soimah",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "013/015",
    whatsapp: "628xxxxxxxxxx",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80",
    description: "Produksi susu sapi murni dengan standar kualitas internasional",
  },
  {
    id: 13,
    name: "Roikah",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "016/005",
    whatsapp: "628xxxxxxxxxx",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80",
    description: "Menyediakan susu sapi segar langsung dari peternakan lokal",
  },
  {
    id: 14,
    name: "Asriyah",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "016/005",
    whatsapp: "628xxxxxxxxxx",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80",
    description: "Supplier susu sapi dengan komitmen pada kualitas dan kesegaran",
  },
  {
    id: 15,
    name: "Ana Dwi Pangesti",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "016/005",
    whatsapp: "628xxxxxxxxxx",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80",
    description: "Peternakan sapi perah dengan manajemen modern dan profesional",
  },
  {
    id: 16,
    name: "Siti Asriyah",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "016/005",
    whatsapp: "628xxxxxxxxxx",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80",
    description: "Mengutamakan kesehatan sapi untuk menghasilkan susu berkualitas",
  },
  {
    id: 17,
    name: "Taswiyah",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "014/003",
    whatsapp: "628xxxxxxxxxx",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80",
    description: "Susu segar setiap hari dengan proses yang terjaga kebersihannya",
  },
  {
    id: 18,
    name: "Suyati",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "016/005",
    whatsapp: "628xxxxxxxxxx",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80",
    description: "Penyedia susu sapi murni dengan sistem peternakan yang baik",
  },
]



export default function ProdukPage() {
  const handleContact = (supplierName: string, whatsappNumber: string) => {
    const message = `Halo, saya ingin menghubungi supplier ${supplierName} untuk informasi tentang susu sapi perah.`
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Data Supplier Penjual Susu Sapi Perah</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl">
            Dusun Cepogo, Desa Girimulyo
          </p>
        </div>
      </section>

      {/* Suppliers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suppliers.map((supplier) => (
              <Card key={supplier.id} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="h-48 bg-muted relative">
                  <Image
                    src={supplier.image}
                    alt={supplier.name}
                    width={400}
                    height={192}
                    className="w-full h-full object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyovS/xV/ByXCrr1bwurf6/1oO//9k="
                  />
                  <Badge className="absolute top-4 right-4 bg-primary">RT {supplier.rt_rw}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl truncate">{supplier.name}</CardTitle>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 flex-shrink-0"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span className="truncate">{supplier.address}</span>
                    </div>
                    <p className="text-sm line-clamp-2">{supplier.description}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={() => handleContact(supplier.name, supplier.whatsapp)}
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
                    Kontak WhatsApp
                  </Button>
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
            <h2 className="text-3xl font-bold mb-4">Butuh Informasi Lebih Lanjut?</h2>
            <p className="text-muted-foreground mb-6">
              Untuk informasi lebih detail mengenai supplier atau pemesanan susu sapi perah, silakan hubungi kantor desa atau klik tombol kontak di atas.
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
