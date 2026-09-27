import { Clapperboard, CreditCard, Database, Globe, Smartphone, Sparkles } from "lucide-react"

const icons = [Clapperboard, Sparkles, Globe, Smartphone, CreditCard, Database]

export function Features({ dictionary }: { dictionary: any }) {
  const items = Object.values(dictionary.features.items) as { title: string; description: string }[]

  return (
    <section className="bg-black py-20">
      <div className="container">
        <div className="mb-14 text-center">
          <h2 className="text-4xl text-ivory md:text-5xl">{dictionary.features.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ivory/55">{dictionary.features.description}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((feature, index) => {
            const Icon = icons[index] ?? Sparkles
            return (
              <div
                key={feature.title}
                style={{ "--i": index } as React.CSSProperties}
                className="reveal-card group rounded-2xl border border-beige/15 bg-white/[0.03] p-6 transition-[border-color,background-color,translate] duration-300 hover:-translate-y-1.5 hover:border-beige/50 hover:bg-white/[0.07]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-beige/30 transition-colors duration-300 group-hover:border-beige group-hover:bg-beige">
                  <Icon className="h-5 w-5 text-beige transition-colors duration-300 group-hover:text-ink" />
                </div>
                <h3 className="mb-2 text-2xl text-ivory">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-ivory/55">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
