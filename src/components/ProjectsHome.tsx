import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import brandingVideo from "../assets/videos/branding.mp4";
import strategicVideo from "../assets/videos/strategic.mp4";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const gridVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 38, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.52, ease },
  },
};

type ProjectVideoCardProps = {
  title: string;
  videoSrc: string;
  onClick: () => void;
  shouldReduceMotion: boolean | null;
};

function ProjectVideoCard({ title, videoSrc, onClick, shouldReduceMotion }: ProjectVideoCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoInitialized = useRef(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isVideoActive, setIsVideoActive] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const preloadObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldLoadVideo(true);
        preloadObserver.disconnect();
      },
      { rootMargin: "240px 0px" }
    );

    const playbackObserver = new IntersectionObserver(
      ([entry]) => setIsVideoActive(entry.isIntersecting),
      { threshold: 0.08 }
    );

    preloadObserver.observe(card);
    playbackObserver.observe(card);

    return () => {
      preloadObserver.disconnect();
      playbackObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!shouldLoadVideo || !video) return;

    if (!videoInitialized.current) {
      video.load();
      videoInitialized.current = true;
    }

    if (isVideoActive) {
      void video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [isVideoActive, shouldLoadVideo]);

  return (
    <motion.div
      ref={cardRef}
      className="video-card"
      role="button"
      tabIndex={0}
      variants={cardVariants}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.025, y: -6 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        onClick();
      }}
      aria-label={`Abrir ${title}`}
    >
      <video ref={videoRef} className="video-el" loop muted playsInline preload="none" aria-hidden="true">
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
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="proyectos" className="projects section">
      <div className="projects-bg" />

      <motion.h2
        className="title-best projects-title"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 34 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.58, ease }}
      >
        Proyectos
      </motion.h2>

      <motion.div
        className="video-grid"
        variants={gridVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "show"}
        viewport={{ once: true, amount: 0.12, margin: "0px 0px -6% 0px" }}
      >
        <ProjectVideoCard
          title="Branding Projects"
          videoSrc={brandingVideo}
          onClick={() => navigate("/branding")}
          shouldReduceMotion={shouldReduceMotion}
        />

        <ProjectVideoCard
          title="Strategic Projects"
          videoSrc={strategicVideo}
          onClick={() => navigate("/strategic")}
          shouldReduceMotion={shouldReduceMotion}
        />
      </motion.div>
    </section>
  );
}
