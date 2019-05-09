import React from "react";
import { withRouter } from "react-router-dom";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      photoFile: null,
      photoUrl: null,
      show: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({ title: e.currentTarget.value });
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    const { postPicture } = this.props;
    formData.append("picture[pic_name]", this.state.title);
    if (this.state.photoFile) {
      formData.append("picture[photo]", this.state.photoFile);
    }
    formData.append("picture[user_id]", this.props.currentUser);
    console.log("formdata:", formData);
    postPicture(formData).then(() => this.props.history.push("/pictures"));
  }

  render() {
    const preview = this.state.photoUrl ? (
      <img src={this.state.photoUrl} />
    ) : null;
    return (
      <div className="upload-form">
        <form id="image-form" onSubmit={e => this.handleSubmit(e)}>
          <div id="phanny-image">{preview}</div>
          <div id="phanny-pack">
            <label htmlFor="post-body" id="title-font">
              Title:{" "}
            </label>
            <input
              type="text"
              id="post-body"
              value={this.state.title}
              onChange={e => this.handleInput(e)}
            />
            <label htmlFor="file-upload-input">
              <h2 className="upload-button-file">Choose a Photo</h2>
              <input
                id="file-upload-input"
                type="file"
                onChange={e => this.handleFile(e)}
              />
            </label>

            <button className="upload-modal-button">Upload Picture</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Form);
