import React from "react";
import { Link } from "react-router-dom";

const PictureIndexItem = props => {
  return (
    <React.Fragment>
      <img
        src={`https://res.cloudinary.com/dfeo7demm/image/fetch/h_400,c_fit/${
          props.picture.serviceUrl.split("?")[0]
        }`}
      />
    </React.Fragment>
  );
};

export default PictureIndexItem;
