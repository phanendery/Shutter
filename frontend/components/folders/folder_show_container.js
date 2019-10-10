import { connect } from "react-redux";
import { fetchFolder } from "../../actions/folder_actions";
import { deleteJoin, fetchJoins } from "../../actions/picturetofolder_action";
import { updatePicture } from "../../actions/pictures_actions";
import FolderShow from "../folders/folder_show";

const mSTP = (state, ownProps) => {
  let folderId = ownProps.match.params.folderId;
  let currentUser = state.entities.users[state.session.id];
  let joins = Object.values(state.entities.joins);
  return {
    folderId,
    currentUser,
    joins
  };
};

const mDTP = dispatch => {
  return {
    fetchFolder: id => dispatch(fetchFolder(id)),
    deleteJoin: id => dispatch(deleteJoin(id)),
    fetchJoins: () => dispatch(fetchJoins()),
    updatePicture: picture => dispatch(updatePicture(picture))
  };
};

export default connect(
  mSTP,
  mDTP
)(FolderShow);
