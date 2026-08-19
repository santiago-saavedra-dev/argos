import { caravana } from '../data/content';
import { Reveal } from './ui/Reveal';
import styles from './Caravana.module.css';
import sectionStyles from './ui/Section.module.css';

/** La caravana como objeto: lo que ya existe, mas los sensores encima. */
function CaravanaIlustracion() {
  return (
    <svg className={styles.tagSvg} viewBox="0 0 300 330" aria-hidden="true">
      {/* Botón trasero y vástago */}
      <ellipse cx="150" cy="34" rx="30" ry="20" fill="#d8ad2f" />
      <ellipse cx="150" cy="30" rx="30" ry="20" fill="#f0cb52" />
      <rect x="140" y="42" width="20" height="34" fill="#c99c22" />

      {/* Cuerpo de la caravana */}
      <path
        d="M150 62c56 0 96 34 96 92v92c0 34-28 62-62 62h-68c-34 0-62-28-62-62v-92c0-58 40-92 96-92Z"
        fill="#f5d15c"
        stroke="#c99c22"
        strokeWidth="3"
      />
      <path
        d="M150 62c56 0 96 34 96 92v18H54v-18c0-58 40-92 96-92Z"
        fill="#f8dd83"
        opacity="0.55"
      />

      {/* Identificacion oficial */}
      <text
        x="150"
        y="140"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="15"
        fontWeight="700"
        fill="#6b5210"
        letterSpacing="1"
      >
        UY
      </text>
      <text
        x="150"
        y="176"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="26"
        fontWeight="700"
        fill="#4d3a08"
        letterSpacing="1.5"
      >
        858 000
      </text>
      <text
        x="150"
        y="206"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="26"
        fontWeight="700"
        fill="#4d3a08"
        letterSpacing="1.5"
      >
        214
      </text>

      {/* El agregado de Argos: modulo de sensores */}
      <rect x="104" y="228" width="92" height="46" rx="10" fill="#1d5033" />
      <circle cx="126" cy="251" r="7" fill="#a9d2b1" />
      <path d="M144 251h38M144 243h26M144 259h30" stroke="#a9d2b1" strokeWidth="3" strokeLinecap="round" opacity="0.75" />

      {/* Señal LoRa saliendo hacia el gateway */}
      <g stroke="#a9d2b1" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.9">
        <path d="M252 132a34 34 0 0 1 0 46" />
        <path d="M266 116a58 58 0 0 1 0 78" opacity="0.6" />
        <path d="M280 100a82 82 0 0 1 0 110" opacity="0.35" />
      </g>
    </svg>
  );
}

export function Caravana() {
  return (
    <section
      id="caravana"
      className={`${sectionStyles.section} ${sectionStyles.green}`}
      aria-labelledby="caravana-titulo"
    >
      <div className={sectionStyles.container}>
        <div className={styles.layout}>
          <Reveal className={styles.visual}>
            <CaravanaIlustracion />
          </Reveal>

          <Reveal delay={120}>
            <p className={styles.eyebrow}>{caravana.eyebrow}</p>
            <h2 id="caravana-titulo" className={styles.titulo}>
              {caravana.titulo}
            </h2>

            {caravana.parrafos.map((p) => (
              <p key={p.slice(0, 24)} className={styles.parrafo}>
                {p}
              </p>
            ))}

            <div className={styles.institucional}>
              <p className={styles.institucionalTexto}>{caravana.institucional}</p>
              <ul className={styles.organismos}>
                {caravana.organismos.map((o) => (
                  <li key={o} className={styles.organismo}>
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
