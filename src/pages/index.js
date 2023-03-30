import React from "react";
import { graphql } from "gatsby";

const query = graphql`
    query {
        allWpPage {
            totalCount
            edges {
                node {
                    content
                }
            }
        }
    }
`;

const index = () => {
    return <div>index</div>;
};

export default index;
