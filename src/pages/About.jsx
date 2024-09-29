import Navbar from "../components/Navbar";
import "../styling/about.css";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about__container">
        <div className="about__element">
          <div className="about__image"></div>
          <div className="about__content">
            <p>Author Name</p>
            <h1>Title of the Article</h1>
            <button className="about__button">Read more</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
