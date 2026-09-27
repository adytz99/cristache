import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getDictionary } from "@/lib/get-dictionary"
import { pageMetadata } from "@/lib/seo-utils"

export const metadata = pageMetadata({
  title: "Termeni și condiții",
  description: "Termenii și condițiile de utilizare a serviciilor Cristache.",
  path: "/termeni-conditii",
})

export default async function TermeniConditii() {
  const dictionary = await getDictionary()
  const content = dictionary.legal_terms

  return (
    <div className="min-h-screen bg-black">
      <Header dictionary={dictionary} />
      <main className="pt-20">
        <div className="container py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8">{content.title}</h1>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-beige mb-4">{content.section1.title}</h2>
                <p className="text-slate-300 leading-relaxed">
                  {content.section1.content}
                </p>
                <ul className="text-slate-300 space-y-2 ml-6">
                  {content.section1.list.map((item: any, i: number) => (
                    <li key={i}>
                      • <strong>{item.title}</strong> {item.desc}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-beige mb-4">{content.section2.title}</h2>
                <p className="text-slate-300 leading-relaxed">
                  {content.section2.content}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-beige mb-4">{content.section3.title}</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">{content.section3.uziweb.title}</h3>
                    <ul className="text-slate-300 space-y-2 ml-6">
                      {content.section3.uziweb.list.map((li: string, i: number) => (
                        <li key={i}>• {li}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">{content.section3.client.title}</h3>
                    <ul className="text-slate-300 space-y-2 ml-6">
                      {content.section3.client.list.map((li: string, i: number) => (
                        <li key={i}>• {li}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-beige mb-4">{content.section4.title}</h2>
                <p className="text-slate-300 leading-relaxed">
                  {content.section4.content}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-beige mb-4">{content.section5.title}</h2>
                <p className="text-slate-300 leading-relaxed">
                  {content.section5.content}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-beige mb-4">{content.section6.title}</h2>
                <p className="text-slate-300 leading-relaxed">
                  {content.section6.content}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-beige mb-4">{content.section7.title}</h2>
                <p className="text-slate-300 leading-relaxed">
                  {content.section7.content}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-beige mb-4">{content.section8.title}</h2>
                <p className="text-slate-300 leading-relaxed">
                  {content.section8.content}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-beige mb-4">{content.section9.title}</h2>
                <p className="text-slate-300 leading-relaxed">
                  {content.section9.content}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-beige mb-4">{content.section10.title}</h2>
                <p className="text-slate-300 leading-relaxed">
                  {content.section10.content}
                </p>
                <p className="text-slate-300 leading-relaxed mt-4">
                  <strong>{content.lastUpdated}:</strong> {content.lastUpdatedDate}
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer dictionary={dictionary} />
    </div>
  )
}