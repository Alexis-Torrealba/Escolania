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

// TODO(contenido): `tagline` y `description` son borradores; WordPress no tenía texto para los niveles.
export const levels: {
  slug: string;
  title: string;
  grades: string;
  tagline: string;
  image: ImageMetadata;
  imageAlt: string;
}[] = [
  {
    slug: 'inicial',
    title: 'Educación Inicial',
    grades: 'Preescolar · 1.er y 2.º nivel',
    tagline: 'Jugar, descubrir y crecer',
    image: inicial,
    imageAlt: 'Niños de preescolar jugando en el patio de la Escolanía',
  },
  {
    slug: 'basica',
    title: 'Educación Básica',
    grades: '1.º a 6.º grado',
    tagline: 'Bases sólidas para la vida',
    image: basica,
    imageAlt: 'Estudiantes de primaria con sus maestras',
  },
  {
    slug: 'media-general',
    title: 'Media General',
    grades: '1.º a 5.º año',
    tagline: 'Preparados para el futuro',
    image: mediaGeneral,
    imageAlt: 'Estudiantes de bachillerato con el uniforme de la Escolanía',
  },
];
