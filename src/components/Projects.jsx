import ProjectCard from "../components/subcomponents/ProjectCard";
import "../styling/projects.css";
import image1 from "../assets/projects-images/1.jpg";
import image2 from "../assets/projects-images/2.jpg";
import image3 from "../assets/projects-images/3.jpg";
import image4 from "../assets/projects-images/4.jpg";
import image5 from "../assets/projects-images/5.jpg";
import image6 from "../assets/projects-images/6.jpg";

const Projects = () => {
  return (
    <div className="projects__container">
      <ProjectCard imageSrc={image1} description="Project 1" />
      <ProjectCard imageSrc={image2} description="Project 2" />
      <ProjectCard imageSrc={image3} description="Project 3" />
      <ProjectCard imageSrc={image4} description="Project 4" />
      <ProjectCard imageSrc={image5} description="Project 5" />
      <ProjectCard imageSrc={image6} description="Project 6" />
    </div>
  );
};

export default Projects;
