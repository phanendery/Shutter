export const login = user =>
  $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user }
  });

export const signup = user =>
  $.ajax({
    method: "POST",
    url: "/api/user",
    data: { user }
  });

export const logout = () =>
  $.ajax({
    method: "DELETE",
    url: "/api/session"
  });

export const uploadAvatar = avatar =>
  $.ajax({
    method: "patch",
    url: "/api/user",
    data: avatar,
    contentType: false,
    processData: false
  });

export const fetchUser = id =>
  $.ajax({
    method: "GET",
    url: `/api/users/${id}`
  });
