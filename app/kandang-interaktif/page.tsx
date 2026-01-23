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
                      Mencegah sapi cedera kaki karena terpeleset, memudahkan pembersihan dan menjaga kandang tetap kering
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
                    <h4 className="font-semibold mb-1">Area Pakan</h4>
                    <p className="text-sm text-muted-foreground">
                      Area pakan dilengkapi dengan sekat pembatas individu yang dirancang untuk mencegah terjadinya persaingan pakan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Saluran Pembuangan</h4>
                    <p className="text-sm text-muted-foreground">
                      Jalur untuk mengalirkan Limbah ke penampungan akhir
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
                    <h4 className="font-semibold mb-1">Akses Pakan</h4>
                    <p className="text-sm text-muted-foreground">
                      Sistem berhadapan untuk memudahkan pemberian pakan dan konsentrat
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Lahan Parkir</h4>
                    <p className="text-sm text-muted-foreground">
                      Untuk parkir truk pengangkut dan logistic
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Ruang Gerak</h4>
                    <p className="text-sm text-muted-foreground">
                      Jalur gerak untuk sapi dan peternak dibuat proporsional untuk mendukung efisiensi alur kerja di dalam kandang
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

          {/* AI Model Resources */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Sumber Daya Model AI</CardTitle>
              <CardDescription>
                Repository AI untuk mendukung pengelolaan kandang sapi modern
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">Prediksi Kualitas Susu</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Model AI untuk memprediksi kualitas susu sapi menggunakan machine learning
                    </p>
                    <a 
                      href="https://github.com/KimiPatria/Prediksi-Kualitas-Susu-Sederhana-KKN-Windusari.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                    >
                      View Repository
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">Sistem Pendeteksi Orang</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Model AI untuk mendeteksi keberadaan orang di area kandang sapi menggunakan computer vision
                    </p>
                    <a 
                      href="https://github.com/KimiPatria/Sistem-Pendeteksi-Orang-Untuk-Kandang-Sapi-KKN-Windusari.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                    >
                      View Repository
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
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
