"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SectionReveal } from "./SectionReveal";

const items = ["founded", "labels", "market"] as const;

export function StatsBar() {
  const t = useTranslations("stats");
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className="relative overflow-hidden rounded-t-[2.5rem] border-t border-bronze/20 bg-ivory px-6 pt-14 pb-12 shadow-[0_-40px_100px_-20px_rgba(0,0,0,0.55)] lg:rounded-t-[3.5rem] lg:px-10 lg:pt-16"
      initial={reduceMotion ? false : { y: 48 }}
      whileInView={reduceMotion ? undefined : { y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="shimmer-line pointer-events-none absolute top-0 left-0 h-px w-full opacity-80" />
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        {items.map((item, index) => (
          <SectionReveal key={item} delay={index * 0.08}>
            <div className="text-center md:text-left">
              <p className="section-eyebrow mb-2">{t(item)}</p>
              <p className="font-display text-4xl text-charcoal">{t(`${item}Value`)}</p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </motion.section>
  );
}
