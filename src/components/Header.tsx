import { useEffect, useState } from 'react';
import { navItems } from '../data/content';
import { useScrolled } from '../hooks/useScrolled';
import { Button } from './ui/Button';
import { IconCerrar, IconMenu } from './ui/Icons';
import { Logo } from './ui/Logo';
import styles from './Header.module.css';

export function Header() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  // Escape cierra el menu movil.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={[styles.header, scrolled ? styles.scrolled : ''].filter(Boolean).join(' ')}>
      <div className={styles.inner}>
        <Logo />

        <nav className={styles.nav} aria-label="Secciones">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <span className={styles.desktopCta}>
            <Button href="#contacto">Agendar relevamiento</Button>
          </span>
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconCerrar /> : <IconMenu />}
          </button>
        </div>
      </div>

      <div
        id="menu-movil"
        className={[styles.panel, open ? styles.panelOpen : ''].filter(Boolean).join(' ')}
      >
        <div className={styles.panelInner}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.panelLink}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className={styles.panelCta}>
            <Button href="#contacto" block onClick={() => setOpen(false)}>
              Agendar relevamiento
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
