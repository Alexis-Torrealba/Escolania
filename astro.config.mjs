// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Direcciones del sitio WordPress anterior → páginas nuevas, para no romper enlaces de
// Google y redes. Las actividades que ya no existen (fútbol, kickingball…) y las páginas
// retiradas (La voz del escolano, Sala de prensa) quedan fuera a propósito: dan 404.
const redirects = {
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
};

// Rutas que nunca deben aparecer en buscadores
const privateRoutes = ['/styleguide', '/404'];

// https://astro.build/config
export default defineConfig({
  site: 'https://escolanianclg.com',
  redirects,
  // Precarga la página de destino al pasar el mouse (o tocar) un enlace: al hacer clic,
  // la navegación es prácticamente instantánea.
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  // CSS incrustado en cada página (~14 KB comprimido): evita una petición que bloquea
  // la primera pintura, lo que más se nota en datos móviles.
  build: { inlineStylesheets: 'always' },
  integrations: [
    sitemap({
      // Fuera del sitemap: páginas internas y las redirecciones (no son contenido)
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, '') || '/';
        return !privateRoutes.includes(path) && !(path in redirects);
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
