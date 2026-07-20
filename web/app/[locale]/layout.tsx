import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "../globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

// Pre-genera las versiones estáticas /es y /en en el build.
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Título y descripción traducidos según el idioma de la ruta.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Idioma no soportado → 404.
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Habilita el renderizado estático para los Server Components.
  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${nunito.variable} h-full antialiased`}>
      <body className="min-h-full">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
