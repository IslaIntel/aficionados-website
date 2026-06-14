"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { SectionReveal } from "./SectionReveal";

export function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="bg-ivory px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <SectionReveal>
          <p className="section-eyebrow mb-4">{t("eyebrow")}</p>
          <h2 className="section-title mb-6 text-4xl text-charcoal lg:text-5xl">{t("title")}</h2>
          <div className="luxury-divider mb-8" />
          <div className="space-y-6 text-base leading-8 text-muted">
            <p>{t("paragraph1")}</p>
            <p>{t("paragraph2")}</p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.12}>
          <div className="relative">
            <div className="absolute -top-6 -left-6 h-full w-full border border-bronze/25" />
            <div className="relative overflow-hidden bg-charcoal p-10">
              <Image
                src="/assets/brand/logo-aficionados-inc.png"
                alt="Aficionados Wine & Spirits"
                width={420}
                height={180}
                className="mx-auto h-auto w-full max-w-sm object-contain"
              />
              <p className="mt-8 text-center text-sm tracking-[0.3em] text-bronze-light uppercase">
                Puerto Rico · Est. 2011
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
