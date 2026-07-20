import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Idiomas soportados. El español es el idioma por defecto del sitio.
  locales: ["es", "en"],
  defaultLocale: "es",
});
