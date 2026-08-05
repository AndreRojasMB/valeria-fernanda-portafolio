import { motion, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LanguageToggle from "../components/LanguageToggle";
import { useLanguage } from "../i18n/useLanguage";
import syncroImg from "../assets/PLANNING AREA/3 portadas planning/syncro.webp";
import pumaImg from "../assets/PLANNING AREA/3 portadas planning/puma.webp";
import ikeaLogo from "../assets/PLANNING AREA/HABLA PUES PLANNING/LOGO.webp";

export default function Strategic() {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const { language } = useLanguage();
  const copy = language === "es"
    ? { title: "Proyectos Estratégicos", back: "← Volver a proyectos", open: "Abrir proyecto" }
    : { title: "Strategic Projects", back: "← Back to projects", open: "Open project" };

  return (
    <main className="strategic-page">
      <div className="strategic-bg" />
      <div className="category-language"><LanguageToggle tone="dark" /></div>
      <motion.h1 className="title-best strategic-title" initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}>{copy.title}</motion.h1>
      <div className="strategic-grid">
        <motion.button className="strategic-tile" aria-label={`${copy.open} SYNCRO`} onClick={() => navigate("/strategic/syncro")} initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.08 }} whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}>
          <img src={syncroImg} alt="SYNCRO" decoding="async" /><div className="strategic-shade" /><div className="strategic-label label-syncro"><div className="label-box"><strong className="main">SYNCRO</strong></div></div>
        </motion.button>
        <motion.button className="strategic-tile strategic-tile--ikea" aria-label={`${copy.open} IKEA`} onClick={() => navigate("/strategic/habla-pues")} initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.16 }} whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}>
          <div className="strategic-ikea-bg" /><div className="strategic-ikea-grid" /><div className="strategic-ikea-glow strategic-ikea-glow--1" /><div className="strategic-ikea-glow strategic-ikea-glow--2" /><div className="strategic-ikea-glow strategic-ikea-glow--3" />
          <div className="strategic-ikea-inner"><img src={ikeaLogo} alt="IKEA" className="strategic-ikea-logo" decoding="async" /><div className="strategic-ikea-copy" /></div><div className="strategic-shade strategic-shade--ikea" />
        </motion.button>
        <motion.button className="strategic-tile" aria-label={`${copy.open} PUMA`} onClick={() => navigate("/strategic/puma")} initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.24 }} whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}>
          <img src={pumaImg} alt="PUMA" decoding="async" /><div className="strategic-shade" /><div className="strategic-label label-puma"><div className="label-box"><strong className="main">PUMA</strong><span className="sub">Freedom fits better</span></div></div>
        </motion.button>
      </div>
      <button className="strategic-back" onClick={() => navigate("/#proyectos")}>{copy.back}</button>
    </main>
  );
}
