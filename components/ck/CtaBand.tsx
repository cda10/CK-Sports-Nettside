import { LeadButton } from "./LeadButton"
import { Sprig } from "./Sprig"

export const CtaBand = () => (
  <section className="mx-auto max-w-[1220px] px-5 py-24 lg:px-10 lg:py-28">
    <div
      className="overflow-hidden rounded-[32px] bg-gradient-to-br from-[#62a8c9] to-[#3e88ab] px-8 py-16 text-center lg:px-16 lg:py-20"
      data-reveal
    >
      <Sprig className="mx-auto mb-6 h-12 w-auto text-white/70" />
      <h2 className="mx-auto max-w-2xl font-[family-name:var(--font-ck-display)] text-[36px] leading-tight font-medium text-white lg:text-[52px]">
        Klar for å komme i gang?
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-white/90">
        Fortell oss litt om hva du ønsker deg — så finner vi den rette økten, gruppen
        eller reisen for deg. Helt uforpliktende.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <LeadButton type="bedrift" label="Book bedrifts-bootcamp" variant="light" />
        <LeadButton type="reise" label="Bli med på reise" variant="ghostLight" />
      </div>
      <p className="mt-6 text-[14px] text-white/80">
        Eller ring oss direkte:{" "}
        <a href="tel:+4791639927" className="font-medium text-white underline-offset-2 hover:underline">
          +47 916 39 927
        </a>
      </p>
    </div>
  </section>
)
