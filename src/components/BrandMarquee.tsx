"use client";

import Image from "next/image";
import { portfolioBrands } from "@/lib/portfolio";

export function BrandMarquee() {
  const items = [...portfolioBrands, ...portfolioBrands];

  return (
    <section className="relative overflow-hidden border-y border-bronze/15 bg-charcoal py-6" aria-label="Brand partners">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-charcoal to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-charcoal to-transparent" />

      <div className="marquee-track flex w-max items-center gap-10 px-8">
        {items.map((brand, index) => (
          <div
            key={`${brand.name}-${index}`}
            className="flex h-20 w-36 shrink-0 items-center justify-center rounded-sm border border-white/8 bg-[linear-gradient(145deg,#2f2b28,#1a1714)] px-4 opacity-80 transition hover:opacity-100"
          >
            <Image
              src={brand.image}
              alt={brand.name}
              width={120}
              height={52}
              className="h-auto max-h-10 w-auto max-w-[120px] object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
