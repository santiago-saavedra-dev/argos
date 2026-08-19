import { useEffect, useRef } from 'react';

/**
 * Agrega la clase `is-visible` cuando el elemento entra en pantalla.
 * La animacion en si vive en global.css (`.reveal`), y se desactiva sola
 * si el usuario pidio reducir el movimiento.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.12) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Sin IntersectionObserver (o en SSR) mostramos el contenido sin animar.
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible');
      return;
    }

    // Red de seguridad: si el elemento ya esta en pantalla al montar, lo mostramos
    // sin esperar al observer. Asi nada queda invisible si el callback no llega.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold, rootMargin: '0px 0px -48px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
