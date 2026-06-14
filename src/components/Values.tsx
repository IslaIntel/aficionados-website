"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { SectionReveal } from "./SectionReveal";

const cards = [
  { key: "mission", image: "/assets/editorial/mission.webp" },
  { key: "vision", image: "/assets/editorial/vision.webp" },
  { key: "principles", image: "/assets/editorial/values.webp" },
] as const;

export function Values() {
  const t = useTranslations("values");

  return (
    <section id="values" className="bg-charcoal px-6 py-24 text-white lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <p className="section-eyebrow mb-4 text-bronze-light">{t("eyebrow")}</p>
          <h2 className="section-title mb-6 text-4xl text-white lg:text-5xl">{t("title")}</h2>
          <div className="luxury-divider mb-14 bg-gradient-to-r from-bronze-light to-transparent" />
        </SectionReveal>

        <div className="grid gap-8 lg:grid-cols-3">
          {cards.map((card, index) => (
            <SectionReveal key={card.key} delay={index * 0.1}>
              <article className="group flex h-full flex-col overflow-hidden border border-white/10 bg-white/[0.03]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={t(`${card.key}.title`)}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="font-display mb-4 text-2xl text-bronze-light">
                    {t(`${card.key}.title`)}
                  </h3>
                  <p className="text-sm leading-7 text-white/72">{t(`${card.key}.body`)}</p>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
