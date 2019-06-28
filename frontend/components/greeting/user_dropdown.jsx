import React from "react";
import { Link } from "react-router-dom";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMenu: false
    };

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
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  render() {
    // console.log(this.props.currentUser);
    return (
      <div className="dropdown">
        <div className="button" onClick={this.showDropdownMenu}>
          {" "}
          {this.props.currentUser.avatar ? (
            <img src={this.props.currentUser.avatar} />
          ) : (
            <i className="fas fa-user-circle profile-icon" />
          )}{" "}
        </div>

        {this.state.displayMenu ? (
          <ul>
            <li>
              <Link to={`/users/${this.props.currentUser.id}`}>
                <button className="logout-dropdown">Profile</button>
              </Link>
            </li>
            <li>
              <Link to="/avatar">
                <button className="logout-dropdown">Change Avatar</button>
              </Link>
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
      </div>
    );
  }
}

export default Dropdown;
