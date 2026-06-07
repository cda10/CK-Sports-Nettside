// Ekte omtaler. Legg til flere i lista etter hvert som de kommer inn.
const testimonials = [
  {
    quote:
      "Trening med Kathrine anbefales! I en gruppe på 10 har du allikevel egen PT som utfordrer, motiverer, pusher og ser deg. Øktene er harde og varierte, men tilrettelagt for alle nivåer!",
    name: "Anette Wathne",
    role: "Ass. banksjef, SpareBank 1 Sør-Norge",
  },
]

export const Testimonials = () => (
  <section className="bg-[#f3efe8]">
    <div className="mx-auto max-w-[1220px] px-5 py-24 lg:px-10 lg:py-28">
      <div className="mb-14 max-w-2xl">
        <p className="mb-4 text-[13px] font-semibold tracking-[0.28em] text-[#5f6e30] uppercase">
          Stemmer
        </p>
        <h2 className="font-[family-name:var(--font-ck-display)] text-[36px] leading-tight font-medium text-[#33302b] lg:text-[48px]">
          Det deltakerne og bedriftene sier
        </h2>
      </div>

      <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-6">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex max-w-lg flex-col rounded-[24px] border border-[#33302b]/8 bg-white p-8 shadow-sm lg:p-10"
          >
            <div className="mb-4 font-[family-name:var(--font-ck-display)] text-[44px] leading-none text-[#8a9a5b]/45">
              &ldquo;
            </div>
            <blockquote className="flex-1 text-[19px] leading-relaxed text-[#33302b]/85 lg:text-[21px]">
              {t.quote}
            </blockquote>
            <figcaption className="mt-7">
              <p className="text-[16px] font-semibold text-[#33302b]">{t.name}</p>
              <p className="mt-0.5 text-[14px] text-[#33302b]/55">{t.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
)
