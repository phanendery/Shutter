import merge from "lodash/merge";
import {
  RECEIVE_ALL_FOLDERS,
  RECEIVE_FOLDER,
  REMOVE_FOLDER
} from "../actions/folder_actions";

const FoldersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_FOLDERS: {
      return action.folders;
    }
    case RECEIVE_FOLDER: {
      let newState = merge({}, oldState, {
        [action.folder.id]: action.folder
      });
      return newState;
    }
    case REMOVE_FOLDER:
      newState = merge({}, oldState);
      delete newState[action.folderId];
      return newState;
    default:
      return oldState;
  }
};

export default FoldersReducer;
