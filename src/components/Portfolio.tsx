"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import type { PortfolioCategory } from "@/lib/design-tokens";
import { portfolioBrands } from "@/lib/portfolio";
import { SectionReveal } from "./SectionReveal";

const filters: PortfolioCategory[] = ["all", "wine", "spirits", "beer", "liqueurs"];

export function Portfolio() {
  const t = useTranslations("portfolio");
  const [active, setActive] = useState<PortfolioCategory>("all");

  const filtered = useMemo(() => {
    if (active === "all") return portfolioBrands;
    return portfolioBrands.filter((brand) => brand.category === active);
  }, [active]);

  return (
    <section id="portfolio" className="relative overflow-hidden bg-cream px-6 py-24 lg:px-10 lg:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,#231f20_1px,transparent_0)] [background-size:28px_28px]" />
      <div className="shimmer-line pointer-events-none absolute top-0 left-0 h-px w-full opacity-50" />

      <div className="relative mx-auto max-w-7xl">
        <SectionReveal>
          <p className="section-eyebrow mb-4">{t("eyebrow")}</p>
          <h2 className="section-title mb-6 text-4xl text-charcoal lg:text-5xl">{t("title")}</h2>
          <div className="luxury-divider mb-6" />
          <p className="mb-10 max-w-2xl text-base leading-8 text-muted">{t("description")}</p>
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <div className="mb-12 flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                className={`border px-5 py-2 text-[0.68rem] tracking-[0.22em] uppercase transition ${
                  active === filter
                    ? "border-charcoal bg-charcoal text-bronze-light"
                    : "border-charcoal/15 bg-white/50 text-charcoal/70 hover:border-charcoal/35"
                }`}
              >
                {t(`filters.${filter}`)}
              </button>
            ))}
          </div>
        </SectionReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((brand, index) => (
            <SectionReveal key={brand.name} delay={(index % 8) * 0.04}>
              <article className="group relative flex min-h-44 items-center justify-center overflow-hidden border border-charcoal/8 bg-ivory p-8 transition duration-500 hover:-translate-y-1 hover:border-bronze/35 hover:shadow-[0_24px_60px_-30px_rgba(35,31,32,0.45)]">
                <div className="absolute inset-0 bg-gradient-to-br from-bronze/0 via-transparent to-bronze/8 opacity-0 transition group-hover:opacity-100" />
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={220}
                  height={120}
                  className="relative z-10 h-auto max-h-24 w-full object-contain transition duration-500 group-hover:scale-[1.03]"
                />
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
