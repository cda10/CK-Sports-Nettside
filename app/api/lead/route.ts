import { NextResponse } from "next/server"

export const runtime = "nodejs"

type LeadType = "bedrift" | "reise"

type LeadPayload = {
  type: LeadType
  name?: string
  email?: string
  phone?: string
  company?: string
  employees?: string
  location?: string
  trip?: string
  people?: string
  message?: string
  website?: string // honeypot
}

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
}

export async function POST(request: Request) {
  let data: LeadPayload
  try {
    data = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: "Ugyldig forespørsel." }, { status: 400 })
  }

  // Honeypot: stille aksept for bots.
  if (data.website) return NextResponse.json({ ok: true })

  const name = (data.name || "").trim()
  const email = (data.email || "").trim()
  if (!name || !isEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Fyll inn navn og en gyldig e-postadresse." },
      { status: 422 },
    )
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY
  if (!accessKey) {
    console.warn("[lead] WEB3FORMS_ACCESS_KEY mangler — lead ikke sendt:", { name, email })
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 })
  }

  const isBedrift = data.type === "bedrift"
  const subject = isBedrift
    ? `Ny bedriftshenvendelse — ${data.company || name}`
    : `Ny reisehenvendelse — ${data.trip || "Move & Yoga"}`

  // Web3Forms lister alle feltene i e-posten. `email` brukes som svar-til.
  const fields: Record<string, string> = {
    access_key: accessKey,
    subject,
    from_name: "CK Sports nettside",
    Type: isBedrift ? "Bedrifts-bootcamp" : "Move & Yoga treningsreise",
    Navn: name,
    email,
    Telefon: data.phone || "—",
    ...(isBedrift
      ? {
          Bedrift: data.company || "—",
          "Antall ansatte": data.employees || "—",
          Sted: data.location || "—",
        }
      : {
          Reise: data.trip || "—",
          "Antall personer": data.people || "—",
        }),
    Melding: data.message || "—",
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(fields),
    })
    const json = (await res.json()) as { success?: boolean }
    if (json.success) return NextResponse.json({ ok: true })
    console.error("[lead] web3forms svarte uten success", json)
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 })
  } catch (err) {
    console.error("[lead] web3forms feilet", err)
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 })
  }
}
