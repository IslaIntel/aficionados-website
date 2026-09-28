import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Contact } from "@/components/Contact";
import type { Locale } from "@/i18n/routing";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return {
    title: `${t("title")} | Aficionados`,
    description: t("description"),
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="bg-burgundy pt-20">
      <Contact />
    </div>
  );
}
