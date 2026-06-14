"use client";

import { useTranslations } from "next-intl";
import { SectionReveal } from "./SectionReveal";

const items = ["founded", "labels", "market"] as const;

export function StatsBar() {
  const t = useTranslations("stats");

  return (
    <section className="relative z-10 -mt-16 border-y border-bronze/15 bg-ivory px-6 py-10 lg:px-10">
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
    </section>
  );
}
