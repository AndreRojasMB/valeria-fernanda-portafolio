import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import brandingVideo from "../assets/videos/branding.mp4";
import strategicVideo from "../assets/videos/strategic.mp4";

type ProjectVideoCardProps = {
  title: string;
  videoSrc: string;
  onClick: () => void;
};

function ProjectVideoCard({ title, videoSrc, onClick }: ProjectVideoCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldLoadVideo(true);
        observer.disconnect();
      },
      { rootMargin: "320px" }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!shouldLoadVideo || !video) return;

    video.load();
    void video.play().catch(() => undefined);
  }, [shouldLoadVideo]);

  return (
    <motion.div
      ref={cardRef}
      className="video-card"
      role="button"
      tabIndex={0}
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        onClick();
      }}
    >
      <video ref={videoRef} className="video-el" autoPlay loop muted playsInline preload="metadata">
        {shouldLoadVideo && <source src={videoSrc} type="video/mp4" />}
      </video>
      <div className="video-overlay">
        <h3>{title}</h3>
      </div>
    </motion.div>
  );
}

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
        <ProjectVideoCard
          title="Branding Projects"
          videoSrc={brandingVideo}
          onClick={() => navigate("/branding")}
        />

        <ProjectVideoCard
          title="Strategic Projects"
          videoSrc={strategicVideo}
          onClick={() => navigate("/strategic")}
        />
      </div>
    </section>
  );
}
