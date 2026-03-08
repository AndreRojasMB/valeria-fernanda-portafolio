import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Studies from "../components/Studies";
import ProjectsHome from "../components/ProjectsHome";
import ThanksFooter from "../components/ThanksFooter";

export default function Home() {
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