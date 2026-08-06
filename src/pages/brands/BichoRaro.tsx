import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { useNavigate } from "react-router-dom";

import LanguageToggle from "../../components/LanguageToggle";
import { useLanguage } from "../../i18n/useLanguage";

import bichoLogo from "../../assets/BRANDING AREA/Contenido bicho raro/Logo.webp";
import bichoCover from "../../assets/BRANDING AREA/Contenido bicho raro/portada.webp";
import bichoPosterEn from "../../assets/localized/en/bicho-poster.webp";

const HIDDEN_GALLERY_IMAGES = new Set([
  "logo.webp",
  "portada.webp",
  "letrero largo bicho.webp",
  "post_ig1.webp",
  "post_ig2.webp",
  "post_ig3.webp",
]);

const imageModules = import.meta.glob<string>(
  "../../assets/BRANDING AREA/Contenido bicho raro/*.webp",
  {
    eager: true,
    import: "default",
  },
);

const galleryImages = Object.entries(imageModules)
  .filter(([path]) => {
    const fileName = path.split("/").pop()?.toLowerCase();

    return (
      fileName !== undefined &&
      !HIDDEN_GALLERY_IMAGES.has(fileName)
    );
  })
  .sort(([pathA], [pathB]) =>
    pathA.localeCompare(pathB, undefined, {
      numeric: true,
      sensitivity: "base",
    }),
  );

const getEnglishImage = (path: string, originalImage: string) => {
  if (path.endsWith("pozter.webp")) {
    return bichoPosterEn;
  }

  return originalImage;
};

export default function BichoRaro() {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const { language } = useLanguage();
  const { scrollYProgress } = useScroll();

  const progressBar = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 22,
    mass: 0.4,
  });

  const copy =
    language === "es"
      ? {
          back: "← Volver",
          brandingProjects: "Proyectos de Branding",
          coverAlt: "Portada de Bicho Raro",
          first: (
            <>
              Bicho Raro nace desde la necesidad de romper con lo predecible.
              En un entorno saturado de mensajes iguales, la marca se construye
              para cuestionar, incomodar y decir lo que otros prefieren callar.
              <br />
              <br />
              Su identidad visual y narrativa se apoyan en la distorsión, el
              contraste y lo no convencional para generar impacto y provocar
              conversación.
            </>
          ),
          second:
            "Más que una productora audiovisual, Bicho Raro se posiciona como un aliado creativo para marcas con propósito y voz propia: atreverse a ser diferentes y construir comunidad desde lo que las hace únicas.",
          client: "Cliente: Cesar Ordoñez",
          direction:
            "Identidad de Marca y Dirección Visual: Valeria Torres",
        }
      : {
          back: "← Back",
          brandingProjects: "Branding Projects",
          coverAlt: "Bicho Raro cover",
          first: (
            <>
              Bicho Raro was born from the need to break away from the
              predictable. In an environment saturated with identical messages,
              the brand was built to question, challenge, and say what others
              would rather leave unsaid.
              <br />
              <br />
              Its visual and narrative identity relies on distortion, contrast,
              and the unconventional to make an impact and spark conversation.
            </>
          ),
          second:
            "More than an audiovisual production company, Bicho Raro positions itself as a creative partner for brands with purpose and a voice of their own: daring to be different and building community around what makes them unique.",
          client: "Client: Cesar Ordoñez",
          direction: "Brand Identity and Visual Direction: Valeria Torres",
        };

  return (
    <main className="bicho-page">
      <motion.div
        className="scroll-progress bicho-progress"
        style={{ scaleX: progressBar }}
      />

      <div className="bicho-top">
        <button
          type="button"
          className="ghost-btn bicho-btn"
          onClick={() => navigate(-1)}
        >
          {copy.back}
        </button>

        <LanguageToggle tone="light" />

        <button
          type="button"
          className="ghost-btn bicho-btn"
          onClick={() => navigate("/branding")}
        >
          {copy.brandingProjects}
        </button>
      </div>

      <section className="bicho-hero">
        <div className="bicho-noise" />

        <div className="bicho-cover">
          <img
            className="bicho-cover__img"
            src={bichoCover}
            alt={copy.coverAlt}
            decoding="async"
          />

          <div className="bicho-cover__shade" />

          <motion.img
            className="bicho-cover__logo"
            src={bichoLogo}
            alt="Bicho Raro"
            decoding="async"
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    scale: 0.96,
                    y: 10,
                  }
            }
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.12,
            }}
          />
        </div>

        <div className="bicho-right">
          <motion.p
            className="bicho-desc"
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 18,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
            }}
          >
            {copy.first}
          </motion.p>

          <motion.p
            className="bicho-desc"
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 18,
                  }
            }
            whileInView={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: 1,
                    y: 0,
                  }
            }
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
            }}
          >
            {copy.second}
          </motion.p>

          <div className="bicho-meta">
            <span>{copy.client}</span>
            <span>{copy.direction}</span>
          </div>
        </div>
      </section>

      <section className="bicho-gallery">
        {galleryImages.map(([path, imageSource], index) => {
          const image =
            language === "en"
              ? getEnglishImage(path, imageSource)
              : imageSource;

          return (
            <motion.figure
              key={path}
              className="bicho-shot"
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 40,
                      rotate: index % 2 === 0 ? -0.25 : 0.25,
                    }
              }
              whileInView={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                      rotate: 0,
                    }
              }
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.75,
                delay: shouldReduceMotion
                  ? 0
                  : Math.min(index * 0.05, 0.2),
              }}
            >
              <img
                src={image}
                alt={`Bicho Raro ${index + 1}`}
                loading="lazy"
                decoding="async"
              />

              <div className="bicho-scanline" />
            </motion.figure>
          );
        })}
      </section>
    </main>
  );
}