# Argos — Landing page

Landing de una página para Argos, el establecimiento conectado. React 19 + TypeScript sobre Vite, sin dependencias de UI: los estilos son CSS Modules apoyados en un set de tokens.

## Requisitos

Node.js 20 o superior. **En esta máquina Node no está instalado**, así que antes de nada:

```bash
winget install OpenJS.NodeJS.LTS
```

Cerrá y volvé a abrir la terminal para que tome el PATH, y verificá con `node -v`.

## Arrancar

```bash
npm install
```

```bash
npm run dev
```

Levanta en `http://localhost:5173` y abre el navegador solo.

Otros comandos:

| Comando | Qué hace |
| --- | --- |
| `npm run build` | Chequea tipos y genera `dist/` listo para publicar |
| `npm run preview` | Sirve el `dist/` ya construido |
| `npm run typecheck` | Solo TypeScript, sin generar nada |

## Configuración

Copiá `.env.example` a `.env` y completá lo que tengas:

| Variable | Para qué |
| --- | --- |
| `VITE_LEADS_ENDPOINT` | URL que recibe el formulario por POST en JSON. Si queda vacía, el formulario corre en **modo demo**: valida los datos, muestra el éxito y no envía nada (se avisa en pantalla). Sirve cualquier servicio tipo Formspree o Getform, o una API propia. |
| `VITE_WHATSAPP` | Teléfono en formato internacional sin `+` ni espacios, ej. `59899123456`. |
| `VITE_CONTACT_EMAIL` | Mail que se muestra en el pie y en la sección de contacto. |

## Dónde tocar cada cosa

- **Todos los textos** están en [`src/data/content.ts`](src/data/content.ts). Cambiar una alerta, un precio o un titular no requiere abrir ningún componente.
- **La paleta, tipografías y espaciados** están en [`src/styles/tokens.css`](src/styles/tokens.css). Cambiar `--c-green` cambia la marca entera.
- **Cada sección** es un componente en `src/components/` con su `.module.css` al lado.

```
src/
  components/
    ui/            Section, Button, Reveal, Logo, Icons  (piezas reutilizables)
    Header.tsx     Nav sticky con menú móvil
    Hero.tsx       Titular + mock del tablero + barra de datos
    TableroMock.tsx  El mapa SVG con potreros, rodeo y alertas
    Problema.tsx   Los cinco dolores
    Caravana.tsx   La jugada clave (sección verde)
    Producto.tsx   Las tres capas
    Alertas.tsx    Tabla de alertas (se vuelve tarjetas en móvil)
    Cliente.tsx    Segmentos + la nota sobre el capataz
    Modelo.tsx     Las tres fuentes de ingreso + regla de oro
    Tecnologia.tsx Diagrama de flujo + las cuatro decisiones
    Piloto.tsx     Los cuatro pasos del arranque
    Riesgos.tsx    Acordeón de preguntas incómodas
    Contacto.tsx   Formulario validado + WhatsApp
    Footer.tsx
  data/content.ts  Todo el copy
  hooks/           useReveal (animación por scroll), useScrolled
  lib/             config (env) y validation (formulario)
  styles/          tokens.css y global.css
```

## Detalles que ya están resueltos

- **Responsive** de 360 px a pantallas anchas; la tabla de alertas se convierte en tarjetas en móvil.
- **Accesibilidad**: enlace de salto, navegación por teclado, `aria-expanded` en el menú y el acordeón, errores de formulario asociados a cada campo con `aria-describedby`, foco visible.
- **`prefers-reduced-motion`**: si el usuario lo pide, se apagan las animaciones de entrada y el scroll suave.
- **SEO básico**: title, description y Open Graph en `index.html`. Falta la imagen `og:image` cuando tengan una foto o render del tablero.

## Publicar

`npm run build` deja todo en `dist/`: HTML, CSS y JS estáticos, sin servidor detrás.

### GitHub Pages

Ya está el workflow en `.github/workflows/deploy.yml`: cada push a `main` construye y publica. Para que funcione hay que hacer una vez, en el repo:

1. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
2. El repo tiene que ser **público**, salvo que la cuenta tenga GitHub Pro o superior: en el plan gratuito Pages no publica repos privados.

El sitio queda en `https://<usuario>.github.io/argos/`. Como Pages sirve desde un subdirectorio y no desde la raíz, `vite.config.ts` usa `base: '/argos/'` en los builds de producción — sin eso, la página carga en blanco porque los assets se piden a la raíz del dominio.

Las variables (`VITE_LEADS_ENDPOINT`, `VITE_WHATSAPP`, `VITE_CONTACT_EMAIL`) se definen en **Settings → Secrets and variables → Actions → Variables**. Ojo: van dentro del bundle y quedan a la vista de cualquiera, así que son *variables*, no *secrets*. Nunca pongas ahí una clave de API.

### Otros hostings

Netlify, Vercel y Cloudflare Pages conectan directo con el repo, **también si es privado**, y detectan Vite solos: comando `npm run build`, directorio `dist`. Como sirven desde la raíz del dominio, hay que anular el prefijo con una variable de entorno en el panel del servicio:

```
BASE_PATH=/
```

Lo mismo aplica si algún día Argos tiene dominio propio.

## Pendientes conocidos

- Falta una foto real de campo y una imagen para `og:image`.
- El mock del tablero es una ilustración SVG, no una captura del producto: conviene reemplazarlo cuando exista la app.
- El formulario no tiene protección anti-spam. Si empieza a llegar basura, agregar un honeypot o el captcha del servicio de destino.
