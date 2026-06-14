"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { designTokens } from "@/lib/design-tokens";
import { MotionOverlay } from "./MotionOverlay";
import { AsSeenIn } from "./AsSeenIn";

export function Hero() {
  const t = useTranslations("hero");
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.35]);

  return (
    <section ref={ref} className="relative h-full overflow-hidden bg-charcoal text-white">
      <motion.div
        className="absolute inset-0"
        style={reduceMotion ? undefined : { y, scale }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/editorial/tasting-room.webp"
          className="h-full w-full object-cover"
        >
          <source src="/assets/video/hero-wine-pour.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/50 to-charcoal/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(197,160,115,0.22),transparent_45%)]" />
      <MotionOverlay variant="hero" />

      <motion.div
        className="absolute inset-y-0 left-8 hidden w-px bg-gradient-to-b from-transparent via-bronze/60 to-transparent lg:block"
        animate={reduceMotion ? undefined : { scaleY: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "center" }}
      />

      <motion.div
        className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pt-32 pb-24 lg:px-10"
        style={reduceMotion ? undefined : { opacity }}
      >
        <motion.p
          className="section-eyebrow mb-6 text-bronze-light"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: designTokens.motion.ease }}
        >
          {t("eyebrow")}
        </motion.p>

        <motion.h1
          className="section-title max-w-5xl text-5xl text-white sm:text-6xl lg:text-8xl"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: designTokens.motion.ease }}
        >
          <span className="text-bronze-light">{t("titleLead")}</span> {t("titleTrail")}
        </motion.h1>

        <motion.div
          className="my-8 h-px w-32 bg-gradient-to-r from-bronze-light via-bronze to-transparent"
          initial={reduceMotion ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.25, ease: designTokens.motion.ease }}
          style={{ transformOrigin: "left" }}
        />

        <motion.p
          className="max-w-xl text-lg leading-relaxed text-white/78 lg:text-xl"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: designTokens.motion.ease }}
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          className="mt-12 flex flex-wrap gap-4"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: designTokens.motion.ease }}
        >
          <a
            href="#catalog"
            className="group relative overflow-hidden border border-bronze/60 bg-bronze/20 px-8 py-3.5 text-[0.72rem] tracking-[0.24em] text-bronze-light uppercase transition hover:bg-bronze/30"
          >
            <span className="relative z-10">{t("cta")}</span>
            <span className="absolute inset-0 -translate-x-full bg-bronze/25 transition group-hover:translate-x-0" />
          </a>
          <a
            href="#tasting"
            className="border border-white/20 px-8 py-3.5 text-[0.72rem] tracking-[0.24em] text-white/80 uppercase backdrop-blur-sm transition hover:border-white/40 hover:text-white"
          >
            {t("ctaSecondary")}
          </a>
        </motion.div>

        <AsSeenIn />

        <motion.div
          className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
          animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[0.58rem] tracking-[0.3em] text-white/40 uppercase">{t("scroll")}</span>
          <span className="h-10 w-px bg-gradient-to-b from-bronze-light to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
