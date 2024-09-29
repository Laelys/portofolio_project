import ProjectCard from "./subcomponents/ProjectCard";
import ProjectCardHorizontal from "./subcomponents/ProjectCardHorizontal";
import "../styling/projects.css";
import image1 from "../assets/projects-images/1.jpg";
import image2 from "../assets/projects-images/2.jpg";
import image3 from "../assets/projects-images/3.jpg";
import image4 from "../assets/projects-images/4.jpg";
import image5 from "../assets/projects-images/5.jpg";
import image6 from "../assets/projects-images/6.jpg";
import image7 from "../assets/projects-images/7.jpg";
import image8 from "../assets/projects-images/8.jpg";

const ProjectsComponent = () => {
  return (
    <div className="projects__container">
      <h2 className="projects__title">My latest projects go here.</h2>
      <p className="projects__description">
        Here are some of my latest projects. I hope you like them
      </p>

      <div className="projects__row">
        <ProjectCard imageSrc={image1} description="Project 1" />
        <ProjectCard imageSrc={image2} description="Project 2" />
        <ProjectCard imageSrc={image3} description="Project 3" />
      </div>

      <ProjectCardHorizontal imageSrc={image7} description="Project 7" />

      <div className="projects__row">
        <ProjectCard imageSrc={image4} description="Project 4" />
        <ProjectCard imageSrc={image5} description="Project 5" />
        <ProjectCard imageSrc={image6} description="Project 6" />
      </div>

      <ProjectCardHorizontal imageSrc={image8} description="Project 8" />
    </div>
  );
};

export default ProjectsComponent;
