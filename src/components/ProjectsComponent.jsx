import { useEffect, useState } from "react";
import ProjectCard from "./subcomponents/ProjectCard";
import ProjectCardHorizontal from "./subcomponents/ProjectCardHorizontal";
import "../styling/projects.css";

const ProjectsComponent = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    // Fetch the data from the JSON file in the public folder
    fetch("/projectsData.json")
      .then((response) => response.json())
      .then((data) => setProjectsData(data))
      .catch((error) => console.error("Error fetching project data:", error));
  }, []);

  return (
    <div className="projects__container">
      <div className="projects__graphics">
        <div className="projects__rectangle__first"></div>
        <div className="projects__rectangle__second"></div>
        <div className="projects__rectangle__third"></div>
      </div>
      <h2 className="projects__title">
        With 6 years of experience, I have built a diverse portfolio by
        collaborating with various designers on a wide range of projects.
      </h2>
      <p className="projects__description">
        My expertise is backed by proficiency in industry-standard tools such as
        3DS Max and AutoCAD, enabling me to bring creative visions to life with
        precision and innovation.
      </p>

      {/* Render the first set of project cards */}
      <div className="projects__row">
        {projectsData.slice(0, 3).map((project, index) => (
          <ProjectCard
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>

      {/* Render the first horizontal project card */}
      {projectsData[6] && (
        <ProjectCardHorizontal
          imageSrc={projectsData[6].imageSrc}
          title={projectsData[6].title}
          description={projectsData[6].description}
        />
      )}

      {/* Render the second set of project cards */}
      <div className="projects__row">
        {projectsData.slice(3, 6).map((project, index) => (
          <ProjectCard
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>

      {/* Render the second horizontal project card */}
      {projectsData[7] && (
        <ProjectCardHorizontal
          imageSrc={projectsData[7].imageSrc}
          title={projectsData[7].title}
          description={projectsData[7].description}
        />
      )}
    </div>
  );
};

export default ProjectsComponent;

// sa pun un data in public pentru fetch textele si pozele ca sa le fac un obiect si sa le iau cu fetch. de mutat pozele in public, le fac obiect si le iau de acolo. Simulare de API pentru ca nu folosesc API
