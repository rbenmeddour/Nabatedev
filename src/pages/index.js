import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import Landing_Article_Info from "../api/graphql/landingInfos/queries";

console.log(Landing_Article_Info);

const Index = () => {
    // const data = useStaticQuery(graphql`
    //   query {
    //     wpPage(id: { eq: "cG9zdDoyOA==" }) {
    //       id
    //       title
    //       content
    //       featuredImage {
    //         node {
    //           localFile {
    //             childImageSharp {
    //               gatsbyImageData(
    //                 width: 800
    //                 placeholder: BLURRED
    //               )
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // `)
  
    console.log(data)
  
    return (
      <div>
        {/* your code here */}
      </div>
    )
  }
  
  export default Index
