import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route } from "react-router-dom";

const App = () => (
  <div>
    <header>
      <h1>Shutter</h1>
      <GreetingContainer />
    </header>

    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;