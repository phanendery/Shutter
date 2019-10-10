import merge from "lodash/merge";
import {
  RECEIVE_JOIN,
  REMOVE_JOIN,
  RECEIVE_ALL_JOINS
} from "../actions/picturetofolder_action";

const PictureToFolderReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_JOINS: {
      return action.joins;
    }
    case RECEIVE_JOIN: {
      let newState = merge({}, oldState, {
        [action.data.id]: action.data
      });
      return newState;
    }
    case REMOVE_JOIN: {
      debugger;
      newState = merge({}, oldState);
      delete newState[action.joinId];
      return newState;
    }
    default:
      return oldState;
  }
};

export default PictureToFolderReducer;
