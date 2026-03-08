import { motion, useScroll, useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";

import gavecLogo from "../../assets/BRANDING AREA/2 portadas branding/LogoG.png";
import gavecPortada from "../../assets/BRANDING AREA/2 portadas branding/GAVEC.png";

/**
 * Auto-carga TODAS las imágenes dentro de:
 * src/assets/BRANDING AREA/Contenido Gavec/
 */
const gavecImages = Object.values(
  import.meta.glob<string>(
    "../../assets/BRANDING AREA/Contenido Gavec/*.{png,jpg,jpeg,webp}",
    { eager: true, import: "default" }
  )
).sort();

export default function Gavec() {
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 140, damping: 22, mass: 0.4 });

  // ✅ Galería: excluir logo y portada SIEMPRE (aunque el glob las incluya)
  const gallery = gavecImages.filter((src) => {
    const s = String(src).toLowerCase();
    return !s.includes("/logo.") && !s.includes("\\logo.") && !s.includes("logo.") &&
           !s.includes("/portada.") && !s.includes("\\portada.") && !s.includes("portada.");
  });

  return (
    <main className="gavec-page">
      <motion.div className="scroll-progress" style={{ scaleX: bar }} />

      <div className="gavec-top">
        <button className="ghost-btn" onClick={() => navigate(-1)}>
          ← Volver
        </button>
        <button className="ghost-btn" onClick={() => navigate("/branding")}>
          Branding Projects
        </button>
      </div>

      {/* ✅ HERO: PORTADA EXACTA + LOGO centrado + textos derecha */}
      <section className="gavec-hero">
        <div className="gavec-cover">
          <img className="gavec-cover__img" src={gavecPortada} alt="GAVEC portada" />
          <div className="gavec-cover__shade" />

          <motion.img
            className="gavec-cover__logo"
            src={gavecLogo}
            alt="Logo GAVEC"
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12 }}
          />
        </div>

        <div className="gavec-right">

          <motion.p
            className="gavec-desc"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12 }}
          >
            GAVEC nace desde la idea de que el movimiento es una forma de libertad y bienestar, y
            que el deporte puede integrarse de manera natural en la vida diaria. La marca inspira a
            seguir en movimiento combinando comodidad, funcionalidad y diseño premium accesible.
            <br /><br />
            Su identidad visual refleja energía, resiliencia y autenticidad, tomando al cóndor como
            símbolo de visión, fuerza y libertad.
          </motion.p>

          <motion.p
            className="gavec-desc"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, delay: 0.05 }}
          >
            Más que ropa deportiva, GAVEC se posiciona como un estilo de vida activo y consciente.
            Una marca pensada para quienes encuentran en el movimiento una forma de sentirse mejor,
            avanzar a su propio ritmo y vivir cada paso como un logro personal.
          </motion.p>

          <div className="gavec-meta">
            <span>Cliente: Nataly Ventoncilla</span>
            <span>Identidad de Marca y Dirección Visual: Valeria Torres</span>
          </div>
        </div>
      </section>

      <section className="gavec-gallery">
        {gallery.map((src, i) => (
          <motion.figure
            key={src}
            className="gavec-shot"
            initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, delay: Math.min(i * 0.06, 0.25) }}
          >
            <img src={src} alt={`GAVEC ${i + 1}`} loading="lazy" />
          </motion.figure>
        ))}
      </section>
    </main>
  );
}