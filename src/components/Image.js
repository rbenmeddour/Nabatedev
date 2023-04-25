import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const Image = ({ image, alt , width, height}) => {
    return <GatsbyImage 
    image={image} 
    alt={alt} 
    style={{ width: width, height: height }}
    />;
};

export default Image;
