import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { StaticImage } from 'gatsby-plugin-image';

const Image = ({ image, alt , width, height, src}) => {
    console.log(image);
    return <GatsbyImage 
 
    src={src} 
    alt={alt} 
    style={{ width, height }}
    // width={width}
    // height={height}
    />;
    // return <StaticImage 
    // image={image} 
    // alt={alt} 
    // // style={{ width: width, height: height }}
    // width={width}
    // height={height}
    // />;
  
    
};

export default Image;
