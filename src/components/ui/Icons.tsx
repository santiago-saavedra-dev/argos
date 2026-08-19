import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

/** Base comun: trazo de 1.6, sin relleno, hereda el color del texto. */
function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={22}
      height={22}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const IconAguada = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3.2c3.4 3.9 5.4 6.6 5.4 9a5.4 5.4 0 1 1-10.8 0c0-2.4 2-5.1 5.4-9Z" />
    <path d="M9.4 12.9a2.7 2.7 0 0 0 2.6 3" />
  </Icon>
);

export const IconBoyero = (p: IconProps) => (
  <Icon {...p}>
    <path d="M13.4 2.5 5.8 13.2h5.1l-1 8.3 7.6-10.7h-5.1l1-8.3Z" />
  </Icon>
);

export const IconTranquera = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 5.5v13M21 5.5v13" />
    <path d="M6 7.5h12v9H6z" />
    <path d="m6 7.5 12 9M18 7.5l-12 9" />
  </Icon>
);

export const IconClima = (p: IconProps) => (
  <Icon {...p}>
    <path d="M7.5 16.5a3.8 3.8 0 0 1-.4-7.6 5 5 0 0 1 9.6-1.1 3.8 3.8 0 0 1 .6 7.5" />
    <path d="M9 19.5 8 21.5M13 19.5l-1 2M17 19.5l-1 2" />
  </Icon>
);

export const IconCaravana = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6.5 4h11a2 2 0 0 1 2 2v6.6a4 4 0 0 1-1.4 3l-4.8 4.1a2 2 0 0 1-2.6 0l-4.8-4.1a4 4 0 0 1-1.4-3V6a2 2 0 0 1 2-2Z" />
    <circle cx="12" cy="9.5" r="2.2" />
  </Icon>
);

export const IconMapa = (p: IconProps) => (
  <Icon {...p}>
    <path d="m9 4.5-5.5 2.4v12.6L9 17.1l6 2.4 5.5-2.4V4.5L15 6.9 9 4.5Z" />
    <path d="M9 4.5v12.6M15 6.9v12.6" />
  </Icon>
);

export const IconGrafica = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 20V4M4 20h16" />
    <path d="M8 16.5v-4M12 16.5V8M16 16.5v-6.5M20 16.5V6" />
  </Icon>
);

export const IconAlerta = (p: IconProps) => (
  <Icon {...p}>
    <path d="M10.6 3.7 2.9 17.2a1.6 1.6 0 0 0 1.4 2.4h15.4a1.6 1.6 0 0 0 1.4-2.4L13.4 3.7a1.6 1.6 0 0 0-2.8 0Z" />
    <path d="M12 9v4.2M12 16.6h.01" />
  </Icon>
);

export const IconCheck = (p: IconProps) => (
  <Icon {...p}>
    <path d="m4.5 12.5 5 5 10-11" />
  </Icon>
);

export const IconFlecha = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4.5 12h15M13.5 6l6 6-6 6" />
  </Icon>
);

export const IconAntena = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 10.5V21M8.5 21h7" />
    <circle cx="12" cy="8" r="2" />
    <path d="M7.8 12.2a6 6 0 0 1 0-8.4M16.2 3.8a6 6 0 0 1 0 8.4" />
  </Icon>
);

export const IconNube = (p: IconProps) => (
  <Icon {...p}>
    <path d="M7 18.5a4.2 4.2 0 0 1-.4-8.4 5.5 5.5 0 0 1 10.6-1.2A4.1 4.1 0 0 1 17.5 18.5H7Z" />
  </Icon>
);

export const IconCelular = (p: IconProps) => (
  <Icon {...p}>
    <rect x="6.5" y="2.5" width="11" height="19" rx="2.4" />
    <path d="M10.5 5.5h3M12 18.4h.01" />
  </Icon>
);

export const IconMenu = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Icon>
);

export const IconCerrar = (p: IconProps) => (
  <Icon {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </Icon>
);

export const IconMail = (p: IconProps) => (
  <Icon {...p}>
    <rect x="2.8" y="5" width="18.4" height="14" rx="2.2" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </Icon>
);

export const IconWhatsapp = (p: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    width={22}
    height={22}
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    {...p}
  >
    <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.74.46 3.44 1.32 4.94L2.1 22l5.36-1.4a9.82 9.82 0 0 0 4.58 1.16h.01c5.43 0 9.84-4.4 9.84-9.84 0-2.63-1.02-5.1-2.88-6.96A9.77 9.77 0 0 0 12.04 2Zm0 17.98h-.01a8.2 8.2 0 0 1-4.16-1.14l-.3-.18-3.1.81.83-3.02-.2-.31a8.14 8.14 0 0 1-1.25-4.3c0-4.51 3.68-8.18 8.2-8.18 2.18 0 4.24.85 5.78 2.4a8.13 8.13 0 0 1 2.4 5.79c0 4.51-3.68 8.13-8.19 8.13Zm4.49-6.09c-.25-.13-1.46-.72-1.68-.8-.23-.08-.39-.13-.56.12-.16.25-.63.8-.78.97-.14.16-.29.19-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.71-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.09-.16.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42h-.48c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.03s.87 2.35.99 2.51c.12.17 1.71 2.6 4.14 3.65.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.46-.6 1.66-1.17.21-.58.21-1.07.15-1.17-.06-.11-.22-.17-.47-.29Z" />
  </svg>
);
