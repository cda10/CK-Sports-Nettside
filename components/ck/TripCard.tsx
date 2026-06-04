import Image from "next/image"
import Link from "next/link"

import type { Trip } from "@/lib/trips"

export const TripCard = ({ trip }: { trip: Trip }) => (
  <Link
    href={`/reiser/${trip.slug}`}
    className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[28px]"
  >
    <Image
      src={trip.image}
      alt={`Move & Yoga treningsreise til ${trip.name}`}
      fill
      sizes="(min-width: 1024px) 590px, 100vw"
      className="object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#1f3a4d]/90 via-[#1f3a4d]/20 to-transparent" />
    <div className="relative p-8 lg:p-10">
      <span className="mb-3 inline-flex rounded-full bg-white/15 px-3 py-1 text-[12px] font-semibold tracking-wide text-white uppercase backdrop-blur-sm">
        {trip.status}
      </span>
      <h3 className="font-[family-name:var(--font-ck-display)] text-[34px] leading-tight font-medium text-white lg:text-[40px]">
        {trip.name}
        <span className="text-white/70"> · {trip.region}</span>
      </h3>
      <p className="mt-2 text-[15px] text-white/85">
        {trip.tagline} · {trip.duration} · {trip.level}
      </p>
      <span className="mt-5 inline-flex items-center gap-2 text-[15px] font-medium text-white">
        Se reisen
        <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
      </span>
    </div>
  </Link>
)
