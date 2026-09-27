import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Target, Users, Zap, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getDictionary } from "@/lib/get-dictionary"
import { pageMetadata } from "@/lib/seo-utils"
import { JsonLd } from "@/components/json-ld"
import { aboutSchema } from "@/lib/schema"
import adrianImg from "@/public/images/adrian-cristache.jpg"
import nicoletaImg from "@/public/images/nicoleta-cristache.jpg"

export const metadata = pageMetadata({
  title: "Despre noi: Adrian și Nicoleta Cristache",
  description:
    "Cristache este condus de Adrian Cristin Cristache și Nicoleta Alexandra Cristache, administratori. Conținut, social media, web, aplicații mobile și platforme din București.",
  path: "/despre",
})

export default async function DesprePage() {
  const dictionary = await getDictionary()

  const values = [
    {
      icon: Target,
      title: dictionary.despre.values.results.title,
      description: dictionary.despre.values.results.description,
    },
    {
      icon: Users,
      title: dictionary.despre.values.partnership.title,
      description: dictionary.despre.values.partnership.description,
    },
    {
      icon: Zap,
      title: dictionary.despre.values.innovation.title,
      description: dictionary.despre.values.innovation.description,
    },
    {
      icon: Award,
      title: dictionary.despre.values.quality.title,
      description: dictionary.despre.values.quality.description,
    },
  ]

  const team = [
    {
      name: "Adrian Cristin Cristache",
      role: "Administrator",
      description: dictionary.despre.team.ceo.description,
      image: adrianImg,
    },
    {
      name: "Nicoleta Alexandra Cristache",
      role: "Administrator",
      description: dictionary.despre.team.seo.description,
      image: nicoletaImg,
    },
  ]

  const diff = [
    dictionary.despre.diff.item1,
    dictionary.despre.diff.item2,
    dictionary.despre.diff.item3,
    dictionary.despre.diff.item4,
  ]

  return (
    <div className="min-h-screen bg-black">
      <JsonLd data={aboutSchema()} />
      <Header dictionary={dictionary} />
      <main className="pt-20">
        <section className="py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <h1 className="text-4xl text-ivory md:text-6xl">
                {dictionary.despre.hero.title} <span className="text-beige">Cristache</span>
              </h1>
              <p className="text-xl leading-relaxed text-ivory/60">{dictionary.despre.hero.description}</p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container grid items-center gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <h2 className="text-4xl text-ivory">
                {dictionary.despre.mission.title}{" "}
                <span className="text-beige">{dictionary.despre.mission.titleHighlight}</span>
              </h2>
              <div className="space-y-5 leading-relaxed text-ivory/70">
                <p>{dictionary.despre.mission.p1}</p>
                <p>{dictionary.despre.mission.p2}</p>
                <p>{dictionary.despre.mission.p3}</p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="btn-primary">
                  {dictionary.despre.mission.ctaCollab}
                </Link>
                <Link href="/portofoliu" className="btn-outline">
                  {dictionary.despre.mission.ctaProjects}
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-beige/20 p-8">
              <h3 className="mb-6 text-3xl text-ivory">{dictionary.despre.diff.title}</h3>
              <ul className="space-y-4">
                {diff.map((item) => (
                  <li key={item.title} className="flex items-start gap-3 text-ivory/70">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-beige" />
                    <span>
                      <strong className="text-ivory">{item.title}</strong> {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-y border-beige/15 py-20">
          <div className="container">
            <div className="mb-12 space-y-4 text-center">
              <h2 className="text-4xl text-ivory">
                {dictionary.despre.values.title}{" "}
                <span className="text-beige">{dictionary.despre.values.titleHighlight}</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-ivory/55">{dictionary.despre.values.description}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <Card key={value.title} className="border-beige/15 bg-white/[0.03]">
                  <CardContent className="space-y-4 p-6 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-beige/30">
                      <value.icon className="h-6 w-6 text-beige" />
                    </div>
                    <h3 className="text-2xl text-ivory">{value.title}</h3>
                    <p className="text-sm leading-relaxed text-ivory/55">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="mb-12 space-y-4 text-center">
              <h2 className="text-4xl text-ivory">{dictionary.despre.team.title}</h2>
              <p className="mx-auto max-w-2xl text-lg text-ivory/55">{dictionary.despre.team.description}</p>
            </div>
            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              {team.map((member) => (
                <Card key={member.name} className="overflow-hidden border-beige/15 bg-white/[0.03]">
                  <div className="relative aspect-[3/4] bg-black">
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.role} Cristache`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 480px"
                    />
                  </div>
                  <CardContent className="space-y-2 p-6 text-center">
                    <h3 className="text-2xl text-ivory">{member.name}</h3>
                    <p className="text-sm uppercase tracking-[0.16em] text-beige">{member.role}</p>
                    <p className="text-sm leading-relaxed text-ivory/55">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-beige/15 py-20">
          <div className="container space-y-8 text-center">
            <h2 className="text-4xl text-ivory">
              {dictionary.despre.cta.title}{" "}
              <span className="text-beige">{dictionary.despre.cta.titleHighlight}</span>?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-ivory/55">{dictionary.despre.cta.description}</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                {dictionary.despre.cta.consultation}
              </Link>
              <Link href="/portofoliu" className="btn-outline">
                {dictionary.header.portfolio}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer dictionary={dictionary} />
    </div>
  )
}
