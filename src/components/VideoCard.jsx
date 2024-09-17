// src/components/VideoCard.jsx
import React, { useState, useRef } from "react";


const VideoCard = ({ videoSrc, title, description, links }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`video-card ${isFlipped ? "flipped" : ""}`}
      onClick={handleClick}
    >
      <div
        className="video-front"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video ref={videoRef} src={videoSrc} muted loop />
      </div>
      <div className="video-back">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="links">
          {links.map((link, index) => (
            <a key={index} href={link.href}>
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
