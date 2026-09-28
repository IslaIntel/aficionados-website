"use client";

import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/SectionReveal";

const valueKeys = [
  "greatness",
  "collaboration",
  "accountability",
  "simplicity",
  "passion",
  "devotion",
  "integrity",
] as const;

export function HomeValues() {
  const t = useTranslations("home");

  return (
    <section id="values" className="border-t border-bronze/20 bg-[#141112] px-6 py-24 text-ivory lg:px-10 lg:py-32">
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
  );
}
