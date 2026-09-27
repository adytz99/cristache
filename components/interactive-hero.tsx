import Link from "next/link"
import Image from "next/image"

export function InteractiveHero({ dictionary }: { dictionary: any }) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 pb-24 pt-28 md:pb-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, rgba(232,220,200,0.08) 0%, transparent 62%)" }}
      />

      <div className="relative mx-auto max-w-4xl space-y-8 text-center">
        <Image
          src="/images/logo-wordmark.png"
          alt="Cristache Web & Creative"
          width={920}
          height={280}
          priority
          className="mx-auto h-auto w-full max-w-3xl mix-blend-screen"
        />
        <div className="mx-auto brand-rule" />
        <h1 className="mx-auto max-w-3xl font-serif text-3xl leading-tight text-ivory md:text-5xl">
          {dictionary.hero.heading}
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-ivory/70 md:text-xl">
          {dictionary.hero.description}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
          <Link href="/contact" className="btn-primary">
            {dictionary.hero.demo}
          </Link>
          <Link href="/servicii" className="btn-outline">
            {dictionary.hero.services}
          </Link>
        </div>
      </div>
    </section>
  )
}
