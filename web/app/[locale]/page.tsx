import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import InstagramEmbeds from "@/app/components/InstagramEmbeds";
import TestimoniosCarrusel from "@/app/components/TestimoniosCarrusel";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";

const WHATSAPP_PHONE = "593984712983";

function waLink(mensaje: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(mensaje)}`;
}

const INSTAGRAM_URL = "https://www.instagram.com/tejiendo_redes23/";

type Servicio = {
  grupo: string;
  titulo: string;
  desc: string;
  mensaje: string;
};

type Ventaja = { t: string; d: string };

function WhatsappIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M17.47 14.38c-.3-.15-1.74-.86-2-.95-.27-.1-.47-.15-.66.15-.2.3-.76.95-.93 1.14-.17.2-.34.22-.63.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.34.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.9-2.18-.24-.57-.48-.5-.66-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.74-.71 1.98-1.4.25-.68.25-1.27.17-1.39-.07-.12-.27-.2-.57-.34zM12.04 21.5h-.01a9.4 9.4 0 01-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 01-1.44-5A9.45 9.45 0 0112.05 2.6a9.4 9.4 0 016.68 2.77 9.4 9.4 0 012.76 6.68c0 5.2-4.24 9.44-9.45 9.44zm8.04-17.49A11.36 11.36 0 0012.04.67C5.8.67.72 5.75.72 11.99c0 2 .52 3.95 1.52 5.67L.63 23.33l5.8-1.52a11.32 11.32 0 005.6 1.43h.01c6.24 0 11.32-5.08 11.32-11.32 0-3.02-1.18-5.87-3.32-8.01z" />
    </svg>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 01-1.38-.9 3.72 3.72 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.15 0-3.5.01-4.74.07-1.14.05-1.76.24-2.17.4-.55.22-.94.47-1.35.88-.41.41-.66.8-.88 1.35-.16.41-.35 1.03-.4 2.17-.06 1.24-.07 1.6-.07 4.74s.01 3.5.07 4.74c.05 1.14.24 1.76.4 2.17.22.55.47.94.88 1.35.41.41.8.66 1.35.88.41.16 1.03.35 2.17.4 1.24.06 1.6.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.76-.24 2.17-.4.55-.22.94-.47 1.35-.88.41-.41.66-.8.88-1.35.16-.41.35-1.03.4-2.17.06-1.24.07-1.6.07-4.74s-.01-3.5-.07-4.74c-.05-1.14-.24-1.76-.4-2.17a3.64 3.64 0 00-.88-1.35 3.64 3.64 0 00-1.35-.88c-.41-.16-1.03-.35-2.17-.4-1.24-.06-1.6-.07-4.74-.07zm0 2.76a5.3 5.3 0 110 10.6 5.3 5.3 0 010-10.6zm0 8.74a3.44 3.44 0 100-6.88 3.44 3.44 0 000 6.88zm6.75-8.94a1.24 1.24 0 11-2.48 0 1.24 1.24 0 012.48 0z" />
    </svg>
  );
}

function WhatsAppButton({
  children,
  href,
  variant = "green",
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "green" | "white" | "coral";
  className?: string;
}) {
  const styles: Record<string, string> = {
    green: "bg-brand text-white hover:bg-brand-dark",
    white: "bg-white text-brand-dark hover:bg-cream",
    coral: "bg-coral text-white hover:bg-coral-dark",
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-bold shadow-sm transition ${styles[variant]} ${className}`}
    >
      <WhatsappIcon className="h-5 w-5" />
      {children}
    </a>
  );
}

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const whatsappUrl = waLink(t("whatsapp.general"));
  const servicios = t.raw("servicios.items") as Servicio[];
  const ventajas = t.raw("nosotros.items") as Ventaja[];

  return (
    <div className="flex min-h-full flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-cream-dark bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#inicio" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-lg font-extrabold text-white">
              T
            </span>
            <span className="text-lg font-extrabold text-brand">
              Tejiendo Redes
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-bold text-ink-soft md:flex">
            <a href="#servicios" className="hover:text-brand">
              {t("nav.servicios")}
            </a>
            <a href="#nosotros" className="hover:text-brand">
              {t("nav.nosotros")}
            </a>
            <a href="#testimonios" className="hover:text-brand">
              {t("nav.testimonios")}
            </a>
            <a href="#faq" className="hover:text-brand">
              {t("nav.faq")}
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <WhatsAppButton href={whatsappUrl} className="text-sm">
              {t("nav.whatsapp")}
            </WhatsAppButton>
          </div>
        </div>
      </header>

      <main id="inicio">
        {/* Hero */}
        <section className="bg-brand">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-16 md:flex-row md:py-20">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-extrabold leading-tight text-white md:text-5xl">
                {t("hero.titulo")}
              </h1>
              <p className="mx-auto mt-4 max-w-md text-lg text-cream md:mx-0">
                {t("hero.descripcion")}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
                <WhatsAppButton href={whatsappUrl} variant="white">
                  {t("hero.escribenos")}
                </WhatsAppButton>
                <a
                  href="#servicios"
                  className="inline-flex items-center rounded-full border border-white/70 px-5 py-2.5 font-bold text-white transition hover:bg-white/10"
                >
                  {t("hero.verServicios")}
                </a>
              </div>
            </div>
            <div className="flex-1">
              <Image
                src="/teji-abrazo.png"
                alt={t("hero.imgAlt")}
                width={520}
                height={440}
                priority
                className="mx-auto w-full max-w-sm drop-shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="bg-cream">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-center text-3xl font-extrabold text-brand-deep">
              {t("servicios.titulo")}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-ink-soft">
              {t("servicios.subtitulo")}
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {servicios.map((s) => (
                <div
                  key={s.titulo}
                  className="flex flex-col rounded-2xl border border-cream-dark bg-white p-6 shadow-sm"
                >
                  <span className="mb-3 inline-flex w-fit rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand-dark">
                    {s.grupo}
                  </span>
                  <h3 className="text-lg font-extrabold text-brand-deep">
                    {s.titulo}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-ink-soft">{s.desc}</p>
                  <a
                    href={waLink(s.mensaje)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-coral-dark hover:underline"
                  >
                    <WhatsappIcon className="h-4 w-4" />
                    {t("servicios.cta")}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Por qué elegirnos */}
        <section id="nosotros" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="grid gap-6 md:grid-cols-3">
              {ventajas.map((item) => (
                <div
                  key={item.t}
                  className="rounded-2xl bg-coral/10 p-6 text-center"
                >
                  <h3 className="text-lg font-extrabold text-coral-dark">
                    {item.t}
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram */}
        <section className="bg-cream">
          <div className="mx-auto max-w-6xl px-4 py-16 text-center">
            <h2 className="text-3xl font-extrabold text-brand-deep">
              {t("instagram.titulo")}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-ink-soft">
              {t("instagram.descripcion")}
            </p>
            <InstagramEmbeds />
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 font-bold text-white shadow-sm transition hover:bg-brand-dark"
            >
              <InstagramIcon className="h-5 w-5" />
              {t("instagram.cta")}
            </a>
          </div>
        </section>

        {/* Testimonios */}
        <section id="testimonios" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-center text-3xl font-extrabold text-brand-deep">
              {t("testimonios.titulo")}
            </h2>
            <TestimoniosCarrusel />
          </div>
        </section>

        {/* CTA final */}
        <section id="contacto" className="bg-brand">
          <div className="mx-auto max-w-3xl px-4 py-16 text-center">
            <h2 className="text-3xl font-extrabold text-white">
              {t("cta.titulo")}
            </h2>
            <p className="mt-3 text-white/90">{t("cta.descripcion")}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <WhatsAppButton href={whatsappUrl} variant="white">
                {t("cta.whatsapp")}
              </WhatsAppButton>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-deep text-cream">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
          <span className="text-lg font-extrabold text-white">
            Tejiendo Redes
          </span>
          <div className="flex items-center gap-5 text-sm">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition hover:text-white"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="transition hover:text-white"
            >
              <WhatsappIcon className="h-5 w-5" />
            </a>
            <span>{t("footer.pais")}</span>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs text-cream/70">
          {t("footer.derechos")}
        </div>
      </footer>
    </div>
  );
}
