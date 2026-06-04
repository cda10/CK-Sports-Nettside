"use client"

import { useEffect, useState } from "react"
import cn from "classnames"

type LeadType = "bedrift" | "reise"
type Variant = "primary" | "outline" | "light" | "ghostLight"

type Props = {
  type: LeadType
  label: string
  variant?: Variant
  size?: "sm" | "md"
  className?: string
  trip?: string
}

const variants: Record<Variant, string> = {
  primary: "bg-[#62a8c9] text-white hover:bg-[#3e88ab] shadow-sm hover:shadow-md",
  outline:
    "border border-[#33302b]/25 text-[#33302b] hover:border-[#33302b]/50 hover:bg-[#2e3328]/5",
  light: "bg-white/90 text-[#33302b] hover:bg-white backdrop-blur-sm",
  ghostLight:
    "border border-white/40 bg-white/15 text-white backdrop-blur-sm hover:bg-white/25",
}

const sizes = {
  sm: "px-5 py-2.5 text-[14px]",
  md: "px-7 py-3 text-[15px]",
}

const inputClass =
  "w-full rounded-xl border border-[#33302b]/15 bg-white px-4 py-3 text-[15px] text-[#33302b] placeholder-[#33302b]/40 outline-none transition focus:border-[#62a8c9] focus:ring-2 focus:ring-[#62a8c9]/20"
const labelClass = "mb-1.5 block text-[13px] font-medium text-[#33302b]/70"

type Status = "idle" | "sending" | "done" | "error" | "phone"

export const LeadButton = ({ type, label, variant = "primary", size = "md", className, trip }: Props) => {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState<Status>("idle")

  const isBedrift = type === "bedrift"

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open])

  const close = () => {
    setOpen(false)
    setTimeout(() => setStatus("idle"), 200)
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const payload = { type, ...Object.fromEntries(fd.entries()) }
    setStatus("sending")
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (res.ok) setStatus("done")
      else if (res.status === 503) setStatus("phone")
      else setStatus("error")
    } catch {
      setStatus("error")
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium tracking-wide transition-all duration-200",
          sizes[size],
          variants[variant],
          className,
        )}
      >
        {label}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[70] flex items-end justify-center bg-[#2e3328]/40 p-0 backdrop-blur-sm sm:items-center sm:p-4"
          onClick={close}
        >
          <div
            className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-[#faf8f4] p-6 shadow-2xl sm:rounded-3xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-[12px] font-semibold tracking-[0.2em] text-[#5f6e30] uppercase">
                  {isBedrift ? "Bedrifts-bootcamp" : "Move & Yoga treningsreise"}
                </p>
                <h3 className="mt-1 font-[family-name:var(--font-ck-display)] text-[26px] leading-tight font-medium text-[#33302b]">
                  {isBedrift ? "Be om et tilbud" : "Sikre plassen din"}
                </h3>
              </div>
              <button
                type="button"
                aria-label="Lukk"
                onClick={close}
                className="-mr-1 flex h-9 w-9 flex-none items-center justify-center rounded-full text-[#33302b]/50 hover:bg-[#2e3328]/5 hover:text-[#33302b]"
              >
                ✕
              </button>
            </div>

            {status === "done" ? (
              <div className="py-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#62a8c9]/15 text-[28px] text-[#3e88ab]">
                  ✓
                </div>
                <h4 className="text-[20px] font-semibold text-[#33302b]">Takk! Vi tar kontakt.</h4>
                <p className="mx-auto mt-2 max-w-sm text-[15px] text-[#33302b]/65">
                  Kathrine svarer deg vanligvis innen kort tid. Gleder oss til å høre fra deg.
                </p>
                <button
                  type="button"
                  onClick={close}
                  className="mt-6 rounded-full bg-[#62a8c9] px-7 py-2.5 text-[15px] font-medium text-white hover:bg-[#3e88ab]"
                >
                  Lukk
                </button>
              </div>
            ) : status === "phone" ? (
              <div className="py-6 text-center">
                <h4 className="text-[20px] font-semibold text-[#33302b]">Ta gjerne direkte kontakt</h4>
                <p className="mx-auto mt-2 max-w-sm text-[15px] text-[#33302b]/65">
                  Send oss en e-post eller ring, så ordner vi resten.
                </p>
                <div className="mt-5 flex flex-col items-center gap-2">
                  <a href="mailto:kathrine@maaseide.no" className="font-medium text-[#3e88ab] hover:underline">
                    kathrine@maaseide.no
                  </a>
                  <a href="tel:+4791639927" className="font-medium text-[#3e88ab] hover:underline">
                    +47 916 39 927
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                {/* honeypot */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className={labelClass}>Navn *</label>
                    <input name="name" required aria-label="Navn" className={inputClass} placeholder="Ditt navn" />
                  </div>
                  <div>
                    <label className={labelClass}>E-post *</label>
                    <input name="email" type="email" required aria-label="E-post" className={inputClass} placeholder="navn@epost.no" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className={labelClass}>Telefon</label>
                    <input name="phone" aria-label="Telefon" className={inputClass} placeholder="Valgfritt" />
                  </div>
                  {isBedrift ? (
                    <div>
                      <label className={labelClass}>Bedrift</label>
                      <input name="company" aria-label="Bedrift" className={inputClass} placeholder="Firmanavn" />
                    </div>
                  ) : (
                    <div>
                      <label className={labelClass}>Reise</label>
                      <input
                        name="trip" aria-label="Reise"
                        className={inputClass}
                        defaultValue={trip || "Malaga"}
                      />
                    </div>
                  )}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {isBedrift ? (
                    <>
                      <div>
                        <label className={labelClass}>Antall ansatte</label>
                        <select name="employees" aria-label="Antall ansatte" className={inputClass} defaultValue="">
                          <option value="" disabled>
                            Velg
                          </option>
                          <option>1–10</option>
                          <option>11–25</option>
                          <option>26–50</option>
                          <option>50+</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>Sted</label>
                        <input name="location" aria-label="Sted" className={inputClass} placeholder="By / adresse" />
                      </div>
                    </>
                  ) : (
                    <div>
                      <label className={labelClass}>Antall personer</label>
                      <input name="people" aria-label="Antall personer" className={inputClass} placeholder="F.eks. 2" />
                    </div>
                  )}
                </div>

                <div>
                  <label className={labelClass}>Melding</label>
                  <textarea
                    name="message" aria-label="Melding"
                    rows={3}
                    className={inputClass}
                    placeholder={
                      isBedrift
                        ? "Fortell kort om teamet og hva dere ønsker"
                        : "Spørsmål eller ønsker?"
                    }
                  />
                </div>

                {status === "error" && (
                  <p className="text-[14px] text-red-600">
                    Noe gikk galt. Prøv igjen, eller ring +47 916 39 927.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-full bg-[#62a8c9] px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-[#3e88ab] disabled:opacity-60"
                >
                  {status === "sending" ? "Sender …" : isBedrift ? "Send forespørsel" : "Send påmelding"}
                </button>
                <p className="text-center text-[12px] text-[#33302b]/45">
                  Helt uforpliktende. Vi deler aldri opplysningene dine.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
