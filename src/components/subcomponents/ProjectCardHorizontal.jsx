import PropTypes from "prop-types";

const ProjectCardHorizontal = ({
  imageSrc,
  title,
  description,
  onClick,
  variant = "home",
}) => {
  return (
    <div className="project__card__horizontal">
      <img
        src={imageSrc}
        alt={title}
        className="project__card__horizontal__image"
        onClick={variant === "projectsPage" ? onClick : undefined}
      />
      <div className="project__card__horizontal__content">
        <h3 className="project__card__horizontal__title">{title}</h3>
        <p className="project__card__horizontal__description">{description}</p>
      </div>
    </div>
  );
};

ProjectCardHorizontal.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["home", "projectsPage"]),
};

export default ProjectCardHorizontal;
