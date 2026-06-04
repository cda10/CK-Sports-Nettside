const items = [
  {
    title: "I arbeidstiden",
    text: "Lav terskel når økten ligger midt i arbeidsdagen — alle på teamet kan bli med.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </>
    ),
  },
  {
    title: "Tilpasset alle nivåer",
    text: "Program og tempo som møter folk der de er — uansett form og bakgrunn.",
    icon: (
      <>
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
        <path d="M16 6.2a3 3 0 010 5.6M17.5 14c2.3.4 4 2.3 4 5" />
      </>
    ),
  },
  {
    title: "Mer overskudd",
    text: "Bevegelse som gir energi, bedre humør og mindre stress i hverdagen.",
    icon: (
      <>
        <path d="M3 17l5-5 4 4 8-8" />
        <path d="M16 8h5v5" />
      </>
    ),
  },
  {
    title: "Fellesskap",
    text: "Et varmt miljø som heier deg frem — på matta, i studioet og på reise.",
    icon: (
      <path d="M12 20.5S4 15.5 4 9.8C4 7 6 5 8.6 5c1.6 0 2.9.8 3.4 2 .5-1.2 1.8-2 3.4-2C18 5 20 7 20 9.8c0 5.7-8 10.7-8 10.7z" />
    ),
  },
]

export const Included = () => (
  <section className="mx-auto max-w-[1220px] px-5 py-24 lg:px-10 lg:py-28">
    <div className="mb-14 max-w-2xl">
      <p className="mb-4 text-[13px] font-semibold tracking-[0.28em] text-[#5f6e30] uppercase">
        Slik er det å trene med oss
      </p>
      <h2 className="font-[family-name:var(--font-ck-display)] text-[36px] leading-tight font-medium text-[#33302b] lg:text-[48px]">
        Mer enn en treningsøkt
      </h2>
    </div>

    <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.title}>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#62a8c9]/12">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3e88ab"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              {item.icon}
            </svg>
          </div>
          <h3 className="mt-5 text-[19px] font-semibold text-[#33302b]">{item.title}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-[#33302b]/65">{item.text}</p>
        </div>
      ))}
    </div>
  </section>
)
