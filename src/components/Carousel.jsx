import { useState, useEffect } from "react";
import "../styling/carousel.css";
import image1 from "../assets/carousel-images/1.png";
import image2 from "../assets/carousel-images/2.png";
import image3 from "../assets/carousel-images/3.png";

const Carousel = () => {
  const images = [image1, image2, image3];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <div className="carousel">
      <button className="carousel__button prev" onClick={prevImage}>
        &#10094;
      </button>

      <img
        src={images[currentIndex]}
        alt={`carousel-${currentIndex + 1}`}
        className="carousel__image"
      />

      <button className="carousel__button next" onClick={nextImage}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
