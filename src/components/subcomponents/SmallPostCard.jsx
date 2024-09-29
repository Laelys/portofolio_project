import PropTypes from "prop-types";

const SmallPostCard = ({ imageSrc, title }) => {
  return (
    <div className="small__post__card">
      <div className="small__post__image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="small__post__content">
        <h2>{title}</h2>
        <button className="small__post__button">See more</button>
      </div>
    </div>
  );
};

SmallPostCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SmallPostCard;
