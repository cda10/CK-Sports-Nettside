import Image from "next/image"
import Link from "next/link"

const nav = [
  { label: "Bedrifts-bootcamp", href: "/bedrift" },
  { label: "Move & Yoga", href: "/reiser" },
  { label: "Om oss", href: "/#om" },
  { label: "Kontakt", href: "/#kontakt" },
]

export const Footer = () => (
  <footer id="kontakt" className="bg-[#1f3a4d] text-white/80">
    <div className="mx-auto grid max-w-[1220px] gap-12 px-5 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-10 lg:py-20">
      <div className="flex flex-col gap-5">
        <Image
          src="/ck/logo-white.png"
          alt="CK Sports"
          width={64}
          height={64}
          className="h-14 w-14"
        />
        <p className="max-w-xs text-[15px] leading-relaxed text-white/70">
          Trening, mestring og opplevelser. Bedrifts-bootcamp i arbeidstiden, og
          Move&amp;Yoga treningsreiser til solen.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-[13px] font-semibold tracking-[0.18em] text-white/50 uppercase">
          Utforsk
        </h3>
        {nav.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="text-[15px] text-white/75 transition-colors hover:text-white"
          >
            {label}
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-[13px] font-semibold tracking-[0.18em] text-white/50 uppercase">
          Kontakt
        </h3>
        <a
          href="mailto:kathrine@maaseide.no"
          className="text-[15px] text-white/75 transition-colors hover:text-white"
        >
          kathrine@maaseide.no
        </a>
        <a
          href="tel:+4791639927"
          className="text-[15px] text-white/75 transition-colors hover:text-white"
        >
          +47 916 39 927
        </a>
        <p className="text-[15px] text-white/75">
          Sverdrups gate 27
          <br />
          4007 Stavanger
        </p>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="mx-auto flex max-w-[1220px] flex-col items-center justify-between gap-2 px-5 py-6 text-[13px] text-white/45 sm:flex-row lg:px-10">
        <p>© {new Date().getFullYear()} CK Sports AS</p>
        <p>Stavanger, Norge</p>
      </div>
    </div>
  </footer>
)
