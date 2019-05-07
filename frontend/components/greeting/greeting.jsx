import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./user_dropdown_container";

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login" className="login-button">
        Log in
      </Link>
      &nbsp; &nbsp;
      <Link to="/signup" className="sign-up-button">
        Sign up
      </Link>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <Dropdown />
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
