import { useState } from "react";
import { FaBehance, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styling/footer.css";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  return (
    <footer className="footer">
      <div className="footer__graphics">
        <div className="footer__rectangle__first"></div>
        <div className="footer__rectangle__second"></div>
        <div className="footer__rectangle__third">
          <p className="footer__social__title">Social Media</p>
          <div className="footer__social__links">
            <a
              href="https://www.behance.net/gheorghianioana?tracking_source=search_projects%7Cteenager+bedroom+indoor"
              target="_blank"
              rel="noreferrer"
            >
              <FaBehance className="footer__social__icon" />
            </a>
            <a
              href="https://ro.linkedin.com/in/ioana-sohan-gheorghian-209b9314a?trk=people-guest_people_search-card"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="footer__social__icon" />
            </a>
            <a
              href="https://www.instagram.com/ioana.alex.gheorghian/"
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
        <p onClick={handleModalOpen} className="footer__link">
          Privacy Terms
        </p>
        <p>Thanks for stopping by!</p>
      </div>

      {showModal && (
        <div className="modal__overlay" onClick={handleModalClose}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <p>Privacy Terms</p>
            <p>
              We value your privacy. The only data we collect is the information
              you provide when sending us an email via the contact form. We do
              not share, sell, or distribute your personal information to third
              parties. If you have any questions about how your data is used,
              please feel free to contact us.
            </p>
            <button className="modal__close" onClick={handleModalClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
