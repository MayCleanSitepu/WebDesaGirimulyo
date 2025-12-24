import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, User, Calendar, ArrowLeft, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getArticleBySlug, getAllArticles } from "@/lib/articles"

// Generate static params for all articles
export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return {
      title: "Article Not Found",
    }
  }

  return {
    title: `${article.title} | Booklet Desa Girimulyo`,
    description: article.excerpt,
  }
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  // If article not found, show 404
  if (!article) {
    notFound()
  }

  // Get related articles (same category, excluding current)
  const allArticles = getAllArticles()
  const relatedArticles = allArticles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Article Header */}
      <article className="flex-grow">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="flex flex-col">
                {/* Back Button */}
                <Link href="/booklet">
                    <Button variant="ghost" className="mb-6">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Kembali ke Booklet
                    </Button>
                </Link>

                {/* Category Badge */}
                <Badge className="mb-4">{article.category}</Badge>
            </div>
          

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{article.title}</h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{article.readTime} membaca</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-[400px] md:h-[500px] mb-8 rounded-lg overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Excerpt */}
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed italic border-l-4 border-primary pl-4">
            {article.excerpt}
          </p>

          {/* Share Buttons */}
          <div className="flex gap-2 mb-8 pb-8 border-b">
            <Button variant="outline" size="sm" asChild>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  typeof window !== "undefined" ? window.location.href : ""
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Bagikan
              </a>
            </Button>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-justify prose-p:leading-relaxed prose-li:text-justify prose-strong:text-primary prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
            {/* Render markdown-style content */}
            {article.content.split("\n").map((line, index) => {
              // Heading 1
              if (line.startsWith("# ")) {
                return (
                  <h1 key={index} className="text-4xl font-bold mt-8 mb-4">
                    {line.substring(2)}
                  </h1>
                )
              }
              // Heading 2
              if (line.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-3xl font-bold mt-12 mb-4">
                    {line.substring(3)}
                  </h2>
                )
              }
              // Heading 3
              if (line.startsWith("### ")) {
                return (
                  <h3 key={index} className="text-2xl font-bold mt-8 mb-3">
                    {line.substring(4)}
                  </h3>
                )
              }
              // Bold text with **
              if (line.startsWith("**") && line.endsWith("**")) {
                return (
                  <p key={index} className="font-bold mt-4">
                    {line.substring(2, line.length - 2)}
                  </p>
                )
              }
              // List items
              if (line.startsWith("- ")) {
                return (
                  <li key={index} className="ml-6">
                    {line.substring(2)}
                  </li>
                )
              }
              // Numbered list
              if (line.match(/^\d+\.\s/)) {
                const text = line.replace(/^\d+\.\s/, "")
                return (
                  <li key={index} className="ml-6">
                    {text}
                  </li>
                )
              }
              // Checkmark items
              if (line.startsWith("✓ ")) {
                return (
                  <li key={index} className="ml-6 text-green-600">
                    ✓ {line.substring(2)}
                  </li>
                )
              }
              // Cross items
              if (line.startsWith("✗ ") || line.startsWith("❌ ")) {
                return (
                  <li key={index} className="ml-6 text-red-600">
                    {line}
                  </li>
                )
              }
              // Horizontal rule
              if (line === "---") {
                return <hr key={index} className="my-8" />
              }
              // Empty line
              if (line.trim() === "") {
                return <div key={index} className="h-4" />
              }
              // Regular paragraph
              return (
                <p key={index} className="mb-4 leading-relaxed text-justify">
                  {line}
                </p>
              )
            })}
          </div>

          {/* Author Info */}
          <div className="mt-12 p-6 bg-muted rounded-lg">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Tentang Penulis</h3>
                <p className="font-medium text-primary mb-2">{article.author}</p>
                <p className="text-sm text-muted-foreground">
                  Kontributor aktif dalam pengembangan konten edukatif untuk masyarakat Desa
                  Girimulyo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="bg-muted py-12">
            <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-3xl font-bold mb-8">Artikel Terkait</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.id}
                    href={`/booklet/${related.slug}`}
                    className="group block bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <Badge className="mb-2" variant="secondary">
                        {related.category}
                      </Badge>
                      <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {related.excerpt}
                      </p>
                      <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{related.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </article>

      <Footer />
    </div>
  )
}
