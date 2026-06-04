// TODO: Bytt ut med ekte bedriftslogoer (PNG/SVG i /public/ck/logos/), eller fjern
// seksjonen til dere har kundelogoer å vise. Ikke la plassholderne gå live.
const placeholders = ["Bedrift", "Bedrift", "Bedrift", "Bedrift", "Bedrift"]

export const TrustLogos = () => (
  <section className="border-y border-[#1f3a4d]/8 bg-[#faf8f4]">
    <div className="mx-auto max-w-[1220px] px-5 py-12 lg:px-10">
      <p className="mb-8 text-center text-[12px] font-semibold tracking-[0.24em] text-[#1f3a4d]/45 uppercase">
        Bedrifter som trener med oss
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-50">
        {placeholders.map((name, i) => (
          <div
            key={i}
            className="flex h-9 items-center text-[18px] font-semibold tracking-tight text-[#1f3a4d]/40"
          >
            {name}
            <span className="ml-1 text-[#62a8c9]/50">●</span>
          </div>
        ))}
      </div>
    </div>
  </section>
)
