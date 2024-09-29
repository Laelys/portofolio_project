import Navbar from "../components/Navbar";
import PostCard from "../components/subcomponents/PostCard";
import SmallPostCard from "../components/subcomponents/SmallPostCard";
import "../styling/posts.css";
import imageSrc1 from "../assets/carousel-images/1.png";
import Footer from "../components/Footer";

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
      <div className="posts__grid__container">
        <h2>Our Latest Posts</h2>
        <p>Check out the latest blog posts and updates</p>

        <div className="posts__grid">
          <SmallPostCard imageSrc={imageSrc1} title="Post Title 1" />
          <SmallPostCard imageSrc={imageSrc1} title="Post Title 2" />
          <SmallPostCard imageSrc={imageSrc1} title="Post Title 3" />
          <SmallPostCard imageSrc={imageSrc1} title="Post Title 4" />
          <SmallPostCard imageSrc={imageSrc1} title="Post Title 1" />
          <SmallPostCard imageSrc={imageSrc1} title="Post Title 2" />
          <SmallPostCard imageSrc={imageSrc1} title="Post Title 3" />
          <SmallPostCard imageSrc={imageSrc1} title="Post Title 4" />
          <SmallPostCard imageSrc={imageSrc1} title="Post Title 1" />
          <SmallPostCard imageSrc={imageSrc1} title="Post Title 2" />
          <SmallPostCard imageSrc={imageSrc1} title="Post Title 3" />
          <SmallPostCard imageSrc={imageSrc1} title="Post Title 4" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Posts;
