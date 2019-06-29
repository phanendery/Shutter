import React from "react";
import { Link } from "react-router-dom";

const PictureIndexItem = props => {
  return (
    <React.Fragment>
      <img src={props.picture.photoUrl} />
    </React.Fragment>
  );
};

export default PictureIndexItem;
