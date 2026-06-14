"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { AvailabilityBadge } from "@/components/ProductAvailabilityBadge";
import { BottleHeroPlate } from "@/components/BottleHeroPlate";
import { BrandLogoPlate } from "@/components/BrandLogoPlate";
import { MotionOverlay } from "@/components/MotionOverlay";
import { SectionReveal } from "@/components/SectionReveal";
import { getProductDescription, type Product } from "@/lib/products";

export function ProductDetailView({ product }: { product: Product }) {
  const t = useTranslations("catalog");
  const locale = useLocale() as "en" | "es";
  const description = getProductDescription(product, locale);

  return (
    <section className="relative overflow-hidden bg-charcoal px-6 pb-24 pt-32 text-white lg:px-10 lg:pb-32 lg:pt-36">
      <MotionOverlay variant="section" />

      <div className="relative mx-auto max-w-6xl">
        <SectionReveal>
          <Link
            href="/#catalog"
            className="mb-8 inline-flex items-center gap-2 text-[0.68rem] tracking-[0.2em] text-bronze-light uppercase transition hover:text-white"
          >
            <span aria-hidden="true">←</span>
            {t("page.backToCatalog")}
          </Link>
        </SectionReveal>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14">
          <SectionReveal delay={0.05}>
            <BottleHeroPlate product={product} height="xl" />
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs tracking-[0.12em] text-bronze-light">
                  {product.sku}
                </span>
                <AvailabilityBadge
                  availability={product.availability}
                  label={t(`availability.${product.availability}`)}
                />
              </div>

              <h1 className="font-display mb-3 text-4xl text-white lg:text-5xl">
                {product.name}
              </h1>
              <p className="mb-6 text-sm tracking-[0.16em] text-white/45 uppercase">
                {product.producer}
              </p>

              <p className="mb-8 max-w-xl text-base leading-8 text-white/70">
                {description}
              </p>

              <dl className="grid gap-4 sm:grid-cols-2">
                {[
                  [t("detail.producer"), product.producer],
                  [t("detail.region"), `${product.region}, ${product.country}`],
                  [t("detail.varietal"), product.varietal],
                  [t("detail.category"), t(`filters.${product.category}`)],
                  [t("detail.availability"), t(`availability.${product.availability}`)],
                  ...(product.vintage ? [[t("detail.vintage"), product.vintage] as const] : []),
                  ...(product.organic ? [[t("detail.organic"), t("detail.yes")] as const] : []),
                ].map(([label, value]) => (
                  <div key={label} className="border border-white/10 bg-white/[0.03] px-4 py-3">
                    <dt className="text-[0.62rem] tracking-[0.18em] text-white/40 uppercase">
                      {label}
                    </dt>
                    <dd className="mt-1 text-sm text-white/85">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex border border-bronze/50 bg-bronze/15 px-6 py-3 text-[0.68rem] tracking-[0.22em] text-bronze-light uppercase transition hover:bg-bronze/25"
                >
                  {t("detail.inquire")}
                </a>
                {product.producerUrl && (
                  <a
                    href={product.producerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex border border-white/15 px-6 py-3 text-[0.68rem] tracking-[0.22em] text-white/70 uppercase transition hover:border-white/30 hover:text-white"
                  >
                    {t("page.visitProducer")}
                  </a>
                )}
              </div>
            </div>
          </SectionReveal>
        </div>

        <SectionReveal delay={0.15}>
          <div className="mt-14 border border-white/10 bg-white/[0.03] p-6 lg:p-8">
            <p className="mb-4 text-[0.65rem] tracking-[0.22em] text-bronze-light uppercase">
              {t("page.brandIdentity")}
            </p>
            <BrandLogoPlate src={product.image} alt={product.producer} height="lg" />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
