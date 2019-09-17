import React from "react";
import PictureIndexItem from "./picture_index_item";
import { Link } from "react-router-dom";

class PictureIndex extends React.Component {
  componentDidMount() {
    console.log(this.props.fetchPictures());
    this.props.fetchPictures();
  }

  render() {
    let pictures = this.props.pictures.map(picture => {
      // debugger;
      return (
        <div className="column">
          <Link to={`/pictures/${picture.id}`}>
            <PictureIndexItem key={`${picture.id}`} picture={picture} />
          </Link>
        </div>
      );
    });
    return <div className="row">{pictures}</div>;
  }
}

export default PictureIndex;
