import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import portada from "../assets/portada/portada.webp";
import { useLanguage } from "../i18n/useLanguage";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero() {
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const [titleFontReady, setTitleFontReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const revealTitle = () => {
      if (!cancelled) setTitleFontReady(true);
    };

    if (!document.fonts) {
      revealTitle();
      return () => {
        cancelled = true;
      };
    }

    void document.fonts.load('300 1em "BestLight"').then(revealTitle, revealTitle);

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="hero" id="top">
      <img
        src={portada}
        className="hero-bg"
        alt={language === "es" ? "Portada" : "Portfolio cover"}
        decoding="async"
        fetchPriority="high"
      />
      <div className="hero-shade" />

      <div className="hero-inner">
        <motion.h1
          className="hero-title"
          initial={false}
          animate={
            titleFontReady
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: shouldReduceMotion ? 0 : 30, scale: shouldReduceMotion ? 1 : 0.985 }
          }
          transition={{ duration: shouldReduceMotion ? 0 : 0.62, ease }}
        >
          {language === "es" ? "Bienvenidos" : "Welcome"}
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={false}
          animate={titleFontReady ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.52, delay: shouldReduceMotion ? 0 : 0.16, ease }}
        >
          {language === "es" ? (
            <>
              Soy <b>Valeria Torres</b> y me interesa entender el <b>porqué</b> antes de pensar el <b>cómo</b>.
              Me muevo entre la estrategia de marca y la planificación, ayudando a que las ideas tengan{" "}
              <b>dirección</b> y <b>sentido</b>.
            </>
          ) : (
            <>
              I’m <b>Valeria Torres</b>, and I believe in understanding the <b>why</b> before thinking about the{" "}
              <b>how</b>. I work across brand strategy and planning, helping ideas find <b>direction</b> and{" "}
              <b>meaning</b>.
            </>
          )}
        </motion.p>
      </div>
    </section>
  );
}
