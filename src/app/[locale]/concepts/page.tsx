import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const cards = [
  {
    href: "/concepts/cinema" as const,
    letter: "A",
    tagKey: "cinemaTag" as const,
    titleKey: "cinemaTitle" as const,
    bodyKey: "cinemaBody" as const,
    image: "/assets/care-package/v2/ad-04-golden-hour-toast.png",
    dark: true,
  },
  {
    href: "/concepts/bridge" as const,
    letter: "B",
    tagKey: "bridgeTag" as const,
    titleKey: "bridgeTitle" as const,
    bodyKey: "bridgeBody" as const,
    image: "/assets/care-package/care-package-03-craft-in-light.png",
    dark: true,
  },
  {
    href: "/concepts/atelier" as const,
    letter: "C",
    tagKey: "atelierTag" as const,
    titleKey: "atelierTitle" as const,
    bodyKey: "atelierBody" as const,
    image: "/assets/editorial/tasting-room.webp",
    dark: false,
  },
];

export default async function ConceptsHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("concepts.hub");

  return (
    <div className="min-h-svh bg-ivory px-6 pt-40 pb-20 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <header className="mb-14 text-center">
          <Image
            src="/assets/brand/logo-aficionados-small.png"
            alt="Aficionados"
            width={48}
            height={48}
            className="mx-auto mb-6 opacity-90"
          />
          <p className="section-eyebrow mb-4">{t("eyebrow")}</p>
          <h1 className="section-title mb-5 text-4xl text-charcoal lg:text-5xl">{t("title")}</h1>
          <p className="mx-auto mb-8 max-w-xl text-base leading-8 text-muted">{t("lede")}</p>
          <p className="mx-auto max-w-lg border-y border-bronze/30 py-4 text-sm leading-7 text-muted">
            {t("how")}
          </p>
          <Link
            href="/"
            className="mt-8 inline-block text-[0.72rem] tracking-[0.18em] text-bronze uppercase transition hover:text-charcoal"
          >
            ← {t("live")}
          </Link>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group flex flex-col overflow-hidden border border-charcoal/8 bg-cream transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(35,31,32,0.1)]"
            >
              <div className={`relative aspect-[4/3] overflow-hidden ${card.dark ? "bg-charcoal" : "bg-[#e8e4dc]"}`}>
                <Image
                  src={card.image}
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 to-transparent" />
                <span className="font-display absolute bottom-3 left-4 text-3xl text-bronze-light">
                  {card.letter}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="mb-2 text-[0.68rem] tracking-[0.22em] text-bronze uppercase">
                  {t(card.tagKey)}
                </p>
                <h2 className="font-display mb-3 text-2xl text-charcoal">{t(card.titleKey)}</h2>
                <p className="mb-6 flex-1 text-sm leading-7 text-muted">{t(card.bodyKey)}</p>
                <span className="text-[0.72rem] tracking-[0.16em] text-charcoal uppercase">
                  {t("open")} {card.letter} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
