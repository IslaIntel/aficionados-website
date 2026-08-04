"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

const links = [
  { href: "/concepts/cinema", key: "a" as const, match: "/concepts/cinema" },
  { href: "/concepts/bridge", key: "b" as const, match: "/concepts/bridge" },
  { href: "/concepts/atelier", key: "c" as const, match: "/concepts/atelier" },
] as const;

export function ConceptSwitcher() {
  const t = useTranslations("concepts.switcher");
  const pathname = usePathname();
  const isHub = pathname === "/concepts" || pathname.endsWith("/concepts");

  return (
    <nav
      className="fixed top-[4.75rem] left-1/2 z-[60] flex -translate-x-1/2 items-center gap-0.5 rounded-full border border-bronze/35 bg-charcoal/90 p-1 font-body text-[0.68rem] tracking-[0.1em] text-white/55 uppercase shadow-[0_8px_32px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:text-[0.72rem]"
      aria-label={t("label")}
    >
      <span className="hidden px-2 text-[0.62rem] tracking-[0.16em] text-white/40 sm:inline">
        {t("label")}
      </span>
      {links.map((link) => {
        const active = pathname.includes(link.match);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-full px-3 py-2 transition sm:px-4 ${
              active
                ? "bg-bronze-light font-semibold text-charcoal"
                : "hover:text-white"
            }`}
          >
            {t(link.key)}
          </Link>
        );
      })}
      <Link
        href="/concepts"
        className={`ml-0.5 border-l border-bronze/30 pl-3 rounded-full px-3 py-2 transition sm:px-4 ${
          isHub ? "bg-bronze-light font-semibold text-charcoal" : "hover:text-white"
        }`}
      >
        {t("hub")}
      </Link>
    </nav>
  );
}
