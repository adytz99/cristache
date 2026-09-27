import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, CheckCircle, Clock, Quote } from "lucide-react"
import { getDictionary } from "@/lib/get-dictionary"
import { caseStudies, getCaseStudy } from "@/lib/blog-data"
import { pageMetadata } from "@/lib/seo-utils"
import { articleSchema } from "@/lib/schema"
import { JsonLd } from "@/components/json-ld"

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) return {}
  const content = study.content
  return pageMetadata({
    title: content.title,
    description: content.excerpt,
    path: `/blog/${slug}`,
    type: "article",
    publishedTime: study.date,
  })
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) notFound()

  const dictionary = await getDictionary()
  const content = study.content
  const dateLocale = "ro-RO"

  const related = caseStudies.filter((cs) => cs.slug !== study.slug).slice(0, 2)

  return (
    <div className="min-h-screen bg-black">
      <JsonLd data={articleSchema(study)} />
      <Header dictionary={dictionary} />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container max-w-4xl">
            <Link
              href={"/blog"}
              className="inline-flex items-center gap-2 text-beige hover:text-beige mb-8 text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              {dictionary.blog.backToBlog}
            </Link>

            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-beige text-slate-900 text-xs font-semibold px-3 py-1 rounded-full">
                  {content.industry}
                </span>
                {content.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-800 border border-slate-700 text-slate-300 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                {content.title}
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed">{content.subtitle}</p>
              <div className="flex items-center gap-6 text-sm text-slate-500 pt-2">
                <time dateTime={study.date}>
                  {new Date(study.date).toLocaleDateString(dateLocale, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {content.readTime}
                </span>
                <span>{content.client}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container max-w-5xl">
            <div className="aspect-[21/9] relative rounded-2xl overflow-hidden border border-slate-700/50">
              <Image
                src={study.image}
                alt={content.title}
                fill
                unoptimized
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container max-w-5xl">
            <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
              {content.metrics.map((metric, i) => (
                <Card key={i} className="bg-slate-800 border-slate-700">
                  <CardContent className="p-6 text-center space-y-2">
                    <div className="text-3xl md:text-4xl font-bold text-beige">
                      {metric.value}
                    </div>
                    <div className="text-sm text-slate-400">{metric.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container max-w-3xl">
            <article className="space-y-12">
              {content.sections.map((section, i) => (
                <div key={i} className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="text-slate-300 leading-relaxed text-lg">
                      {p}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="space-y-3 pt-2">
                      {section.bullets.map((b, k) => (
                        <li key={k} className="flex items-start gap-3 text-slate-300">
                          <CheckCircle className="w-5 h-5 text-beige mt-1 flex-shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <div className="bg-gradient-to-br from-beige/10 to-transparent border border-beige/20 rounded-2xl p-8 space-y-4">
                <Quote className="w-10 h-10 text-beige" />
                <p className="text-xl md:text-2xl text-white italic leading-relaxed">
                  "{content.quote.text}"
                </p>
                <p className="text-beige font-medium">{content.quote.author}</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {dictionary.blog.toolsUsed}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {content.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-slate-800 border border-slate-700 text-slate-200 text-sm px-4 py-2 rounded-lg"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="py-16 bg-slate-800/50">
          <div className="container max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              {dictionary.blog.relatedTitle}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {related.map((rel) => {
                const relContent = rel.content
                return (
                  <Card
                    key={rel.slug}
                    className="bg-black border-slate-700 overflow-hidden group hover:border-beige/30 transition-all"
                  >
                    <Link href={`/blog/${rel.slug}`} className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 aspect-video md:aspect-auto relative bg-gradient-to-br from-beige/20 to-beige/5">
                        <Image
                          src={rel.image}
                          alt={relContent.title}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6 md:w-2/3 space-y-2">
                        <span className="text-xs text-beige font-semibold">
                          {relContent.industry}
                        </span>
                        <h3 className="text-lg font-semibold text-white group-hover:text-beige transition-colors line-clamp-2">
                          {relContent.title}
                        </h3>
                        <p className="text-sm text-slate-400 line-clamp-2">
                          {relContent.excerpt}
                        </p>
                        <span className="inline-flex items-center gap-1 text-beige text-sm font-medium pt-2">
                          {dictionary.blog.readMore}
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </CardContent>
                    </Link>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="container text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {dictionary.blog.cta.title}{" "}
              <span className="text-beige">{dictionary.blog.cta.titleHighlight}</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              {dictionary.blog.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-beige hover:bg-white text-slate-900 font-semibold px-8 py-4 text-lg"
              >
                <Link href="/contact">
                  {dictionary.blog.cta.consultation}
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-beige text-beige hover:bg-beige hover:text-slate-900 px-8 py-4 text-lg"
              >
                <Link href={"/contact"}>{dictionary.blog.cta.contact}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer dictionary={dictionary} />
    </div>
  )
}
