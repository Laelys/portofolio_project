import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import ProjectsComponent from "../components/ProjectsComponent";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import quoteImage from "../assets/quote-image/portrait.webp";
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
          // the first item of the index receives a temporary class while rendered to receive an opacity filter but I didn't like the transition so I disabled the CSS and edited the photo in PS; I will leave it in the code as a reminder of how this situation was resolved but the class doesn't do anything anymore.
          currentIndex === 0 && "heroSection--withOpacity"
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
          <Link to="/about" className="heroSection__button">
            More about me
          </Link>
        </div>
        <Carousel
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
      <div className="quote__container">
        <div className="quote__content">
          <p className="quote__text">
            &quot;Form follows function - that has been misunderstood. Form and
            function should be one, joined in a spiritual union.&quot;
          </p>
          <div className="quote__portrait">
            <img src={quoteImage} alt="Portrait" />
          </div>
          <p className="quote__author">
            Frank Lloyd Wright - architect, designer, writer, and educator
          </p>
          <div className="quote__graphics">
            <div className="quote__rectangle__first"></div>
            <div className="quote__rectangle__second"></div>
            <div className="quote__rectangle__third"></div>
          </div>
        </div>
      </div>
      <ProjectsComponent variant="home" />
      <AboutMe variant="home" />
      <div className="cta__section">
        <div className="cta__graphics__top">
          <div className="cta__rectangle__top__first"></div>
          <div className="cta__rectangle__top__second"></div>
          <div className="cta__rectangle__top__third"></div>
        </div>
        <h2>Ready to get started?</h2>
        <p>Let us make something beautiful together.</p>
        <Link to="/cta" className="cta__section__button">
          Contact me
        </Link>
        <div className="cta__graphics__bottom">
          <div className="cta__rectangle__bottom__first"></div>
          <div className="cta__rectangle__bottom__second"></div>
          <div className="cta__rectangle__bottom__third"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
