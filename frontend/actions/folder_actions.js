import * as FolderAPIUtil from "../util/folders_api_util";

export const RECEIVE_ALL_FOLDERS = "RECEIVE_ALL_FOLDERS";
export const RECEIVE_FOLDER = "RECEIVE_FOLDER";
export const REMOVE_FOLDER = "REMOVE_FOLDER";

export const receiveFolders = folders => {
  return {
    folders: folders,
    type: RECEIVE_ALL_FOLDERS
  };
};
export const receiveFolder = folder => ({
  folder: folder,
  type: RECEIVE_FOLDER
});
export const removeFolder = folder => ({
  folderId: folder.id,
  type: REMOVE_FOLDER
});

export const fetchFolders = () => dispatch =>
  FolderAPIUtil.fetchFolders().then(folders =>
    dispatch(receiveFolders(folders))
  );

export const fetchFolder = id => dispatch =>
  FolderAPIUtil.fetchFolder(id).then(folder => dispatch(receiveFolder(folder)));

export const postFolder = folder => dispatch => {
  return FolderAPIUtil.postFolder(folder).then(folder =>
    dispatch(receiveFolder(folder))
  );
};

export const deleteFolder = id => dispatch =>
  FolderAPIUtil.deleteFolder(id).then(folder => dispatch(removeFolder(folder)));

export const updateFolder = id => dispatch =>
  FolderAPIUtil.updateFolder(id).then(folder =>
    dispatch(receiveFolder(folder))
  );
