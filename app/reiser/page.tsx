import type { Metadata } from "next"

import { TripCard } from "@/components/ck"
import { trips } from "@/lib/trips"

export const metadata: Metadata = {
  title: "Move & Yoga treningsreiser | CK Sports",
  description:
    "Treningsreiser der trening, yoga og hvile møtes — i solen ved Middelhavet. Med Kathrine Maaseide. Passer alle nivåer.",
  alternates: { canonical: "/reiser" },
}

export default function ReiserPage() {
  return (
    <>
      <section className="bg-[#faf8f4]">
        <div className="mx-auto max-w-[1220px] px-5 pt-32 pb-12 lg:px-10 lg:pt-40 lg:pb-16">
          <p className="mb-4 text-[13px] font-semibold tracking-[0.28em] text-[#7c8c4e] uppercase">
            Move & Yoga treningsreiser
          </p>
          <h1 className="max-w-3xl font-[family-name:var(--font-ck-display)] text-[44px] leading-[1.05] font-medium text-[#33302b] lg:text-[64px]">
            Tren, pust og lad opp i solen
          </h1>
          <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-[#33302b]/70">
            En uke der aktivitet og hvile møtes, i vakre omgivelser og et trygt, lite
            reisefølge. Med Kathrine Maaseide.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1220px] px-5 pb-24 lg:px-10 lg:pb-28">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trips.map((trip) => (
            <TripCard key={trip.slug} trip={trip} />
          ))}
          <div className="flex items-center justify-center rounded-[28px] border border-dashed border-[#33302b]/15 p-10 text-center">
            <p className="text-[16px] leading-relaxed text-[#33302b]/55">
              Flere reiser annonseres snart.
              <br />
              Meld interesse, så får du beskjed først.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
