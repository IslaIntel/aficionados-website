"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export function SiteFooter() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-white/10 bg-charcoal px-6 py-12 text-white lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          <Image
            src="/assets/brand/logo-aficionados-small.png"
            alt="Aficionados"
            width={40}
            height={40}
          />
          <div>
            <p className="font-display text-lg tracking-[0.2em] text-bronze-light uppercase">
              Aficionados
            </p>
            <p className="text-sm text-white/55">{t("tagline")}</p>
          </div>
        </div>
        <p className="text-sm text-white/45">{t("rights")}</p>
      </div>
    </footer>
  );
}
