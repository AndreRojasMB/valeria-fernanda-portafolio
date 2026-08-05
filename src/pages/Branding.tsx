import { motion, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LanguageToggle from "../components/LanguageToggle";
import { useLanguage } from "../i18n/useLanguage";
import gavecBanner from "../assets/BRANDING AREA/2 portadas branding/GAVEC.webp";
import bichoBanner from "../assets/BRANDING AREA/2 portadas branding/BICHO RARO.webp";
import logoG from "../assets/BRANDING AREA/2 portadas branding/LogoG.webp";
import logoBR from "../assets/BRANDING AREA/2 portadas branding/LogoBR.webp";

export default function Branding() {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const { language } = useLanguage();
  const copy = language === "es"
    ? { title: "Proyectos de Branding", back: "← Volver al inicio", open: "Abrir proyecto" }
    : { title: "Branding Projects", back: "← Back to home", open: "Open project" };

  return (
    <main className="category-page">
      <div className="category-bg" />
      <div className="category-language"><LanguageToggle tone="dark" /></div>
      <motion.h1 className="title-best category-title" initial={shouldReduceMotion ? false : { opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}>
        {copy.title}
      </motion.h1>
      <div className="brand-grid">
        <motion.button className="brand-tile" aria-label={`${copy.open} GAVEC`} onClick={() => navigate("/branding/gavec")} initial={shouldReduceMotion ? false : { opacity: 0, x: -80, rotate: -1 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.15 }} whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}>
          <img src={gavecBanner} alt="GAVEC" decoding="async" />
          <div className="brand-glow" />
          <div className="brand-logo-center"><img src={logoG} alt="GAVEC" decoding="async" /></div>
          <div className="brand-label"><span>GAVEC</span></div>
        </motion.button>
        <motion.button className="brand-tile" aria-label={`${copy.open} Bicho Raro`} onClick={() => navigate("/branding/bichoraro")} initial={shouldReduceMotion ? false : { opacity: 0, x: 80, rotate: 1 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.28 }} whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}>
          <img src={bichoBanner} alt="Bicho Raro" decoding="async" />
          <div className="brand-glow" />
          <div className="brand-logo-center"><img src={logoBR} alt="Bicho Raro" className="logo-br" decoding="async" /></div>
          <div className="brand-label"><span>BICHO RARO</span></div>
        </motion.button>
      </div>
      <button className="strategic-back category-back" onClick={() => navigate("/")}>{copy.back}</button>
    </main>
  );
}
