import { motion } from "framer-motion";
import "../styles/NavBar.css";

export default function NavBar({ activeSection }) {
  const links = [
    { id: "home", label: "home" },
    { id: "projects", label: "projects" },
    { id: "skills", label: "skills" },
    { id: "experience", label: "experience" },
    { id: "education", label: "education" },
    { id: "contact", label: "contact" },
  ];

  return (
    <nav className="navbar">
      {links.map((link) => (
        <div key={link.id} className="nav-item-wrapper">
          {activeSection === link.id && (
            <motion.div
              layoutId="highlight"
              className="nav-highlight"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <a
            href={`#${link.id}`}
            className={`nav-link ${activeSection === link.id ? "active" : ""}`}
          >
            {link.label}
          </a>
        </div>
      ))}
    </nav>
  );
}
