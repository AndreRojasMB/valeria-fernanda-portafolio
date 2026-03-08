import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

import SPOT_IMGS from "../../assets/PLANNING AREA/PUMA PLANNING/SPOT IMAGENES.png";
import STORIES_PUMA from "../../assets/PLANNING AREA/PUMA PLANNING/STORIES PUMA.png";
import LOGOS_SPOT from "../../assets/PLANNING AREA/PUMA PLANNING/LOGOS SPOT.png";

import OOH_1 from "../../assets/PLANNING AREA/PUMA PLANNING/OOH-1.png";
import OOH_2 from "../../assets/PLANNING AREA/PUMA PLANNING/OOH-2.png";
import OOH_3 from "../../assets/PLANNING AREA/PUMA PLANNING/OOH-3.png";
import OOH_4 from "../../assets/PLANNING AREA/PUMA PLANNING/OOH-4.png";
import OOH_6 from "../../assets/PLANNING AREA/PUMA PLANNING/OOH-6.png";

import PR_1 from "../../assets/PLANNING AREA/PUMA PLANNING/PR-1.png";
import PR_2 from "../../assets/PLANNING AREA/PUMA PLANNING/PR-2.png";
import PR_3 from "../../assets/PLANNING AREA/PUMA PLANNING/PR-3.png";
import PR_4 from "../../assets/PLANNING AREA/PUMA PLANNING/PR-4.png";
import PR_5 from "../../assets/PLANNING AREA/PUMA PLANNING/PR-5.png";

import TM_1 from "../../assets/PLANNING AREA/PUMA PLANNING/TM-1.png";
import TM_2 from "../../assets/PLANNING AREA/PUMA PLANNING/TM-2.png";
import TM_3 from "../../assets/PLANNING AREA/PUMA PLANNING/TM-3.png";
import TM_4 from "../../assets/PLANNING AREA/PUMA PLANNING/TM-4.png";
import TM_5 from "../../assets/PLANNING AREA/PUMA PLANNING/TM-5.png";
import TM_6 from "../../assets/PLANNING AREA/PUMA PLANNING/TM-6.png";
import TM_7 from "../../assets/PLANNING AREA/PUMA PLANNING/TM-7.png";
import TM_8 from "../../assets/PLANNING AREA/PUMA PLANNING/TM-8.png";
import TM_9 from "../../assets/PLANNING AREA/PUMA PLANNING/TM-9.png";
import TM_10 from "../../assets/PLANNING AREA/PUMA PLANNING/TM-10.png";


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
  const navigate = useNavigate();

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
      panelText:
        "El spot presenta Freedom Fits Better como una actitud. A través de una narrativa visual dinámica y estética sportstyle, mostramos cómo cada persona encuentra su propia forma de expresarse y pertenecer. La campaña conecta autenticidad, movimiento y estilo para posicionar a PUMA como la marca que acompaña a una nueva generación que vive la libertad a su manera.",
      neon: "#00A0FF",
      tintA: "rgba(0,160,255,.24)",
      tintB: "rgba(255,0,230,.12)",
      images: [SPOT_IMGS, SPOT_IMGS],
    },
    {
      key: "ooh",
      name: "OOH",
      panelText:
        "La presencia en OOH lleva el mensaje de Freedom Fits Better al espacio urbano, convirtiendo la ciudad en un escenario de expresión personal. Con visuales impactantes y ejecuciones adaptadas a cada formato, la campaña busca generar recordación inmediata y reforzar el posicionamiento de PUMA en puntos clave de contacto con el público.",
      neon: "#FF00E6",
      tintA: "rgba(255,0,230,.22)",
      tintB: "rgba(0,160,255,.10)",
      images: [OOH_6, OOH_1, OOH_2, OOH_3, OOH_4],
    },
    {
      key: "stories",
      name: "STORIES",
      panelText:
        "En Stories, la campaña adopta el lenguaje ágil y vertical de las redes sociales para conectar con una audiencia que consume contenido de forma inmediata. Cada pieza está pensada para transmitir autenticidad, estilo y cercanía, reforzando a PUMA como una marca que se mueve al ritmo de la cultura digital.",
      neon: "#7CFF00",
      tintA: "rgba(124,255,0,.20)",
      tintB: "rgba(255,255,255,.08)",
      images: [STORIES_PUMA],
    },
    {
      key: "pr",
      name: "PR STUNT",
      panelText:
        "El PR Stunt convierte la campaña en una experiencia tangible. A través de activaciones y apariciones mediáticas estratégicas, Freedom Fits Better se materializa en espacios donde la marca interactúa directamente con las personas, generando conversación, cobertura y una percepción innovadora y culturalmente relevante.",
      neon: "#B26BFF",
      tintA: "rgba(178,107,255,.22)",
      tintB: "rgba(0,160,255,.08)",
      images: [PR_1, PR_2, PR_3, PR_4, PR_5],
    },
    {
      key: "trade",
      name: "TRADE MARKETING",
      panelText:
        "En el punto de venta, Freedom Fits Better cobra vida a través de exhibiciones, intervenciones visuales y experiencias de compra que destacan la categoría Sportstyle. El objetivo es transformar el espacio retail en un entorno que inspire estilo, impulse la rotación de productos y fortalezca la conexión entre PUMA y el consumidor.",
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
        TM_9,
        TM_10,
      ],
    },
  ],
  []
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
              ← Volver
            </button>
            <button className="pumaRM__btn" onClick={() => navigate("/strategic")}>
              Strategic Projects
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
                  Quiero encajar sin perder lo que me hace distinto.
                </HeroBlock>

                <HeroBlock title="ROL DE LA MARCA">
                  PUMA existe para permitir que las personas pertenezcan sin renunciar a su autenticidad.
                </HeroBlock>

                <HeroBlock title="CONCEPTO ESTRATÉGICO">
                  Puedes pertenecer sin dejar de ser auténtico.
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
                <HeroBlock title="OPORTUNIDAD">
                  Los jóvenes quieren encajar en su entorno social, pero cada vez sienten más incomodidad usando códigos de
                  estilo que no los representan. La moda presiona a verse “correcto”, aunque no se sienta auténtico.
                </HeroBlock>

                <HeroBlock title="IDEA" subtitle="Freedom fits better">
                  PUMA Sportstyle propone una forma de vestir que te permite encajar sin dejar de ser tú. La libertad no está
                  en seguir la moda, sino en elegir lo que realmente te queda en actitud, cuerpo y estilo de vida.
                </HeroBlock>

                <HeroBlock title="MEDIOS">
                  Digital (37%), TV Abierta (35%), OOH (25%), activaciones (2%) e influencers (1%).
                </HeroBlock>
              </motion.aside>
            </div>

            <motion.div
              className="pumaRM__hint"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55 }}
            >
              Desliza     
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

  const activeSlide = slides[current];

    const goNext = () => {
      if (isAnimating) return;
      setIsAnimating(true);
      setDirection("next");
      setCurrent((prev) => (prev + 1) % slides.length);
    };

    const goPrev = () => {
      if (isAnimating) return;
      setIsAnimating(true);
      setDirection("prev");
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (targetIndex: number) => {
      if (targetIndex === current || isAnimating) return;
      setIsAnimating(true);
      setDirection(targetIndex > current ? "next" : "prev");
      setCurrent(targetIndex);
    };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [slides.length]);

  useEffect(() => {
    if (paused || isAnimating) return;

    const id = window.setInterval(() => {
      setIsAnimating(true);
      setDirection("next");
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 15000);

    return () => window.clearInterval(id);
  }, [paused, isAnimating, current, slides.length]);

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
                            Volver a Strategic
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
          <button className="pumaExp__nav" type="button" onClick={goPrev} aria-label="Anterior">
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
                aria-label={`Ir a ${slide.name}`}
                type="button"
              />
            ))}
          </div>

          <button className="pumaExp__nav" type="button" onClick={goNext} aria-label="Siguiente">
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
  const top = images[0];
  const bottom = images[1];

  return (
    <div className="spotRX">
      <div className="spotRX__band">
        <div className="spotRX__track">
          <img src={top} alt="Spot superior" />
          <img src={top} alt="Spot superior duplicado" />
          <img src={top} alt="Spot superior duplicado 2" />
        </div>
      </div>

      <div className="spotRX__center">
        <img src={LOGOS_SPOT} alt="Logos Spot" />
      </div>

      <div className="spotRX__band">
        <div className="spotRX__track spotRX__track--reverse">
          <img src={bottom} alt="Spot inferior" />
          <img src={bottom} alt="Spot inferior duplicado" />
          <img src={bottom} alt="Spot inferior duplicado 2" />
        </div>
      </div>
    </div>
  );
}

function OOHExpanded({ images }: { images: string[] }) {
  const boardLeft = images[0];   // OOH-6
  const mupi = images[1];        // OOH-1
  const wideLeft = images[2];    // OOH-2
  const wideRight = images[3];   // OOH-3
  const map = images[4];         // OOH-5

  return (
    <div className="oohRX">
      <motion.div className="oohRX__item oohRX__item--board">
        <img src={boardLeft} alt="OOH 6" />
      </motion.div>

      <motion.div className="oohRX__item oohRX__item--mupi">
        <img src={mupi} alt="OOH 1" />
      </motion.div>

      <motion.div className="oohRX__item oohRX__item--wideLeft">
        <img src={wideLeft} alt="OOH 2" />
      </motion.div>

      <motion.div className="oohRX__item oohRX__item--wideRight">
        <img src={wideRight} alt="OOH 3" />
      </motion.div>

      <motion.div className="oohRX__item oohRX__item--map">
        <img src={map} alt="OOH 5 mapa" />
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
      <img src={images[0]} alt="Stories Puma" />
    </motion.div>
  );
}
function PRExpanded({ images }: { images: string[] }) {
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
            <div className="prRX__copyTitle">Objetivos:</div>
            <p>
              GENERAR ALTO AWARENESS Y CONVERSACIÓN POSITIVA ALREDEDOR DE LA CATEGORÍA SPORTSTYLE DE PUMA MEDIANTE
              ACTIVACIONES MEDIÁTICAS Y EXPERIENCIALES QUE CONECTEN LA MARCA CON EL ESTILO DE VIDA PROFESIONAL URBANO.
            </p>
          </div>

          <div className="prRX__copyBlock">
            <div className="prRX__copyTitle">kPI’S</div>
            <ul>
              <li>N° de medios tier 1 alcanzados</li>
              <li>N° de prendas intercambiadas en la activación de coworking</li>
              <li>Volumen de conversación en redes sociales generado por la activación</li>
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
              <img src={yoSoy} alt="Yo Soy" />
            </div>
            <div className="prRX__tvThumb">
              <img src={todoGood} alt="Todo Good" />
            </div>
          </div>

          <div className="prRX__phase1Text">
            <div className="prRX__phaseLabel">Fase 1</div>
            <div className="prRX__phaseIcon">📺</div>
            <div className="prRX__phaseDesc">Programas de TV</div>
          </div>
        </div>

        <div className="prRX__phase2">
          <div className="prRX__phase2Info">
            <div className="prRX__phaseLabel prRX__phaseLabel--center">Fase 2</div>
            <div className="prRX__phaseIcon">☕</div>
            <div className="prRX__phaseDesc">Coffee (Activación)</div>
          </div>

          <div className="prRX__coffeeVisual">
            <img src={coffeeImg} alt="Coffee activación" />
          </div>
        </div>

        <div className="prRX__phase3">
          <div className="prRX__phase3Text">
            <div className="prRX__phaseLabel">Fase 3</div>
            <div className="prRX__phaseIcon">📣</div>
            <div className="prRX__phaseDesc">Medios</div>
          </div>

          <div className="prRX__mediaGroup">
            <div className="prRX__mediaCard">
              <img src={media1} alt="Medio 1" />
            </div>
            <div className="prRX__mediaCard">
              <img src={media2} alt="Medio 2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TradeExpanded({ images }: { images: string[] }) {
  const propias = images.slice(0, 4);
  const departamento = images.slice(4, 8);
  const ecommerce = images.slice(8, 10);

  return (
    <div className="tradeRX">
      <div className="tradeRX__head">
        <div className="tradeRX__box">
          <div className="tradeRX__h">Objetivos</div>
          <ul>
            <li>Aumentar visibilidad y presencia en PDV</li>
            <li>Impulsar rotación de productos Sportstyle</li>
            <li>Mejorar preferencia y experiencia de compra</li>
          </ul>
        </div>

        <div className="tradeRX__box">
          <div className="tradeRX__h">KPIs</div>
          <ul>
            <li>% incremento sell-out en PDV intervenidos</li>
            <li>Cumplimiento de exhibiciones POP</li>
            <li>Interacciones en activaciones in-store</li>
          </ul>
        </div>
      </div>

      <div className="tradeRX__group">
        <div className="tradeRX__label">Tiendas propias</div>
        <div className="tradeRX__grid tradeRX__grid--4">
          {propias.map((src, i) => (
            <motion.div
              key={`propias-${i}`}
              className="tradeRX__item"
              initial={{ opacity: 0, y: 14, scale: 0.985, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.45, delay: 0.04 * i }}
            >
              <img src={src} alt={`Tiendas propias ${i + 1}`} />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="tradeRX__group">
        <div className="tradeRX__label">Tiendas por departamento</div>
        <div className="tradeRX__grid tradeRX__grid--4">
          {departamento.map((src, i) => (
            <motion.div
              key={`departamento-${i}`}
              className="tradeRX__item"
              initial={{ opacity: 0, y: 14, scale: 0.985, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.45, delay: 0.04 * (i + 4) }}
            >
              <img src={src} alt={`Tiendas por departamento ${i + 1}`} />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="tradeRX__group">
        <div className="tradeRX__label">Ecommers</div>
        <div className="tradeRX__grid tradeRX__grid--2">
          {ecommerce.map((src, i) => (
            <motion.div
              key={`ecommerce-${i}`}
              className="tradeRX__item tradeRX__item--wide"
              initial={{ opacity: 0, y: 14, scale: 0.985, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.45, delay: 0.04 * (i + 8) }}
            >
              <img src={src} alt={`Ecommerce ${i + 1}`} />
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