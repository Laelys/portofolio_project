import { Link } from "react-router-dom";
import "../styling/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
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
        <div className="footer__logo">Logo</div>
        <div className="footer__links__right">
          <Link to="/about" className="footer__link">
            About
          </Link>
          <Link to="/posts" className="footer__link">
            Blog
          </Link>
          <Link to="/cta__form" className="footer__link">
            Contact Me
          </Link>
        </div>
      </div>
      <div className="footer__divider"></div>
      <div className="footer__info">
        <p>Paragraph 1 content goes here.</p>
        <p>Paragraph 2 content goes here.</p>
      </div>
    </footer>
  );
};

export default Footer;
