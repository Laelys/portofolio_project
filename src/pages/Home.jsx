import { useState } from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Projects from "../components/ProjectsComponent";
import quoteImage from "../assets/quote-image/portrait.png";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import background1 from "../assets/hero-section/marble1.jpg";
import background2 from "../assets/hero-section/marble2.jpg";
import background3 from "../assets/hero-section/marble3.jpg";
import "../styling/home.css";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const backgrounds = [background1, background2, background3];

  return (
    <>
      <Navbar />
      <div
        className="heroSection__container"
        style={{ backgroundImage: `url(${backgrounds[currentIndex]})` }}
      >
        <div className="heroSection__text">
          <h2>Your best value proposition.</h2>
          <p>Insert your paragraph here.</p>
          <button>Click me!</button>
        </div>
        <Carousel
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
      <div className="quote__container">
        <p className="quote__text">Add a quote here</p>
        <div className="quote__portrait">
          <img src={quoteImage} alt="Portrait" />
        </div>
        <p className="quote__author">Authors name, occupation</p>
      </div>
      <Projects />
      <AboutMe />
      <div className="cta__section">
        <h2>New Section Title</h2>
        <p>This is a description for the new section.</p>
        <button className="cta__section__button">Click Me</button>
      </div>
      <Footer />
    </>
  );
};

export default Home;
