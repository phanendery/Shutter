import * as APIUtil from "../util/comments_api_util";

export const GET_COMMENT = "GET_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

const getComment = comment => {
  return {
    type: GET_COMMENT,
    comment
  };
};

const deleteComment = comment => {
  return {
    type: DELETE_COMMENT,
    comment
  };
};

export const createComment = (picture_id, text) => dispatch => {
  return APIUtil.createComment(picture_id, text).then(comment =>
    dispatch(getComment(comment))
  );
};

export const removeComment = comment => dispatch => {
  return APIUtil.deleteComment(comment.id).then(() =>
    dispatch(deleteComment(comment))
  );
};
