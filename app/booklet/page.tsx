import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, User, Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getAllArticles, getFeaturedArticles } from "@/lib/articles"

export default function BookletPage() {
  const booklets = getAllArticles()
  const featuredBooklets = getFeaturedArticles()
  const regularBooklets = booklets.filter((b) => !b.featured)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Booklet & Artikel</h1>
            <p className="text-lg text-primary-foreground/90">
              Kumpulan panduan, artikel, dan informasi bermanfaat untuk kemajuan masyarakat Desa Windusari
            </p>
          </div>
        </div>
      </section>

      {/* Featured Booklets */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Artikel Unggulan</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {featuredBooklets.map((booklet) => (
                <Link key={booklet.id} href={`/booklet/${booklet.slug}`}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer h-full">
                  <div className="h-64 bg-muted relative overflow-hidden">
                    <Image
                      src={booklet.image}
                      alt={booklet.title}
                      width={400}
                      height={256}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyovS/xV/ByXCrr1bwurf6/1oO//9k="
                    />
                    <Badge className="absolute top-4 left-4 bg-primary">{booklet.category}</Badge>
                  </div>
                  <CardHeader className="space-y-3">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{booklet.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{booklet.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{booklet.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl leading-tight group-hover:text-primary transition-colors">
                      {booklet.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">{booklet.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="gap-2 px-0 hover:gap-3 transition-all">
                      Baca Selengkapnya
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
              ))}
            </div>

            {/* Regular Booklets */}
            <h2 className="text-2xl font-bold mb-8">Semua Artikel</h2>
            <div className="space-y-6">
              {regularBooklets.map((booklet) => (
                <Link key={booklet.id} href={`/booklet/${booklet.slug}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-all group cursor-pointer mb-3">
                  <div className="md:flex">
                    <div className="md:w-80 h-56 md:h-auto bg-muted relative overflow-hidden flex-shrink-0">
                      <Image
                        src={booklet.image}
                        alt={booklet.title}
                        width={320}
                        height={224}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyovS/xV/ByXCrr1bwurf6/1oO//9k="
                      />
                    </div>
                    <div className="flex-1">
                      <CardHeader className="space-y-3">
                        <Badge className="mt-5 w-fit">{booklet.category}</Badge>
                        <CardTitle className="text-xl md:text-2xl leading-tight group-hover:text-primary transition-colors">
                          {booklet.title}
                        </CardTitle>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{booklet.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{booklet.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{booklet.readTime}</span>
                          </div>
                        </div>
                        <CardDescription className="leading-relaxed">{booklet.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="ghost" className="gap-2 px-0 hover:gap-3 transition-all">
                          Baca Selengkapnya
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ingin Berkontribusi?</h2>
            <p className="text-muted-foreground mb-6">
              Kami mengundang warga desa, pelaku UMKM, dan mahasiswa KKN untuk berbagi pengetahuan dan pengalaman
              melalui artikel atau panduan. Hubungi kami untuk informasi lebih lanjut.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <div>
                <p className="font-medium">Email</p>
                <p className="text-muted-foreground">info@desawindusari.id</p>
              </div>
              <div>
                <p className="font-medium">WhatsApp</p>
                <p className="text-muted-foreground">+62 812-3456-7890</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
