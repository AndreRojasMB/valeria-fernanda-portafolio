import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const syncroImages = Object.values(
  import.meta.glob<string>(
    "../../assets/PLANNING AREA/SYNCRO PLANNING/*.webp",
    { eager: true, import: "default" }
  )
).sort();

export default function Syncro() {
  const navigate = useNavigate();
  const heroImg = syncroImages[0];

  return (
    <main className="case-dark">
      <div className="art-bg" />

      <div className="case-top">
        <button className="ghost-btn case-btn" onClick={() => navigate(-1)}>
          ← Volver
        </button>
        <button className="ghost-btn case-btn" onClick={() => navigate("/strategic")}>
          Strategic Projects
        </button>
      </div>

      {/* 1) Pantalla Texto (100vh) */}
      <section className="case-screen case-textscreen">
        <motion.h1
          className="case-title anton-title"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          PILSEN “SYNCRO”
        </motion.h1>

        <motion.div
          className="case-block"
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="kicker">PEDIDO</div>
          <p className="case-text">
            Propuesta para sumar el Kéfir al portafolio de productos de Pilsen
          </p>
        </motion.div>

        <motion.div
          className="case-block"
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.28 }}
        >
          <div className="kicker">OPORTUNIDAD</div>
          <p className="case-text">Bebida de Transición</p>
        </motion.div>

        <motion.div
          className="scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Desliza para ver la pieza ↓
        </motion.div>
      </section>

      {/* 2) Pantalla Imagen (100vh) */}
      <section className="case-screen case-mediascreen">
        {heroImg ? (
          <motion.img
            className="case-fullimg"
            src={heroImg}
            alt="Syncro reference"
            loading="lazy"
            decoding="async"
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9 }}
          />
        ) : (
          <div className="case-media-placeholder">
            Coloca imágenes en: <b>SYNCRO PLANNING</b>
          </div>
        )}
      </section>

      {/* Galería extra */}
      {syncroImages.length > 1 && (
        <section className="case-gallery">
          {syncroImages.slice(1).map((src, i) => (
            <motion.figure
              key={src}
              className="case-shot"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.9, delay: Math.min(i * 0.06, 0.24) }}
            >
              <img src={src} alt={`Syncro ${i + 2}`} loading="lazy" decoding="async" />
            </motion.figure>
          ))}
        </section>
      )}
    </main>
  );
}
