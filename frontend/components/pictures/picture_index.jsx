import React from "react";
import PictureIndexItem from "./picture_index_item";
import Form from "../form/form";

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
          <Form postPicture={postPicture} currentUser={currentUser} />
          <PictureIndexItem
            deletePicture={deletePicture}
            key={`${picture.id}`}
            picture={picture}
          />
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
