import React from "react";
import { Link } from "react-router-dom";
import Modal from "../modal2";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMenu: false,
      showModal: false,
      avatarPic: this.props.currentUser.avatar // ASK ETHAN HOW TO SOURCE A PREVIEW
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(e) {
    e.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }
  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.addEventListener("onmouse", this.hideDropdownMenu);
    });
  }

  showModal() {
    this.setState({ showModal: true });
  }

  hideModal() {
    this.setState({ showModal: false });
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
    // console.log(e.target.files);
    this.setState({
      avatar: e.target.files[0],
      avatarPic: e.target.files[0].name
    });
  }

  render() {
    // console.log(this.props.currentUser);
    return (
      <div className="dropdown">
        <div
          className="button"
          onMouseOver={this.showDropdownMenu}
          onMouseLeave={this.hideDropdownMenu}
        >
          {" "}
          {this.props.currentUser.avatar ? (
            <img src={this.props.currentUser.avatar} />
          ) : (
            <i className="fas fa-user-circle profile-icon" />
          )}{" "}
        </div>

        {this.state.displayMenu ? (
          <ul
            onMouseEnter={this.showDropdownMenu}
            onMouseLeave={this.hideDropdownMenu}
          >
            <div className="arrow-up"></div>
            <li>
              <Link to={`/pictures`}>
                <button className="logout-dropdown">Discover</button>
              </Link>
            </li>
            <li>
              <button className="logout-dropdown" onClick={this.showModal}>
                My Avatar
              </button>
            </li>
            <li>
              <Link to={`/users/${this.props.currentUser.id}`}>
                <button className="logout-dropdown">My Pictures</button>
              </Link>
            </li>

            <li>
              {/* <Link to="/folders">
                <button className="logout-dropdown">My Folders</button>
              </Link> */}
            </li>
            <li>
              <Link to="/">
                <button className="logout-dropdown" onClick={this.props.logout}>
                  Log Out
                </button>
              </Link>
            </li>
            <li>
              <button className="logout-dropdown"> </button>
            </li>
            <li>
              <a href="https://github.com/phanendery" target="blank">
                <button className="logout-dropdown">
                  <i className="fab fa-github"></i> Github
                </button>
              </a>
            </li>
            <li>
              <a href="https://phanendery.github.io/Portfolio/" target="blank">
                <button className="logout-dropdown">Portfolio</button>
              </a>
            </li>
          </ul>
        ) : null}
        <Modal show={this.state.showModal}>
          <div className="uploadAvatarContainer">
            <div className="avatarHolder">
              <div className="avatarPreview">
                <div className="avatarPreviewPlaceHolder">
                  {/* <div className="button"> */}
                  <img
                    src={this.state.avatarPic}
                    className="avatarPreviewPicture"
                  ></img>
                  {/* </div> */}
                </div>
              </div>
              <div className="usernameHolder">
                {this.props.currentUser.username}
              </div>
              <form action="">
                <label htmlFor="avatar-load-input">
                  <input
                    className="avatarChooseFile"
                    id="avatar-load-input"
                    type="file"
                    onChange={e => this.handleFile(e)}
                  />
                </label>
              </form>
            </div>
            <div className="avatarButtons2">
              <div className="avatarButtons">
                <button onClick={this.handleSubmit} className="saveButton">
                  Save
                </button>
                <button className="cancelButton" onClick={this.hideModal}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Dropdown;
