export const fetchFolders = () =>
    $.ajax({
        method: "GET",
        url: "/api/folders"
    });