import React from "react";
import { graphql } from "gatsby";
import { Base64 } from 'js-base64';
import History from "./history.js";






const Homepage = ({ data }) => {
  
    return (
        <div>
            <History />
        </div>
    );
};

export default Homepage;
