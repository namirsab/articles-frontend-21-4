import React from "react";
import "../App.css";

export default function Form() {
  return (
    <div className="Form">
      <h2>Add new Article</h2>
      <form>
        <label htmlFor="title">Title:</label>
        <input id="title" name="title" />
        <label htmlFor="content">Your Content:</label>
        <textarea id="content" name="content" rows="4" cols="50" />
        <button>Submit article</button>
      </form>
    </div>
  );
}
