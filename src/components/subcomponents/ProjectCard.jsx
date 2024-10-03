import PropTypes from "prop-types";

const ProjectCard = ({ imageSrc, title, description }) => {
  return (
    <div className="project__card">
      <img src={imageSrc} alt="Project" className="project__card__image" />
      <p className="projects__card__title">{title}</p>
      <p className="project__card__description">{description}</p>
    </div>
  );
};

ProjectCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectCard;
