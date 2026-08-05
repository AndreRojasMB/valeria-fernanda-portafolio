import { motion, useReducedMotion, type Variants } from "framer-motion";
import { waLink } from "../utils/whatsapp";
import linkedinIcon from "../assets/icons/linkedin.webp";
import { useLanguage } from "../i18n/useLanguage";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const containerVariants: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.06 } } };
const groupVariants: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const itemVariants: Variants = { hidden: { opacity: 0, y: 18, scale: 0.99 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.48, ease } } };
const titleVariants: Variants = { hidden: { opacity: 0, y: 30, scale: 0.985 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.58, ease } } };

export default function ThanksFooter() {
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const copy = language === "es"
    ? { thanks: "Gracias", cta: "Hablemos por WhatsApp", message: "¡Hola Valeria! ✨\nVi tu portafolio y quiero conversar sobre un proyecto.\n\n✅ Proyecto: ____\n🎯 Objetivo: ____\n📍 País/ciudad: ____\n¿Podemos agendar?" }
    : { thanks: "Thank you", cta: "Let’s talk on WhatsApp", message: "Hi Valeria! ✨\nI saw your portfolio and I’d like to discuss a project.\n\n✅ Project: ____\n🎯 Goal: ____\n📍 Country/city: ____\nCan we schedule a call?" };
  const phoneDisplay = "+51 955 111 454";
  const email = "valeriafernandatorres15@gmail.com";
  const linkedInUrl = "https://www.linkedin.com/in/valeria-fernanda-torres-atachagua?utm_source=share_via&utm_content=profile&utm_medium=member_android";

  return (
    <section className="thanks2" id="contacto">
      <div className="art-bg" />
      <motion.div className="thanks2__wrap" variants={containerVariants} initial={shouldReduceMotion ? false : "hidden"} whileInView={shouldReduceMotion ? undefined : "show"} viewport={{ once: true, amount: 0.18 }}>
        <motion.h2 className="thanks2__title" variants={titleVariants}>{copy.thanks}</motion.h2>
        <motion.div className="thanks2__info" variants={groupVariants}>
          <motion.a className="thanks2__line" href={waLink(copy.message)} target="_blank" rel="noreferrer" variants={itemVariants} whileHover={shouldReduceMotion ? undefined : { y: -2 }}>{phoneDisplay}</motion.a>
          <motion.a className="thanks2__line" href={`mailto:${email}`} variants={itemVariants} whileHover={shouldReduceMotion ? undefined : { y: -2 }}>{email}</motion.a>
        </motion.div>
        <motion.a className="thanks2__linkedinBtn" href={linkedInUrl} target="_blank" rel="noreferrer" variants={itemVariants} whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.035 }} aria-label="LinkedIn">
          <img src={linkedinIcon} alt="LinkedIn" loading="lazy" decoding="async" />
        </motion.a>
        <motion.div className="thanks2__ctaRow" variants={itemVariants}>
          <a className="thanks2__cta" href={waLink(copy.message)} target="_blank" rel="noreferrer">{copy.cta}</a>
        </motion.div>
      </motion.div>
    </section>
  );
}
