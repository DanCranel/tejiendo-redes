# PRD — Sitio Web "Tejiendo Redes" (Centro Psicopedagógico)

**Versión:** 1.0 (borrador)
**Fecha:** 20 de julio de 2026
**Autor:** Edisson / equipo Tejiendo Redes
**Estado:** Aprobación de alcance pendiente

---

## 1. Resumen ejecutivo

Tejiendo Redes es un centro psicopedagógico (Ecuador) que ofrece apoyo académico
personalizado. El objetivo de este sitio es tener una **presencia web profesional y
cálida** que:

1. Explique quiénes son y qué servicios ofrecen.
2. Genere confianza en **padres de familia** y en **estudiantes universitarios/adultos**.
3. Convierta visitas en contactos, principalmente por **WhatsApp** y por **formulario**.
4. Muestre contenido de valor (tips) reutilizando publicaciones de **Instagram**.

El tono debe ser **cercano, humano y confiable**, apoyado en la mascota "Teji" (las
nutrias) y en la paleta de marca ya existente.

> **Nota de identidad:** "Tejiendo Redes" = tejer vínculos y redes de apoyo. La mascota
> (familia de nutrias abrazadas) refuerza esa idea de acompañamiento y comunidad.

---

## 2. Objetivos y métricas de éxito

| Objetivo | Métrica | Meta inicial |
|---|---|---|
| Generar contactos | Clics en botón de WhatsApp | Medir con eventos (Google Analytics / similar) |
| Generar contactos | Envíos de formulario | ≥ registro mensual |
| Transmitir confianza | Tiempo en página "Servicios" / "Sobre nosotros" | Referencial |
| Alcance de contenido | Clics al perfil de Instagram | Medir con eventos |
| Rendimiento | Carga en móvil | < 3 s; Lighthouse ≥ 90 |

*(Ajustar metas cuando haya datos reales.)*

---

## 3. Público objetivo

1. **Padres de familia** (audiencia principal para servicios escolares)
   - Buscan: seriedad, seguimiento del niño, resultados, seguridad, buen trato.
   - Contenido clave: quiénes son, cómo trabajan, testimonios, facilidad de contacto.

2. **Estudiantes universitarios / adultos**
   - Buscan: ayuda con ensayos, corrección/edición, clases avanzadas, rapidez.
   - Contenido clave: servicios claros, ejemplos, respuesta ágil por WhatsApp.

> Nota: la web debe hablar a ambos sin confundir. Se recomienda **agrupar los
> servicios por audiencia** (ver sección 6).

---

## 4. Alcance

### 4.1 Dentro del alcance (v1)
- Sitio **bilingüe Español / Inglés** (ES por defecto, conmutador de idioma).
- Páginas/secciones: Inicio, Servicios, Sobre nosotros / equipo, Testimonios,
  Preguntas frecuentes, Contacto.
- Botón/CTA de **WhatsApp** con mensaje predefinido (barra fija + por servicio).
- **Formulario de contacto** que llega a un correo.
- Sección de Instagram con **posts destacados incrustados manualmente (embeds)** +
  botón al perfil.
- Diseño responsive (móvil primero), accesible y optimizado.
- Identidad de marca ya definida (mascota "Teji", paleta turquesa/coral/crema).

### 4.2 Fuera del alcance (v1) — posibles fases futuras
- Feed de Instagram 100 % automático (requiere API oficial o servicio de pago).
- Sistema de reservas/agenda en línea (tipo Calendly).
- Precios publicados en la web (decisión actual: **no mostrar precios**).
- Blog propio de artículos.
- Área de clientes / login / pagos en línea.

---

## 5. Identidad visual y de marca

**Ya definida.** Basada en los recursos existentes.

- **Mascota "Teji":** familia de nutrias color naranja con ropa turquesa. Poses
  disponibles: nutrias abrazadas (calidez/comunidad), dos nutrias con pizarra
  (enseñanza), nutria "abrazo triste" (empatía/apoyo). Usar como ilustraciones y
  micro-detalles, no saturar.
- **Paleta:**
  - Turquesa / teal (color principal de marca)
  - Coral / salmón (acento, llamadas a la acción)
  - Crema / beige (fondos)
  - Naranja (color de la mascota; usar con moderación fuera de las ilustraciones)
- **Tono visual:** amigable, redondeado, con espacio en blanco; profesional pero
  cálido (ni infantil de más, ni corporativo frío), porque habla tanto a padres
  como a adultos.
- **Tipografía:** una sans-serif legible y amable (definir en diseño; respetar la
  del logo si existe versión vectorial).

> **Pendiente de entregar por el cliente:** logo en versión vectorial (SVG/PNG con
> transparencia) y, si existe, manual de marca o códigos de color exactos (HEX).

---

## 6. Requerimientos funcionales por sección

### 6.1 Barra de navegación (global)
- Logo (enlace a inicio).
- Enlaces: Inicio · Servicios · Sobre nosotros · Testimonios · Preguntas frecuentes · Contacto.
- **Conmutador de idioma ES/EN.**
- Botón destacado de **WhatsApp** siempre visible.
- Versión móvil con menú hamburguesa.

### 6.2 Inicio (Landing)
- **Hero:** nombre del centro, frase de valor (ej. "Acompañamos el aprendizaje de tu
  familia"), ilustración de "Teji", y 2 CTAs: **WhatsApp** y "Ver servicios".
- Resumen de servicios (tarjetas con ícono/ilustración → enlazan a Servicios).
- Franja de confianza: por qué elegirnos / cómo trabajamos (3–4 puntos).
- Bloque de **Instagram** (posts destacados) + botón al perfil.
- Testimonios destacados (2–3).
- CTA final de contacto (WhatsApp + formulario).

### 6.3 Servicios
Lista de servicios conocidos (ampliar/ajustar con el cliente):
- **Control de tareas** (seguimiento y acompañamiento escolar).
- **Clases personalizadas** (incluye Matemáticas e Inglés, según publicidad existente).
- **Creación de ensayos.**
- **Edición y corrección** de textos.

Requisitos:
- Cada servicio: título, descripción breve, para quién es, e ícono/ilustración.
- **Sin precios.** En su lugar, botón **"Escríbenos por WhatsApp"** con mensaje
  precargado específico del servicio
  (ej. *"Hola, quiero información sobre Clases personalizadas"*).
- Sugerencia: agrupar visualmente **"Para estudiantes / colegio"** vs.
  **"Para universitarios y adultos"**.

### 6.4 Sobre nosotros / equipo
- Historia y misión del centro (idea de "tejer redes de apoyo").
- Perfiles del equipo/profesionales (foto, nombre, rol, breve bio) — clave para la
  confianza de los padres.
- Valores / enfoque pedagógico.

### 6.5 Testimonios
- Tarjetas con opinión, nombre (o inicial) y rol (padre/madre, estudiante).
- Idealmente con foto o avatar; si no, ilustración de marca.

### 6.6 Preguntas frecuentes (FAQ)
- Acordeón expandible. Cubrir: modalidad (presencial/en línea), horarios,
  cómo empezar, cómo se cobra ("se coordina por WhatsApp"), edades/niveles, etc.
- Objetivo: reducir mensajes repetidos.

### 6.7 Contacto
- **Botón de WhatsApp** con mensaje predefinido (ej. *"Hola, quiero información sobre
  sus servicios"*).
- **Formulario:** nombre, correo, servicio de interés (desplegable), mensaje.
  - Envío a un correo del centro.
  - Validación de campos + mensaje de éxito/error.
  - Protección anti-spam (ej. honeypot / captcha ligero, sin bloquear al usuario).
- Datos: horario de atención, ubicación/ciudad, correo, redes sociales.
- Opcional: mapa (si atienden presencial).

### 6.8 Bloque de Instagram
- Mostrar **3–6 publicaciones destacadas** incrustadas manualmente (embeds).
- Botón "Síguenos en Instagram" → perfil.
- **Proceso de actualización:** el centro elige los posts a destacar y se reemplazan
  periódicamente (documentar cómo hacerlo; ideal dejarlo fácil de editar).

### 6.9 Pie de página (footer)
- Logo + frase corta.
- Enlaces rápidos, redes sociales (Instagram, WhatsApp).
- Correo y ciudad.
- Aviso de derechos / año.

---

## 7. Requerimientos no funcionales

- **Responsive / mobile-first:** la mayoría del tráfico vendrá de redes → móvil.
- **Accesibilidad:** contraste adecuado (cuidar coral sobre crema), navegación por
  teclado, textos alternativos en imágenes, tamaño de toque adecuado. Meta: WCAG AA.
- **Rendimiento:** imágenes optimizadas (WebP), carga rápida en móvil, Lighthouse ≥ 90.
- **SEO básico:** títulos y meta descripciones por página (ES/EN), datos del negocio,
  Open Graph para que se vea bien al compartir en WhatsApp/redes.
- **Bilingüe:** todo el contenido en ES y EN; URLs o conmutador claros; recordar
  idioma elegido.
- **Privacidad:** el formulario recoge datos personales → aviso breve de privacidad y
  no exponer datos en la URL.
- **Analítica:** medir clics de WhatsApp, envíos de formulario y clics a Instagram.

---

## 8. Contenido y textos (pendientes del cliente)

Para poder construir el sitio se necesita:
- [ ] Logo vectorial y colores exactos (HEX) / manual de marca si existe.
- [ ] Nombre y número **oficial** de WhatsApp (¿es 098 471 2983 → +593 98 471 2983?).
- [ ] Correo de contacto donde deben llegar los formularios.
- [ ] Textos definitivos de cada servicio (o aprobación de los borradores).
- [ ] Bios y fotos del equipo.
- [ ] 3–6 testimonios reales (con permiso para publicarlos).
- [ ] Preguntas frecuentes reales.
- [ ] Enlace del perfil de Instagram y los posts a destacar.
- [ ] Ciudad / dirección / horarios de atención.
- [ ] ¿Los textos en inglés los provee el cliente o se traducen desde el español?

---

## 9. Stack técnico (definido)

| Área | Tecnología |
|---|---|
| Framework | **Next.js** (App Router) |
| Lenguaje | **TypeScript** |
| Estilos | **Tailwind CSS** |
| Envío del formulario | **Web3Forms** |
| Hosting / despliegue | **Vercel** |

**Detalles y decisiones derivadas:**

- **Next.js + TypeScript + Tailwind:** base moderna, rápida y mantenible. Los colores
  de marca (turquesa, coral, crema) se definen como tokens en la config de Tailwind
  para usarlos de forma consistente.
- **Renderizado:** el sitio es mayormente estático → usar **SSG** (páginas
  pre-generadas) para máxima velocidad y buen SEO. No requiere base de datos.
- **Formulario de contacto con Web3Forms:**
  - **Correo destino (a dónde llegan los mensajes):** `tejiendo.redes2314@gmail.com`.
  - **Sin dominio propio y sin backend de correo:** Web3Forms actúa de intermediario;
    recibe el envío y lo reenvía al Gmail del centro. Funciona sin problema en un
    subdominio `*.vercel.app`.
  - **Configuración inicial (acción requerida):** registrar el correo
    `tejiendo.redes2314@gmail.com` en web3forms.com para obtener la **Access Key**.
    Esa key identifica a dónde llegan los correos.
  - La **Access Key** se guarda como variable de entorno en Vercel
    (`NEXT_PUBLIC_WEB3FORMS_KEY`) — no es secreta (va ligada solo al correo destino),
    pero se mantiene en variable de entorno para poder cambiarla sin tocar código.
  - Implementación: el formulario en React envía los datos a la API de Web3Forms
    (`https://api.web3forms.com/submit`) mediante `fetch`. Puede hacerse desde el
    cliente o desde un Route Handler/Server Action de Next.js (preferible el server
    para validar y añadir anti-spam antes de reenviar).
  - Campo oculto **Reply-To** con el correo del visitante → permite responderle
    directamente desde Gmail.
  - Validación en cliente y servidor + protección anti-spam (Web3Forms incluye honeypot
    y captcha opcional; activar al menos el honeypot).
  - Página `/gracias` tras envío exitoso; manejo de errores visible al usuario.
  - **Límite del tier gratuito:** ~250 envíos/mes (verificar el vigente). Suficiente
    para el volumen esperado; si algún día se supera, se evalúa plan pago o migración.
- **Bilingüe (ES/EN):** manejar con enrutamiento por idioma de Next.js (ej.
  `next-intl` o i18n routing, `/` para ES y `/en/...` para EN). Definir al iniciar
  desarrollo.
- **Instagram:** embeds oficiales manuales (sin costo), integrados como componentes.
  Feed automático queda como mejora futura (API oficial o widget de pago).
- **Despliegue en Vercel (sin dominio propio por ahora):** integración con el
  repositorio (deploy automático en cada push) y variables de entorno gestionadas en
  Vercel. El sitio quedará en el **subdominio gratuito de Vercel**
  (ej. `tejiendo-redes.vercel.app`). Se puede conectar un dominio propio más adelante
  sin rehacer nada.
  - Nota SEO/imagen: una URL `*.vercel.app` funciona perfectamente, pero un dominio
    propio (ej. `.com`/`.ec`) da más profesionalismo de cara a padres y clientes.
    Queda como mejora futura.

**Decisiones pendientes:** librería de i18n (sugerida: `next-intl`). *(Dominio: se
pospone; correo destino del formulario: definido → `tejiendo.redes2314@gmail.com`.)*

---

## 10. Fases sugeridas

1. **Fase 0 — Preparación:** recopilar contenidos de la sección 8 + logo/colores.
2. **Fase 1 — Diseño:** wireframes y mockups (móvil y escritorio) con la marca.
3. **Fase 2 — Desarrollo v1:** estructura, secciones, WhatsApp, formulario, embeds IG,
   bilingüe, SEO básico.
4. **Fase 3 — Contenido y pruebas:** cargar textos reales, revisar en móvil, accesibilidad.
5. **Fase 4 — Lanzamiento:** dominio, hosting, analítica, publicación.
6. **Futuro (opcional):** agenda en línea, feed IG automático, blog de tips.

---

## 11. Riesgos y notas

- **Instagram:** los embeds manuales requieren mantenimiento (reemplazar posts). Si no
  se actualizan, el bloque puede verse desactualizado. Alternativa futura: servicio de
  feed automático (con costo).
- **Contraste de colores:** coral/salmón sobre crema puede fallar accesibilidad;
  validar contraste en textos.
- **Doble audiencia:** cuidar que el sitio no se sienta demasiado infantil para
  universitarios/adultos ni demasiado formal para padres. La agrupación de servicios
  ayuda.
- **Contenido bilingüe:** duplica el trabajo de textos; definir pronto quién traduce.
- **Número/correo:** confirmar datos oficiales antes de publicar.

---

*Documento de referencia. Al aprobarse el alcance, se procede a wireframes y luego al
desarrollo. No incluye código.*
