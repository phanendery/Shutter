import { connect } from "react-redux";
import { uploadAvatar } from "../../actions/session_actions";
import Avatar from "./avatar";

const mapStateToProps = state => {
  const currentUser = state.entities.users[state.session.id];
  return {
    currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  uploadAvatar: avatar => dispatch(uploadAvatar(avatar))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Avatar);
