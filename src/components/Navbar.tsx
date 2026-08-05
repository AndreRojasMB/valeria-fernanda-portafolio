import { useEffect, useState } from "react";
import { waLink } from "../utils/whatsapp";
import { useLanguage } from "../i18n/useLanguage";
import LanguageToggle from "./LanguageToggle";

const SECTION_IDS = ["estudios", "proyectos", "contacto"] as const;

export default function Navbar() {
  const { language } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("estudios");
  const copy =
    language === "es"
      ? {
          sections: ["Estudios", "Proyectos", "Contacto"],
          home: "Inicio",
          talk: "Hablemos",
          message:
            "¡Hola Valeria! 🌈\nVi tu portafolio y quiero una idea con dirección.\n\n✅ Mi proyecto es: ____\n🎯 Objetivo: ____\n⏱️ Fecha ideal: ____\n\n¿Agendamos 15 min?",
        }
      : {
          sections: ["Studies", "Projects", "Contact"],
          home: "Home",
          talk: "Let's talk",
          message:
            "Hi Valeria! 🌈\nI saw your portfolio and I’d like an idea with clear direction.\n\n✅ My project is: ____\n🎯 Goal: ____\n⏱️ Ideal date: ____\n\nCan we schedule 15 minutes?",
        };
  const sections = SECTION_IDS.map((id, index) => ({ id, label: copy.sections[index] }));

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
    const NAV_OFFSET = 90;
    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((entry) => entry.isIntersecting);
        if (!intersecting.length) return;

        const best = intersecting
          .map((entry) => {
            const rect = entry.target.getBoundingClientRect();
            return {
              id: (entry.target as HTMLElement).id,
              distanceToTop: Math.abs(rect.top - NAV_OFFSET),
            };
          })
          .sort((a, b) => a.distanceToTop - b.distanceToTop)[0];

        if (best?.id) setActive((current) => (current === best.id ? current : best.id));
      },
      {
        root: null,
        rootMargin: `-${NAV_OFFSET}px 0px -55% 0px`,
        threshold: 0.01,
      }
    );

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const message = copy.message;

  return (
    <nav className={`navPro ${scrolled ? "navPro--solid" : ""}`}>
      <div className="navPro__inner">
        <a className="navPro__brand" href="#top" aria-label={copy.home}>
          VT
        </a>

        <div className="navPro__links">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`navPro__link ${active === section.id ? "is-active" : ""}`}
            >
              {section.label}
            </a>
          ))}
        </div>

        <div className="navPro__actions">
          <LanguageToggle tone="dark" />
          <a className="navPro__cta" href={waLink(message)} target="_blank" rel="noreferrer">
            {copy.talk}
          </a>
        </div>
      </div>
    </nav>
  );
}
