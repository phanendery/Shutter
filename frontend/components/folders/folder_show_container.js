import { connect } from "react-redux";
import {
  fetchFolder,
  fetchFolders,
  deleteFolder,
  postFolder
} from "../../actions/folder_actions";
import { updatePicture } from "../../actions/pictures_actions";
import FolderShow from "../folders/folder_show";

const mSTP = (state, ownProps) => {
  let folderId = ownProps.match.params.folderId;
  // let folders = Object.values(state.entities.folders);
  // let folder = state.entities.folders[folderId];
  let currentUser = state.entities.users[state.session.id];
  return {
    folderId,
    currentUser
  };
};

const mDTP = dispatch => {
  return {
    fetchFolder: id => dispatch(fetchFolder(id)),
    updatePicture: picture => dispatch(updatePicture(picture))
  };
};

export default connect(
  mSTP,
  mDTP
)(FolderShow);
