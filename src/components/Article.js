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
        console.log(imgNode.props.src, 'test');
        // return imgNode
        const src = imgNode.props.src;
        const alt = imgNode.props.alt || "";
        // const imageData = getImage(src);
        if (alt.includes("landing_articl")) {
        //     // console.log("test===================");
          return (
            <Image
              key={`image-${index}`}
          
              src={src}
              alt={alt}
              width={300}
              height={300}
            />
          );
        } else {
            return (
                <Image
                  key={`image-${index}`}
                  image={imgNode}
                  src={src}
                  alt={alt}
                  width={600}
                  height={600}
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
