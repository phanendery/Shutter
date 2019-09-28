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
      folderName: "",
      showDelete: true
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.showDelete = this.showDelete.bind(this);
    this.hideDelete = this.hideModal.bind(this);
  }

  showDelete() {
    this.setState({ showDelete: true });
  }

  hideDelete() {
    this.setState({ showDelete: false });
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
    // let deleteFolder;
    // if (this.state.showDelete) {
    //   let deleteFolder = (
    //     <div className="folderDelete">
    //       <i
    //         onClick={() => this.removeFolder(folder.id)}
    //         className="fas fa-trash"
    //       ></i>
    //     </div>
    //     debugger
    //   );
    // }
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
        <div className="addFolder">
          <i onClick={this.showModal} className="fas fa-folder-plus"></i>
          <Modal show={this.state.showModal}>
            <div className="folderModal">
              <div className="folderNameInput">
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    value={this.state.folderName}
                    onChange={this.handleInput}
                  ></input>
                  <input
                    type="submit"
                    className="createFolderButton"
                    value="Create Folder!"
                  />
                </form>
              </div>
              <button className="folderModalClose" onClick={this.hideModal}>
                Close
              </button>
            </div>
          </Modal>
        </div>
        <div className="folderList">{folders}</div>
      </div>
    );
  }
}

export default Folder;
