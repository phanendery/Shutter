import React from "react";
import { Link } from "react-router-dom";
import PictureIndexItem from "../pictures/picture_index_item";

class User extends React.Component {
  componentDidMount() {
    this.props.fetchPictures();
  }

  render() {
    if (this.props.pictures.length === 0) return <></>;

    let matchPics = [];
    for (let i = 0; i < this.props.pictures.length; i++) {
      if (this.props.match.params.userId == this.props.pictures[i].user_id) {
        matchPics.push(this.props.pictures[i]);
      }
    }
    console.log("test");
    return (
      <div>
        {matchPics.map(picture => (
          <Link to={`/pictures/${picture.id}`}>
            <PictureIndexItem key={`${picture.id}`} picture={picture} />
          </Link>
        ))}
      </div>
    );
  }
}

export default User;
