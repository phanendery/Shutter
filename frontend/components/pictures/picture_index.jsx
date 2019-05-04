import React from "react";
import PictureIndexItem from "./picture_index_item";
import Form from "../Form/form";

class PictureIndex extends React.Component {
  componentDidMount() {
    console.log(this.props.fetchPictures());
    this.props.fetchPictures();
  }

  render() {
    console.log(this.props);
    const { deletePicture, postPicture } = this.props;
    console.log(deletePicture, postPicture, pictures);
    let pictures = this.props.pictures.map(picture => {
      return (
        <div>
          <Form postPicture={postPicture} />
          <PictureIndexItem
            deletePicture={deletePicture}
            key={`${picture.id}`}
            picture={picture}
          />
        </div>
      );
    });
    return (
      <div>
        <ul>{pictures}</ul>
      </div>
    );
  }
}

export default PictureIndex;
