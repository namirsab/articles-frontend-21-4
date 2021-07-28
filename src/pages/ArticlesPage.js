import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArticleItem from "../components/ArticleItem";

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = "http://localhost:4000/articles";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  function renderArticles() {
    return articles.map((article) => {
      return (
        <ArticleItem
          key={article.id}
          id={article.id}
          title={article.title}
          createdAt={article.createdAt}
        />
      );
    });
  }

  return (
    <div className="ArticlesPage">
      <Link to="/add-article">New Article</Link>
      {renderArticles()}
    </div>
  );
}
