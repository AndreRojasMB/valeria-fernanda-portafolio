import { motion, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LanguageToggle from "../../components/LanguageToggle";
import { useLanguage } from "../../i18n/useLanguage";
import syncroEn from "../../assets/localized/en/syncro.webp";

const syncroImages = Object.values(import.meta.glob<string>("../../assets/PLANNING AREA/SYNCRO PLANNING/*.webp", { eager: true, import: "default" })).sort();

export default function Syncro() {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const { language } = useLanguage();
  const heroImg = language === "en" ? syncroEn : syncroImages[0];
  const copy = language === "es"
    ? { back: "← Volver", category: "Proyectos Estratégicos", request: "PEDIDO", requestBody: "Propuesta para sumar el Kéfir al portafolio de productos de Pilsen", opportunity: "OPORTUNIDAD", opportunityBody: "Bebida de Transición", scroll: "Desliza para ver la pieza ↓", placeholder: "Coloca imágenes en:", imageAlt: "Pieza estratégica de Syncro" }
    : { back: "← Back", category: "Strategic Projects", request: "REQUEST", requestBody: "Proposal to add kefir to Pilsen’s product portfolio", opportunity: "OPPORTUNITY", opportunityBody: "Transition Beverage", scroll: "Scroll to view the artwork ↓", placeholder: "Add images to:", imageAlt: "Syncro strategic artwork" };

  return (
    <main className="case-dark">
      <div className="art-bg" />
      <div className="case-top"><button className="ghost-btn case-btn" onClick={() => navigate(-1)}>{copy.back}</button><LanguageToggle tone="light" /><button className="ghost-btn case-btn" onClick={() => navigate("/strategic")}>{copy.category}</button></div>
      <section className="case-screen case-textscreen">
        <motion.h1 className="case-title anton-title" initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}>PILSEN “SYNCRO”</motion.h1>
        <motion.div className="case-block" initial={shouldReduceMotion ? false : { opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: shouldReduceMotion ? 0 : 0.75, delay: shouldReduceMotion ? 0 : 0.15 }}><div className="kicker">{copy.request}</div><p className="case-text">{copy.requestBody}</p></motion.div>
        <motion.div className="case-block" initial={shouldReduceMotion ? false : { opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: shouldReduceMotion ? 0 : 0.75, delay: shouldReduceMotion ? 0 : 0.28 }}><div className="kicker">{copy.opportunity}</div><p className="case-text">{copy.opportunityBody}</p></motion.div>
        <motion.div className="scroll-hint" initial={shouldReduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: shouldReduceMotion ? 0 : 0.7, duration: shouldReduceMotion ? 0 : 0.7 }}>{copy.scroll}</motion.div>
      </section>
      <section className="case-screen case-mediascreen">{heroImg ? <motion.img className="case-fullimg" src={heroImg} alt={copy.imageAlt} loading="lazy" decoding="async" initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.03 }} whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8 }} /> : <div className="case-media-placeholder">{copy.placeholder} <b>SYNCRO PLANNING</b></div>}</section>
      {syncroImages.length > 1 && <section className="case-gallery">{syncroImages.slice(1).map((src, index) => <motion.figure key={src} className="case-shot" initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }} whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.8, delay: Math.min(index * 0.05, 0.2) }}><img src={src} alt={`Syncro ${index + 2}`} loading="lazy" decoding="async" /></motion.figure>)}</section>}
    </main>
  );
}
