import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ProductCatalog } from "@/components/ProductCatalog";
import type { Locale } from "@/i18n/routing";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "catalog" });
  return {
    title: `${t("title")} | Aficionados`,
    description: t("description"),
  };
}

export default async function CatalogPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="bg-charcoal pt-20">
      <ProductCatalog />
    </div>
  );
}
