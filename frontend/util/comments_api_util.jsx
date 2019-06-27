

export const createComment = (picture_id, text) => {
  return $.ajax({
    method: "post",
    url: `api/pictures/${picture_id}/comments`,
    data: { comment: { comment: text } }
  });
};

export const deleteComment = id => {
  return $.ajax({
    method: "delete",
    url: `api/comments/${id}`
  });
};
