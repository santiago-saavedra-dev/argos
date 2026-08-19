import type { CSSProperties, ReactNode } from 'react';
import { useReveal } from '../../hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  /** Retraso en milisegundos, para escalonar tarjetas de una misma grilla. */
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

export function Reveal({ children, delay = 0, className, style }: RevealProps) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={['reveal', className].filter(Boolean).join(' ')}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}
