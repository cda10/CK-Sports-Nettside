import { Button } from "./Button"

export const CtaBand = () => (
  <section className="mx-auto max-w-[1220px] px-5 py-24 lg:px-10 lg:py-28">
    <div className="overflow-hidden rounded-[32px] bg-gradient-to-br from-[#62a8c9] to-[#3e88ab] px-8 py-16 text-center lg:px-16 lg:py-20">
      <h2 className="mx-auto max-w-2xl font-[family-name:var(--font-ck-display)] text-[36px] leading-tight font-medium text-white lg:text-[52px]">
        Klar for å komme i gang?
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-white/90">
        Fortell oss litt om hva du ønsker deg — så finner vi den rette økten, gruppen
        eller reisen for deg. Helt uforpliktende.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <Button href="mailto:kathrine@maaseide.no" variant="light">
          Meld interesse
        </Button>
        <Button
          href="tel:+4791639927"
          variant="primary"
          className="bg-white/15 hover:bg-white/25"
        >
          Ring +47 916 39 927
        </Button>
      </div>
    </div>
  </section>
)
