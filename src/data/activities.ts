// Actividades extracátedra (edades mínimas tomadas de la página "Actividades" de WordPress).
import type { ImageMetadata } from 'astro';
import futbol from '../assets/actividades/futbol.jpg';
import kickingball from '../assets/actividades/kickingball.jpg';
import voleibol from '../assets/actividades/voleibol.jpg';
import modelar from '../assets/actividades/modelar.jpg';
import bailar from '../assets/actividades/bailar.jpg';
import cantar from '../assets/actividades/cantar.jpg';
import instrumentos from '../assets/actividades/instrumentos-musicales.jpg';
import teatro from '../assets/actividades/expresiones-teatrales.jpg';
import ritmo from '../assets/actividades/llevar-el-ritmo.jpg';

export interface Activity {
  slug: string;
  name: string;
  category: 'Deporte' | 'Arte';
  minAge: number;
  image: ImageMetadata;
  featured?: boolean;
}

export const activities: Activity[] = [
  { slug: 'futbol', name: 'Fútbol', category: 'Deporte', minAge: 7, image: futbol, featured: true },
  { slug: 'kickingball', name: 'Kickingball', category: 'Deporte', minAge: 8, image: kickingball },
  { slug: 'voleibol', name: 'Voleibol', category: 'Deporte', minAge: 11, image: voleibol },
  { slug: 'modelar', name: 'Modelaje', category: 'Arte', minAge: 4, image: modelar },
  { slug: 'bailar', name: 'Danza', category: 'Arte', minAge: 5, image: bailar, featured: true },
  { slug: 'cantar', name: 'Canto', category: 'Arte', minAge: 7, image: cantar },
  {
    slug: 'instrumentos-musicales',
    name: 'Instrumentos musicales',
    category: 'Arte',
    minAge: 6,
    image: instrumentos,
    featured: true,
  },
  { slug: 'expresiones-teatrales', name: 'Teatro', category: 'Arte', minAge: 8, image: teatro, featured: true },
  { slug: 'llevar-el-ritmo', name: 'Ritmo y percusión', category: 'Arte', minAge: 4, image: ritmo },
];
