import React, { useEffect, useRef } from "react";
import "./Container1.css";
import { Link } from "react-scroll";

const Container1 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("flyIn");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current.querySelectorAll(
      ".title h2, .title h1, .photo"
    );
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="container">
      <div className="container-1" ref={containerRef}>
        <div className="title">
          <h2>Junior JavaScript</h2>
          <h1>Full-Stack Developer</h1>
        </div>
        <div className="photo-container">
          <img src="/2.jpg" alt="Developer" className="photo" />
        </div>
      </div>
      <Link to="container" smooth={true} duration={500}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          version="1.1"
          viewBox="0 0 16 16"
          height="3em"
          width="3em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 0.5l-7.5 7.5h4.5v8h6v-8h4.5z"></path>
        </svg>
      </Link>
    </div>
  );
};

export default Container1;
