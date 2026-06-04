import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"

import { LeadButton } from "@/components/ck"
import { getTrip, trips } from "@/lib/trips"

export function generateStaticParams() {
  return trips.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const trip = getTrip(slug)
  if (!trip) return {}
  return {
    title: `Move & Yoga: ${trip.name}, ${trip.region} | CK Sports`,
    description: trip.intro.slice(0, 155),
    alternates: { canonical: `/reiser/${trip.slug}` },
  }
}

export default async function TripPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const trip = getTrip(slug)
  if (!trip) notFound()

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-end overflow-hidden">
        <Image
          src={trip.image}
          alt={`Move & Yoga treningsreise til ${trip.name}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1f3a4d]/85 via-[#1f3a4d]/30 to-[#1f3a4d]/40" />
        <div className="relative mx-auto w-full max-w-[1220px] px-5 pb-16 lg:px-10 lg:pb-24">
          <p className="mb-4 text-[13px] font-semibold tracking-[0.28em] text-white/80 uppercase">
            Move & Yoga treningsreise
          </p>
          <h1 className="font-[family-name:var(--font-ck-display)] text-[52px] leading-[1.02] font-medium text-white lg:text-[80px]">
            {trip.name}
            <span className="text-white/70"> · {trip.region}</span>
          </h1>
          <p className="mt-4 max-w-lg text-[18px] text-white/85">{trip.tagline}</p>
          <div className="mt-8">
            <LeadButton type="reise" label="Sikre plass" variant="light" trip={trip.name} />
          </div>
        </div>
      </section>

      {/* Intro + facts */}
      <section className="mx-auto max-w-[1220px] px-5 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div>
            <h2 className="font-[family-name:var(--font-ck-display)] text-[32px] leading-tight font-medium text-[#1f3a4d] lg:text-[44px]">
              {trip.tagline}
            </h2>
            <p className="mt-6 text-[18px] leading-relaxed text-[#1f3a4d]/70">{trip.intro}</p>
          </div>
          <div className="flex flex-col gap-5 rounded-[24px] bg-[#f3efe8] p-8">
            {[
              { label: "Varighet", value: trip.duration },
              { label: "Nivå", value: trip.level },
              { label: "Status", value: trip.status },
            ].map((f) => (
              <div key={f.label} className="flex items-baseline justify-between border-b border-[#1f3a4d]/10 pb-3 last:border-0 last:pb-0">
                <span className="text-[13px] font-semibold tracking-[0.16em] text-[#1f3a4d]/45 uppercase">
                  {f.label}
                </span>
                <span className="text-[17px] font-medium text-[#1f3a4d]">{f.value}</span>
              </div>
            ))}
            <LeadButton type="reise" label="Be om datoer og pris" variant="primary" trip={trip.name} className="mt-2 w-full" />
          </div>
        </div>
      </section>

      {/* Hva inngår */}
      <section className="bg-[#f3efe8]">
        <div className="mx-auto max-w-[1220px] px-5 py-20 lg:px-10 lg:py-24">
          <h2 className="mb-10 font-[family-name:var(--font-ck-display)] text-[32px] font-medium text-[#1f3a4d] lg:text-[40px]">
            Hva inngår
          </h2>
          <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {trip.included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[17px] text-[#1f3a4d]/80">
                <span className="mt-[9px] h-2 w-2 flex-none rounded-full bg-[#62a8c9]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Instruktører */}
      <section className="mx-auto max-w-[1220px] px-5 pb-4 lg:px-10">
        <div className="rounded-[28px] bg-[#f3efe8] p-8 lg:p-12">
          <p className="mb-7 text-[13px] font-semibold tracking-[0.28em] text-[#62a8c9] uppercase">
            Instruktører på reisen
          </p>
          <div className="grid gap-7 sm:grid-cols-2">
            {trip.instructors.map((person) => (
              <div key={person.name} className="flex items-center gap-4">
                <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-[#62a8c9]/15 font-[family-name:var(--font-ck-display)] text-[20px] font-semibold text-[#3e88ab]">
                  {person.name
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <p className="text-[19px] font-semibold text-[#1f3a4d]">{person.name}</p>
                  <p className="text-[14px] text-[#1f3a4d]/60">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* En typisk dag */}
      <section className="mx-auto max-w-[1220px] px-5 py-20 lg:px-10 lg:py-24">
        <h2 className="mb-12 font-[family-name:var(--font-ck-display)] text-[32px] font-medium text-[#1f3a4d] lg:text-[40px]">
          En typisk dag
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {trip.day.map((d) => (
            <div key={d.time} className="border-t-2 border-[#62a8c9] pt-5">
              <p className="text-[12px] font-semibold tracking-[0.2em] text-[#62a8c9] uppercase">
                {d.time}
              </p>
              <h3 className="mt-2 text-[19px] font-semibold text-[#1f3a4d]">{d.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#1f3a4d]/65">{d.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Galleri */}
      <section className="mx-auto max-w-[1220px] px-5 pb-20 lg:px-10 lg:pb-24">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {trip.gallery.map((src, i) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-[20px] ${
                i === 0 ? "col-span-2 aspect-[16/10] lg:col-span-2 lg:row-span-2 lg:aspect-auto" : "aspect-square"
              }`}
            >
              <Image
                src={src}
                alt={`Inntrykk fra ${trip.name}`}
                fill
                sizes="(min-width: 1024px) 600px, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f3efe8]">
        <div className="mx-auto max-w-[820px] px-5 py-20 lg:px-10 lg:py-24">
          <h2 className="mb-10 font-[family-name:var(--font-ck-display)] text-[32px] font-medium text-[#1f3a4d] lg:text-[40px]">
            Ofte stilte spørsmål
          </h2>
          <div className="divide-y divide-[#1f3a4d]/10">
            {trip.faq.map((f) => (
              <div key={f.q} className="py-6">
                <h3 className="text-[19px] font-semibold text-[#1f3a4d]">{f.q}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-[#1f3a4d]/70">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1220px] px-5 py-24 lg:px-10 lg:py-28">
        <div className="overflow-hidden rounded-[32px] bg-gradient-to-br from-[#62a8c9] to-[#3e88ab] px-8 py-16 text-center lg:px-16 lg:py-20">
          <h2 className="mx-auto max-w-2xl font-[family-name:var(--font-ck-display)] text-[36px] leading-tight font-medium text-white lg:text-[52px]">
            Bli med til {trip.name}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-white/90">
            Meld interesse, så får du datoer, pris og full reiseplan tilsendt — helt
            uforpliktende.
          </p>
          <div className="mt-9 flex justify-center">
            <LeadButton type="reise" label="Sikre plass" variant="light" trip={trip.name} />
          </div>
        </div>
      </section>
    </>
  )
}
