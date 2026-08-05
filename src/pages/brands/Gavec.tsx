import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LanguageToggle from "../../components/LanguageToggle";
import { useLanguage } from "../../i18n/useLanguage";
import gavecLogo from "../../assets/BRANDING AREA/2 portadas branding/LogoG.webp";
import gavecPortada from "../../assets/BRANDING AREA/2 portadas branding/GAVEC.webp";
import gavecPostEn from "../../assets/localized/en/gavec-post.webp";
import gavecBoxEn from "../../assets/localized/en/gavec-box.webp";
import gavecCapEn from "../../assets/localized/en/gavec-cap.webp";

const gavecImages = Object.entries(import.meta.glob<string>("../../assets/BRANDING AREA/Contenido Gavec/*.webp", { eager: true, import: "default" }))
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB));

const englishImageFor = (path: string, original: string) => {
  if (path.endsWith("Post ig.webp")) return gavecPostEn;
  if (path.endsWith("Caja 2 Mockup.webp")) return gavecBoxEn;
  if (path.endsWith("Cap Mockup.webp")) return gavecCapEn;
  return original;
};

export default function Gavec() {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const { language } = useLanguage();
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 140, damping: 22, mass: 0.4 });
  const gallery = gavecImages.filter(([, src]) => {
    const value = String(src).toLowerCase();
    return !value.includes("logo.") && !value.includes("portada.");
  });
  const copy = language === "es"
    ? {
        back: "← Volver", coverAlt: "Portada de GAVEC",
        first: <>GAVEC nace desde la idea de que el movimiento es una forma de libertad y bienestar, y que el deporte puede integrarse de manera natural en la vida diaria. La marca inspira a seguir en movimiento combinando comodidad, funcionalidad y diseño premium accesible.<br /><br />Su identidad visual refleja energía, resiliencia y autenticidad, tomando al cóndor como símbolo de visión, fuerza y libertad.</>,
        second: "Más que ropa deportiva, GAVEC se posiciona como un estilo de vida activo y consciente. Una marca pensada para quienes encuentran en el movimiento una forma de sentirse mejor, avanzar a su propio ritmo y vivir cada paso como un logro personal.",
        client: "Cliente: Nataly Ventoncilla", direction: "Identidad de Marca y Dirección Visual: Valeria Torres",
      }
    : {
        back: "← Back", coverAlt: "GAVEC cover",
        first: <>GAVEC was born from the idea that movement is a form of freedom and well-being, and that sport can become a natural part of everyday life. The brand inspires people to keep moving by combining comfort, functionality, and accessible premium design.<br /><br />Its visual identity reflects energy, resilience, and authenticity, using the condor as a symbol of vision, strength, and freedom.</>,
        second: "More than sportswear, GAVEC positions itself as an active, mindful lifestyle. A brand created for those who find in movement a way to feel better, move forward at their own pace, and experience every step as a personal achievement.",
        client: "Client: Nataly Ventoncilla", direction: "Brand Identity and Visual Direction: Valeria Torres",
      };

  return (
    <main className="gavec-page">
      <motion.div className="scroll-progress" style={{ scaleX: bar }} />
      <div className="gavec-top"><button className="ghost-btn" onClick={() => navigate(-1)}>{copy.back}</button><LanguageToggle tone="light" /><button className="ghost-btn" onClick={() => navigate("/branding")}>{language === "es" ? "Proyectos de Branding" : "Branding Projects"}</button></div>
      <section className="gavec-hero">
        <div className="gavec-cover"><img className="gavec-cover__img" src={gavecPortada} alt={copy.coverAlt} decoding="async" /><div className="gavec-cover__shade" /><motion.img className="gavec-cover__logo" src={gavecLogo} alt="GAVEC" decoding="async" initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.12 }} /></div>
        <div className="gavec-right"><motion.p className="gavec-desc" initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.12 }}>{copy.first}</motion.p><motion.p className="gavec-desc" initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }} whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.8 }}>{copy.second}</motion.p><div className="gavec-meta"><span>{copy.client}</span><span>{copy.direction}</span></div></div>
      </section>
      <section className="gavec-gallery">{gallery.map(([path, src], index) => <motion.figure key={path} className="gavec-shot" initial={shouldReduceMotion ? false : { opacity: 0, y: 40, filter: "blur(6px)" }} whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.75, delay: Math.min(index * 0.05, 0.2) }}><img src={language === "en" ? englishImageFor(path, src) : src} alt={`GAVEC ${index + 1}`} loading="lazy" decoding="async" /></motion.figure>)}</section>
    </main>
  );
}
