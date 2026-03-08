import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Studies() {
  return (
    <section id="estudios" className="studies section">
      {/* Fondo suave no repetitivo */}
      <div className="studies-bg" />

      {/* Título: entra derecha -> izquierda */}
      <motion.h2
        className="title-best studies-title"
        initial={{ opacity: 0, x: 140 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.9, ease }}
      >
        Estudios
      </motion.h2>

      <div className="studies-grid">
        {/* Rayas: abajo -> arriba simultáneo (después del título) */}
        <motion.div
          className="studies-bars"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } },
          }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.span
              key={i}
              className="bar"
              variants={{
                hidden: { opacity: 0, y: 30, scaleY: 0.6 },
                show: {
                  opacity: 1,
                  y: 0,
                  scaleY: 1,
                  transition: { duration: 0.7, ease },
                },
              }}
            />
          ))}
        </motion.div>

        {/* 01 (arriba -> abajo) */}
        <StudyItem
          n="01"
          title="Grado de Bachiller en Ciencias de la Comunicación con mención en Publicidad"
          subtitle="Estudios Universitarios"
          year="2019 – 2025"
          dir="down"
          delay={0.55}
        />

        {/* 02 (abajo -> arriba) */}
        <StudyItem
          n="02"
          title="Brother Lima Escuela de Creativos"
          subtitle="Integral intensivo de branding"
          year="2025"
          dir="up"
          delay={0.72}
        />

        {/* 03 (arriba -> abajo) */}
        <StudyItem
          n="03"
          title="Brother Lima Escuela de Creativos"
          subtitle="Dirección de Arte"
          year="2025"
          dir="down"
          delay={0.89}
        />

        {/* 04 (abajo -> arriba) */}
        <StudyItem
          n="04"
          title="Santander Open Academy"
          subtitle="Introducción al comportamiento del consumidor"
          year="2026"
          dir="up"
          delay={1.06}
        />

        {/* 05 (arriba -> abajo) */}
        <StudyItem
          n="05"
          title="La Calle Escuela Creativa"
          subtitle="Planning y Estrategia"
          year="2026"
          dir="down"
          delay={1.23}
        />
      </div>
    </section>
  );
}

function StudyItem({
  n,
  title,
  subtitle,
  year,
  dir,
  delay,
}: {
  n: string;
  title: string;
  subtitle: string;
  year: string;
  dir: "up" | "down";
  delay: number;
}) {
  const fromY = dir === "up" ? 60 : -60;

  return (
    <motion.article
      className="study-card"
      initial={{ opacity: 0, y: fromY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.85, ease: ease as any, delay }}
    >
      <div className="study-left">
        <div className="study-num">{n}</div>
      </div>

      <div className="study-right">
        <div className="study-year text-open">{year}</div>
        <div className="study-name text-open">{title}</div>
        <div className="study-sub text-open">{subtitle}</div>
      </div>
    </motion.article>
  );
}