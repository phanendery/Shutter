import { connect } from "react-redux";
import Comment from "./comment";
import { removeComment } from "../../actions/comment_actions";
import { fetchUser } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
  let user = state.entities.users[ownProps.comment.user_id];
  let currentUser = state.entities.users[state.session.id];
  return {
    user,
    currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeComment: () => dispatch(removeComment(ownProps.comment)),
    fetchUser: () => dispatch(fetchUser(ownProps.comment.user_id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment);
