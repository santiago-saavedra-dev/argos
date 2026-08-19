export interface LeadForm {
  nombre: string;
  establecimiento: string;
  email: string;
  telefono: string;
  hectareas: string;
  mensaje: string;
}

export type LeadErrors = Partial<Record<keyof LeadForm, string>>;

export const emptyLead: LeadForm = {
  nombre: '',
  establecimiento: '',
  email: '',
  telefono: '',
  hectareas: '',
  mensaje: '',
};

export const opcionesHectareas = [
  'Menos de 500 ha',
  'Entre 500 y 1.500 ha',
  'Entre 1.500 y 5.000 ha',
  'Más de 5.000 ha',
  'Administro campos de terceros',
] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

/** Cuenta solo digitos: sirve para +598 99 123 456, 099123456, etc. */
function digitos(valor: string) {
  return valor.replace(/\D/g, '').length;
}

export function validateLead(values: LeadForm): LeadErrors {
  const errors: LeadErrors = {};

  if (values.nombre.trim().length < 2) {
    errors.nombre = 'Poné tu nombre para saber con quién hablamos.';
  }

  if (!values.email.trim()) {
    errors.email = 'Necesitamos un mail para contestarte.';
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = 'Ese mail no parece válido.';
  }

  if (!values.telefono.trim()) {
    errors.telefono = 'Dejanos un teléfono: en el campo se arregla más rápido por WhatsApp.';
  } else if (digitos(values.telefono) < 8) {
    errors.telefono = 'Faltan dígitos en el teléfono.';
  }

  if (!values.hectareas) {
    errors.hectareas = 'Elegí un tamaño aproximado.';
  }

  if (values.mensaje.length > 1000) {
    errors.mensaje = 'Contanos en menos de 1000 caracteres.';
  }

  return errors;
}

export function hasErrors(errors: LeadErrors): boolean {
  return Object.keys(errors).length > 0;
}
