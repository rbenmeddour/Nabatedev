import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import parse from "html-react-parser";
import Nav from "../components/NavBar";
import Hero from "../components/Hero";
import ContactContainer from "../components/ContactContainer";

const Contacts = () => {
  const query = useStaticQuery(graphql`
    query {
      wpPage(id: { eq: "cG9zdDoxOQ==" }) {
        id
        title
        content
      }
    }
  `);

  const parsedContent = parse(query.wpPage.content);
  console.log(parsedContent);
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
      <ContactContainer />
    </>
  );
};

export default Contacts;
