import { Link } from "react-router-dom";
import "../styling/navbar.css";

const Navbar = () => {
  const handleEmailClick = () => {
    const email = "laelyseop@gmail.com";
    const subject = "Hello There!";
    const body = "I hope this message finds you well.";
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
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/cta__form">CTA Form</Link>
        </li>
      </ul>
      <p className="navbar__logo">Logo</p>
      <button className="navbar__button" onClick={handleEmailClick}>
        Contact
      </button>
    </nav>
  );
};

export default Navbar;
