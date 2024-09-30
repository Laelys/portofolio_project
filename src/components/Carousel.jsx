import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import image1 from "../assets/carousel-images/1.png";
import image2 from "../assets/carousel-images/2.png";
import image3 from "../assets/carousel-images/3.png";
import "../styling/carousel.css";

const Carousel = ({ currentIndex, setCurrentIndex }) => {
  const images = [image1, image2, image3];
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setIsLoaded(false); // Reset loaded state when switching images
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setIsLoaded(false); // Reset loaded state when switching images
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage(); // This does not need to rely on currentIndex in the dependency array
    }, 3000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="carousel">
      <button className="carousel__button prev" onClick={prevImage}>
        &#10094;
      </button>

      <img
        src={images[currentIndex]}
        alt={`carousel-${currentIndex + 1}`}
        className={`carousel__image ${isLoaded ? "loaded" : ""}`} // Add "loaded" class when image is fully loaded
        onLoad={() => setIsLoaded(true)} // Mark the image as loaded
      />

      <button className="carousel__button next" onClick={nextImage}>
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
