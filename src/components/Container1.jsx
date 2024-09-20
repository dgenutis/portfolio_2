import React, { useEffect, useRef } from "react";
import "./Container1.css";

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

    </div>
  );
};

export default Container1;
