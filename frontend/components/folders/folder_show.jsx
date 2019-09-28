import React, { Component } from "react";
import PictureIndexItem from "../pictures/picture_index";
import { Link } from "react-router-dom";

export default class FolderShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: {}
    };

    this.removePictureFromFolder = this.removePictureFromFolder.bind(this);
  }

  componentDidMount() {
    //   console.log(this.props.folderId);
    this.props.fetchFolder(this.props.folderId).then(result => {
      // console.log(result.folder.pictures);
      this.setState({ pictures: result.folder.pictures });
    });
    // debugger;
  }

  removePictureFromFolder(key) {
    this.props.updatePicture({
      id: key,
      picture: { folder_id: null }
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
    // console.log(this.state.pictures);

    return (
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
              <i
                onClick={() => this.removePictureFromFolder(key)}
                className="fas fa-trash"
              ></i>
            </div>
          );
        })}
      </div>
      // <div>gdi</div>
    );
  }
}
