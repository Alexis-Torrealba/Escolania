// Arquitectura de navegación del sitio nuevo.
// Reorganiza las 38 páginas sueltas de WordPress en grupos con sentido.
import { links } from './site';

export interface NavLink {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
}

export interface NavGroup {
  label: string;
  children: NavLink[];
}

export type NavItem = NavLink | NavGroup;

export const isGroup = (item: NavItem): item is NavGroup => 'children' in item;

export const mainNav: NavItem[] = [
  { label: 'Inicio', href: '/' },
  {
    label: 'Nosotros',
    children: [
      { label: 'Historia', href: '/nosotros/historia', description: 'Nuestra trayectoria desde la fundación' },
      { label: 'Ideario', href: '/nosotros/ideario', description: 'Misión, visión y valores' },
      { label: 'Patronos', href: '/nosotros/patronos', description: 'Quienes inspiran nuestra obra' },
      { label: 'Organigrama', href: '/nosotros/organigrama', description: 'Cómo nos organizamos' },
      { label: 'Personal', href: '/nosotros/personal', description: 'Docentes y equipo administrativo' },
    ],
  },
  {
    label: 'Niveles',
    children: [
      { label: 'Educación Inicial', href: '/niveles/inicial', description: 'Los primeros pasos' },
      { label: 'Educación Básica', href: '/niveles/basica', description: 'Primaria de 1.º a 6.º grado' },
      { label: 'Media General', href: '/niveles/media-general', description: 'Bachillerato de 1.º a 5.º año' },
    ],
  },
  {
    label: 'Vida escolar',
    children: [
      { label: 'Extracátedras', href: '/actividades', description: 'Deporte, música, danza y teatro' },
      { label: 'Bienestar estudiantil', href: '/bienestar', description: 'Psicopedagogía, salud y labor social' },
      { label: 'Infraestructura', href: '/infraestructura', description: 'Nuestras instalaciones' },
      { label: 'La voz del escolano', href: '/la-voz-del-escolano', description: 'Noticias y vivencias' },
    ],
  },
  {
    label: 'Recursos',
    children: [
      { label: 'Horarios', href: '/horarios', description: 'Clases y extracátedras' },
      { label: 'Documentos', href: '/documentos', description: 'Acuerdos de convivencia y planillas' },
      { label: 'Portal de representantes', href: links.portal, description: 'Pagos, notas e inscripciones', external: true },
    ],
  },
  { label: 'Contacto', href: '/contacto' },
];
