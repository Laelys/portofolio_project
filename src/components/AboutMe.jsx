import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styling/aboutme.css";
import ownerImage from "../assets/owner-image/avatar.webp";

const AboutMe = ({ variant = "home" }) => {
  return (
    <div
      className={`aboutMe__container ${
        variant === "aboutPage" ? "aboutPage__variant" : ""
      }`}
    >
      <div className="aboutMe__image__container">
        <div className="aboutMe__photo__frame">
          <img src={ownerImage} alt="Site Owner" className="aboutMe__photo" />
        </div>
      </div>

      <div className="aboutMe__content">
        <h2>Why me?</h2>
        <p>
          I believe in delivering practical yet aesthetically pleasing designs
          that resonate with clients needs and aspirations.
        </p>
        <p>
          I approach each project with attention to detail and a commitment to
          meeting client expectations.
        </p>
        <p>
          Collaboration is key, whether working with clients, architects, or
          fellow designers, to ensure successful outcomes that align with
          project objectives.
        </p>
        <Link to="/about" className="aboutMe__button">
          Learn more
        </Link>
      </div>

      <div className="about__graphics">
        <div className="about__rectangle__first"></div>
        <div className="about__rectangle__second"></div>
        <div className="about__rectangle__third"></div>
      </div>

      {/* Conditional Rendering for About Page Extra Bottom Graphics */}
      {variant === "aboutPage" && (
        <div className="about__bottom__graphics">
          <div className="about__bottom__rectangle__first"></div>
          <div className="about__bottom__rectangle__second"></div>
          <div className="about__bottom__rectangle__third"></div>
        </div>
      )}
    </div>
  );
};

// Define propTypes for the AboutMe component
AboutMe.propTypes = {
  variant: PropTypes.oneOf(["home", "aboutPage"]), // Define prop type for variant
};

export default AboutMe;
