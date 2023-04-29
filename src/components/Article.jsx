import React from "react";
import "../styles/article.css";

const Article = ({ image, paragraph, title, reverse }) => {
  const reverseClass = reverse ? "" : "justify-between flex-row-reverse";
  return (
    <div
      className={`flex ${reverseClass} space-x-20 p-6 mx-20 my-10`}
      data-aos="fade-right"
      style={{ backgroundColor: "#E7EAA8" }}
    >
      <img src={image} alt="Nabate" className="article-image" />
      <div className="ml-2 flex flex-col">
        <h2 className="text-2xl font-bold m-6">{title}</h2>
        <p
          className="text-1xl font-thin leading-8 ml-6"
          style={{ maxWidth: 900 }}
        >
          {paragraph}
        </p>
      </div>
    </div> 
  );
};

export default Article;
