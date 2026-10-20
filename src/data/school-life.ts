// Contenido de «Vida escolar»: Bienestar estudiantil e Infraestructura.
// Fuente: páginas «¿Qué es? Bienestar», «Atención Médica» e «Infraestructura» de WordPress
// (backup 2026-10-18) y el volante de servicios de Bienestar (2020).
import type { ImageMetadata } from 'astro';

/* ------------------------------------------------------------------
   Bienestar estudiantil
   ------------------------------------------------------------------ */
export type WellbeingIcon = 'medical' | 'dental' | 'psychology' | 'social' | 'guidance' | 'tutoring';

export const wellbeing = {
  email: 'bienestarestudiantil.escolania@gmail.com',
  purpose:
    'Velamos por el bienestar de cada estudiante: detectamos las situaciones que repercuten de forma negativa en su desempeño escolar y contribuimos a que todos, sin importar su entorno sociofamiliar, tengan las mismas oportunidades educativas.',
  purposeExtra:
    'Brindamos asesoramiento a los estudiantes y a toda la comunidad educativa para fortalecer un desarrollo armónico, en un ambiente de respeto, honestidad y responsabilidad que los forme en valores de convivencia y participación activa en la sociedad.',
  duties: [
    'Promover y defender los derechos de los estudiantes dentro y fuera de la institución.',
    'Mediar y conciliar ante conflictos entre cualquier miembro de la comunidad educativa y los estudiantes.',
    'Formar a los estudiantes como personas íntegras y útiles a la sociedad.',
    'Orientar a los estudiantes en el respeto a los valores institucionales.',
  ],
};

// TODO(contenido): los servicios salen del volante de 2020 y solo el médico tenía texto propio.
// Confirmar cuáles siguen activos y revisar las descripciones (borradores).
export const wellbeingServices: { icon: WellbeingIcon; title: string; text: string; email?: string }[] = [
  {
    icon: 'medical',
    title: 'Servicio médico',
    text: 'Un médico atiende durante el horario escolar los posibles accidentes e incidencias, y realiza un reconocimiento anual a cada estudiante para prevenir y detectar a tiempo cualquier alteración, sin costo adicional.',
    email: 'serviciomedico.escolania@gmail.com',
  },
  {
    icon: 'dental',
    title: 'Servicio odontológico',
    text: 'Orientación y prevención en salud bucal para nuestros escolanos.',
  },
  {
    icon: 'psychology',
    title: 'Servicio psicológico',
    text: 'Acompañamiento emocional y psicopedagógico a estudiantes y familias.',
  },
  {
    icon: 'social',
    title: 'Trabajo social',
    text: 'Atención a las situaciones sociofamiliares que afectan la vida escolar del estudiante.',
  },
  {
    icon: 'guidance',
    title: 'Orientación académica',
    text: 'Guía a los estudiantes en sus decisiones académicas y en la elección de su futuro profesional.',
  },
  {
    icon: 'tutoring',
    title: 'Asesoría académica',
    text: 'Apoyo a los estudiantes con dificultades de aprendizaje o de rendimiento escolar.',
  },
];

/* ------------------------------------------------------------------
   Infraestructura
   TODO(contenido): sin fotos por ahora; la institución enviará las definitivas.
   Al llegar, añadir `image` y `alt` a cada espacio (la página muestra un marco mientras tanto).
   ------------------------------------------------------------------ */
export const facilities: { title: string; text: string; image?: ImageMetadata; alt?: string }[] = [
  {
    title: 'Nuestra sede',
    text: 'En la avenida principal de Guaracarumbo, junto a la Parroquia Nuestra Señora de Coromoto.',
  },
  {
    title: 'Patio central',
    text: 'El corazón de la Escolanía: aquí se reúnen los escolanos en actos, recreos y celebraciones.',
  },
  {
    title: 'Aulas',
    text: 'Espacios para cada grado y año, de Preescolar a 5.º año de Media General.',
  },
  {
    title: 'Áreas techadas',
    text: 'Pasillos y zonas cubiertas que protegen del sol y de la lluvia en los recorridos diarios.',
  },
  {
    title: 'Patio recreativo',
    text: 'Un espacio abierto para el deporte, el juego y la educación física.',
  },
  {
    title: 'Baños renovados',
    text: 'Sanitarios remodelados para el cuidado y la higiene de nuestros estudiantes.',
  },
];
