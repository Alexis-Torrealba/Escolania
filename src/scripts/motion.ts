// Movimiento del sitio: aparición al hacer scroll (.reveal) y contadores ([data-count-to]).
// Se inicializa en cada 'astro:page-load' porque ClientRouter cambia de página sin recargar.
// El estado oculto de .reveal depende de <html class="reveal-ready">, que pone el script
// en línea del <head> (BaseLayout) solo si el usuario no pidió reducir el movimiento.

const STAGGER_MS = 90;
const MAX_STAGGER_MS = 450;

let observer: IntersectionObserver | undefined;

function setupReveal() {
  observer?.disconnect();
  const root = document.documentElement;
  if (!root.classList.contains('reveal-ready')) return;

  observer = new IntersectionObserver(
    (entries) => {
      // Los que asoman en el mismo instante (una fila de tarjetas) se escalonan
      entries
        .filter((e) => e.isIntersecting)
        .forEach((entry, i) => {
          const el = entry.target as HTMLElement;
          el.style.setProperty('--reveal-delay', `${Math.min(i * STAGGER_MS, MAX_STAGGER_MS)}ms`);
          el.classList.add('is-visible');
          observer!.unobserve(el);
          // Al terminar, se devuelve el control de `transition` a las clases del elemento
          // (p. ej. tarjetas con hover:-translate-y-2)
          el.addEventListener('transitionend', () => el.classList.add('reveal-done'), { once: true });
          setTimeout(() => el.classList.add('reveal-done'), 1400);
        });
    },
    // Aparece en cuanto asoma un poco por abajo, no cuando ya está a media pantalla
    { rootMargin: '0px 0px -6% 0px', threshold: 0.08 },
  );

  document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)').forEach((el) => observer!.observe(el));
}

/** Cuenta desde 0 hasta el número final cuando la cifra entra en pantalla */
function setupCounters() {
  const counters = document.querySelectorAll<HTMLElement>('[data-count-to]');
  if (!counters.length || !document.documentElement.classList.contains('reveal-ready')) return;

  const run = (el: HTMLElement) => {
    const target = Number(el.dataset.countTo);
    const duration = 1400;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4); // ease-out-quart
      el.textContent = String(Math.round(target * eased));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        run(e.target as HTMLElement);
      }),
    { threshold: 0.6 },
  );
  counters.forEach((el) => {
    // Las cifras están dentro de un .reveal (aún invisible), así que no se ve el salto a 0
    if (!el.dataset.counted) el.textContent = '0';
    el.dataset.counted = 'true';
    io.observe(el);
  });
}

// Al cambiar de página, el <html> nuevo llega sin la clase: se repone antes de pintar
document.addEventListener('astro:after-swap', () => {
  if (window.__motionOk) document.documentElement.classList.add('reveal-ready');
});

document.addEventListener('astro:page-load', () => {
  window.__motionReady = true;
  setupReveal();
  setupCounters();
});

declare global {
  interface Window {
    __motionOk?: boolean;
    __motionReady?: boolean;
  }
}

export {};
