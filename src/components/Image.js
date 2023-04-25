import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Image = ({ image }) => {
console.log(image);
  return (

    <GatsbyImage
    //   image={image}
    //   alt={alt}
    //   src={src}
    //   style={{ width, height }}
    />
  );
};

export default Image;
