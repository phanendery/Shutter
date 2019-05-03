import * as PictureAPIUtil from "../util/pictures_api_util";

export const RECEIVE_ALL_PICTURES = "RECEIVE_ALL_PICTURES";
export const RECEIVE_PICTURE = "RECEIVE_PICTURE";
export const REMOVE_PICTURE = "REMOVE_PICTURE";

export const receivePictures = pictures => ({
  pictures: pictures,
  type: RECEIVE_ALL_PICTURES
});
export const receivePicture = picture => ({
  picture: picture,
  type: RECEIVE_PICTURE
});
export const removePicture = picture => ({
  pictureId: picture.id,
  type: REMOVE_PICTURE
});

export const fetchPictures = () => dispatch =>
  PictureAPIUtil.fetchPictures().then(pictures =>
    dispatch(recievePictures(pictures))
  );

export const fetchPicture = id => dispatch =>
  PictureAPIUtil.fetchPicture(id).then(picture =>
    dispatch(receivePicture(picture))
  );

export const postPicture = picture => dispatch =>
  PictureAPIUtil.postPicture(picture).then(picture =>
    dispatch(receivePicture(picture))
  );

export const deletePicture = id => dispatch =>
  PictureAPIUtil.deletePicture(id).then(picture =>
    dispatch(removePicture(picture))
  );
