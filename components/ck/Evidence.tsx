type Item = {
  stat: string
  title: string
  text: string
  source: string
  href: string
  note?: string
}

const items: Item[] = [
  {
    stat: "+9,7 år",
    title: "Lengre liv — sammen",
    text: "I Copenhagen City Heart Study var det idrettene med mest samspill som ga flest leveår: tennis +9,7 år, mot +1,5 år for trening alene på senter. Fellesskapet ser ut til å være nøkkelen.",
    source: "Schnohr et al., Mayo Clinic Proceedings, 2018",
    href: "https://pubmed.ncbi.nlm.nih.gov/30193744/",
    note: "Observasjonsstudie — viser sammenheng, ikke sikker årsak.",
  },
  {
    stat: "−26 %",
    title: "Mindre stress, mer trivsel",
    text: "Gruppetrening reduserte opplevd stress med 26 % og bedret livskvalitet (følelsesmessig +26 %, fysisk +25 %) — langt mer enn å trene alene, der det knapt var endring.",
    source: "Yorks et al., J Am Osteopath Assoc, 2017",
    href: "https://pubmed.ncbi.nlm.nih.gov/29084328/",
  },
  {
    stat: "Bedre dager",
    title: "Mer produktiv etter en økt",
    text: "Ansatte presterte signifikant bedre på dager de trente i arbeidstiden — mer energi, bedre konsentrasjon og problemløsning, og roligere humør. En økt midt på dagen gir ofte mer igjen enn tiden den tar.",
    source: "Coulson, McKenna & Field, Univ. of Bristol, 2008",
    href: "https://www.bristol.ac.uk/news/2008/6063.html",
  },
]

export const Evidence = () => (
  <section className="bg-[#2e3328] text-white">
    <div className="mx-auto max-w-[1220px] px-5 py-24 lg:px-10 lg:py-28">
      <div className="mb-16 max-w-2xl">
        <p className="mb-4 text-[13px] font-semibold tracking-[0.28em] text-[#c3d29c] uppercase">
          Dokumentert effekt
        </p>
        <h2 className="font-[family-name:var(--font-ck-display)] text-[36px] leading-tight font-medium text-white lg:text-[48px]">
          Å trene sammen virker — på mer enn formen
        </h2>
        <p className="mt-5 text-[18px] leading-relaxed text-white/70">
          Forskningen peker tydelig i én retning: det sosiale gjør trening mer verdifull —
          for helse, humør og hverdag.
        </p>
      </div>

      <div className="grid gap-x-12 gap-y-14 md:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="border-t border-white/15 pt-7">
            <p className="font-[family-name:var(--font-ck-display)] text-[52px] leading-none font-medium text-[#c3d29c]">
              {it.stat}
            </p>
            <h3 className="mt-4 font-[family-name:var(--font-ck-display)] text-[25px] font-medium text-white">
              {it.title}
            </h3>
            <p className="mt-3 text-[16px] leading-relaxed text-white/75">{it.text}</p>
            {it.note && (
              <p className="mt-3 text-[12px] leading-relaxed text-white/45">{it.note}</p>
            )}
            <a
              href={it.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-[13px] font-medium text-white/55 underline-offset-2 transition-colors hover:text-[#c3d29c] hover:underline"
            >
              Kilde: {it.source}
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
)
