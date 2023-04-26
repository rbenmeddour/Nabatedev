import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import parse from "html-react-parser";
import Nav from "../components/NavBar";
import Hero from "../components/Hero";
import ContactContainer from '../components/ContactContainer';


const Contact = () => {
    const query = useStaticQuery(graphql`
    query {
    wpPage(id: { eq: "cG9zdDoxOQ==" }) {
    id
    title
    content
    }
}`)

const parsedContent = parse(query.wpPage.content); 
// console.log(parsedContent);
const srcValue = parsedContent[1].props.children.props.src
// const headline = parsedContent[1].props.children;

  return (
    <> 
        <Nav /> 
        <Hero title={query.wpPage.title} img={srcValue}/>
        <ContactContainer />
    </>
  )
} 

export default Contact