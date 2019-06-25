import { receiveLike, removeLike } from "../../actions/likes_actions";
import { connect } from "react-redux";
import LikeButton from "./like_button";

const mSTP = (state, ownProps) => ({});

const mDTP = (dispatch, ownProps) => {};

export default connect(
  mSTP,
  mDTP
)(LikeButton);
