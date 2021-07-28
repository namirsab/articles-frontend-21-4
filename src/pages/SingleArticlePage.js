import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

export default function SingleArticlePage() {
  let history = useHistory();
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const url = `http://localhost:4000/articles/${id}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data);
      });
  }, [url]);

  function handleDelete() {
    fetch(url, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        alert("Post deleted");
        history.push("/articles");
      }
    });
  }

  return (
    <div>
      <section>
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <h3>Created At: {article.createdAt}</h3>
        <button onClick={handleDelete}>Delete Article</button>
      </section>
      <button onClick={() => history.push("/articles")}>
        Back to article list
      </button>
    </div>
  );
}
