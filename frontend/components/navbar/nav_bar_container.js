import { connect } from "react-redux";
import NavBar from "./nav_bar";
import { login, signup, logout } from "../../actions/session_actions";

const mapStateToProps = state => {
  const loggedin = Boolean(state.session.id);
  const currentUser = loggedin ? state.entities.users[state.session.id] : null;
  const errors = state.errors.login;
  return {
    loggedin,
    currentUser,
    errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
