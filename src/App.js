import { Route, Switch } from "react-router-dom";
import ArticlesPage from "./pages/ArticlesPage";
import FormPage from "./pages/FormPage";
import SingleArticlePage from "./pages/SingleArticlePage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1> Super Articles </h1>
      </header>
      <main>
        <Switch>
          <Route exact path="/articles/:id">
            <SingleArticlePage />
          </Route>
          <Route path="/articles">
            <ArticlesPage />
          </Route>
          <Route path="/add-article">
            <FormPage />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
