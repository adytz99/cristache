import { Plus } from "lucide-react"
import type { ServiceFaq } from "@/lib/services-data"

export function FaqList({ items, tone = "dark" }: { items: ServiceFaq[]; tone?: "dark" | "light" }) {
  const light = tone === "light"
  return (
    <div className={`divide-y ${light ? "divide-black/10 border-black/10" : "divide-beige/15 border-beige/15"} border-y`}>
      {items.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
            <h3 className={`text-xl leading-snug md:text-2xl ${light ? "text-ink" : "text-ivory"}`}>{item.question}</h3>
            <Plus
              className={`mt-1 h-5 w-5 shrink-0 transition-transform group-open:rotate-45 ${
                light ? "text-beige-deep" : "text-beige"
              }`}
            />
          </summary>
          <p className={`mt-4 max-w-3xl leading-relaxed ${light ? "text-ink/70" : "text-ivory/65"}`}>{item.answer}</p>
        </details>
      ))}
    </div>
  )
}
