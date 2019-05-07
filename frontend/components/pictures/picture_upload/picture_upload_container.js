import React from "react";
import { connect } from "react-redux";
import { deletePicture, postPicture } from "../../../actions/pictures_actions";
import PictureUpload from "../picture_upload/picture_upload";

const mSTP = state => {
  let currentUser = state.session.id;
  return {
    currentUser
  };
};

const mDTP = dispatch => {
  return {
    postPicture: picture => dispatch(postPicture(picture)),
    deletePicture: id => dispatch(deletePicture(id))
  };
};

export default connect(
  mSTP,
  mDTP
)(PictureUpload);
