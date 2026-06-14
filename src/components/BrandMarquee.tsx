"use client";

import Image from "next/image";
import { portfolioBrands } from "@/lib/portfolio";

export function BrandMarquee() {
  const items = [...portfolioBrands, ...portfolioBrands];

  return (
    <section
      className="relative z-20 overflow-hidden bg-charcoal py-5 shadow-[0_8px_32px_rgba(0,0,0,0.28)]"
      aria-label="Brand partners"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-charcoal to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-charcoal to-transparent" />

      <div className="marquee-track flex w-max items-center gap-8 px-6">
        {items.map((brand, index) => (
          <div
            key={`${brand.name}-${index}`}
            className="flex h-[4.5rem] w-[8.5rem] shrink-0 items-center justify-center border border-white/10 bg-[linear-gradient(145deg,#2f2b28_0%,#1a1714_55%,#141210_100%)] px-3 opacity-85 transition hover:opacity-100"
          >
            <Image
              src={brand.image}
              alt={brand.name}
              width={120}
              height={52}
              className="h-auto max-h-9 w-auto max-w-[110px] object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
