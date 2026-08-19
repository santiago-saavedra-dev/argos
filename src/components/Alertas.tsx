import { alertas } from '../data/content';
import { IconAlerta } from './ui/Icons';
import { Reveal } from './ui/Reveal';
import { Section } from './ui/Section';
import styles from './Alertas.module.css';

export function Alertas() {
  return (
    <Section
      id="alertas"
      tone="alt"
      eyebrow="El corazón del producto"
      title="Pocas alertas, y que cada una diga qué hacer"
      lead="Una alerta que no termina en una acción concreta es ruido. Estas son las que mandamos, qué significan y qué hacés con ellas."
    >
      <Reveal>
        <div className={styles.wrap}>
          <table className={styles.tabla}>
            <thead>
              <tr>
                <th scope="col">Alerta</th>
                <th scope="col">Qué significa</th>
                <th scope="col">Qué hacés</th>
              </tr>
            </thead>
            <tbody>
              {alertas.map((a) => (
                <tr key={a.alerta}>
                  <td>
                    <span className={styles.alerta}>
                      <span className={`${styles.punto} ${styles[a.tono]}`} />
                      {a.alerta}
                    </span>
                  </td>
                  <td data-label="Qué significa">{a.significa}</td>
                  <td data-label="Qué hacés" className={styles.accion}>
                    {a.accion}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className={styles.leyenda}>
          <span className={styles.leyendaItem}>
            <span className={`${styles.punto} ${styles.critica}`} /> Urgente: salí ahora
          </span>
          <span className={styles.leyendaItem}>
            <span className={`${styles.punto} ${styles.atencion}`} /> Atención: resolvelo en el día
          </span>
        </div>

        <div className={styles.calibracion}>
          <span className={styles.calibracionIcono}>
            <IconAlerta width={26} height={26} />
          </span>
          <div>
            <h3 className={styles.calibracionTitulo}>Si el capataz recibe 40 avisos por día, silencia la app</h3>
            <p className={styles.calibracionTexto}>
              Por eso durante el piloto cada alerta se valida contra lo que pasó de verdad en el
              campo antes de dejarla suelta. Preferimos mandar cinco alertas por semana que le
              importen a mandar cincuenta que se ignoren.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
