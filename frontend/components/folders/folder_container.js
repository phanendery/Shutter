import { connect } from "react-redux";
import {
  fetchFolder,
  fetchFolders,
  deleteFolder,
  postFolder
} from "../../actions/folder_actions";
import { fetchJoins } from "../../actions/picturetofolder_action";
import Folder from "../folders/folder";

const mSTP = (state, ownProps) => {
  let folderId = ownProps.match.params.folderId;
  let folders = Object.values(state.entities.folders);
  let folder = state.entities.folders[folderId];
  let currentUser = state.entities.users[state.session.id];
  return {
    folders,
    currentUser
  };
};

const mDTP = dispatch => {
  return {
    fetchFolder: id => dispatch(fetchFolder(id)),
    deleteFolder: id => dispatch(deleteFolder(id)),
    fetchFolders: () => dispatch(fetchFolders()),
    fetchJoins: () => dispatch(fetchJoins()),
    postFolder: folder => dispatch(postFolder(folder))
  };
};

export default connect(
  mSTP,
  mDTP
)(Folder);
