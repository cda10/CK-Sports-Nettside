const steps = [
  {
    n: "1",
    title: "Vi kommer til dere",
    text: "Ingen reise, ingen utstyr å skaffe. Kathrine møter teamet der dere er — inne eller ute.",
  },
  {
    n: "2",
    title: "Tilpasset teamet",
    text: "Økten skreddersys nivå og mål, slik at alle blir med — uansett form og bakgrunn.",
  },
  {
    n: "3",
    title: "Fast energi over tid",
    text: "Jevnlige økter gir varig effekt: mer overskudd, bedre samhold og lavere terskel for å være i bevegelse.",
  },
]

export const HowItWorks = () => (
  <section className="mx-auto max-w-[1220px] px-5 py-24 lg:px-10 lg:py-28">
    <div className="mb-14 max-w-2xl">
      <p className="mb-4 text-[13px] font-semibold tracking-[0.28em] text-[#7c8c4e] uppercase">
        Slik fungerer det
      </p>
      <h2 className="font-[family-name:var(--font-ck-display)] text-[36px] leading-tight font-medium text-[#33302b] lg:text-[48px]">
        Enkelt for dere, effektivt for teamet
      </h2>
    </div>

    <div className="grid gap-8 md:grid-cols-3 md:gap-10">
      {steps.map((s) => (
        <div key={s.n}>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#62a8c9]/12 font-[family-name:var(--font-ck-display)] text-[22px] font-semibold text-[#3e88ab]">
            {s.n}
          </div>
          <h3 className="mt-5 text-[20px] font-semibold text-[#33302b]">{s.title}</h3>
          <p className="mt-2 text-[16px] leading-relaxed text-[#33302b]/65">{s.text}</p>
        </div>
      ))}
    </div>
  </section>
)
