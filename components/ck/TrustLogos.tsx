// Ekte bedriftskunder. Tekst-wordmarks inntil dere evt. legger inn offisielle
// logoer (SVG/PNG i /public/ck/logos/) for ekstra polish.
const companies = ["SpareBank 1 Sør-Norge", "Harbour Energy", "Mono Eiendom"]

export const TrustLogos = () => (
  <section className="border-y border-[#33302b]/8 bg-[#faf8f4]">
    <div className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10">
      <p className="mb-8 text-center text-[12px] font-semibold tracking-[0.24em] text-[#33302b]/45 uppercase">
        Bedrifter som trener med oss
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5 sm:gap-x-16">
        {companies.map((name) => (
          <span
            key={name}
            className="text-[18px] font-semibold tracking-tight text-[#33302b]/65 sm:text-[20px]"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  </section>
)
