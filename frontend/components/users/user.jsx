import React from "react";
import { Link } from "react-router-dom";

class User extends React.Component {
  componentDidMount() {
    console.log(this.props.fetchPictures());
    this.props.fetchPictures();
  }

  render() {
    console.log(this.props.match.params.userId);
    console.log(this.props.pictures);
    let matchPics = [];
    for (let i = 0; i < this.props.pictures.length; i++) {
      if (this.props.match.params.userId === this.props.pictures[i].user_id) {
        matchPics.push(this.props.pictures[i]);
      }
    }
    console.log(matchPics);
    return (
      <div>
        <li>Test Display Pics</li>
      </div>
    );
  }
}

export default User;
