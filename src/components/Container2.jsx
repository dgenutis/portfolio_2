import React, { useEffect, useRef } from "react";
import "./Container2.css";

const Container2 = () => {
  const aboutMeRef = useRef(null);
  const resumeRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); // Stop observing once the animation is triggered
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (aboutMeRef.current) {
      observer.observe(aboutMeRef.current);
    }

    resumeRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (aboutMeRef.current) {
        observer.unobserve(aboutMeRef.current);
      }

      resumeRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="about" id="about">
      <div className="about-me" ref={aboutMeRef}>
        <hr />
        <h1>About Me</h1>
        <p>
          I have accumulated 18 years of experience working in a casino, from a
          croupier to a shift manager position. Six months ago, after our branch
          in Klaipėda closed, I decided to try something that had interested me
          for a long time – programming. After successfully completing the
          Vilnius Coding School JavaScript - Web Full-Stack course, I realized
          that I would like to develop my career as a junior programmer.
          Therefore, I am currently open to new career opportunities in the
          programming field.
        </p>
        <div className="cv">
          <a
            href="/RESUME.pdf"
            className="resume"
            target="_blank"
            ref={(el) => (resumeRefs.current[0] = el)}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1.5em"
              width="1.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fillRule="nonzero"
                  d="M13 12h3l-4 4-4-4h3V8h2v4zm2-8H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992z"
                ></path>
              </g>
            </svg>
            Resume ENG
          </a>
          <a
            href="/CV.pdf"
            className="resume"
            target="_blank"
            ref={(el) => (resumeRefs.current[1] = el)}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1.5em"
              width="1.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fillRule="nonzero"
                  d="M13 12h3l-4 4-4-4h3V8h2v4zm2-8H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992z"
                ></path>
              </g>
            </svg>
            Resume LT
          </a>
        </div>
      </div>
    </div>
  );
};

export default Container2;
