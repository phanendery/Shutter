import React from "react";
import PictureIndexItem from "./picture_index_item";

class PictureIndex extends React.Component {
  componentDidMount() {
    console.log(this.props.fetchPictures());
    this.props.fetchPictures();
  }

  render() {
    console.log(this.props);
    let pictures = this.props.pictures.map(picture => {
      return <PictureIndexItem key={`${picture.id}`} picture={picture} />;
    });
    return (
      <div>
        <ul>{pictures}</ul>
      </div>
    );
  }
}

export default PictureIndex;
