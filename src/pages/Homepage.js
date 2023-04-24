import React from "react";
import { graphql } from "gatsby";
import { Base64 } from 'js-base64';
const pageId = 6; // Remplacez par l'ID de la page que vous voulez convertir
const base64Id = Base64.encode(`post:${pageId}`);
console.log(base64Id);





const Homepage = ({ data }) => {
  
    return (
        <div>
            {/* <h1>{data.wpPage.title}</h1> */}
        </div>
    );
};

export default Homepage;
