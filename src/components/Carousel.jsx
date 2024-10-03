import { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import image1 from "../assets/carousel-images/Carousel1.webp";
import image2 from "../assets/carousel-images/Carousel2.webp";
import image3 from "../assets/carousel-images/Carousel3.webp";
import "../styling/carousel.css";

const Carousel = ({ currentIndex, setCurrentIndex }) => {
  const images = useMemo(() => [image1, image2, image3], []);
  const [isLoaded, setIsLoaded] = useState(false);

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
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setIsLoaded(false);
  };

  // Function to move to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setIsLoaded(false);
  };

  // Timer logic to automatically cycle images
  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 15000); // 15 seconds
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, images.length]);

  return (
    <div className="carousel">
      <button
        className="carousel__button prev"
        onClick={() => {
          prevImage();
          setIsLoaded(false); // Reset loading state
        }}
      >
        &#10094;
      </button>

      <img
        src={images[currentIndex]}
        alt={`carousel-${currentIndex + 1}`}
        className={`carousel__image ${isLoaded ? "loaded" : ""}`}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
      />

      <button
        className="carousel__button next"
        onClick={() => {
          nextImage();
          setIsLoaded(false); // Reset loading state
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
