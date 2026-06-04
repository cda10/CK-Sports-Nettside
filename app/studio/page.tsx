import type { Metadata } from "next"

import { PostGenerator } from "@/components/ck"

export const metadata: Metadata = {
  title: "Studio — SoMe-generator | CK Sports",
  robots: { index: false, follow: false },
}

export default function StudioPage() {
  return (
    <section className="mx-auto max-w-[1100px] px-5 pt-32 pb-24 lg:px-10 lg:pt-40 lg:pb-28">
      <p className="mb-4 text-[13px] font-semibold tracking-[0.28em] text-[#5f6e30] uppercase">
        Internt verktøy
      </p>
      <h1 className="font-[family-name:var(--font-ck-display)] text-[40px] leading-tight font-medium text-[#33302b] lg:text-[56px]">
        SoMe-generator
      </h1>
      <p className="mt-5 max-w-xl text-[18px] leading-relaxed text-[#33302b]/70">
        Lag ferdige innlegg til Instagram, LinkedIn og Facebook — i CK Sports&apos; stemme.
        Bare lim inn, finpuss og publiser.
      </p>
      <div className="mt-12">
        <PostGenerator />
      </div>
    </section>
  )
}
