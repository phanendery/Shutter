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
      text: "",
      imageLoaded: false,
      spinnerDone: false,
      folders: {}
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addToFolder = this.addToFolder.bind(this);
  }

  componentDidMount() {
    let pictureId = this.props.match.params.pictureId;
    // console.log(this.props.fetchPicture);
    this.props.fetchPicture(pictureId);
    setTimeout(() => {
      this.setState({ spinnerDone: true });
    }, 1500);
    this.props.fetchFolders().then(result => {
      this.setState({ folders: result.folders });
    });
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

  addToFolder() {
    let e = document.getElementById("folderSelector");

    let folderOptions = Object.keys(e.options);
    for (let i = 0; i < folderOptions.length; i++) {
      let key = folderOptions[i];
      if (e.options[key].selected === true) {
        let folder_id = e.options[key].value;
        this.props.updatePicture({
          id: this.props.pictureId,
          picture: { folder_id }
        });
      }
    }
  }

  render() {
    let photo = this.props.picture;
    if (!photo) {
      // console.log("loading");
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
        <div className="imgContainer">
          {this.state.spinnerDone ? (
            ""
          ) : (
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
          <img
            src={photoUrl}
            alt={pic_name}
            className="single-photo"
            style={{
              opacity: this.state.imageLoaded && this.state.spinnerDone ? 1 : 0,
              transition: "all 1s linear"
            }}
            onLoad={() => {
              this.setState({ imageLoaded: true });
            }}
          />
        </div>
        <div className="pictureInfoContainer">
          <div className="pictureInfo">
            <div className="titleAndLike">
              <p className="picture-name">{pic_name}</p>
              <LikeButtonContainer
                liked={this.props.picture.liked}
                picture_id={this.props.picture.id}
                numLikes={this.props.picture.numLikes}
              />
            </div>
            <div className="titleAndFolder">
              <p className="picture-info1">{description}</p>
              <div className="addToFolders">
                <div className="folderOptions">
                  <select id="folderSelector">
                    <option defaultValue="Select Folder">
                      Select Folder
                    </option>
                    {Object.keys(this.state.folders).map(id => {
                      let folder = this.state.folders[id];
                      return <option key={id} value={id}>{folder.name}</option>;
                    })}
                  </select>
                </div>
                <div className="folderOptionsButton">
                  <button className="folderOptionsButton1" onClick={this.addToFolder}>Add to folder!</button>
                </div>
              </div>
            </div>
            <div className="specsAndComments">
              <div className="specsAndDelete">
                <div className="specHolder">
                  <div className="specs">
                    <i className="fas fa-camera-retro cameraIcon" />
                    <p className="picture-info2">{camera}</p>
                  </div>
                  <div className="specs">
                    <i className="fas fa-video lensIcon" />
                    <p className="picture-info2">{lens}</p>
                  </div>
                  <div className="specs">
                    <i className="fas fa-stream infoIcon" />
                    <p className="picture-info2">{focal}</p>
                  </div>
                </div>
                <div className="deleteButton">{deletePhoto}</div>
              </div>
              <div className="comments">
                <form
                  action=""
                  onSubmit={this.handleSubmit}
                  className="formComment"
                >
                  <div className="textAreaButton">
                    <textarea
                      className="comment-text-area"
                      placeholder="Add a comment"
                      value={this.state.text}
                      onChange={this.handleInput}
                    />
                    <button className="addcomment">
                      <i className="far fa-comments" />
                    </button>
                  </div>
                  <ul className="commentsList">
                    {this.props.picture.comments &&
                      Object.values(this.props.picture.comments).map(
                        comment => (
                          <li key={comment.id}>
                            <CommentContainer comment={comment} />
                          </li>
                        )
                      )}
                  </ul>

                  <br />
                  <br />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PictureShow;
