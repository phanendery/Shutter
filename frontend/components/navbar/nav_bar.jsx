import React from "react";
import GreetingContainer from "../greeting/greeting_container";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navBar">
        <div className="nav-header">
          <h1>Shutter</h1>
          <div className="greeting-stuff">
            <GreetingContainer />
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
