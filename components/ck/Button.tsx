import Link from "next/link"
import cn from "classnames"

type Variant = "primary" | "outline" | "light"

type Props = {
  href: string
  children: React.ReactNode
  variant?: Variant
  className?: string
}

const variants: Record<Variant, string> = {
  // Solid CK teal
  primary:
    "bg-[#62a8c9] text-white hover:bg-[#3e88ab] shadow-sm hover:shadow-md",
  // Outlined for light backgrounds
  outline:
    "border border-[#33302b]/25 text-[#33302b] hover:border-[#33302b]/50 hover:bg-[#2e3328]/5",
  // For dark/photo backgrounds
  light: "bg-white/90 text-[#33302b] hover:bg-white backdrop-blur-sm",
}

export const Button = ({ href, children, variant = "primary", className }: Props) => (
  <Link
    href={href}
    className={cn(
      "inline-flex items-center justify-center rounded-full px-7 py-3 text-[15px] font-medium tracking-wide transition-all duration-200",
      variants[variant],
      className,
    )}
  >
    {children}
  </Link>
)
