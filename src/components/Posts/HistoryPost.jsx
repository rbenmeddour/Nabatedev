import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import parse from "html-react-parser";
import '../../styles/history.css';

const HistoryPost = () => {
  const queryPosts = useStaticQuery(graphql`
    query {
      allWpPost {
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
    }
  `);
  const filteredPosts = queryPosts.allWpPost.edges.filter((edge) =>
    edge.node.categories.nodes.some((node) => node.id === "dGVybTo4Mw==")
  );

  return (
    <>
      {filteredPosts.map((post) => {
        const parsedContent = parse(post.node.content);
        const postParagraph = parsedContent[3].props.children;
        let postImg;
        if (parsedContent[1].props.children.props?.src) {
          postImg = parsedContent[1].props.children.props?.src;
        } else {
          postImg =
            parsedContent[1].props.children[0].props.children[2].props[
              "data-src"
            ];
        }
        const postTitle = post.node.title;
        return (
          <section className="history">
            <div className="historyContainer">
            <article className="textContainer">
            <p className="text">{postParagraph}</p>
            </article>
            <article className="images">
            <div className="case" style={{ backgroundImage: `url(${postImg})`, backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat'}}></div>
            <div className="case" style={{ backgroundImage: `url(${postImg})`, backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat'}}></div>
            <div className="case" style={{ backgroundImage: `url(${postImg})`, backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat'}}></div>
            </article>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default HistoryPost;
