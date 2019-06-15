import { connect } from "react-redux";
import user from "./user";

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
)(user);
