export const fetchFolders = () =>
  $.ajax({
    method: "GET",
    url: `/api/folders`
  });

export const fetchFolder = id =>
  $.ajax({
    method: "get",
    url: `/api/folders/${id}`
  });

export const postFolder = folder =>
  $.ajax({
    method: "post",
    url: "/api/folders",
    data: folder
  });

export const deleteFolder = id =>
  $.ajax({
    method: "delete",
    url: `/api/folders/${id}`
  });

export const updateFolder = id =>
  $.ajax({
    method: "patch",
    url: `/api/folders/${id}`
  });
