// import React from "react";
// import { graphql } from 'gatsby';
// import '.././style.css';

// export const query = graphql`
//   query {
//     wpPage(id: { eq: "cG9zdDo2" }) {
//       title
//       content
//       mediaItems(where: {mediaItemUrl_contains: "uploads", AND: {mediaDetails: {sizes: {}}}}) {
//         nodes {
//           mediaItemUrl
//         }
//       }
//     }
//   }
// `;







// const Homepage = ({ data }) => {

// //   console.log(data.wpPage);
// //   const test = data.wpPage.content.filter('img')
// //     console.log(test);
// const content = data.wpPage.content;
// const parser = new DOMParser();
// const doc = parser.parseFromString(content, 'text/html');
// const images = Array.from(doc.querySelectorAll('img')).map(img => img.getAttribute('src'));
// console.log(images);


//     return (
//         <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }}></div>
//     );
// };

// export default Homepage;
