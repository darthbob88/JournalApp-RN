import React from "react";
import "./App.css";
import "./mvp.css";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "./routes";
import { JournalComponent } from "./components/JournalForm/JournalForm";
import { SignInForm } from "./components/SignInForm/SignInForm";
import { SignUpForm } from "./components/SignUpForm/SignUpForm";
import { NavHeader } from "./components/NavHeader/NavHeader";
import { NavFooter } from "./components/NavFooter/NavFooter";
import { FullJournalComponent } from "./components/FullJournal/FullJournalComponent";

function App() {
  return (
    <main className="App">
      <NavHeader />
      <Switch>
        <Route path={ROUTES.SIGN_IN} component={SignInForm} />
        <Route path={ROUTES.SIGN_UP} component={SignUpForm} />
        <Route path={ROUTES.HOME} component={JournalComponent} />
        <Route path={ROUTES.JOURNAL} component={FullJournalComponent} />
        <Route path={ROUTES.LANDING} exact component={JournalComponent} />
        {/* <Route path="/config" component={ConfigPage} /> */}
      </Switch>
      <NavFooter />
    </main>
  );
}

export default App;
