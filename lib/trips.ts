// Reisedata for Move & Yoga treningsreiser.
// TODO: Fyll inn ekte datoer, pris og antall plasser når de er klare.
export type Trip = {
  slug: string
  name: string
  region: string
  tagline: string
  duration: string
  level: string
  status: string
  intro: string
  image: string
  gallery: string[]
  included: string[]
  day: { time: string; title: string; text: string }[]
  faq: { q: string; a: string }[]
}

export const trips: Trip[] = [
  {
    slug: "malaga",
    name: "Malaga",
    region: "Spania",
    tagline: "Tren, pust og lad opp i solen",
    duration: "1 uke",
    level: "Alle nivåer",
    status: "Påmelding åpen",
    intro:
      "En uke der trening, yoga og hvile møtes — i vakre omgivelser ved Middelhavet. Morgenøkter i frisk luft, yoga i solnedgang, gode måltider og tid til å lade opp. Et lite, trygt reisefølge der alle blir tatt vare på, uansett nivå.",
    image: "/ck/trip-group.jpg",
    gallery: [
      "/ck/trip-sunset-palms.jpg",
      "/ck/trip-arch-window.jpg",
      "/ck/trip-beach-gym.jpg",
      "/ck/trip-handstand.jpg",
    ],
    included: [
      "Daglige trenings- og yogaøkter med Kathrine",
      "Yoga i solnedgang og rolige pusteøkter",
      "Treningspark og strender rett utenfor døren",
      "Tid til hvile, gode måltider og fellesskap",
      "Lite, trygt reisefølge — passer alle nivåer",
    ],
    day: [
      {
        time: "Morgen",
        title: "Bevegelse i frisk luft",
        text: "Vi starter dagen med en energigivende økt — styrke, mobilitet eller en rolig løpetur langs sjøen.",
      },
      {
        time: "Formiddag",
        title: "Frokost og fri tid",
        text: "God frokost med havutsikt, og tid til å nyte stranden, bassenget eller en kaffe i byen.",
      },
      {
        time: "Ettermiddag",
        title: "Yoga og pust",
        text: "Yogaøkt tilpasset nivå, med fokus på pust, ro og restitusjon.",
      },
      {
        time: "Kveld",
        title: "Felles måltid",
        text: "Vi samles til middag og deler dagens opplevelser — kjernen i reisen er fellesskapet.",
      },
    ],
    faq: [
      {
        q: "Passer reisen for meg som er utrent?",
        a: "Ja. Alle økter tilpasses nivå, og du velger selv intensitet. Mange deltakere er nybegynnere.",
      },
      {
        q: "Hva er inkludert i prisen?",
        a: "Trenings- og yogaøkter, oppfølging og program. Be om full oversikt over datoer, pris og hva som inngår av opphold og måltider.",
      },
      {
        q: "Kan jeg melde meg på alene?",
        a: "Absolutt. Mange reiser alene — det lille reisefølget gjør at du raskt blir kjent med de andre.",
      },
    ],
  },
]

export const getTrip = (slug: string) => trips.find((t) => t.slug === slug)
