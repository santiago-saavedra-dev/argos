import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { cierre } from '../data/content';
import { config, isDemoMode } from '../lib/config';
import {
  emptyLead,
  hasErrors,
  opcionesHectareas,
  validateLead,
  type LeadErrors,
  type LeadForm,
} from '../lib/validation';
import { Button } from './ui/Button';
import { IconCheck, IconMail, IconWhatsapp } from './ui/Icons';
import { Reveal } from './ui/Reveal';
import styles from './Contacto.module.css';
import sectionStyles from './ui/Section.module.css';

type Estado = 'idle' | 'enviando' | 'ok' | 'error';

export function Contacto() {
  const [values, setValues] = useState<LeadForm>(emptyLead);
  const [errors, setErrors] = useState<LeadErrors>({});
  const [estado, setEstado] = useState<Estado>('idle');

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Limpiamos el error del campo apenas el usuario lo corrige.
    setErrors((prev) => (prev[name as keyof LeadForm] ? { ...prev, [name]: undefined } : prev));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nuevos = validateLead(values);
    setErrors(nuevos);
    if (hasErrors(nuevos)) {
      const primero = Object.keys(nuevos)[0];
      document.getElementById(`campo-${primero}`)?.focus();
      return;
    }

    setEstado('enviando');

    // Sin endpoint configurado corremos en modo demo: validamos y mostramos el exito.
    if (isDemoMode) {
      await new Promise((r) => setTimeout(r, 600));
      setEstado('ok');
      return;
    }

    try {
      const res = await fetch(config.leadsEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...values, origen: 'landing-argos' }),
      });
      if (!res.ok) throw new Error(`Respuesta ${res.status}`);
      setEstado('ok');
    } catch {
      setEstado('error');
    }
  };

  const campoProps = (name: keyof LeadForm) => ({
    id: `campo-${name}`,
    name,
    value: values[name],
    onChange,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `error-${name}` : undefined,
  });

  return (
    <section
      id="contacto"
      className={`${sectionStyles.section} ${sectionStyles.green}`}
      aria-labelledby="contacto-titulo"
    >
      <div className={sectionStyles.container}>
        <div className={styles.layout}>
          <Reveal>
            <p className={styles.eyebrow}>{cierre.eyebrow}</p>
            <h2 id="contacto-titulo" className={styles.titulo}>
              {cierre.titulo}
            </h2>
            <p className={styles.texto}>{cierre.texto}</p>

            <ul className={styles.bullets}>
              {cierre.bullets.map((b) => (
                <li key={b} className={styles.bullet}>
                  <span className={styles.bulletIcono}>
                    <IconCheck width={18} height={18} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <div className={styles.directo}>
              <a className={styles.enlace} href={config.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <IconWhatsapp width={18} height={18} />
                Escribinos por WhatsApp
              </a>
              <a className={styles.enlace} href={`mailto:${config.contactEmail}`}>
                <IconMail width={18} height={18} />
                {config.contactEmail}
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className={styles.card}>
              {estado === 'ok' ? (
                <div className={styles.exito} role="status">
                  <span className={styles.exitoIcono}>
                    <IconCheck width={28} height={28} />
                  </span>
                  <h3 className={styles.exitoTitulo}>Listo, {values.nombre.split(' ')[0]}</h3>
                  <p className={styles.exitoTexto}>
                    Te escribimos en las próximas 48 horas para coordinar el relevamiento. Si es
                    urgente, mandanos un WhatsApp y lo arreglamos hoy.
                  </p>
                  <Button href={config.whatsappUrl} variant="secondary">
                    <IconWhatsapp width={18} height={18} />
                    Ir a WhatsApp
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate>
                  <h3 className={styles.cardTitulo}>Pedí tu relevamiento</h3>
                  <p className={styles.cardSub}>
                    Contanos dónde está el campo y qué te está costando más. Sin compromiso.
                  </p>

                  <div className={styles.campos}>
                    <div className={styles.campo}>
                      <label className={styles.label} htmlFor="campo-nombre">
                        Nombre
                      </label>
                      <input
                        className={`${styles.input} ${errors.nombre ? styles.inputError : ''}`}
                        type="text"
                        autoComplete="name"
                        placeholder="Juan Pérez"
                        {...campoProps('nombre')}
                      />
                      {errors.nombre && (
                        <span className={styles.error} id="error-nombre">
                          {errors.nombre}
                        </span>
                      )}
                    </div>

                    <div className={styles.campo}>
                      <label className={styles.label} htmlFor="campo-establecimiento">
                        Establecimiento <span className={styles.opcional}>(opcional)</span>
                      </label>
                      <input
                        className={styles.input}
                        type="text"
                        placeholder="La Fortuna, Cerro Largo"
                        {...campoProps('establecimiento')}
                      />
                    </div>

                    <div className={styles.campo}>
                      <label className={styles.label} htmlFor="campo-email">
                        Mail
                      </label>
                      <input
                        className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                        type="email"
                        autoComplete="email"
                        placeholder="juan@campo.com.uy"
                        {...campoProps('email')}
                      />
                      {errors.email && (
                        <span className={styles.error} id="error-email">
                          {errors.email}
                        </span>
                      )}
                    </div>

                    <div className={styles.campo}>
                      <label className={styles.label} htmlFor="campo-telefono">
                        Teléfono
                      </label>
                      <input
                        className={`${styles.input} ${errors.telefono ? styles.inputError : ''}`}
                        type="tel"
                        autoComplete="tel"
                        placeholder="099 123 456"
                        {...campoProps('telefono')}
                      />
                      {errors.telefono && (
                        <span className={styles.error} id="error-telefono">
                          {errors.telefono}
                        </span>
                      )}
                    </div>

                    <div className={`${styles.campo} ${styles.campoAncho}`}>
                      <label className={styles.label} htmlFor="campo-hectareas">
                        Tamaño del campo
                      </label>
                      <select
                        className={`${styles.select} ${errors.hectareas ? styles.inputError : ''}`}
                        {...campoProps('hectareas')}
                      >
                        <option value="">Elegí una opción</option>
                        {opcionesHectareas.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                      {errors.hectareas && (
                        <span className={styles.error} id="error-hectareas">
                          {errors.hectareas}
                        </span>
                      )}
                    </div>

                    <div className={`${styles.campo} ${styles.campoAncho}`}>
                      <label className={styles.label} htmlFor="campo-mensaje">
                        ¿Qué te está costando más hoy?{' '}
                        <span className={styles.opcional}>(opcional)</span>
                      </label>
                      <textarea
                        className={`${styles.textarea} ${errors.mensaje ? styles.inputError : ''}`}
                        rows={4}
                        placeholder="Se me cortó el boyero tres veces este mes y me enteré tarde…"
                        {...campoProps('mensaje')}
                      />
                      {errors.mensaje && (
                        <span className={styles.error} id="error-mensaje">
                          {errors.mensaje}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className={styles.pie}>
                    <Button type="submit" size="lg" block disabled={estado === 'enviando'}>
                      {estado === 'enviando' ? 'Enviando…' : 'Quiero el relevamiento'}
                    </Button>
                    <p className={styles.legal}>
                      Usamos tus datos solo para contactarte por Argos. No los compartimos con
                      nadie.
                    </p>
                  </div>

                  {estado === 'error' && (
                    <p className={`${styles.aviso} ${styles.avisoError}`} role="alert">
                      No pudimos enviar el formulario. Probá de nuevo o escribinos directo por
                      WhatsApp.
                    </p>
                  )}

                  {isDemoMode && (
                    <p className={`${styles.aviso} ${styles.avisoDemo}`}>
                      <strong>Modo demo:</strong> todavía no hay endpoint configurado, así que el
                      formulario valida los datos pero no los envía. Definí{' '}
                      <code>VITE_LEADS_ENDPOINT</code> en el archivo <code>.env</code> para
                      activarlo.
                    </p>
                  )}
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
