import React from "react";
import { useHistory } from "react-router-dom";
import "../App.css";

export default function Form() {
  const history = useHistory();

  function handleOnSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const body = form.content.value;
    const newArticleBody = {
      title,
      body,
    };
    const url = "http://localhost:4000/articles";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newArticleBody),
    })
      .then((res) => res.json())
      .then((newArticle) => {
        alert(`Post with id=${newArticle.id} successfully created`);
        history.push(`/articles/${newArticle.id}`);
      });
  }

  return (
    <div className="Form">
      <h2>Add new Article</h2>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="title">Title:</label>
        <input id="title" name="title" />
        <label htmlFor="content">Your Content:</label>
        <textarea id="content" name="content" rows="4" cols="50" />
        <button>Submit article</button>
      </form>
    </div>
  );
}
