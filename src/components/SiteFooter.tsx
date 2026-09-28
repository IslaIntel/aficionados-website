"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const links = [
  { href: "/about", key: "about" },
  { href: "/catalog", key: "catalog" },
  { href: "/tasting", key: "tasting" },
  { href: "/contact", key: "contact" },
] as const;

export function SiteFooter() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  return (
    <footer className="border-t border-white/10 bg-charcoal px-6 py-12 text-white lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
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
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.68rem] tracking-[0.18em] text-white/55 uppercase transition hover:text-bronze-light"
            >
              {tNav(link.key)}
            </Link>
          ))}
        </nav>
        <p className="text-sm text-white/45">{t("rights")}</p>
      </div>
    </footer>
  );
}
