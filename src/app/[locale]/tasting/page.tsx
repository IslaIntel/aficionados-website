import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { TastingRoom } from "@/components/TastingRoom";
import { TastingDetails } from "@/components/TastingDetails";
import type { Locale } from "@/i18n/routing";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "tasting" });
  return {
    title: `${t("title")} | Aficionados`,
    description: t("body"),
  };
}

export default async function TastingPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="bg-ivory pt-20">
      <TastingRoom />
      <TastingDetails />
    </div>
  );
}
