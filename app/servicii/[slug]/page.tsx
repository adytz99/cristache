import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FaqList } from "@/components/faq-list"
import { JsonLd } from "@/components/json-ld"
import { getDictionary } from "@/lib/get-dictionary"
import { getService, services } from "@/lib/services-data"
import { projectsForService } from "@/lib/projects-data"
import { serviceSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo-utils"

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/servicii/${service.slug}`,
  })
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const dictionary = await getDictionary()
  const labels = dictionary.servicesPage
  const projects = projectsForService(service.slug).slice(0, 3)
  const related = service.related.map((relatedSlug) => getService(relatedSlug)).filter(Boolean)

  return (
    <div className="min-h-screen bg-black">
      <JsonLd data={serviceSchema(service)} />
      <Header dictionary={dictionary} />
      <main className="pt-16">
        <section className="py-20">
          <div className="container max-w-4xl space-y-6">
            <nav aria-label="Breadcrumb" className="text-sm text-ivory/45">
              <Link href="/" className="hover:text-beige">
                Acasă
              </Link>
              <span className="mx-2">/</span>
              <Link href="/servicii" className="hover:text-beige">
                Servicii
              </Link>
              <span className="mx-2">/</span>
              <span className="text-ivory/70">{service.name}</span>
            </nav>
            <span className="block text-sm uppercase tracking-[0.18em] text-beige">{service.eyebrow}</span>
            <h1 className="text-4xl text-ivory md:text-6xl">{service.name}</h1>
            <p className="text-lg leading-relaxed text-ivory/75 md:text-xl">{service.intro}</p>
            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                {labels.ctaButton}
              </Link>
              <Link href="/portofoliu" className="btn-outline">
                {labels.seeProjects}
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-ivory py-20 text-ink">
          <div className="container grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-3xl text-ink">{labels.includes}</h2>
              <ul className="mt-6 space-y-3">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink/80">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-beige-deep" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-3xl text-ink">{labels.deliverables}</h2>
              <ul className="mt-6 space-y-3">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink/80">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-beige-deep" />
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className="mt-10 text-2xl text-ink">{labels.forWho}</h3>
              <ul className="mt-4 space-y-2 text-ink/70">
                {service.forWho.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <h2 className="mb-10 text-center text-4xl text-ivory">{labels.steps}</h2>
            <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {service.steps.map((step, index) => (
                <li key={step.title} className="rounded-3xl border border-beige/15 bg-white/[0.03] p-7">
                  <span className="font-serif text-4xl text-beige">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 text-2xl text-ivory">{step.title}</h3>
                  <p className="mt-2 text-ivory/60">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {projects.length > 0 && (
          <section className="border-t border-beige/15 py-20">
            <div className="container">
              <h2 className="mb-10 text-center text-4xl text-ivory">{labels.projects}</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {projects.map((project) => (
                  <Link
                    key={project.id}
                    href="/portofoliu"
                    className="group overflow-hidden rounded-3xl border border-beige/15 bg-white/[0.03]"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-beige/10">
                      <Image
                        src={project.image}
                        alt={`${project.title}: ${project.description}`}
                        fill
                        unoptimized={typeof project.image === "string" && project.image.endsWith(".svg")}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="space-y-2 p-6">
                      <h3 className="text-2xl text-ivory">{project.title}</h3>
                      <p className="text-sm text-ivory/60">{project.outcome}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="bg-ivory py-20 text-ink">
          <div className="container max-w-4xl">
            <h2 className="mb-8 text-4xl text-ink">{labels.faq}</h2>
            <FaqList items={service.faq} tone="light" />
          </div>
        </section>

        <section className="py-20">
          <div className="container max-w-4xl space-y-10">
            {related.length > 0 && (
              <div>
                <h2 className="mb-6 text-2xl text-ivory">{labels.related}</h2>
                <div className="flex flex-wrap gap-3">
                  {related.map((item) => (
                    <Link
                      key={item!.slug}
                      href={`/servicii/${item!.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-beige/30 px-5 py-2.5 text-sm text-beige hover:bg-beige hover:text-black"
                    >
                      {item!.name}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
            <div className="rounded-3xl border border-beige/20 p-10 text-center">
              <h2 className="text-4xl text-ivory">{labels.ctaTitle}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-ivory/60">{labels.ctaDesc}</p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/contact" className="btn-primary">
                  {labels.ctaButton}
                </Link>
                <Link href="/servicii" className="btn-outline inline-flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  {labels.allServices}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer dictionary={dictionary} />
    </div>
  )
}
