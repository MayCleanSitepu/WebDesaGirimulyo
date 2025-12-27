import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Info } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function PetaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Story Maps Desa Windusari</h1>
          <p className="text-lg text-primary-foreground/90">Peta interaktif wilayah dan potensi Desa Windusari</p>
        </div>
      </section>

      {/* Info Alert */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Informasi Peta</AlertTitle>
            <AlertDescription>
              Peta ini menampilkan batas wilayah Desa Windusari, potensi desa, lokasi fasilitas umum, dan informasi
              geografis lainnya. Gunakan kontrol pada peta untuk zoom in/out dan navigasi.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Map Embed */}
      <section className="flex-1 pb-8">
        <div className="container mx-auto px-4">
          <div className="bg-muted rounded-lg overflow-hidden" style={{ height: "600px" }}>
            <iframe 
              src="https://storymaps.arcgis.com/stories/469077cbddba4d92a5147a95510d807a" 
              width="100%" 
              height="100%" 
              className="border-0"
              allowFullScreen
              allow="geolocation"
              title="Story Maps Desa Windusari"
            />
          </div>
        </div>
      </section>

      {/* Penjelasan */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Tentang Peta Desa</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Peta interaktif Desa Windusari ini menampilkan berbagai informasi geografis dan potensi desa secara
                visual dan mudah dipahami. Melalui peta ini, Anda dapat melihat:
              </p>
              <ul className="space-y-2 ml-6">
                <li>• Batas wilayah administratif Desa Windusari</li>
                <li>• Lokasi fasilitas umum seperti balai desa, sekolah, dan puskesmas</li>
                <li>• Sebaran lahan pertanian dan perkebunan</li>
                <li>• Area UMKM dan pusat ekonomi desa</li>
                <li>• Infrastruktur jalan dan transportasi</li>
                <li>• Potensi wisata dan objek wisata desa</li>
              </ul>
              <p>
                Peta ini dibuat sebagai bagian dari program digitalisasi desa dan akan terus diperbarui seiring dengan
                perkembangan Desa Windusari.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
