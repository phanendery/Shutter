import React from "react";
import { Link } from "react-router-dom";
import HomeContainer from "../home/home_container";

class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <h2>Home Page</h2>
        <img
          className="home-page-picture"
          src="https://web.500px.com/static/media/discover.be9b60f7.jpg"
          alt="home-page-picture"
        />
      </div>
    );
  }
}
export default Home;
