import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { AuthRoute } from "../util/route_util";
import NavBar from "./navbar/nav_bar_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";

const App = () => (
  <div>
    <header />
    <NavBar />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
