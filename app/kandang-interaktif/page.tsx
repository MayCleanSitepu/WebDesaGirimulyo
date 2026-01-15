"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CowStable3D } from "@/components/cow-stable-3d"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function KandangInteraktifPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const cardColors = {
    "Tempat Pakan": "#3b82f6",
    "Sistem Minum": "#10b981",
    "Atap": "#f59e0b",
    "Drainase": "#8b5cf6"
  }
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
          <div className="flex justify-center mb-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
              <Card 
                className="transition-all hover:shadow-lg hover:scale-105 cursor-pointer"
                onMouseEnter={() => setHoveredCard("Tempat Pakan")}
                onMouseLeave={() => setHoveredCard(null)}
              style={{
                borderColor: hoveredCard === "Tempat Pakan" ? "#3b82f6" : undefined,
                borderWidth: hoveredCard === "Tempat Pakan" ? "2px" : undefined
              }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full flex items-center justify-center" style={{backgroundColor: '#3b82f620'}}>
                    <div className="h-3 w-3 rounded-full" style={{backgroundColor: '#3b82f6'}} />
                  </div>
                  Tempat Pakan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Area pemberian pakan dengan sistem otomatis untuk efisiensi dan kebersihan
                </p>
              </CardContent>
            </Card>

            <Card 
              className="transition-all hover:shadow-lg hover:scale-105 cursor-pointer"
              onMouseEnter={() => setHoveredCard("Atap")}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                borderColor: hoveredCard === "Atap" ? "#f59e0b" : undefined,
                borderWidth: hoveredCard === "Atap" ? "2px" : undefined
              }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full flex items-center justify-center" style={{backgroundColor: '#f59e0b20'}}>
                    <div className="h-3 w-3 rounded-full" style={{backgroundColor: '#f59e0b'}} />
                  </div>
                  Atap
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Atap pelindung dari panas dan hujan dengan material tahan lama
                </p>
              </CardContent>
            </Card>

            <Card 
              className="transition-all hover:shadow-lg hover:scale-105 cursor-pointer"
              onMouseEnter={() => setHoveredCard("Drainase")}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                borderColor: hoveredCard === "Drainase" ? "#8b5cf6" : undefined,
                borderWidth: hoveredCard === "Drainase" ? "2px" : undefined
              }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full flex items-center justify-center" style={{backgroundColor: '#8b5cf620'}}>
                    <div className="h-3 w-3 rounded-full" style={{backgroundColor: '#8b5cf6'}} />
                  </div>
                  Drainase
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Sistem drainase modern terintegrasi untuk menjaga kebersihan kandang
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

          {/* Features List */}
          <Card>
            <CardHeader>
              <CardTitle>Spesifikasi Kandang</CardTitle>
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
                    <h4 className="font-semibold mb-1">Kapasitas</h4>
                    <p className="text-sm text-muted-foreground">
                      Dirancang untuk menampung 20-30 ekor sapi dengan ruang yang nyaman
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Ventilasi Optimal</h4>
                    <p className="text-sm text-muted-foreground">
                      Sistem ventilasi silang untuk sirkulasi udara yang baik dan kesehatan ternak
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
                      Ruang khusus untuk sapi beristirahat dengan nyaman dan aman
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

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Material Berkualitas</h4>
                    <p className="text-sm text-muted-foreground">
                      Menggunakan material tahan lama dan ramah lingkungan
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
