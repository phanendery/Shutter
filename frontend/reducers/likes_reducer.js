import merge from "lodash/merge";
import {
  RECEIVE_LIKE,
  RECEIVE_ALL_LIKES,
  REMOVE_LIKE
} from "../actions/likes_actions";

const LikesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_LIKES: {
      // console.log(action);
      return action.likes;
    }
    case RECEIVE_LIKE:
      let newState = merge({}, { oldState, [action.like.id]: action.like });
      return newState;
    case REMOVE_LIKE:
      newState = merge({}, oldState);
      delete newState[action.likeId];
      return newState;
    default:
      return oldState;
  }
};

export default LikesReducer;
