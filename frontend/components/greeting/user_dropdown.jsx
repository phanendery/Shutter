import React from "react";
import { Link } from "react-router-dom";
import Modal from "../modal2";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMenu: false,
      showModal: false
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
    this.setState({
      avatar: e.target.files[0]
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
              <Link to={`/users/${this.props.currentUser.id}`}>
                <button className="logout-dropdown">Profile</button>
              </Link>
            </li>
            <li>
              {/* <Link to="/avatar"> */}
              <button className="logout-dropdown" onClick={this.showModal}>
                Avatar
              </button>
              {/* </Link> */}
            </li>
            <li>
              <Link to="/">
                <button className="logout-dropdown" onClick={this.props.logout}>
                  Log Out
                </button>
              </Link>
            </li>
          </ul>
        ) : null}
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

export default Dropdown;
