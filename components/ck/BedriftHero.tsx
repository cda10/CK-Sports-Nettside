import Image from "next/image"

import { Button } from "./Button"
import { LeadButton } from "./LeadButton"

export const BedriftHero = () => (
  <section className="bg-[#faf8f4]">
    <div className="mx-auto grid max-w-[1220px] items-center gap-12 px-5 pt-32 pb-16 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:pt-40 lg:pb-24">
      <div>
        <p className="mb-4 text-[13px] font-semibold tracking-[0.28em] text-[#62a8c9] uppercase">
          Bedrifts-bootcamp · I arbeidstiden
        </p>
        <h1 className="font-[family-name:var(--font-ck-display)] text-[44px] leading-[1.05] font-medium text-[#1f3a4d] lg:text-[64px]">
          Trening som løfter hele teamet
        </h1>
        <p className="mt-6 max-w-lg text-[18px] leading-relaxed text-[#1f3a4d]/70">
          Kathrine kommer til arbeidsplassen og kjører effektive, inkluderende økter midt
          i arbeidsdagen — energi, samhold og overskudd, uten at noen trenger å være i
          form fra før.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <LeadButton type="bedrift" label="Be om tilbud" variant="primary" />
          <Button href="#kalkulator" variant="outline">
            Hva koster fraværet?
          </Button>
        </div>
      </div>

      <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] lg:aspect-[5/6]">
        <Image
          src="/ck/studio-group-real.jpg"
          alt="Gruppe som trener sammen på en bedrifts-bootcamp i studioet"
          fill
          priority
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  </section>
)
