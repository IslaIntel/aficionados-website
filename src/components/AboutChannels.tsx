"use client";

import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/SectionReveal";

export function AboutChannels() {
  const t = useTranslations("about");

  return (
    <section className="bg-ivory px-6 pb-24 lg:px-10 lg:pb-32">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <p className="section-eyebrow mb-4">{t("channelsEyebrow")}</p>
          <h2 className="section-title mb-10 text-4xl text-charcoal lg:text-5xl">{t("channelsTitle")}</h2>
        </SectionReveal>
        <div className="grid gap-6 lg:grid-cols-2">
          <SectionReveal>
            <article className="h-full border border-charcoal/10 bg-cream px-8 py-10">
              <h3 className="font-display mb-4 text-2xl text-charcoal">{t("wholesaleTitle")}</h3>
              <p className="text-base leading-8 text-muted">{t("wholesaleBody")}</p>
            </article>
          </SectionReveal>
          <SectionReveal delay={0.08}>
            <article className="h-full border border-charcoal/10 bg-cream px-8 py-10">
              <h3 className="font-display mb-4 text-2xl text-charcoal">{t("destinationTitle")}</h3>
              <p className="text-base leading-8 text-muted">{t("destinationBody")}</p>
            </article>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
