import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Projects from "../components/ProjectsComponent";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import quoteImage from "../assets/quote-image/portrait.png";
import HeroBackgrounds from "../components/subcomponents/HeroBackgrounds";
import heroTexts from "../components/subcomponents/HeroTexts";
import TypingEffect from "../components/TypingEffect";
import "../styling/home.css";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const backgrounds = HeroBackgrounds(); // Use the backgrounds from the new component
  const [showText, setShowText] = useState(false);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  const maxLength = Math.max(...heroTexts.map((text) => text.length)); // Find the longest text

  // Preload background images
  useEffect(() => {
    backgrounds.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [backgrounds]);

  // Handle background image loading
  useEffect(() => {
    const img = new Image();
    img.src = backgrounds[currentIndex];
    img.onload = () => setBackgroundLoaded(true);
  }, [currentIndex, backgrounds]);

  // Reset text animation when currentIndex changes
  useEffect(() => {
    setShowText(false);
    const timeout = setTimeout(() => setShowText(true), 50);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <>
      <Navbar />
      <div
        className={`heroSection__container ${
          currentIndex === 0 ? "heroSection--withOpacity" : ""
        }`}
        style={{
          backgroundImage: backgroundLoaded
            ? `url(${backgrounds[currentIndex]})`
            : "none",
        }}
      >
        <div className="heroSection__text">
          <h2>Ioana Sohan-Gheorghian</h2>
          {showText && (
            <TypingEffect
              text={heroTexts[currentIndex]}
              duration={10} // Set the display time for the longest text
              maxLength={maxLength} // Pass the longest text length to calculate typing speed
            />
          )}
          <button>More about me</button>
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
