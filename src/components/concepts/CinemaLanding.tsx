"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { designTokens } from "@/lib/design-tokens";
import { Contact } from "@/components/Contact";
import { SectionReveal } from "@/components/SectionReveal";
import { StatsBar } from "@/components/StatsBar";
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

const ribbon = [
  { src: "/assets/care-package/care-package-01-napa-heights.png", label: "Wine" },
  { src: "/assets/care-package/care-package-02-old-world-stone.png", label: "Spirits" },
  { src: "/assets/care-package/v2/ad-03-bar-placement.png", label: "Beer" },
  { src: "/assets/care-package/care-package-03-craft-in-light.png", label: "Mixers" },
  { src: "/assets/care-package/v2/ad-02-portfolio-launch.png", label: "NA" },
] as const;

export function CinemaLanding() {
  const t = useTranslations("concepts.cinema");
  const tAbout = useTranslations("about");
  const reduceMotion = useReducedMotion();

  return (
    <div className="bg-[#141112] text-ivory">
      <section className="relative flex min-h-svh flex-col justify-end overflow-hidden px-6 pt-36 pb-14 lg:px-10 lg:pb-20">
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            animate={reduceMotion ? undefined : { scale: [1, 1.06] }}
            transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          >
            <Image
              src="/assets/care-package/v2/ad-04-golden-hour-toast.png"
              alt=""
              fill
              priority
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/35 to-[#141112]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(197,160,115,0.22),transparent_50%)]" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl">
          <motion.p
            className="section-eyebrow mb-6 text-bronze-light"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: designTokens.motion.ease }}
          >
            Wine &amp; Spirits · Puerto Rico
          </motion.p>
          <motion.h1
            className="font-display max-w-[14ch] text-5xl font-normal leading-[0.95] tracking-[0.01em] sm:text-6xl lg:text-8xl"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: designTokens.motion.ease }}
          >
            {t("vision")}
          </motion.h1>
          <motion.div
            className="my-8 h-px w-32 origin-left bg-gradient-to-r from-bronze-light to-transparent"
            initial={reduceMotion ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.25, ease: designTokens.motion.ease }}
          />
          <motion.p
            className="max-w-xl text-lg font-light leading-relaxed text-white/75 lg:text-xl"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: designTokens.motion.ease }}
          >
            {t("lede")}
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap gap-3"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: designTokens.motion.ease }}
          >
            <a
              href="#contact"
              className="border border-bronze bg-bronze px-6 py-3 text-[0.72rem] tracking-[0.18em] text-charcoal uppercase transition hover:border-bronze-light hover:bg-bronze-light"
            >
              {t("ctaTrade")}
            </a>
            <a
              href="#tasting"
              className="border border-white/35 px-6 py-3 text-[0.72rem] tracking-[0.18em] text-white uppercase transition hover:border-bronze-light hover:text-bronze-light"
            >
              {t("ctaRoom")}
            </a>
          </motion.div>
        </div>
      </section>

      <StatsBar />

      <section id="about" className="mx-auto max-w-4xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionReveal>
          <p className="section-eyebrow mb-4 text-bronze">{t("houseLabel")}</p>
          <h2 className="font-display mb-6 text-4xl font-normal leading-tight lg:text-5xl">
            {t("houseTitle")}
          </h2>
          <div className="luxury-divider mb-8" />
          <div className="space-y-6 text-base font-light leading-8 text-white/65">
            <p>{tAbout("paragraph1")}</p>
            <p>{tAbout("paragraph2")}</p>
          </div>
        </SectionReveal>
      </section>

      <section className="relative flex min-h-[70svh] items-end px-6 py-16 lg:px-10">
        <Image
          src="/assets/care-package/care-package-04-shared-moments-pr.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141112] via-[#141112]/40 to-transparent" />
        <div className="relative mx-auto w-full max-w-4xl">
          <SectionReveal>
            <h2 className="font-display max-w-[18ch] text-3xl font-normal italic leading-snug lg:text-5xl">
              {t("missionLine")}
            </h2>
          </SectionReveal>
        </div>
      </section>

      <section className="overflow-hidden py-20">
        <div className="mx-auto mb-10 max-w-4xl px-6 lg:px-10">
          <SectionReveal>
            <p className="section-eyebrow mb-4 text-bronze">{t("portfolioLabel")}</p>
            <h2 className="font-display text-4xl font-normal lg:text-5xl">{t("portfolioTitle")}</h2>
          </SectionReveal>
        </div>
        <div className="flex w-max gap-4 pl-6 [animation:marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
          {[...ribbon, ...ribbon].map((item, i) => (
            <div
              key={`${item.src}-${i}`}
              className="relative aspect-[3/4] w-[min(72vw,280px)] shrink-0 overflow-hidden bg-charcoal"
            >
              <Image src={item.src} alt="" fill className="object-cover opacity-85 transition hover:opacity-100" />
              <span className="absolute bottom-4 left-4 text-[0.68rem] tracking-[0.2em] text-white uppercase">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-bronze/20 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <SectionReveal>
            <p className="section-eyebrow mb-4 text-bronze">{t("valuesLabel")}</p>
            <h2 className="font-display mb-10 text-4xl font-normal lg:text-5xl">{t("valuesTitle")}</h2>
            <ul className="divide-y divide-white/10">
              {valueKeys.map((key) => (
                <li
                  key={key}
                  className="grid gap-1 py-5 sm:grid-cols-[10rem_1fr] sm:items-baseline sm:gap-8"
                >
                  <strong className="font-display text-xl font-medium text-bronze-light">
                    {t(`values.${key}`)}
                  </strong>
                  <span className="font-light text-white/60">{t(`values.${key}Body`)}</span>
                </li>
              ))}
            </ul>
          </SectionReveal>
        </div>
      </section>

      <TastingRoom />

      <section className="bg-gradient-to-b from-[#141112] to-[#0e0c0d] px-6 py-24 text-center lg:px-10">
        <SectionReveal>
          <h2 className="font-display mb-4 text-4xl font-normal lg:text-5xl">{t("finaleTitle")}</h2>
          <p className="mx-auto mb-10 max-w-lg font-light text-white/60">{t("finaleBody")}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#contact"
              className="border border-bronze bg-bronze px-6 py-3 text-[0.72rem] tracking-[0.18em] text-charcoal uppercase transition hover:bg-bronze-light"
            >
              {t("ctaTrade")}
            </a>
            <a
              href="#tasting"
              className="border border-white/35 px-6 py-3 text-[0.72rem] tracking-[0.18em] text-white uppercase transition hover:border-bronze-light hover:text-bronze-light"
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
