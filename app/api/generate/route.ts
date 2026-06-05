import { NextResponse } from "next/server"

import { pickImages, motifIdea } from "@/lib/postImages"

export const runtime = "nodejs"

// Internt verktøy. Krever (i Netlify):
//   ANTHROPIC_API_KEY  = sk-ant-...      (fra console.anthropic.com)
//   STUDIO_PASSWORD    = <eget passord>  (deles bare internt)
//   ANTHROPIC_MODEL    = (valgfritt) overstyr modell, f.eks. claude-haiku-4-5 (billigere)
// Default: Sonnet 4.6 — beste balanse mellom kvalitet og pris for SoMe-tekst.
const MODEL = process.env.ANTHROPIC_MODEL || "claude-sonnet-4-6"

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

function demoPost(channel: string, topic: string, details: string): string {
  const d = details ? ` ${details}` : ""
  const tags =
    channel === "LinkedIn"
      ? "#bedriftshelse #trivsel #lederskap #cksports #stavanger"
      : channel === "Facebook"
        ? "#cksports #stavanger #trening #moveogyoga"
        : "#cksports #moveogyoga #bedriftstrening #yoga #stavanger #wellness #treningsglede"

  let v1: string
  let v2: string

  if (channel === "LinkedIn") {
    v1 = `De som beveger seg sammen, blir ikke bare sprekere – de trives bedre og presterer bedre på jobb.\n\n${topic}.${d}\n\nHos CK Sports kommer vi til arbeidsplassen og trener teamet i arbeidstiden – lav terskel, tilpasset alle. Resultatet: mer energi, bedre samhold og en arbeidsplass folk vil bli i.\n\nVil dere høre mer? Ta kontakt for et uforpliktende tilbud.\n\n${tags}`
    v2 = `En treningsøkt midt på dagen er ikke tapt tid – det er en investering i energi, fokus og trivsel.\n\n${topic}.${d}\n\nVi gjør det enkelt: vi kommer til dere, og setter sammen økter som får hele teamet med.\n\n${tags}`
  } else if (channel === "Facebook") {
    v1 = `🌿 ${topic}${d}\n\nBli med på trening som gir mer enn svette – energi, samhold og overskudd, sammen med Kathrine Maaseide. Passer alle nivåer.\n\nSend oss en melding for datoer og påmelding!\n\n${tags}`
    v2 = `Klar for litt påfyll? ${topic}.${d}\n\nVi gleder oss til å se deg – meld interesse i dag, helt uforpliktende. 🌞\n\n${tags}`
  } else {
    v1 = `☀️ ${topic}\n\nTren, pust og lad opp – sammen. ${details || "Energi, ro og fellesskap, uansett nivå."}\n\nMeld interesse via lenken i bio 🌿\n\n${tags}`
    v2 = `Litt bevegelse. Mye overskudd. ✨\n\n${topic}.${d}\n\nBli med – det er plass til deg.\n\n${tags}`
  }

  return `(Demo — ekte AI aktiveres med ANTHROPIC_API_KEY i Vercel)\n\nVariant 1\n${v1}\n\n———\n\nVariant 2\n${v2}`
}

export async function POST(request: Request) {
  // Leser ANTHROPIC_API (navnet i Netlify) først, så fallbacks.
  const apiKey =
    process.env.ANTHROPIC_API ||
    process.env.ANTHROPIC_KEY ||
    process.env.ANTHROPIC_API_KEY
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

  const channel = body.channel || "Instagram"
  const topic = (body.topic || "").trim()
  const details = (body.details || "").trim()
  if (!topic) {
    return NextResponse.json({ ok: false, error: "Skriv hva posten skal handle om." }, { status: 422 })
  }

  // Demo-modus: når ingen ekte AI-nøkkel er satt, men STUDIO_DEMO=1.
  // Lar dere teste flyten og se stemmen/formatet uten API-kostnad.
  const images = pickImages(topic, channel)
  const motif = motifIdea(topic)

  if (!apiKey) {
    if (process.env.STUDIO_DEMO === "1") {
      return NextResponse.json({ ok: true, text: demoPost(channel, topic, details), images, motif })
    }
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 })
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
      const keyInfo = apiKey
        ? `${apiKey.slice(0, 17)}…(${apiKey.length} tegn)`
        : "INGEN nøkkel lastet"
      return NextResponse.json(
        {
          ok: false,
          error: "ai_failed",
          detail: `${res.status}: ${detail.slice(0, 180)} || lastet nøkkel: ${keyInfo}`,
        },
        { status: 502 },
      )
    }

    const data = await res.json()
    const text = data?.content?.[0]?.text || ""
    return NextResponse.json({ ok: true, text, images, motif })
  } catch (err) {
    console.error("[generate] failed", err)
    return NextResponse.json(
      {
        ok: false,
        error: "ai_failed",
        detail: `kall feilet: ${err instanceof Error ? err.message : String(err)} (modell: ${MODEL})`,
      },
      { status: 502 },
    )
  }
}
