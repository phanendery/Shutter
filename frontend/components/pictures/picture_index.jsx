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
            <PictureIndexItem key={`${picture.id}`} picture={picture} />
          </Link>
        </div>
      );
    });
    return <ul className="picture-index-layout">{pictures}</ul>;
  }
}

export default PictureIndex;
