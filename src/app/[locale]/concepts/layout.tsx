import { Fraunces, Syne } from "next/font/google";
import { setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";
import { ConceptSwitcher } from "@/components/concepts/ConceptSwitcher";

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

export default async function ConceptsLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className={`${syne.variable} ${fraunces.variable}`}>
      <ConceptSwitcher />
      {children}
    </div>
  );
}
