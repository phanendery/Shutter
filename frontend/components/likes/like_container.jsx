import Likes from "./like";
import { connect } from "react-redux";
import { fetchLikes } from "../../actions/likes_actions";

const mSTP = (state, ownProps) => ({
  likes: Object.values(state.entities.likes)
});

const mDTP = (dispatch, ownProps) => ({
  fetchLikes: () => dispatch(fetchLikes())
});

export default connect(
  mSTP,
  mDTP
)(Likes);
