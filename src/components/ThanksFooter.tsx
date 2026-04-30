import { motion } from "framer-motion";
import { waLink } from "../utils/whatsapp";
import linkedinIcon from "../assets/icons/linkedin.webp"; // ✅ crea esta ruta o ajusta al ícono que tengas

export default function ThanksFooter() {
  const WHATS_MSG =
    "¡Hola Valeria! ✨\nVi tu portafolio y quiero conversar sobre un proyecto.\n\n✅ Proyecto: ____\n🎯 Objetivo: ____\n📍 País/ciudad: ____\n¿Podemos agendar?";

  const phoneDisplay = "+51 955 111 454";
  const email = "valeriafernandatorres15@gmail.com";

  const LINKEDIN_URL = "https://www.linkedin.com/in/valeria-fernanda-torres-atachagua?utm_source=share_via&utm_content=profile&utm_medium=member_android"; // <-- cambia esto

  return (
    <section className="thanks2" id="contacto">
      {/* fondo artístico del proyecto */}
      <div className="art-bg" />

      <div className="thanks2__wrap">
        <motion.h2
          className="thanks2__title"
          initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9 }}
        >
          Gracias
        </motion.h2>

        <motion.div
          className="thanks2__info"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          {/* Teléfono a WhatsApp */}
          <a className="thanks2__line" href={waLink(WHATS_MSG)} target="_blank" rel="noreferrer">
            {phoneDisplay}
          </a>

          {/* Email */}
          <a className="thanks2__line" href={`mailto:${email}`}>
            {email}
          </a>
        </motion.div>

        {/* LinkedIn (botón con icono) */}
        <motion.a
          className="thanks2__linkedinBtn"
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          aria-label="LinkedIn"
        >
          <img src={linkedinIcon} alt="LinkedIn" loading="lazy" decoding="async" />
        </motion.a>

        {/* CTA mini (opcional) */}
        <div className="thanks2__ctaRow">
          <a className="thanks2__cta" href={waLink(WHATS_MSG)} target="_blank" rel="noreferrer">
            Hablemos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
