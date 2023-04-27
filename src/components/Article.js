import React from "react";


const Article = ({image,paragraph,title}) => {
  return (
    <div className="flex bg-lime-100 p-8 space-x-5 m-4">
        <img src={image} alt="Image" style={{ height: 320, width: 340 }} />
        <div className="flex flex-col justify-center">
            <h2 className="text-45 font-bold">{title}</h2>
            <p className="text-25">{paragraph}</p>
        </div>
    </div>
  );
};

export default Article;