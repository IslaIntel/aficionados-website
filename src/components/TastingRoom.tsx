"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { MotionOverlay } from "./MotionOverlay";
import { SectionReveal } from "./SectionReveal";

export function TastingRoom() {
  const t = useTranslations("tasting");

  return (
    <section id="tasting" className="relative overflow-hidden bg-ivory px-6 py-24 lg:px-10 lg:py-32">
      <MotionOverlay variant="section" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <SectionReveal>
          <div className="group relative overflow-hidden">
            <Image
              src="/assets/editorial/tasting-room.webp"
              alt={t("title")}
              width={1200}
              height={800}
              className="h-[28rem] w-full object-cover transition duration-700 group-hover:scale-105 lg:h-[36rem]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/45 via-transparent to-bronze/10" />
            <div className="shimmer-line absolute top-0 left-0 h-px w-full opacity-70" />
          </div>
        </SectionReveal>

        <SectionReveal delay={0.12}>
          <p className="section-eyebrow mb-4">{t("eyebrow")}</p>
          <h2 className="section-title mb-6 text-4xl text-charcoal lg:text-5xl">{t("title")}</h2>
          <div className="luxury-divider mb-8" />
          <p className="mb-10 text-base leading-8 text-muted">{t("body")}</p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center border border-charcoal bg-charcoal px-8 py-3 text-[0.72rem] tracking-[0.24em] text-bronze-light uppercase transition hover:bg-ink"
          >
            {t("cta")}
          </a>
        </SectionReveal>
      </div>
    </section>
  );
}
