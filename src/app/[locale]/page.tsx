import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { BrandMarquee } from "@/components/BrandMarquee";
import { About } from "@/components/About";
import { ProductCatalog } from "@/components/ProductCatalog";
import { Portfolio } from "@/components/Portfolio";
import { Values } from "@/components/Values";
import { TastingRoom } from "@/components/TastingRoom";
import { Contact } from "@/components/Contact";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <StatsBar />
      <BrandMarquee />
      <About />
      <ProductCatalog />
      <Portfolio />
      <Values />
      <TastingRoom />
      <Contact />
    </>
  );
}
