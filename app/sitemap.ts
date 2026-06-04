import type { MetadataRoute } from "next"

import { trips } from "@/lib/trips"

const base = "https://www.cksports.no"

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/bedrift`, priority: 0.9 },
    { url: `${base}/reiser`, priority: 0.8 },
  ]
  const tripPages = trips.map((t) => ({
    url: `${base}/reiser/${t.slug}`,
    priority: 0.7,
  }))
  return [...pages, ...tripPages].map((p) => ({
    ...p,
    changeFrequency: "monthly" as const,
  }))
}
