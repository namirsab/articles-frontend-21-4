import { Link } from "react-router-dom";

export default function ArticleItem({ id, title, createdAt }) {
  return (
    <section>
      <Link to={`/articles/${id}`}>
        <h2>{title}</h2>
      </Link>
      <h4>Created At: {createdAt}</h4>
    </section>
  );
}
