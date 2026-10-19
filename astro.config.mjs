// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://escolanianclg.com',
  // Direcciones del sitio WordPress anterior → páginas nuevas, para no romper enlaces de
  // Google y redes. Las actividades que ya no existen (fútbol, kickingball…) y las páginas
  // retiradas (La voz del escolano, Sala de prensa) quedan fuera a propósito: dan 404.
  redirects: {
    '/inicio': '/',
    '/escolania-2': '/nosotros/historia',
    '/historia': '/nosotros/historia',
    '/ideario': '/nosotros/ideario',
    '/patronos': '/nosotros/patronos',
    '/organigrama': '/nosotros/organigrama',
    '/personal': '/nosotros/personal',
    '/educacion-inicial': '/niveles/inicial',
    '/educacion-basica': '/niveles/basica',
    '/educacion-media-general': '/niveles/media-general',
    '/bailar': '/actividades/danza',
    '/bienestar-estudiantil': '/bienestar',
    '/que-es-bienestar': '/bienestar',
    '/psicopedagogia': '/bienestar',
    '/atencion-medica-2': '/bienestar',
    '/encuesta-post-covid-19': '/bienestar',
    '/acuerdo-de-convivencia': '/documentos',
    '/labor-social': '/documentos',
    '/administracion': '/pagos',
    '/recursos-humanos': '/contacto',
    '/contactos': '/contacto',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
