import React from "react";
import { connect } from "react-redux";
import { fetchPicture, deletePicture } from "../../../actions/pictures_actions";
import PictureShow from "../picture_show/picture_show";

const mSTP = (state, ownProps) => {
  let pictureId = ownProps.match.params.pictureId;
  let picture = state.entities.pictures[pictureId];
  let currentUser = state.entities.users[state.session.id];
  return {
    picture,
    currentUser
  };
};

const mDTP = dispatch => {
  return {
    fetchPicture: id => dispatch(fetchPicture(id)),
    deletePicture: id => dispatch(deletePicture(id))
  };
};

export default connect(
  mSTP,
  mDTP
)(PictureShow);
