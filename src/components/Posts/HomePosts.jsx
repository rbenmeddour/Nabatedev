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
    const filteredPosts = queryPosts.allWpPost.edges.filter(edge => edge.node.categories.nodes.some(node => node.id === "dGVybTo2MA=="))

    return( 
        <>
            {filteredPosts.map((post, index) => {
                const parsedContent = parse(post.node.content);
                const postParagraph = parsedContent[3].props.children;
                const postImg = parsedContent[1].props.children.props.src;
                const postTitle = post.node.title;
                return <Article key={index} image={postImg} paragraph={postParagraph} title={postTitle} />;
            })}
        </>
    )
}
export default HomePosts;