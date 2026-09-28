"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SectionReveal } from "@/components/SectionReveal";

export function TastingDetails() {
  const t = useTranslations("tasting");

  const cards = [
    { label: t("locationLabel"), body: t("addressDetail") },
    { label: t("hoursLabel"), body: t("hoursDetail") },
    { label: t("eventsLabel"), body: t("eventsBody") },
    { label: t("tradeLabel"), body: t("tradeBody") },
  ];

  return (
    <section className="bg-[#141112] px-6 py-24 text-ivory lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <p className="section-eyebrow mb-4 text-bronze">{t("detailsEyebrow")}</p>
          <h2 className="font-display mb-12 text-4xl font-normal lg:text-5xl">{t("detailsTitle")}</h2>
        </SectionReveal>
        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <SectionReveal key={card.label}>
              <article className="h-full border border-white/10 bg-white/[0.03] px-6 py-8">
                <p className="mb-3 text-[0.68rem] tracking-[0.2em] text-bronze-light uppercase">
                  {card.label}
                </p>
                <p className="text-base font-light leading-8 text-white/70">{card.body}</p>
              </article>
            </SectionReveal>
          ))}
        </div>
        <SectionReveal delay={0.08}>
          <Link
            href="/contact"
            className="mt-12 inline-flex border border-bronze bg-bronze px-8 py-3 text-[0.72rem] tracking-[0.24em] text-charcoal uppercase transition hover:bg-bronze-light"
          >
            {t("cta")}
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
}
