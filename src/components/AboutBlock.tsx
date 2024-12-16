import React, { useState } from "react";
import aboutImage from "../assets/about.png";
import "./AboutBlock.scss";

interface AboutBlockProps {
  text: string;
}

const AboutBlock: React.FC<AboutBlockProps> = ({ text }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className="about-block">
      <section className="text">
        <h1>About</h1>
        <p>
          {text}
        </p>
      </section>

      <div className={`image-wrapper ${isImageLoaded ? "loaded" : "loading"}`}>
        <img src={aboutImage} alt="About" onLoad={handleImageLoad} />
      </div>
    </div>
  );
};

export default AboutBlock;
