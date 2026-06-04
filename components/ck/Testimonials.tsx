// TODO: Bytt ut med ekte sitater (gjerne med navn + bilde, og video der dere har det).
const testimonials = [
  {
    quote:
      "Jeg kom for å komme i form, men reiste hjem med ny energi og et helt nytt forhold til trening. Kathrine ser deg, uansett nivå.",
    role: "Deltaker · Move & Yoga, Malaga",
  },
  {
    quote:
      "Bootcampen midt i arbeidsdagen ble høydepunktet i uka for teamet vårt. Mer overskudd, bedre stemning — og lavere terskel enn vi trodde.",
    role: "HR-ansvarlig · bedriftskunde",
  },
  {
    quote:
      "Profesjonelt, varmt og effektivt. Vi merker forskjell på både energi og samhold etter at vi startet med faste økter.",
    role: "Daglig leder · bedriftskunde",
  },
]

export const Testimonials = () => (
  <section className="mx-auto max-w-[1220px] px-5 py-24 lg:px-10 lg:py-28">
    <div className="mb-16 max-w-2xl">
      <p className="mb-4 text-[13px] font-semibold tracking-[0.28em] text-[#5f6e30] uppercase">
        Stemmer
      </p>
      <h2 className="font-[family-name:var(--font-ck-display)] text-[36px] leading-tight font-medium text-[#33302b] lg:text-[48px]">
        Det deltakerne og bedriftene sier
      </h2>
    </div>

    <div className="grid gap-x-12 gap-y-12 md:grid-cols-3">
      {testimonials.map((t, i) => (
        <figure
          key={t.role}
          data-reveal
          style={{ "--reveal-delay": `${i * 120}ms` } as React.CSSProperties}
          className="border-t border-[#33302b]/15 pt-7"
        >
          <span
            aria-hidden
            className="font-[family-name:var(--font-ck-display)] text-[48px] leading-none text-[#5f6e30]/45"
          >
            &ldquo;
          </span>
          <blockquote className="mt-1 font-[family-name:var(--font-ck-display)] text-[23px] leading-[1.4] font-normal text-[#33302b]">
            {t.quote}
          </blockquote>
          <figcaption className="mt-6 text-[13px] font-semibold tracking-[0.14em] text-[#33302b]/50 uppercase">
            {t.role}
          </figcaption>
        </figure>
      ))}
    </div>
  </section>
)
