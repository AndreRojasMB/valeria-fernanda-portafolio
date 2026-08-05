import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../i18n/useLanguage";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Study = { year: string; title: string; subtitle: string; location?: string };

const studiesByLanguage = {
  es: [
    { year: "2019 – 2025", title: "Grado de Bachiller en Ciencias de la Comunicación con mención en Publicidad", subtitle: "Estudios Universitarios" },
    { year: "2025", title: "Brother Lima Escuela de Creativos", subtitle: "Integral intensivo de branding" },
    { year: "2025", title: "Brother Lima Escuela de Creativos", subtitle: "Dirección de Arte" },
    { year: "2026", title: "Santander Open Academy", subtitle: "Introducción al comportamiento del consumidor" },
    { year: "2026", title: "La Calle Escuela Creativa", subtitle: "Planning y Estrategia" },
    { year: "2026", title: "Pacífico Business School", subtitle: "Behavioral Design", location: "Lima, Perú" },
  ],
  en: [
    { year: "2019 – 2025", title: "Bachelor’s Degree in Communication Sciences with a specialization in Advertising", subtitle: "University Studies" },
    { year: "2025", title: "Brother Lima School of Creatives", subtitle: "Intensive Branding Program" },
    { year: "2025", title: "Brother Lima School of Creatives", subtitle: "Art Direction" },
    { year: "2026", title: "Santander Open Academy", subtitle: "Introduction to Consumer Behavior" },
    { year: "2026", title: "La Calle Creative School", subtitle: "Planning and Strategy" },
    { year: "2026", title: "Pacífico Business School", subtitle: "Behavioral Design", location: "Lima, Peru" },
  ],
} satisfies Record<"es" | "en", readonly Study[]>;

export default function Studies() {
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const studies = studiesByLanguage[language];

  return (
    <section id="estudios" className="studies section">
      <div className="studies-bg" />
      <motion.h2 className="title-best studies-title" initial={shouldReduceMotion ? false : { opacity: 0, x: 72 }} whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.65, ease }}>
        {language === "es" ? "Estudios" : "Studies"}
      </motion.h2>
      <div className="studies-grid">
        <motion.div className="studies-bars" initial={shouldReduceMotion ? false : "hidden"} whileInView={shouldReduceMotion ? undefined : "show"} viewport={{ once: true, amount: 0.25 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.12 } } }}>
          {Array.from({ length: 4 }).map((_, index) => (
            <motion.span key={index} className="bar" variants={{ hidden: { opacity: 0, y: 30, scaleY: 0.6 }, show: { opacity: 1, y: 0, scaleY: 1, transition: { duration: 0.45, ease } } }} />
          ))}
        </motion.div>
        {studies.map((study, index) => (
          <StudyItem key={`${study.year}-${study.title}-${study.subtitle}`} n={String(index + 1).padStart(2, "0")} {...study} shouldReduceMotion={shouldReduceMotion} />
        ))}
      </div>
    </section>
  );
}

function StudyItem({ n, title, subtitle, year, location, shouldReduceMotion }: Study & { n: string; shouldReduceMotion: boolean | null }) {
  return (
    <motion.article className="study-card" initial={shouldReduceMotion ? false : { opacity: 0, y: 26 }} whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18, margin: "0px 0px -6% 0px" }} transition={{ duration: 0.52, ease }}>
      <div className="study-left"><div className="study-num">{n}</div></div>
      <div className="study-right">
        <div className="study-meta">
          <div className="study-year text-open">{year}</div>
          {location && <div className="study-location text-open">{location}</div>}
        </div>
        <div className="study-name text-open">{title}</div>
        <div className="study-sub text-open">{subtitle}</div>
      </div>
    </motion.article>
  );
}
