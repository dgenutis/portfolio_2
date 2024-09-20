// src/Container4.jsx
import "./Container4.css";
import VideoCard from "./VideoCard";

const Container4 = () => {
  const videos = [
    {
      src: "/moviesApp.webm",
      title: "Movies App",
      description: "Movies App that uses a movies API",
      links: [
        { href: "https://dgenutis-moviesapp.netlify.app/", text: "Link" },
        {
          href: "https://github.com/dgenutis/filmuApp?tab=readme-ov-file",
          text: "Git-Hub",
        },
      ],
    },
    {
      src: "/nenix.webm",
      title: "Nenix",
      description: "Nenix example from Figma",
      links: [
        { href: "https://dgenutis-nenix.netlify.app/", text: "Link" },
        {
          href: "https://github.com/dgenutis/nenix",
          text: "Git-Hub",
        },
      ],
    },
    {
      src: "/weather.webm",
      title: "Weather App",
      description: "Weather App that uses a Weather API",
      links: [
        {
          href: "https://dgenutis.github.io/weatherapp-student/",
          text: "Link",
        },
        {
          href: "https://github.com/dgenutis/weatherapp-student?tab=readme-ov-file",
          text: "Git-Hub",
        },
      ],
    },
    {
      src: "/lentpjuve.webm",
      title: "Lentpjuve",
      description: "Lentpjuve: How the calculator works",
      links: [
        {
          href: "https://dgenutis.github.io/Medienos-Skaiciuokle/",
          text: "Link",
        },
        {
          href: "https://github.com/dgenutis/Medienos-Skaiciuokle?tab=readme-ov-file",
          text: "Git-Hub",
        },
      ],
    },
    {
      src: "/skaiciuotuvas.webm",
      title: "Skaičiuotuvas",
      description: "Simple Calculator",
      links: [
        {
          href: "https://dgenutis.github.io/Skaiciuotuvas/",
          text: "Link",
        },
        {
          href: "https://github.com/dgenutis/Skaiciuotuvas?tab=readme-ov-file",
          text: "Git-Hub",
        },
      ],
    },
    {
      src: "/portfolio1.webm",
      title: "Portfolio",
      description: "This is Portfolio tamplate",
      links: [
        {
          href: "https://dgenutis.github.io/Porfolio_1-sablonas-/#",
          text: "Link",
        },
        {
          href: "https://github.com/dgenutis/Porfolio_1-sablonas-?tab=readme-ov-file",
          text: "Git-Hub",
        },
      ],
    },
  ];

  return (
    <>
      <div className="container4">
        <h3>Projects</h3>
        <hr />
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
      <div className="container4-2">
        <a href="#">
          view all <i class="fa fa-th" aria-hidden="true"></i>
        </a>
      </div>
    </>
  );
};

export default Container4;
