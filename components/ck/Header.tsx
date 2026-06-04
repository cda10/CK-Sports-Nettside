"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import cn from "classnames"

import { LeadButton } from "./LeadButton"

const navLinks = [
  { label: "Bedrifts-bootcamp", href: "/bedrift" },
  { label: "Move & Yoga", href: "/reiser" },
  { label: "Om oss", href: "/#om" },
  { label: "Kontakt", href: "/#kontakt" },
]

export const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-[#1f3a4d]/10 bg-[#faf8f4]/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1220px] items-center justify-between px-5 py-3 lg:px-10">
        <Link href="/" className="flex items-center gap-3" aria-label="CK Sports">
          <Image
            src="/ck/logo-teal.png"
            alt="CK Sports"
            width={48}
            height={48}
            className="h-11 w-11"
            priority
          />
          <span className="hidden text-[15px] font-semibold tracking-[0.22em] text-[#1f3a4d] sm:block">
            CK SPORTS
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="rounded-full px-4 py-2 text-[14px] font-medium text-[#1f3a4d]/70 transition-colors hover:text-[#1f3a4d]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden sm:block">
            <LeadButton type="bedrift" label="Book bootcamp" variant="primary" size="sm" />
          </span>
          <button
            type="button"
            aria-label="Meny"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1f3a4d]/20 text-[#1f3a4d] lg:hidden"
          >
            <span className="space-y-[5px]">
              <span className="block h-[2px] w-5 bg-current" />
              <span className="block h-[2px] w-5 bg-current" />
              <span className="block h-[2px] w-5 bg-current" />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[#1f3a4d]/10 bg-[#faf8f4]/95 px-5 py-4 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-[15px] font-medium text-[#1f3a4d]/80 hover:bg-[#1f3a4d]/5"
              >
                {label}
              </Link>
            ))}
            <LeadButton
              type="bedrift"
              label="Book bootcamp"
              variant="primary"
              className="mt-2 w-full"
            />
          </nav>
        </div>
      )}
    </header>
  )
}
