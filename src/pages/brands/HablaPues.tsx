import { motion, type Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/PLANNING AREA/HABLA PUES PLANNING/LOGO.png";

const findings = [
  {
    number: "1",
    title: "HALLAZGO 1:\nDIVERSIDAD DE HOGAR",
    text: "En el Perú predominan los hogares nucleares (53%), extendidos (21%) y unipersonales (15%), evidenciando que más del 70% están conformados por familias en estructuras diversas. El crecimiento no ocurre en un único modelo ideal de hogar, sino en múltiples realidades y etapas de vida.",
  },
  {
    number: "2",
    title: "HALLAZGO 2:\nEL ESPACIO\nCOMO PRUEBA DE AVANCE",
    text: "Para los peruanos, la vivienda simboliza logro y estabilidad; sin embargo, el crecimiento personal no depende únicamente de tener casa propia. Transformar un cuarto, decorar un rincón o adaptar un espacio alquilado se convierte en una manifestación tangible de progreso individual.",
  },
  {
    number: "3",
    title: "HALLAZGO 3:",
    text: "El target no espera tener una vivienda propia para sentirse en crecimiento; necesita que su espacio actual, refleje quién es hoy y hacia dónde está avanzando.",
  },
];

const strategyNodes = [
  {
    title: "PÚBLICO\nOBJETIVO",
    text: "Peruanos NSE B/C, de 28 a 55 años, que viven solos, en pareja o en hogares compartidos y buscan transformar su espacio como reflejo de su crecimiento personal.",
  },
  {
    title: "OPORTUNIDAD",
    text: "IKEA puede transformar el acto de amoblar en una expresión visible de crecimiento personal, posicionándose como la marca que entiende la diversidad del hogar peruano y acompaña su evolución en cada etapa de vida.",
  },
  {
    title: "TENSIÓN",
    text: "Quiero que mi espacio refleje quién soy y hacia dónde voy, pero vivo en un lugar que no es completamente mío.",
  },
  {
    title: "INSIGHT",
    text: "Hacerlo mi espacio es la prueba visible de que sigo creciendo.",
  },
  {
    title: "ROL DE\nMARCA",
    text: "Ser la marca que convierte cualquier espacio (propio, compartido o temporal) en algo tuyo, reafirmando tu identidad y tu crecimiento personal.",
  },
];

const phases = [
  {
    diamond: "FASE 1\nINTRIGA",
    objective:
      "Generar curiosidad sobre una propuesta que transformará la forma en que los peruanos viven y personalizan sus espacios.",
    role:
      "Construir expectativa mediante activación BTL y presencia OOH sin revelar la marca, incentivando registro anticipado.",
    result:
      "Expectativa, registros y conversación digital previa al lanzamiento.",
  },
  {
    diamond: "FASE 2",
    objective:
      "Revelar a IKEA como la marca que acompaña la evolución de los hogares peruanos.",
    role:
      "Lanzar el spot y presentar el programa “Crece tu Espacio” con BCP.",
    result:
      "Conexión emocional y posicionamiento de marca.",
  },
  {
    diamond: "FASE 3",
    objective:
      "Convertir la conexión con la marca en compra.",
    role:
      "Activar apertura, beneficios y experiencias que impulsen la primera compra.",
    result:
      "Tráfico, primeras compras y entrada de IKEA en los hogares.",
  },
];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HablaPues() {
  const navigate = useNavigate();

  return (
  <main className="ikeaPlan">
    <div className="ikeaPlan__bg" />
    <div className="ikeaPlan__bgGrid" />
    <div className="ikeaPlan__bgGlow ikeaPlan__bgGlow--1" />
    <div className="ikeaPlan__bgGlow ikeaPlan__bgGlow--2" />
    <div className="ikeaPlan__bgGlow ikeaPlan__bgGlow--3" />
      <div className="ikeaPlan__container">
          <div className="ikeaPlan__topbar">
            <button className="ikeaPlan__navBtn" onClick={() => navigate(-1)}>
              ← Volver
            </button>
            <button className="ikeaPlan__navBtn" onClick={() => navigate("/strategic")}>
              Strategic Projects
            </button>
          </div>
        <section className="ikeaPlan__top">
          <motion.div
            className="ikeaPlan__brandText"
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            <p>
              IKEA es una empresa sueca de muebles y decoración para el hogar
              reconocida por ofrecer diseño funcional, moderno y accesible. Su
              modelo se basa en muebles listos para armar (flat-pack),
              autoservicio y precios competitivos, permitiendo que más personas
              puedan crear y personalizar su propio espacio con soluciones
              prácticas y bien diseñadas.
            </p>
          </motion.div>

          <motion.div
            className="ikeaPlan__logoWrap"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <img src={logo} alt="IKEA" className="ikeaPlan__logo" />
          </motion.div>
        </section>

        <section className="ikeaPlan__brief">
          <motion.article
            className="ikeaPlan__briefCard"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <div className="ikeaPlan__pill">RETO</div>
            <p>
              Desarrollar la campaña de lanzamiento de IKEA en Perú con un
              enfoque prioritariamente digital, logrando una conexión emocional
              con los peruanos en el proceso de amoblar y remodelar su espacio
              propio.
            </p>
          </motion.article>

          <motion.article
            className="ikeaPlan__briefCard ikeaPlan__briefCard--right"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <div className="ikeaPlan__pill">HIPÓTESIS DEL BRIEF</div>
            <p>
              En el contexto peruano, el hogar es percibido como un indicador
              clave de progreso personal.
            </p>
          </motion.article>
        </section>

        <section className="ikeaPlan__research">
          <div className="ikeaPlan__researchLabel ikeaPlan__researchLabel--top">
            Desk research
          </div>

          <div className="ikeaPlan__researchGrid">
            <div className="ikeaPlan__researchLabel ikeaPlan__researchLabel--left">
              <div>Entrevistas a profundidad</div>
              <span>6 entrevistados (28 a 45 años)</span>
            </div>

            <motion.div
              className="ikeaPlan__ringWrap"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7 }}
            >
              <div className="ikeaPlan__ringDot ikeaPlan__ringDot--top" />
              <div className="ikeaPlan__ringDot ikeaPlan__ringDot--left" />
              <div className="ikeaPlan__ringDot ikeaPlan__ringDot--right" />
              <div className="ikeaPlan__ring">
                <div className="ikeaPlan__ringText">
                  Ecosistema de
                  <br />
                  investigación
                </div>
              </div>
            </motion.div>

            <div className="ikeaPlan__researchLabel ikeaPlan__researchLabel--right">
              Social media listening
            </div>
          </div>
        </section>

        <section className="ikeaPlan__findings">
          <div className="ikeaPlan__findingNumbers">
            {findings.map((item) => (
              <div key={item.number} className="ikeaPlan__findingNumberCol">
                <div className="ikeaPlan__diamond">
                  <span>{item.number}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="ikeaPlan__yellowLine" />

          <div className="ikeaPlan__findingsGrid">
            {findings.map((item) => (
              <motion.article
                key={item.number}
                className="ikeaPlan__findingCard"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
              >
                <h3>
                  {item.title.split("\n").map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h3>
                <p>{item.text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="ikeaPlan__strategy">
          <div className="ikeaPlan__strategyRow">
            {strategyNodes.map((item) => (
              <motion.article
                key={item.title}
                className="ikeaPlan__strategyItem"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="ikeaPlan__circle">
                  <div className="ikeaPlan__circleText">
                    {item.title.split("\n").map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </div>
                </div>
                <p>{item.text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="ikeaPlan__bottom">
                    <motion.aside
                      className="ikeaPlan__concept"
                      initial={{ opacity: 0, x: 28 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.7 }}
                    >
                      <h4>CONCEPTO ESTRATÉGICO</h4>
                      <h2>
                        EL CRECIMIENTO EMPIEZA EN TU
                        <br />
                        ESPACIO
                      </h2>

                      <h4>ESTRATEGIA GENERAL</h4>
                      <p>
                        Posicionar a IKEA como la marca que convierte cada espacio en una
                        manifestación visible de crecimiento personal, ayudando a los
                        peruanos a transformar su entorno en reflejo de quiénes son hoy y
                        hacia dónde avanzan.
                      </p>
                    </motion.aside>
          <div className="ikeaPlan__phases">
            {phases.map((phase, index) => (
              <motion.div
                className="ikeaPlan__phaseRow"
                key={phase.diamond}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
              >
                <div className="ikeaPlan__phaseCard">
                  <h5>OBJETIVO ESTRATÉGICO</h5>
                  <p>{phase.objective}</p>

                  <h5>ROL DE LA FASE</h5>
                  <p>{phase.role}</p>

                  <h5>RESULTADO</h5>
                  <p>{phase.result}</p>
                </div>

                <div className="ikeaPlan__phaseDiamond">
                  <div className="ikeaPlan__phaseDiamondInner">
                    {phase.diamond.split("\n").map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>


        </section>
      </div>
    </main>
  );
}