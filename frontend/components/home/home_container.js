import { connect } from "react-redux";
import home from "./home";
import { signup } from "../../actions/session_actions";

const mapStateToProps = state => {
  let currentUser = state.session.id;
  return {
    currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(signup(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(home);
