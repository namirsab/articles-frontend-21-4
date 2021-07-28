import { Link } from "react-router-dom";
import ArticleItem from "../components/ArticleItem";

export default function ArticlesPage() {
  return (
    <div className="ArticlesPage">
      <Link to="/add-article">New Article</Link>
      <ArticleItem
        id="1"
        title="Hello World"
        createdAt={new Date().toString()}
      />
      <ArticleItem
        id="2"
        title="What is Express?"
        createdAt={new Date().toString()}
      />
      <ArticleItem
        id="3"
        title="What can I do with React?"
        createdAt={new Date().toString()}
      />
    </div>
  );
}
