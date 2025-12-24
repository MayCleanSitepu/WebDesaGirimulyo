import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Informasi Desa */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Desa Windusari</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Kecamatan Windusari, Kabupaten Magelang, Jawa Tengah</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>(0293) 123456</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@desawindusari.id</span>
              </div>
            </div>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigasi</h3>
            <div className="space-y-2 text-sm">
              <Link href="/" className="block hover:text-primary transition-colors">
                Beranda
              </Link>
              <Link href="/profil" className="block hover:text-primary transition-colors">
                Profil Desa
              </Link>
              <Link href="/produk" className="block hover:text-primary transition-colors">
                Produk Andalan
              </Link>
              <Link href="/kegiatan" className="block hover:text-primary transition-colors">
                Kegiatan
              </Link>
            </div>
          </div>

          {/* Tim KKN */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Tim KKN</h3>
            <p className="text-sm mb-2">Website ini dibuat oleh Tim KKN Universitas Gadjah Mada 2025</p>
            <p className="text-sm text-muted-foreground">Dalam rangka pengabdian masyarakat dan pengembangan desa</p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Desa Girimulyo. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
