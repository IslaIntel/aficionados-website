"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { Link } from "@/i18n/navigation";
import type { PortfolioCategory } from "@/lib/design-tokens";
import { getProductDescription, getProductStats, products, type Product } from "@/lib/products";
import { getProductSceneImage } from "@/lib/scenes";
import { AvailabilityBadge } from "@/components/ProductAvailabilityBadge";
import { BottleHeroPlate } from "@/components/BottleHeroPlate";
import { MotionOverlay } from "@/components/MotionOverlay";
import { SectionReveal } from "@/components/SectionReveal";

type ViewMode = "listicle" | "grid" | "table";
type SortKey = "name" | "region";

const categories: PortfolioCategory[] = [
  "all",
  "wine",
  "spirits",
  "beer",
  "glassware",
  "grocery",
  "nonfood",
  "mixers",
];

export function ProductCatalog() {
  const t = useTranslations("catalog");
  const stats = getProductStats();

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<PortfolioCategory>("all");
  const [sort, setSort] = useState<SortKey>("name");
  const [view, setView] = useState<ViewMode>("listicle");

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
          p.producer.toLowerCase().includes(q) ||
          p.region.toLowerCase().includes(q) ||
          p.varietal.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    return [...list].sort((a, b) => a[sort].localeCompare(b[sort]));
  }, [query, category, sort]);

  const featured = view === "listicle" ? filtered[0] : undefined;
  const rest = view === "listicle" ? filtered.slice(1) : filtered;

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
          <div className="mb-10 grid gap-4 sm:grid-cols-3">
            {[
              { label: t("stats.total"), value: stats.total },
              { label: t("stats.wine"), value: stats.wine },
              { label: t("stats.spirits"), value: stats.spirits },
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
              </select>

              <div className="flex border border-white/15">
                {(["listicle", "grid", "table"] as const).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setView(mode)}
                    className={`px-4 py-3 text-[0.68rem] tracking-[0.18em] uppercase ${view === mode ? "bg-bronze/25 text-bronze-light" : "text-white/60"}`}
                  >
                    {t(`view.${mode}`)}
                  </button>
                ))}
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

        {view === "listicle" ? (
          <div>
            {featured ? <FeaturedListicle product={featured} /> : null}
            <ol className="divide-y divide-white/10 border-y border-white/10">
              {rest.map((product, index) => (
                <li key={product.sku}>
                  <ListicleRow product={product} index={index + 1} />
                </li>
              ))}
            </ol>
          </div>
        ) : view === "grid" ? (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((product, index) => (
              <SectionReveal key={product.sku} delay={(index % 6) * 0.05}>
                <ProductCard product={product} />
              </SectionReveal>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto border border-white/10">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="border-b border-white/10 bg-white/[0.04] text-[0.65rem] tracking-[0.18em] text-bronze-light uppercase">
                <tr>
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
                    <td className="px-4 py-4">
                      <Link
                        href={`/catalog/${product.slug}`}
                        className="group flex items-center gap-4"
                      >
                        <div className="relative h-16 w-12 shrink-0 overflow-hidden border border-white/10">
                          <Image
                            src={getProductSceneImage(product)}
                            alt={product.name}
                            fill
                            className="object-cover"
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

function FeaturedListicle({ product }: { product: Product }) {
  const t = useTranslations("catalog");
  const locale = useLocale() as "en" | "es";
  const description = getProductDescription(product, locale);
  const sceneSrc = getProductSceneImage(product);

  return (
    <Link
      href={`/catalog/${product.slug}`}
      className="group relative mb-10 block min-h-[58svh] overflow-hidden border border-white/10"
    >
      <Image
        src={sceneSrc}
        alt={product.name}
        fill
        className="object-cover transition duration-700 group-hover:scale-105"
        sizes="(min-width: 1280px) 1280px, 100vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/70 to-charcoal/15" />
      <div className="relative flex min-h-[58svh] max-w-2xl flex-col justify-end p-8 lg:p-14">
        <p className="mb-4 text-[0.65rem] tracking-[0.22em] text-bronze-light uppercase">
          01 · {t("featured")}
        </p>
        <h3 className="font-display text-4xl leading-tight text-white transition group-hover:text-bronze-light lg:text-6xl">
          {product.name}
        </h3>
        <p className="mt-3 text-sm tracking-[0.14em] text-white/55 uppercase">
          {product.producer} · {product.region}, {product.country}
        </p>
        <p className="mt-2 text-xs tracking-[0.16em] text-bronze-light uppercase">
          {product.varietal}
        </p>
        {description ? (
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/70">{description}</p>
        ) : null}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AvailabilityBadge
            availability={product.availability}
            label={t(`availability.${product.availability}`)}
          />
          <span className="text-[0.62rem] tracking-[0.18em] text-white/55 uppercase transition group-hover:text-bronze-light">
            {t("page.viewDetails")} →
          </span>
        </div>
      </div>
    </Link>
  );
}

function ListicleRow({ product, index }: { product: Product; index: number }) {
  const t = useTranslations("catalog");
  const locale = useLocale() as "en" | "es";
  const description = getProductDescription(product, locale);
  const sceneSrc = getProductSceneImage(product);
  const reverse = index % 2 === 1;

  return (
    <Link
      href={`/catalog/${product.slug}`}
      className={`group grid items-center gap-6 py-10 sm:gap-10 ${
        reverse
          ? "sm:grid-cols-[minmax(0,1fr)_minmax(0,13rem)_4.5rem]"
          : "sm:grid-cols-[4.5rem_minmax(0,13rem)_minmax(0,1fr)]"
      }`}
    >
      <span
        className={`font-display text-3xl text-bronze-light/80 transition group-hover:text-bronze-light ${
          reverse ? "sm:order-3 sm:text-right" : ""
        }`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className={`relative aspect-[4/5] overflow-hidden border border-white/10 ${reverse ? "sm:order-2" : ""}`}>
        <Image
          src={sceneSrc}
          alt={product.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="220px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 to-transparent" />
        <Image
          src={product.image}
          alt=""
          width={90}
          height={32}
          className="absolute bottom-3 left-3 max-h-7 w-auto object-contain"
        />
      </div>
      <div className={reverse ? "sm:order-1 sm:text-right" : ""}>
        <div className={`mb-3 flex flex-wrap items-center gap-3 ${reverse ? "sm:justify-end" : ""}`}>
          <AvailabilityBadge
            availability={product.availability}
            label={t(`availability.${product.availability}`)}
          />
        </div>
        <h3 className="font-display text-3xl text-white transition group-hover:text-bronze-light lg:text-4xl">
          {product.name}
        </h3>
        <p className="mt-2 text-sm tracking-[0.14em] text-white/45 uppercase">
          {product.producer} · {product.region}, {product.country}
        </p>
        <p className="mt-2 text-xs tracking-[0.16em] text-bronze-light uppercase">
          {product.varietal}
        </p>
        {description ? (
          <p
            className={`mt-4 text-sm leading-7 text-white/60 ${reverse ? "sm:ml-auto" : ""} max-w-xl`}
          >
            {description}
          </p>
        ) : null}
        <p className="mt-4 text-[0.62rem] tracking-[0.18em] text-white/45 uppercase transition group-hover:text-bronze-light">
          {t("page.viewDetails")} →
        </p>
      </div>
    </Link>
  );
}

function ProductCard({ product }: { product: Product }) {
  const t = useTranslations("catalog");

  return (
    <Link
      href={`/catalog/${product.slug}`}
      className="group block w-full border border-white/10 bg-white/[0.03] text-left transition duration-500 hover:-translate-y-1 hover:border-bronze/40 hover:bg-white/[0.06]"
    >
      <div className="p-0">
        <div className="flex items-start justify-end gap-4 px-6 pt-5 pb-3">
          <AvailabilityBadge
            availability={product.availability}
            label={t(`availability.${product.availability}`)}
          />
        </div>
        <BottleHeroPlate product={product} height="md" className="border-x-0" />
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
