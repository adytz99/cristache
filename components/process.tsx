export function Process({ dictionary }: { dictionary: any }) {
  const steps = [
    dictionary.process.steps.analysis,
    dictionary.process.steps.strategy,
    dictionary.process.steps.implementation,
    dictionary.process.steps.monitoring,
  ] as { title: string; description: string; duration: string }[]

  return (
    <section id="proces" className="bg-black py-20">
      <div className="container">
        <div className="mb-14 text-center">
          <h2 className="text-4xl text-ivory md:text-5xl">
            {dictionary.process.title}
            <span className="text-beige">{dictionary.process.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ivory/55">{dictionary.process.description}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              style={{ "--i": index } as React.CSSProperties}
              className="reveal-card group rounded-2xl border border-beige/15 p-6 text-center transition-[border-color,background-color,translate] duration-300 hover:-translate-y-1.5 hover:border-beige/50 hover:bg-white/[0.04]"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-beige font-serif text-xl text-beige transition-colors duration-300 group-hover:bg-beige group-hover:text-ink">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mb-2 text-2xl text-ivory">{step.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-ivory/55">{step.description}</p>
              <span className="inline-flex rounded-full border border-beige/30 px-3 py-1 text-xs uppercase tracking-wider text-beige">
                {step.duration}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
