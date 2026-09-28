"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";

const links = [
  { href: "/about", key: "about" },
  { href: "/catalog", key: "catalog" },
  { href: "/tasting", key: "tasting" },
  { href: "/contact", key: "contact" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/catalog") {
    return pathname === "/catalog" || pathname.startsWith("/catalog/");
  }
  return pathname === href;
}

export function SiteHeader() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const switchLocale = locale === "es" ? "en" : "es";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-charcoal/90 backdrop-blur-xl"
          : "bg-gradient-to-b from-charcoal/80 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/assets/brand/logo-aficionados-small.png"
            alt="Aficionados"
            width={36}
            height={36}
            className="opacity-90 transition group-hover:opacity-100"
          />
          <div className="hidden sm:block">
            <p className="font-display text-sm tracking-[0.35em] text-bronze-light uppercase">
              Aficionados
            </p>
            <p className="text-[0.62rem] tracking-[0.42em] text-white/55 uppercase">
              Wine & Spirits
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[0.72rem] tracking-[0.22em] uppercase transition hover:text-bronze-light ${
                isActive(pathname, link.href) ? "text-bronze-light" : "text-white/70"
              }`}
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href={pathname}
            locale={switchLocale}
            className="text-[0.72rem] tracking-[0.22em] text-white/70 uppercase transition hover:text-bronze-light"
          >
            {t("localeSwitch")}
          </Link>
          <button
            type="button"
            aria-label="Menu"
            className="flex h-10 w-10 flex-col items-end justify-center gap-1.5 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`h-px bg-bronze-light transition-all ${open ? "w-6 translate-y-2 rotate-45" : "w-6"}`} />
            <span className={`h-px bg-bronze-light transition-all ${open ? "opacity-0" : "w-4"}`} />
            <span className={`h-px bg-bronze-light transition-all ${open ? "w-6 -translate-y-2 -rotate-45" : "w-5"}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-charcoal px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-[0.18em] uppercase ${
                  isActive(pathname, link.href) ? "text-bronze-light" : "text-white/80"
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
