import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import "../styling/aboutme.css";

const About = () => {
  return (
    <>
      <Navbar />
      <AboutMe variant="aboutPage" />
      <Footer />
    </>
  );
};

export default About;
