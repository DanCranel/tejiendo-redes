"use client";

import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";

type Testimonio = {
  texto: string;
  autor: string;
  detalle: string;
};

const INTERVALO = 6000;

export default function TestimoniosCarrusel() {
  const t = useTranslations("testimonios");
  const testimonios = t.raw("items") as Testimonio[];

  const [indice, setIndice] = useState(0);
  const [pausado, setPausado] = useState(false);

  const total = testimonios.length;
  const ir = useCallback((i: number) => setIndice((i + total) % total), [total]);
  const siguiente = useCallback(() => ir(indice + 1), [ir, indice]);
  const anterior = useCallback(() => ir(indice - 1), [ir, indice]);

  useEffect(() => {
    if (pausado) return;
    const t = setInterval(() => setIndice((i) => (i + 1) % total), INTERVALO);
    return () => clearInterval(t);
  }, [pausado, total]);

  return (
    <div
      className="mx-auto mt-10 max-w-2xl"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
    >
      <div className="flex items-center gap-3 sm:gap-5">
        <button
          type="button"
          onClick={anterior}
          aria-label={t("anterior")}
          className="hidden h-10 w-10 flex-none items-center justify-center rounded-full border border-cream-dark bg-white text-brand transition hover:bg-cream sm:flex"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            <path
              d="M15 18l-6-6 6-6"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="relative flex-1 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${indice * 100}%)` }}
            aria-live="polite"
          >
            {testimonios.map((item) => (
              <figure
                key={item.autor}
                className="flex w-full flex-none flex-col items-center px-2 text-center"
              >
                <span
                  aria-hidden="true"
                  className="text-5xl font-extrabold leading-none text-coral"
                >
                  &ldquo;
                </span>
                <blockquote className="mt-2 min-h-28 text-lg text-ink sm:min-h-24">
                  {item.texto}
                </blockquote>
                <figcaption className="mt-5">
                  <span className="block font-extrabold text-brand-dark">
                    {item.autor}
                  </span>
                  <span className="text-sm text-ink-soft">{item.detalle}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={siguiente}
          aria-label={t("siguiente")}
          className="hidden h-10 w-10 flex-none items-center justify-center rounded-full border border-cream-dark bg-white text-brand transition hover:bg-cream sm:flex"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            <path
              d="M9 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {testimonios.map((item, i) => (
          <button
            key={item.autor}
            type="button"
            onClick={() => ir(i)}
            aria-label={t("irA", { numero: i + 1 })}
            aria-current={i === indice}
            className={`h-2.5 rounded-full transition-all ${
              i === indice ? "w-6 bg-brand" : "w-2.5 bg-cream-dark hover:bg-coral"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
