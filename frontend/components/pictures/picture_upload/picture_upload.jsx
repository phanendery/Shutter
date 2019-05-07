import React from "react";
import Form from "../../form/form";

class PictureUpload extends React.Component {
  render() {
    const { postPicture, currentUser } = this.props;
    return (
      <div>
        <Form postPicture={postPicture} currentUser={currentUser} />
      </div>
    );
  }
}

export default PictureUpload;
