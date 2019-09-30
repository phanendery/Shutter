import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class FolderItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="folderHolder">
        <Link to={`/folders/${this.props.folder.id}`}>
          <div className="folderShowHolder">
            <div className="folderShowHolderContainer">
              <div className="folderPicturePreviewHolder">
                <img
                  className="folderPicturePreview"
                  src={this.props.folder.folderFirstPicture}
                ></img>
              </div>
              <p className="folderTitle"> {this.props.folder.name} </p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
