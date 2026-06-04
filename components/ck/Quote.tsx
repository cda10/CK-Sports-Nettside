import Image from "next/image"

export const Quote = () => (
  <section className="relative overflow-hidden">
    <Image
      src="/ck/trip-arch-window.jpg"
      alt="Utsikt mot bukten ved soloppgang"
      fill
      sizes="100vw"
      className="object-cover"
    />
    <div className="absolute inset-0 bg-[#2e3328]/70" />
    <div className="relative mx-auto max-w-3xl px-5 py-28 text-center lg:py-36">
      <p className="font-[family-name:var(--font-ck-display)] text-[30px] leading-[1.32] font-normal text-white lg:text-[40px]">
        «Jeg kom for å komme i form, men reiste hjem med ny energi og et helt nytt
        forhold til trening.»
      </p>
      <p className="mt-7 text-[14px] font-semibold tracking-[0.18em] text-white/70 uppercase">
        Deltaker · Move &amp; Yoga treningsreise
      </p>
    </div>
  </section>
)
