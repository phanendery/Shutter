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

    return (
      <div className="userContent">
        <div className="pictureHeader">
          <h1>My Pictures</h1>
        </div>
        <div className="userPagePictures">
          <div className="row">
            {matchPics.map(picture => (
              <Link to={`/pictures/${picture.id}`} className="column">
                <PictureIndexItem key={`${picture.id}`} picture={picture} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default User;
