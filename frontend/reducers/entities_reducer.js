import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import picturesReducer from "./pictures_reducer";
import foldersReducer from "./folders_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  pictures: picturesReducer,
  folders: foldersReducer
});

export default entitiesReducer;
