import { motion, useReducedMotion, type Variants } from "framer-motion";
import { waLink } from "../utils/whatsapp";
import linkedinIcon from "../assets/icons/linkedin.webp";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.06 } },
};

const groupVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.99 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.48, ease },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.58, ease },
  },
};

export default function ThanksFooter() {
  const shouldReduceMotion = useReducedMotion();
  const WHATS_MSG =
    "¡Hola Valeria! ✨\nVi tu portafolio y quiero conversar sobre un proyecto.\n\n✅ Proyecto: ____\n🎯 Objetivo: ____\n📍 País/ciudad: ____\n¿Podemos agendar?";

  const phoneDisplay = "+51 955 111 454";
  const email = "valeriafernandatorres15@gmail.com";

  const LINKEDIN_URL = "https://www.linkedin.com/in/valeria-fernanda-torres-atachagua?utm_source=share_via&utm_content=profile&utm_medium=member_android";

  return (
    <section className="thanks2" id="contacto">
      <div className="art-bg" />

      <motion.div
        className="thanks2__wrap"
        variants={containerVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "show"}
        viewport={{ once: true, amount: 0.18 }}
      >
        <motion.h2 className="thanks2__title" variants={titleVariants}>
          Gracias
        </motion.h2>

        <motion.div className="thanks2__info" variants={groupVariants}>
          <motion.a
            className="thanks2__line"
            href={waLink(WHATS_MSG)}
            target="_blank"
            rel="noreferrer"
            variants={itemVariants}
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
          >
            {phoneDisplay}
          </motion.a>

          <motion.a
            className="thanks2__line"
            href={`mailto:${email}`}
            variants={itemVariants}
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
          >
            {email}
          </motion.a>
        </motion.div>

        <motion.a
          className="thanks2__linkedinBtn"
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          variants={itemVariants}
          whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.035 }}
          aria-label="LinkedIn"
        >
          <img src={linkedinIcon} alt="LinkedIn" loading="lazy" decoding="async" />
        </motion.a>

        <motion.div className="thanks2__ctaRow" variants={itemVariants}>
          <a className="thanks2__cta" href={waLink(WHATS_MSG)} target="_blank" rel="noreferrer">
            Hablemos por WhatsApp
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
