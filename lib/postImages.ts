// Bildebibliotek for SoMe-generatoren. Generatoren foreslår de mest relevante
// bildene basert på tema/kanal. Legg gjerne til flere etter hvert.
export type PostImage = {
  slug: string
  src: string
  label: string
  cat: "bedrift" | "reise" | "kathrine"
  tags: string[]
}

export const postImages: PostImage[] = [
  {
    slug: "studio-group-real",
    src: "/ck/studio-group-real.jpg",
    label: "Gruppetrening i studioet",
    cat: "bedrift",
    tags: ["bedrift", "bootcamp", "team", "gruppe", "trening", "styrke", "arbeid", "ansatte", "sammen", "studio", "energi"],
  },
  {
    slug: "studio-group-rest",
    src: "/ck/studio-group-rest.jpg",
    label: "Fellesskap etter en økt",
    cat: "bedrift",
    tags: ["bedrift", "fellesskap", "team", "gruppe", "pause", "trivsel", "sammen", "studio"],
  },
  {
    slug: "trip-group",
    src: "/ck/trip-group.jpg",
    label: "Yoga i solnedgang",
    cat: "reise",
    tags: ["reise", "yoga", "move", "sol", "solnedgang", "fellesskap", "malaga", "ro", "middelhav", "pust"],
  },
  {
    slug: "trip-arch-window",
    src: "/ck/trip-arch-window.jpg",
    label: "Solnedgang over bukten",
    cat: "reise",
    tags: ["reise", "ro", "solnedgang", "hav", "sol", "malaga", "pust", "middelhav"],
  },
  {
    slug: "trip-sunset-palms",
    src: "/ck/trip-sunset-palms.jpg",
    label: "Strand og palmer",
    cat: "reise",
    tags: ["reise", "sol", "strand", "palmer", "livsstil", "malaga", "middelhav"],
  },
  {
    slug: "trip-beach-gym",
    src: "/ck/trip-beach-gym.jpg",
    label: "Palmer ved sjøen",
    cat: "reise",
    tags: ["reise", "sol", "solnedgang", "hav", "ro", "middelhav"],
  },
  {
    slug: "trip-handstand",
    src: "/ck/trip-handstand.jpg",
    label: "Lek og energi på stranden",
    cat: "reise",
    tags: ["reise", "energi", "lek", "styrke", "strand", "sol", "bevegelse", "glede"],
  },
  {
    slug: "kathrine",
    src: "/ck/kathrine.jpg",
    label: "Kathrine Maaseide",
    cat: "kathrine",
    tags: ["kathrine", "instruktør", "om", "portrett", "pt", "yoga", "ekspert", "trener"],
  },
]

export function pickImages(topic: string, channel: string): PostImage[] {
  const q = `${topic} ${channel}`.toLowerCase()
  const isBedrift = /bedrift|bootcamp|team|ansatt|arbeid|jobb|kontor|kolleg|sykefrav/.test(q)
  const isReise = /reise|yoga|move|malaga|sol|retreat|ferie|tur|solnedgang|strand/.test(q)
  const isKathrine = /kathrine|instrukt|om oss|portrett|trener/.test(q)

  const scored = postImages
    .map((img) => {
      let score = 0
      img.tags.forEach((t) => {
        if (q.includes(t)) score += 2
      })
      if (isBedrift && img.cat === "bedrift") score += 3
      if (isReise && img.cat === "reise") score += 3
      if (isKathrine && img.cat === "kathrine") score += 4
      return { img, score }
    })
    .sort((a, b) => b.score - a.score)

  const top = scored.filter((s) => s.score > 0).map((s) => s.img)
  if (top.length < 2) {
    const fallback = isBedrift
      ? ["studio-group-real", "studio-group-rest"]
      : ["trip-group", "trip-arch-window"]
    fallback.forEach((slug) => {
      const im = postImages.find((i) => i.slug === slug)
      if (im && !top.includes(im)) top.push(im)
    })
  }
  return top.slice(0, 2)
}

export function motifIdea(topic: string): string {
  const q = topic.toLowerCase()
  if (/bedrift|bootcamp|team|ansatt|arbeid|jobb/.test(q)) {
    return "Motiv-idé hvis dere vil ta et nytt bilde: teamet i bevegelse i lokalet — smil, samhold og energi. Et ekte bilde fra en faktisk økt funker alltid best."
  }
  return "Motiv-idé hvis dere vil ta et nytt bilde: sol, hav og fellesskap — gjerne morgenøkt eller yoga i solnedgang. Varme farger og mennesker i bevegelse selger reisen."
}
