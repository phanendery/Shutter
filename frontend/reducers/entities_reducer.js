import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import picturesReducer from "./pictures_reducer";
import foldersReducer from "./folders_reducer";
import joinsReducer from "./picturetofolder_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  pictures: picturesReducer,
  folders: foldersReducer,
  joins: joinsReducer
});

export default entitiesReducer;
