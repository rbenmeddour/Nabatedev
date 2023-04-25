import React from 'react'
import { graphql, useStaticQuery } from "gatsby";

const Header = () => {

    const data = useStaticQuery(graphql`
    query {
        allWpPage {
          edges {
            node {
              title
            }
          }
        }
      }
  `);

// console.log(data)
  return (
    <div>Header</div>
  )
}

export default Header