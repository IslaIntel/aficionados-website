"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { designTokens } from "@/lib/design-tokens";
import { portfolioBrands } from "@/lib/portfolio";
import { BrandLogoPlate } from "@/components/BrandLogoPlate";
import { Contact } from "@/components/Contact";
import { SectionReveal } from "@/components/SectionReveal";

const categories = [
  { key: "wine" as const, label: "Wine" },
  { key: "spirits" as const, label: "Spirits" },
  { key: "beer" as const, label: "Beer" },
  { key: "liqueurs" as const, label: "Mixers" },
] as const;

export function BridgeLanding() {
  const t = useTranslations("concepts.bridge");
  const tStats = useTranslations("stats");
  const reduceMotion = useReducedMotion();

  const featured = categories.map((cat) => {
    const brand = portfolioBrands.find((b) => b.category === cat.key) ?? portfolioBrands[0];
    return { ...cat, brand };
  });

  return (
    <div className="bg-[#0a0a0a] text-[#f7f5f1] [font-family:var(--font-syne),system-ui,sans-serif]">
      <header className="relative flex min-h-svh flex-col justify-between overflow-hidden border-b border-[#c45a1a] px-6 pt-36 pb-8 lg:px-12">
        <div
          className="pointer-events-none absolute top-[-20%] right-[-15%] h-[55vw] w-[55vw] rounded-full bg-[radial-gradient(circle,rgba(196,90,26,0.2),transparent_65%)]"
          aria-hidden
        />
        <div className="relative z-10 flex items-center justify-between gap-4">
          <Image
            src="/assets/brand/logo-aficionados-small.png"
            alt="Aficionados"
            width={36}
            height={36}
            className="brightness-125"
          />
          <p className="text-[0.65rem] tracking-[0.22em] text-[#e86a1a] uppercase">
            {tStats("foundedValue")} · {tStats("marketValue")}
          </p>
        </div>

        <div className="relative z-10 py-10">
          <motion.p
            className="mb-4 text-[0.72rem] tracking-[0.28em] text-[#e86a1a] uppercase"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: designTokens.motion.ease }}
          >
            {t("kicker")}
          </motion.p>
          <motion.h1
            className="max-w-[12ch] text-5xl font-bold leading-[0.92] tracking-[-0.03em] uppercase sm:text-6xl lg:text-8xl"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: designTokens.motion.ease }}
          >
            {t("title")}{" "}
            <span className="block text-[#e86a1a]">{t("titleAccent")}</span>
          </motion.h1>
          <motion.div
            className="my-7 h-[3px] w-32 origin-left bg-[#c45a1a]"
            initial={reduceMotion ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: designTokens.motion.ease }}
          />
          <motion.p
            className="max-w-md font-[family-name:var(--font-outfit)] text-base leading-relaxed text-white/65"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: designTokens.motion.ease }}
          >
            {t("lede")}
          </motion.p>
        </div>

        <div className="relative z-10 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="border border-[#c45a1a] bg-[#c45a1a] px-5 py-3 text-[0.78rem] font-semibold tracking-[0.08em] text-white uppercase transition hover:bg-[#e86a1a]"
          >
            {t("ctaTrade")}
          </a>
          <a
            href="#tasting"
            className="border border-white/40 px-5 py-3 text-[0.78rem] font-semibold tracking-[0.08em] uppercase transition hover:border-[#e86a1a] hover:text-[#e86a1a]"
          >
            {t("ctaRoom")}
          </a>
        </div>
      </header>

      <Chapter
        num={t("storyNum")}
        tag={t("storyTag")}
        title={t("storyTitle")}
        p1={t("storyP1")}
        p2={t("storyP2")}
        image="/assets/care-package/v2/ad-05-curator-javier.png"
      />
      <Chapter
        num={t("bizNum")}
        tag={t("bizTag")}
        title={t("bizTitle")}
        p1={t("bizP1")}
        p2={t("bizP2")}
        image="/assets/care-package/care-package-03-craft-in-light.png"
        flip
        light
      />
      <Chapter
        num={t("stratNum")}
        tag={t("stratTag")}
        title={t("stratTitle")}
        p1={t("stratP1")}
        p2={t("stratP2")}
        image="/assets/care-package/v2/ad-04-golden-hour-toast.png"
      />

      <section className="border-b border-[#c45a1a] bg-[#111] px-6 py-16 lg:px-12">
        <SectionReveal>
          <div className="mx-auto mb-10 flex max-w-6xl flex-wrap items-baseline justify-between gap-4">
            <h2 className="text-3xl font-bold tracking-[-0.02em] uppercase lg:text-4xl">
              {t("folioTitle")}
            </h2>
            <span className="text-[0.7rem] tracking-[0.2em] text-[#e86a1a] uppercase">
              {tStats("labelsValue")}
            </span>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px border border-[#c45a1a] bg-[#c45a1a] sm:grid-cols-4">
            {featured.map((item) => (
              <div
                key={item.key}
                className="flex min-h-[140px] flex-col items-center justify-center gap-3 bg-black p-6 transition hover:bg-[#161616]"
              >
                <BrandLogoPlate src={item.brand.image} alt={item.brand.name} className="border-0 bg-transparent" />
                <strong className="text-[0.72rem] font-semibold tracking-[0.16em] uppercase">
                  {item.label}
                </strong>
              </div>
            ))}
          </div>
        </SectionReveal>
      </section>

      <section id="tasting" className="grid border-b border-[#c45a1a] md:grid-cols-3">
        {[
          { n: "On-premise", title: t("onTitle"), body: t("onBody") },
          { n: "Off-premise", title: t("offTitle"), body: t("offBody") },
          { n: "Direct", title: t("directTitle"), body: t("directBody") },
        ].map((ch, i) => (
          <div
            key={ch.n}
            className={`border-b border-[#c45a1a]/40 px-6 py-10 md:border-r md:border-b-0 md:last:border-r-0 ${
              i % 2 === 1 ? "bg-[#0f0f0f]" : ""
            }`}
          >
            <p className="mb-3 text-[0.8rem] font-bold tracking-[0.16em] text-[#c45a1a]">{ch.n}</p>
            <h3 className="mb-3 text-xl font-bold tracking-[-0.01em] uppercase">{ch.title}</h3>
            <p className="font-[family-name:var(--font-outfit)] text-sm leading-relaxed text-white/60">
              {ch.body}
            </p>
          </div>
        ))}
      </section>

      <section className="border-b border-[#c45a1a] bg-[#f7f5f1] px-6 py-16 text-[#0a0a0a] lg:px-12">
        <SectionReveal>
          <h2 className="mx-auto mb-8 max-w-6xl text-2xl font-bold uppercase lg:text-3xl">
            {t("valuesTitle")}
          </h2>
          <div className="mx-auto flex max-w-6xl flex-wrap gap-2">
            {["Greatness", "Collaboration", "Accountability", "Simplicity", "Passion", "Devotion", "Integrity"].map(
              (v) => (
                <span
                  key={v}
                  className="border border-black/20 px-3 py-2 text-[0.72rem] font-semibold tracking-[0.1em] uppercase transition hover:border-[#c45a1a] hover:text-[#c45a1a]"
                >
                  {v}
                </span>
              )
            )}
          </div>
        </SectionReveal>
      </section>

      <section className="grid items-center gap-10 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-12">
        <div>
          <h2 className="text-4xl font-bold leading-[0.95] tracking-[-0.03em] uppercase lg:text-6xl">
            {t("closeTitle")} <span className="text-[#e86a1a]">{t("closeAccent")}</span>
          </h2>
          <p className="mt-5 max-w-md font-[family-name:var(--font-outfit)] text-white/60">
            {t("closeBody")}
          </p>
        </div>
        <div className="border border-[#c45a1a] bg-[#111] p-8">
          <h3 className="mb-5 text-sm font-bold tracking-[0.08em] uppercase">{t("nextStep")}</h3>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="border border-[#c45a1a] bg-[#c45a1a] px-5 py-3 text-[0.78rem] font-semibold tracking-[0.08em] text-white uppercase"
            >
              {t("ctaTrade")}
            </a>
            <a
              href="#tasting"
              className="border border-white/40 px-5 py-3 text-[0.78rem] font-semibold tracking-[0.08em] uppercase"
            >
              {t("ctaRoom")}
            </a>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}

function Chapter({
  num,
  tag,
  title,
  p1,
  p2,
  image,
  flip,
  light,
}: {
  num: string;
  tag: string;
  title: string;
  p1: string;
  p2: string;
  image: string;
  flip?: boolean;
  light?: boolean;
}) {
  return (
    <section
      className={`grid min-h-[72svh] border-b border-[#c45a1a] lg:grid-cols-2 ${
        flip ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div
        className={`flex flex-col justify-center px-6 py-14 lg:px-12 ${
          light ? "bg-[#f7f5f1] text-[#0a0a0a]" : "bg-black"
        }`}
      >
        <SectionReveal>
          <p className={`mb-3 text-[0.85rem] font-bold tracking-[0.2em] ${light ? "text-[#c45a1a]" : "text-[#e86a1a]"}`}>
            {num}
          </p>
          <p className={`mb-2 text-[0.68rem] tracking-[0.24em] uppercase ${light ? "text-[#c45a1a]" : "text-bronze"}`}>
            {tag}
          </p>
          <h2 className="mb-5 max-w-[14ch] text-3xl font-bold leading-none tracking-[-0.02em] uppercase lg:text-4xl">
            {title}
          </h2>
          <div
            className={`space-y-4 font-[family-name:var(--font-outfit)] text-sm leading-relaxed ${
              light ? "text-black/60" : "text-white/65"
            }`}
          >
            <p>{p1}</p>
            <p>{p2}</p>
          </div>
        </SectionReveal>
      </div>
      <div className="relative min-h-[48vw] overflow-hidden bg-[#111] lg:min-h-full">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition duration-700 hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#c45a1a]/20 to-transparent" />
      </div>
    </section>
  );
}
