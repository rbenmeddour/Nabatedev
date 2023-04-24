import React from 'react';
import { graphql } from 'gatsby';
import '.././style.css';

export const query = graphql`
  query {
    wpPage(id: { eq: "cG9zdDo2" }) {
      title
      content
    }
  }
`;

const History= ({ data }) => {
    console.log(data);
    // const { title, content } = data.wpPage;
    // console.log(content);
    // // Divise le contenu en un tableau de paragraphes
    // const paragraphs = content.split('\n');
    // console.log(paragraphs);
    return (
      <div>
        <h1>title</h1>
      </div>
    );
  };
  
  export default History;
