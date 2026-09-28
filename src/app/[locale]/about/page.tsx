import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { About } from "@/components/About";
import { AboutChannels } from "@/components/AboutChannels";
import { Values } from "@/components/Values";
import { HomeValues } from "@/components/HomeValues";
import type { Locale } from "@/i18n/routing";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return {
    title: `${t("title")} | Aficionados`,
    description: t("paragraph1"),
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="bg-ivory pt-20">
      <About />
      <AboutChannels />
      <Values />
      <HomeValues />
    </div>
  );
}
