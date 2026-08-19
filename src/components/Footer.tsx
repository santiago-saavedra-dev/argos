import { navItems } from '../data/content';
import { config } from '../lib/config';
import { IconMail, IconWhatsapp } from './ui/Icons';
import { Logo } from './ui/Logo';
import styles from './Footer.module.css';

export function Footer() {
  const año = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.marca}>
          <Logo />
          <p className={styles.tagline}>
            El establecimiento conectado. Instrumentamos el campo y el rodeo para que sepas lo que
            pasa sin tener que ir a mirar.
          </p>
        </div>

        <nav aria-labelledby="footer-nav">
          <h2 id="footer-nav" className={styles.columnaTitulo}>
            El producto
          </h2>
          <ul className={styles.lista}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a className={styles.enlace} href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={styles.columnaTitulo}>Contacto</h2>
          <ul className={styles.lista}>
            <li>
              <a
                className={styles.enlace}
                href={config.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWhatsapp width={17} height={17} />
                WhatsApp
              </a>
            </li>
            <li>
              <a className={styles.enlace} href={`mailto:${config.contactEmail}`}>
                <IconMail width={17} height={17} />
                {config.contactEmail}
              </a>
            </li>
            <li>
              <a className={styles.enlace} href="#contacto">
                Agendar un relevamiento
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.legal}>
        <span>© {año} Argos · Montevideo, Uruguay</span>
        <span>Hecho para el campo uruguayo</span>
      </div>
    </footer>
  );
}
