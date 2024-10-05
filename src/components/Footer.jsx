import { FaBehance, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styling/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__graphics">
        <div className="footer__rectangle__first"></div>
        <div className="footer__rectangle__second"></div>
        <div className="footer__rectangle__third">
          <p className="footer__social__title">Social Media</p>
          <div className="footer__social__links">
            <a href="https://www.behance.net" target="_blank" rel="noreferrer">
              <FaBehance className="footer__social__icon" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="footer__social__icon" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="footer__social__icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__links__container">
        <div className="footer__links__left">
          <Link
            to="#"
            className="footer__link"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to Top
          </Link>
          <Link to="/projects" className="footer__link">
            Projects
          </Link>
        </div>
        <div className="footer__logo">JG</div>
        <div className="footer__links__right">
          <Link to="/about" className="footer__link">
            About
          </Link>
          <Link to="/posts" className="footer__link">
            Blog
          </Link>
          <Link to="/cta" className="footer__link">
            Contact Me
          </Link>
        </div>
      </div>

      <div className="footer__divider"></div>
      <div className="footer__info">
        <p>Privacy Terms</p>
        <p>Thanks for stopping by!</p>
      </div>
    </footer>
  );
};

export default Footer;
