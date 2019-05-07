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
    let pic_name = photo.title;
    let photoUrl = photo.photoUrl;
    let currentUser = this.props.currentUser;
    let deletePhoto = (
      <span
        onClick={() => {
          this.props
            .deletePicture(photo.id)
            .then(() => this.props.history.push("/pictures"));
        }}
      >
        <i className="fas fa-times" />
      </span>
    );

    console.log(this.props);

    if (this.props.picture.user_id !== currentUser.id) {
      deletePhoto = null;
    }
    return (
      <div>
        <Link to="/pictures">Discover</Link>
        <img src={photoUrl} alt={pic_name} className="single-photo" />
        {deletePhoto}
      </div>
    );
  }
}

export default PictureShow;
