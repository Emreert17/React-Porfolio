import { motion } from "framer-motion";
import "../styles/NavBar.css";
import { links } from "../data/data";
import React, { useEffect, useState } from "react";

export default function NavBar({ activeSection }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 671);
    }
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            {isMobile ? React.createElement(link.icon) : link.label}
          </a>
        </div>
      ))}
    </nav>
  );
}
