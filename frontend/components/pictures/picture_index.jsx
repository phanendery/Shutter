import React from "react";
import PictureIndexItem from "./picture_index_item";
import { Link } from "react-router-dom";

class PictureIndex extends React.Component {
  componentDidMount() {
    console.log(this.props.fetchPictures());
    this.props.fetchPictures();
  }

  render() {
    const { deletePicture, postPicture, currentUser } = this.props;

    let pictures = this.props.pictures.map(picture => {
      return (
        <div>
          <Link to={`/pictures/${picture.id}`}>
            <PictureIndexItem
              // deletePicture={deletePicture}
              key={`${picture.id}`}
              picture={picture}
            />
          </Link>
        </div>
      );
    });
    return (
      <div className="picture-index">
        <ul>{pictures}</ul>
      </div>
    );
  }
}

export default PictureIndex;
