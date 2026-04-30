import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import syncroImg from "../assets/PLANNING AREA/3 portadas planning/syncro.webp";
import pumaImg from "../assets/PLANNING AREA/3 portadas planning/puma.webp";
import ikeaLogo from "../assets/PLANNING AREA/HABLA PUES PLANNING/LOGO.webp";

export default function Strategic() {
  const navigate = useNavigate();

  return (
    <main className="strategic-page">
      <div className="strategic-bg" />

      <motion.h1
        className="title-best strategic-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85 }}
      >
        Strategic Projects
      </motion.h1>

      <div className="strategic-grid">
        {/* SYNCRO */}
        <motion.button
          className="strategic-tile"
          onClick={() => navigate("/strategic/syncro")}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.08 }}
          whileHover={{ scale: 1.02 }}
        >
          <img src={syncroImg} alt="SYNCRO" decoding="async" />
          <div className="strategic-shade" />
          <div className="strategic-label label-syncro">
            <div className="label-box">
              <strong className="main">SYNCRO</strong>
            </div>
          </div>
        </motion.button>

        {/* IKEA */}
        <motion.button
          className="strategic-tile strategic-tile--ikea"
          onClick={() => navigate("/strategic/habla-pues")}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.16 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="strategic-ikea-bg" />
          <div className="strategic-ikea-grid" />
          <div className="strategic-ikea-glow strategic-ikea-glow--1" />
          <div className="strategic-ikea-glow strategic-ikea-glow--2" />
          <div className="strategic-ikea-glow strategic-ikea-glow--3" />

          <div className="strategic-ikea-inner">
            <img src={ikeaLogo} alt="IKEA" className="strategic-ikea-logo" decoding="async" />

            <div className="strategic-ikea-copy">
            </div>
          </div>

          <div className="strategic-shade strategic-shade--ikea" />
        </motion.button>

        {/* PUMA */}
        <motion.button
          className="strategic-tile"
          onClick={() => navigate("/strategic/puma")}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.24 }}
          whileHover={{ scale: 1.02 }}
        >
          <img src={pumaImg} alt="PUMA" decoding="async" />
          <div className="strategic-shade" />
          <div className="strategic-label label-puma">
            <div className="label-box">
              <strong className="main">PUMA</strong>
              <span className="sub">Freedom fits better</span>
            </div>
          </div>
        </motion.button>
      </div>

      <button className="strategic-back" onClick={() => navigate("/")}>
        ← Volver al Home
      </button>
    </main>
  );
}
