import PropTypes from "prop-types";

const ProjectCard = ({ imageSrc, description }) => {
  return (
    <div className="project__card">
      <img src={imageSrc} alt="Project" className="project__card__image" />
      <p className="project__card__description">{description}</p>
    </div>
  );
};

ProjectCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectCard;
