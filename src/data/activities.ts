// Actividades extracátedra: solo Ajedrez y Danza (decisión de la institución, oct. 2026).
// Danza: texto de su página en WordPress (backup 2026-10-18). Ajedrez: no existía en WordPress.
import type { ImageMetadata } from 'astro';

export type ActivityIcon = 'chess' | 'dance';

/** Un grupo de la actividad: edad mínima y quién lo dirige */
export interface ActivityGroup {
  fromAge: number;
  teachers: string[];
}

export interface Activity {
  slug: string;
  name: string;
  /** Frase corta bajo el nombre */
  tagline: string;
  icon: ActivityIcon;
  /** Edad mínima del grupo más pequeño (se calcula a partir de `groups`) */
  minAge?: number;
  /** Vacío mientras no tengamos edades ni profesores confirmados */
  groups: ActivityGroup[];
  description: string;
  learn: string[];
  /** Dato extra que se muestra destacado */
  note?: string;
  /** Formulario de inscripción; sin él, el botón lleva a Contacto */
  signupUrl?: string;
  /** Sin foto se muestra un panel con el ícono de la actividad */
  image?: ImageMetadata;
}

const form = (id: string) => `https://docs.google.com/forms/d/e/${id}/viewform`;

const data: Omit<Activity, 'minAge'>[] = [
  {
    // TODO(contenido): todo Ajedrez es borrador. Faltan foto, edades, profesor y formulario de inscripción.
    slug: 'ajedrez',
    name: 'Ajedrez',
    tagline: 'Estrategia, concentración y paciencia',
    icon: 'chess',
    groups: [],
    description:
      'El ajedrez es un juego-ciencia que entrena la mente: obliga a pensar antes de actuar, a anticipar las consecuencias de cada decisión y a mantener la concentración durante toda la partida. Nuestros escolanos fortalecen la memoria, el razonamiento lógico y la paciencia, y aprenden a ganar y a perder con respeto por el rival.',
    learn: [
      'Movimiento de las piezas y reglas',
      'Aperturas básicas',
      'Táctica y combinaciones',
      'Finales',
      'Partidas y torneos',
    ],
  },
  {
    // TODO(contenido): profesora y formulario son de 2022; confirmar que sigan vigentes.
    slug: 'danza',
    name: 'Danza',
    tagline: 'Arte, ritmo y expresión',
    icon: 'dance',
    groups: [{ fromAge: 5, teachers: ['Ramona Linares'] }],
    description:
      'La danza une movimiento corporal, ritmo, música y expresión. En nuestra institución tiene validez pedagógica: fomenta el sentido artístico mediante la creación de coreografías propias y la apreciación de otras. Su práctica favorece la socialización, el conocimiento cultural y la aceptación de la realidad pluricultural de nuestra sociedad.',
    learn: ['Danza tradicional', 'Danza nacionalista', 'Danza contemporánea', 'Danza moderna'],
    signupUrl: form('1FAIpQLSeyaqyqUPRLJsoGgEdVwZiJki4MUMM7sp9zHFnTvbL7fNmt_A'),
  },
];

export const activities: Activity[] = data.map((a) => ({
  ...a,
  minAge: a.groups.length ? Math.min(...a.groups.map((g) => g.fromAge)) : undefined,
}));
