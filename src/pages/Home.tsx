import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Studies from "../components/Studies";
import ProjectsHome from "../components/ProjectsHome";
import ThanksFooter from "../components/ThanksFooter";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash !== "#proyectos") return;

    let nestedFrame = 0;
    const frame = window.requestAnimationFrame(() => {
      nestedFrame = window.requestAnimationFrame(() => {
        const projectsSection = document.getElementById("proyectos");
        const scrollContainer = document.getElementById("root");
        if (!projectsSection || !scrollContainer) return;

        const navigationOffset = 72;
        const top = projectsSection.offsetTop - navigationOffset;
        const previousScrollBehavior = scrollContainer.style.scrollBehavior;

        scrollContainer.style.scrollBehavior = "auto";
        scrollContainer.scrollTo(0, Math.max(0, top));
        scrollContainer.style.scrollBehavior = previousScrollBehavior;
      });
    });

    return () => {
      window.cancelAnimationFrame(frame);
      if (nestedFrame) window.cancelAnimationFrame(nestedFrame);
    };
  }, [hash]);

  return (
    <>
      <Navbar />
      <Hero />
      <Studies />
      <ProjectsHome />
      <ThanksFooter />
    </>
  );
}
