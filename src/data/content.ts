/**
 * Todo el texto de la landing en un solo lugar.
 * Cambiar una linea aca no obliga a tocar ningun componente.
 */

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'El problema', href: '#problema' },
  { label: 'La caravana', href: '#caravana' },
  { label: 'Producto', href: '#producto' },
  { label: 'Alertas', href: '#alertas' },
  { label: 'Cómo se contrata', href: '#modelo' },
  { label: 'Tecnología', href: '#tecnologia' },
];

/* ---------------------------------------------------------------- Hero -- */

export const hero = {
  eyebrow: 'Ganadería conectada · Uruguay',
  title: 'Sabé lo que pasa en el campo sin tener que ir a mirar.',
  lead:
    'Argos convierte a la estancia en un establecimiento conectado: instrumenta el campo y el rodeo con una red propia, y te entrega un tablero en tiempo real y un dashboard de análisis para decidir sobre pasto, animales y alambrados.',
  primaryCta: 'Agendar un relevamiento',
  secondaryCta: 'Ver cómo funciona',
  note: 'No vendemos un dispositivo. Vendemos saber lo que pasa en el campo.',
} as const;

export interface HeroStat {
  value: string;
  label: string;
}

export const heroStats: HeroStat[] = [
  { value: '100%', label: 'del rodeo bovino uruguayo ya lleva caravana electrónica' },
  { value: '2006', label: 'año desde el que la trazabilidad individual es obligatoria' },
  { value: '1', label: 'gateway LoRaWAN cubre buena parte del establecimiento' },
];

/* ------------------------------------------------------------ Problema -- */

export interface Problema {
  titulo: string;
  detalle: string;
}

export const problemas: Problema[] = [
  {
    titulo: 'Recorrés unas pocas veces por semana',
    detalle: 'Y en cada recorrida ves una parte del campo. El resto es memoria y suposición.',
  },
  {
    titulo: 'El animal enfermo aparece tarde',
    detalle:
      'Empantanado, accidentado o con un parto complicado: te enterás días después, cuando ya no hay mucho para hacer.',
  },
  {
    titulo: 'No sabés qué potrero se comió de más',
    detalle: 'Unos quedan pelados y otros desaprovechados, y la rotación se decide de memoria.',
  },
  {
    titulo: 'El boyero se corta en el fondo del campo',
    detalle: 'Y lo descubrís cuando la hacienda ya se pasó al potrero de al lado.',
  },
  {
    titulo: 'Cada vez conseguís menos gente',
    detalle:
      'La mano de obra dispuesta a trabajar en el campo escasea, y el que está no alcanza a cubrir todo.',
  },
];

export const problemaCierre =
  'Hoy todo esto se resuelve con recorrida, memoria y WhatsApp. Funciona, pero es caro, lento y depende de una sola persona.';

/* ------------------------------------------------------------ Caravana -- */

export const caravana = {
  eyebrow: 'La jugada clave',
  titulo:
    'No le agregamos un objeto nuevo al animal. Le agregamos inteligencia a uno que ya está ahí.',
  parrafos: [
    'Uruguay tiene desde 2006 trazabilidad individual obligatoria: el 100% del rodeo bovino ya lleva una caravana electrónica. Ese objeto ya existe, ya está en la oreja de cada animal, el productor ya lo acepta y ya lo paga.',
    'La caravana Argos hace lo mismo que la actual —identificar al animal— y además registra dónde estuvo, cuánto se movió y cuánto pastoreó. Cero fricción de adopción: no hay que convencer a nadie de ponerle algo raro a la vaca.',
  ],
  institucional:
    'Esto nos alinea con hacia dónde va el país: el MGAP, INIA, INAC y ANII lanzaron el Desafío Trazabilidad Animal justamente para incorporar georreferenciación y detección de movimiento a la caravana. Argos no rema contra la corriente institucional: rema a favor.',
  organismos: ['MGAP', 'INIA', 'INAC', 'ANII'],
} as const;

/* ------------------------------------------------------------ Producto -- */

export interface Capa {
  numero: string;
  nombre: string;
  titulo: string;
  descripcion: string;
  items: string[];
  nota?: string;
}

export const capas: Capa[] = [
  {
    numero: '01',
    nombre: 'El campo instrumentado',
    titulo: 'Nodos fijos, solares, en los puntos que importan',
    descripcion:
      'Sensores autónomos en aguadas, boyeros, tranqueras y una estación meteorológica. Se instalan una vez y avisan solos.',
    items: [
      'Aguada — nivel bajo, bomba parada',
      'Boyero — caída de tensión, línea cortada, encendido y apagado remoto por sector',
      'Tranqueras y portones — apertura no prevista',
      'Estación meteorológica — lluvia, temperatura, viento',
    ],
    nota:
      'Esta capa se justifica sola: son problemas concretos y diarios. Y es la que sostiene la red que después usan las caravanas.',
  },
  {
    numero: '02',
    nombre: 'La caravana inteligente',
    titulo: 'El animal deja de ser un número y pasa a ser un dato',
    descripcion:
      'En cada animal, o en la parte del rodeo que elijas instrumentar: vacas de cría, toros o animales de alto valor.',
    items: [
      'Posición del animal dentro del establecimiento',
      'Tiempo de pastoreo, rumia y descanso',
      'Distancia recorrida por día',
      'Alerta de remoción de caravana',
    ],
  },
  {
    numero: '03',
    nombre: 'La plataforma',
    titulo: 'Dos salidas, para dos momentos distintos del día',
    descripcion:
      'Una para decidir ahora, a caballo o en la camioneta. Otra para sentarse a mirar el mes y corregir el rumbo.',
    items: [
      'Tablero operativo — mapa del establecimiento con potreros, lotes y alertas activas, desde el celular',
      'Dashboard analítico — mapas de calor de uso del pasto por potrero',
      'Evolución de la actividad del rodeo e historial de alertas',
      'Sugerencias de rotación',
    ],
  },
];

/* ------------------------------------------------------------- Alertas -- */

export type AlertaTono = 'critica' | 'atencion';

export interface Alerta {
  tono: AlertaTono;
  alerta: string;
  significa: string;
  accion: string;
}

export const alertas: Alerta[] = [
  {
    tono: 'critica',
    alerta: 'Animal fuera del potrero asignado',
    significa: 'Alambrado roto, tranquera abierta o faltante',
    accion: 'Vas directo al punto, no recorrés todo el campo',
  },
  {
    tono: 'critica',
    alerta: 'Movimiento por debajo de lo normal',
    significa: 'Animal enfermo, empantanado, accidentado o parto complicado',
    accion: 'Lo encontrás el mismo día, no a la semana',
  },
  {
    tono: 'atencion',
    alerta: 'Caída de tensión en el boyero',
    significa: 'Se cortó la línea',
    accion: 'Reparás antes de que se pase la hacienda',
  },
  {
    tono: 'critica',
    alerta: 'Caravana removida',
    significa: 'Posible abigeato',
    accion: 'Denunciás con hora y coordenada',
  },
  {
    tono: 'atencion',
    alerta: 'Aguada baja',
    significa: 'Riesgo sanitario y rodeo agolpado',
    accion: 'Mandás a revisar la bomba',
  },
];

/* ------------------------------------------------------------- Cliente -- */

export interface Cliente {
  tag: string;
  titulo: string;
  descripcion: string;
}

export const clientes: Cliente[] = [
  {
    tag: 'Cliente principal',
    titulo: 'Establecimientos ganaderos medianos y grandes',
    descripcion:
      'Desde unas 500 hectáreas, con administrador o capataz, donde el costo de recorrer ya es una línea real del presupuesto.',
  },
  {
    tag: 'Segmento secundario',
    titulo: 'Cabañas de genética',
    descripcion: 'Animales de altísimo valor unitario, donde perder uno solo cambia el año.',
  },
  {
    tag: 'Segmento secundario',
    titulo: 'Quien administra hacienda de terceros',
    descripcion: 'Necesita probar dónde está cada animal y que existe. Argos le da la evidencia.',
  },
];

export const clienteNota = {
  titulo: 'El producto se gana o se pierde con el capataz',
  texto:
    'Decide el dueño o el administrador; usa el capataz todos los días. Si el tablero no le sirve al que está en el campo, deja de mirarlo y la suscripción se cae al año. Por eso diseñamos para él primero.',
} as const;

/* -------------------------------------------------------------- Modelo -- */

export interface FuenteIngreso {
  nombre: string;
  tipo: string;
  que: string;
  rol: string;
  destacada?: boolean;
}

export const fuentes: FuenteIngreso[] = [
  {
    nombre: 'Relevamiento inicial',
    tipo: 'Pago único',
    que:
      'Visita al campo, mapeo de potreros, aguadas y alambrados, diseño del despliegue e instalación.',
    rol: 'Financia el arranque y es la personalización real del sistema a tu campo.',
  },
  {
    nombre: 'Hardware',
    tipo: 'Venta o comodato',
    que: 'Nodos fijos, gateway y caravanas.',
    rol: 'Se vende cerca del costo. No es donde está el negocio.',
  },
  {
    nombre: 'Suscripción mensual',
    tipo: 'Por establecimiento + por animal',
    que: 'Plataforma, alertas, soporte y actualizaciones.',
    rol: 'Ingreso recurrente: mientras el sistema te sirva, seguimos.',
    destacada: true,
  },
];

export const reglaDeOro = {
  titulo: 'Regla de oro del precio',
  texto:
    'La cuenta te tiene que cerrar con dos animales salvados por año. Si hay que explicarte una planilla de tres pestañas para justificar el gasto, el precio está mal.',
} as const;

export const porQueDistinta = {
  titulo: 'Por qué cada estancia se releva aparte',
  texto:
    'El despliegue depende de la topografía, de dónde están el monte y las quebradas, de cuántos potreros hay y de cuánta señal celular llega. Eso no se resuelve con un producto de góndola: se resuelve con un técnico que va, mira y diseña.',
} as const;

/* ---------------------------------------------------------- Tecnologia -- */

export interface DecisionTecnica {
  titulo: string;
  texto: string;
}

export const decisiones: DecisionTecnica[] = [
  {
    titulo: 'LoRaWAN, no celular',
    texto:
      'Un gateway en punto alto cubre buena parte del establecimiento, con muy bajo consumo y sin depender de la cobertura de antenas, que en el campo uruguayo es irregular. Costo por dato: cero.',
  },
  {
    titulo: 'La red se paga con los nodos fijos',
    texto:
      'Se instala una vez y después soporta todas las caravanas que quieras sumar, sin infraestructura adicional.',
  },
  {
    titulo: 'Alertas por reglas primero, modelos después',
    texto:
      'Las primeras alertas salen de umbrales simples y comprensibles: este animal se movió menos de X en 12 horas. Recién con meses de datos reales tiene sentido entrenar un modelo. Prometer inteligencia artificial sin datos es humo.',
  },
  {
    titulo: 'Sobre la trazabilidad, no en paralelo',
    texto: 'La caravana Argos mantiene la identificación oficial y suma sensores encima.',
  },
];

export interface NodoFlujo {
  nombre: string;
  detalle: string;
}

export const flujo: NodoFlujo[] = [
  { nombre: 'Caravana con chip', detalle: 'posición y actividad' },
  { nombre: 'Nodos fijos', detalle: 'aguada, boyero, tranquera' },
  { nombre: 'Gateway LoRaWAN', detalle: 'en el establecimiento' },
  { nombre: 'Backend en la nube', detalle: 'ingesta y reglas de alerta' },
  { nombre: 'Tablero y dashboard', detalle: 'celular y web' },
];

/* -------------------------------------------------------------- Piloto -- */

export interface PasoPiloto {
  numero: string;
  titulo: string;
  texto: string;
}

export const pasosPiloto: PasoPiloto[] = [
  {
    numero: '1',
    titulo: 'Relevamiento del campo',
    texto:
      'Vamos, recorremos y mapeamos potreros, aguadas y alambrados. Salimos con un diseño de despliegue hecho para tu establecimiento, no para un campo promedio.',
  },
  {
    numero: '2',
    titulo: 'Instalación de la red',
    texto:
      'Gateway en punto alto y nodos fijos en los puntos críticos. Desde el primer día tenés alertas de aguada, boyero y tranquera.',
  },
  {
    numero: '3',
    titulo: 'Caravanas sobre el rodeo que elijas',
    texto:
      'Empezamos por donde más duele perder un animal: vacas de cría, toros, genética. Se suma el resto cuando la cuenta te cierre.',
  },
  {
    numero: '4',
    titulo: 'Seis meses con métricas acordadas',
    texto:
      'Animales encontrados a tiempo, horas de recorrida ahorradas, cortes de boyero detectados. Los números se fijan antes de arrancar, no después.',
  },
];

/* ------------------------------------------------------------- Riesgos -- */

export interface Riesgo {
  pregunta: string;
  respuesta: string;
}

export const riesgos: Riesgo[] = [
  {
    pregunta: '¿Cuánto dura la batería de la caravana?',
    respuesta:
      'Es la restricción física más dura del proyecto y no la escondemos: reportar posición seguido consume mucho para un dispositivo tan chico. Por eso la frecuencia de reporte es ajustable —cada varias horas por defecto, seguido solo ante una alerta— y no todo el rodeo necesita llevar chip. Se puede empezar por vacas de cría y toros.',
  },
  {
    pregunta: '¿No me va a llenar el celular de avisos?',
    respuesta:
      'Si el capataz recibe 40 avisos por día, silencia la app y el sistema muere. Preferimos pocas alertas bien calibradas, con validación humana durante el piloto: cada alerta se contrasta con lo que pasó de verdad en el campo antes de dejarla suelta.',
  },
  {
    pregunta: '¿Y si mañana la caravana con GPS se vuelve un estándar nacional?',
    respuesta:
      'Sería la mejor noticia posible. Si el sensor lo pone el país, Argos se queda con la parte que más valor tiene: la plataforma, las reglas de alerta y el servicio de relevamiento e instalación.',
  },
  {
    pregunta: '¿Necesito señal de celular en todo el campo?',
    respuesta:
      'No. Esa es justamente la razón de usar LoRaWAN: el gateway junta los datos dentro del establecimiento y solo él necesita salida a internet. La cobertura irregular del campo uruguayo deja de ser un problema.',
  },
  {
    pregunta: '¿Pierdo la trazabilidad oficial si uso la caravana Argos?',
    respuesta:
      'No. La caravana Argos mantiene la identificación oficial del animal y suma sensores encima. Va sobre el sistema de trazabilidad, no en paralelo a él.',
  },
];

/* -------------------------------------------------------------- Cierre -- */

export const cierre = {
  eyebrow: 'Campo piloto',
  titulo: 'Estamos eligiendo los primeros campos',
  texto:
    'Buscamos establecimientos dispuestos a probar el sistema seis meses con métricas acordadas de antemano, a cambio de condiciones de arranque y de poder contar el caso. Si tenés un campo desde 500 hectáreas, hablemos.',
  bullets: [
    'Relevamiento sin compromiso',
    'Condiciones especiales para los primeros campos',
    'Métricas acordadas antes de instalar nada',
  ],
} as const;
