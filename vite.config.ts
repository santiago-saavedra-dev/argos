import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages sirve el sitio en https://usuario.github.io/argos/, no en la raiz.
// En build usamos ese prefijo para que los assets resuelvan; en dev seguimos en /.
// Si mas adelante se publica en un dominio propio o en Netlify/Vercel, alcanza con
// poner BASE_PATH=/ en el entorno del build.
const basePath = process.env.BASE_PATH ?? '/argos/';

// Discriminamos por modo y no por comando: asi `vite preview` tambien sirve el
// sitio bajo /argos/ y prueba exactamente lo que se publica.
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? basePath : '/',
  plugins: [react()],
  server: { port: 5173 },
}));
