/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LEADS_ENDPOINT?: string;
  readonly VITE_WHATSAPP?: string;
  readonly VITE_CONTACT_EMAIL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
