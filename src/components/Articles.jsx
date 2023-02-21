import React, { useContext, useEffect } from "react";
import articleContext from "../context/articles/articleContext.js";
import ArticleCard from "./ArticleCard.jsx";
import { ImSpinner2 } from "react-icons/im";
import { Spinner } from "@chakra-ui/react";

const Articles = () => {
  const { articles, getArticles, loading } = useContext(articleContext);

  useEffect(() => {
    getArticles();
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className="mb-5"
      style={{
        backgroundColor: "#f6f6f6",
        overflow: "scroll",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {loading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          alignSelf={"center"}
          margin="auto"
          my={2}
        />
      ) : (
        <div className=" row mb-3 mx-auto">
          {articles.map((article, i) => {
            return <ArticleCard article={article} key={i} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Articles;
