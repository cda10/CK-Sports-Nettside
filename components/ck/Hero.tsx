import Image from "next/image"

import { Button } from "./Button"

export const Hero = () => (
  <section id="top" className="relative flex min-h-[92vh] items-end overflow-hidden">
    <Image
      src="/ck/trip-sunset-palms.jpg"
      alt="Palmer og strand på en Move&Yoga treningsreise ved Middelhavet"
      fill
      priority
      sizes="100vw"
      className="object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#1f3a4d]/85 via-[#1f3a4d]/30 to-[#1f3a4d]/40" />

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
          treningsreiser for kropp og sjel. Sammen med Kathrine Maaseide.
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
