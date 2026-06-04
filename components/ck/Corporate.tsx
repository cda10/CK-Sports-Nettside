import Image from "next/image"

import { LeadButton } from "./LeadButton"

const benefits = [
  {
    title: "Midt i arbeidsdagen",
    text: "Økter lagt til arbeidstiden senker terskelen — hele teamet blir med, ikke bare de som trener fra før.",
  },
  {
    title: "Mer overskudd, mindre fravær",
    text: "Regelmessig bevegelse gir energi, bedre humør og færre vonde rygger og skuldre.",
  },
  {
    title: "Samhold på tvers",
    text: "Felles svette bygger lag og relasjoner på tvers av avdelinger og roller.",
  },
]

export const Corporate = () => (
  <section id="bedrift" className="scroll-mt-24">
    <div className="mx-auto max-w-[1220px] px-5 py-24 lg:px-10 lg:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
          <Image
            src="/ck/studio-group-rest.jpg"
            alt="Gruppe som hviler og prater etter en bedrifts-bootcamp i CK Sports' studio"
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="mb-4 text-[13px] font-semibold tracking-[0.28em] text-[#62a8c9] uppercase">
            Bedrifts-bootcamp · I arbeidstiden
          </p>
          <h2 className="font-[family-name:var(--font-ck-display)] text-[40px] leading-tight font-medium text-[#1f3a4d] lg:text-[52px]">
            Energi til hele teamet — midt i arbeidsdagen
          </h2>
          <p className="mt-5 text-[18px] leading-relaxed text-[#1f3a4d]/70">
            Vi kommer til arbeidsplassen og kjører effektive, inkluderende økter i
            arbeidstiden. Lav terskel og tilpasset alle nivåer — ute eller inne, helt
            uten at noen trenger å være i form fra før.
          </p>

          <div className="mt-9 space-y-6">
            {benefits.map((b) => (
              <div key={b.title} className="border-l-2 border-[#62a8c9] pl-5">
                <h3 className="text-[18px] font-semibold text-[#1f3a4d]">{b.title}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-[#1f3a4d]/65">{b.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-9">
            <LeadButton type="bedrift" label="Book bedrifts-bootcamp" variant="primary" />
            <p className="mt-4 text-[14px] text-[#1f3a4d]/55">
              Fortell oss om teamet, så setter vi opp et opplegg som passer dere.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)
