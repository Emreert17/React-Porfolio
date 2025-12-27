import { BsEnvelopeAtFill } from "react-icons/bs";
import SectionHeading from "../SectionHeader/SectionHeading";
import "../../styles/Contact.css";
import { useTheme } from "../../context/ThemeContext";

export default function Contact() {
  const { theme } = useTheme();
  return (
    <>
      <section id="contact" className="contact-container">
        <SectionHeading>Contact Me</SectionHeading>
        <div className="inner-contact-container">
          <a
            href="mailto:emreer17@outlook.com"
            className="font-semibold text-blue-600 hover:underline"
          >
            <BsEnvelopeAtFill size={50} color="#33A1E0" />
          </a>
          <p className={`${theme === "dark" ? "dark" : ""}`}>
            If you want to contact me click up here.
          </p>
        </div>
      </section>
    </>
  );
}
