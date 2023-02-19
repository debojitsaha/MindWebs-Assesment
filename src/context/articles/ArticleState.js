import React, { useState } from "react";
import ArticleContext from "./articleContext";

const ArticleState = (props) => {
  const host = "http://localhost:5000";
  const articleInitial = [];

  const [articles, setArticles] = useState(articleInitial);
  const [loading, setLoading] = useState(false);

  // Get all articles
  const getArticles = async () => {
    // API Calls
    setLoading(true);
    const response = await fetch(`${host}/api/articles/fetchallarticles`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    //console.log(json)
    setArticles(json);
    setLoading(false);
  };

  // Add Article
  const addArticle = async (title, description) => {
    // API Calls
    setLoading(true);
    const response = await fetch(`${host}/api/articles/addarticle`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });
    const article = await response.json();
    setArticles(articles.concat(article));
    setLoading(false);
  };

  // Delete Article
  const deleteArticle = async (id) => {
    // API Calls
    setLoading(true);
    const response = await fetch(`${host}/api/articles/deletearticle/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log(json);

    const newArticle = articles.filter((article) => {
      return article._id !== id;
    });
    setArticles(newArticle);
    setLoading(false);
  };

  // Edit Article
  const editArticle = async (id, title, description) => {
    // API Calls
    setLoading(true);
    const response = await fetch(`${host}/api/articles/updatearticle/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });
    const json = await response.json();

    let newArticles = JSON.parse(JSON.stringify(articles));
    for (let index = 0; index < newArticles.length; index++) {
      const element = newArticles[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        break;
      }
    }
    setArticles(newArticles);
    setLoading(false);
  };

  return (
    <ArticleContext.Provider
      value={{
        articles,
        addArticle,
        deleteArticle,
        editArticle,
        getArticles,
        loading,
      }}
    >
      {props.children}
    </ArticleContext.Provider>
  );
};

export default ArticleState;
