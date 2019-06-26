import { createLike, deleteLike } from "../../actions/likes_actions";
import { connect } from "react-redux";
import LikeButton from "./like_button";


const mSTP = (state, ownProps) => {
  //   let pictureId = ownProps.match.params.pictureId;
  let liked = ownProps.liked;
  let numLikes = ownProps.numLikes;
  //   console.log(liked);
  return {
    liked,
    numLikes,
    text: liked ? "UnLike?" : "Like"
    // pictureId
  };
};

const mDTP = (dispatch, ownProps) => {
  return {
    receiveLike: id => dispatch(createLike(id)),
    removeLike: id => dispatch(deleteLike(id))
  };
};

export default connect(
  mSTP,
  mDTP
)(LikeButton);
