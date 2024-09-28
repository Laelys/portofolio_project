import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import "../styling/home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="carousel__container">
        <div className="container__text">
          <h2>Your best value proposition.</h2>
          <p>Insert your paragraph here.</p>
          <button>Click me!</button>
        </div>
        <Carousel />
      </div>
    </>
  );
};

export default Home;
