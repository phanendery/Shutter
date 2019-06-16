import React from "react";
import { Link } from "react-router-dom";

class User extends React.Component {
  componentDidMount() {
    console.log(this.props.fetchPictures());
    this.props.fetchPictures();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <li>Test Display Pics</li>
      </div>
    );
  }
}

export default User;
