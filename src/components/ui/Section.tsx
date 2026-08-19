import type { ReactNode } from 'react';
import { Reveal } from './Reveal';
import styles from './Section.module.css';

type Tone = 'base' | 'alt' | 'surface' | 'green';

interface SectionProps {
  id?: string;
  tone?: Tone;
  eyebrow?: string;
  title?: string;
  lead?: string;
  align?: 'left' | 'center';
  narrow?: boolean;
  className?: string;
  children: ReactNode;
}

export function Section({
  id,
  tone = 'base',
  eyebrow,
  title,
  lead,
  align = 'left',
  narrow = false,
  className,
  children,
}: SectionProps) {
  const headingId = id ? `${id}-titulo` : undefined;

  return (
    <section
      id={id}
      className={[styles.section, styles[tone], className].filter(Boolean).join(' ')}
      aria-labelledby={title ? headingId : undefined}
    >
      <div className={[styles.container, narrow ? styles.narrow : ''].filter(Boolean).join(' ')}>
        {(eyebrow || title || lead) && (
          <Reveal
            className={[styles.header, align === 'center' ? styles.headerCenter : '']
              .filter(Boolean)
              .join(' ')}
          >
            {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
            {title && (
              <h2 id={headingId} className={styles.title}>
                {title}
              </h2>
            )}
            {lead && <p className={styles.lead}>{lead}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
