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
    return (
      <div className="dropdown">
        <div className="button" onClick={this.showDropdownMenu}>
          {" "}
          <div className="profile-icon">
            <i className="fas fa-user-circle" />{" "}
          </div>
        </div>

        {this.state.displayMenu ? (
          <ul>
            <li>
              <button className="log-out" onClick={this.props.logout}>
                Log Out
              </button>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
