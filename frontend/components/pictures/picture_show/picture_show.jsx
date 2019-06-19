import React from "react";
import { Link } from "react-router-dom";

class PictureShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      photoFile: null,
      photoUrl: null
    };
  }

  componentDidMount() {
    let pictureId = this.props.match.params.pictureId;
    this.props.fetchPicture(pictureId);
  }

  render() {
    let photo = this.props.picture;
    if (photo === undefined) {
      return null;
    }
    let pic_name = photo.pic_name;
    let photoUrl = photo.photoUrl;
    let description = photo.description;
    let camera = photo.camera;
    let lens = photo.lens;
    let focal = photo.focal;
    let currentUser = this.props.currentUser;
    let deletePhoto = (
      <Link to="/pictures">
        <button
          className="delete-button"
          onClick={() => {
            this.props
              .deletePicture(photo.id)
              .then(() => this.props.history.push("/pictures"));
          }}
        >
          <i className="fas fa-times" />
        </button>
      </Link>
    );

    if (this.props.picture.user_id !== currentUser.id) {
      deletePhoto = null;
    }

    return (
      <div className="showpageDiv">
        <img src={photoUrl} alt={pic_name} className="single-photo" />
        {/* {deletePhoto} */}
        <div className="pictureInfo">
          <p className="picture-name">{pic_name}</p>
          <p className="picture-info1">{description}</p>
          <i class="fas fa-camera-retro cameraIcon" />
          <p className="picture-info2">{camera}</p>
          <i class="fas fa-video lensIcon" />
          <p className="picture-info3">{lens}</p>
          <i class="fas fa-stream infoIcon" />
          <p className="picture-info4">{focal}</p>
        </div>
      </div>
    );
  }
}

export default PictureShow;
