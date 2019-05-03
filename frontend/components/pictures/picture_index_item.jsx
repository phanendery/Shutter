import React from "react";
import { Link } from "react-router-dom";

const PictureIndexItem = props => (
  <div>
    <Link to={`/pictures/${props.picture.id}`} />
    <button onClick={props.deletePicture(props.picture.id)}>Delete</button>
  </div>
);

export default PictureIndexItem;
