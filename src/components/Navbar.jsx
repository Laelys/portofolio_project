import { Link } from "react-router-dom";
import "../styling/navbar.css";

const Navbar = () => {
  const handleEmailClick = () => {
    const email = "ioanagheorghian@gmail.com";
    const subject = "Inquiry regarding your services";
    const body =
      "I hope this message finds you well. I came across your website and I was impressed by your work. I'm reaching out because I have questions about your services";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <nav className="navbar">
      <ul className="navbar__links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          {" "}
          <Link to="/posts">Blog</Link>
        </li>
        <li>
          <Link to="/about">About me</Link>
        </li>
      </ul>
      <div className="navbar__logo">JG</div>{" "}
      {/*Will be an image that is why it's a div*/}
      <button className="navbar__button" onClick={handleEmailClick}>
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
