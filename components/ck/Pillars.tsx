import Image from "next/image"
import Link from "next/link"

const pillars = [
  {
    id: "bedrift-kort",
    eyebrow: "I arbeidstiden",
    title: "Bedrifts-bootcamp",
    image: "/ck/studio-group-real.jpg",
    text: "Vi kommer til arbeidsplassen og kjører effektive økter midt i arbeidsdagen. Lav terskel, tilpasset alle nivåer — energi og samhold for hele teamet.",
    href: "/bedrift",
    cta: "Les mer",
  },
  {
    id: "moveyoga",
    eyebrow: "I solen",
    title: "Move & Yoga treningsreiser",
    image: "/ck/trip-handstand.jpg",
    text: "En uke der trening, yoga og hvile møtes. Morgenøkter, yoga i solnedgang og tid til å lade opp — i vakre omgivelser ved Middelhavet.",
    href: "/reiser",
    cta: "Se reisene",
  },
]

export const Pillars = () => (
  <section className="mx-auto max-w-[1220px] px-5 pb-8 lg:px-10">
    <div className="grid gap-6 lg:grid-cols-2">
      {pillars.map((p) => (
        <Link
          key={p.id}
          id={p.id}
          href={p.href}
          className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[28px] scroll-mt-24 sm:aspect-[5/4] lg:aspect-[4/5]"
        >
          <Image
            src={p.image}
            alt={p.title}
            fill
            sizes="(min-width: 1024px) 590px, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2e3328]/90 via-[#2e3328]/20 to-transparent" />
          <div className="relative p-8 lg:p-10">
            <p className="mb-3 text-[12px] font-semibold tracking-[0.24em] text-white/75 uppercase">
              {p.eyebrow}
            </p>
            <h3 className="font-[family-name:var(--font-ck-display)] text-[34px] leading-tight font-medium text-white lg:text-[40px]">
              {p.title}
            </h3>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/85">
              {p.text}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-[15px] font-medium text-white">
              {p.cta}
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  </section>
)
