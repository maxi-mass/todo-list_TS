import React from "react";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { TodosPage } from "./pages/TodosPage";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path={"/about"} component={AboutPage} />
            <Route path={"/"} component={TodosPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
