import "./Projects.css";
import { Link } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { useEffect, useState } from "react";
import videoData from "../data/videos.json";

const Projects = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(videoData);
  }, []);

  // Pridėkite šį useEffect, kad automatiškai slinktų į viršų, kai komponentas užkraunamas
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="projects-container">
        <div className="projects-header-background">
          <div className="projects-header">
            <Link to="#" className="logo">
              Dainius Genutis
            </Link>
            <div className="projects-nav">
              <Link to="/">To Main</Link>
            </div>
          </div>
        </div>
        <div className="projects-1">
          <h3>Projects</h3>
          <hr />
        </div>
        <div className="projects-2">
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
        <div className="social-icons">
          <a href="https://www.facebook.com/dgenutis/" target="_blank">
            <img src="/Facebook_white.png" alt="FB" />
          </a>{" "}
          <a href="https://www.linkedin.com/in/dainiusgenutis/" target="_blank">
            <img src="/LinkedIN_white.png" alt="LI" />
          </a>
          <a href="https://github.com/dgenutis" target="_blank">
            <img src="/Github_white.png" alt="GH" />
          </a>
        </div>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
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
        </a>
      </div>
    </>
  );
};

export default Projects;
