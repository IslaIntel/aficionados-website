"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import type { PortfolioCategory } from "@/lib/design-tokens";
import { getProductStats, products, type Product } from "@/lib/products";
import { MotionOverlay } from "./MotionOverlay";
import { SectionReveal } from "./SectionReveal";

type ViewMode = "grid" | "table";
type SortKey = "name" | "region" | "sku";

const categories: PortfolioCategory[] = ["all", "wine", "spirits", "liqueurs"];

export function ProductCatalog() {
  const t = useTranslations("catalog");
  const reduceMotion = useReducedMotion();
  const stats = getProductStats();

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<PortfolioCategory>("all");
  const [sort, setSort] = useState<SortKey>("name");
  const [view, setView] = useState<ViewMode>("grid");
  const [selected, setSelected] = useState<Product | null>(null);

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
                <ProductCard product={product} onSelect={() => setSelected(product)} />
              </SectionReveal>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto border border-white/10">
            <table className="w-full min-w-[760px] text-left text-sm">
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
                    className="cursor-pointer border-b border-white/5 transition hover:bg-white/[0.04]"
                    onClick={() => setSelected(product)}
                  >
                    <td className="px-4 py-4 font-mono text-xs text-bronze-light">{product.sku}</td>
                    <td className="px-4 py-4">
                      <p className="font-medium text-white">{product.name}</p>
                      <p className="text-xs text-white/45">{product.producer}</p>
                    </td>
                    <td className="px-4 py-4 text-white/70">
                      {product.region}, {product.country}
                    </td>
                    <td className="px-4 py-4 text-white/70">{product.varietal}</td>
                    <td className="px-4 py-4">
                      <AvailabilityBadge availability={product.availability} label={t(`availability.${product.availability}`)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selected && (
          <ProductDetailModal product={selected} onClose={() => setSelected(null)} reduceMotion={!!reduceMotion} />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProductCard({
  product,
  onSelect,
}: {
  product: Product;
  onSelect: () => void;
}) {
  const t = useTranslations("catalog");

  return (
    <button
      type="button"
      onClick={onSelect}
      className="group w-full border border-white/10 bg-white/[0.03] p-6 text-left transition duration-500 hover:-translate-y-1 hover:border-bronze/40 hover:bg-white/[0.06]"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <span className="font-mono text-[0.65rem] tracking-[0.12em] text-bronze-light">
          {product.sku}
        </span>
        <AvailabilityBadge availability={product.availability} label={t(`availability.${product.availability}`)} />
      </div>

      <div className="mb-5 flex h-24 items-center justify-center bg-ivory/95 p-4">
        <Image
          src={product.image}
          alt={product.name}
          width={180}
          height={80}
          className="max-h-16 w-auto object-contain transition duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="font-display mb-1 text-xl text-white">{product.name}</h3>
      <p className="mb-3 text-xs text-white/45">{product.producer}</p>
      <p className="text-sm text-white/65">
        {product.region}, {product.country}
      </p>
      <p className="mt-2 text-xs tracking-[0.14em] text-bronze-light uppercase">
        {product.varietal}
      </p>
    </button>
  );
}

function AvailabilityBadge({
  availability,
  label,
}: {
  availability: Product["availability"];
  label: string;
}) {
  const styles = {
    exclusive: "border-bronze-light/50 bg-bronze/20 text-bronze-light",
    limited: "border-white/25 bg-white/10 text-white/80",
    core: "border-white/15 bg-transparent text-white/55",
  };

  return (
    <span className={`inline-block border px-2 py-1 text-[0.58rem] tracking-[0.16em] uppercase ${styles[availability]}`}>
      {label}
    </span>
  );
}

function ProductDetailModal({
  product,
  onClose,
  reduceMotion,
}: {
  product: Product;
  onClose: () => void;
  reduceMotion: boolean;
}) {
  const t = useTranslations("catalog");

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-4 sm:items-center"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-2xl border border-white/15 bg-charcoal p-8 shadow-2xl"
        initial={reduceMotion ? false : { opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 transition hover:text-white"
          aria-label="Close"
        >
          ✕
        </button>

        <p className="mb-2 font-mono text-xs text-bronze-light">{product.sku}</p>
        <h3 className="font-display mb-6 text-3xl text-white">{product.name}</h3>

        <div className="mb-6 flex h-32 items-center justify-center bg-ivory p-6">
          <Image src={product.image} alt={product.name} width={240} height={100} className="max-h-24 object-contain" />
        </div>

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
              <dt className="text-[0.62rem] tracking-[0.18em] text-white/40 uppercase">{label}</dt>
              <dd className="mt-1 text-sm text-white/85">{value}</dd>
            </div>
          ))}
        </dl>

        <a
          href="#contact"
          onClick={onClose}
          className="mt-8 inline-flex border border-bronze/50 bg-bronze/15 px-6 py-3 text-[0.68rem] tracking-[0.22em] text-bronze-light uppercase transition hover:bg-bronze/25"
        >
          {t("detail.inquire")}
        </a>
      </motion.div>
    </motion.div>
  );
}
