import { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import image1 from "../assets/carousel-images/Carousel1.webp";
import image2 from "../assets/carousel-images/Carousel2.webp";
import image3 from "../assets/carousel-images/Carousel3.webp";
import "../styling/carousel.css";

const Carousel = ({ currentIndex, setCurrentIndex }) => {
  const images = useMemo(() => [image1, image2, image3], []);
  const [isLoaded, setIsLoaded] = useState(true); // Start as true for the first image

  // Preload images
  useEffect(() => {
    const preloadImages = () => {
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };
    preloadImages();
  }, [images]);

  // Function to move to the next image
  const nextImage = () => {
    setIsLoaded(false); // Set to false to start the transition
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setIsLoaded(true); // Set to true once image changes
    }, 1500); // Wait for 1.5 seconds (transition duration)
  };

  // Function to move to the previous image
  const prevImage = () => {
    setIsLoaded(false); // Set to false to start the transition
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsLoaded(true); // Set to true once image changes
    }, 1500); // Wait for 1.5 seconds (transition duration)
  };

  // Timer logic to automatically cycle images
  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 12000); // 12 seconds: 10 for typing + 2 seconds to read

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, images.length]);

  return (
    <div className="carousel">
      <button
        className="carousel__button prev"
        onClick={() => {
          prevImage();
          document.activeElement.blur(); // Remove button focus after click
        }}
      >
        &#10094;
      </button>

      <img
        src={images[currentIndex]}
        alt={`carousel-${currentIndex + 1}`}
        className={`carousel__image ${isLoaded ? "loaded" : ""}`}
        loading="lazy"
      />

      <button
        className="carousel__button next"
        onClick={() => {
          nextImage();
          document.activeElement.blur(); // Remove button focus after click
        }}
      >
        &#10095;
      </button>
    </div>
  );
};

Carousel.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  setCurrentIndex: PropTypes.func.isRequired,
};

export default Carousel;
