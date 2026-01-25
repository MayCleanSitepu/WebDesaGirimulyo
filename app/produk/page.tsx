'use client'

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const suppliers = [
  {
    id: 1,
    name: "Nur Cholifah",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "015/005",
    whatsapp: "628xxxxxxxxxx",
  },
  {
    id: 2,
    name: "Siti Ismiyah",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "014/005",
    whatsapp: "628xxxxxxxxxx",
  },
  {
    id: 3,
    name: "Ummi Chabibah",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "002/003",
    whatsapp: "628xxxxxxxxxx",
  },
  {
    id: 4,
    name: "Rumiyah",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "013/005",
    whatsapp: "628xxxxxxxxxx",
  },
  {
    id: 5,
    name: "Nuriyah",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "013/005",
    whatsapp: "628xxxxxxxxxx",
  },
  {
    id: 6,
    name: "Istiqomah",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "014/005",
    whatsapp: "628xxxxxxxxxx",
  },
  {
    id: 7,
    name: "Nurul Hikmah",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "014/005",
    whatsapp: "628xxxxxxxxxx",
  },
  {
    id: 8,
    name: "Pawit",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "015/005",
    whatsapp: "628xxxxxxxxxx",
  },
  {
    id: 9,
    name: "Muniyatun",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "016/005",
    whatsapp: "628xxxxxxxxxx",
  },
  {
    id: 10,
    name: "Umiyati",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "015/005",
    whatsapp: "628xxxxxxxxxx",
  },
  {
    id: 11,
    name: "Isrowiyah",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "002/005",
    whatsapp: "628xxxxxxxxxx",
  },
  {
    id: 12,
    name: "Soimah",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "013/015",
    whatsapp: "628xxxxxxxxxx",
  },
  {
    id: 13,
    name: "Roikah",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "016/005",
    whatsapp: "628xxxxxxxxxx",
  },
  {
    id: 14,
    name: "Asriyah",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "016/005",
    whatsapp: "628xxxxxxxxxx",
  },
  {
    id: 15,
    name: "Ana Dwi Pangesti",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "016/005",
    whatsapp: "628xxxxxxxxxx",
  },
  {
    id: 16,
    name: "Siti Asriyah",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "016/005",
    whatsapp: "628xxxxxxxxxx",
  },
  {
    id: 17,
    name: "Taswiyah",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "014/003",
    whatsapp: "628xxxxxxxxxx",
  },
  {
    id: 18,
    name: "Suyati",
    address: "Dusun Cepogo, Desa Girimulyo",
    rt_rw: "016/005",
    whatsapp: "628xxxxxxxxxx",
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

      {/* Suppliers Table */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto bg-white rounded-lg shadow">
            <table className="w-full">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">No</th>
                  <th className="px-6 py-4 text-left font-semibold">Nama Supplier</th>
                  <th className="px-6 py-4 text-left font-semibold">Alamat</th>
                  <th className="px-6 py-4 text-left font-semibold">RT/RW</th>
                  <th className="px-6 py-4 text-left font-semibold">WhatsApp</th>
                  <th className="px-6 py-4 text-center font-semibold">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {suppliers.map((supplier, index) => (
                  <tr key={supplier.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm">{index + 1}</td>
                    <td className="px-6 py-4 font-medium">{supplier.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{supplier.address}</td>
                    <td className="px-6 py-4 text-sm">
                      <Badge variant="outline">{supplier.rt_rw}</Badge>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{supplier.whatsapp}</td>
                    <td className="px-6 py-4 text-center">
                      <Button
                        size="sm"
                        onClick={() => handleContact(supplier.name, supplier.whatsapp)}
                        className="flex items-center justify-center gap-2 mx-auto"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        Kontak
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden grid gap-4">
            {suppliers.map((supplier, index) => (
              <Card key={supplier.id} className="overflow-hidden">
                <CardHeader className="bg-primary/5">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-primary text-xs">{index + 1}</Badge>
                        <Badge variant="outline" className="text-xs">{supplier.rt_rw}</Badge>
                      </div>
                      <CardTitle className="text-lg">{supplier.name}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Alamat</p>
                      <p className="text-sm">{supplier.address}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">WhatsApp</p>
                      <p className="text-sm font-mono">{supplier.whatsapp}</p>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => handleContact(supplier.name, supplier.whatsapp)}
                      className="w-full flex items-center justify-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      Kontak WhatsApp
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
