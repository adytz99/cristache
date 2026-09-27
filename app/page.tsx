import { Header } from "@/components/header"
import { InteractiveHero } from "@/components/interactive-hero"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { Features } from "@/components/features"
import { Stats } from "@/components/stats"
import { CTA } from "@/components/cta"
import { HomeFaq } from "@/components/home-faq"
import { getDictionary } from "@/lib/get-dictionary"

export default async function HomePage() {
  const dictionary = await getDictionary()

  return (
    <div className="min-h-screen bg-black">
      <Header dictionary={dictionary} />
      <main>
        <InteractiveHero dictionary={dictionary} />
        <Services dictionary={dictionary} />
        <Features dictionary={dictionary} />
        <Stats dictionary={dictionary} />
        <Process dictionary={dictionary} />
        <CTA dictionary={dictionary} />
        <HomeFaq dictionary={dictionary} />
        <FinalCTA dictionary={dictionary} />
      </main>
      <Footer dictionary={dictionary} />
    </div>
  )
}
