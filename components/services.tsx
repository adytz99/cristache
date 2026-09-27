import Link from "next/link"
import { ArrowRight, Check, Clapperboard, Database, Globe, Megaphone, Scissors, Smartphone, Target, Layers } from "lucide-react"
import { homeCardService } from "@/lib/services-data"

const icons = {
  strategy: Target,
  production: Clapperboard,
  post: Scissors,
  ads: Megaphone,
  web: Globe,
  mobile: Smartphone,
  platforms: Layers,
  data: Database,
} as const

export function Services({ dictionary }: { dictionary: any }) {
  const items = dictionary.services.items as Record<
    string,
    { title: string; subtitle: string; features: string[] }
  >

  return (
    <section id="servicii" className="bg-ivory py-20 text-ink">
      <div className="container">
        <div className="mb-14 text-center">
          <h2 className="text-4xl text-ink md:text-5xl">
            {dictionary.services.title}
            <span className="text-beige-deep">{dictionary.services.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink/60">{dictionary.services.description}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {Object.entries(items).map(([key, service], index) => {
            const Icon = icons[key as keyof typeof icons] ?? Target
            return (
              <Link
                key={key}
                href={`/servicii/${homeCardService[key] ?? ""}`}
                style={{ "--i": index } as React.CSSProperties}
                className="reveal-card group flex flex-col rounded-3xl border border-black/5 bg-white p-7 shadow-sm transition-[background-color,box-shadow,translate] duration-300 hover:-translate-y-1.5 hover:bg-ink hover:shadow-2xl hover:shadow-black/25"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-ivory transition-colors duration-300 group-hover:bg-white/10">
                  <Icon className="h-6 w-6 text-ink transition-colors duration-300 group-hover:text-ivory" />
                </div>
                <h3 className="text-2xl text-ink transition-colors duration-300 group-hover:text-ivory">{service.title}</h3>
                <p className="mt-1 text-sm font-medium text-beige-deep transition-colors duration-300 group-hover:text-beige">
                  {service.subtitle}
                </p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-ink/75 transition-colors duration-300 group-hover:text-ivory/75"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-beige-deep transition-colors duration-300 group-hover:text-beige" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors duration-300 group-hover:text-beige">
                  {dictionary.services.more}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
