import PropTypes from "prop-types";

const PostCard = ({ title, description }) => {
  return (
    <div className="post__card">
      <h2 className="post__card__title">{title}</h2>
      <p className="post__card__description">{description}</p>
      <button className="post__card__button">Read more</button>
    </div>
  );
};

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PostCard;
