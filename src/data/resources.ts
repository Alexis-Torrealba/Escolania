// Contenido de «Recursos»: Horarios y Documentos.
// Los PDF viven en public/documentos/ (copiados del backup de WordPress, 2022).

/* ------------------------------------------------------------------
   Documentos
   ------------------------------------------------------------------ */
export type DocumentCategory = 'Convivencia' | 'Labor social';

export interface SchoolDocument {
  title: string;
  description: string;
  category: DocumentCategory;
  /** Ruta pública del archivo */
  href: string;
  /** Peso en KB, para avisar antes de descargar con datos móviles */
  sizeKB: number;
  /** Año escolar al que corresponde, si el documento lo indica */
  schoolYear?: string;
}

export const documentCategories: { value: DocumentCategory; description: string }[] = [
  { value: 'Convivencia', description: 'Normas, derechos y deberes de la comunidad escolana' },
  { value: 'Labor social', description: 'Planillas para la labor social, requisito para el título de bachiller' },
];

export const documents: SchoolDocument[] = [
  {
    // TODO(contenido): versión 2022-2023 (V3); sustituir por la vigente cuando la envíen
    title: 'Acuerdos de Convivencia Escolar y Comunitaria',
    description: 'Las normas que rigen la convivencia en la Escolanía: derechos, deberes y procedimientos.',
    category: 'Convivencia',
    href: '/documentos/acuerdos-de-convivencia-escolar.pdf',
    sizeKB: 1254,
    schoolYear: '2022-2023',
  },
  {
    title: 'Acta de Compromiso',
    description:
      'Derechos y deberes de estudiantes y representantes, faltas leves y graves con sus medidas correctivas. Se firma al formalizar la inscripción.',
    category: 'Convivencia',
    href: '/documentos/acta-de-compromiso.pdf',
    sizeKB: 140,
  },
  {
    // TODO(contenido): la carta trae «___ de 2022» impreso; pedir una versión sin año
    title: 'Carta de Aceptación',
    description: 'La firma la organización donde el estudiante realizará su labor social, con sus datos de contacto.',
    category: 'Labor social',
    href: '/documentos/labor-social-carta-de-aceptacion.pdf',
    sizeKB: 111,
  },
  {
    title: 'Registro de Actividades',
    description: 'Planilla para llevar el control de las actividades y horas de labor social cumplidas.',
    category: 'Labor social',
    href: '/documentos/labor-social-registro-de-actividades.pdf',
    sizeKB: 866,
  },
];

/* ------------------------------------------------------------------
   Horarios
   TODO(contenido): los horarios de WordPress eran de 2022-2023. La institución enviará
   los vigentes; al rellenar `file` en cada grupo aparecen solos en la página.
   ------------------------------------------------------------------ */
export interface ScheduleGroup {
  slug: string;
  title: string;
  description: string;
  /** PDF o imagen del horario en public/horarios/ */
  file?: string;
}

export const schoolYear = '2026-2027';

export const scheduleGroups: ScheduleGroup[] = [
  { slug: 'inicial', title: 'Educación Inicial', description: 'Preescolar 1.er y 2.º nivel' },
  { slug: 'basica', title: 'Educación Básica', description: '1.º a 6.º grado' },
  { slug: 'media-general', title: 'Media General', description: '1.º a 5.º año, por sección' },
  { slug: 'extracatedras', title: 'Extracátedras', description: 'Ajedrez y danza' },
];
