import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useState, useEffect } from "react";

const Picture = () => {
  const [boxedImage, setIBoxedImage] = useState([]);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [image5, setImage5] = useState(null);
  const [image6, setImage6] = useState(null);
  const [image7, setImage7] = useState(null);
  const [image8, setImage8] = useState(null);
  const [image9, setImage9] = useState(null);
  const [image10, setImage10] = useState(null);
  const [image11, setImage11] = useState(null);
  const [image12, setImage12] = useState(null);
  const [image13, setImage13] = useState(null);
  const [image14, setImage14] = useState(null);
  const [image15, setImage15] = useState(null);

  const allImages = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            id
            fluid(maxHeight: 200, maxWidth: 200) {
              src
              srcSet
              base64
              aspectRatio
              originalImg
              sizes
              originalName
            }
          }
        }
      }
    }
  `);

  // console.log(allImages);

  const getAndSeparateAllImages = (images) => {
    console.log(images.allImageSharp.edges[0].node.fluid);

    const setImageFunctions = [
      setImage1,
      setImage2,
      setImage3,
      setImage4,
      setImage5,
      setImage6,
      setImage7,
      setImage8,
      setImage9,
      setImage10,
      setImage11,
      setImage12,
      setImage13,
      setImage14,
      setImage15,
    ];

    images.allImageSharp.edges.forEach((array, index) => {
      console.log(array.node);
      setImageFunctions[index](array.node);
    });
  };

  console.log(image2, "image 2");

  useEffect(() => {
    getAndSeparateAllImages(allImages);
  }, [allImages]);

  // console.log(data);
  return <div>Picture</div>;
};

export default Picture;
