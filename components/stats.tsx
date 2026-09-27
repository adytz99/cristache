export function Stats({ dictionary }: { dictionary: any }) {
  const items = Object.values(dictionary.stats.items) as string[]

  return (
    <section className="border-y border-beige/15 bg-black py-16">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="text-4xl text-ivory md:text-5xl">{dictionary.stats.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ivory/55">{dictionary.stats.description}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map((label, index) => (
            <div
              key={label}
              style={{ "--i": index } as React.CSSProperties}
              className="reveal-card group border border-beige/15 px-6 py-8 text-center transition-[border-color,background-color,translate] duration-300 hover:-translate-y-1.5 hover:border-beige/50 hover:bg-white/[0.04]"
            >
              <div className="mx-auto mb-4 brand-rule transition-[width] duration-300 group-hover:w-24!" />
              <p className="text-sm uppercase tracking-[0.16em] text-ivory/70 transition-colors duration-300 group-hover:text-ivory">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
