import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { getDictionary } from "@/lib/get-dictionary"
import { services } from "@/lib/services-data"
import { breadcrumbSchema } from "@/lib/schema"
import { pageMetadata, siteUrl } from "@/lib/seo-utils"

export const metadata = pageMetadata({
  title: "Servicii: conținut, social media, web, aplicații mobile",
  description:
    "Creare conținut, social media marketing, campanii ADS, dezvoltare web, aplicații mobile, platforme online cu plăți și baze de date. Vezi ce include fiecare serviciu.",
  path: "/servicii",
})

export default async function ServicesPage() {
  const dictionary = await getDictionary()

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        name: "Servicii Cristache",
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.name,
          url: `${siteUrl}/servicii/${service.slug}`,
        })),
      },
      breadcrumbSchema([
        { name: "Acasă", path: "/" },
        { name: "Servicii", path: "/servicii" },
      ]),
    ],
  }

  return (
    <div className="min-h-screen bg-black">
      <JsonLd data={schema} />
      <Header dictionary={dictionary} />
      <main className="pt-16">
        <section className="py-20">
          <div className="container max-w-4xl space-y-6 text-center">
            <span className="text-sm uppercase tracking-[0.18em] text-beige">{dictionary.servicesPage.eyebrow}</span>
            <h1 className="text-4xl text-ivory md:text-6xl">{dictionary.servicesPage.title}</h1>
            <p className="text-lg leading-relaxed text-ivory/65 md:text-xl">{dictionary.servicesPage.intro}</p>
          </div>
        </section>

        <section className="bg-ivory py-20 text-ink">
          <div className="container grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/servicii/${service.slug}`}
                className="group flex flex-col rounded-3xl border border-black/5 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
              >
                <span className="text-xs uppercase tracking-[0.16em] text-beige-deep">{service.eyebrow}</span>
                <h2 className="mt-3 text-3xl text-ink">{service.name}</h2>
                <p className="mt-3 flex-1 leading-relaxed text-ink/65">{service.short}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink">
                  {dictionary.servicesPage.more}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="container max-w-3xl space-y-6 text-center">
            <h2 className="text-4xl text-ivory">{dictionary.servicesPage.ctaTitle}</h2>
            <p className="text-lg text-ivory/60">{dictionary.servicesPage.ctaDesc}</p>
            <Link href="/contact" className="btn-primary">
              {dictionary.servicesPage.ctaButton}
            </Link>
          </div>
        </section>
      </main>
      <Footer dictionary={dictionary} />
    </div>
  )
}
