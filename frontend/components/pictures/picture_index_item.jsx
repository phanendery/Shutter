import React from "react";
import { Link } from "react-router-dom";

const PictureIndexItem = props => {
  return (
    <React.Fragment>
      <img
        src={`https://res.cloudinary.com/dfeo7demm/image/fetch/w_500,h_500,c_fit/${
          props.picture.serviceUrl
        }`}
      />
    </React.Fragment>
  );
};

export default PictureIndexItem;
