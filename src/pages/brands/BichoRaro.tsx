import { motion, useScroll, useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";

import bichoLogo from "../../assets/BRANDING AREA/Contenido bicho raro/Logo.webp";
import bichoCover from "../../assets/BRANDING AREA/Contenido bicho raro/portada.webp";

/**
 * Auto-carga TODAS las imágenes dentro de:
 * src/assets/BRANDING AREA/Contenido bicho raro/
 */
const hiddenGalleryImages = ["letrero largo bicho.webp", "post_ig1.webp"];

const bichoImages = Object.entries(
  import.meta.glob<string>(
    "../../assets/BRANDING AREA/Contenido bicho raro/*.webp",
    { eager: true, import: "default" }
  )
)
  .filter(([path]) => !hiddenGalleryImages.some((name) => path.endsWith(name)))
  .sort(([pathA], [pathB]) => (pathA > pathB ? 1 : pathA < pathB ? -1 : 0))
  .map(([, src]) => src);

export default function BichoRaro() {
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 140, damping: 22, mass: 0.4 });

  // ✅ galería = todo MENOS portada/logo (por si entran al glob)
  const gallery = bichoImages.filter((src) => {
    const s = String(src).toLowerCase();
    return !s.includes("portada") && !s.includes("logo");
  });

  return (
    <main className="bicho-page">
      <motion.div className="scroll-progress bicho-progress" style={{ scaleX: bar }} />

      <div className="bicho-top">
        <button className="ghost-btn bicho-btn" onClick={() => navigate(-1)}>
          ← Volver
        </button>
        <button className="ghost-btn bicho-btn" onClick={() => navigate("/branding")}>
          Branding Projects
        </button>
      </div>

      {/* ✅ HERO: portada izquierda + contenido derecha */}
      <section className="bicho-hero">
        <div className="bicho-noise" />

        {/* IZQUIERDA: portada + logo centrado */}
        <div className="bicho-cover">
          <img className="bicho-cover__img" src={bichoCover} alt="Bicho Raro portada" decoding="async" />
          <div className="bicho-cover__shade" />

          <motion.img
            className="bicho-cover__logo"
            src={bichoLogo}
            alt="Logo Bicho Raro"
            decoding="async"
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12 }}
          />
        </div>

        {/* DERECHA: todo el contenido */}
        <div className="bicho-right">

          <motion.p
            className="bicho-desc"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12 }}
          >
            Bicho Raro nace desde la necesidad de romper con lo predecible. En un entorno saturado
            de mensajes iguales, la marca se construye para cuestionar, incomodar y decir lo que
            otros prefieren callar.
            <br /><br />
            Su identidad visual y narrativa se apoyan en la distorsión, el contraste y lo no
            convencional para generar impacto y provocar conversación.
          </motion.p>

          <motion.p
            className="bicho-desc"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9 }}
          >
            Más que una productora audiovisual, Bicho Raro se posiciona como un aliado creativo para
            marcas con propósito y voz propia: atreverse a ser diferentes y construir comunidad desde
            lo que las hace únicas.
          </motion.p>

                    <div className="bicho-meta">
            <span>Cliente: Cesar Ordoñez</span>
            <span>Identidad de Marca y Dirección Visual: Valeria Torres</span>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bicho-gallery">
        {gallery.map((src, i) => (
          <motion.figure
            key={src}
            className="bicho-shot"
            initial={{ opacity: 0, y: 40, rotate: i % 2 === 0 ? -0.25 : 0.25 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, delay: Math.min(i * 0.06, 0.25) }}
          >
            <img src={src} alt={`Bicho Raro ${i + 1}`} loading="lazy" decoding="async" />
            <div className="bicho-scanline" />
          </motion.figure>
        ))}
      </section>
    </main>
  );
}
