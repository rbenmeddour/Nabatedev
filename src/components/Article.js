import React from "react";

const Article = ({image,paragraph,title}) => {
  return (
    <div className="flex">
        <img src={image} alt="Image"/>
        <div>
        <h2>{title}</h2>
        <p>{paragraph}</p>
        </div>
    </div>
  );
};

export default Article;