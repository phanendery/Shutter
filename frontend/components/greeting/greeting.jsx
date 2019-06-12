import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./user_dropdown_container";

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="button-holder">
      <nav className="login-signup">
        <Link to="/login" className="login-button">
          Log in
        </Link>
        &nbsp; &nbsp;
        <Link to="/signup" className="sign-up-button">
          Sign up
        </Link>
      </nav>
    </div>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <Link className="discover-navbar" to="/pictures">
        Discover
      </Link>
      <div className="spacer" />
      <Dropdown />
      <Link to="/pictures/new">
        <i className="fas fa-plus upload-button-plus" />
      </Link>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
