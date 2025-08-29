import { useMemo } from "react";
import "./App.css";
import NavbBar from "./components/NavBar";
import useActiveSection from "./hooks/useActiveSection";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import SectionDivider from "./components/SectionDivider";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  const sectionIds = useMemo(
    () => ["home", "projects", "skills", "experience", "education", "contact"],
    []
  );

  const activeSection = useActiveSection(sectionIds, { threshold: 0.2 });

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
      </main>
    </>
  );
}

export default App;
