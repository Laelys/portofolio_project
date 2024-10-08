import PropTypes from "prop-types";

const ProjectCard = ({ imageSrc, title, description, onClick }) => {
  return (
    <div className="project__card">
      <img
        src={imageSrc}
        alt={title}
        className="project__card__image"
        loading="lazy"
        onClick={onClick}
      />
      <h3 className="project__card__title">{title}</h3>
      <p className="project__card__description">{description}</p>
    </div>
  );
};

ProjectCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ProjectCard;
