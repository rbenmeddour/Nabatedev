import React from "react";
import { graphql } from "gatsby";

export const query = graphql`
    query HomepageQuery {
        wpPage(id: { eq: "cG9zdDoyOA==" }) {
            title
            uri
        }
    }
`;

const Homepage = ({ data }) => {
    console.log(data);
    return (
        <div>
            <h1>{data.wpPage.title}</h1>
        </div>
    );
};

export default Homepage;
