import type { ImageMetadata } from 'astro';
import inicial from '../assets/niveles/inicial.jpg';
import basica from '../assets/niveles/basica.jpg';
import mediaGeneral from '../assets/niveles/media-general.jpg';

export type PillarIcon = 'church' | 'book' | 'music' | 'sport';

// Las cuatro columnas de nuestra educación (texto del Home de WordPress, resumido).
export const pillars: { title: string; short: string; summary: string; icon: PillarIcon }[] = [
  {
    title: 'Moral y religiosa',
    short: 'Fe',
    icon: 'church',
    summary:
      'Se esmera en hacer del niño un verdadero cristiano mediante la oración, los sacramentos, las buenas obras y el estudio serio de la doctrina católica.',
  },
  {
    title: 'Intelectual',
    short: 'Saber',
    icon: 'book',
    summary:
      'Perfecciona y dirige las facultades cognoscitivas: ejercita la memoria, la imaginación y la razón, la atención y la observación.',
  },
  {
    title: 'Musical',
    short: 'Música',
    icon: 'music',
    summary:
      'La enseñanza del canto y la teoría musical educa el oído y la voz, y nos hace sensibles a los nobles gozos del alma y del espíritu.',
  },
  {
    title: 'Físico-deportiva',
    short: 'Deporte',
    icon: 'sport',
    summary:
      'Vela por el desarrollo ordenado del cuerpo mediante hábitos de higiene, ejercicios y deportes realizados con seriedad.',
  },
];

export interface Level {
  slug: string;
  title: string;
  grades: string;
  tagline: string;
  description: string;
  /** Grados o años que componen el nivel, en orden */
  stages: string[];
  /** Título de la lista de materias (cambia según el nivel) */
  subjectsLabel: string;
  subjects: string[];
  image: ImageMetadata;
  imageAlt: string;
}

// TODO(contenido): `tagline` y `description` son borradores; WordPress no tenía texto para los niveles.
// `stages` y `subjects` salen de las antiguas páginas de aulas virtuales (Classroom 2022).
export const levels: Level[] = [
  {
    slug: 'inicial',
    title: 'Educación Inicial',
    grades: 'Preescolar · 1.er y 2.º nivel',
    tagline: 'Jugar, descubrir y crecer',
    description:
      'Los primeros pasos de nuestros escolanos. A través del juego, la música y la oración, los más pequeños descubren el mundo, aprenden a convivir y desarrollan sus primeras destrezas en un ambiente cálido y seguro.',
    stages: ['Preescolar 1.er nivel', 'Preescolar 2.º nivel'],
    subjectsLabel: 'Áreas complementarias',
    subjects: ['Inglés', 'Manualidades', 'Religión', 'Educación Física'],
    image: inicial,
    imageAlt: 'Niños de preescolar jugando en el patio de la Escolanía',
  },
  {
    slug: 'basica',
    title: 'Educación Básica',
    grades: '1.º a 6.º grado',
    tagline: 'Bases sólidas para la vida',
    description:
      'De 1.º a 6.º grado consolidamos la lectura, la escritura y el razonamiento matemático, siempre de la mano de nuestras cuatro columnas: la fe, el saber, la música y el deporte.',
    stages: ['1.er grado', '2.º grado', '3.er grado', '4.º grado', '5.º grado', '6.º grado'],
    subjectsLabel: 'Áreas complementarias',
    subjects: ['Inglés', 'Manualidades', 'Religión', 'Educación Física'],
    image: basica,
    imageAlt: 'Estudiantes de primaria con sus maestras',
  },
  {
    slug: 'media-general',
    title: 'Media General',
    grades: '1.º a 5.º año',
    tagline: 'Preparados para el futuro',
    description:
      'Del 1.º al 5.º año acompañamos a nuestros jóvenes en su formación académica y humana, preparándolos para la universidad y para la vida con criterio, valores y compromiso con su comunidad.',
    stages: ['1.er año', '2.º año', '3.er año', '4.º año', '5.º año'],
    subjectsLabel: 'Plan de estudio',
    subjects: [
      'Castellano',
      'Matemática',
      'Ciencias Naturales',
      'Geografía, Historia y Ciudadanía',
      'Inglés',
      'Arte y Patrimonio',
      'Orientación y Convivencia',
      'Grupos de Creación, Recreación y Producción',
      'Educación Religiosa Escolar',
      'Educación Física',
    ],
    image: mediaGeneral,
    imageAlt: 'Estudiantes de bachillerato con el uniforme de la Escolanía',
  },
];
