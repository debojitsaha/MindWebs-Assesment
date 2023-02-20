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
    // eslint-disable-next-line
  }, []);

  return (
    <div className="mb-5" style={{ backgroundColor: "#f6f6f6", overflow:"scroll" }}>
      <div className=" row mb-3 mx-auto">
        {articles.map((article, i) => {
          return <ArticleCard article={article} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Articles;
