"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { Send, CheckCircle } from "lucide-react"
import Link from "next/link"

const fieldClass =
  "bg-white/5 border-beige/20 text-ivory placeholder:text-ivory/35 focus:border-beige"

export function ContactForm({ dictionary }: { dictionary: any }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
    agreeToTerms: false,
  })
  const { toast } = useToast()

  const services = Object.values(dictionary.services.items).map(
    (item: any) => item.title as string,
  )

  const budgetRanges = [
    dictionary.contact.form.budgetOptions.tier1,
    dictionary.contact.form.budgetOptions.tier2,
    dictionary.contact.form.budgetOptions.tier3,
    dictionary.contact.form.budgetOptions.tier4,
    dictionary.contact.form.budgetOptions.tier5,
    dictionary.contact.form.budgetOptions.tier6,
  ]

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message || !formData.agreeToTerms) {
      toast({
        title: dictionary.contact.form.error,
        description: dictionary.contact.form.errorFillFields,
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const responseData = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        toast({
          title: dictionary.contact.form.successTitle,
          description: responseData.message || dictionary.contact.form.successDesc,
        })
      } else {
        throw new Error(responseData.error || "Eroare la trimiterea mesajului")
      }
    } catch (error) {
      toast({
        title: dictionary.contact.form.error,
        description:
          error instanceof Error
            ? error.message
            : "A apărut o eroare la trimiterea mesajului. Te rugăm să încerci din nou.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="space-y-6 rounded-3xl border border-beige/20 bg-white/[0.03] p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-beige/30">
          <CheckCircle className="h-8 w-8 text-beige" />
        </div>
        <h2 className="text-3xl text-ivory">{dictionary.contact.form.successTitle}</h2>
        <p className="text-ivory/60">{dictionary.contact.form.successDesc}</p>
        <Button
          onClick={() => {
            setIsSubmitted(false)
            setFormData({
              name: "",
              email: "",
              phone: "",
              service: "",
              budget: "",
              message: "",
              agreeToTerms: false,
            })
          }}
          variant="outline"
          className="border-beige text-beige hover:bg-beige hover:text-black"
        >
          {dictionary.contact.form.sendAnother}
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6 rounded-3xl border border-beige/20 bg-white/[0.03] p-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm text-ivory/80">
            {dictionary.contact.form.name} <span className="text-beige">*</span>
          </label>
          <Input
            id="name"
            type="text"
            placeholder={dictionary.contact.form.namePlaceholder}
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className={fieldClass}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm text-ivory/80">
            {dictionary.contact.form.email} <span className="text-beige">*</span>
          </label>
          <Input
            id="email"
            type="email"
            placeholder={dictionary.contact.form.emailPlaceholder}
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className={fieldClass}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm text-ivory/80">
            {dictionary.contact.form.phone}
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder={dictionary.contact.form.phonePlaceholder}
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className={fieldClass}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="service" className="text-sm text-ivory/80">
            {dictionary.contact.form.service}
          </label>
          <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
            <SelectTrigger className={fieldClass}>
              <SelectValue placeholder={dictionary.contact.form.selectService} />
            </SelectTrigger>
            <SelectContent className="border-beige/20 bg-ink text-ivory">
              {services.map((service) => (
                <SelectItem key={service} value={service} className="focus:bg-beige/15 focus:text-ivory">
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 md:col-span-2">
          <label htmlFor="budget" className="text-sm text-ivory/80">
            {dictionary.contact.form.budget}
          </label>
          <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
            <SelectTrigger className={fieldClass}>
              <SelectValue placeholder={dictionary.contact.form.selectBudget} />
            </SelectTrigger>
            <SelectContent className="border-beige/20 bg-ink text-ivory">
              {budgetRanges.map((range) => (
                <SelectItem key={range} value={range} className="focus:bg-beige/15 focus:text-ivory">
                  {range}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm text-ivory/80">
          {dictionary.contact.form.message} <span className="text-beige">*</span>
        </label>
        <Textarea
          id="message"
          placeholder={dictionary.contact.form.messagePlaceholder}
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          className={`${fieldClass} min-h-[120px] resize-none`}
          maxLength={2000}
          required
        />
        <div className="text-right text-xs text-ivory/40">{formData.message.length}/2000 caractere</div>
      </div>

      <div className="flex items-start gap-3">
        <Checkbox
          id="terms"
          checked={formData.agreeToTerms}
          onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
          className="mt-1 border-beige/40 data-[state=checked]:border-beige data-[state=checked]:bg-beige data-[state=checked]:text-black"
        />
        <label htmlFor="terms" className="text-sm leading-relaxed text-ivory/60">
          {dictionary.contact.form.agreeToTerms} <span className="text-beige">*</span>{" "}
          <Link href="/termeni-conditii" className="text-beige hover:underline">
            {dictionary.contact.form.terms}
          </Link>{" "}
          și{" "}
          <Link href="/politica-confidentialitate" className="text-beige hover:underline">
            {dictionary.contact.form.privacy}
          </Link>
          .
        </label>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-beige py-6 text-base font-semibold text-black hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? (
          <span>{dictionary.contact.form.sending}</span>
        ) : (
          <span className="inline-flex items-center gap-2">
            <Send className="h-4 w-4" />
            {dictionary.contact.form.submit}
          </span>
        )}
      </Button>

      <div className="flex items-center justify-center gap-2 text-sm text-ivory/50">
        <CheckCircle className="h-4 w-4 text-beige" />
        <span>{dictionary.contact.form.responseTime}</span>
      </div>
    </form>
  )
}
