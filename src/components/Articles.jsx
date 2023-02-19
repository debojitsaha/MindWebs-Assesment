import React, { useContext, useEffect } from "react";
import articleContext from "../context/articles/articleContext.js";
import ArticleCard from "./ArticleCard.jsx";
import { ImSpinner2 } from "react-icons/im";

const Articles = () => {
  const { articles, getArticles, loading } = useContext(articleContext);

  if (loading) {
    <ImSpinner2 />;
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div style={{ backgroundColor: "#f6f6f6" }}>
      <div className=" row mb-2 m-auto">
        {articles.map((article, i) => {
          return <ArticleCard article={article} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Articles;
