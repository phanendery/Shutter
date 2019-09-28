import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { uploadAvatar } from "../../actions/session_actions";
import Dropdown from "./user_dropdown";

const mapStateToProps = ({ session, entities: { users } }) => {
  // console.log(currentUser);
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  uploadAvatar: avatar => dispatch(uploadAvatar(avatar))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dropdown);
