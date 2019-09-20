import React from "react";
import Modal from "../modal";
export default class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: this.props.currentUser.avatar,
      showModal: false
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    const { uploadAvatar } = this.props;
    if (this.state.avatar) {
      formData.append("user[avatar]", this.state.avatar);
    }
    uploadAvatar(formData).then(() => this.props.history.push("/pictures"));
  }

  handleFile(e) {
    e.preventDefault();
    this.setState({
      avatar: e.target.files[0]
    });
  }

  render() {
    return (
      <div className="avatar-container">
        {/* */}
        <Modal handleClose={this.hideModal} show={this.state.showModal}>
          <div>
            <form action="" onSubmit={this.handleSubmit}>
              <label htmlFor="avatar-load-input">
                <input
                  id="avatar-load-input"
                  type="file"
                  onChange={e => this.handleFile(e)}
                />
              </label>
              <button className="avatar-upload-button">Upload!</button>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}
