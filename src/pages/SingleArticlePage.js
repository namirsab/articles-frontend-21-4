import { useHistory } from "react-router-dom";

export default function SingleArticlePage() {
  let history = useHistory();
  return (
    <div>
      <section>
        <h2>Title: Hello World</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
          blanditiis, esse porro molestiae a nam consequatur maiores doloribus
          illum omnis quos minima nihil harum quia, tenetur vel, nemo natus
          reprehenderit.
        </p>
        <h3>Created At: 2021-04-13T05:57:37.716Z </h3>
        <div>
          <h4>Votes</h4>
          <p>👍 4</p>
          <p>👎 2</p>
        </div>
        <button>Delete Article</button>
      </section>
      <button onClick={() => history.push("/articles")}>
        Back to article list
      </button>
    </div>
  );
}
