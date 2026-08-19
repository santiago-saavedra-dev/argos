import { fuentes, porQueDistinta, reglaDeOro } from '../data/content';
import { Reveal } from './ui/Reveal';
import { Section } from './ui/Section';
import styles from './Modelo.module.css';

export function Modelo() {
  return (
    <Section
      id="modelo"
      tone="alt"
      eyebrow="Cómo se contrata"
      title="Un relevamiento, el equipamiento y una suscripción"
      lead="Tres cosas, cada una con una función distinta. El negocio no está en venderte hierro: está en que el sistema te siga sirviendo el año que viene."
    >
      <div className={styles.grid}>
        {fuentes.map((f, i) => (
          <Reveal key={f.nombre} delay={i * 80}>
            <article className={`${styles.card} ${f.destacada ? styles.destacada : ''}`}>
              {f.destacada && <span className={styles.destacadaTag}>El corazón del acuerdo</span>}
              <span className={styles.tipo}>{f.tipo}</span>
              <h3 className={styles.nombre}>{f.nombre}</h3>
              <p className={styles.que}>{f.que}</p>
              <p className={styles.rol}>{f.rol}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <div className={styles.dos}>
        <Reveal delay={60}>
          <div className={styles.regla}>
            <p className={styles.reglaTitulo}>{reglaDeOro.titulo}</p>
            <p className={styles.reglaTexto}>{reglaDeOro.texto}</p>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className={styles.barrera}>
            <h3 className={styles.barreraTitulo}>{porQueDistinta.titulo}</h3>
            <p className={styles.barreraTexto}>{porQueDistinta.texto}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
