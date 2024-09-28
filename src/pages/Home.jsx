import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Projects from "../components/Projects";
import "../styling/home.css";
import quoteImage from "../assets/quote-image/portrait.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="carousel__container">
        <div className="carousel__text">
          <h2>Your best value proposition.</h2>
          <p>Insert your paragraph here.</p>
          <button>Click me!</button>
        </div>
        <Carousel />
      </div>
      <div className="quote__container">
        <p className="quote__text">Add a quote here</p>
        <div className="quote__portrait">
          <img src={quoteImage} alt="Portrait" />
        </div>
        <p className="quote__author">Authors name, ocupation</p>
      </div>
      <Projects />
    </>
  );
};

export default Home;
