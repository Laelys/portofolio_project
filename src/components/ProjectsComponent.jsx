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
      <div className="projects__graphics">
        <div className="projects__rectangle__first"></div>
        <div className="projects__rectangle__second"></div>
        <div className="projects__rectangle__third"></div>
      </div>
      <h2 className="projects__title">
        With 6 years of experience, I have built a diverse portofolio by
        collaborating with various designers on a wide range of projects.
      </h2>
      <p className="projects__description">
        My expertise is backed by proficiency in industry-standard tools such as
        3DS Max and AutoCAD, enabling me to bring creative visions to life with
        precision and innovation.
      </p>

      <div className="projects__row">
        <ProjectCard imageSrc={image1} title="Title" description="Project " />
        <ProjectCard imageSrc={image2} title="Title" description="Project 2" />
        <ProjectCard imageSrc={image3} title="Title" description="Project 3" />
      </div>

      <ProjectCardHorizontal imageSrc={image7} description="Project 7" />

      <div className="projects__row">
        <ProjectCard imageSrc={image4} title="Title" description="Project 4" />
        <ProjectCard imageSrc={image5} title="Title" description="Project 5" />
        <ProjectCard imageSrc={image6} title="Title" description="Project 6" />
      </div>

      <ProjectCardHorizontal imageSrc={image8} description="Project 8" />
    </div>
  );
};

export default ProjectsComponent;

// sa pun un data in public pentru fetch textele si pozele ca sa le fac un obiect si sa le iau cu fetch. de mutat pozele in public, le fac obiect si le iau de acolo. Simulare de API pentru ca nu folosesc API
