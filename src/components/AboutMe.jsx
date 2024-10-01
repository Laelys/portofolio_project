import "../styling/aboutme.css";
import ownerImage from "../assets/carousel-images/Carousel1.webp";

const AboutMe = () => {
  return (
    <div className="aboutMe__container">
      <div className="aboutMe__image__container">
        <div className="aboutMe__photo__frame">
          <img src={ownerImage} alt="Site Owner" className="aboutMe__photo" />
        </div>
      </div>

      <div className="aboutMe__content">
        <h2>About Me</h2>
        <p>This is a short description about the site owner.</p>
        <button className="aboutMe__button">Contact Me</button>
      </div>
    </div>
  );
};

export default AboutMe;
