import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-scroll";

const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 90) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header-1>
      <header className={hidden ? "hidden" : ""}>
        <a href="#" className="logo">
          Dainius Genutis
        </a>
        <nav>
          <Link to="about" smooth={true} duration={500}>
            About Me
          </Link>
          <Link to="container4" smooth={true} duration={500}>
            Projects
          </Link>
          <a href="#">Say Hello</a>
        </nav>
      </header>
    </header-1>
  );
};

export default Header;
