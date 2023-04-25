import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import parse from "html-react-parser";
import Nav from "../components/NavBar";
import Hero from "../components/Hero";

const Homepage = () => {
    const query = useStaticQuery(graphql`
        query {
        wpPage(id: { eq: "cG9zdDoyOA==" }) {
        id
        title
        content
        }
    }`)
    const parsedContent = parse(query.wpPage.content);
    console.log(parsedContent);
    const srcValue = parsedContent[7]
    console.log(srcValue);
    // const headline = parsedContent[1].props.children;
    return (
        <div>
        <Nav /> 
        {/* <Hero title={query.wpPage.title} img={srcValue} headline={headline}/> */}
      </div>
    );
};

export default Homepage;