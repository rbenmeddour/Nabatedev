import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import parse from "html-react-parser";
import Nav from "../components/NavBar";
import Hero from "../components/Hero";
import ProductPosts from '../components/Posts/ProductPosts';
import Footer from "../components/Footer";

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
    console.log(parsedContent)
    let srcValue;
    if(parsedContent[1].props.children.props?.src){
      srcValue = parsedContent[1].props.children.props?.src;
    }else{
      srcValue = parsedContent[1].props.children[0].props.children[2].props['data-src'];
    }
 
  return (
    <div>
        <Nav /> 
        <Hero title={query.wpPage.title} img={srcValue}/>
        <ProductPosts />
        <Footer />
    </div>
  )
}

export default Products;