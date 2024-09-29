import Navbar from "../components/Navbar";
import PostCard from "../components/subcomponents/PostCard";
import "../styling/posts.css";

const Posts = () => {
  return (
    <>
      <Navbar />
      <div className="posts__container">
        <div className="posts__element">
          <div className="posts__image"></div>
          <div className="posts__content">
            <p>Author Name</p>
            <h1>Title of the Article</h1>
            <button className="posts__button">Read more</button>
          </div>
        </div>

        <div className="posts__card__row">
          <PostCard
            title="This is the first tile"
            description="This is the first description"
          />
          <PostCard
            title="This is the second tile"
            description="This is the second description"
          />
        </div>
      </div>
    </>
  );
};

export default Posts;
