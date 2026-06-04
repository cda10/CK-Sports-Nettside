import Image from "next/image"

import { LeadButton } from "./LeadButton"

const included = [
  "Daglige trenings- og yogaøkter med Kathrine",
  "Møtet mellom aktivitet, hvile og gode måltider",
  "Treningspark og strender rett utenfor døren",
  "Lite, trygt reisefølge — passer alle nivåer",
]

export const FeaturedTrip = () => (
  <section id="reiser" className="scroll-mt-24 bg-[#f3efe8]">
    <div className="mx-auto max-w-[1220px] px-5 py-24 lg:px-10 lg:py-32">
      <div className="mb-14 max-w-2xl">
        <p className="mb-4 text-[13px] font-semibold tracking-[0.28em] text-[#62a8c9] uppercase">
          Move & Yoga treningsreiser
        </p>
        <h2 className="font-[family-name:var(--font-ck-display)] text-[40px] leading-tight font-medium text-[#1f3a4d] lg:text-[56px]">
          Lad opp i solen
        </h2>
        <p className="mt-5 text-[18px] leading-relaxed text-[#1f3a4d]/70">
          En uke der du trener, puster og hviler — i vakre omgivelser ved Middelhavet.
          Neste reise går til Malaga.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Gallery */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-[24px]">
            <Image
              src="/ck/trip-group.jpg"
              alt="Reisefølget samlet på en Move&Yoga treningsreise ved Middelhavet"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-[24px]">
            <Image
              src="/ck/trip-arch-window.jpg"
              alt="Buevindu mot bukten ved soloppgang"
              fill
              sizes="(min-width: 1024px) 270px, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-[24px]">
            <Image
              src="/ck/trip-beach-gym.jpg"
              alt="Solnedgang over havet på en Move&Yoga treningsreise"
              fill
              sizes="(min-width: 1024px) 270px, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <div className="flex flex-wrap gap-x-8 gap-y-3 border-b border-[#1f3a4d]/10 pb-6">
            <div>
              <p className="text-[12px] font-semibold tracking-[0.18em] text-[#1f3a4d]/45 uppercase">
                Destinasjon
              </p>
              <p className="mt-1 text-[17px] font-medium text-[#1f3a4d]">Malaga, Spania</p>
            </div>
            <div>
              <p className="text-[12px] font-semibold tracking-[0.18em] text-[#1f3a4d]/45 uppercase">
                Varighet
              </p>
              <p className="mt-1 text-[17px] font-medium text-[#1f3a4d]">1 uke</p>
            </div>
            <div>
              <p className="text-[12px] font-semibold tracking-[0.18em] text-[#1f3a4d]/45 uppercase">
                Nivå
              </p>
              <p className="mt-1 text-[17px] font-medium text-[#1f3a4d]">Alle nivåer</p>
            </div>
          </div>

          <ul className="mt-7 space-y-3">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[16px] text-[#1f3a4d]/80">
                <span className="mt-[7px] h-2 w-2 flex-none rounded-full bg-[#62a8c9]" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-9">
            <LeadButton type="reise" label="Sikre plass" variant="primary" trip="Malaga" />
            <p className="mt-4 text-[14px] text-[#1f3a4d]/55">
              Få datoer, pris og full reiseplan tilsendt — uforpliktende.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)
