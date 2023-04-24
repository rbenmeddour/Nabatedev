import { graphql } from 'gatsby';


const Landing_Article_Info = graphql`
query {
    wpPage(id: { eq: "cG9zdDoyOA==" }) {
      id
      title
      content
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 800
                placeholder: BLURRED

              )
            }
          }
        }
      }
    }
  }
  
`;

export default Landing_Article_Info  
