import { setRequestLocale } from "next-intl/server";
import { BridgeLanding } from "@/components/concepts/BridgeLanding";

export default async function BridgeConceptPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <BridgeLanding />;
}
