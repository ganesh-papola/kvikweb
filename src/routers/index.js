/*********** Routes for applications **************/
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { publicLayout, privateLayout } from "../components/Layouts";
import AppRoute from "./AppRoute";
import { Authorization } from "../authorization";
import { public_type } from "../utilities/constants";

import HomePage from "../containers/home";

const Routers = store => {
  return (
    <Router>
      <Switch>
        <AppRoute
          exact={true}
          path="/"
          component={HomePage}
          requireAuth={Authorization}
          layout={publicLayout}
          store={store}
          type={public_type}
        />

        <AppRoute
          exact={true}
          path="/login"
          component={HomePage}
          requireAuth={Authorization}
          layout={publicLayout}
          store={store}
          type={public_type}
        />
        <AppRoute
          exact={true}
          path="/register"
          component={HomePage}
          requireAuth={Authorization}
          layout={publicLayout}
          store={store}
          type={public_type}
        />

        {/* <AppRoute
          exact
          path="/forgot-password"
          component={ForgotPassword}
          requireAuth={Authorization}
          layout={publicLayout}
          store={store}
          type={public_type}
        /> */}
        {/* <AppRoute
          exact
          path="/reset-password/:token"
          component={ForgotPassword}
          requireAuth={Authorization}
          layout={publicLayout}
          store={store}
          type={public_type}
        /> */}
      </Switch>
    </Router>
  );
};

export default Routers;
