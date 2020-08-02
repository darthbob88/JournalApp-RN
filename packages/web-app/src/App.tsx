import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "./routes";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={ROUTES.SIGN_IN} component={SignInForm} />
        <Route path={ROUTES.SIGN_UP} component={SignUpForm} />
        <Route path={ROUTES.HOME} component={IdeaListPage} />
        <Route path={ROUTES.LANDING} exact component={IdeaListPage} />
        <Route path="/ideas/:id" component={IdeaDetailPage} />
      </Switch>
    </div>
  );
}

export default App;
