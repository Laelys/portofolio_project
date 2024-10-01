import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Projects from "../components/ProjectsComponent";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import quoteImage from "../assets/quote-image/portrait.png";
import background1 from "../assets/hero-section/marble1.webp";
import background2 from "../assets/hero-section/marble2.webp";
import background3 from "../assets/hero-section/marble3.webp";
import heroTexts from "../components/subcomponents/HeroTexts";
import "../styling/home.css";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const backgrounds = [background1, background2, background3];
  const [backgroundLoaded, setBackgroundLoaded] = useState(false); // Track loading state

  // Preload background images
  useEffect(() => {
    backgrounds.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle background image loading
  useEffect(() => {
    const img = new Image();
    img.src = backgrounds[currentIndex];
    img.onload = () => setBackgroundLoaded(true); // Set background loaded state to true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <>
      <Navbar />
      <div
        className={`heroSection__container ${
          currentIndex === 0 ? "heroSection--withOpacity" : ""
        }`} // Conditionally add class
        style={{
          backgroundImage: backgroundLoaded
            ? `url(${backgrounds[currentIndex]})`
            : "none",
        }}
      >
        <div className="heroSection__text">
          <h2>Ioana Sohan-Gheorghian</h2>
          <p>{heroTexts[currentIndex]}</p>
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
