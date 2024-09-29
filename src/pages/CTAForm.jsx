import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styling/ctaform.css";

const CtaForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /* This should log the inputs to the console since I have no backend - event object */
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    window.location.href = `mailto:laelyseop@gmail.com?subject=Contact from ${email}&body=${message}`;
  };

  return (
    <>
      <Navbar />
      <div className="ctaform__container">
        <p className="ctaform__text">Let me know if I can help you</p>
        <form className="ctaform__form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="ctaform__input"
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="ctaform__textarea"
            required
          ></textarea>
          <button type="submit" className="ctaform__button">
            Send
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CtaForm;
