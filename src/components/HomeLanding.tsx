"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { designTokens } from "@/lib/design-tokens";
import { Contact } from "@/components/Contact";
import { HomeValues } from "@/components/HomeValues";
import { Link } from "@/i18n/navigation";
import { MotionOverlay } from "@/components/MotionOverlay";
import { PhotoSlideshow } from "@/components/PhotoSlideshow";
import { Portfolio } from "@/components/Portfolio";
import { ProductCatalog } from "@/components/ProductCatalog";
import { SectionReveal } from "@/components/SectionReveal";
import { StatsBar } from "@/components/StatsBar";
import { TastingRoom } from "@/components/TastingRoom";

export function HomeLanding() {
  const t = useTranslations("home");
  const tAbout = useTranslations("about");
  const reduceMotion = useReducedMotion();

  return (
    <div className="bg-[#141112] text-ivory">
      <section className="relative flex min-h-svh flex-col justify-end overflow-hidden px-6 pt-36 pb-14 lg:px-10 lg:pb-20">
        <div className="absolute inset-0">
          {reduceMotion ? (
            <Image
              src="/assets/care-package/v2/ad-04-golden-hour-toast.png"
              alt=""
              fill
              priority
              className="object-cover"
            />
          ) : (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/assets/care-package/v2/ad-04-golden-hour-toast.png"
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/assets/video/hero-wine-pour.mp4" type="video/mp4" />
            </video>
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/35 to-[#141112]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(197,160,115,0.22),transparent_50%)]" />
          <MotionOverlay variant="hero" />
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
            <Link
              href="/catalog"
              className="border border-bronze bg-bronze px-6 py-3 text-[0.72rem] tracking-[0.18em] text-charcoal uppercase transition hover:border-bronze-light hover:bg-bronze-light"
            >
              {t("ctaCatalog")}
            </Link>
            <Link
              href="/contact"
              className="border border-white/35 px-6 py-3 text-[0.72rem] tracking-[0.18em] text-white uppercase transition hover:border-bronze-light hover:text-bronze-light"
            >
              {t("ctaTrade")}
            </Link>
            <Link
              href="/tasting"
              className="border border-white/35 px-6 py-3 text-[0.72rem] tracking-[0.18em] text-white uppercase transition hover:border-bronze-light hover:text-bronze-light"
            >
              {t("ctaRoom")}
            </Link>
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
          <Link
            href="/about"
            className="mt-10 inline-block text-[0.72rem] tracking-[0.18em] text-bronze-light uppercase transition hover:text-white"
          >
            {t("readStory")} →
          </Link>
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

      <ProductCatalog />

      <PhotoSlideshow />

      <Portfolio />

      <HomeValues />

      <TastingRoom />

      <section className="bg-gradient-to-b from-[#141112] to-[#0e0c0d] px-6 py-24 text-center lg:px-10">
        <SectionReveal>
          <h2 className="font-display mb-4 text-4xl font-normal lg:text-5xl">{t("finaleTitle")}</h2>
          <p className="mx-auto mb-10 max-w-lg font-light text-white/60">{t("finaleBody")}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="border border-bronze bg-bronze px-6 py-3 text-[0.72rem] tracking-[0.18em] text-charcoal uppercase transition hover:bg-bronze-light"
            >
              {t("ctaTrade")}
            </Link>
            <Link
              href="/tasting"
              className="border border-white/35 px-6 py-3 text-[0.72rem] tracking-[0.18em] text-white uppercase transition hover:border-bronze-light hover:text-bronze-light"
            >
              {t("ctaRoom")}
            </Link>
          </div>
        </SectionReveal>
      </section>

      <Contact />
    </div>
  );
}
