import { useMemo } from "react";
import "./App.css";
import useActiveSection from "./hooks/useActiveSection";
import Layout from "./layout/Layout";

function App() {
  const sectionIds = useMemo(
    () => ["home", "projects", "skills", "experience", "education", "contact"],
    []
  );

  const activeSection = useActiveSection(sectionIds, { threshold: 0.2 });

  return (
    <>
      <Layout activeSection={activeSection} />
    </>
  );
}

export default App;
