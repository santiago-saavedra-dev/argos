import { pasosPiloto } from '../data/content';
import { Reveal } from './ui/Reveal';
import { Section } from './ui/Section';
import styles from './Piloto.module.css';

const aliados = [
  'Veterinarios de campo',
  'Ingenieros agrónomos asesores',
  'Cabañas de genética',
  'Gremiales rurales',
];

export function Piloto() {
  return (
    <Section
      id="piloto"
      tone="alt"
      eyebrow="Cómo arrancamos"
      title="De la primera visita al primer animal encontrado a tiempo"
      lead="Sin sorpresas y sin contratos largos: el piloto dura seis meses y las métricas se acuerdan antes de instalar nada."
    >
      <div className={styles.pasos}>
        {pasosPiloto.map((p, i) => (
          <Reveal key={p.numero} delay={i * 80}>
            <article className={styles.paso}>
              <span className={styles.numero}>{p.numero}</span>
              <h3 className={styles.titulo}>{p.titulo}</h3>
              <p className={styles.texto}>{p.texto}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className={styles.aliados}>
          <span className={styles.aliadosTitulo}>Trabajamos junto a:</span>
          <ul className={styles.aliadosLista}>
            {aliados.map((a) => (
              <li key={a} className={styles.aliado}>
                {a}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
