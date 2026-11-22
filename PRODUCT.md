# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Dos públicos **con la misma prioridad** (confirmado el 2026-11-22). Ninguno se sacrifica por el otro:

- **Familias nuevas:** madres, padres y representantes que buscan colegio en La Guaira. Necesitan conocer la institución, sus niveles y su equipo para solicitar cupo o hacer contacto.
- **Representantes actuales:** familias inscritas que vienen a resolver algo: pagar o reportar un pago, consultar horarios, descargar documentos, entrar al portal o comunicarse con el colegio.

El Inicio, Nosotros y Niveles sirven sobre todo a las primeras. Recursos sirve sobre todo a los segundos y debe poder alcanzarse rápido desde cualquier página.

## Product Purpose

Sitio oficial de la U.E.P. Escolanía «Niños Cantores de La Guaira» (escolanianclg.com), que reemplaza su WordPress anterior. Tiene éxito cuando una familia nueva entiende qué es la Escolanía y solicita cupo o contacta, **y** cuando un representante resuelve su trámite sin ayuda.

## Positioning

Colegio católico de formación integral sobre **cuatro columnas**: moral y religiosa (fe), intelectual (saber), musical (música) y físico-deportiva (deporte). Tiene su raíz en la Coral «Niños Cantores de La Guaira», nacida junto con el colegio en 1991. Es el mensaje principal. El lema «¡A la vanguardia educativa!» y la tradición familiar lo acompañan, no lo sustituyen.

## Operating Context

- Institución privada en Guaracarumbo, La Guaira, Venezuela, con Educación Inicial, Básica (1.º a 6.º grado) y Media General (1.º a 5.º año).
- Inscripciones y gestión de representantes ocurren en un portal externo (Edueyss). El sitio enlaza, no procesa.
- Los pagos se reportan por correo a administración con el comprobante. Cashea permite pagar con una inicial y 3 cuotas.
- Se consulta en buena parte desde teléfonos y con datos móviles.
- La institución entrega el contenido por tandas, por eso hay secciones a la espera de información.

## Capabilities and Constraints

- Sitio estático en Astro con Tailwind CSS 4, en español, sin backend ni formularios propios.
- Móvil primero y páginas livianas: imágenes optimizadas, CSS incrustado y fuentes servidas desde el propio dominio.
- Los conjuntos largos no se vuelven listados infinitos. Personal usa una fila con scroll horizontal por categoría.
- Se conservan las redirecciones de las direcciones del WordPress anterior (`astro.config.mjs`).
- Las extracátedras vigentes son solo Ajedrez y Danza.
- Vocabulario propio: «escolanos», «Familia Escolana», «extracátedras», «representantes» y «cupo».
- El repositorio es público: no guardar datos sensibles ni material de `Backup/` o `Ref/`.

Decisiones abiertas, que no deben resolverse por suposición:

- Hosting y formulario de contacto.
- Si Cashea aplica a inscripción, mensualidad o ambas, y cada cuánto se paga la inscripción.
- Categorías y nombres de Personal marcados como TODO en `src/data/about.ts`.

## Brand Commitments

La identidad actual es obligatoria. Se refina, no se reemplaza:

- Nombre «U.E.P. Escolanía», con «Niños Cantores de La Guaira», y su escudo (`src/assets/brand/escudo.png`).
- Colores navy, dorado y celeste, definidos en `src/styles/global.css`.
- Tipografías actuales: Plus Jakarta Sans, Inter y Caveat. No cambiarlas aunque una regla las señale como comunes.
- Amarillo `#FDFA3D` exclusivo de Cashea, siempre con texto oscuro encima. Lo de Cashea nunca va en el dorado institucional.
- Identidad católica: Santo Domingo Savio (patrono), Santo Hermano Miguel (copatrono) y la Virgen María.

## Evidence on Hand

- Historia, ideario, patronos y equipo directivo: `src/data/about.ts`.
- Personal con fotos reales: `src/data/about.ts` y `src/assets/personal/`.
- Niveles y columnas: `src/data/education.ts`. Las frases y descripciones de los niveles son borradores por validar.
- Extracátedras: `src/data/activities.ts` y video real de Ajedrez en `public/videos/ajedrez.mp4`. El texto de Ajedrez es un borrador.
- Bienestar e infraestructura: `src/data/school-life.ts`, con descripciones por validar.
- Contacto, montos y cifras (+380 estudiantes, 28 docentes): `src/data/site.ts`.
- Documentos oficiales: `public/documentos/`.

No existen todavía, y **no deben inventarse ni simularse**:

- Testimonios, premios, rankings o resultados académicos.
- Horarios vigentes.
- Fotos actuales de las instalaciones.
- Cuentas bancarias vigentes.
- Enlace exacto de la ficha de Google Maps.

## Product Principles

1. **Dos puertas, un mismo colegio.** Cada decisión funciona para quien lo conoce por primera vez y para quien viene a hacer un trámite.
2. **Las cuatro columnas cuentan la historia.** Fe, saber, música y deporte explican por qué elegir la Escolanía.
3. **Solo lo real.** Nada de fotos de stock ni generadas, cifras, testimonios, nombres o cuentas sin confirmar. Lo que falta se muestra con un aviso honesto o un marco reservado, o no se publica.
4. **Primero el teléfono.** Se decide en pantalla pequeña y con datos móviles, y después se amplía.
5. **Refinar sin perder la identidad.** Una mejora debe seguir reconociéndose como la Escolanía.

## Accessibility & Inclusion

Objetivo: WCAG 2.2 AA (no se ha auditado el cumplimiento actual).

- Contraste suficiente. El dorado 500 con blanco no sirve para texto normal.
- Todo utilizable con teclado y con foco visible, incluidas las filas con scroll.
- Respetar «reducir movimiento». El contenido se ve completo sin animaciones.
- Textos alternativos descriptivos y objetivos táctiles cómodos.
