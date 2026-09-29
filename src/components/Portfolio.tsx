"use client";

import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import {
  mainCategories,
  spiritTypes,
  wineOrigins,
  wineStyles,
  type PortfolioCategory,
  type SpiritType,
  type WineOrigin,
  type WineStyle,
} from "@/lib/design-tokens";
import { portfolioBrands } from "@/lib/portfolio";
import { BrandLogoPlate } from "./BrandLogoPlate";
import { SegmentRow } from "./SegmentRow";
import { MotionOverlay } from "./MotionOverlay";
import { SectionReveal } from "./SectionReveal";

export function Portfolio() {
  const t = useTranslations("portfolio");
  const segments = useTranslations("catalog");
  const [active, setActive] = useState<PortfolioCategory>("all");
  const [wineStyle, setWineStyle] = useState<"all" | WineStyle>("all");
  const [wineOrigin, setWineOrigin] = useState<"all" | WineOrigin>("all");
  const [spiritType, setSpiritType] = useState<"all" | SpiritType>("all");

  const selectCategory = (category: PortfolioCategory) => {
    setActive(category);
    setWineStyle("all");
    setWineOrigin("all");
    setSpiritType("all");
  };

  const filtered = useMemo(() => {
    return portfolioBrands.filter((brand) => {
      if (active !== "all" && brand.category !== active) return false;
      if (active === "wine" && wineStyle !== "all" && brand.wineStyle !== wineStyle) return false;
      if (active === "wine" && wineOrigin !== "all" && brand.wineOrigin !== wineOrigin) return false;
      if (active === "spirits" && spiritType !== "all" && brand.spiritType !== spiritType) return false;
      return true;
    });
  }, [active, wineStyle, wineOrigin, spiritType]);

  return (
    <section id="portfolio" className="relative overflow-hidden bg-cream px-6 py-24 lg:px-10 lg:py-32">
      <MotionOverlay variant="section" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,#231f20_1px,transparent_0)] [background-size:28px_28px]" />
      <div className="shimmer-line pointer-events-none absolute top-0 left-0 h-px w-full opacity-50" />

      <div className="relative mx-auto max-w-7xl">
        <SectionReveal>
          <p className="section-eyebrow mb-4">{t("eyebrow")}</p>
          <h2 className="section-title mb-6 text-4xl text-charcoal lg:text-5xl">{t("title")}</h2>
          <div className="luxury-divider mb-6" />
          <p className="mb-10 max-w-2xl text-base leading-8 text-muted">{t("description")}</p>
        </SectionReveal>

        <SectionReveal delay={0.08} className="mb-12">
          <div className="flex flex-wrap gap-3">
            {mainCategories.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => selectCategory(filter)}
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
          {active === "wine" ? (
            <div className="mt-6 space-y-4">
              <SegmentRow
                label={segments("segments.style")}
                allLabel={t("filters.all")}
                value={wineStyle}
                options={wineStyles}
                labelFor={(key) => segments(`wineStyle.${key}`)}
                onChange={setWineStyle}
                tone="light"
              />
              <SegmentRow
                label={segments("segments.origin")}
                allLabel={t("filters.all")}
                value={wineOrigin}
                options={wineOrigins}
                labelFor={(key) => segments(`wineOrigin.${key}`)}
                onChange={setWineOrigin}
                tone="light"
              />
            </div>
          ) : null}
          {active === "spirits" ? (
            <div className="mt-6">
              <SegmentRow
                label={segments("segments.type")}
                allLabel={t("filters.all")}
                value={spiritType}
                options={spiritTypes}
                labelFor={(key) => segments(`spiritType.${key}`)}
                onChange={setSpiritType}
                tone="light"
              />
            </div>
          ) : null}
        </SectionReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((brand, index) => (
            <SectionReveal key={brand.name} delay={(index % 8) * 0.04}>
              <article className="group relative overflow-hidden border border-charcoal/12 bg-charcoal p-5 transition duration-500 hover:-translate-y-1 hover:border-bronze/40 hover:shadow-[0_24px_60px_-30px_rgba(35,31,32,0.55)]">
                <div className="absolute inset-0 bg-gradient-to-br from-bronze/0 via-transparent to-bronze/10 opacity-0 transition group-hover:opacity-100" />
                <BrandLogoPlate
                  src={brand.image}
                  alt={brand.name}
                  className="relative z-10 border-charcoal/40"
                />
                <p className="relative z-10 mt-4 text-center text-[0.62rem] tracking-[0.18em] text-white/55 uppercase transition group-hover:text-bronze-light">
                  {brand.name}
                </p>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
