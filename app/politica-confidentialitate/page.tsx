import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getDictionary } from "@/lib/get-dictionary"
import { pageMetadata } from "@/lib/seo-utils"

export const metadata = pageMetadata({
  title: "Politica de confidențialitate",
  description: "Cum colectează, folosește și protejează Cristache datele personale.",
  path: "/politica-confidentialitate",
})

export default async function PoliticaConfidentialitate() {
  const dictionary = await getDictionary()
  const content = dictionary.legal_privacy

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
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-beige mb-4">{content.section2.title}</h2>
                <p className="text-slate-300 leading-relaxed mb-4">{content.section2.content}</p>
                <ul className="text-slate-300 space-y-2 ml-6">
                  {content.section2.list.map((item: any, i: number) => (
                    <li key={i}>
                      • <strong>{item.title}</strong> {item.desc}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-beige mb-4">{content.section3.title}</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  {content.section3.content}
                </p>
                <ul className="text-slate-300 space-y-2 ml-6">
                  {content.section3.list.map((li: string, i: number) => (
                    <li key={i}>• {li}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-beige mb-4">{content.section4.title}</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  {content.section4.content}
                </p>
                <ul className="text-slate-300 space-y-2 ml-6">
                  {content.section4.list.map((item: any, i: number) => (
                    <li key={i}>
                      • <strong>{item.title}</strong> {item.desc}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-beige mb-4">{content.section5.title}</h2>
                <p className="text-slate-300 leading-relaxed">
                  {content.section5.content}
                </p>
                <ul className="text-slate-300 space-y-2 ml-6 mt-4">
                  {content.section5.list.map((li: string, i: number) => (
                    <li key={i}>• {li}</li>
                  ))}
                </ul>
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
                <ul className="text-slate-300 space-y-2 ml-6 mt-4">
                  {content.section7.list.map((item: any, i: number) => (
                    <li key={i}>
                      {typeof item === 'string' ? (
                        <>• {item}</>
                      ) : (
                        <>• <strong>{item.title}</strong> {item.desc}</>
                      )}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-beige mb-4">{content.section8.title}</h2>
                <p className="text-slate-300 leading-relaxed mb-4">{content.section8.content}</p>
                <ul className="text-slate-300 space-y-2 ml-6">
                  {content.section8.list.map((item: any, i: number) => (
                    <li key={i}>
                      • <strong>{item.title}</strong> {item.desc}
                    </li>
                  ))}
                </ul>
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
                <div className="text-slate-300 mt-4 space-y-2">
                  <p>
                    <strong>{content.section10.email}:</strong> <a className="text-beige hover:underline" href="mailto:contact@cristache.ro">contact@cristache.ro</a>
                  </p>
                  <p>
                    <strong>{content.section10.phone}:</strong> <a className="text-beige hover:underline" href="tel:+40735371775">(+40) 735 371 775</a>
                  </p>
                  <p>
                    <strong>{content.section10.address}:</strong> București, România
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-beige mb-4">{content.section11.title}</h2>
                <p className="text-slate-300 leading-relaxed">
                  {content.section11.content}
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