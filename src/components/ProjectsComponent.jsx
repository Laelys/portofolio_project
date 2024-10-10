import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProjectCard from "./subcomponents/ProjectCard";
import ProjectCardHorizontal from "./subcomponents/ProjectCardHorizontal";
import "../styling/projects.css";

const ProjectsComponent = ({ variant = "home" }) => {
  const [projectsData, setProjectsData] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch("/projectsData.json")
      .then((response) => response.json())
      .then((data) => setProjectsData(data))
      .catch((error) => console.error("Error fetching project data:", error));
  }, []);

  const preloadImage = (src) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(img.src);
      img.onerror = () => resolve(null); // Resolve even if there's an error to avoid blocking
    });
  };

  const openModal = async (project) => {
    if (variant === "projectsPage") {
      const preloadedSrc = await preloadImage(
        project.imageSrcHigh || project.imageSrc
      );

      // Only open the modal if the image is preloaded
      if (preloadedSrc) {
        setSelectedProject({ ...project, preloadedSrc });
      }
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div
      className={`projects__container ${
        variant === "projectsPage" ? "projectsPage__variant" : ""
      }`}
    >
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

      <div className="projects__row">
        {projectsData.slice(0, 3).map((project, index) => (
          <ProjectCard
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            onClick={() => openModal(project)}
            variant={variant}
          />
        ))}
      </div>

      {projectsData[6] && (
        <ProjectCardHorizontal
          imageSrc={projectsData[6].imageSrc}
          title={projectsData[6].title}
          description={projectsData[6].description}
          onClick={() => openModal(projectsData[6])}
          variant={variant}
        />
      )}

      <div className="projects__row">
        {projectsData.slice(3, 6).map((project, index) => (
          <ProjectCard
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            onClick={() => openModal(project)}
            variant={variant}
          />
        ))}
      </div>

      {projectsData[7] && (
        <ProjectCardHorizontal
          imageSrc={projectsData[7].imageSrc}
          title={projectsData[7].title}
          description={projectsData[7].description}
          onClick={() => openModal(projectsData[7])}
          variant={variant}
        />
      )}

      <div className="projects__graphics__bottom">
        <div className="projects__rectangle__first__bottom"></div>
        <div className="projects__rectangle__second__bottom"></div>
        <div className="projects__rectangle__third__bottom"></div>
      </div>

      {variant === "projectsPage" && (
        <div className="projects__graphics__bottom2">
          <div className="projects__bottom2__rectangle__first"></div>
          <div className="projects__bottom2__rectangle__second"></div>
          <div className="projects__bottom2__rectangle__third"></div>
        </div>
      )}

      {/* Modal for displaying high-resolution image and detailed description */}
      {selectedProject && (
        <div className="projectsModal__overlay" onClick={closeModal}>
          <div
            className="projectsModal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedProject.preloadedSrc}
              alt={selectedProject.title}
              className="projectsModal__image"
            />
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.descriptionModal}</p>
            <button onClick={closeModal} className="projectsModal__close">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

ProjectsComponent.propTypes = {
  variant: PropTypes.oneOf(["home", "projectsPage"]),
};

export default ProjectsComponent;
