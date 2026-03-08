import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import gavecBanner from "../assets/BRANDING AREA/2 portadas branding/GAVEC.png";
import bichoBanner from "../assets/BRANDING AREA/2 portadas branding/BICHO RARO.png";
import logoG from "../assets/BRANDING AREA/2 portadas branding/LogoG.png";
import logoBR from "../assets/BRANDING AREA/2 portadas branding/LogoBR.png";

export default function Branding() {
  const navigate = useNavigate();

  return (
    <main className="category-page">
      <div className="category-bg" />

      <motion.h1
        className="title-best category-title"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        Branding Projects
      </motion.h1>

      <div className="brand-grid">
        {/* GAVEC */}
        <motion.button
          className="brand-tile"
          onClick={() => navigate("/branding/gavec")}
          initial={{ opacity: 0, x: -80, rotate: -1 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          whileHover={{ scale: 1.03 }}
        >
          <img src={gavecBanner} alt="GAVEC" />
          <div className="brand-glow" />
            <div className="brand-logo-center">
                <img src={logoG} alt="Logo GAVEC" />
            </div>
          <div className="brand-label">
            <span>GAVEC</span>
          </div>
        </motion.button>

        {/* BICHO RARO */}
        <motion.button
          className="brand-tile"
          onClick={() => navigate("/branding/bichoraro")}
          initial={{ opacity: 0, x: 80, rotate: 1 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.28 }}
          whileHover={{ scale: 1.03 }}
        >
          <img src={bichoBanner} alt="Bicho Raro" />
          <div className="brand-glow" />
            <div className="brand-logo-center">
                <img src={logoBR} alt="Logo Bicho Raro" className="logo-br" />
            </div>
          <div className="brand-label">
            <span>BICHO RARO</span>
          </div>
        </motion.button>
      </div>
    </main>
  );
}