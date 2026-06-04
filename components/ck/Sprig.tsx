// Botanisk salvie-/olivenkvist — håndtegnet linjekunst som CK Sports-signatur.
// Bruk: seksjonsskille, hjørneaksent, svakt vannmerke. currentColor styrer fargen.
export const Sprig = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 110" fill="none" className={className} aria-hidden>
    <g
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* stem */}
      <path d="M32 108 C 31 86 31 64 32 44 C 33 28 33 16 32 4" />
      {/* right leaves */}
      <path d="M32 86 C 45 85 54 77 55 65 C 43 66 34 73 32 86 Z" />
      <path d="M32 66 C 45 65 54 57 55 45 C 43 46 34 53 32 66 Z" />
      <path d="M32 46 C 44 45 52 38 53 27 C 42 28 34 35 32 46 Z" />
      {/* left leaves */}
      <path d="M32 76 C 19 75 10 67 9 55 C 21 56 30 63 32 76 Z" />
      <path d="M32 56 C 19 55 10 47 9 35 C 21 36 30 43 32 56 Z" />
      <path d="M32 36 C 20 35 12 28 11 17 C 22 18 30 25 32 36 Z" />
      {/* top bud */}
      <path d="M32 16 C 37 12 38 7 36 2 C 31 5 30 10 32 16 Z" />
    </g>
  </svg>
)
