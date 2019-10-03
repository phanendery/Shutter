import React from "react";
import Form from "../../form/form";
import Modal from "../../modal";

class PictureUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleDragEnter = this.handleDragEnter.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDragEnter(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  handleDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  handleDrop(e) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  showModal() {
    this.setState({ showModal: true });
  }

  hideModal() {
    this.setState({ showModal: false });
    this.setState({ photoFile: undefined });
  }

  componentDidMount() {}

  render() {
    const { postPicture, currentUser } = this.props;
    return (
      <div className="upload-page">
        <button className="upload-button" onClick={this.showModal}>
          <i className="fas fa-plus upload-button-plus" />
        </button>

        <Modal handleClose={this.hideModal} show={this.state.showModal}>
          <div className="uploadModalBox">
            {!this.state.photoFile ? (
              <div
                className="modalPicUploadHolder"
                onDragOver={e => e.preventDefault()}
                onDragLeave={this.handleDragLeave}
                onDrop={this.handleDrop}
              >
                <div className="selectAndDragCaption">
                  <label className="fileUpload" htmlFor="file-upload-input">
                    <input
                      id="file-upload-input"
                      type="file"
                      onChange={e => this.handleFile(e)}
                    />
                    <span>Select Photo</span>
                  </label>

                  <p className="dragCaption">
                    Or drag and drop a photo anywhere on this page
                  </p>
                </div>
              </div>
            ) : (
              <Form
                postPicture={postPicture}
                currentUser={currentUser}
                photoFile={this.state.photoFile}
                photoUrl={this.state.photoUrl}
              ></Form>
            )}
          </div>
        </Modal>
      </div>
    );
  }
}

export default PictureUpload;
