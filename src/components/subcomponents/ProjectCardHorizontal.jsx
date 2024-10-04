import PropTypes from "prop-types";

const ProjectCardHorizontal = ({ imageSrc, title, description }) => {
  return (
    <div className="project__card__horizontal">
      <img
        src={imageSrc}
        alt="Project"
        className="project__card__horizontal__image"
      />
      <h3 className="project__card__horizontal__title">{title}</h3>
      <p className="project__card__horizontal__description">{description}</p>
    </div>
  );
};

ProjectCardHorizontal.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectCardHorizontal;
