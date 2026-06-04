"use client"

import { useState } from "react"

const inputClass =
  "w-full rounded-xl border border-[#33302b]/15 bg-white px-4 py-3 text-[15px] text-[#33302b] placeholder-[#33302b]/40 outline-none transition focus:border-[#62a8c9] focus:ring-2 focus:ring-[#62a8c9]/20"
const labelClass = "mb-1.5 block text-[13px] font-medium text-[#33302b]/70"

const examples = [
  "Ny Move & Yoga-reise til Malaga — påmelding åpen",
  "Bedrifts-bootcamp: få teamet i bevegelse i arbeidstiden",
  "Mandagsmotivasjon: kom i gang med trening uten stress",
]

export const PostGenerator = () => {
  const [password, setPassword] = useState("")
  const [channel, setChannel] = useState("Instagram")
  const [topic, setTopic] = useState("")
  const [details, setDetails] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle")
  const [result, setResult] = useState("")
  const [error, setError] = useState("")
  const [copied, setCopied] = useState(false)

  async function generate() {
    if (!topic.trim()) {
      setError("Skriv hva posten skal handle om.")
      setStatus("error")
      return
    }
    setStatus("loading")
    setError("")
    setResult("")
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, channel, topic, details }),
      })
      const data = await res.json()
      if (res.ok && data.ok) {
        setResult(data.text)
        setStatus("done")
      } else {
        setStatus("error")
        setError(
          res.status === 401
            ? "Feil passord."
            : data.error === "not_configured"
              ? "AI er ikke konfigurert ennå (mangler API-nøkkel i Vercel)."
              : "Klarte ikke å generere. Prøv igjen.",
        )
      }
    } catch {
      setStatus("error")
      setError("Noe gikk galt. Prøv igjen.")
    }
  }

  async function copy() {
    await navigator.clipboard.writeText(result)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
      {/* Controls */}
      <div className="space-y-5">
        <div>
          <label className={labelClass}>Passord</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={inputClass}
            placeholder="Internt passord"
          />
        </div>

        <div>
          <label className={labelClass}>Kanal</label>
          <select value={channel} onChange={(e) => setChannel(e.target.value)} className={inputClass}>
            <option>Instagram</option>
            <option>LinkedIn</option>
            <option>Facebook</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>Hva skal posten handle om?</label>
          <input
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className={inputClass}
            placeholder="F.eks. ny treningsreise, bootcamp-tilbud, motivasjon"
          />
          <div className="mt-2 flex flex-wrap gap-2">
            {examples.map((ex) => (
              <button
                key={ex}
                type="button"
                onClick={() => setTopic(ex)}
                className="rounded-full border border-[#33302b]/15 px-3 py-1 text-[12px] text-[#33302b]/60 hover:border-[#62a8c9] hover:text-[#3e88ab]"
              >
                {ex}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className={labelClass}>Detaljer (valgfritt)</label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows={3}
            className={inputClass}
            placeholder="Datoer, pris, sted, poenger å få med …"
          />
        </div>

        <button
          type="button"
          onClick={generate}
          disabled={status === "loading"}
          className="w-full rounded-full bg-[#62a8c9] px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-[#3e88ab] disabled:opacity-60"
        >
          {status === "loading" ? "Genererer …" : "Generer post"}
        </button>
        {status === "error" && <p className="text-[14px] text-red-600">{error}</p>}
      </div>

      {/* Result */}
      <div className="rounded-[24px] border border-[#33302b]/8 bg-white p-6 shadow-sm">
        {result ? (
          <>
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[13px] font-semibold tracking-wide text-[#33302b]/50 uppercase">
                Forslag · {channel}
              </span>
              <button
                type="button"
                onClick={copy}
                className="rounded-full bg-[#62a8c9]/12 px-4 py-1.5 text-[13px] font-medium text-[#3e88ab] hover:bg-[#62a8c9]/20"
              >
                {copied ? "Kopiert ✓" : "Kopier"}
              </button>
            </div>
            <pre className="font-sans text-[15px] leading-relaxed whitespace-pre-wrap text-[#33302b]/85">
              {result}
            </pre>
          </>
        ) : (
          <p className="flex h-full min-h-40 items-center justify-center text-center text-[15px] text-[#33302b]/40">
            Forslagene dukker opp her.
          </p>
        )}
      </div>
    </div>
  )
}
