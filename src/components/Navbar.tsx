import { useEffect, useMemo, useState } from "react";
import { waLink } from "../utils/whatsapp";

const SECTIONS = [
  { id: "estudios", label: "Estudios" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("estudios");

  useEffect(() => {
    let animationFrame = 0;

    const updateScrolledState = () => {
      animationFrame = 0;
      const nextScrolled = window.scrollY > 30;
      setScrolled((current) => (current === nextScrolled ? current : nextScrolled));
    };

    const onScroll = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(updateScrolledState);
    };

    updateScrolledState();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  useEffect(() => {
    // Ajusta esto si tu navbar cambia de alto
    const NAV_OFFSET = 90; // px

    const obs = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((e) => e.isIntersecting);
        if (!intersecting.length) return;

        // ✅ Elegimos el más cercano al top (considerando navbar)
        const best = intersecting
          .map((e) => {
            const rect = e.target.getBoundingClientRect();
            const distanceToTop = Math.abs(rect.top - NAV_OFFSET);
            return { id: (e.target as HTMLElement).id, distanceToTop };
          })
          .sort((a, b) => a.distanceToTop - b.distanceToTop)[0];

        if (best?.id) setActive((current) => (current === best.id ? current : best.id));
      },
      {
        root: null,
        // ✅ “línea” de activación: zona de detección cerca del top
        rootMargin: `-${NAV_OFFSET}px 0px -55% 0px`,
        threshold: 0.01,
      }
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  const msg = useMemo(
    () =>
      `¡Hola Valeria! 🌈\nVi tu portafolio y quiero una idea con dirección.\n\n✅ Mi proyecto es: ____\n🎯 Objetivo: ____\n⏱️ Fecha ideal: ____\n\n¿Agendamos 15 min?`,
    []
  );

  return (
    <nav className={`navPro ${scrolled ? "navPro--solid" : ""}`}>
      <div className="navPro__inner">
        <a className="navPro__brand" href="#top" aria-label="Inicio">
          VT
        </a>

        <div className="navPro__links">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`navPro__link ${active === s.id ? "is-active" : ""}`}
            >
              {s.label}
            </a>
          ))}
        </div>

        <a className="navPro__cta" href={waLink(msg)} target="_blank" rel="noreferrer">
          Hablemos
        </a>
      </div>
    </nav>
  );
}