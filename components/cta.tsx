import Link from "next/link"

export function CTA({ dictionary }: { dictionary: any }) {
  return (
    <section className="border-y border-beige/15 bg-black py-20">
      <div className="container space-y-8 text-center">
        <h2 className="text-4xl text-ivory md:text-5xl">{dictionary.cta.title}</h2>
        <p className="mx-auto max-w-2xl text-lg text-ivory/55">{dictionary.cta.description}</p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/contact" className="btn-primary">
            {dictionary.cta.startFree}
          </Link>
          <Link href="/portofoliu" className="btn-outline">
            {dictionary.cta.demo}
          </Link>
        </div>
        <p className="text-xs uppercase tracking-[0.18em] text-beige/80">{dictionary.cta.noSetup}</p>
      </div>
    </section>
  )
}
