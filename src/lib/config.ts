/**
 * Configuracion de entorno. Todo lo que cambia entre el demo y produccion
 * vive aca y se define en el .env (ver .env.example).
 */

const whatsappNumber = import.meta.env.VITE_WHATSAPP?.trim() || '59899000000';

export const config = {
  /** Endpoint que recibe los leads. Vacio = modo demo (valida y no envia). */
  leadsEndpoint: import.meta.env.VITE_LEADS_ENDPOINT?.trim() || '',
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL?.trim() || 'hola@argos.uy',
  whatsappNumber,
  whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hola, vi la web de Argos y quiero saber mas sobre el relevamiento en mi establecimiento.',
  )}`,
} as const;

export const isDemoMode = config.leadsEndpoint === '';
