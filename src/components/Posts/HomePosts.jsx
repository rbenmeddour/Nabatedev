import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import parse from "html-react-parser";
import Article from "../Article";

const HomePosts = ()=> {
    const queryPosts = useStaticQuery(graphql`
    query {
        allWpPost  {
        edges {
          node {
            title
            content
            categories {
              nodes {
                id
              }
            }
          }
        }
        }
    }`)

    const filteredPosts = queryPosts.allWpPost.edges.filter(edge => edge.node.categories.nodes.some(node => node.id === "dGVybTo0Ng=="))
    
    return( 
        <>
          {filteredPosts.map((post, index) => {
              const parsedContent = parse(post.node.content);
              const postParagraph = parsedContent[3].props.children;
              let postImg;
              if(parsedContent[1].props.children.props?.src){
                postImg = parsedContent[1].props.children.props?.src;
              }else{
                postImg = parsedContent[1].props.children[0].props.children[2].props['data-src'];
              }
              const postTitle = post.node.title;
              const reverse = index % 2 === 0; // true for even index, false for odd index
                return (
                  <Article
                    key={index}
                    image={postImg}
                    paragraph={postParagraph}
                    title={postTitle}
                    reverse={reverse}
                  />
                );
              })}
        </>
    )
}
export default HomePosts;