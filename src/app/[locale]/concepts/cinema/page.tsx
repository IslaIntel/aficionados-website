import { setRequestLocale } from "next-intl/server";
import { CinemaLanding } from "@/components/concepts/CinemaLanding";

export default async function CinemaConceptPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CinemaLanding />;
}
