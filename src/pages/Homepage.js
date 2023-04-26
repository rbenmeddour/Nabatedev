import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import parse from 'html-react-parser';
import Nav from '../components/NavBar';
import Hero from '../components/Hero';
import HomePosts from '../components/Posts/HomePosts';
import ProductPosts from '../components/Posts/ProductPosts';

const Homepage = () => {
  const query = useStaticQuery(graphql`
    query {
      wpPage(id: { eq: "cG9zdDoyOA==" }) {
        id
        title
        content
      }
    }
  `);
  const parsedContent = parse(query.wpPage.content);
  const srcValue = parsedContent[3].props.children.props.src;
  const headline = parsedContent[1].props.children;

  // JE VEUX RECUPERER MES POSTS

  return (
    <div>
      <Nav />
      <Hero title={query.wpPage.title} img={srcValue} headline={headline} />
      <HomePosts />
      <ProductPosts />
    </div>
  );
};

export default Homepage;
