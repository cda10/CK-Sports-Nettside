import Image from "next/image"

import { Button } from "./Button"
import { Seal } from "./Seal"

export const Hero = () => (
  <section id="top" className="relative flex min-h-[92vh] items-end overflow-hidden">
    <Image
      src="/ck/trip-group.jpg"
      alt="Yoga i solnedgang på en Move&Yoga treningsreise ved Middelhavet"
      fill
      priority
      sizes="100vw"
      className="object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#2e3328]/85 via-[#2e3328]/30 to-[#2e3328]/40" />

    <Seal
      spin
      className="pointer-events-none absolute top-24 right-5 h-20 w-20 text-white/85 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] lg:top-32 lg:right-12 lg:h-32 lg:w-32"
    />

    <div className="relative mx-auto w-full max-w-[1220px] px-5 pb-20 lg:px-10 lg:pb-28">
      <div className="max-w-2xl">
        <p className="mb-5 text-[13px] font-semibold tracking-[0.28em] text-white/80 uppercase">
          CK Sports · Stavanger
        </p>
        <h1 className="font-[family-name:var(--font-ck-display)] text-[52px] leading-[1.02] font-medium text-white lg:text-[88px]">
          Styrke, ro og sol
        </h1>
        <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-white/85">
          Bedrifts-bootcamp i arbeidstiden som gir teamet ny energi — og Move&amp;Yoga
          treningsreiser for kropp og sjel. Sammen med Kathrine Maaseide og Camilla Veen.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button href="#bedrift" variant="primary">
            Bedrifts-bootcamp
          </Button>
          <Button href="#reiser" variant="light">
            Move & Yoga treningsreiser
          </Button>
        </div>
      </div>
    </div>
  </section>
)
