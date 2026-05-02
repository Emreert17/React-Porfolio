import SectionHeading from "../SectionHeader/SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import "../../styles/Contact.css";
import { useTheme } from "../../context/ThemeContext";
import { useState } from "react";

export default function Contact() {
  const { theme } = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

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
      } else {
        setStatus(data.error);
      }
    } catch (err) {
      console.log(err);
      setStatus("Something went wrong");
    }
  };

  return (
    <section id="contact" className="contact-container">
      <SectionHeading>Get in Touch</SectionHeading>
      <div className="inner-contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <p className="contact-info">
            Please contact me directly at{" "}
            <a href="mailto:emre.ertugrul.dev@outlook.com">
              emre.ertugrul.dev@outlook.com
            </a>
            or through this form.
          </p>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setStatus("");
            }}
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setStatus("");
            }}
            type="email"
            name="email"
            placeholder="Email"
          />
          <textarea
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              setStatus("");
            }}
            name="message"
            id="message"
            placeholder="Message"
          ></textarea>
          {status && <p className="error-message">{status}</p>}
          <button className="contact-btn" type="submit">
            Submit <FaPaperPlane />
          </button>
        </form>
      </div>
    </section>
  );
}
