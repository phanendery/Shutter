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

    console.log(this.props);

    if (this.props.picture.user_id !== currentUser.id) {
      deletePhoto = null;
    }
    return (
      <div>
        {/* <h1>{pic_name}</h1> */}
        <img src={photoUrl} alt={pic_name} className="single-photo" />
        {deletePhoto}
      </div>
    );
  }
}

export default PictureShow;
