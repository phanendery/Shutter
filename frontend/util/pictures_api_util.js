export const fetchPictures = () =>
  $.ajax({
    method: "GET",
    url: "/api/pictures"
  });

export const postPicture = picture =>
  $.ajax({
    method: "post",
    url: "/api/pictures",
    data: picture,
    contentType: false,
    processData: false
  });

export const fetchPicture = id =>
  $.ajax({
    method: "get",
    url: `/api/pictures/${id}`
  });

export const deletePicture = id =>
  $.ajax({
    method: "delete",
    url: `/api/pictures/${id}`
  });
