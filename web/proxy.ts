import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// En Next.js 16 el antiguo `middleware.ts` se llama `proxy.ts`.
// next-intl lo usa para detectar el idioma y redirigir a /es o /en.
export default createMiddleware(routing);

export const config = {
  // Ejecuta en todas las rutas excepto API, assets internos y archivos con extensión.
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
