import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { getDictionary } from "@/lib/get-dictionary"
import { pageMetadata } from "@/lib/seo-utils"

export const metadata = pageMetadata({
  title: "Portofoliu: site-uri, magazine online și aplicații mobile",
  description:
    "16 proiecte livrate: magazine Shopify pentru România, UE și SUA, site-uri de prezentare, platforme cu plăți, automatizări și aplicații mobile iOS și Android.",
  path: "/portofoliu",
})

export default async function PortofoliuPage() {
  const dictionary = await getDictionary()

  return (
    <div className="min-h-screen bg-black">
      <Header dictionary={dictionary} />
      <main className="pt-20">
        <section className="py-20">
          <div className="container">
            <div className="mb-16 space-y-6 text-center">
              <h1 className="text-4xl text-ivory md:text-6xl">
                {dictionary.portfolio.title}{" "}
                <span className="text-beige">{dictionary.portfolio.titleHighlight}</span>
              </h1>
              <p className="mx-auto max-w-3xl text-xl leading-relaxed text-ivory/60">
                {dictionary.portfolio.description}
              </p>
            </div>
            <PortfolioGrid dictionary={dictionary} />
          </div>
        </section>
      </main>
      <Footer dictionary={dictionary} />
    </div>
  )
}
