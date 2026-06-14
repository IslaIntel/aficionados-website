"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { Link } from "@/i18n/navigation";
import type { PortfolioCategory } from "@/lib/design-tokens";
import { getProductBottleImage, getProductStats, products, type Product } from "@/lib/products";
import { AvailabilityBadge } from "@/components/ProductAvailabilityBadge";
import { BottleHeroPlate } from "@/components/BottleHeroPlate";
import { MotionOverlay } from "@/components/MotionOverlay";
import { SectionReveal } from "@/components/SectionReveal";

type ViewMode = "grid" | "table";
type SortKey = "name" | "region" | "sku";

const categories: PortfolioCategory[] = ["all", "wine", "spirits", "liqueurs"];

export function ProductCatalog() {
  const t = useTranslations("catalog");
  const stats = getProductStats();

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<PortfolioCategory>("all");
  const [sort, setSort] = useState<SortKey>("name");
  const [view, setView] = useState<ViewMode>("grid");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = products;

    if (category !== "all") {
      list = list.filter((p) => p.category === category);
    }

    if (q) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q) ||
          p.producer.toLowerCase().includes(q) ||
          p.region.toLowerCase().includes(q) ||
          p.varietal.toLowerCase().includes(q)
      );
    }

    return [...list].sort((a, b) => a[sort].localeCompare(b[sort]));
  }, [query, category, sort]);

  return (
    <section id="catalog" className="relative overflow-hidden bg-charcoal px-6 py-24 text-white lg:px-10 lg:py-32">
      <MotionOverlay variant="section" />

      <div className="relative mx-auto max-w-7xl">
        <SectionReveal>
          <p className="section-eyebrow mb-4 text-bronze-light">{t("eyebrow")}</p>
          <h2 className="section-title mb-6 text-4xl lg:text-5xl">{t("title")}</h2>
          <div className="luxury-divider mb-6 bg-gradient-to-r from-bronze-light to-transparent" />
          <p className="mb-10 max-w-2xl text-base leading-8 text-white/65">{t("description")}</p>
        </SectionReveal>

        <SectionReveal delay={0.06}>
          <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: t("stats.total"), value: stats.total },
              { label: t("stats.wine"), value: stats.wine },
              { label: t("stats.spirits"), value: stats.spirits },
              { label: t("stats.exclusive"), value: stats.exclusive },
            ].map((item) => (
              <div
                key={item.label}
                className="border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-sm"
              >
                <p className="text-[0.65rem] tracking-[0.22em] text-bronze-light uppercase">
                  {item.label}
                </p>
                <p className="font-display mt-2 text-3xl text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("searchPlaceholder")}
              className="w-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-bronze-light lg:max-w-md"
            />

            <div className="flex flex-wrap items-center gap-3">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="border border-white/15 bg-white/5 px-4 py-3 text-[0.68rem] tracking-[0.14em] text-white uppercase outline-none"
              >
                <option value="name">{t("sort.name")}</option>
                <option value="region">{t("sort.region")}</option>
                <option value="sku">{t("sort.sku")}</option>
              </select>

              <div className="flex border border-white/15">
                <button
                  type="button"
                  onClick={() => setView("grid")}
                  className={`px-4 py-3 text-[0.68rem] tracking-[0.18em] uppercase ${view === "grid" ? "bg-bronze/25 text-bronze-light" : "text-white/60"}`}
                >
                  {t("view.grid")}
                </button>
                <button
                  type="button"
                  onClick={() => setView("table")}
                  className={`px-4 py-3 text-[0.68rem] tracking-[0.18em] uppercase ${view === "table" ? "bg-bronze/25 text-bronze-light" : "text-white/60"}`}
                >
                  {t("view.table")}
                </button>
              </div>
            </div>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`border px-4 py-2 text-[0.65rem] tracking-[0.2em] uppercase transition ${
                  category === cat
                    ? "border-bronze-light bg-bronze/20 text-bronze-light"
                    : "border-white/15 text-white/55 hover:border-white/30"
                }`}
              >
                {t(`filters.${cat}`)}
              </button>
            ))}
          </div>
        </SectionReveal>

        <p className="mb-6 text-xs tracking-[0.16em] text-white/40 uppercase">
          {t("results", { count: String(filtered.length) })}
        </p>

        {view === "grid" ? (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((product, index) => (
              <SectionReveal key={product.sku} delay={(index % 6) * 0.05}>
                <ProductCard product={product} />
              </SectionReveal>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto border border-white/10">
            <table className="w-full min-w-[860px] text-left text-sm">
              <thead className="border-b border-white/10 bg-white/[0.04] text-[0.65rem] tracking-[0.18em] text-bronze-light uppercase">
                <tr>
                  <th className="px-4 py-4">{t("table.sku")}</th>
                  <th className="px-4 py-4">{t("table.product")}</th>
                  <th className="px-4 py-4">{t("table.region")}</th>
                  <th className="px-4 py-4">{t("table.varietal")}</th>
                  <th className="px-4 py-4">{t("table.availability")}</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((product) => (
                  <tr
                    key={product.sku}
                    className="border-b border-white/5 transition hover:bg-white/[0.04]"
                  >
                    <td className="px-4 py-4 font-mono text-xs text-bronze-light">{product.sku}</td>
                    <td className="px-4 py-4">
                      <Link
                        href={`/catalog/${product.slug}`}
                        className="group flex items-center gap-4"
                      >
                        <div className="relative flex h-16 w-12 shrink-0 items-end justify-center overflow-hidden border border-white/10 bg-[linear-gradient(180deg,#2a2622_0%,#0f0e0c_100%)] px-1 pb-1">
                          <Image
                            src={getProductBottleImage(product)}
                            alt={`${product.name} bottle`}
                            width={40}
                            height={56}
                            className="max-h-14 w-auto object-contain object-bottom drop-shadow-[0_8px_16px_rgba(0,0,0,0.45)]"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-white transition group-hover:text-bronze-light">
                            {product.name}
                          </p>
                          <p className="text-xs text-white/45">{product.producer}</p>
                        </div>
                      </Link>
                    </td>
                    <td className="px-4 py-4 text-white/70">
                      {product.region}, {product.country}
                    </td>
                    <td className="px-4 py-4 text-white/70">{product.varietal}</td>
                    <td className="px-4 py-4">
                      <AvailabilityBadge
                        availability={product.availability}
                        label={t(`availability.${product.availability}`)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const t = useTranslations("catalog");

  return (
    <Link
      href={`/catalog/${product.slug}`}
      className="group block w-full border border-white/10 bg-white/[0.03] text-left transition duration-500 hover:-translate-y-1 hover:border-bronze/40 hover:bg-white/[0.06]"
    >
      <div className="p-6 pb-0">
        <div className="mb-4 flex items-start justify-between gap-4">
          <span className="font-mono text-[0.65rem] tracking-[0.12em] text-bronze-light">
            {product.sku}
          </span>
          <AvailabilityBadge
            availability={product.availability}
            label={t(`availability.${product.availability}`)}
          />
        </div>

        <BottleHeroPlate product={product} height="md" />
      </div>

      <div className="p-6 pt-5">
        <h3 className="font-display mb-1 text-xl text-white transition group-hover:text-bronze-light">
          {product.name}
        </h3>
        <p className="mb-3 text-xs text-white/45">{product.producer}</p>
        <p className="text-sm text-white/65">
          {product.region}, {product.country}
        </p>
        <p className="mt-2 text-xs tracking-[0.14em] text-bronze-light uppercase">
          {product.varietal}
        </p>
        <p className="mt-4 text-[0.62rem] tracking-[0.18em] text-white/45 uppercase transition group-hover:text-bronze-light">
          {t("page.viewDetails")} →
        </p>
      </div>
    </Link>
  );
}
