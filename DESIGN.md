---
name: U.E.P. Escolanía
description: "El álbum de la Coral: navy y dorado, fotos enmarcadas y notas manuscritas"
colors:
  navy-50: "#eef1fa"
  navy-100: "#dde3f4"
  navy-200: "#bcc7e9"
  navy-300: "#93a3d8"
  navy-400: "#6779be"
  navy-500: "#4659a3"
  navy-600: "#334486"
  navy-700: "#26356f"
  navy-800: "#1a2963"
  navy-900: "#0d1e5b"
  navy-950: "#070f33"
  gold-50: "#fbf8ea"
  gold-100: "#f6eec9"
  gold-200: "#eedb94"
  gold-300: "#e0c75e"
  gold-400: "#cfae35"
  gold-500: "#b49217"
  gold-600: "#967812"
  gold-700: "#775e12"
  gold-800: "#5f4b14"
  gold-900: "#4f3f15"
  sky-50: "#f4f8fe"
  sky-100: "#e6effc"
  sky-200: "#c8dcf8"
  sky-300: "#a3c3f2"
  sky-400: "#77a3e9"
  white: "#ffffff"
  black: "#000000"
  slate-400: "oklch(70.4% 0.04 256.788)"
  slate-500: "oklch(55.4% 0.046 257.417)"
  slate-600: "oklch(44.6% 0.043 257.281)"
  slate-700: "oklch(37.2% 0.044 257.287)"
  cashea: "#fdfa3d"
  cashea-ink: "#141414"
typography:
  display-2xl:
    fontFamily: "Plus Jakarta Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "6rem"
    fontWeight: 800
    lineHeight: 1
  display-xl:
    fontFamily: "Plus Jakarta Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 700
    lineHeight: 1.05
  display:
    fontFamily: "Plus Jakarta Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  display-sm:
    fontFamily: "Plus Jakarta Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1.08
  headline:
    fontFamily: "Plus Jakarta Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  headline-sm:
    fontFamily: "Plus Jakarta Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.25
  title-lg:
    fontFamily: "Plus Jakarta Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.333
  title:
    fontFamily: "Plus Jakarta Sans Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.4
  body-lg:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.43
  label:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.333
    letterSpacing: "0.25em"
  micro:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 700
  note:
    fontFamily: "Caveat, cursive"
    fontSize: "1.875rem"
    fontWeight: 600
    lineHeight: 1.2
rounded:
  xs: "2px"
  sm: "0.25rem"
  md: "0.375rem"
  lg: "0.5rem"
  xl: "0.75rem"
  2xl: "1rem"
  3xl: "1.5rem"
  media: "2rem"
  panel: "2.5rem"
  full: "9999px"
spacing:
  gutter: "1rem"
  gutter-sm: "1.5rem"
  gutter-lg: "2rem"
  card-gap: "1.25rem"
  card: "1.25rem"
  card-lg: "1.75rem"
  section: "5rem"
  section-lg: "6rem"
  section-xl: "7rem"
components:
  button-primary:
    backgroundColor: "{colors.gold-700}"
    textColor: "{colors.white}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.gold-800}"
  button-secondary:
    backgroundColor: "{colors.navy-900}"
    textColor: "{colors.white}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-secondary-hover:
    backgroundColor: "{colors.navy-800}"
  button-outline:
    textColor: "{colors.navy-900}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-outline-hover:
    backgroundColor: "{colors.navy-50}"
  button-light:
    textColor: "{colors.white}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-cashea:
    backgroundColor: "{colors.cashea-ink}"
    textColor: "{colors.cashea}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  badge-cashea:
    backgroundColor: "{colors.cashea}"
    textColor: "{colors.cashea-ink}"
    rounded: "{rounded.full}"
  card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.3xl}"
    padding: "{spacing.card}"
  panel-navy:
    backgroundColor: "{colors.navy-900}"
    textColor: "{colors.white}"
    rounded: "{rounded.panel}"
  nav-item-active:
    backgroundColor: "{colors.sky-50}"
    textColor: "{colors.navy-900}"
    rounded: "{rounded.xl}"
---

# Design System: U.E.P. Escolanía

## Overview

**Creative North Star: "El álbum de la Coral"**

La Escolanía se presenta como un álbum familiar guardado con orgullo desde 1991: solemne como su escudo y cercano como una foto de grupo con una nota escrita a mano. El navy da la seriedad institucional, el dorado señala lo importante y el celeste del escudo abre espacio y luz.

Los componentes se sienten **cálidos y seguros**: formas muy redondeadas, superficies blancas con un borde fino y profundidad contenida. Los gestos personales (una foto girada, una nota manuscrita, un subrayado) son pocos y acompañan el contenido real.

**Key Characteristics:**

- Navy para la autoridad, dorado para el acento, celeste para el aire.
- Fotos reales, enmarcadas y a veces levemente giradas.
- Notas manuscritas breves, nunca párrafos.
- Botones en píldora y tarjetas muy redondeadas.
- Sombra suave en reposo, marcada solo donde algo se eleva.

## Colors

Una paleta heráldica tomada del escudo, sobre blanco. La fuente de los valores es `src/styles/global.css`.

### Primary

- **Navy de la Escolanía** (navy-900): títulos, paneles institucionales, barra superior y botón secundario. Los tonos 50 a 200 son bordes y fondos suaves.

### Secondary

- **Dorado del escudo** (gold-500): líneas, subrayados, números en círculo con texto navy y anillo de los botones.
- **Dorado profundo** (gold-700): botón principal con texto blanco y texto dorado pequeño sobre fondos claros.
- **Dorado claro** (gold-300 y gold-400): acentos de texto e íconos sobre navy.

### Tertiary

- **Celeste del escudo** (sky-200): halos decorativos. Sus tonos 50 y 100 separan secciones sin líneas.

### Neutral

- **Pizarra** (slate-700 y slate-600): texto corrido. slate-500 es para texto secundario y slate-400 solo para detalles decorativos.
- **Blanco** (white): fondo base y superficie de las tarjetas.

### Marca de terceros

- **Amarillo Cashea** (cashea) con **Tinta Cashea** (cashea-ink): exclusivos de los elementos de Cashea.

### Named Rules

**The Cashea Rule.** El amarillo de Cashea solo aparece en lo de Cashea, siempre con su tinta oscura encima. Cashea nunca se pinta en dorado institucional.

**The Readable Gold Rule.** Sobre fondos claros, el texto dorado normal exige 4,5:1 y el grande 3:1. gold-600 no alcanza para texto normal y gold-500 no alcanza para ningún texto: los usos actuales que lo incumplen son deuda por corregir, no un patrón que copiar.

## Typography

**Display Font:** Plus Jakarta Sans Variable (con system-ui)
**Body Font:** Inter Variable (con system-ui)
**Note Font:** Caveat (con cursive)

**Character:** Títulos firmes y geométricos, lectura neutra y una voz manuscrita para lo afectivo. Las tres familias son una decisión de marca confirmada.

### Hierarchy

- **Display** (700, de 2.25rem a 4.5rem según pantalla, 1.05 a 1.08): H1. Las cifras destacadas llegan a 6rem en peso 800.
- **Headline** (700, 1.875rem a 2.25rem, 1.25): títulos de sección. Pueden cerrar con una palabra destacada en dorado.
- **Title** (700, 1.25rem a 1.5rem): tarjetas y bloques.
- **Body** (400, 1rem a 1.125rem, hasta 1.625): texto corrido, con 36 a 42rem de ancho máximo.
- **Label** (700, 0.75rem, 0.15em a 0.25em, mayúsculas): etiquetas sobre los títulos y cargos.
- **Micro** (700, 0.7rem): solo rótulos dentro de las tarjetas de Extracátedras. No usar para texto informativo nuevo.
- **Note** (600, 1.25rem a 1.875rem): Caveat, para frases de pocas palabras y pies de foto.

### Named Rules

**The Eyebrow Rule.** La etiqueta en mayúsculas sobre el título, con línea dorada en las secciones, es parte del sistema y se conserva.

**The Handwritten Note Rule.** Caveat se reserva para notas cortas. Nunca lleva instrucciones, datos ni párrafos.

## Layout

Móvil primero. Contenedor centrado de 80rem con márgenes de 1rem, 1.5rem desde 40rem y 2rem desde 64rem. Las secciones respiran entre 5 y 7rem en vertical y las tarjetas se separan 1.25rem.

Los encabezados con visual usan dos columnas desde 64rem. El encabezado principal es fijo arriba (5rem de alto) y las secciones de Nosotros agregan pestañas fijas debajo.

Los conjuntos largos de personas u objetos iguales van en una fila horizontal con ajuste por tarjeta: 1,3 visibles en teléfono, 2,3 en tablet y 4 en escritorio, con flechas y soporte de teclado.

## Elevation & Depth

Híbrido contenido: capas tonales (blanco, celeste, navy) para separar secciones y sombras para señalar qué se eleva.

### Shadow Vocabulary

- **Reposo** (`0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`): tarjetas, con borde fino navy-100.
- **Acción** (`0 10px 15px -3px, 0 4px 6px -4px`, en el color del botón al 20-25%): botones sólidos.
- **Flotante** (`0 20px 25px -5px, 0 8px 10px -6px`, navy al 10%): menús y polaroids.
- **Foto principal** (`0 25px 50px -12px`, navy al 15%): foto de cabecera.

### Named Rules

**The Quiet Rest Rule.** Una tarjeta en reposo solo lleva borde fino y sombra suave. La sombra marcada queda para botones, fotos y menús.

## Shapes

Píldora para acciones y distintivos, 1.5rem para tarjetas, 1rem para bloques internos y menús, 2rem para fotos principales y 2.5rem para grandes paneles navy. Las polaroids son la excepción casi recta (0.25rem), junto con los trazos finos del menú (2px).

Las fotos pueden llevar detrás un marco navy o dorado claro girado 2 o 3 grados. El contenido de lectura nunca se gira.

## Components

### Buttons

- **Shape:** píldora, 12px por 24px, texto de 14px en peso 600 y flecha al final.
- **Primary:** gold-700 con texto blanco y anillo gold-500.
- **Secondary / Outline / Light:** navy sólido, contorno navy sobre claro y contorno blanco sobre navy.
- **Cashea:** tinta con texto amarillo, solo dentro de sus bloques.
- **Hover / Focus:** sube 2px, la flecha avanza 4px y el principal recibe un brillo. El foco es un contorno gold-500 de 2px, separado 2px.

### Chips

- **Cashea:** píldora amarilla con su ícono y texto en tinta.

### Cards / Containers

- **Corner Style:** 1.5rem.
- **Background:** blanco sobre página blanca o celeste muy claro.
- **Shadow Strategy:** Reposo.
- **Border:** 1px navy-100.
- **Internal Padding:** 1.25 a 2.5rem, según jerarquía.
- **Definición:** en Ideario lleva además un filete izquierdo gold-500 de 4px. Es una variante aprobada solo para esa página.

### Navigation

- Barra superior navy, barra principal blanca con escudo y menús flotantes de 1rem de radio.
- El destino actual se marca con fondo celeste en el menú y con línea dorada en las pestañas.

### Álbum

- **Polaroid:** borde blanco, leve sepia y pie manuscrito. Las fotos antiguas no se amplían sobre su tamaño real.
- **Marco sin foto:** navy con cámara dorada y trama diagonal al 8%.
- **Panel de cierre:** navy con el escudo como marca de agua al 7% y una nota manuscrita.

### Motion

- Entradas de 450 a 600ms y apariciones al hacer scroll de hasta 800ms, con `cubic-bezier(0.16, 1, 0.3, 1)`.
- Con «reducir movimiento» todo aparece completo y sin animación.

## Do's and Don'ts

### Do:

- **Do** usar los tokens de `src/styles/global.css`.
- **Do** comprobar el contraste en el HTML compilado: el hook no resuelve los colores de Tailwind en archivos `.astro`.
- **Do** diseñar primero a 375px y mantener objetivos táctiles de 44px.
- **Do** usar el marco sin foto cuando falte una foto real.

### Don't:

- **Don't** cambiar las tres familias tipográficas ni la paleta del escudo.
- **Don't** usar el amarillo de Cashea fuera de Cashea.
- **Don't** usar fotos de stock ni generadas.
- **Don't** poner texto blanco sobre gold-500 ni sobre el amarillo de Cashea.
- **Don't** convertir un grupo largo en un listado vertical sin fin.
- **Don't** repartir el filete lateral de Ideario por otras tarjetas.
