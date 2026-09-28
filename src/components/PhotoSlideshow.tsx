"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { portfolioSlides } from "@/lib/scenes";
import { designTokens } from "@/lib/design-tokens";

const HOLD_MS = 5600;

export function PhotoSlideshow() {
  const t = useTranslations("home");
  const tSlides = useTranslations("home.slides");
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduceMotion || paused) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % portfolioSlides.length);
    }, HOLD_MS);
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setIndex((current) => (current + 1) % portfolioSlides.length);
      }
      if (event.key === "ArrowLeft") {
        setIndex((current) => (current - 1 + portfolioSlides.length) % portfolioSlides.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const slide = portfolioSlides[index];
  const go = (next: number) =>
    setIndex((next + portfolioSlides.length) % portfolioSlides.length);

  return (
    <section
      className="relative overflow-hidden bg-[#141112]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label={t("slideshowEyebrow")}
    >
      <div className="relative min-h-[82svh] w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.src}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.05, ease: designTokens.motion.ease }}
          >
            <motion.div
              className="absolute inset-0"
              initial={reduceMotion ? false : { scale: 1, x: 0 }}
              animate={reduceMotion ? undefined : { scale: 1.1, x: index % 2 === 0 ? 12 : -12 }}
              transition={{ duration: HOLD_MS / 1000, ease: "linear" }}
            >
              <Image
                src={slide.src}
                alt={tSlides(`${slide.key}.title`)}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#141112] via-[#141112]/30 to-charcoal/25" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(35,31,32,0.45),transparent_55%)]" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 mx-auto flex min-h-[82svh] max-w-7xl flex-col justify-between px-6 py-14 lg:px-10 lg:py-16">
          <div className="flex items-start justify-between gap-6">
            <p className="section-eyebrow text-bronze-light">{t("slideshowEyebrow")}</p>
            <p className="font-display text-2xl text-white/40">
              {String(index + 1).padStart(2, "0")}
              <span className="text-white/20"> / {String(portfolioSlides.length).padStart(2, "0")}</span>
            </p>
          </div>

          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.key}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.55, ease: designTokens.motion.ease }}
              >
                <h2 className="font-display max-w-[16ch] text-4xl font-normal leading-[0.95] lg:text-6xl">
                  {tSlides(`${slide.key}.title`)}
                </h2>
                <p className="mt-5 max-w-lg text-base font-light leading-8 text-white/70">
                  {tSlides(`${slide.key}.body`)}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={() => go(index - 1)}
                className="border border-white/25 px-3 py-2 text-[0.62rem] tracking-[0.2em] text-white/70 uppercase transition hover:border-bronze-light hover:text-bronze-light"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                className="border border-white/25 px-3 py-2 text-[0.62rem] tracking-[0.2em] text-white/70 uppercase transition hover:border-bronze-light hover:text-bronze-light"
              >
                →
              </button>
              <div className="ml-2 h-px flex-1 overflow-hidden bg-white/15">
                <motion.div
                  key={`${slide.key}-${paused ? "hold" : "play"}`}
                  className="h-full origin-left bg-bronze-light"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: paused || reduceMotion ? 0 : 1 }}
                  transition={{
                    duration: paused || reduceMotion ? 0 : HOLD_MS / 1000,
                    ease: "linear",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-[#141112]">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-3 lg:px-10">
          {portfolioSlides.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setIndex(i)}
              className={`relative h-16 w-24 shrink-0 overflow-hidden border transition ${
                i === index
                  ? "border-bronze-light opacity-100"
                  : "border-white/10 opacity-55 hover:opacity-90"
              }`}
              aria-label={tSlides(`${item.key}.title`)}
              aria-current={i === index}
            >
              <Image src={item.src} alt="" fill className="object-cover" sizes="96px" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
