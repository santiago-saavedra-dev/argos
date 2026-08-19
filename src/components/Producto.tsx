import type { ComponentType, SVGProps } from 'react';
import { capas } from '../data/content';
import {
  IconAguada,
  IconBoyero,
  IconCaravana,
  IconCelular,
  IconCheck,
  IconClima,
  IconGrafica,
  IconMapa,
  IconTranquera,
} from './ui/Icons';
import { Reveal } from './ui/Reveal';
import { Section } from './ui/Section';
import styles from './Producto.module.css';

type IconoItem = ComponentType<SVGProps<SVGSVGElement>>;

/** Un icono por item, en el mismo orden que la lista de cada capa. */
const iconosPorCapa: IconoItem[][] = [
  [IconAguada, IconBoyero, IconTranquera, IconClima],
  [IconMapa, IconCaravana, IconCheck, IconCheck],
  [IconCelular, IconGrafica, IconGrafica, IconCheck],
];

export function Producto() {
  return (
    <Section
      id="producto"
      eyebrow="El producto"
      title="Tres capas que se apoyan una en la otra"
      lead="Primero el campo instrumentado, que se justifica solo. Después el rodeo. Y arriba de todo, la plataforma que traduce los datos en decisiones."
    >
      <div className={styles.capas}>
        {capas.map((capa, ci) => (
          <Reveal key={capa.numero} delay={ci * 90}>
            <article className={styles.capa}>
              <div className={styles.capaHead}>
                <span className={styles.capaTag}>Capa {capa.numero}</span>
                <span className={styles.numero}>{capa.numero}</span>
                <h3 className={styles.nombre}>{capa.nombre}</h3>
              </div>

              <div>
                <p className={styles.titulo}>{capa.titulo}</p>
                <p className={styles.descripcion}>{capa.descripcion}</p>

                <ul
                  className={[styles.items, ci === 0 ? styles.itemsNodos : '']
                    .filter(Boolean)
                    .join(' ')}
                >
                  {capa.items.map((item, ii) => {
                    const Icono = iconosPorCapa[ci]?.[ii] ?? IconCheck;
                    return (
                      <li
                        key={item}
                        className={[styles.item, ci === 0 ? styles.itemNodo : '']
                          .filter(Boolean)
                          .join(' ')}
                      >
                        <span className={styles.itemIcono}>
                          <Icono width={20} height={20} />
                        </span>
                        <span>{item}</span>
                      </li>
                    );
                  })}
                </ul>

                {capa.nota && <p className={styles.nota}>{capa.nota}</p>}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
