import { IconAguada, IconAlerta, IconBoyero } from './ui/Icons';
import styles from './TableroMock.module.css';

/** Posiciones de los animales, agrupadas por potrero. */
const rodeo: Array<[number, number]> = [
  [58, 62], [72, 74], [46, 84], [86, 58], [64, 96], [96, 82],
  [206, 58], [222, 76], [198, 92], [232, 52], [214, 106],
  [312, 60], [330, 78], [300, 92], [340, 56],
  [92, 196], [112, 214], [76, 228], [130, 190], [104, 246], [148, 224], [84, 262],
  [292, 200], [316, 222], [274, 236], [330, 196],
];

/** El que se escapo: quedo del otro lado del alambrado. */
const animalFuera: [number, number] = [286, 128];

export function TableroMock() {
  return (
    <div className={styles.frame}>
      <p className="sr-only">
        Ejemplo del tablero operativo: mapa del establecimiento con cinco potreros, el rodeo
        ubicado, las aguadas y las alertas activas del momento.
      </p>
      <div className={styles.topbar}>
        <span className={styles.estancia}>Establecimiento La Fortuna · 1.240 ha</span>
        <span className={styles.envivo}>
          <span className={styles.dot} />
          En vivo
        </span>
      </div>

      <svg className={styles.map} viewBox="0 0 400 300" aria-hidden="true">
        {/* Potreros. El tono de verde representa el uso del pasto. */}
        <rect x="14" y="14" width="158" height="138" fill="#cddfc1" />
        <rect x="172" y="14" width="110" height="138" fill="#e2ecd7" />
        <rect x="282" y="14" width="104" height="138" fill="#b9d2aa" />
        <rect x="14" y="152" width="228" height="134" fill="#dde9d0" />
        <rect x="242" y="152" width="144" height="134" fill="#c7dcba" />

        {/* Monte y quebrada */}
        <path
          d="M300 250c18-6 34-2 46-14 10-10 22-6 34-14v64H286c2-14 4-30 14-36Z"
          fill="#8fae86"
          opacity="0.55"
        />
        <path d="M14 236c30-4 52 10 78 6s40-18 66-12" stroke="#7fa5b5" strokeWidth="3" fill="none" opacity="0.7" />

        {/* Alambrados */}
        <g stroke="#8a9c86" strokeWidth="1.6" strokeDasharray="5 4">
          <path d="M172 14v138M282 14v138M14 152h372M242 152v134" />
        </g>
        <rect x="14" y="14" width="372" height="272" fill="none" stroke="#5e7a5f" strokeWidth="2.4" rx="4" />

        {/* Aguadas */}
        <g>
          <circle cx="120" cy="120" r="9" fill="#7fa5b5" opacity="0.35" />
          <circle cx="120" cy="120" r="4" fill="#2c6a88" />
          <circle cx="330" cy="120" r="9" fill="#c8871b" opacity="0.3" />
          <circle cx="330" cy="120" r="4" fill="#b8770f" />
        </g>

        {/* Rodeo */}
        <g fill="#1d5033">
          {rodeo.map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.2" opacity="0.78" />
          ))}
        </g>

        {/* Alerta: animal fuera del potrero asignado */}
        <circle
          className={styles.pulseRing}
          cx={animalFuera[0]}
          cy={animalFuera[1]}
          r="6"
          fill="none"
          stroke="#a4603c"
          strokeWidth="2"
        />
        <circle cx={animalFuera[0]} cy={animalFuera[1]} r="5" fill="#a4603c" />

        {/* Corte del alambrado */}
        <path d="M282 116v24" stroke="#a4603c" strokeWidth="3" strokeLinecap="round" />

        {/* Etiquetas */}
        <text className={styles.potreroLabel} x="24" y="30">POTRERO 1</text>
        <text className={styles.potreroLabel} x="182" y="30">POTRERO 2</text>
        <text className={styles.potreroLabel} x="292" y="30">POTRERO 3</text>
        <text className={styles.potreroLabel} x="24" y="168">POTRERO 4</text>
        <text className={styles.potreroLabel} x="252" y="168">POTRERO 5</text>
      </svg>

      <div className={styles.alertas}>
        <div className={`${styles.alerta} ${styles.critica}`}>
          <span className={styles.icono}>
            <IconAlerta width={18} height={18} />
          </span>
          <span className={styles.texto}>
            <span className={styles.titulo}>Animal fuera del potrero 3</span>
            <span className={styles.detalle}>Caravana 858 000 214 · 60 m del alambrado este</span>
          </span>
          <span className={styles.hora}>hace 6 min</span>
        </div>

        <div className={`${styles.alerta} ${styles.atencion}`}>
          <span className={styles.icono}>
            <IconBoyero width={18} height={18} />
          </span>
          <span className={styles.texto}>
            <span className={styles.titulo}>Boyero sector este sin tensión</span>
            <span className={styles.detalle}>Cayó de 7,2 kV a 0,4 kV</span>
          </span>
          <span className={styles.hora}>hace 22 min</span>
        </div>

        <div className={`${styles.alerta} ${styles.atencion}`}>
          <span className={styles.icono}>
            <IconAguada width={18} height={18} />
          </span>
          <span className={styles.texto}>
            <span className={styles.titulo}>Aguada 2 con nivel bajo</span>
            <span className={styles.detalle}>18% · la bomba no arrancó en el último ciclo</span>
          </span>
          <span className={styles.hora}>hace 1 h</span>
        </div>
      </div>
    </div>
  );
}
