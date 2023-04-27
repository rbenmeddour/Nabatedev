import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { StaticImage } from 'gatsby-plugin-image';

const Image = ({  alt , width, height, src}) => {
    <img src={src} alt={alt} width={width} height={height}/>
    
};

export default Image;
