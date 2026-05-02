import SectionHeading from "../SectionHeader/SectionHeading";
import { FaPaperPlane, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "../../styles/Contact.css";
import { useTheme } from "../../context/ThemeContext";
import { useState } from "react";

export default function Contact() {
  const { theme } = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();

      if (res.ok) {
        setName("");
        setEmail("");
        setMessage("");
        setSuccess(true);
        setTimeout(() => setSuccess(false), 4000);
      } else {
        setStatus(data.error);
      }
    } catch (err) {
      console.log(err);
      setStatus("Something went wrong");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <SectionHeading>Get in Touch</SectionHeading>
      <div className={`contact-wrapper ${theme}`}>

        <div className="contact-info-panel">
          <span className="contact-availability">
            <span className="availability-dot" />
            Available for opportunities
          </span>
          <h3 className="contact-tagline">Let's build something great together.</h3>
          <p className="contact-bio">
            Have a project in mind, a question, or just want to say hello? Fill out the form and I'll get back to you soon.
          </p>
          <div className="contact-links">
            <a href="mailto:emre.ertugrul.dev@outlook.com" className="contact-link-item">
              <span className="contact-link-icon">
                <FaEnvelope />
              </span>
              <span>emre.ertugrul.dev@outlook.com</span>
            </a>
          </div>
          <div className="contact-socials">
            <a href="#" className="social-pill" aria-label="GitHub">
              <FaGithub /> GitHub
            </a>
            <a href="#" className="social-pill" aria-label="LinkedIn">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <input
              value={name}
              onChange={(e) => { setName(e.target.value); setStatus(""); }}
              type="text"
              name="name"
              id="cf-name"
              placeholder=" "
              required
              autoComplete="name"
            />
            <label htmlFor="cf-name">Your Name</label>
          </div>
          <div className="form-field">
            <input
              value={email}
              onChange={(e) => { setEmail(e.target.value); setStatus(""); }}
              type="email"
              name="email"
              id="cf-email"
              placeholder=" "
              required
              autoComplete="email"
            />
            <label htmlFor="cf-email">Email Address</label>
          </div>
          <div className="form-field form-field--textarea">
            <textarea
              value={message}
              onChange={(e) => { setMessage(e.target.value); setStatus(""); }}
              name="message"
              id="cf-message"
              placeholder=" "
              required
            />
            <label htmlFor="cf-message">Your Message</label>
          </div>
          {status && (
            <p className="form-feedback form-feedback--error">{status}</p>
          )}
          {success && (
            <p className="form-feedback form-feedback--success">
              Message sent! I'll get back to you soon.
            </p>
          )}
          <button className="contact-submit" type="submit">
            Send Message <FaPaperPlane />
          </button>
        </form>

      </div>
    </section>
  );
}
