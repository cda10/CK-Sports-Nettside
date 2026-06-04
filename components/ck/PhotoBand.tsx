import Image from "next/image"

import { Sprig } from "./Sprig"

type Props = {
  src: string
  alt: string
  caption?: string
}

export const PhotoBand = ({ src, alt, caption }: Props) => (
  <section className="relative h-[46vh] min-h-[340px] overflow-hidden lg:h-[58vh]">
    <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
    {caption && (
      <>
        <div className="absolute inset-0 bg-[#2e3328]/45" />
        <div
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          data-reveal
        >
          <Sprig className="mb-5 h-12 w-auto text-white/80" />
          <p className="max-w-2xl font-[family-name:var(--font-ck-display)] text-[30px] leading-tight font-medium text-white lg:text-[46px]">
            {caption}
          </p>
        </div>
      </>
    )}
  </section>
)
