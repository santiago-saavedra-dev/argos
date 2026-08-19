import { useState } from 'react';
import { riesgos } from '../data/content';
import { Reveal } from './ui/Reveal';
import { Section } from './ui/Section';
import styles from './Riesgos.module.css';

export function Riesgos() {
  // El primero abierto: es la pregunta que siempre aparece.
  const [abierto, setAbierto] = useState<number | null>(0);

  return (
    <Section
      id="riesgos"
      eyebrow="Lo que nos preguntan"
      title="Las preguntas incómodas, contestadas de frente"
      lead="Un proyecto de campo se cae por los detalles que nadie quiere mencionar en la primera reunión. Preferimos ponerlos arriba de la mesa."
      narrow
    >
      <div className={styles.lista}>
        {riesgos.map((r, i) => {
          const activo = abierto === i;
          return (
            <Reveal key={r.pregunta} delay={i * 60}>
              <div className={`${styles.item} ${activo ? styles.itemAbierto : ''}`}>
                <h3>
                  <button
                    type="button"
                    id={`riesgo-boton-${i}`}
                    className={styles.boton}
                    aria-expanded={activo}
                    aria-controls={`riesgo-${i}`}
                    onClick={() => setAbierto(activo ? null : i)}
                  >
                    {r.pregunta}
                    <span className={`${styles.signo} ${activo ? styles.signoAbierto : ''}`} aria-hidden="true">
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={`riesgo-${i}`}
                  className={`${styles.panel} ${activo ? styles.panelAbierto : ''}`}
                  role="region"
                  aria-labelledby={`riesgo-boton-${i}`}
                >
                  <div className={styles.panelInner}>
                    <p className={styles.respuesta}>{r.respuesta}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
