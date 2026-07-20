import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Conecta next-intl con Next.js. Por defecto usa ./i18n/request.ts.
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);
