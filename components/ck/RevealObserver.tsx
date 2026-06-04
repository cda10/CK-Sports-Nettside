"use client"

import { useEffect } from "react"

// Legger til rolig innfasing på alle elementer med [data-reveal].
// Trygt: uten JS (eller ved redusert bevegelse) er alt synlig.
export const RevealObserver = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    document.documentElement.classList.add("js-reveal")

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in")
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    )

    const observeAll = () =>
      document.querySelectorAll("[data-reveal]:not(.in)").forEach((el) => io.observe(el))

    observeAll()
    const mo = new MutationObserver(observeAll)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])

  return null
}
