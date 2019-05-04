import { connect } from "react-redux";
import PictureIndex from "./picture_index";
import { fetchPictures, deletePicture } from "../../actions/pictures_actions";

const mSTP = state => {
  let pictures = Object.values(state.entities.pictures);
  return {
    pictures: pictures
  };
};

const mDTP = dispatch => {
  return {
    fetchPictures: () => dispatch(fetchPictures()),
    deletePicture: id => dispatch(deletePicture(id))
  };
};

export default connect(
  mSTP,
  mDTP
)(PictureIndex);
