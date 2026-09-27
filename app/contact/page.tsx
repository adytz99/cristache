import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Mail, Phone, MapPin } from "lucide-react"
import { getDictionary } from "@/lib/get-dictionary"
import { pageMetadata } from "@/lib/seo-utils"

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Cere o propunere pentru conținut, social media, site, aplicație sau platformă. Scrie la contact@cristache.ro sau sună la (+40) 735 371 775. Răspundem în maxim 24 de ore.",
  path: "/contact",
})

export default async function ContactPage() {
  const dictionary = await getDictionary()

  return (
    <div className="min-h-screen bg-black">
      <Header dictionary={dictionary} />
      <main className="pt-20">
        <section className="py-20">
          <div className="container max-w-4xl">
            <div className="mb-14 space-y-5 text-center">
              <h1 className="text-4xl text-ivory md:text-6xl">{dictionary.contact.title}</h1>
              <p className="mx-auto max-w-2xl text-xl leading-relaxed text-ivory/60">{dictionary.contact.description}</p>
            </div>
            <ContactForm dictionary={dictionary} />
          </div>
        </section>

        <section className="border-t border-beige/15 py-16">
          <div className="container grid gap-8 text-center md:grid-cols-3">
            <a href="mailto:contact@cristache.ro" className="space-y-3 rounded-2xl border border-beige/15 p-8 hover:border-beige/40">
              <Mail className="mx-auto h-6 w-6 text-beige" />
              <h2 className="text-2xl text-ivory">Email</h2>
              <p className="text-ivory/60">contact@cristache.ro</p>
            </a>
            <a href="tel:+40735371775" className="space-y-3 rounded-2xl border border-beige/15 p-8 hover:border-beige/40">
              <Phone className="mx-auto h-6 w-6 text-beige" />
              <h2 className="text-2xl text-ivory">Telefon</h2>
              <p className="text-ivory/60">(+40) 735 371 775</p>
            </a>
            <div className="space-y-3 rounded-2xl border border-beige/15 p-8">
              <MapPin className="mx-auto h-6 w-6 text-beige" />
              <h2 className="text-2xl text-ivory">Locație</h2>
              <p className="text-ivory/60">București, România</p>
            </div>
          </div>
        </section>
      </main>
      <Footer dictionary={dictionary} />
    </div>
  )
}
