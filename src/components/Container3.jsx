import "./Container3.css";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const iconsData = [
  { src: "/html.png", alt: "1", label: "html" },
  { src: "/css.png", alt: "2", label: "css" },
  { src: "/js.png", alt: "3", label: "JavaScript" },
  { src: "/react.png", alt: "4", label: "React" },
  { src: "/ts.png", alt: "5", label: "TypeScript" },
  { src: "/bootstrap.png", alt: "6", label: "Bootstrap" },
  { src: "/tailwind.png", alt: "7", label: "Tailwind" },
  { src: "/git.png", alt: "8", label: "git" },
  { src: "/github.png", alt: "9", label: "GitHub" },
  { src: "/mongoDB.png", alt: "10", label: "MongoDB" },
  { src: "/node.png", alt: "11", label: "Node.js" },
  { src: "/Agile.png", alt: "12", label: "Agile" },
];

const Container3 = () => {
  const [flipped, setFlipped] = useState(Array(iconsData.length).fill(false));

  const handleFlip = (index) => {
    setFlipped((prev) => {
      const newFlipped = [...prev];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  return (
    <div className="skills-container">

    <div className="skills-container-1">
      <Swiper
        modules={[Autoplay]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }} 
        loop={true}
        spaceBetween={50}
        slidesPerView={5}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {iconsData.map((icon, index) => (
          <SwiperSlide key={index}>
            <div
              className={`icon ${flipped[index] ? "flipped" : ""}`} 
              onClick={() => handleFlip(index)}
            >
              <div className="icon-inner">
                <div className="icon-front">
                  <img src={icon.src} alt={icon.alt} />
                </div>
                <div className="icon-back">{icon.label}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};

export default Container3;
