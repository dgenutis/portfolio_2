import "./Header.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <>
      <header>
        <a href="#" className="logo">
          Dainius Genutis
        </a>
        <nav>
          <Link to="about" smooth={true} duration={500}>
            About Me
          </Link>
          <a href="#">Projects</a>
          <a href="#">Say Hello</a>
        </nav>
      </header>
    </>
  );
};

export default Header;
