import React from "react";
import Image from "./Image";
import { graphql, useStaticQuery } from "gatsby";
import parse from "html-react-parser";
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

  const { title, content, featuredImage } = data.wpPage;

  const parsedContent = parse(data.wpPage.content);
  //   console.log(parsedContent);
  //   console.log(featuredImage);

  const replaceImages = (content) => {
    return content.map((node, index) => {
        console.log(node);
      if (
        node.type === "figure" &&
        node.props.children &&
        node.props.children.type === "img"
      ) {
        const imgNode = node.props.children;
        const src = imgNode.props.src;
        const alt = imgNode.props.alt || "";
        const width = imgNode.props.width;
        const height = imgNode.props.height;
        const imageData = getImage(src);
        // console.log(alt);
        console.log(width);
        if (alt.includes("landing_article")) {
          return (
            <Image
              key={`image-${index}`}
              image={imageData}
              alt={alt}
              width={width}
              height={height}
            />
          );
        }
      }
      return node;
    });
  };

  const replacedImagesContent = replaceImages(parsedContent);

  return (
    <div>
      <article>{replacedImagesContent}</article>
    </div>
  );
};

export default Article;
