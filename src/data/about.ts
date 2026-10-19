// Contenido de la sección «Nosotros». Fuente: páginas Historia, Ideario, Patronos y Organigrama
// de WordPress (backup 2026-10-18), con erratas corregidas y la historia reorganizada en hitos.
import type { ImageMetadata } from 'astro';
import coralPrimerosAnos from '../assets/nosotros/coral-primeros-anos.jpg';
import monsenor from '../assets/nosotros/monsenor-febres-cordero.jpg';
import primerasPromociones from '../assets/nosotros/primeras-promociones.jpg';
import coralPresentacion from '../assets/nosotros/coral-presentacion.jpg';
import concursoMariano from '../assets/nosotros/concurso-mariano-1993.jpg';
import santoDomingoSavio from '../assets/nosotros/santo-domingo-savio.jpg';
import hermanoMiguel from '../assets/nosotros/hermano-miguel.jpg';

export const foundingYear = 1991;
export const founder = 'Mons. Rafael María Febres-Cordero Briceño';

/* ------------------------------------------------------------------
   Equipo directivo (confirmado por la institución, oct. 2026)
   ------------------------------------------------------------------ */
export const leadership: { role: string; name: string }[] = [
  { role: 'Director General', name: 'Pbro. Lic. José Daniel Dallos' },
  { role: 'Director Administrativo', name: 'Lic. Félix Rausseo' },
  { role: 'Directora Académica', name: 'Lic. Marian Lourdes Araque Bolívar' },
];

/* ------------------------------------------------------------------
   Historia
   ------------------------------------------------------------------ */
export interface Photo {
  src: ImageMetadata;
  alt: string;
  caption?: string;
}

export const historyIntro = [
  `En ${foundingYear}, ${founder}, motivado por ese don que le caracteriza de estar siempre dispuesto a ayudar al prójimo, funda en Venezuela la primera Escolanía, aledaña a la Parroquia Nuestra Señora de Coromoto en Guaracarumbo.`,
  'En septiembre de ese año inicia sus actividades con Educación Preescolar en sus tres niveles y la primera etapa de Básica (1.º, 2.º y 3.er grado). Junto con el colegio nace también la Coral «Niños Cantores de La Guaira», que da nombre a la institución.',
];

export const milestones: { date: string; title: string; text: string; photo?: Photo }[] = [
  {
    date: 'Septiembre 1991',
    title: 'Nace la Escolanía',
    text: 'Comienza el año escolar 1991-1992 con Preescolar y la primera etapa de Básica, bajo la dirección general de Mons. Febres-Cordero. Se crean la Coral «Niños Cantores de La Guaira» y la Estudiantina, dirigida por la profesora Teresa Jaén.',
  },
  {
    date: 'Diciembre 1991',
    title: 'Primera presentación de la Coral',
    text: 'A dos meses del inicio, la Coral —33 alumnos preparados por el profesor Armando Tablante— canta en la Iglesia Nuestra Señora de Coromoto ante la admiración de los asistentes.',
    photo: {
      src: coralPrimerosAnos,
      alt: 'Niñas y niños de la Coral cantando junto a su director en los primeros años de la Escolanía',
      caption: 'La Coral en sus primeros años',
    },
  },
  {
    date: '1992',
    title: 'La Coral sale de la parroquia',
    text: 'El 9 de marzo se presenta en la Casa Guipuzcoana y el 21 de abril en la Escuela Naval de Venezuela, en su 181.º aniversario. Desde entonces son innumerables sus participaciones y reconocimientos.',
    photo: {
      src: coralPresentacion,
      alt: 'Presentación de la Coral con sus túnicas rojas y escolanos acompañados de guitarra',
      caption: 'Presentaciones de la Coral',
    },
  },
  {
    date: '11 de junio de 1992',
    title: 'Capellán de Honor de Su Santidad',
    text: 'Mons. Febres-Cordero es investido Capellán de Honor de Su Santidad Juan Pablo II, un día memorable para toda la Escolanía.',
  },
  {
    date: '1992-1993',
    title: 'Llega el bachillerato',
    text: 'Se abre una sección única de 7.º grado con 34 alumnos, el primer paso hacia la educación media.',
  },
  {
    date: '15 de junio de 1993',
    title: 'Primer Concurso Mariano',
    text: 'Se celebra en la Iglesia Nuestra Señora de Coromoto el Primer Concurso Mariano de la Escolanía. Ese año ingresa también el profesor Francisco Orlando Izaguirre, referencia de la formación moral y religiosa.',
    photo: {
      src: concursoMariano,
      alt: 'Invitación al Primer Concurso Mariano de la Escolanía, con la imagen de la Virgen y el Niño',
      caption: 'Invitación al Primer Concurso Mariano',
    },
  },
  {
    date: '1994-1995',
    title: 'Primera promoción de bachilleres',
    text: 'Con 14 escolanos en 5.º año, la Escolanía gradúa a su primera promoción. La Misa de Graduación, amenizada por la Coral, y el acto con togas y birretes marcan la formalidad que identificará a la institución.',
    photo: {
      src: primerasPromociones,
      alt: 'Grupo de jóvenes escolanos de las primeras promociones posando juntos',
      caption: 'Escolanos de las primeras promociones',
    },
  },
  {
    date: '2002',
    title: 'Prelado de Honor',
    text: 'El Vaticano designa a Mons. Febres-Cordero Prelado de Honor de Su Santidad. La investidura se entrega el 25 de septiembre, día de júbilo para la Escolanía.',
    photo: {
      src: monsenor,
      alt: 'Monseñor Rafael María Febres-Cordero con sotana violeta durante un acto solemne',
      caption: 'Mons. Rafael María Febres-Cordero, fundador',
    },
  },
];

export const directorsTimeline: { period: string; names: string[] }[] = [
  { period: '1991 – 2006', names: ['Mons. Rafael María Febres-Cordero', 'Sra. Teresa Velázquez (administración)'] },
  {
    period: '2006 – 2018',
    names: ['Padre Horacio Zúñiga', 'Prof. Yadira Ponce', 'Sra. Cira de Zúñiga (administración)'],
  },
  {
    period: '2018 – hoy',
    names: [
      'Pbro. José Daniel Dallos',
      'Prof. José Ramón Díaz y Lic. Marian Araque (dirección académica)',
      'Lic. Félix Rausseo (administración)',
    ],
  },
];

export const traditions: { date: string; title: string; text: string }[] = [
  {
    date: '9 de febrero',
    title: 'Día del Santo Hermano Miguel',
    text: 'Celebramos a nuestro copatrono y reconocemos al Docente Eficiente de la Escolanía.',
  },
  {
    date: '9 de marzo',
    title: 'Día de Santo Domingo Savio',
    text: 'En la Semana del Colegio se premian la pulcritud personal y del salón, su ambientación y el rendimiento escolar.',
  },
  {
    date: 'Primer viernes de mes',
    title: 'Santa Misa y Honor al Mérito',
    text: 'Los tres mejores promedios de cada sección recibían un botón con la efigie de Santo Domingo Savio.',
  },
];

export const historyClosing =
  'Mons. Febres-Cordero dejó una obra cimentada en columnas educativas y espirituales para hacer de los escolanos ciudadanos útiles a su entorno y a la comunidad nacional. Hoy, muchos de nuestros estudiantes son hijos de exalumnos: la familia escolana sigue creciendo bajo la mirada de Santo Domingo Savio y el Santo Hermano Miguel.';

/* ------------------------------------------------------------------
   Ideario
   ------------------------------------------------------------------ */
export const mission =
  'Proporcionar una educación integral basada en las cuatro columnas de la educación y en las columnas espirituales de nuestros educadores, descritas en la filosofía institucional.';

export const vision =
  'Fortalecer la fe de los escolanos para que alcancen la madurez cristiana y formarlos en valores morales, sociales y espirituales, con una educación integral e innovadora de la mano de un equipo de educadores dedicado y profesional. Así formamos personas honestas, sensibles, proactivas y exitosas, en un proceso educativo de coordinación, integración y cooperación entre todos.';

export const definitions: { term: string; text: string }[] = [
  {
    term: 'Escolanía',
    text: 'Conjunto o corporación de escolanos. Del latín schola: establecimiento para la educación de los niños y jóvenes.',
  },
  {
    term: 'Escolano',
    text: 'Niño o joven que se educaba para el canto, la ciencia y el culto en las escuelas de grandes y famosos monasterios o santuarios.',
  },
];

export const aims: { title: string; text: string }[] = [
  {
    title: 'Científico',
    text: 'De acuerdo con el progreso de la ciencia, la pedagogía y las normas del Ministerio del Poder Popular para la Educación.',
  },
  {
    title: 'Moral y religioso',
    text: 'Según las orientaciones de la Iglesia Católica y del Obispo de la Diócesis de La Guaira.',
  },
  {
    title: 'Físico y estético',
    text: 'Una preparación continua para desarrollar las aptitudes manuales, musicales y corporales.',
  },
];

export const objectives = [
  'Una capacidad crítica para analizar la sociedad y un compromiso social con la comunidad en que vive.',
  'Fortalecer la fe de los escolanos para ayudarlos a alcanzar la madurez cristiana.',
  'Formarlos para la vida democrática y en ideales nacionalistas de solidaridad humana.',
  'Orientarlos hacia la satisfacción de las necesidades económicas, cívicas, culturales y morales de la sociedad.',
  'Fortalecer su reflexión, observación, imaginación y juicio.',
  'Estimular la atención y afianzar el juicio crítico para usar con discernimiento la información de los medios de comunicación.',
];

export const anthem: { label?: string; lines: string[] }[] = [
  {
    label: 'Coro',
    lines: [
      'Jóvenes valientes escolanos,',
      'constructores de un mundo mejor,',
      'ya preparen con nobles principios',
      'las futuras conquistas de Dios.',
    ],
  },
  {
    label: 'I',
    lines: [
      'Que el estudio, la fe y el deporte',
      'sean las armas en esta batalla;',
      'luchen siempre sin desanimarse,',
      'que el Señor les ha dado la gracia.',
    ],
  },
  {
    label: 'II',
    lines: [
      'Escolano es luz en la vida',
      'para el joven que busca caminos,',
      'Escolano, antorcha encendida',
      'para el joven que aleja los vicios.',
    ],
  },
];

export const banner =
  'Dos colores se hermanan en el estandarte, en el uniforme de gala y en el deportivo: el azul del cielo y el amarillo del sol. El azul nos recuerda el cielo y el mar litoralense que bordea las costas de La Guaira, que se besan en la lontananza en un mensaje de grandeza. El amarillo nos recuerda la fuerza del sol y el calor guaireño: nuestras almas deben tener el calor del fervor por las cosas santas y grandes de la vida.';

export const shieldIntro =
  'Sobre la Cruz del V Centenario del descubrimiento y del inicio de la evangelización de América luce el escudo, dividido en cuatro partes. Abajo, sobre la cruz, una palabra de nueve letras que habla por sí sola: ESCOLANÍA.';

export const shieldParts: { position: string; text: string }[] = [
  {
    position: 'Superior izquierdo',
    text: 'Tres niños —número de perfección— representan a los Niños Cantores de La Guaira, alumnos predilectos de la Escolanía.',
  },
  { position: 'Superior derecho', text: 'Santo Domingo Savio, que bendice a nuestros escolanos.' },
  { position: 'Inferior izquierdo', text: 'El Santo Hermano Miguel, que con su serena mirada nos asegura su protección.' },
  {
    position: 'Inferior derecho',
    text: 'Las cuatro columnas: el libro (formación intelectual, con las fechas 1982 y 1991), la estrella (la Virgen y la formación religiosa), la clave de sol (música) y el balón (deporte).',
  },
];

/* ------------------------------------------------------------------
   Patronos
   ------------------------------------------------------------------ */
export const patrons: {
  name: string;
  role: string;
  feast: string;
  photo: Photo;
  paragraphs: string[];
}[] = [
  {
    name: 'Santo Domingo Savio',
    role: 'Patrono',
    feast: '9 de marzo',
    photo: { src: santoDomingoSavio, alt: 'Estampa de Santo Domingo Savio con aureola dorada' },
    paragraphs: [
      'Alumno de San Juan Bosco en el colegio de Turín, Italia, a mediados del siglo XIX, fue un héroe de virtud que partió al cielo a los 15 años. Desde 1954, por decreto del papa Pío XII, es patrono de los Niños Cantores, y permanece en el corazón de los jóvenes.',
      'Su mirada sublime, de metas elevadas, es acicate para nuestros escolanos: mirar hacia arriba, a lo puro y a lo limpio, al enriquecimiento intelectual y al birrete que un día, lograda su carrera universitaria, colocarán sobre sus sienes. Aquí nuestras miradas buscan las grandes metas, para aportar grandes ciudadanos a Venezuela.',
    ],
  },
  {
    name: 'Santo Hermano Miguel',
    role: 'Copatrono',
    feast: '9 de febrero',
    photo: { src: hermanoMiguel, alt: 'Retrato del Santo Hermano Miguel con el hábito de los Hermanos de La Salle' },
    paragraphs: [
      'El Santo Académico nació con los pies muy torcidos y solo pudo caminar a los cinco años por un milagro de la Santísima Virgen. Aunque le hacía sufrir, nunca dejó de subir cada día más de 70 escalones hasta las aulas, ni su trabajo apostólico, ni la Santa Misa diaria, ni la oración en comunidad, ni la verdadera razón de la escuela católica: la formación religiosa de sus alumnos.',
      'Con sus pies torcidos anduvo siempre por el camino recto de la obediencia y del noble trabajo intelectual. Hoy es una llamada de atención para quienes, con los pies rectos, andan por caminos torcidos.',
    ],
  },
];

/* ------------------------------------------------------------------
   Organigrama (estructura del organigrama de mayo 2022)
   TODO(contenido): solo publicamos nombres confirmados. Faltan los responsables actuales
   de subdirección, departamentos y coordinaciones.
   ------------------------------------------------------------------ */
export interface OrgUnit {
  title: string;
  name?: string;
  children?: string[];
}

export const orgChart = {
  director: { title: 'Dirección General', name: leadership[0].name },
  administration: {
    head: { title: 'Dirección Administrativa', name: leadership[1].name },
    departments: [
      { title: 'Gestión Humana' },
      { title: 'Gestión Administrativa y Cobranza' },
      { title: 'Gestión Legal' },
      { title: 'Contabilidad' },
      { title: 'Servicios Generales' },
    ] as OrgUnit[],
  },
  academic: {
    head: { title: 'Dirección Académica', name: leadership[2].name },
    subdirection: { title: 'Subdirección Académica' } as OrgUnit,
    coordinations: [
      {
        title: 'Coord. Pedagógica de Inicial y Básica',
        children: ['Maestras de Preescolar', 'Auxiliares de Preescolar', 'Maestras de Básica', 'Maestros especialistas'],
      },
      { title: 'Coord. Pedagógica de Media General', children: ['Profesores'] },
      { title: 'Coord. de Control y Evaluación', children: ['Inicial y Básica', 'Media General'] },
      {
        title: 'Coord. de Bienestar Estudiantil',
        children: ['Trabajo social', 'Psicopedagogía', 'Servicio médico', 'Biblioteca', 'Informática'],
      },
      { title: 'Coord. de Pastoral', children: ['Profesores de Educación Religiosa Escolar'] },
      {
        title: 'Coord. de Cultura y Deporte',
        children: ['Especialistas en música', 'Especialistas en deporte', 'Especialistas en artes escénicas'],
      },
      { title: 'Coord. de Formación Permanente' },
    ] as OrgUnit[],
  },
};

/* ------------------------------------------------------------------
   Personal
   TODO(contenido): la institución está preparando la lista actualizada.
   Cada grupo arranca vacío; al rellenar `members` las tarjetas aparecen solas.
   ------------------------------------------------------------------ */
export interface StaffMember {
  name: string;
  role: string;
  credentials?: string[];
  photo?: ImageMetadata;
}

export const staffGroups: { slug: string; title: string; description: string; members: StaffMember[] }[] = [
  {
    slug: 'inicial',
    title: 'Educación Inicial',
    description: 'Maestras y auxiliares de preescolar',
    members: [],
  },
  {
    slug: 'primaria',
    title: 'Educación Primaria',
    description: 'Docentes de 1.º a 6.º grado',
    members: [],
  },
  {
    slug: 'especialistas',
    title: 'Especialistas',
    description: 'Inglés, religión, música, manualidades y extracátedras',
    members: [],
  },
  {
    slug: 'media-general',
    title: 'Media General',
    description: 'Profesores de 1.º a 5.º año',
    members: [],
  },
  {
    slug: 'administrativo',
    title: 'Personal administrativo',
    description: 'Administración, bienestar estudiantil y servicios',
    members: [],
  },
];
