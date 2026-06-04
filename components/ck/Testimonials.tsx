// TODO: Bytt ut med ekte sitater (gjerne med navn + bilde, og video der dere har det).
// Holdt med rolle-attribusjon inntil ekte omtaler er på plass.
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
  <section className="bg-[#f3efe8]">
    <div className="mx-auto max-w-[1220px] px-5 py-24 lg:px-10 lg:py-28">
      <div className="mb-14 max-w-2xl">
        <p className="mb-4 text-[13px] font-semibold tracking-[0.28em] text-[#62a8c9] uppercase">
          Stemmer
        </p>
        <h2 className="font-[family-name:var(--font-ck-display)] text-[36px] leading-tight font-medium text-[#1f3a4d] lg:text-[48px]">
          Det deltakerne og bedriftene sier
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.role}
            className="flex flex-col rounded-[24px] border border-[#1f3a4d]/8 bg-white p-8 shadow-sm"
          >
            <div className="mb-4 text-[40px] leading-none text-[#62a8c9]/40 font-[family-name:var(--font-ck-display)]">
              &ldquo;
            </div>
            <blockquote className="flex-1 text-[17px] leading-relaxed text-[#1f3a4d]/85">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 text-[13px] font-semibold tracking-[0.14em] text-[#1f3a4d]/50 uppercase">
              {t.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
)
