import { LeadButton } from "./LeadButton"

const formats = [
  {
    title: "Kickoff / enkeltøkt",
    text: "Perfekt for en samling, teamdag eller kickoff.",
    points: ["Felles energiboost", "Tilpasset gruppestørrelse", "Inne eller ute"],
  },
  {
    title: "Fast ukentlig",
    text: "Jevnlige økter i arbeidstiden — størst effekt over tid.",
    points: ["Fast tid hver uke", "Progresjon og variasjon", "Lav terskel, høyt oppmøte"],
    featured: true,
  },
  {
    title: "Skreddersydd program",
    text: "Bootcamp, veiledning og oppfølging satt sammen for dere.",
    points: ["Behovskartlegging", "Kombinert opplegg", "Oppfølging over tid"],
  },
]

export const BedriftFormats = () => (
  <section className="bg-[#f3efe8]">
    <div className="mx-auto max-w-[1220px] px-5 py-24 lg:px-10 lg:py-28">
      <div className="mb-14 max-w-2xl">
        <p className="mb-4 text-[13px] font-semibold tracking-[0.28em] text-[#5f6e30] uppercase">
          Opplegg
        </p>
        <h2 className="font-[family-name:var(--font-ck-display)] text-[36px] leading-tight font-medium text-[#33302b] lg:text-[48px]">
          Velg det som passer dere
        </h2>
        <p className="mt-5 text-[18px] leading-relaxed text-[#33302b]/70">
          Vi setter sammen et opplegg etter teamets behov. Be om et uforpliktende tilbud.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {formats.map((f, i) => (
          <div
            key={f.title}
            data-reveal
            style={{ "--reveal-delay": `${i * 110}ms` } as React.CSSProperties}
            className={`flex flex-col rounded-[24px] bg-[#faf8f4] p-8 ${
              f.featured ? "border-2 border-[#8a9a5b]" : "border border-[#33302b]/10"
            }`}
          >
            {f.featured && (
              <span className="mb-4 inline-flex w-fit rounded-full bg-[#5f6e30]/12 px-3 py-1 text-[12px] font-semibold tracking-wide text-[#4f5d28] uppercase">
                Mest populær
              </span>
            )}
            <h3 className="font-[family-name:var(--font-ck-display)] text-[26px] font-medium text-[#33302b]">
              {f.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-[#33302b]/65">{f.text}</p>
            <ul className="mt-6 mb-8 space-y-3">
              {f.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[15px] text-[#33302b]/80">
                  <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-[#8a9a5b]" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <LeadButton
                type="bedrift"
                label="Be om tilbud"
                variant={f.featured ? "primary" : "outline"}
                className="w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
