import { setRequestLocale } from "next-intl/server";
import { HomeLanding } from "@/components/HomeLanding";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeLanding />;
}
