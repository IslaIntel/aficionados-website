import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ProductDetailView } from "@/components/ProductDetailView";
import {
  getAllProductSlugs,
  getProductBySlug,
  getProductDescription,
} from "@/lib/products";
import type { Locale } from "@/i18n/routing";

type PageProps = {
  params: Promise<{ locale: Locale; slug: string }>;
};

export function generateStaticParams() {
  return getAllProductSlugs().flatMap((slug) =>
    (["en", "es"] as const).map((locale) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  const description = getProductDescription(product, locale);

  return {
    title: `${product.name} | Aficionados`,
    description,
    openGraph: {
      title: product.name,
      description,
      type: "website",
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const product = getProductBySlug(slug);
  if (!product) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "catalog" });
  const description = getProductDescription(product, locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description,
    sku: product.sku,
    brand: {
      "@type": "Brand",
      name: product.producer,
    },
    category: t(`filters.${product.category}`),
    ...(product.producerUrl ? { url: product.producerUrl } : {}),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/PreOrder",
      seller: {
        "@type": "Organization",
        name: "Aficionados Wine & Spirits",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetailView product={product} />
    </>
  );
}
