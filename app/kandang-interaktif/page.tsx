"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CowStable3D } from "@/components/cow-stable-3d"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Info } from "lucide-react"

export default function KandangInteraktifPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary-foreground/20 hover:bg-primary-foreground/30">
              Teknologi 3D
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Kandang Sapi Interaktif
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Jelajahi desain kandang sapi modern dengan visualisasi 3D yang interaktif
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-12 md:py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          {/* 3D Viewer */}
          <div className="mb-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Visualisasi 3D Kandang Sapi</CardTitle>
                <CardDescription>
                  Gunakan mouse untuk memutar, scroll untuk zoom, dan klik fitur untuk melihat detail
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CowStable3D />
              </CardContent>
            </Card>
          </div>

          {/* Information Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Info className="h-4 w-4 text-primary" />
                  </div>
                  Kapasitas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">20-30 Ekor</p>
                <p className="text-sm text-muted-foreground">
                  Kandang dirancang untuk menampung 20-30 ekor sapi dengan ruang yang nyaman
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Info className="h-4 w-4 text-primary" />
                  </div>
                  Ventilasi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">Optimal</p>
                <p className="text-sm text-muted-foreground">
                  Sistem ventilasi silang untuk sirkulasi udara yang baik dan kesehatan ternak
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Info className="h-4 w-4 text-primary" />
                  </div>
                  Drainase
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">Modern</p>
                <p className="text-sm text-muted-foreground">
                  Sistem drainase terintegrasi untuk menjaga kebersihan dan kesehatan kandang
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Features List */}
          <Card>
            <CardHeader>
              <CardTitle>Fitur Utama Kandang</CardTitle>
              <CardDescription>
                Kandang sapi modern dengan berbagai fitur untuk kenyamanan dan produktivitas ternak
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Tempat Pakan Otomatis</h4>
                    <p className="text-sm text-muted-foreground">
                      Sistem pemberian pakan yang terukur dan higienis
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Sistem Minum Otomatis</h4>
                    <p className="text-sm text-muted-foreground">
                      Akses air bersih yang mudah dan berkelanjutan untuk setiap sapi
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Atap Pelindung</h4>
                    <p className="text-sm text-muted-foreground">
                      Melindungi ternak dari panas dan hujan dengan material tahan lama
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Lantai Berongga</h4>
                    <p className="text-sm text-muted-foreground">
                      Memudahkan pembersihan dan menjaga kandang tetap kering
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Area Istirahat</h4>
                    <p className="text-sm text-muted-foreground">
                      Ruang khusus untuk sapi beristirahat dengan nyaman
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Pencahayaan Alami</h4>
                    <p className="text-sm text-muted-foreground">
                      Desain yang memaksimalkan pencahayaan alami untuk kesehatan ternak
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
