import React from "react";
import { graphql } from "gatsby";



const index = ({data}) => {
    console.log(data);
    return <div>index</div>;
};

// export const query = graphql`
// query {
    
// }
// `

export default index;
