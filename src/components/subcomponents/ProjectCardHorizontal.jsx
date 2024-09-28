import PropTypes from "prop-types";

const ProjectCardHorizontal = ({ imageSrc, description }) => {
  return (
    <div className="project__card__horizontal">
      <img
        src={imageSrc}
        alt="Project"
        className="project__card__horizontal__image"
      />
      <p className="project__card__horizontal__description">{description}</p>
    </div>
  );
};

ProjectCardHorizontal.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectCardHorizontal;
