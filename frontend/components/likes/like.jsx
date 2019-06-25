import React from "react";
import PictureIndexItem from "../pictures/picture_index_item";
import { Link } from "react-router-dom";

class Like extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchLikes();
  }

  render() {
    if (this.props.likes.length == 0)
      return (
        <div>
          <h1>Likes</h1>
          <h2>You do not have any liked photos!</h2>
        </div>
      );
    return (
      <div>
        <h1>Likes</h1>
        <ul>{/* {this.props.likes.map(like=>)} */}</ul>
      </div>
    );
  }
}
