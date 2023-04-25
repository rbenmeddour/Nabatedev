import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import parse from "html-react-parser";

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      wpPage(id: { eq: "cG9zdDoyOA==" }) {
        id
        title
        content
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 800, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  `);
  const { title, content, featuredImage } = data.wpPage;

  const parsedContent = parse(data.wpPage.content);
  // console.log(parsedContent);
  const h2Elements = parsedContent.filter((child) => child.type === "h2");
  const subtitleBanner = h2Elements[0].props.children;
  // console.log(h2Elements);
  // console.log(subtitleBanner);
  // const bannerImage = 
  // console.log(featuredImage);

  return (
    <div className="relative min-h-screen">
      {featuredImage && (
        <img
          className="w-screen h-banner"
          src={
            featuredImage.node.localFile.childImageSharp.gatsbyImageData.images
              .fallback.src
          }
          alt="Featured Image"
        />
      )}
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
        {title}
      </h1>
      <h2 className="text-center absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
        {subtitleBanner}
      </h2>
    </div>
  );
};

export default Hero;
