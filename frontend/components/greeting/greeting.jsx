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
      {/* <button className="log-out" onClick={logout}>
        Log Out
      </button> */}

      {/* <div className="current-user-name">
        <h2 className="header-name">{currentUser.username}</h2>
      </div> */}
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
