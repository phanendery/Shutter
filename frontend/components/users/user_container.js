import { connect } from "react-redux";
import user from "./user";
import { fetchPictures, deletePicture } from "../../actions/pictures_actions";

const mapStateToProps = state => {
  let currentUser = state.session.id;
  let pictures = Object.values(state.entities.pictures);
  return {
    pictures: pictures,
    currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPictures: () => dispatch(fetchPictures()),
    deletePicture: id => dispatch(deletePicture(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(user);
