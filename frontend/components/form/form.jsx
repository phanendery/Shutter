import React from "react";
import { withRouter } from "react-router-dom";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      photoFile: null,
      photoUrl: null,
      description: "",
      camera: "",
      lens: "",
      focal: "",
      show: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
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
    formData.append("picture[description]", this.state.description);
    formData.append("picture[camera]", this.state.camera);
    formData.append("picture[lens]", this.state.lens);
    formData.append("picture[focal]", this.state.focal);
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

            <label htmlFor="file-upload-input">
              <h2 className="upload-button-file">Choose a Photo</h2>
              <input
                id="file-upload-input"
                type="file"
                onChange={e => this.handleFile(e)}
              />
            </label>
            <input
              type="text"
              id="post-body"
              value={this.state.title}
              onChange={e => this.handleInput("title")}
            />

            <input
              type="text"
              id="post-body"
              value={this.state.description}
              onChange={e => this.handleInput("description")}
            />

            <input
              type="text"
              id="post-body"
              value={this.state.camera}
              onChange={e => this.handleInput("camera")}
            />

            <input
              type="text"
              id="post-body"
              value={this.state.lens}
              onChange={e => this.handleInput("lens")}
            />

            <input
              type="text"
              id="post-body"
              value={this.state.focal}
              onChange={e => this.handleInput("focal")}
            />

            <button className="upload-modal-button">Upload Picture</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Form);
