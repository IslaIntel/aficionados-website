import { setRequestLocale } from "next-intl/server";
import { AtelierLanding } from "@/components/concepts/AtelierLanding";

export default async function AtelierConceptPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AtelierLanding />;
}
