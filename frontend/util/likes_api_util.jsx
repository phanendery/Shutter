export const fetchLikes = () => {
  return $.ajax({
    method: "GET",
    url: "api/likes"
  });
};

export const createLike = id => {
  return $.ajax({
    method: "POST",
    url: `api/pictures/${id}/likes`
  });
};

export const deleteLike = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/pictures/${id}/likes`
  });
};
