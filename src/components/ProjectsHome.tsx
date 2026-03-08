import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import brandingVideo from "../assets/videos/branding.mp4";
import strategicVideo from "../assets/videos/strategic.mp4";

export default function ProjectsHome() {
  const navigate = useNavigate();

  return (
    <section id="proyectos" className="projects section">
      <div className="projects-bg" />

      <motion.h2
        className="title-best projects-title"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        Proyectos
      </motion.h2>

      <div className="video-grid">
        <motion.div
          className="video-card"
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/branding")}
        >
          <video className="video-el" autoPlay loop muted playsInline preload="auto">
            <source src={brandingVideo} type="video/mp4" />
          </video>
          <div className="video-overlay">
            <h3>Branding Projects</h3>
          </div>
        </motion.div>

        <motion.div
          className="video-card"
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/strategic")}
        >
          <video className="video-el" autoPlay loop muted playsInline preload="auto">
            <source src={strategicVideo} type="video/mp4" />
          </video>
          <div className="video-overlay">
            <h3>Strategic Projects</h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}