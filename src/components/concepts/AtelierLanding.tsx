"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { designTokens } from "@/lib/design-tokens";
import { portfolioBrands } from "@/lib/portfolio";
import { BrandLogoPlate } from "@/components/BrandLogoPlate";
import { Contact } from "@/components/Contact";
import { SectionReveal } from "@/components/SectionReveal";
import { TastingRoom } from "@/components/TastingRoom";

const valueKeys = [
  "greatness",
  "collaboration",
  "accountability",
  "simplicity",
  "passion",
  "devotion",
  "integrity",
] as const;

export function AtelierLanding() {
  const t = useTranslations("concepts.atelier");
  const tCinema = useTranslations("concepts.cinema");
  const tAbout = useTranslations("about");
  const tPortfolio = useTranslations("portfolio");
  const reduceMotion = useReducedMotion();
  const sample = portfolioBrands.slice(0, 12);

  return (
    <div className="bg-ivory text-ink [font-family:var(--font-fraunces),Georgia,serif]">
      <header className="relative mx-auto max-w-5xl px-6 pt-40 pb-20 text-center lg:px-10 lg:pt-44 lg:pb-28">
        <div
          className="pointer-events-none absolute inset-x-0 top-24 mx-auto h-64 max-w-lg bg-[radial-gradient(ellipse_at_center,rgba(166,137,102,0.12),transparent_70%)]"
          aria-hidden
        />
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: designTokens.motion.ease }}
        >
          <Image
            src="/assets/brand/logo-aficionados-inc.png"
            alt="Aficionados"
            width={220}
            height={90}
            className="mx-auto mb-8 h-auto w-48 object-contain opacity-90"
            priority
          />
          <p className="mb-6 font-[family-name:var(--font-outfit)] text-[0.7rem] tracking-[0.28em] text-bronze uppercase">
            {t("eyebrow")}
          </p>
          <h1 className="mx-auto mb-6 max-w-[16ch] text-4xl font-light leading-[1.1] tracking-[0.01em] text-charcoal sm:text-5xl lg:text-6xl">
            {t("title")}
          </h1>
          <p className="mx-auto mb-10 max-w-lg font-[family-name:var(--font-outfit)] text-base font-light leading-8 text-muted">
            {t("lede")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="border border-charcoal/20 bg-charcoal px-6 py-3 font-[family-name:var(--font-outfit)] text-[0.72rem] tracking-[0.16em] text-ivory uppercase transition hover:bg-ink"
            >
              {t("ctaTrade")}
            </a>
            <a
              href="#tasting"
              className="border border-charcoal/25 px-6 py-3 font-[family-name:var(--font-outfit)] text-[0.72rem] tracking-[0.16em] text-charcoal uppercase transition hover:border-bronze hover:text-bronze"
            >
              {t("ctaRoom")}
            </a>
          </div>
        </motion.div>
      </header>

      <div className="mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-bronze/40 to-transparent" />

      <section className="px-6 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionReveal>
            <p className="mb-3 font-[family-name:var(--font-outfit)] text-[0.7rem] tracking-[0.28em] text-bronze uppercase">
              {t("galleryLabel")}
            </p>
            <h2 className="mb-4 text-3xl font-light text-charcoal lg:text-4xl">{t("galleryTitle")}</h2>
            <p className="mb-14 max-w-xl font-[family-name:var(--font-outfit)] text-sm leading-7 text-muted">
              {tPortfolio("description")}
            </p>
          </SectionReveal>

          <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
            {sample.map((brand, index) => (
              <SectionReveal key={brand.name} delay={(index % 4) * 0.05}>
                <article className="group text-center">
                  <div className="mb-4 aspect-square overflow-hidden bg-cream transition group-hover:bg-[#ebe6dc]">
                    <BrandLogoPlate
                      src={brand.image}
                      alt={brand.name}
                      className="h-full border-0 bg-transparent"
                    />
                  </div>
                  <p className="font-[family-name:var(--font-outfit)] text-[0.68rem] tracking-[0.16em] text-charcoal/70 uppercase">
                    {brand.name}
                  </p>
                </article>
              </SectionReveal>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 font-[family-name:var(--font-outfit)] text-[0.72rem] tracking-[0.2em] text-bronze uppercase">
            <span>Wine</span>
            <span>Spirits</span>
            <span>Beer</span>
            <span>Mixers</span>
            <span>Non-Alcoholic</span>
          </div>
        </div>
      </section>

      <section className="border-y border-charcoal/8 bg-cream px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-5xl items-center gap-14 lg:grid-cols-2">
          <SectionReveal>
            <p className="mb-3 font-[family-name:var(--font-outfit)] text-[0.7rem] tracking-[0.28em] text-bronze uppercase">
              {t("storyLabel")}
            </p>
            <h2 className="mb-6 text-3xl font-light leading-snug text-charcoal lg:text-4xl">
              {t("storyTitle")}
            </h2>
            <div className="space-y-5 font-[family-name:var(--font-outfit)] text-sm leading-8 text-muted">
              <p>{tAbout("paragraph1")}</p>
              <p>{tAbout("paragraph2")}</p>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/assets/editorial/tasting-room.webp"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="px-6 py-24 text-center lg:px-10 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <SectionReveal>
            <p className="mb-3 font-[family-name:var(--font-outfit)] text-[0.7rem] tracking-[0.28em] text-bronze uppercase">
              {t("valuesLabel")}
            </p>
            <h2 className="mb-14 text-3xl font-light text-charcoal lg:text-4xl">{t("valuesTitle")}</h2>
            <ul className="space-y-8">
              {valueKeys.map((key) => (
                <li key={key}>
                  <p className="mb-1 text-xl font-normal text-charcoal">
                    {tCinema(`values.${key}`)}
                  </p>
                  <p className="font-[family-name:var(--font-outfit)] text-sm font-light text-muted">
                    {tCinema(`values.${key}Body`)}
                  </p>
                </li>
              ))}
            </ul>
          </SectionReveal>
        </div>
      </section>

      <TastingRoom />

      <section className="border-t border-charcoal/8 px-6 py-20 text-center lg:px-10">
        <SectionReveal>
          <h2 className="mb-4 text-3xl font-light text-charcoal lg:text-4xl">{t("closeTitle")}</h2>
          <p className="mx-auto mb-8 max-w-md font-[family-name:var(--font-outfit)] text-sm text-muted">
            {t("closeBody")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="border border-charcoal/20 bg-charcoal px-6 py-3 font-[family-name:var(--font-outfit)] text-[0.72rem] tracking-[0.16em] text-ivory uppercase"
            >
              {t("ctaTrade")}
            </a>
            <a
              href="#tasting"
              className="border border-charcoal/25 px-6 py-3 font-[family-name:var(--font-outfit)] text-[0.72rem] tracking-[0.16em] text-charcoal uppercase"
            >
              {t("ctaRoom")}
            </a>
          </div>
        </SectionReveal>
      </section>

      <Contact />
    </div>
  );
}
