import React from "react";
import { withRouter } from "react-router-dom";
import { login } from "../../util/session_api_util";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    this.props.processForm({
      username: "phanender",
      password: "password"
    });
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  renderErrors() {
    return (
      <ul className="login-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    let demologin = null;
    if (this.props.formType === "Log In") {
      demologin = (
        <button className="demo-login" onClick={this.handleDemoSubmit}>
          Guest Login
        </button>
      );
    }
    return (
      <div className="login-form-container">
        <div className="borderBox">
          <div className="login-text">
            {this.props.formType === "Log In"
              ? "Log In to Shutter"
              : "Sign Up for Shutter"}
          </div>
          <form onSubmit={this.handleSubmit} className="login-form-box">
            {this.renderErrors()}
            <div className="login-form">
              <br />
              <label className="login-header">
                <div className="email-tag">Email</div>

                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.update("username")}
                  className="login-input1"
                />
              </label>
              <br />
              <label className="login-header">
                <div className="password-tag">Password</div>

                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  className="login-input2"
                />
              </label>
              <br />
              <input
                className="session-submit"
                type="submit"
                value={this.props.formType}
              />
              <br />
              {demologin}
              {/* <p>
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </p> */}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SessionForm;
