"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

// Selector ES / EN. Conserva la ruta actual y solo cambia el idioma,
// llevando al usuario de /es a /en (y viceversa).
export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("idioma");

  const locales = [
    { code: "es", label: t("es") },
    { code: "en", label: t("en") },
  ] as const;

  return (
    <div
      className="hidden items-center gap-1 rounded-full border border-cream-dark px-1 py-0.5 text-xs font-bold sm:flex"
      aria-label={t("seleccionar")}
    >
      {locales.map(({ code, label }) => {
        const activo = code === locale;
        return (
          <Link
            key={code}
            href={pathname}
            locale={code}
            aria-current={activo ? "true" : undefined}
            className={`rounded-full px-2 py-0.5 transition ${
              activo
                ? "bg-brand text-white"
                : "text-ink-soft hover:text-brand"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
