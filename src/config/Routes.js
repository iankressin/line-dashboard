import React from "react";
import Signin from "../pages/Signin";
import Dashboard from "../pages/Dashboard.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/topics">
          <Topics />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
};

const Topics = () => <h1>Topics</h1>;

export default Routes;
