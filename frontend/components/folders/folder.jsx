import React from "react";
import { Link } from "react-router-dom";
import FolderItem from "./folder_item";
import Modal from "../folderModal";

class Folder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: this.props.folders,
      showModal: false,
      folderName: ""
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { postFolder, fetchFolders } = this.props;
    postFolder({ folder: { name: this.state.folderName } }).then(() => {
      fetchFolders()
        .then(result => {
          this.setState({ folders: result.folders });
        })
        .then(() => {
          this.hideModal();
        });
    });
  }

  handleInput(e) {
    e.preventDefault();
    this.setState({ folderName: e.currentTarget.value });
  }

  showModal() {
    this.setState({ showModal: true });
  }

  hideModal() {
    this.setState({ showModal: false });
  }

  removeFolder(id) {
    const { deleteFolder, fetchFolders } = this.props;
    deleteFolder(id).then(() => {
      fetchFolders().then(result => {
        this.setState({ folders: result.folders });
      });
    });
  }

  componentDidMount() {
    this.props.fetchFolders().then(result => {
      this.setState({ folders: result.folders });
    });
  }

  render() {
    console.log(this.state);
    let folders = Object.values(this.state.folders).map(folder => {
      return (
        <div key={folder.id} className="folderAndDelete">
          <div>
            <FolderItem folder={folder}></FolderItem>
            <div className="folderDelete">
              <i
                onClick={() => this.removeFolder(folder.id)}
                className="fas fa-trash"
              ></i>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="folderIndex">
        <h1 className="galleryHeader">Galleries</h1>
        <div className="addFolder">
          <div className="createFolder" onClick={this.showModal}>
            <div className="createFolderWriting">
              <div className="createIcon">
                <i className="fas fa-plus-circle"></i>
              </div>
              <p className="createText">Create a new Gallery</p>
            </div>
          </div>
          <Modal show={this.state.showModal}>
            <div className="folderModal">
              <div className="createGalleryModalHeaderHolder">
                <h1 className="createGalleryModalHeader">CREATE GALLERY</h1>
                <div
                  className="createGalleryModalHeaderClose"
                  onClick={this.hideModal}
                >
                  x
                </div>
              </div>
              <div className="folderNameInput">
                <p className="folderTitleHeader">Title</p>
                <div className="folderCreateForm">
                  <form onSubmit={this.handleSubmit}>
                    <div className="titleInputHolder">
                      <input
                        className="titleInputTextBox"
                        type="text"
                        value={this.state.folderName}
                        onChange={this.handleInput}
                      ></input>
                    </div>
                    <div className="folderCreateButton">
                      <input
                        type="submit"
                        className="createFolderButton"
                        value="Create"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="folderModalCloseHolder">
                <button className="folderModalClose" onClick={this.hideModal}>
                  Cancel
                </button>
              </div>
            </div>
          </Modal>
        </div>
        <div className="folderList">{folders}</div>
      </div>
    );
  }
}

export default Folder;
