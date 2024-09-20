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
        <Link to="container" smooth={true} duration={500} className="logo">
          Dainius Genutis
        </Link>
        <nav>
          <Link to="about" smooth={true} duration={500}>
            About Me
          </Link>
          <Link to="container4" smooth={true} duration={500}>
            Projects
          </Link>
          <Link to="container5" smooth={true} duration={500}>
            Say Hello
          </Link>

        </nav>
      </header>
    </header-1>
  );
};

export default Header;
