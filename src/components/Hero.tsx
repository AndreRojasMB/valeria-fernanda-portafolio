import { motion } from "framer-motion";
import portada from "../assets/portada/portada.webp";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <img src={portada} className="hero-bg" alt="Portada" decoding="async" fetchPriority="high" />
      <div className="hero-shade" />

      <div className="hero-inner">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 46, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.05, ease: "easeOut" }}
        >
          Bienvenidos
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
        >
          Soy <b>Valeria Torres</b> y me interesa entender el <b>porqué</b> antes de pensar el <b>cómo</b>.
          Me muevo entre la estrategia de marca y la planificación, ayudando a que las ideas tengan{" "}
          <b>dirección</b> y <b>sentido</b>.
        </motion.p>
      </div>
    </section>
  );
}
