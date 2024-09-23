import React, { useEffect, useState, useRef } from "react";
import "./Header.css";
import { Link } from "react-scroll";

const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const menuRef = useRef(null);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 90) {
      setHidden(true);
      setMenuOpen(false); // Close the burger icon when scrolling down
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

  const toggleMenu = () => {
    if (menuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setIsClosing(false);
      }, 200); // Duration of the slideOut animation
    } else {
      setMenuOpen(true);
    }
  };

  const handleMenuItemClick = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsClosing(false);
    }, 200); // Duration of the slideOut animation
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setIsClosing(false);
      }, 200); // Duration of the slideOut animation
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className={`header-background ${hidden ? "hidden" : ""}`}>
      <header>
        <Link to="container" smooth={true} duration={500} className="logo">
          Dainius Genutis
        </Link>
        <nav
          ref={menuRef}
          className={`${menuOpen ? "open" : ""} ${isClosing ? "closing" : ""}`}
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={handleMenuItemClick}
          >
            About Me
          </Link>
          <Link
            to="container4"
            smooth={true}
            duration={500}
            onClick={handleMenuItemClick}
          >
            Projects
          </Link>
          <Link
            to="container5"
            smooth={true}
            duration={500}
            onClick={handleMenuItemClick}
          >
            Say Hello
          </Link>
        </nav>
        <button
          className="burger"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="menu-icon"
            fill="white"
            viewBox="0 0 24 24"
          >
            <rect
              className="line1"
              width="18"
              height="1.5"
              x="3"
              y="6"
              rx="0.5"
            ></rect>
            <rect
              className="line2"
              width="18"
              height="1.5"
              x="3"
              y="11"
              rx="0.75"
            ></rect>
            <rect
              className="line3"
              width="18"
              height="1.5"
              x="3"
              y="16"
              rx="0.75"
            ></rect>
          </svg>
        </button>
      </header>
    </div>
  );
};

export default Header;
