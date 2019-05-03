import React from "react";
import { AuthRoute } from "../util/route_util";
import NavBar from "./navbar/nav_bar_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import PictureIndexContainer from "./pictures/picture_index_container";
import { Route, Switch, Redirect } from "react-router-dom";

const App = () => (
  <div>
    <header />
    <NavBar />
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route path="/pictures" component={PictureIndexContainer} />
      <Route exact path="/" component={homepage} />
      <Redirect to="/" />
    </Switch>
  </div>
);

const homepage = () => {
  return <h2>Home Page</h2>;
};

export default App;
