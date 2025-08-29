import SectionHeading from "./SectionHeading";
import "../styles/contact.css";
import { BsEnvelopeAtFill } from "react-icons/bs";

export default function Contact() {
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
          <p>If you want to contact me click up here.</p>
        </div>
      </section>
    </>
  );
}
