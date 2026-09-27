import { FaqList } from "@/components/faq-list"
import { JsonLd } from "@/components/json-ld"
import { homeFaqSchema } from "@/lib/schema"

export function HomeFaq({ dictionary }: { dictionary: any }) {
  const items = dictionary.homeFaq.items as { question: string; answer: string }[]
  return (
    <section className="bg-black py-20">
      <JsonLd data={homeFaqSchema(items)} />
      <div className="container max-w-4xl">
        <h2 className="mb-8 text-center text-4xl text-ivory md:text-5xl">{dictionary.homeFaq.title}</h2>
        <FaqList items={items} />
      </div>
    </section>
  )
}
