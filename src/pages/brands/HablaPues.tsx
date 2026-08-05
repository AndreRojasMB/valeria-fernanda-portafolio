import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LanguageToggle from "../../components/LanguageToggle";
import { useLanguage } from "../../i18n/useLanguage";
import logo from "../../assets/PLANNING AREA/HABLA PUES PLANNING/LOGO.webp";

const contentByLanguage = {
  es: {
    back: "← Volver",
    category: "Proyectos Estratégicos",
    intro: "IKEA es una empresa sueca de muebles y decoración para el hogar reconocida por ofrecer diseño funcional, moderno y accesible. Su modelo se basa en muebles listos para armar (flat-pack), autoservicio y precios competitivos, permitiendo que más personas puedan crear y personalizar su propio espacio con soluciones prácticas y bien diseñadas.",
    challenge: "RETO",
    challengeBody: "Desarrollar la campaña de lanzamiento de IKEA en Perú con un enfoque prioritariamente digital, logrando una conexión emocional con los peruanos en el proceso de amoblar y remodelar su espacio propio.",
    hypothesis: "HIPÓTESIS DEL BRIEF",
    hypothesisBody: "En el contexto peruano, el hogar es percibido como un indicador clave de progreso personal.",
    deskResearch: "Desk research",
    interviews: "Entrevistas a profundidad",
    interviewees: "6 entrevistados (28 a 45 años)",
    research: ["Ecosistema de", "investigación"],
    socialListening: "Social media listening",
    findings: [
      { number: "1", title: "HALLAZGO 1:\nDIVERSIDAD DE HOGAR", text: "En el Perú predominan los hogares nucleares (53%), extendidos (21%) y unipersonales (15%), evidenciando que más del 70% están conformados por familias en estructuras diversas. El crecimiento no ocurre en un único modelo ideal de hogar, sino en múltiples realidades y etapas de vida." },
      { number: "2", title: "HALLAZGO 2:\nEL ESPACIO\nCOMO PRUEBA DE AVANCE", text: "Para los peruanos, la vivienda simboliza logro y estabilidad; sin embargo, el crecimiento personal no depende únicamente de tener casa propia. Transformar un cuarto, decorar un rincón o adaptar un espacio alquilado se convierte en una manifestación tangible de progreso individual." },
      { number: "3", title: "HALLAZGO 3:", text: "El target no espera tener una vivienda propia para sentirse en crecimiento; necesita que su espacio actual refleje quién es hoy y hacia dónde está avanzando." },
    ],
    strategyNodes: [
      { title: "PÚBLICO\nOBJETIVO", text: "Peruanos NSE B/C, de 28 a 55 años, que viven solos, en pareja o en hogares compartidos y buscan transformar su espacio como reflejo de su crecimiento personal." },
      { title: "OPORTUNIDAD", text: "IKEA puede transformar el acto de amoblar en una expresión visible de crecimiento personal, posicionándose como la marca que entiende la diversidad del hogar peruano y acompaña su evolución en cada etapa de vida." },
      { title: "TENSIÓN", text: "Quiero que mi espacio refleje quién soy y hacia dónde voy, pero vivo en un lugar que no es completamente mío." },
      { title: "INSIGHT", text: "Hacerlo mi espacio es la prueba visible de que sigo creciendo." },
      { title: "ROL DE\nMARCA", text: "Ser la marca que convierte cualquier espacio (propio, compartido o temporal) en algo tuyo, reafirmando tu identidad y tu crecimiento personal." },
    ],
    strategicConcept: "CONCEPTO ESTRATÉGICO",
    concept: ["EL CRECIMIENTO EMPIEZA EN TU", "ESPACIO"],
    generalStrategy: "ESTRATEGIA GENERAL",
    generalStrategyBody: "Posicionar a IKEA como la marca que convierte cada espacio en una manifestación visible de crecimiento personal, ayudando a los peruanos a transformar su entorno en reflejo de quiénes son hoy y hacia dónde avanzan.",
    phaseHeadings: { objective: "OBJETIVO ESTRATÉGICO", role: "ROL DE LA FASE", result: "RESULTADO" },
    phases: [
      { diamond: "FASE 1\nINTRIGA", objective: "Generar curiosidad sobre una propuesta que transformará la forma en que los peruanos viven y personalizan sus espacios.", role: "Construir expectativa mediante activación BTL y presencia OOH sin revelar la marca, incentivando registro anticipado.", result: "Expectativa, registros y conversación digital previa al lanzamiento." },
      { diamond: "FASE 2", objective: "Revelar a IKEA como la marca que acompaña la evolución de los hogares peruanos.", role: "Lanzar el spot y presentar el programa “Crece tu Espacio” con BCP.", result: "Conexión emocional y posicionamiento de marca." },
      { diamond: "FASE 3", objective: "Convertir la conexión con la marca en compra.", role: "Activar apertura, beneficios y experiencias que impulsen la primera compra.", result: "Tráfico, primeras compras y entrada de IKEA en los hogares." },
    ],
  },
  en: {
    back: "← Back",
    category: "Strategic Projects",
    intro: "IKEA is a Swedish home furniture and décor company known for functional, modern, and accessible design. Its model is based on ready-to-assemble flat-pack furniture, self-service, and competitive prices, allowing more people to create and personalize their own spaces with practical, well-designed solutions.",
    challenge: "CHALLENGE",
    challengeBody: "Develop IKEA’s launch campaign in Peru with a primarily digital approach, creating an emotional connection with Peruvians as they furnish and remodel their own spaces.",
    hypothesis: "BRIEF HYPOTHESIS",
    hypothesisBody: "In the Peruvian context, the home is perceived as a key indicator of personal progress.",
    deskResearch: "Desk research",
    interviews: "In-depth interviews",
    interviewees: "6 interviewees (ages 28 to 45)",
    research: ["Research", "ecosystem"],
    socialListening: "Social media listening",
    findings: [
      { number: "1", title: "FINDING 1:\nHOUSEHOLD DIVERSITY", text: "In Peru, nuclear households (53%), extended households (21%), and single-person households (15%) predominate, showing that more than 70% of households are made up of families with diverse structures. Growth does not happen within a single ideal home model, but across many realities and stages of life." },
      { number: "2", title: "FINDING 2:\nSPACE AS PROOF\nOF PROGRESS", text: "For Peruvians, housing symbolizes achievement and stability; however, personal growth does not depend solely on owning a home. Transforming a room, decorating a corner, or adapting a rented space becomes a tangible expression of individual progress." },
      { number: "3", title: "FINDING 3:", text: "The target audience does not wait to own a home before feeling that they are growing; they need their current space to reflect who they are today and where they are headed." },
    ],
    strategyNodes: [
      { title: "TARGET\nAUDIENCE", text: "Peruvians in socioeconomic levels B/C, aged 28 to 55, who live alone, as a couple, or in shared households and seek to transform their space as a reflection of personal growth." },
      { title: "OPPORTUNITY", text: "IKEA can turn furnishing a home into a visible expression of personal growth, positioning itself as the brand that understands the diversity of Peruvian households and supports their evolution through every stage of life." },
      { title: "TENSION", text: "I want my space to reflect who I am and where I am going, but I live in a place that is not completely mine." },
      { title: "INSIGHT", text: "Making it my space is visible proof that I am still growing." },
      { title: "BRAND\nROLE", text: "Be the brand that turns any space—owned, shared, or temporary—into something of your own, reaffirming your identity and personal growth." },
    ],
    strategicConcept: "STRATEGIC CONCEPT",
    concept: ["GROWTH BEGINS IN YOUR", "SPACE"],
    generalStrategy: "GENERAL STRATEGY",
    generalStrategyBody: "Position IKEA as the brand that turns every space into a visible expression of personal growth, helping Peruvians transform their surroundings into a reflection of who they are today and where they are headed.",
    phaseHeadings: { objective: "STRATEGIC OBJECTIVE", role: "ROLE OF THE PHASE", result: "OUTCOME" },
    phases: [
      { diamond: "PHASE 1\nTEASER", objective: "Build curiosity around a proposal that will transform how Peruvians live in and personalize their spaces.", role: "Build anticipation through BTL activation and OOH presence without revealing the brand, encouraging early registration.", result: "Anticipation, registrations, and digital conversation before launch." },
      { diamond: "PHASE 2", objective: "Reveal IKEA as the brand that supports the evolution of Peruvian homes.", role: "Launch the commercial and introduce the “Grow Your Space” program with BCP.", result: "Emotional connection and brand positioning." },
      { diamond: "PHASE 3", objective: "Turn the connection with the brand into purchase.", role: "Activate opening events, benefits, and experiences that drive the first purchase.", result: "Traffic, first purchases, and IKEA’s entry into Peruvian homes." },
    ],
  },
} as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

function MultilineText({ value }: { value: string }) {
  return value.split("\n").map((line) => <span key={line}>{line}<br /></span>);
}

export default function HablaPues() {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const { language } = useLanguage();
  const copy = contentByLanguage[language];
  const initial = shouldReduceMotion ? false : "hidden";

  return (
    <main className="ikeaPlan">
      <div className="ikeaPlan__bg" /><div className="ikeaPlan__bgGrid" /><div className="ikeaPlan__bgGlow ikeaPlan__bgGlow--1" /><div className="ikeaPlan__bgGlow ikeaPlan__bgGlow--2" /><div className="ikeaPlan__bgGlow ikeaPlan__bgGlow--3" />
      <div className="ikeaPlan__container">
        <div className="ikeaPlan__topbar"><button className="ikeaPlan__navBtn" onClick={() => navigate(-1)}>{copy.back}</button><LanguageToggle tone="light" /><button className="ikeaPlan__navBtn" onClick={() => navigate("/strategic")}>{copy.category}</button></div>
        <section className="ikeaPlan__top">
          <motion.div className="ikeaPlan__brandText" variants={fadeUp} initial={initial} animate="show"><p>{copy.intro}</p></motion.div>
          <motion.div className="ikeaPlan__logoWrap" initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: shouldReduceMotion ? 0 : 0.65 }}><img src={logo} alt="IKEA" className="ikeaPlan__logo" loading="lazy" decoding="async" /></motion.div>
        </section>
        <section className="ikeaPlan__brief">
          <motion.article className="ikeaPlan__briefCard" variants={fadeUp} initial={initial} whileInView="show" viewport={{ once: true, amount: 0.3 }}><div className="ikeaPlan__pill">{copy.challenge}</div><p>{copy.challengeBody}</p></motion.article>
          <motion.article className="ikeaPlan__briefCard ikeaPlan__briefCard--right" variants={fadeUp} initial={initial} whileInView="show" viewport={{ once: true, amount: 0.3 }}><div className="ikeaPlan__pill">{copy.hypothesis}</div><p>{copy.hypothesisBody}</p></motion.article>
        </section>
        <section className="ikeaPlan__research">
          <div className="ikeaPlan__researchLabel ikeaPlan__researchLabel--top">{copy.deskResearch}</div>
          <div className="ikeaPlan__researchGrid"><div className="ikeaPlan__researchLabel ikeaPlan__researchLabel--left"><div>{copy.interviews}</div><span>{copy.interviewees}</span></div><motion.div className="ikeaPlan__ringWrap" initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: shouldReduceMotion ? 0 : 0.65 }}><div className="ikeaPlan__ringDot ikeaPlan__ringDot--top" /><div className="ikeaPlan__ringDot ikeaPlan__ringDot--left" /><div className="ikeaPlan__ringDot ikeaPlan__ringDot--right" /><div className="ikeaPlan__ring"><div className="ikeaPlan__ringText">{copy.research[0]}<br />{copy.research[1]}</div></div></motion.div><div className="ikeaPlan__researchLabel ikeaPlan__researchLabel--right">{copy.socialListening}</div></div>
        </section>
        <section className="ikeaPlan__findings">
          <div className="ikeaPlan__findingNumbers">{copy.findings.map((item) => <div key={item.number} className="ikeaPlan__findingNumberCol"><div className="ikeaPlan__diamond"><span>{item.number}</span></div></div>)}</div><div className="ikeaPlan__yellowLine" />
          <div className="ikeaPlan__findingsGrid">{copy.findings.map((item) => <motion.article key={item.number} className="ikeaPlan__findingCard" variants={fadeUp} initial={initial} whileInView="show" viewport={{ once: true, amount: 0.25 }}><h3><MultilineText value={item.title} /></h3><p>{item.text}</p></motion.article>)}</div>
        </section>
        <section className="ikeaPlan__strategy"><div className="ikeaPlan__strategyRow">{copy.strategyNodes.map((item) => <motion.article key={item.title} className="ikeaPlan__strategyItem" variants={fadeUp} initial={initial} whileInView="show" viewport={{ once: true, amount: 0.2 }}><div className="ikeaPlan__circle"><div className="ikeaPlan__circleText"><MultilineText value={item.title} /></div></div><p>{item.text}</p></motion.article>)}</div></section>
        <section className="ikeaPlan__bottom">
          <motion.aside className="ikeaPlan__concept" initial={shouldReduceMotion ? false : { opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: shouldReduceMotion ? 0 : 0.65 }}><h4>{copy.strategicConcept}</h4><h2>{copy.concept[0]}<br />{copy.concept[1]}</h2><h4>{copy.generalStrategy}</h4><p>{copy.generalStrategyBody}</p></motion.aside>
          <div className="ikeaPlan__phases">{copy.phases.map((phase, index) => <motion.div className="ikeaPlan__phaseRow" key={phase.diamond} initial={shouldReduceMotion ? false : { opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : index * 0.08 }}><div className="ikeaPlan__phaseCard"><h5>{copy.phaseHeadings.objective}</h5><p>{phase.objective}</p><h5>{copy.phaseHeadings.role}</h5><p>{phase.role}</p><h5>{copy.phaseHeadings.result}</h5><p>{phase.result}</p></div><div className="ikeaPlan__phaseDiamond"><div className="ikeaPlan__phaseDiamondInner"><MultilineText value={phase.diamond} /></div></div></motion.div>)}</div>
        </section>
      </div>
    </main>
  );
}
