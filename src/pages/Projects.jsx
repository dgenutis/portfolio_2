import "./Projects.css";
import { Link } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { useEffect, useState } from "react";
import videoData from "../data/videos.json"

const Projects = () => {
  const [videos, setVideos] = useState([]);

// pvz kaip paimti 3 failus is .json
// useEffect(() => {
//   const limitedVideos = videoData.slice(0, 3);
//   setVideos(limitedVideos);
// }, []);

  useEffect(() => {
    setVideos(videoData);
  }, []);

  return (
    <>
      <div className="projects-container">
        <header>
          <Link to="/" className="logo">
            Dainius Genutis
          </Link>
        </header>
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
      </div>
    </>
  );
};

export default Projects;
