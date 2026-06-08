// Reisedata for Move & Yoga treningsreiser.
// TODO: Fyll inn ekte datoer, pris og antall plasser når de er klare.
export type Trip = {
  slug: string
  name: string
  region: string
  tagline: string
  location: string
  dates: string
  duration: string
  level: string
  status: string
  intro: string
  image: string
  gallery: string[]
  included: string[]
  day: { time: string; title: string; text: string }[]
  faq: { q: string; a: string }[]
  instructors: { name: string; role: string }[]
  pricing: {
    fee: string
    feeNote: string
    hotelName: string
    roomsNote: string
    extraBed: string
    rooms: { name: string; occ1: string; occ2: string }[]
  }
}

export const trips: Trip[] = [
  {
    slug: "malaga",
    name: "Malaga",
    region: "Spania",
    tagline: "Tren, pust og lad opp i solen",
    location: "El Oceano Beach Hotel · Mijas, Costa del Sol",
    dates: "7.–11. november 2026",
    duration: "4 dager",
    level: "Alle nivåer",
    status: "Påmelding åpen",
    intro:
      "Fire dager med trening, yoga og hvile ved Middelhavet — på El Oceano Beach Hotel i Mijas på Costa del Sol, rundt 30 minutter fra Malaga. Morgenyoga med havutsikt, styrkeøkter på stranden og ved hotellet, en topptur i fjellet og god tid til å lade opp før vinteren. Et lite, trygt reisefølge der alle blir tatt vare på, uansett nivå.",
    image: "/ck/trip-group.jpg",
    gallery: [
      "/ck/trip-handstand.jpg",
      "/ck/trip-sunset-walk.jpg",
      "/ck/trip-beach-gym.jpg",
      "/ck/trip-dusk-beach.jpg",
      "/ck/trip-arch-window.jpg",
    ],
    included: [
      "75 min morgenyoga hver dag med Camilla (Jivamukti Yoga Stavanger)",
      "Styrketrening med Kathrine — på stranden og ved hotellet (TRX, manualer, strikk)",
      "Topptur til La Concha (ca. 1200 moh) — utsikt mot Gibraltar og Afrika",
      "Morgenbad i Middelhavet, gode måltider og felles opplevelser",
      "Lite, trygt reisefølge — passer alle nivåer",
    ],
    day: [
      {
        time: "Morgen",
        title: "Morgenyoga med havutsikt",
        text: "75 minutter yoga med Camilla på hotellet — pust, ro og bevegelse for å starte dagen. Et morgenbad i Middelhavet for den som vil.",
      },
      {
        time: "Formiddag",
        title: "Styrke med Kathrine",
        text: "Styrkeøkt på stranden ved El Bombo eller ved hotellet — TRX, manualer og strikk. Alltid tilpasset eget nivå.",
      },
      {
        time: "Dagstur",
        title: "Topptur til La Concha",
        text: "En av dagene går turen til La Concha (ca. 1200 moh), sørkystens høyeste topp — 4–5 timer med utsikt mot Gibraltar og Afrikas kyst.",
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
        q: "Hvor bor vi?",
        a: "På El Oceano Beach Hotel, Restaurant & Spa i Mijas på Costa del Sol — rundt 30 minutter fra Malaga flyplass og Marbella. Du booker rommet ditt gjennom oss, og vi hjelper deg å velge.",
      },
      {
        q: "Hva er inkludert, og hva kommer i tillegg?",
        a: "Deltakeravgiften dekker programmet — daglig yoga med Camilla og styrketrening med Kathrine, topptur og oppfølging gjennom uka. Hotell og fly kommer i tillegg; vi hjelper deg med begge. Be om full prisoversikt.",
      },
      {
        q: "Hvordan kommer jeg meg dit?",
        a: "Du booker egen flyreise til Malaga. Vi anbefaler gjerne flytider som passer programmet, slik at du ankommer og reiser hjem til rett tid.",
      },
      {
        q: "Kan jeg melde meg på alene?",
        a: "Absolutt. Mange reiser alene — det lille reisefølget gjør at du raskt blir kjent med de andre.",
      },
    ],
    instructors: [
      { name: "Kathrine Maaseide", role: "Trening og yoga · CK Sports" },
      { name: "Camilla Veen", role: "Yoga · Jivamukti Yoga Stavanger" },
    ],
    pricing: {
      fee: "4 000 kr",
      feeNote:
        "Dekker programmet: daglig yoga med Camilla, styrketrening med Kathrine, topptur og oppfølging gjennom hele oppholdet.",
      hotelName: "El Oceano Beach Hotel, Restaurant & Spa",
      roomsNote:
        "Priser per natt, inkludert frokost. Hotell bookes gjennom oss. Ekstra seng i utvalgte rom: €83/natt.",
      extraBed: "€83/natt",
      rooms: [
        { name: "Dobbeltrom (uten sjøutsikt)", occ1: "€263", occ2: "€281" },
        { name: "Havfront minisuite (uten sjøutsikt)", occ1: "€328", occ2: "€346" },
        { name: "Deluxe oceanfront minisuite (sjøutsikt garantert)", occ1: "€363", occ2: "€381" },
      ],
    },
  },
]

export const getTrip = (slug: string) => trips.find((t) => t.slug === slug)
