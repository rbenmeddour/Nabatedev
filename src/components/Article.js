import React, { useState, useEffect } from "react";
import Image from "./Image";
import { graphql, useStaticQuery } from "gatsby";
import parse from "html-react-parser";

const Article = () => {
  const [replacedImages, setReplacedImages] = useState([]);

  const data = useStaticQuery(graphql`
    query {
      wpPage(id: { eq: "cG9zdDoyOA==" }) {
        id
        content
      }
    }
  `);

  const parsedContent = data;

  const replaceImages = (content) => {
    const allContentFromThePage = parse(content.wpPage.content);
    const figures = allContentFromThePage.filter((node) => node.type === "figure");
    const replacedImages = [];
  
    figures.forEach((image) => {
      const childrenNode = image.props.children;
      const childImages = [];
      childrenNode.forEach((node) => {
        const childNode = node.props.children;
        if (childNode) {
          if (Array.isArray(childNode)) {
            childNode.forEach((el) => {
              const src = el.props["data-src"];
              childImages.push(<img key={src} src={src} alt='' />);
            });
          }
        }
      });
      replacedImages.push(...childImages);
    });
  
    return replacedImages;
  };
  
  console.log(replacedImages);
  useEffect(() => {
    setReplacedImages(replaceImages(parsedContent));
  }, [parsedContent]);

  console.log(replacedImages);

  return (
    <div>
      {replacedImages.length ? (
        <article>{replacedImages}</article>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Article;
