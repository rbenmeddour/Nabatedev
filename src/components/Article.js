import React from "react";
import Image from "./Image";
import { graphql, useStaticQuery } from "gatsby";
import parse from "html-react-parser";
import { StaticImage } from "gatsby-plugin-image"; 
import { getImage } from "gatsby-plugin-image";

const Article = () => {
  const data = useStaticQuery(graphql`
    query {
      wpPage(id: { eq: "cG9zdDoyOA==" }) {
        id
        content
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  transformOptions: { cropFocus: CENTER }
                )
              }
            }
          }
        }
      }
    }
  `);

  const { featuredImage } = data.wpPage;
//   console.log(featuredImage);

  const parsedContent = parse(data.wpPage.content);
    // console.log(parsedContent);
//   console.log(featuredImage.node.localFile.childImageSharp.gatsbyImageData);

  const replaceImages = (content) => {
    let wpPressImg =
      featuredImage.node.localFile.childImageSharp.gatsbyImageData;
    // console.log(wpPressImg);


    const image = {
      src: wpPressImg.images.fallback.srcSet,
      hight: wpPressImg.height,
      width: wpPressImg.width,
      alt: ''
    };
    console.log(image);

    return image;
  };


  const replacedImagesContent = replaceImages(parsedContent);
//   console.log(replacedImagesContent);

  return (
    <div>
      {/* <article>{replacedImagesContent}</article> */}
      <Image image={replacedImagesContent} src={replacedImagesContent.src} hight={replacedImagesContent.hight} width={replacedImagesContent.width} alt={replacedImagesContent.alt}/>
    </div>
  );
};

export default Article;
