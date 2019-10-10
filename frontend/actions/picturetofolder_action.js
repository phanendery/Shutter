import * as JoinAPIUtil from "../util/picturetofolders_api_util";

export const RECEIVE_ALL_JOINS = "RECEIVE_ALL_JOINS";
export const RECEIVE_JOIN = "RECEIEVE_JOIN";
export const REMOVE_JOIN = "REMOVE_JOIN";

export const receiveJoins = joins => {
  return {
    joins,
    type: RECEIVE_ALL_JOINS
  };
};

export const receiveJoin = data => {
  return {
    data,
    type: RECEIVE_JOIN
  };
};

export const removeJoin = id => {
  return {
    joinId: id,
    type: REMOVE_JOIN
  };
};

export const fetchJoins = () => dispatch =>
  JoinAPIUtil.fetchJoins().then(joins => dispatch(receiveJoins(joins)));

export const fetchJoin = id => dispatch =>
  JoinAPIUtil.fetchJoin(id).then(data => dispatch(receiveJoin(data)));

export const postJoin = data => dispatch => {
  return JoinAPIUtil.postJoin(data).then(data => dispatch(receiveJoin(data)));
};

export const deleteJoin = id => dispatch =>
  JoinAPIUtil.deleteJoin(id).then(id => dispatch(removeJoin(id)));
