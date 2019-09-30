import React, { Component } from "react";
import PictureIndexItem from "../pictures/picture_index";
import { Link } from "react-router-dom";

export default class FolderShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: {},
      folderName: "",
      showDelete: false
    };

    this.removePictureFromFolder = this.removePictureFromFolder.bind(this);
    this.toggleDelete = this.toggleDelete.bind(this);
  }

  toggleDelete() {
    this.setState({ showDelete: !this.state.showDelete });
  }

  componentDidMount() {
    this.props.fetchFolder(this.props.folderId).then(result => {
      this.setState({ pictures: result.folder.pictures });
      this.setState({ folderName: result.folder.name });
    });
  }

  removePictureFromFolder(key) {
    this.props
      .updatePicture({
        id: key,
        picture: { folder_id: null }
      })
      .then(() => {
        this.props.fetchFolder(this.props.folderId).then(result => {
          this.setState({ pictures: result.folder.pictures });
          this.setState({ folderName: result.folder.name });
        });
      });
  }

  render() {
    if (!this.state.pictures) {
      return null;
    }
    Object.keys(this.state.pictures).map(key => {
      let picture = this.state.pictures[key];
      console.log(picture);
    });

    return (
      <div className="folderShowPageContainer">
        <div className="folderTitleAndDelete">
          <div className="folderNameTitle">{this.state.folderName}</div>
          <div className="folderShowToggleDeleteContainer">
            <button
              className="folderShowToggleDelete"
              onClick={this.toggleDelete}
            >
              {" "}
              Remove Pictures?{" "}
            </button>
          </div>
        </div>

        <div className="folderShowPage">
          {Object.keys(this.state.pictures).map(key => {
            let picture = this.state.pictures[key];
            return (
              <div className="pictureAndDelete" key={key}>
                <Link to={`/pictures/${key}`}>
                  <img
                    src={`https://res.cloudinary.com/dfeo7demm/image/fetch/w_500,h_500,c_fit/${picture.serviceUrl}`}
                  />
                </Link>
                <div className="folderShowTrashHolder">
                  {this.state.showDelete ? (
                    <i
                      onClick={() => this.removePictureFromFolder(key)}
                      className="fas fa-trash"
                    ></i>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
