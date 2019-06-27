import React from "react";
import { connect } from "react-redux";
import { fetchPicture, deletePicture } from "../../../actions/pictures_actions";
import { createComment } from "../../../actions/comment_actions";
import PictureShow from "../picture_show/picture_show";
import { create } from "domain";

const mSTP = (state, ownProps) => {
  let pictureId = ownProps.match.params.pictureId;
  let picture = state.entities.pictures[pictureId];
  let currentUser = state.entities.users[state.session.id];
  return {
    picture,
    currentUser
  };
};

const mDTP = (dispatch, ownProps) => {
  return {
    fetchPicture: id => dispatch(fetchPicture(id)),
    deletePicture: id => dispatch(deletePicture(id)),
    createComment: text =>
      dispatch(createComment(ownProps.match.params.pictureId, text))
  };
};

export default connect(
  mSTP,
  mDTP
)(PictureShow);
