import Link from "next/link"

export function FinalCTA({ dictionary }: { dictionary: any }) {
  return (
    <section className="bg-black py-20">
      <div className="container space-y-8 text-center">
        <h2 className="text-4xl text-ivory md:text-5xl">
          {dictionary.finalCTA.title}
          <span className="text-beige">{dictionary.finalCTA.titleHighlight}</span>
          <br />
          {dictionary.finalCTA.subtitle}
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-ivory/55">{dictionary.finalCTA.description}</p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/contact" className="btn-primary">
            {dictionary.finalCTA.demo}
          </Link>
          <Link href="/contact" className="btn-outline">
            {dictionary.finalCTA.contact}
          </Link>
        </div>
        <p className="text-xs uppercase tracking-[0.18em] text-beige/80">{dictionary.finalCTA.freeConsultation}</p>
      </div>
    </section>
  )
}
