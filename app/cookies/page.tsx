import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getDictionary } from "@/lib/get-dictionary"
import { pageMetadata } from "@/lib/seo-utils"

export const metadata = pageMetadata({
  title: "Politica cookies",
  description:
    "Politica de utilizare a cookie-urilor pe site-ul Cristache. Află ce cookie-uri folosim și cum îți poți gestiona preferințele.",
  path: "/cookies",
})

export default async function CookiesPage() {
  const dictionary = await getDictionary()
  const content = dictionary.legal_cookies

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
                <p className="text-slate-300 leading-relaxed mb-4">
                  {content.section2.content}
                </p>
                <ul className="text-slate-300 space-y-2 ml-6">
                  {content.section2.list.map((item: any, i: number) => (
                    <li key={i}>
                      • <strong className="text-white">{item.title}</strong> {item.desc}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-beige mb-4">{content.section3.title}</h2>

                <div className="space-y-6">
                  {content.section3.items.map((item: any, i: number) => (
                    <div key={i} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                      <h3 className="text-xl font-medium text-white mb-3">{item.title}</h3>
                      <p className="text-slate-300 mb-3">
                        {item.desc}
                      </p>
                      <ul className="text-slate-300 space-y-1 ml-4">
                        {item.list.map((li: string, j: number) => (
                          <li key={j}>• {li}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-beige mb-4">{content.section4.title}</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  {content.section4.content}
                </p>

                <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                  <div className="grid gap-4 md:grid-cols-2">
                    {content.section4.services.map((service: any, i: number) => (
                      <div key={i}>
                        <h4 className="font-medium text-beige mb-2">{service.title}</h4>
                        <ul className="text-slate-300 text-sm space-y-1">
                          {service.list.map((li: string, j: number) => (
                            <li key={j}>• {li}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-beige mb-4">{content.section5.title}</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  {content.section5.content}
                </p>
                <ul className="text-slate-300 space-y-2 ml-6">
                  {content.section5.list.map((item: any, i: number) => (
                    <li key={i}>
                      • <strong className="text-white">{item.title}</strong> {item.desc}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-beige mb-4">{content.section6.title}</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  {content.section6.content}
                </p>

                <div className="space-y-4">
                  <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                    <h3 className="text-lg font-medium text-white mb-3">{content.section6.browserSettings.title}</h3>
                    <p className="text-slate-300 mb-3">
                      {content.section6.browserSettings.desc}
                    </p>
                    <ul className="text-slate-300 space-y-1 ml-4">
                      {content.section6.browserSettings.list.map((li: string, i: number) => (
                        <li key={i}>• {li}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                    <h3 className="text-lg font-medium text-white mb-3">{content.section6.optOut.title}</h3>
                    <ul className="text-slate-300 space-y-2 ml-4">
                      {content.section6.optOut.list.map((item: string, i: number) => (
                         <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-beige mb-4">{content.section7.title}</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  {content.section7.content}
                </p>
                <ul className="text-slate-300 space-y-2 ml-6">
                  {content.section7.list.map((item: any, i: number) => (
                    <li key={i}>
                      • <strong className="text-white">{item.title}</strong> {item.desc}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-beige mb-4">
                  {content.section8.title}
                </h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  {content.section8.content}
                </p>
                <ul className="text-slate-300 space-y-2 ml-6">
                  {content.section8.list.map((li: string, i: number) => (
                    <li key={i}>• {li}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-beige mb-4">{content.section9.title}</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  {content.section9.content}
                </p>
                <ul className="text-slate-300 space-y-2 ml-6">
                   {content.section9.list.map((li: string, i: number) => (
                    <li key={i}>• {li}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-beige mb-4">{content.section10.title}</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  {content.section10.content}
                </p>
                <ul className="text-slate-300 space-y-2 ml-6">
                  {content.section10.list.map((item: any, i: number) => (
                    <li key={i}>
                      • <strong className="text-white">{item.title}</strong> {item.desc}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-beige mb-4">{content.section11.title}</h2>
                <p className="text-slate-300 leading-relaxed">
                  {content.section11.content}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-beige mb-4">{content.section12.title}</h2>
                <p className="text-slate-300 leading-relaxed">
                  {content.section12.content}
                </p>
                <div className="text-slate-300 mt-4 space-y-2 bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                  <p>
                    <strong className="text-white">{content.section12.email}:</strong> <a className="text-beige hover:underline" href="mailto:contact@cristache.ro">contact@cristache.ro</a>
                  </p>
                  <p>
                    <strong className="text-white">{content.section12.phone}:</strong> <a className="text-beige hover:underline" href="tel:+40735371775">(+40) 735 371 775</a>
                  </p>
                  <p>
                    <strong className="text-white">{content.section12.address}:</strong> București, România
                  </p>
                  <p>
                    <strong className="text-white">{content.section12.dpo}:</strong> Adrian Cristin Cristache
                  </p>
                </div>
              </section>

              <section>
                <p className="text-slate-300 leading-relaxed mt-8 pt-8 border-t border-slate-700">
                  <strong className="text-white">{content.lastUpdated}:</strong> {content.lastUpdatedDate}
                </p>
                <p className="text-slate-400 text-sm mt-2">
                  {content.gdprCompliance}
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