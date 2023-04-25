import React from "react";
// import { graphql, useStaticQuery } from "gatsby";
import Hero from "../components/Hero";
import Main from "../components/Main";

const Index = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       wpPage(id: { eq: "cG9zdDoyOA==" }) {
//         id
//         title
//         content
//         featuredImage {
//           node {
//             localFile {
//               childImageSharp {
//                 gatsbyImageData(width: 800, placeholder: BLURRED)
//               }
//             }
//           }
//         }
//       }
//     }
//   `);

//   const { title, content, featuredImage } = data.wpPage;

  return (
    <div>       
    <Hero/>
    <Main />
      {/* <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      {featuredImage && (
        <img
          src={featuredImage.node.localFile.childImageSharp.gatsbyImageData.images.fallback.src}
          alt="Featured Image"
        />
      )} */}

    </div>
  );
};

export default Index;
