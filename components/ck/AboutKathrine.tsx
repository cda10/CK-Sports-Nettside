import Image from "next/image"

const facts = [
  { value: "2×", label: "OL-utøver i sandvolleyball" },
  { value: "PT", label: "Sertifisert personlig trener" },
  { value: "Yoga", label: "Sertifisert yogainstruktør" },
]

export const AboutKathrine = () => (
  <section id="om" className="scroll-mt-24 bg-[#1f3a4d] text-white">
    <div className="mx-auto max-w-[1220px] px-5 py-24 lg:px-10 lg:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[28px]">
          <Image
            src="/ck/kathrine.jpg"
            alt="Kathrine Maaseide, personlig trener og yogainstruktør"
            fill
            sizes="(min-width: 1024px) 460px, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="mb-4 text-[13px] font-semibold tracking-[0.28em] text-[#9cd0e4] uppercase">
            Om oss
          </p>
          <h2 className="font-[family-name:var(--font-ck-display)] text-[40px] leading-tight font-medium lg:text-[56px]">
            Møt Kathrine Maaseide
          </h2>
          <p className="mt-6 text-[18px] leading-relaxed text-white/80">
            Kathrine er sertifisert personlig trener og yogainstruktør — og tidligere
            toppidrettsutøver med to OL bak seg i sandvolleyball. Hun vet hva som skal til
            for å prestere, men brenner aller mest for at vanlige folk skal oppleve gleden,
            roen og mestringen som ligger i å være i bevegelse.
          </p>
          <p className="mt-4 text-[18px] leading-relaxed text-white/80">
            Gjennom CK Sports møter du en trener som ser deg — enten du tar din første økt
            eller blir med på en treningsreise i solen.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {facts.map((f) => (
              <div key={f.label}>
                <p className="font-[family-name:var(--font-ck-display)] text-[34px] font-medium text-[#9cd0e4]">
                  {f.value}
                </p>
                <p className="mt-1 text-[13px] leading-snug text-white/60">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)
