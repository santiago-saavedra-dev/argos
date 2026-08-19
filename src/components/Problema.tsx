import { problemaCierre, problemas } from '../data/content';
import { Section } from './ui/Section';
import { Reveal } from './ui/Reveal';
import styles from './Problema.module.css';

export function Problema() {
  return (
    <Section
      id="problema"
      tone="alt"
      eyebrow="El problema"
      title="El ganadero uruguayo administra su principal activo casi a ciegas"
      lead="No por falta de oficio: porque el campo es grande, la información llega tarde y todo depende de que alguien vaya y mire."
    >
      <div className={styles.grid}>
        {problemas.map((p, i) => (
          <Reveal key={p.titulo} delay={i * 70}>
            <article className={styles.card}>
              <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.titulo}>{p.titulo}</h3>
              <p className={styles.detalle}>{p.detalle}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <p className={styles.cierre}>{problemaCierre}</p>
      </Reveal>
    </Section>
  );
}
