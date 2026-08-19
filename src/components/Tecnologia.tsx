import { decisiones, flujo } from '../data/content';
import { IconAntena, IconAguada, IconCaravana, IconCelular, IconNube } from './ui/Icons';
import { Reveal } from './ui/Reveal';
import { Section } from './ui/Section';
import styles from './Tecnologia.module.css';

const iconosFlujo = [IconCaravana, IconAguada, IconAntena, IconNube, IconCelular];

export function Tecnologia() {
  return (
    <Section
      id="tecnologia"
      eyebrow="La tecnología, en breve"
      title="Del animal al celular, sin depender de la antena de celular"
      lead="Cuatro decisiones técnicas que explican por qué esto funciona en el campo uruguayo y no solo en una demo."
    >
      <Reveal>
        <ol className={styles.flujo}>
          {flujo.map((paso, i) => {
            const Icono = iconosFlujo[i] ?? IconNube;
            return (
              <li key={paso.nombre} className={styles.paso}>
                <span className={styles.pasoIcono}>
                  <Icono width={26} height={26} />
                </span>
                <span className={styles.pasoNombre}>{paso.nombre}</span>
                <span className={styles.pasoDetalle}>{paso.detalle}</span>
              </li>
            );
          })}
        </ol>
      </Reveal>

      <div className={styles.decisiones}>
        {decisiones.map((d, i) => (
          <Reveal key={d.titulo} delay={i * 70}>
            <article className={styles.decision}>
              <h3 className={styles.decisionTitulo}>{d.titulo}</h3>
              <p className={styles.decisionTexto}>{d.texto}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
