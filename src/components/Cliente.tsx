import { clienteNota, clientes } from '../data/content';
import { Reveal } from './ui/Reveal';
import { Section } from './ui/Section';
import styles from './Cliente.module.css';

export function Cliente() {
  return (
    <Section
      id="cliente"
      eyebrow="Para quién"
      title="Campos donde recorrer ya es una línea del presupuesto"
      lead="Si el establecimiento se recorre entero en una mañana, Argos no te hace falta. Si no, empieza a cerrar la cuenta."
    >
      <div className={styles.grid}>
        {clientes.map((c, i) => (
          <Reveal key={c.titulo} delay={i * 80}>
            <article className={`${styles.card} ${i === 0 ? styles.principal : ''}`}>
              <span className={styles.tag}>{c.tag}</span>
              <h3 className={styles.titulo}>{c.titulo}</h3>
              <p className={styles.descripcion}>{c.descripcion}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className={styles.nota}>
          <h3 className={styles.notaTitulo}>{clienteNota.titulo}</h3>
          <p className={styles.notaTexto}>{clienteNota.texto}</p>
        </div>
      </Reveal>
    </Section>
  );
}
