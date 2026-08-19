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

`npm run build` deja todo en `dist/`, que es HTML, CSS y JS estáticos. Se sube tal cual a Netlify, Vercel, Cloudflare Pages o cualquier hosting estático. En Netlify o Vercel alcanza con conectar el repo: detectan Vite solos y el comando es `npm run build` con directorio `dist`.

## Pendientes conocidos

- Falta una foto real de campo y una imagen para `og:image`.
- El mock del tablero es una ilustración SVG, no una captura del producto: conviene reemplazarlo cuando exista la app.
- El formulario no tiene protección anti-spam. Si empieza a llegar basura, agregar un honeypot o el captcha del servicio de destino.
