import { type NextRequest, NextResponse } from "next/server"

const ACCENT = "#E8DCC8"
const INK = "#0A0A0A"

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, budget, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Câmpurile obligatorii lipsesc" }, { status: 400 })
    }

    let emailSent = false

    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import("resend")
        const resend = new Resend(process.env.RESEND_API_KEY)
        const safeName = escapeHtml(String(name))
        const safeEmail = escapeHtml(String(email))
        const safePhone = phone ? escapeHtml(String(phone)) : ""
        const safeService = service ? escapeHtml(String(service)) : ""
        const safeBudget = budget ? escapeHtml(String(budget)) : ""
        const safeMessage = escapeHtml(String(message)).replace(/\n/g, "<br/>")

        await resend.emails.send({
          from: "Cristache <contact@cristache.ro>",
          to: ["contact@cristache.ro"],
          replyTo: email,
          subject: `Nouă solicitare de contact - ${name}`,
          html: `
            <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: ${INK}; padding: 24px; color: ${ACCENT};">
              <h1 style="margin: 0 0 8px; font-weight: 500;">Nouă solicitare de contact</h1>
              <p style="margin: 0 0 24px; color: #d9d0c4;">Formularul de pe cristache.ro</p>
              <div style="background: #141414; padding: 24px; border: 1px solid rgba(232,220,200,0.25);">
                <p><strong>Nume:</strong> ${safeName}</p>
                <p><strong>Email:</strong> ${safeEmail}</p>
                ${safePhone ? `<p><strong>Telefon:</strong> ${safePhone}</p>` : ""}
                ${safeService ? `<p><strong>Serviciu dorit:</strong> ${safeService}</p>` : ""}
                ${safeBudget ? `<p><strong>Buget estimat:</strong> ${safeBudget}</p>` : ""}
                <p><strong>Mesaj:</strong></p>
                <div style="padding: 12px; background: #0A0A0A; border: 1px solid rgba(232,220,200,0.2); line-height: 1.6;">${safeMessage}</div>
              </div>
            </div>
          `,
        })

        await resend.emails.send({
          from: "Cristache <contact@cristache.ro>",
          to: [email],
          subject: "Am primit mesajul tău | Cristache",
          html: `
            <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: ${INK}; padding: 24px; color: ${ACCENT};">
              <h1 style="margin: 0 0 8px; font-weight: 500;">Mulțumim, ${safeName}.</h1>
              <p style="color: #d9d0c4;">Am primit mesajul și revenim în maxim 24 de ore.</p>
              <div style="margin-top: 24px; background: #141414; padding: 24px; border: 1px solid rgba(232,220,200,0.25);">
                <p style="margin-top: 0;"><strong>Ce urmează</strong></p>
                <p>1. Citim proiectul.</p>
                <p>2. Îți scriem în maxim 24 de ore.</p>
                <p>3. Stabilim împreună următorul pas.</p>
                <p><strong>Serviciu:</strong> ${safeService || "Nu a fost specificat"}</p>
                <p><strong>Buget:</strong> ${safeBudget || "Nu a fost specificat"}</p>
                <p style="margin-bottom: 0;">
                  <a href="mailto:contact@cristache.ro" style="color: ${ACCENT};">contact@cristache.ro</a>
                  ·
                  <a href="tel:+40735371775" style="color: ${ACCENT};">(+40) 735 371 775</a>
                </p>
              </div>
              <p style="margin-top: 20px; font-size: 12px; color: #a3988c;">© 2026 Cristache</p>
            </div>
          `,
        })

        emailSent = true
      } catch (emailError) {
        console.error("[contact-route] Email sending failed:", emailError)
      }
    }

    return NextResponse.json(
      {
        success: true,
        emailSent,
        message: emailSent
          ? "Mesaj trimis cu succes! Îți vom răspunde în maxim 24 de ore."
          : "Mesaj primit cu succes! (Emailurile nu au fost trimise)",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[contact-route] General error:", error)
    return NextResponse.json(
      { error: "A apărut o eroare la procesarea cererii" },
      { status: 500 },
    )
  }
}
