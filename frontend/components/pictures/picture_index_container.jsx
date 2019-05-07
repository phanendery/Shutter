import { connect } from "react-redux";
import PictureIndex from "./picture_index";
import {
  fetchPictures,
  deletePicture,
  postPicture
} from "../../actions/pictures_actions";

const mSTP = state => {
  let pictures = Object.values(state.entities.pictures);
  let currentUser = state.session.id;
  return {
    pictures: pictures,
    currentUser
  };
};

const mDTP = dispatch => {
  return {
    postPicture: picture => dispatch(postPicture(picture)),
    fetchPictures: () => dispatch(fetchPictures()),
    deletePicture: id => dispatch(deletePicture(id))
  };
};

export default connect(
  mSTP,
  mDTP
)(PictureIndex);
