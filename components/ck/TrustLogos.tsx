import Image from "next/image"

// Ekte bedriftskunder med offisielle logoer. Legg til flere etter hvert
// (PNG/SVG med transparent bakgrunn i /public/ck/logos/).
const logos = [
  { src: "/ck/logos/sparebank1.png", alt: "SpareBank 1 Sør-Norge", w: 200, h: 57 },
  { src: "/ck/logos/harbour.png", alt: "Harbour Energy", w: 150, h: 48 },
]

export const TrustLogos = () => (
  <section className="border-y border-[#33302b]/8 bg-[#faf8f4]">
    <div className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10">
      <p className="mb-9 text-center text-[12px] font-semibold tracking-[0.24em] text-[#33302b]/45 uppercase">
        Bedrifter som trener med oss
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8 sm:gap-x-20">
        {logos.map((logo) => (
          <Image
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
            width={logo.w}
            height={logo.h}
            className="h-9 w-auto object-contain opacity-80 sm:h-10"
          />
        ))}
      </div>
    </div>
  </section>
)
