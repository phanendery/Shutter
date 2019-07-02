import React from "react";
import { Link } from "react-router-dom";
import LikeButtonContainer from "../../likes/like_button_container";
import CommentContainer from "../../comments/comment_container";

class PictureShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      photoFile: null,
      photoUrl: null,
      text: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let pictureId = this.props.match.params.pictureId;
    this.props.fetchPicture(pictureId);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state.text);
    this.setState({ text: "" });
  }

  handleInput(e) {
    e.preventDefault();
    this.setState({ text: e.target.value });
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
          Delete Picture?
        </button>
      </Link>
    );

    if (this.props.picture.user_id !== currentUser.id) {
      deletePhoto = null;
    }

    return (
      <div className="showpageDiv">
        <img src={photoUrl} alt={pic_name} className="single-photo" />
        {deletePhoto}
        <div className="pictureInfo">
          <p className="picture-name">{pic_name}</p>
          <LikeButtonContainer
            liked={this.props.picture.liked}
            picture_id={this.props.picture.id}
            numLikes={this.props.picture.numLikes}
          />
          <p className="picture-info1">{description}</p>

          <i className="fas fa-camera-retro cameraIcon" />
          <p className="picture-info2">{camera}</p>
          <i className="fas fa-video lensIcon" />
          <p className="picture-info3">{lens}</p>
          <i className="fas fa-stream infoIcon" />
          <p className="picture-info4">{focal}</p>
        </div>
        <div className="comments">
          <ul>
            {this.props.picture.comments &&
              Object.values(this.props.picture.comments).map(comment => (
                <li key={comment.id}>
                  <CommentContainer comment={comment} />
                </li>
              ))}
          </ul>

          <form action="" onSubmit={this.handleSubmit}>
            <textarea
              className="comment-text-area"
              placeholder="Add a comment"
              value={this.state.text}
              onChange={this.handleInput}
            />
            <br />
            <br />

            <button className="addcomment">
              <img src="https://500px.com/packs/_/_/node_modules/web-shared-components/assets/icons/comment_veryDarkGrey-37d3d99fdf1db1df0887f431af78b5a8.svg" />
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default PictureShow;
