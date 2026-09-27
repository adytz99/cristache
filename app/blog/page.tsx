import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Clock } from "lucide-react"
import { getDictionary } from "@/lib/get-dictionary"
import { caseStudies } from "@/lib/blog-data"
import { pageMetadata } from "@/lib/seo-utils"

export async function generateMetadata() {
  const dictionary = await getDictionary()
  return pageMetadata({
    title: dictionary.blog.metaTitle,
    description: dictionary.blog.metaDescription,
    path: "/blog",
  })
}

export default async function BlogPage() {
  const dictionary = await getDictionary()

  return (
    <div className="min-h-screen bg-black">
      <Header dictionary={dictionary} />
      <main className="pt-20">
        <section className="py-20">
          <div className="container">
            <div className="mx-auto mb-16 max-w-4xl space-y-6 text-center">
              <span className="text-sm uppercase tracking-[0.18em] text-beige">{dictionary.blog.eyebrow}</span>
              <h1 className="text-4xl text-ivory md:text-6xl">
                {dictionary.blog.title} <span className="text-beige">{dictionary.blog.titleHighlight}</span>
              </h1>
              <p className="text-xl leading-relaxed text-ivory/60">{dictionary.blog.description}</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((study) => {
                const content = study.content
                return (
                  <Card key={study.slug} className="flex flex-col overflow-hidden border-beige/15 bg-white/[0.03]">
                    <Link href={`/blog/${study.slug}`} className="block">
                      <div className="relative aspect-video overflow-hidden bg-beige/10">
                        <Image src={study.image} alt={content.title} fill unoptimized className="object-cover" />
                      </div>
                    </Link>
                    <CardContent className="flex flex-1 flex-col space-y-4 p-6">
                      <span className="w-fit rounded-full border border-beige/30 px-3 py-1 text-[0.7rem] uppercase tracking-[0.14em] text-beige">
                        {content.industry}
                      </span>
                      <div className="flex items-center gap-4 text-xs text-ivory/40">
                        <time dateTime={study.date}>
                          {new Date(study.date).toLocaleDateString("ro-RO", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {content.readTime}
                        </span>
                      </div>
                      <h2 className="line-clamp-4 text-2xl text-ivory">
                        <Link href={`/blog/${study.slug}`}>{content.title}</Link>
                      </h2>
                      <p className="flex-1 text-sm leading-relaxed text-ivory/55">{content.excerpt}</p>
                      <div className="flex items-center justify-between border-t border-beige/15 pt-4">
                        <div>
                          <div className="text-2xl text-beige">{content.heroStat.value}</div>
                          <div className="text-xs text-ivory/40">{content.heroStat.label}</div>
                        </div>
                        <Link href={`/blog/${study.slug}`} className="inline-flex items-center gap-1 text-sm text-beige">
                          {dictionary.blog.readMore}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-beige/15 py-20">
          <div className="container space-y-8 text-center">
            <h2 className="text-4xl text-ivory">
              {dictionary.blog.cta.title} <span className="text-beige">{dictionary.blog.cta.titleHighlight}</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-ivory/55">{dictionary.blog.cta.description}</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                {dictionary.blog.cta.consultation}
              </Link>
              <Link href="/portofoliu" className="btn-outline">
                {dictionary.blog.cta.contact}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer dictionary={dictionary} />
    </div>
  )
}
