import { hero, heroStats } from '../data/content';
import { Button } from './ui/Button';
import { IconFlecha } from './ui/Icons';
import { Reveal } from './ui/Reveal';
import { TableroMock } from './TableroMock';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.inner}>
        <Reveal>
          <p className={styles.eyebrow}>{hero.eyebrow}</p>
          <h1 className={styles.title}>{hero.title}</h1>
          <p className={styles.lead}>{hero.lead}</p>
          <p className={styles.note}>{hero.note}</p>

          <div className={styles.ctas}>
            <Button href="#contacto" size="lg">
              {hero.primaryCta}
              <IconFlecha width={18} height={18} />
            </Button>
            <Button href="#producto" variant="secondary" size="lg">
              {hero.secondaryCta}
            </Button>
          </div>
        </Reveal>

        <Reveal className={styles.visual} delay={140}>
          <TableroMock />
        </Reveal>
      </div>

      <Reveal className={styles.stats} delay={220}>
        {heroStats.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
