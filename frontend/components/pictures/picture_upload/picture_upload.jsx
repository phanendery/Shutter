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
  }
  showModal() {
    this.setState({ showModal: true });
  }

  hideModal() {
    this.setState({ showModal: false });
  }

  componentDidMount() {
    this.showModal();
  }

  render() {
    const { postPicture, currentUser } = this.props;
    return (
      <div className="upload-page">
        <button className="upload-button" onClick={this.showModal}>
          <i className="fas fa-images upload-image" />
        </button>
        <Modal handleClose={this.hideModal} show={this.state.showModal}>
          <div>
            <Form postPicture={postPicture} currentUser={currentUser} />
          </div>
        </Modal>
      </div>
    );
  }
}

export default PictureUpload;
