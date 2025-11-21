import Intro from "../components/Intro";
import SectionDivider from "../components/SectionDivider";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Contact from "../components/Contact";
import ThemeButton from "../components/ThemeButton";
import NavbBar from "../components/NavBar";

export default function Layout({ activeSection }) {
  return (
    <>
      <header>
        <NavbBar activeSection={activeSection} />
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
