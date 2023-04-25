import React from "react";
import { graphql, useStaticQuery } from "gatsby";



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
  return (
    <div>       
      <h1 className="font-bold text-center text-gray-800">{title}</h1>

      {featuredImage && (
        <img
          src={featuredImage.node.localFile.childImageSharp.gatsbyImageData.images.fallback.src}
          alt="Featured Image"
        />
      )}
    </div>
  )
}

export default Hero