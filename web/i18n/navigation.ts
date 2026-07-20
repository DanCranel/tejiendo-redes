import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Wrappers de navegación conscientes del idioma (Link, useRouter, etc.).
// Anteponen el locale actual a las rutas automáticamente.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
