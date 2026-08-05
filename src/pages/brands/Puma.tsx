import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LanguageToggle from "../../components/LanguageToggle";
import { useLanguage } from "../../i18n/useLanguage";

import SPOT_IMGS from "../../assets/PLANNING AREA/PUMA PLANNING/SPOT IMAGENES.webp";
import STORIES_PUMA from "../../assets/PLANNING AREA/PUMA PLANNING/STORIES PUMA.webp";
import LOGOS_SPOT from "../../assets/PLANNING AREA/PUMA PLANNING/LOGOS SPOT.webp";

import OOH_1 from "../../assets/PLANNING AREA/PUMA PLANNING/OOH-1.webp";
import OOH_2 from "../../assets/PLANNING AREA/PUMA PLANNING/OOH-2.webp";
import OOH_3 from "../../assets/PLANNING AREA/PUMA PLANNING/OOH-3.webp";
import OOH_4 from "../../assets/PLANNING AREA/PUMA PLANNING/OOH-4.webp";
import OOH_6 from "../../assets/PLANNING AREA/PUMA PLANNING/OOH-6.webp";
import OOH_4_EN from "../../assets/localized/en/puma-ooh-map.webp";

import PR_1 from "../../assets/PLANNING AREA/PUMA PLANNING/PR-1.webp";
import PR_2 from "../../assets/PLANNING AREA/PUMA PLANNING/PR-2.webp";
import PR_3 from "../../assets/PLANNING AREA/PUMA PLANNING/PR-3.webp";
import PR_4 from "../../assets/PLANNING AREA/PUMA PLANNING/PR-4.webp";
import PR_5 from "../../assets/PLANNING AREA/PUMA PLANNING/PR-5.webp";
import PR_2_EN from "../../assets/localized/en/puma-pr-elcomercio.webp";
import PR_3_EN from "../../assets/localized/en/puma-pr-mercadonegro.webp";

import TM_1 from "../../assets/PLANNING AREA/PUMA PLANNING/TM-1.webp";
import TM_2 from "../../assets/PLANNING AREA/PUMA PLANNING/TM-2.webp";
import TM_3 from "../../assets/PLANNING AREA/PUMA PLANNING/TM-3.webp";
import TM_4 from "../../assets/PLANNING AREA/PUMA PLANNING/TM-4.webp";
import TM_5 from "../../assets/PLANNING AREA/PUMA PLANNING/TM-5.webp";
import TM_6 from "../../assets/PLANNING AREA/PUMA PLANNING/TM-6.webp";
import TM_7 from "../../assets/PLANNING AREA/PUMA PLANNING/TM-7.webp";
import TM_8 from "../../assets/PLANNING AREA/PUMA PLANNING/TM-8.webp";
import TM_9 from "../../assets/PLANNING AREA/PUMA PLANNING/TM-9.webp";
import TM_10 from "../../assets/PLANNING AREA/PUMA PLANNING/TM-10.webp";
import TM_9_EN from "../../assets/localized/en/puma-ecommerce-1.webp";
import TM_10_EN from "../../assets/localized/en/puma-ecommerce-2.webp";


type Cursor = { x: number; y: number };
type SlideKey = "spot" | "ooh" | "stories" | "pr" | "trade";

type PumaSlide = {
  key: SlideKey;
  name: string;
  panelText: string;
  neon: string;
  tintA: string;
  tintB: string;
  images: string[];
};

export default function Puma() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const copy = language === "es"
    ? {
        back: "← Volver",
        category: "Proyectos Estratégicos",
        insight: "Quiero encajar sin perder lo que me hace distinto.",
        brandRole: "ROL DE LA MARCA",
        brandRoleBody: "PUMA existe para permitir que las personas pertenezcan sin renunciar a su autenticidad.",
        strategicConcept: "CONCEPTO ESTRATÉGICO",
        strategicConceptBody: "Puedes pertenecer sin dejar de ser auténtico.",
        opportunity: "OPORTUNIDAD",
        opportunityBody: "Los jóvenes quieren encajar en su entorno social, pero cada vez sienten más incomodidad usando códigos de estilo que no los representan. La moda presiona a verse ‘correcto’, aunque no se sienta auténtico.",
        idea: "IDEA",
        ideaBody: "PUMA Sportstyle propone una forma de vestir que te permite encajar sin dejar de ser tú. La libertad no está en seguir la moda, sino en elegir lo que realmente te queda en actitud, cuerpo y estilo de vida.",
        media: "MEDIOS",
        mediaBody: "Digital (37%), TV Abierta (35%), OOH (25%), activaciones (2%) e influencers (1%).",
        scroll: "Desliza",
      }
    : {
        back: "← Back",
        category: "Strategic Projects",
        insight: "I want to fit in without losing what makes me different.",
        brandRole: "BRAND ROLE",
        brandRoleBody: "PUMA exists to let people belong without giving up their authenticity.",
        strategicConcept: "STRATEGIC CONCEPT",
        strategicConceptBody: "You can belong without giving up your authenticity.",
        opportunity: "OPPORTUNITY",
        opportunityBody: "Young people want to fit into their social environment, but they increasingly feel uncomfortable using style codes that do not represent them. Fashion pressures them to look ‘right,’ even when it does not feel authentic.",
        idea: "IDEA",
        ideaBody: "PUMA Sportstyle offers a way of dressing that lets you fit in without ceasing to be yourself. Freedom is not about following fashion, but about choosing what truly fits your attitude, body, and lifestyle.",
        media: "MEDIA",
        mediaBody: "Digital (37%), broadcast TV (35%), OOH (25%), activations (2%), and influencers (1%).",
        scroll: "Scroll",
      };

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 1800], [0, 140]);
  const bgYSpring = useSpring(bgY, { stiffness: 90, damping: 22, mass: 0.8 });

  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [cursor, setCursor] = useState<Cursor>({ x: 0, y: 0 });

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      setCursor({ x, y });
    };

    const onLeave = () => setCursor({ x: 0, y: 0 });

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

const slides: PumaSlide[] = useMemo(
  () => [
    {
      key: "spot",
      name: "SPOT",
      panelText: language === "es"
        ? "El spot presenta Freedom Fits Better como una actitud. A través de una narrativa visual dinámica y estética sportstyle, mostramos cómo cada persona encuentra su propia forma de expresarse y pertenecer. La campaña conecta autenticidad, movimiento y estilo para posicionar a PUMA como la marca que acompaña a una nueva generación que vive la libertad a su manera."
        : "The commercial presents Freedom Fits Better as an attitude. Through a dynamic visual narrative and sportstyle aesthetic, it shows how each person finds their own way to express themselves and belong. The campaign connects authenticity, movement, and style to position PUMA as the brand that supports a new generation living freedom on its own terms.",
      neon: "#00A0FF",
      tintA: "rgba(0,160,255,.24)",
      tintB: "rgba(255,0,230,.12)",
      images: [SPOT_IMGS, SPOT_IMGS],
    },
    {
      key: "ooh",
      name: "OOH",
      panelText: language === "es"
        ? "La presencia en OOH lleva el mensaje de Freedom Fits Better al espacio urbano, convirtiendo la ciudad en un escenario de expresión personal. Con visuales impactantes y ejecuciones adaptadas a cada formato, la campaña busca generar recordación inmediata y reforzar el posicionamiento de PUMA en puntos clave de contacto con el público."
        : "The OOH presence brings the Freedom Fits Better message into the urban landscape, turning the city into a stage for personal expression. With striking visuals and executions tailored to each format, the campaign aims to build immediate recall and strengthen PUMA’s positioning at key audience touchpoints.",
      neon: "#FF00E6",
      tintA: "rgba(255,0,230,.22)",
      tintB: "rgba(0,160,255,.10)",
      images: [OOH_6, OOH_1, OOH_2, OOH_3, language === "en" ? OOH_4_EN : OOH_4],
    },
    {
      key: "stories",
      name: "STORIES",
      panelText: language === "es"
        ? "En Stories, la campaña adopta el lenguaje ágil y vertical de las redes sociales para conectar con una audiencia que consume contenido de forma inmediata. Cada pieza está pensada para transmitir autenticidad, estilo y cercanía, reforzando a PUMA como una marca que se mueve al ritmo de la cultura digital."
        : "In Stories, the campaign adopts the fast, vertical language of social media to connect with an audience that consumes content instantly. Each piece conveys authenticity, style, and closeness, reinforcing PUMA as a brand that moves at the pace of digital culture.",
      neon: "#7CFF00",
      tintA: "rgba(124,255,0,.20)",
      tintB: "rgba(255,255,255,.08)",
      images: [STORIES_PUMA],
    },
    {
      key: "pr",
      name: "PR STUNT",
      panelText: language === "es"
        ? "El PR Stunt convierte la campaña en una experiencia tangible. A través de activaciones y apariciones mediáticas estratégicas, Freedom Fits Better se materializa en espacios donde la marca interactúa directamente con las personas, generando conversación, cobertura y una percepción innovadora y culturalmente relevante."
        : "The PR stunt turns the campaign into a tangible experience. Through strategic activations and media appearances, Freedom Fits Better comes to life in spaces where the brand interacts directly with people, generating conversation, coverage, and an innovative, culturally relevant perception.",
      neon: "#B26BFF",
      tintA: "rgba(178,107,255,.22)",
      tintB: "rgba(0,160,255,.08)",
      images: [PR_1, language === "en" ? PR_2_EN : PR_2, language === "en" ? PR_3_EN : PR_3, PR_4, PR_5],
    },
    {
      key: "trade",
      name: "TRADE MARKETING",
      panelText: language === "es"
        ? "En el punto de venta, Freedom Fits Better cobra vida a través de exhibiciones, intervenciones visuales y experiencias de compra que destacan la categoría Sportstyle. El objetivo es transformar el espacio retail en un entorno que inspire estilo, impulse la rotación de productos y fortalezca la conexión entre PUMA y el consumidor."
        : "At the point of sale, Freedom Fits Better comes to life through displays, visual interventions, and shopping experiences that highlight the Sportstyle category. The goal is to transform the retail space into an environment that inspires style, drives product turnover, and strengthens the connection between PUMA and the consumer.",
      neon: "#FF6A00",
      tintA: "rgba(255,106,0,.22)",
      tintB: "rgba(255,255,255,.07)",
      images: [
        TM_1,
        TM_2,
        TM_3,
        TM_4,
        TM_5,
        TM_6,
        TM_7,
        TM_8,
        language === "en" ? TM_9_EN : TM_9,
        language === "en" ? TM_10_EN : TM_10,
      ],
    },
  ],
  [language]
);

  return (
    <main
      className="pumaRM"
      ref={wrapRef}
      style={
        {
          "--mx": `${cursor.x * 0.015}px`,
          "--my": `${cursor.y * 0.015}px`,
        } as React.CSSProperties
      }
    >
      <motion.div className="pumaRM__bgFloor" style={{ y: bgYSpring }} />
      <section className="pumaRM__heroFx">
         <div className="pumaRM__fixedShade" />
        <div className="pumaRM__fixedGlow" />
        <div className="pumaRM__grain" />
      </section>


      <div className="pumaRM__content">
        <section className="pumaRM__hero">
          <div className="pumaRM__top">
            <button className="pumaRM__btn" onClick={() => navigate(-1)}>
              {copy.back}
            </button>
            <LanguageToggle tone="light" />
            <button className="pumaRM__btn" onClick={() => navigate("/strategic")}>
              {copy.category}
            </button>
          </div>

          <div className="pumaRM__heroInner">
            <motion.div
              className="pumaRM__brand"
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="pumaRM__logo">PUMA</div>
              <h1 className="pumaRM__title">Freedom fits better</h1>
            </motion.div>

            <div className="pumaRM__heroGrid">
              <motion.aside
                className="pumaRM__aside"
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.85, delay: 0.08 }}
              >
                <HeroBlock title="INSIGHT">
                  {copy.insight}
                </HeroBlock>

                <HeroBlock title={copy.brandRole}>
                  {copy.brandRoleBody}
                </HeroBlock>

                <HeroBlock title={copy.strategicConcept}>
                  {copy.strategicConceptBody}
                </HeroBlock>
              </motion.aside>

              <motion.div
                className="pumaRM__centerBeam"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.12 }}
              >
                <div className="pumaRM__centerGlow" />
                <div className="pumaRM__centerLine" />
              </motion.div>

              <motion.aside
                className="pumaRM__aside"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.85, delay: 0.12 }}
              >
                <HeroBlock title={copy.opportunity}>
                  {copy.opportunityBody}
                </HeroBlock>

                <HeroBlock title={copy.idea} subtitle="Freedom fits better">
                  {copy.ideaBody}
                </HeroBlock>

                <HeroBlock title={copy.media}>
                  {copy.mediaBody}
                </HeroBlock>
              </motion.aside>
            </div>

            <motion.div
              className="pumaRM__hint"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55 }}
            >
              {copy.scroll}
              <svg width="20" height="20" viewBox="0 0 20 15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </motion.div>
          </div>
        </section>

        <PumaExperience slides={slides} onBack={() => navigate("/strategic")} />
      </div>
    </main>
  );
}

function PumaExperience({
  slides,
  onBack,
}: {
  slides: PumaSlide[];
  onBack: () => void;
}) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [paused, setPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { language } = useLanguage();
  const ui = language === "es"
    ? { back: "Volver a Proyectos Estratégicos", previous: "Anterior", next: "Siguiente", goTo: "Ir a" }
    : { back: "Back to Strategic Projects", previous: "Previous", next: "Next", goTo: "Go to" };

  const activeSlide = slides[current];

    const goNext = useCallback(() => {
      if (isAnimating) return;
      setIsAnimating(true);
      setDirection("next");
      setCurrent((prev) => (prev + 1) % slides.length);
    }, [isAnimating, slides.length]);

    const goPrev = useCallback(() => {
      if (isAnimating) return;
      setIsAnimating(true);
      setDirection("prev");
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }, [isAnimating, slides.length]);

    const goToSlide = useCallback((targetIndex: number) => {
      if (targetIndex === current || isAnimating) return;
      setIsAnimating(true);
      setDirection(targetIndex > current ? "next" : "prev");
      setCurrent(targetIndex);
    }, [current, isAnimating]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  useEffect(() => {
    if (paused || isAnimating) return;

    const id = window.setInterval(() => {
      setIsAnimating(true);
      setDirection("next");
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 15000);

    return () => window.clearInterval(id);
  }, [paused, isAnimating, slides.length]);

    useEffect(() => {
      if (!isAnimating) return;

      const timeout = window.setTimeout(() => {
        setIsAnimating(false);
      }, 700);

      return () => window.clearTimeout(timeout);
    }, [isAnimating]);

  const startX = useRef(0);
  const isDown = useRef(false);

  const onPointerDown = (e: React.PointerEvent) => {
    isDown.current = true;
    startX.current = e.clientX;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDown.current) return;
    isDown.current = false;

    const dx = e.clientX - startX.current;

    if (dx > 40) goPrev();
    if (dx < -40) goNext();
  };

  const getRelativeIndex = (index: number) => {
    const len = slides.length;
    return (index - current + len) % len;
  };

  const getPositionClass = (index: number) => {
    const rel = getRelativeIndex(index);

    if (index === current) {
      return direction === "next"
        ? "is-active is-enter-from-right"
        : "is-active is-enter-from-left";
    }

    if (rel === 1) return "is-preview-1";
    if (rel === 2) return "is-preview-2";
    if (rel === 3) return "is-preview-3";
    if (rel === 4) return "is-preview-4";
    return "is-hidden";
  };

  return (
    <section
      className="pumaExp"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      style={
        {
          "--active-neon": activeSlide.neon,
          "--active-tint-a": activeSlide.tintA,
          "--active-tint-b": activeSlide.tintB,
        } as React.CSSProperties
      }
    >
      <div className="pumaExp__ambient" />
      <div className="pumaExp__ambientAura" />

      <div className="pumaExp__shell">
        <div className="pumaExp__stage">
          {slides.map((slide, index) => {
            const posClass = getPositionClass(index);
            const isActive = index === current;

            return (
              <article
                key={slide.key}
                className={`pumaExp__card ${posClass}`}
                style={
                  {
                    "--card-neon": slide.neon,
                  } as React.CSSProperties
                }
              >
                <div className="pumaExp__cardOverlay" />

                {!isActive && (
                  <div className="pumaExp__previewMeta">
                    <span className="pumaExp__previewIndex">0{index + 1}</span>
                    <h3>{slide.name}</h3>
                  </div>
                )}

                {isActive && (
                  <div className="pumaExp__activeLayout">
                    <div className="pumaExp__leftPane">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={slide.key}
                          className="pumaExp__leftInner"
                          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
                          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                          exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
                          transition={{
                            duration: 0.65,
                            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                          }}
                        >
                          <h2
                            className={`pumaExp__name ${
                              slide.key === "pr" ? "pumaExp__name--pr" : ""
                            }`}
                          >
                            {slide.name}
                          </h2>
                          <div className="pumaExp__expanded">
                            <ExpandedView slide={slide} />
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    <div className="pumaExp__rightPane">
                      <div className="pumaExp__rightPanel">
                        <div className="pumaExp__panelTop">
                          <span className="pumaExp__panelKicker">PUMA SPORTSTYLE</span>
                          <span className="pumaExp__panelDot" />
                        </div>

                        <div className="pumaExp__panelMain">
                          <div className="pumaExp__panelTitle">{slide.name}</div>
                          <div className="pumaExp__panelBody">
                            {slide.panelText}
                          </div>
                        </div>

                        <div className="pumaExp__actions">
                          <button className="pumaExp__btn" type="button" onClick={onBack}>
                            {ui.back}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <div className="pumaExp__controls">
          <button className="pumaExp__nav" type="button" onClick={goPrev} aria-label={ui.previous}>
            <svg width="24" height="24" viewBox="0 0 24 21" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="pumaExp__progress">
            {slides.map((slide, i) => (
              <button
                key={slide.key}
                className={`pumaExp__dot ${i === current ? "is-current" : ""}`}
                onClick={() => goToSlide(i)}
                aria-label={`${ui.goTo} ${slide.name}`}
                type="button"
              />
            ))}
          </div>

          <button className="pumaExp__nav" type="button" onClick={goNext} aria-label={ui.next}>
            <svg width="24" height="24" viewBox="0 0 24 21" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function ExpandedView({ slide }: { slide: PumaSlide }) {
  if (slide.key === "spot") return <SpotExpanded images={slide.images} />;
  if (slide.key === "ooh") return <OOHExpanded images={slide.images} />;
  if (slide.key === "stories") return <StoriesExpanded images={slide.images} />;
  if (slide.key === "pr") return <PRExpanded images={slide.images} />;
  return <TradeExpanded images={slide.images} />;
}

function SpotExpanded({ images }: { images: string[] }) {
  const { language } = useLanguage();
  const top = images[0];
  const bottom = images[1];

  return (
    <div className="spotRX">
      <div className="spotRX__band">
        <div className="spotRX__track">
          <img src={top} alt={language === "es" ? "Spot superior" : "Top commercial frames"} loading="lazy" decoding="async" />
          <img src={top} alt="" loading="lazy" decoding="async" />
          <img src={top} alt="" loading="lazy" decoding="async" />
        </div>
      </div>

      <div className="spotRX__center">
        <img src={LOGOS_SPOT} alt="Logos Spot" loading="lazy" decoding="async" />
      </div>

      <div className="spotRX__band">
        <div className="spotRX__track spotRX__track--reverse">
          <img src={bottom} alt={language === "es" ? "Spot inferior" : "Bottom commercial frames"} loading="lazy" decoding="async" />
          <img src={bottom} alt="" loading="lazy" decoding="async" />
          <img src={bottom} alt="" loading="lazy" decoding="async" />
        </div>
      </div>
    </div>
  );
}

function OOHExpanded({ images }: { images: string[] }) {
  const { language } = useLanguage();
  const boardLeft = images[0];   // OOH-6
  const mupi = images[1];        // OOH-1
  const wideLeft = images[2];    // OOH-2
  const wideRight = images[3];   // OOH-3
  const map = images[4];         // OOH-5

  return (
    <div className="oohRX">
      <motion.div className="oohRX__item oohRX__item--board">
        <img src={boardLeft} alt="OOH 6" loading="lazy" decoding="async" />
      </motion.div>

      <motion.div className="oohRX__item oohRX__item--mupi">
        <img src={mupi} alt="OOH 1" loading="lazy" decoding="async" />
      </motion.div>

      <motion.div className="oohRX__item oohRX__item--wideLeft">
        <img src={wideLeft} alt="OOH 2" loading="lazy" decoding="async" />
      </motion.div>

      <motion.div className="oohRX__item oohRX__item--wideRight">
        <img src={wideRight} alt="OOH 3" loading="lazy" decoding="async" />
      </motion.div>

      <motion.div className="oohRX__item oohRX__item--map">
        <img src={map} alt={language === "es" ? "Mapa de medios OOH" : "OOH media map"} loading="lazy" decoding="async" />
      </motion.div>
    </div>
  );
}

function StoriesExpanded({ images }: { images: string[] }) {
  return (
    <motion.div
      className="storiesRX"
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, delay: 0.08 }}
    >
      <img src={images[0]} alt="Stories Puma" loading="lazy" decoding="async" />
    </motion.div>
  );
}
function PRExpanded({ images }: { images: string[] }) {
  const { language } = useLanguage();
  const copy = language === "es"
    ? {
        objectives: "Objetivos:", objectiveBody: "GENERAR ALTO AWARENESS Y CONVERSACIÓN POSITIVA ALREDEDOR DE LA CATEGORÍA SPORTSTYLE DE PUMA MEDIANTE ACTIVACIONES MEDIÁTICAS Y EXPERIENCIALES QUE CONECTEN LA MARCA CON EL ESTILO DE VIDA PROFESIONAL URBANO.",
        kpis: ["N° de medios tier 1 alcanzados", "N° de prendas intercambiadas en la activación de coworking", "Volumen de conversación en redes sociales generado por la activación"],
        phases: ["Fase 1", "Fase 2", "Fase 3"], tv: "Programas de TV", activation: "Coffee (Activación)", media: "Medios", activationAlt: "Activación Freedom Coffee", mediaAlt: "Medio",
      }
    : {
        objectives: "Objectives:", objectiveBody: "BUILD HIGH AWARENESS AND POSITIVE CONVERSATION AROUND PUMA’S SPORTSTYLE CATEGORY THROUGH MEDIA AND EXPERIENTIAL ACTIVATIONS THAT CONNECT THE BRAND WITH THE URBAN PROFESSIONAL LIFESTYLE.",
        kpis: ["Number of tier 1 media outlets reached", "Number of garments exchanged during the coworking activation", "Volume of social media conversation generated by the activation"],
        phases: ["Phase 1", "Phase 2", "Phase 3"], tv: "TV Programs", activation: "Coffee Activation", media: "Media", activationAlt: "Freedom Coffee activation", mediaAlt: "Media outlet",
      };
  const coffeeImg = images[0]; // PR-1
  const media1 = images[1];    // PR-2
  const media2 = images[2];    // PR-3
  const todoGood = images[3];  // PR-4
  const yoSoy = images[4];     // PR-5

  return (
    <div className="prRX">
      <div className="prRX__header">
        <div className="prRX__topInfo">
          <div className="prRX__copyBlock">
            <div className="prRX__copyTitle">{copy.objectives}</div>
            <p>{copy.objectiveBody}</p>
          </div>

          <div className="prRX__copyBlock">
            <div className="prRX__copyTitle">KPIs</div>
            <ul>
              {copy.kpis.map((kpi) => <li key={kpi}>{kpi}</li>)}
            </ul>
          </div>
        </div>

        <div className="prRX__title">Freedom COFFEE</div>
      </div>

      <div className="prRX__board">
        <div className="prRX__line" />

        <span className="prRX__dot prRX__dot--1" />
        <span className="prRX__dot prRX__dot--2" />
        <span className="prRX__dot prRX__dot--3" />

        <div className="prRX__phase1">
          <div className="prRX__phase1Thumbs">
            <div className="prRX__tvThumb">
              <img src={yoSoy} alt="Yo Soy" loading="lazy" decoding="async" />
            </div>
            <div className="prRX__tvThumb">
              <img src={todoGood} alt="Todo Good" loading="lazy" decoding="async" />
            </div>
          </div>

          <div className="prRX__phase1Text">
            <div className="prRX__phaseLabel">{copy.phases[0]}</div>
            <div className="prRX__phaseIcon">📺</div>
            <div className="prRX__phaseDesc">{copy.tv}</div>
          </div>
        </div>

        <div className="prRX__phase2">
          <div className="prRX__phase2Info">
            <div className="prRX__phaseLabel prRX__phaseLabel--center">{copy.phases[1]}</div>
            <div className="prRX__phaseIcon">☕</div>
            <div className="prRX__phaseDesc">{copy.activation}</div>
          </div>

          <div className="prRX__coffeeVisual">
            <img src={coffeeImg} alt={copy.activationAlt} loading="lazy" decoding="async" />
          </div>
        </div>

        <div className="prRX__phase3">
          <div className="prRX__phase3Text">
            <div className="prRX__phaseLabel">{copy.phases[2]}</div>
            <div className="prRX__phaseIcon">📣</div>
            <div className="prRX__phaseDesc">{copy.media}</div>
          </div>

          <div className="prRX__mediaGroup">
            <div className="prRX__mediaCard">
              <img src={media1} alt={`${copy.mediaAlt} 1`} loading="lazy" decoding="async" />
            </div>
            <div className="prRX__mediaCard">
              <img src={media2} alt={`${copy.mediaAlt} 2`} loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TradeExpanded({ images }: { images: string[] }) {
  const { language } = useLanguage();
  const copy = language === "es"
    ? {
        objectives: "Objetivos", objectiveItems: ["Aumentar visibilidad y presencia en PDV", "Impulsar rotación de productos Sportstyle", "Mejorar preferencia y experiencia de compra"],
        kpiItems: ["% incremento sell-out en PDV intervenidos", "Cumplimiento de exhibiciones POP", "Interacciones en activaciones in-store"],
        ownStores: "Tiendas propias", departmentStores: "Tiendas por departamento", ecommerce: "Ecommerce",
      }
    : {
        objectives: "Objectives", objectiveItems: ["Increase visibility and presence at the point of sale", "Drive Sportstyle product turnover", "Improve preference and the shopping experience"],
        kpiItems: ["Percentage increase in sell-out at participating points of sale", "Compliance with POP display standards", "Interactions during in-store activations"],
        ownStores: "PUMA Stores", departmentStores: "Department Stores", ecommerce: "Ecommerce",
      };
  const propias = images.slice(0, 4);
  const departamento = images.slice(4, 8);
  const ecommerce = images.slice(8, 10);

  return (
    <div className="tradeRX">
      <div className="tradeRX__head">
        <div className="tradeRX__box">
          <div className="tradeRX__h">{copy.objectives}</div>
          <ul>
            {copy.objectiveItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>

        <div className="tradeRX__box">
          <div className="tradeRX__h">KPIs</div>
          <ul>
            {copy.kpiItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>

      <div className="tradeRX__group">
        <div className="tradeRX__label">{copy.ownStores}</div>
        <div className="tradeRX__grid tradeRX__grid--4">
          {propias.map((src, i) => (
            <motion.div
              key={`propias-${i}`}
              className="tradeRX__item"
              initial={{ opacity: 0, y: 14, scale: 0.985, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.45, delay: 0.04 * i }}
            >
              <img src={src} alt={`${copy.ownStores} ${i + 1}`} loading="lazy" decoding="async" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="tradeRX__group">
        <div className="tradeRX__label">{copy.departmentStores}</div>
        <div className="tradeRX__grid tradeRX__grid--4">
          {departamento.map((src, i) => (
            <motion.div
              key={`departamento-${i}`}
              className="tradeRX__item"
              initial={{ opacity: 0, y: 14, scale: 0.985, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.45, delay: 0.04 * (i + 4) }}
            >
              <img src={src} alt={`${copy.departmentStores} ${i + 1}`} loading="lazy" decoding="async" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="tradeRX__group">
        <div className="tradeRX__label">{copy.ecommerce}</div>
        <div className="tradeRX__grid tradeRX__grid--2">
          {ecommerce.map((src, i) => (
            <motion.div
              key={`ecommerce-${i}`}
              className="tradeRX__item tradeRX__item--wide"
              initial={{ opacity: 0, y: 14, scale: 0.985, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.45, delay: 0.04 * (i + 8) }}
            >
              <img src={src} alt={`Ecommerce ${i + 1}`} loading="lazy" decoding="async" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroBlock({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="pumaRM__block">
      <div className="pumaRM__blockTitle">{title}</div>
      {subtitle && <div className="pumaRM__blockSub">{subtitle}</div>}
      <div className="pumaRM__blockBody">{children}</div>
    </div>
  );
}
