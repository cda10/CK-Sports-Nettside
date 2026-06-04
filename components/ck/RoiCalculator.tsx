"use client"

import { useState } from "react"

import { LeadButton } from "./LeadButton"

// Standard antall arbeidsdager per år for en fulltidsansatt i Norge
// (≈ 260 ukedager − ferie − bevegelige helligdager).
const WORK_DAYS = 230

const nok = (n: number) =>
  new Intl.NumberFormat("nb-NO", { maximumFractionDigits: 0 }).format(Math.round(n)) + " kr"

function Field({
  label,
  suffix,
  value,
  min,
  max,
  step = 1,
  onChange,
}: {
  label: string
  suffix?: string
  value: number
  min: number
  max: number
  step?: number
  onChange: (n: number) => void
}) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-baseline justify-between text-[13px] font-medium text-[#1f3a4d]/70">
        {label}
        <span className="text-[#1f3a4d]">
          {new Intl.NumberFormat("nb-NO").format(value)}
          {suffix ? ` ${suffix}` : ""}
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[#62a8c9]"
      />
    </label>
  )
}

export const RoiCalculator = () => {
  const [employees, setEmployees] = useState(30)
  const [absencePct, setAbsencePct] = useState(6.5)
  const [costPerDay, setCostPerDay] = useState(2600)

  const lostDays = employees * WORK_DAYS * (absencePct / 100)
  const annualCost = lostDays * costPerDay

  return (
    <section id="kalkulator" className="mx-auto max-w-[1220px] scroll-mt-24 px-5 py-24 lg:px-10 lg:py-28">
      <div className="mb-12 max-w-2xl">
        <p className="mb-4 text-[13px] font-semibold tracking-[0.28em] text-[#62a8c9] uppercase">
          Regn på det
        </p>
        <h2 className="font-[family-name:var(--font-ck-display)] text-[36px] leading-tight font-medium text-[#1f3a4d] lg:text-[48px]">
          Hva koster sykefraværet dere?
        </h2>
        <p className="mt-5 text-[18px] leading-relaxed text-[#1f3a4d]/70">
          Et konservativt, kildebasert anslag. Juster tallene til deres egen situasjon.
        </p>
        <p className="mt-3 text-[14px] leading-relaxed text-[#1f3a4d]/55">
          Tallene bygger på{" "}
          <a
            className="font-medium text-[#3e88ab] underline-offset-2 hover:underline"
            href="https://www.ssb.no/arbeid-og-lonn/arbeidsmiljo-sykefravaer-og-arbeidskonflikter/statistikk/sykefravaer"
            target="_blank"
            rel="noopener noreferrer"
          >
            SSB/NAV
          </a>{" "}
          og{" "}
          <a
            className="font-medium text-[#3e88ab] underline-offset-2 hover:underline"
            href="https://arbinn.nho.no/arbeidsrett/sykefravar_og_permisjoner/sykefravar-statistikk/artikler/kostnader-fravar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NHO/SINTEF
          </a>{" "}
          — se forutsetninger nederst.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
        {/* Inputs */}
        <div className="rounded-[28px] border border-[#1f3a4d]/8 bg-white p-8 shadow-sm">
          <div className="space-y-7">
            <Field label="Antall ansatte" value={employees} min={1} max={500} onChange={setEmployees} />
            <Field
              label="Sykefravær"
              suffix="%"
              value={absencePct}
              min={1}
              max={15}
              step={0.1}
              onChange={setAbsencePct}
            />
            <Field
              label="Kostnad per fraværsdag"
              suffix="kr"
              value={costPerDay}
              min={1500}
              max={4000}
              step={100}
              onChange={setCostPerDay}
            />
          </div>
        </div>

        {/* Result */}
        <div className="flex flex-col justify-between rounded-[28px] bg-gradient-to-br from-[#1f3a4d] to-[#16586f] p-8 text-white">
          <div>
            <p className="text-[13px] font-medium tracking-wide text-white/60">
              Sykefravær koster bedriften anslagsvis
            </p>
            <p className="mt-1 font-[family-name:var(--font-ck-display)] text-[44px] leading-none font-semibold lg:text-[56px]">
              {nok(annualCost)}
            </p>
            <p className="mt-1 text-[14px] text-white/55">
              per år ({new Intl.NumberFormat("nb-NO").format(Math.round(lostDays))} tapte
              dagsverk)
            </p>

            <div className="my-7 h-px bg-white/15" />

            <p className="text-[15px] leading-relaxed text-white/80">
              Det meste av dette er sammensatt og kan ikke fjernes med ett tiltak. Men
              regelmessig bevegelse i arbeidstiden er ett konkret bidrag — til mer energi,
              bedre trivsel og lavere terskel for å holde seg i form. Selv en liten nedgang
              har verdi.
            </p>
          </div>

          <div className="mt-8">
            <LeadButton type="bedrift" label="Book bedrifts-bootcamp" variant="light" />
          </div>
        </div>
      </div>

      {/* Assumptions & sources — full transparency */}
      <div className="mt-8 rounded-2xl border border-[#1f3a4d]/8 bg-[#f3efe8] p-6 text-[13px] leading-relaxed text-[#1f3a4d]/60">
        <p className="mb-2 font-semibold text-[#1f3a4d]/80">Forutsetninger og kilder</p>
        <p>
          Beregningen bruker {WORK_DAYS} arbeidsdager per år. Standardtall: sykefravær
          6,5 % (legemeldt 5,5 % + egenmeldt 1,0 %,{" "}
          <a
            className="underline hover:text-[#3e88ab]"
            href="https://www.ssb.no/arbeid-og-lonn/arbeidsmiljo-sykefravaer-og-arbeidskonflikter/statistikk/sykefravaer"
            target="_blank"
            rel="noopener noreferrer"
          >
            SSB/NAV 2025
          </a>
          ) og 2 600 kr per fraværsdag (
          <a
            className="underline hover:text-[#3e88ab]"
            href="https://arbinn.nho.no/arbeidsrett/sykefravar_og_permisjoner/sykefravar-statistikk/artikler/kostnader-fravar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SINTEF for NHO
          </a>
          ). Tallene viser hva fraværet koster — ikke et løfte om besparelse. Effekten av
          trening på sykefravær er forskningsmessig blandet; den sterkeste evidensen gjelder
          trening <em>i arbeidstiden</em> (mikrotrening: ~14 % lavere risiko for
          langtidsfravær,{" "}
          <a
            className="underline hover:text-[#3e88ab]"
            href="https://www.nature.com/articles/s41598-022-06283-8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Scientific Reports 2022
          </a>
          ).
        </p>
      </div>
    </section>
  )
}
