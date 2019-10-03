import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./user_dropdown_container";
import PictureUpload from "../pictures/picture_upload/picture_upload_container";

const Greeting = ({ currentUser, logout }) => {
  // console.log(currentUser);
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
      <div className="spacer" />
      <Dropdown />
      <PictureUpload></PictureUpload>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
