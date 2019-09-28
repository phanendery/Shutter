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
          <i className="far fa-folder"></i>
          <p className="folderTitle"> {this.props.folder.name} </p>
        </Link>
      </div>
    );
  }
}
