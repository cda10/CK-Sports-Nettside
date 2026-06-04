import {
  Hero,
  Intro,
  Pillars,
  Corporate,
  Evidence,
  RoiCalculator,
  TrustLogos,
  FeaturedTrip,
  AboutKathrine,
  Testimonials,
  Included,
  PhotoBand,
  CtaBand,
} from "@/components/ck"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Pillars />
      <Corporate />
      <Evidence />
      <RoiCalculator />
      <TrustLogos />
      <FeaturedTrip />
      <AboutKathrine />
      <Testimonials />
      <Included />
      <PhotoBand
        src="/ck/trip-arch-window.jpg"
        alt="Solnedgang over bukten på en Move&Yoga treningsreise"
        caption="Tren. Pust. Lad opp i solen."
      />
      <CtaBand />
    </>
  )
}
