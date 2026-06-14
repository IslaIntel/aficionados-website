"use client";

import Image from "next/image";
import { portfolioBrands } from "@/lib/portfolio";

export function BrandMarquee() {
  const items = [...portfolioBrands, ...portfolioBrands];

  return (
    <section className="relative overflow-hidden border-y border-bronze/15 bg-charcoal py-6" aria-label="Brand partners">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-charcoal to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-charcoal to-transparent" />

      <div className="marquee-track flex w-max items-center gap-16 px-8">
        {items.map((brand, index) => (
          <div
            key={`${brand.name}-${index}`}
            className="flex h-16 w-40 shrink-0 items-center justify-center opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
          >
            <Image
              src={brand.image}
              alt={brand.name}
              width={140}
              height={60}
              className="h-auto max-h-12 w-auto max-w-[140px] object-contain brightness-200"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
