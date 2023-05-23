import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import parse from "html-react-parser";
import Nav from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import HistoryPost from "../components/Posts/HistoryPost";
import '../styles/history.css'

const History = () => {
  const query = useStaticQuery(graphql`
    query {
      wpPage(id: { eq: "cG9zdDo2" }) {
        id
        title
        content
      }
    }
  `);

  const parsedContent = parse(query.wpPage.content);

  let srcValue;
  if (parsedContent[1].props.children.props?.src) {
    srcValue = parsedContent[1].props.children.props?.src;
  } else {
    srcValue =
      parsedContent[1].props.children[0].props.children[2].props["data-src"];
  }
  // const headline = parsedContent[1].props.children;

  return (
    <>
      <Nav />
      <Hero title={query.wpPage.title} img={srcValue} />
      <HistoryPost />
      <Footer />
    </>
  );
};

export default History;
