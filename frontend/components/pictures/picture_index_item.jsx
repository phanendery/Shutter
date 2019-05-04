import React from "react";
import { Link } from "react-router-dom";

const PictureIndexItem = props => {
  console.log(props.picture);
  return (
    <div>
      <Link to={`/pictures/${props.picture.id}`} />
      <img src={props.picture.photoUrl} />

      <button onClick={() => props.deletePicture(props.picture.id)}>
        Delete
      </button>
    </div>
  );
};

export default PictureIndexItem;
