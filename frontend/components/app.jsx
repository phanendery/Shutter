import React from "react";
import { AuthRoute } from "../util/route_util";
import NavBar from "./navbar/nav_bar_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import PictureIndexContainer from "./pictures/picture_index_container";
import HomeContainer from "./home/home_container";
import { Route, Switch, Redirect } from "react-router-dom";

const App = () => (
  <div>
    <header />
    <NavBar />
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route path="/pictures" component={PictureIndexContainer} />
      <Route path="/" component={HomeContainer} />
    </Switch>
  </div>
);

export default App;
