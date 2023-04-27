import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import parse from "html-react-parser";
import Nav from "../components/NavBar";
import Hero from "../components/Hero";
import HomePosts from "../components/Posts/HomePosts";

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
    let srcValue;
    if(parsedContent[3].props.children.props?.src){
      srcValue = parsedContent[3].props.children.props?.src;
    }else{
      srcValue = parsedContent[3].props.children[0].props.children[2].props['data-src'];
    }
    const headline = parsedContent[1].props.children;

    return (
        <div>
        <Nav /> 
        <Hero title={query.wpPage.title} img={srcValue} headline={headline}/>
        <HomePosts />
      </div>
    );
};

export default Homepage;