const data = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HealthClub"],
  name: "CK Sports",
  description:
    "Bedrifts-bootcamp i arbeidstiden og Move&Yoga treningsreiser med Kathrine Maaseide. Stavanger.",
  url: "https://www.cksports.no",
  telephone: "+47 992 97 799",
  email: "kathrine@maaseide.no",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Stavanger",
    addressCountry: "NO",
  },
  areaServed: "Norge",
  founder: {
    "@type": "Person",
    name: "Kathrine Maaseide",
    jobTitle: "Personlig trener og yogainstruktør",
    description:
      "Sertifisert personlig trener og yogainstruktør, tidligere OL-utøver i sandvolleyball (to ganger).",
  },
  makesOffer: [
    { "@type": "Offer", name: "Bedrifts-bootcamp i arbeidstiden" },
    { "@type": "Offer", name: "Move & Yoga treningsreiser" },
  ],
}

export const JsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
)
