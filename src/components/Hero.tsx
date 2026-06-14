"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { designTokens } from "@/lib/design-tokens";

export function Hero() {
  const t = useTranslations("hero");
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen overflow-hidden bg-charcoal text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(166,137,102,0.18),transparent_42%),radial-gradient(circle_at_80%_0%,rgba(197,160,115,0.12),transparent_35%)]" />
      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-bronze/50 to-transparent" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-28 pb-20 lg:px-10">
        <motion.p
          className="section-eyebrow mb-6 text-white/55"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: designTokens.motion.ease }}
        >
          {t("eyebrow")}
        </motion.p>

        <motion.h1
          className="section-title max-w-4xl text-5xl text-bronze-light sm:text-6xl lg:text-7xl"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: designTokens.motion.ease }}
        >
          {t("title")}
        </motion.h1>

        <motion.div
          className="luxury-divider my-8"
          initial={reduceMotion ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: designTokens.motion.ease }}
          style={{ transformOrigin: "left" }}
        />

        <motion.p
          className="max-w-2xl text-lg leading-relaxed text-white/72"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: designTokens.motion.ease }}
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: designTokens.motion.ease }}
        >
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center border border-bronze/60 bg-bronze/15 px-8 py-3 text-[0.72rem] tracking-[0.24em] text-bronze-light uppercase transition hover:bg-bronze/25"
          >
            {t("cta")}
          </a>
          <a
            href="#tasting"
            className="inline-flex items-center justify-center border border-white/15 px-8 py-3 text-[0.72rem] tracking-[0.24em] text-white/75 uppercase transition hover:border-white/30 hover:text-white"
          >
            {t("ctaSecondary")}
          </a>
        </motion.div>
      </div>

      <div className="absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-ivory to-transparent" />
    </section>
  );
}
