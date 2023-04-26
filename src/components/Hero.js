import React from "react";

const Hero = ({ title, img, headline }) => {
  return (
    <div className="flex items-center justify-center"
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "800px"
      }}
    >
      <div className="flex-col">
        <h1 className="text-white text-5xl m-10">{title}</h1>
        <p className="text-white text-5xl">{headline}</p>
      </div>
    </div>
  );
};

export default Hero;