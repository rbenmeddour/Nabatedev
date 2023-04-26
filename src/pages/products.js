import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import parse from "html-react-parser";
import Nav from "../components/NavBar";
import Hero from "../components/Hero";
import ProductPosts from '../components/Posts/ProductPosts';

const Products = () => {
    const query = useStaticQuery(graphql`
        query {
        wpPage(id: { eq: "cG9zdDoxMQ==" }) {
        id
        title
        content
        }
    }`)

    const parsedContent = parse(query.wpPage.content);   
    const srcValue = parsedContent[1].props.children.props.src

 
  return (
    <div>
        <Nav /> 
        <Hero title={query.wpPage.title} img={srcValue}/>
        <ProductPosts />
    </div>
  )
}

export default Products