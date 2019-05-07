import React from "react";
import GreetingContainer from "../greeting/greeting_container";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navBar">
        <div className="nav-header">
          <div className="logo">
            <Link to="/">
              <h1>Shutter</h1>
            </Link>
          </div>
          <div className="greeting-stuff">
            <GreetingContainer />
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
