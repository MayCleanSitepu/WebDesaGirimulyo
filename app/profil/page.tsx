import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Users, TrendingUp, Target } from "lucide-react"

export default function ProfilPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Profil Desa Girimulyo</h1>
          <p className="text-lg text-primary-foreground/90">Mengenal lebih dekat Desa Girimulyo</p>
        </div>
      </section>

      {/* Sejarah Desa */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Sejarah Desa</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Desa Girimulyo memiliki sejarah panjang yang dimulai sejak zaman kerajaan Mataram. Nama "Girimulyo"
                berasal dari kata "Giri" yang berarti gunung dan "Mulyo" yang berarti mulia atau makmur, mencerminkan
                harapan akan kejayaan dan kemakmuran desa yang berada di lereng pegunungan.
              </p>
              <p>
                Pada masa penjajahan Belanda, wilayah Girimulyo menjadi salah satu sentra pertanian yang penting.
                Masyarakat desa telah lama mengandalkan pertanian sebagai mata pencaharian utama, terutama tanaman padi,
                jagung, dan sayuran serta peternakan sapi perah.
              </p>
              <p>
                Setelah Indonesia merdeka, Desa Girimulyo terus berkembang dan melakukan berbagai pembenahan
                infrastruktur dan peningkatan kesejahteraan masyarakat. Hingga saat ini, Desa Girimulyo terus berupaya
                menjadi desa mandiri dengan tetap mempertahankan nilai-nilai luhur dan kearifan lokal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Visi</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    "Terwujudnya Desa Girimulyo yang Mandiri, Sejahtera, dan Berbudaya Berlandaskan Iman dan Taqwa pada
                    Tahun 2025"
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Misi</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Meningkatkan kualitas sumber daya manusia</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Mengembangkan potensi ekonomi desa</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Memperbaiki infrastruktur desa</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Melestarikan budaya dan nilai-nilai luhur</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Data Umum */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Data Umum Desa</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Wilayah
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Luas Wilayah</span>
                    <span className="font-medium">318 Ha</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Luas Perkebunan</span>
                    <span className="font-medium">13.7 Ha</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Luas Pemukiman</span>
                    <span className="font-medium">4.10 Ha</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Jumlah Dusun</span>
                    <span className="font-medium">3 Dusun</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Penduduk
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Jumlah Penduduk</span>
                    <span className="font-medium">1.828 Jiwa</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Laki-laki</span>
                    <span className="font-medium">930 Jiwa</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Perempuan</span>
                    <span className="font-medium">898 Jiwa</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Kepadatan Penduduk</span>
                    <span className="font-medium">575 Jiwa / Km²</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Letak Geografis */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Letak Geografis</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Lokasi:</strong> Desa Girimulyo terletak di Kecamatan Windusari,
                    Kabupaten Magelang, Provinsi Jawa Tengah.
                  </p>
                  <div>
                    <strong className="text-foreground">Batas Wilayah:</strong>
                    <ul className="mt-2 space-y-2 ml-4">
                      <li>• Sebelah Utara: Desa Ngemplak</li>
                      <li>• Sebelah Selatan: Desa Tanjungsari</li>
                      <li>• Sebelah Timur: Desa Wonoroto</li>
                      <li>• Sebelah Barat: Desa Dampit</li>
                    </ul>
                  </div>
                  <p>
                    <strong className="text-foreground">Topografi:</strong> Desa Girimulyo berada pada ketinggian
                    sekitar 1200 meter di atas permukaan laut dengan topografi berbukit dan dataran.
                  </p>
                  <p>
                    <strong className="text-foreground">Iklim:</strong> Beriklim tropis dengan curah hujan sedang, cocok
                    untuk pertanian dan perkebunan.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Struktur Pemerintahan */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Struktur Pemerintahan Desa</h2>
            <div className="space-y-4">
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-sm font-medium mb-1">Kepala Desa</p>
                    <p className="text-lg font-bold">Bapak Budiman</p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <p className="text-sm text-muted-foreground mb-1">Sekretaris Desa</p>
                    <p className="font-medium">Nasikin</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <p className="text-sm text-muted-foreground mb-1">Kaur Keuangan</p>
                    <p className="font-medium">Bapak Edi Susanto</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <p className="text-sm text-muted-foreground mb-1">Kaur Umum</p>
                    <p className="font-medium">Ibu Retno Wulandari</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <p className="text-sm text-muted-foreground mb-1">Kasi Pemerintahan</p>
                    <p className="font-medium">Bapak Agus Priyanto</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <p className="text-sm text-muted-foreground mb-1">Kasi Kesejahteraan</p>
                    <p className="font-medium">Ibu Endang Susilowati</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
