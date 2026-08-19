import styles from './Logo.module.css';

interface LogoProps {
  /** Version para fondos oscuros. */
  light?: boolean;
  href?: string;
}

export function Logo({ light = false, href = '#inicio' }: LogoProps) {
  return (
    <a
      href={href}
      className={[styles.logo, light ? styles.light : ''].filter(Boolean).join(' ')}
      aria-label="Argos, ir al inicio"
    >
      {/* El ojo de Argos Panoptes: el que ve todo el campo a la vez. */}
      <svg className={styles.mark} width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
        <ellipse cx="16" cy="16" rx="12.5" ry="8.4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="16" r="4.1" fill="currentColor" />
        <circle cx="16" cy="16" r="1.6" fill="var(--c-bg)" />
      </svg>
      <span className={styles.word}>Argos</span>
    </a>
  );
}
