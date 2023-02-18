import React from "react";
import articles from "../articles.js";
import ArticleCard from "./ArticleCard.jsx";

const Articles = () => {
  return (
    <div className="container m-auto">
      <div className=" row my-2 m-auto">
        {articles.map((article,i) => {
          return <ArticleCard article={article} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Articles;
