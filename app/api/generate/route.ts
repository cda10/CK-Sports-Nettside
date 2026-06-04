import { NextResponse } from "next/server"

export const runtime = "nodejs"

// Internt verktøy. Krever (i Vercel):
//   ANTHROPIC_API_KEY  = sk-ant-...      (fra console.anthropic.com)
//   STUDIO_PASSWORD    = <eget passord>  (deles bare internt)
//   ANTHROPIC_MODEL    = (valgfritt) modell-id, default under
const MODEL = process.env.ANTHROPIC_MODEL || "claude-3-5-sonnet-latest"

const SYSTEM = `Du er en dyktig innholdsskribent for CK Sports.

Om CK Sports:
- Drives av Kathrine Maaseide — sertifisert personlig trener og yogainstruktør, tidligere OL-utøver i sandvolleyball (to ganger).
- To produkter: (1) Bedrifts-bootcamp i arbeidstiden — Kathrine kommer til arbeidsplassen og trener de ansatte (B2B). (2) Move & Yoga treningsreiser — uke med trening, yoga og hvile i solen (B2C).
- Tone: varm, motiverende og inkluderende, men profesjonell. Premium wellness. Aldri hype eller tomme løfter.
- Holdepunkt: lav terskel, alle nivåer, energi, samhold, overskudd, mindre sykefravær (for bedrift); ro, fellesskap og påfyll (for reiser).

Regler:
- Skriv alltid på norsk (bokmål).
- Bruk emojis sparsomt og naturlig.
- Avslutt med 5–8 relevante hashtags.
- Ingen falske tall, garantier eller påstander.
- Tilpass lengde og tone til kanalen: Instagram = kort, fengende, visuelt; LinkedIn = mer profesjonell og verdiorientert (særlig for bedrift); Facebook = informativ, egnet for arrangement/påmelding.`

export async function POST(request: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY
  const password = process.env.STUDIO_PASSWORD

  let body: {
    password?: string
    channel?: string
    topic?: string
    details?: string
  }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: "Ugyldig forespørsel." }, { status: 400 })
  }

  if (!password || body.password !== password) {
    return NextResponse.json({ ok: false, error: "Feil passord." }, { status: 401 })
  }
  if (!apiKey) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 })
  }

  const channel = body.channel || "Instagram"
  const topic = (body.topic || "").trim()
  const details = (body.details || "").trim()
  if (!topic) {
    return NextResponse.json({ ok: false, error: "Skriv hva posten skal handle om." }, { status: 422 })
  }

  const userPrompt = `Lag en ${channel}-post for CK Sports.
Tema: ${topic}
${details ? `Detaljer/poenger å få med: ${details}` : ""}

Gi to alternative varianter, nummerert "Variant 1" og "Variant 2".`

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 1200,
        system: [{ type: "text", text: SYSTEM, cache_control: { type: "ephemeral" } }],
        messages: [{ role: "user", content: userPrompt }],
      }),
    })

    if (!res.ok) {
      const detail = await res.text()
      console.error("[generate] anthropic error", res.status, detail)
      return NextResponse.json({ ok: false, error: "ai_failed" }, { status: 502 })
    }

    const data = await res.json()
    const text = data?.content?.[0]?.text || ""
    return NextResponse.json({ ok: true, text })
  } catch (err) {
    console.error("[generate] failed", err)
    return NextResponse.json({ ok: false, error: "ai_failed" }, { status: 502 })
  }
}
