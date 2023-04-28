import React from "react";
import scroll from "../../public/_gatsby/_image/Images/scroll.png";

const Hero = ({ title, img, headline }) => {
  return (
    
      <div className="flex items-center justify-center relative"
        style={{
          backgroundImage: `linear-gradient(
            rgba(0,0,0,0.5), 
            rgba(0,0,0, 0.5)
          ), url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "800px",
          textAlign: "center",
          zIndex:-1,
        }}
      >
        <div className="flex-col flex items-center">
          <h1 className="text-white text-5xl m-10">{title}</h1>
          <p className="text-white text-4xl" style={{maxWidth:800}}>{headline}</p>
          <img src={scroll} className="cursor-pointer mx-auto absolute bottom-10 animate-bounce"/>
        </div>
      </div>
  );
};

export default Hero;