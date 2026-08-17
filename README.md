# Tejiendo Redes — Sitio Web

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)

> Sitio web de marketing para **Tejiendo Redes**, un centro psicopedagógico en Ecuador
> que ofrece apoyo académico personalizado: control de tareas, clases personalizadas,
> creación de ensayos y edición/corrección de textos.

El objetivo del sitio es transmitir una presencia **profesional y cálida** que genere
confianza en padres de familia y estudiantes, y convierta las visitas en contactos
—principalmente por **WhatsApp** y formulario. El tono se apoya en la mascota de marca
"Teji" (una familia de nutrias) y en una paleta de tonos rosados.

---

## ✨ Características

- 🌍 **Bilingüe Español / Inglés** con enrutamiento por idioma (`next-intl`) y conmutador de idioma.
- 📱 **Diseño responsive** (mobile-first), pensado para tráfico proveniente de redes sociales.
- 💬 **CTAs de WhatsApp** con mensajes precargados por servicio (enlaces `wa.me`).
- 📸 **Sección de Instagram** con publicaciones oficiales incrustadas (embeds en vivo, no copias).
- 🗣️ **Carrusel de testimonios** con auto-avance que se pausa al pasar el cursor.
- 🎨 **Theming de marca** mediante tokens de Tailwind v4 (`@theme`) y tipografía Nunito.
- ⚡ **Renderizado estático** con React Server Components para máxima velocidad y buen SEO.

## 🛠️ Stack técnico

| Área | Tecnología |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v4 |
| Internacionalización | next-intl |
| Hosting | Vercel |

## 🚀 Ejecutar localmente

La aplicación vive en el subdirectorio [`web/`](web/).

```bash
cd web
npm install     # instala dependencias
npm run dev     # servidor de desarrollo en http://localhost:3000
```

Otros comandos útiles:

```bash
npm run build   # build de producción (lo mismo que ejecuta Vercel)
npm run lint    # eslint
```

## 📁 Estructura del proyecto

```
tejiendo-redes/
├─ web/                     # Aplicación Next.js (todo el desarrollo ocurre aquí)
│  ├─ app/
│  │  ├─ [locale]/          # Páginas con enrutamiento por idioma (ES / EN)
│  │  └─ components/        # Componentes cliente (Instagram, carrusel, idioma)
│  ├─ i18n/                 # Configuración de next-intl (routing, request)
│  ├─ messages/             # Traducciones (es.json, en.json)
│  └─ public/               # Imágenes y assets estáticos
├─ Recursos/                # Assets fuente de marca (mascota, logo, anuncios)
└─ PRD.md                   # Documento de requerimientos del producto
```

El contenido (servicios, testimonios, posts de Instagram) no usa un CMS: se edita
directamente en arrays tipados dentro de los componentes.

## 🌐 Despliegue

El repositorio está conectado a **Vercel**, que despliega automáticamente en cada push a
`main`. En Vercel el *Root Directory* está configurado como `web/` (la app es un
subdirectorio del repositorio).

## 👤 Autor

Desarrollado por **Daniel Morales** — **Cranel Studios** ([@DanCranel](https://github.com/DanCranel)).
