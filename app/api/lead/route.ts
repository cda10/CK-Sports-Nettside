import { NextResponse } from "next/server"
import { Resend } from "resend"

export const runtime = "nodejs"

type LeadType = "bedrift" | "reise"

type LeadPayload = {
  type: LeadType
  name?: string
  email?: string
  phone?: string
  // bedrift
  company?: string
  employees?: string
  location?: string
  // reise
  trip?: string
  people?: string
  message?: string
  // honeypot
  website?: string
}

const TO = process.env.LEAD_TO_EMAIL || "kathrine@maaseide.no"
const FROM = process.env.LEAD_FROM_EMAIL || "CK Sports <onboarding@resend.dev>"

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
}

function row(label: string, value?: string) {
  if (!value) return ""
  return `<tr><td style="padding:4px 12px 4px 0;color:#77716c">${label}</td><td style="padding:4px 0;color:#1f3a4d"><strong>${value}</strong></td></tr>`
}

export async function POST(request: Request) {
  let data: LeadPayload
  try {
    data = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: "Ugyldig forespørsel." }, { status: 400 })
  }

  // Honeypot: silently accept bots without sending.
  if (data.website) return NextResponse.json({ ok: true })

  const name = (data.name || "").trim()
  const email = (data.email || "").trim()
  if (!name || !isEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Fyll inn navn og en gyldig e-postadresse." },
      { status: 422 },
    )
  }

  const isBedrift = data.type === "bedrift"
  const subject = isBedrift
    ? `Ny bedriftshenvendelse — ${data.company || name}`
    : `Ny reisehenvendelse — ${data.trip || "Move & Yoga"}`

  const html = `
    <div style="font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.5">
      <h2 style="color:#1f3a4d;margin:0 0 12px">${isBedrift ? "Bedrifts-bootcamp" : "Move & Yoga treningsreise"} — ny henvendelse</h2>
      <table style="border-collapse:collapse">
        ${row("Navn", name)}
        ${row("E-post", email)}
        ${row("Telefon", data.phone)}
        ${isBedrift ? row("Bedrift", data.company) : row("Reise", data.trip)}
        ${isBedrift ? row("Antall ansatte", data.employees) : row("Antall personer", data.people)}
        ${isBedrift ? row("Sted", data.location) : ""}
      </table>
      ${data.message ? `<p style="margin:16px 0 4px;color:#77716c">Melding:</p><p style="color:#1f3a4d;white-space:pre-wrap">${data.message}</p>` : ""}
    </div>`

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    // Not configured yet (e.g. local dev without key). Log so nothing is lost.
    console.warn("[lead] RESEND_API_KEY missing — lead not emailed:", { subject, email })
    return NextResponse.json(
      { ok: false, error: "not_configured" },
      { status: 503 },
    )
  }

  try {
    const resend = new Resend(apiKey)
    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject,
      html,
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[lead] send failed", err)
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 })
  }
}
