import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

type Variant = 'primary' | 'secondary' | 'light' | 'outlineLight';

type SharedAttrs = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'type'> &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;

interface ButtonProps extends SharedAttrs {
  variant?: Variant;
  size?: 'md' | 'lg';
  block?: boolean;
  /** Si viene `href` se renderiza un <a>; si no, un <button>. */
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  href,
  type = 'button',
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = [
    styles.btn,
    styles[variant],
    size === 'lg' ? styles.lg : '',
    block ? styles.block : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    const external = href.startsWith('http');
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
