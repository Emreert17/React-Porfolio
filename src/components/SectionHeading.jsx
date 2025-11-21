import "../styles/SectionHeading.css";
import { useTheme } from "../context/ThemeContext";

export default function SectionHeading({ children }) {
  const { theme } = useTheme();
  return (
    <>
      <h2 className={`section-title ${theme === "light" ? "" : "dark"}`}>
        {children}
      </h2>
    </>
  );
}
