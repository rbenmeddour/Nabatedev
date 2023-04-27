import React from "react";
import "../styles/article.css";


const Article = ({image,paragraph,title}) => {
  return (
    <div className="flex space-x-20 bg-lime-100 p-8 mx-20 my-10">
        <img src={image} alt="Image" className="article-image" />
        <div className="ml-2 flex flex-col">
            <h2 className="text-3xl font-bold m-6">{title}</h2>
            <p className="text-2xl font-thin leading-8 ml-6" style={{maxWidth:900}}>{paragraph}</p>
        </div>
    </div>
  );
};

export default Article;