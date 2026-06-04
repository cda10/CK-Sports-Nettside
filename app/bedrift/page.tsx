import type { Metadata } from "next"

import {
  BedriftHero,
  HowItWorks,
  BedriftFormats,
  RoiCalculator,
  TrustLogos,
  Testimonials,
  CtaBand,
} from "@/components/ck"

export const metadata: Metadata = {
  title: "Bedrifts-bootcamp i arbeidstiden | CK Sports",
  description:
    "Kathrine Maaseide kommer til bedriften og trener de ansatte i arbeidstiden. Mer energi, bedre samhold og lavere sykefravær. Regn på besparelsen.",
  alternates: { canonical: "/bedrift" },
}

export default function BedriftPage() {
  return (
    <>
      <BedriftHero />
      <HowItWorks />
      <BedriftFormats />
      <RoiCalculator />
      <TrustLogos />
      <Testimonials />
      <CtaBand />
    </>
  )
}
