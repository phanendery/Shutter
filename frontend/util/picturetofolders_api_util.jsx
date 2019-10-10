export const fetchJoin = id =>
  $.ajax({
    method: "get",
    url: `/api/picture_to_folders/${id}`
  });

export const postJoin = data =>
  $.ajax({
    method: "post",
    url: "/api/picture_to_folders",
    data
  });

export const fetchJoins = () => {
  return $.ajax({
    method: "GET",
    url: "api/picture_to_folders"
  });
};

export const deleteJoin = id =>
  $.ajax({
    method: "delete",
    url: `/api/picture_to_folders/${id}`
  });
