import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import parse from "html-react-parser";

const Hero = ({title,img}) => {
  return (
    <>
        <img
          className="w-screen h-banner"
          src={img}
          alt="Featured Image"
        />
        <h1>{title}</h1>
    </>
  );
};

export default Hero;
