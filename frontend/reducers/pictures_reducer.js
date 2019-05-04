import merge from "lodash/merge";
import {
  RECEIVE_ALL_PICTURES,
  RECEIVE_PICTURE,
  REMOVE_PICTURE
} from "../actions/pictures_actions";

const PicturesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_PICTURES: {
      console.log(action);
      return action.pictures;
    }
    case RECEIVE_PICTURE:
      let newState = merge(
        {},
        { oldState, [action.picture.id]: action.picture }
      );
      return newState;
    case REMOVE_PICTURE:
      newState = merge({}, oldState);
      delete newState[action.pictureId];
      return newState;
    default:
      return oldState;
  }
};

export default PicturesReducer;
