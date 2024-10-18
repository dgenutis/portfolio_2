// src/Container4.jsx
import { useEffect, useRef, useState } from "react";
import "./Container4.css";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import videoData from "../data/videos.json";

const Container4 = () => {

  const [videos, setVideos] = useState([]);
  useEffect(() => {
      setVideos(videoData);
    }, []);


  const linkRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (linkRef.current) {
      observer.observe(linkRef.current);
    }

    return () => {
      if (linkRef.current) {
        observer.unobserve(linkRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="container4-0">
        <div className="container4">
          <h3>Projects</h3>
          <hr />
        </div>
      </div>
      <div className="container4-1">
        <div className="container4-1-1">
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              videoSrc={video.src}
              title={video.title}
              description={video.description}
              links={video.links}
            />
          ))}
        </div>
      </div>
      <div className="container4-2-0">
        <div className="container4-2">
          <Link to="/projects" ref={linkRef}>
            view all{" "}
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="1.5em"
              width="1.5em"
              xmlns="http://www.w3.org/2000/svg"
              >
              <path d="M523.8 191.4v288.9h382V128.1zm0 642.2l382 62.2v-352h-382zM120.1 480.2H443V201.9l-322.9 53.5zm0 290.4L443 823.2V543.8H120.1z"></path>
            </svg>
           </Link>
        </div>
      </div>
    </>
  );
};

export default Container4;
