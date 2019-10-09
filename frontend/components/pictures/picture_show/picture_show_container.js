import React from "react";
import { connect } from "react-redux";
import {
  fetchPicture,
  deletePicture,
  updatePicture
} from "../../../actions/pictures_actions";
import { createComment } from "../../../actions/comment_actions";
import PictureShow from "../picture_show/picture_show";
import { fetchFolders } from "../../../actions/folder_actions";

const mSTP = (state, ownProps) => {
  console.log(ownProps);
  let pictureId = ownProps.match.params.pictureId;
  let picture = state.entities.pictures[pictureId];
  let currentUser = state.entities.users[state.session.id];
  return {
    pictureId,
    picture,
    currentUser,
    folders: state.entities.folders
  };
};

const mDTP = (dispatch, ownProps) => {
  return {
    fetchPicture: id => dispatch(fetchPicture(id)),
    deletePicture: id => dispatch(deletePicture(id)),
    updatePicture: id => dispatch(updatePicture(id)),
    fetchFolders: () => dispatch(fetchFolders()),
    createComment: text =>
      dispatch(createComment(ownProps.match.params.pictureId, text))
  };
};

export default connect(
  mSTP,
  mDTP
)(PictureShow);
