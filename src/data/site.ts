// Datos globales del sitio. Fuente: footer del Theme Builder de Divi (backup 2026-10-18).

export const site = {
  name: 'U.E.P. Escolanía',
  fullName: 'U.E.P. Escolanía «Niños Cantores de La Guaira»',
  tagline: '¡A la vanguardia educativa!',
  motto: 'Encomendamos nuestras acciones y la Escolanía a nuestra madre María',
  description:
    'Unidad Educativa Privada Escolanía «Niños Cantores de La Guaira»: educación inicial, básica y media general fundamentada en cuatro columnas: moral y religiosa, intelectual, musical y físico-deportiva.',
  url: 'https://escolanianclg.com',
} as const;

export const contact = {
  address: 'Urb. Armando Reverón, Guaracarumbo, Av. Principal, Local Escolanía',
  phone: '(0212) 352-6068',
  phoneHref: 'tel:+582123526068',
  // Administración y reporte de pagos (página «Administración» de WordPress)
  email: 'ad.pagos.escolania@gmail.com',
  // Postulaciones de docentes (página «Recursos Humanos» de WordPress)
  hrEmail: 'rrhh.escolania@gmail.com',
  hours: 'Lunes a viernes · 8:30 a 12:30 m. / 2:30 a 4:30 p. m.',
} as const;

export const links = {
  // Sistema externo de inscripciones y representantes
  portal: 'https://escolania.edueyss.com/repre/login/',
  facebook: 'https://www.facebook.com/Uepescolania/',
  instagram: 'https://www.instagram.com/uepescolania/',
  youtube: 'https://www.youtube.com/channel/UC5PrxrdNZ-eIEBlJEFFxDcQ',
  // TODO(contenido): sustituir por el enlace exacto de la ficha en Google Maps
  maps: 'https://www.google.com/maps/search/?api=1&query=U.E.P.+Escolan%C3%ADa+Ni%C3%B1os+Cantores+de+La+Guaira+Guaracarumbo',
} as const;

// TODO(stats): reemplazar por cifras reales cuando Alexis las tenga.
// `value: null` → el componente muestra un placeholder en vez de inventar un número.
export const stats: { value: string | null; label: string }[] = [
  // Fundada en septiembre de 1991 (página Historia); se recalcula en cada build
  { value: String(new Date().getFullYear() - 1991), label: 'Años de trayectoria' },
  { value: null, label: 'Estudiantes' },
  { value: null, label: 'Docentes' },
  { value: '3', label: 'Niveles educativos' },
];
