import NavBar from "../components/Navbar/NavBar";
import Intro from "../components/Intro/Intro";
import SectionDivider from "../components/SectionDivider/SectionDivider";
import Projects from "../components/ProjectsPart/Projects";
import Skills from "../components/Skills/Skills";
import Education from "../components/Education/Education";
import Experience from "../components/Experince/Experience";
import Contact from "../components/Contact/Contact";
import ThemeButton from "../components/Buttons/ThemeButton";

export default function Layout({ activeSection }) {
  return (
    <>
      <header>
        <NavBar activeSection={activeSection} />
      </header>
      <main>
        <Intro />
        <SectionDivider />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
        <ThemeButton />
      </main>
    </>
  );
}
