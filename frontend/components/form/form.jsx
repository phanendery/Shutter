import React from "react";
import { withRouter } from "react-router-dom";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      // photoFile: null,
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
    if (this.props.photoFile) {
      formData.append("picture[photo]", this.props.photoFile);
    }
    formData.append("picture[user_id]", this.props.currentUser);
    postPicture(formData).then(() => this.props.history.push("/pictures"));
  }

  render() {
    const preview = this.props.photoUrl ? (
      <img src={this.props.photoUrl} className="previewPhoto" />
    ) : (
      <div className="previewPlaceholder">
        {/* <i className="fas fa-photo-video"></i> */}
      </div>
    );
    return (
      <div className="upload-form">
        <form id="image-form" onSubmit={e => this.handleSubmit(e)}>
          <div className="phannyImageandPack">
            <div id="phanny-image">{preview}</div>
            <div id="phanny-pack">
              <div className="inputStyling">
                <label htmlFor="post-body" className="title-font">
                  Title
                </label>
                <input
                  type="text"
                  className="post-body"
                  value={this.state.title}
                  onChange={this.handleInput("title")}
                />
              </div>
              <div className="inputStyling">
                <label htmlFor="post-body" className="title-font">
                  Description
                </label>
                <textarea
                  row="10"
                  className="post-bodyDescription"
                  value={this.state.description}
                  onChange={this.handleInput("description")}
                />
              </div>

              <div className="inputStyling">
                <label htmlFor="post-body" className="title-font">
                  Camera (Optional)
                </label>
                <input
                  type="text"
                  className="post-body"
                  value={this.state.camera}
                  onChange={this.handleInput("camera")}
                />
              </div>

              <div className="inputStyling">
                <label htmlFor="post-body" className="title-font">
                  Lens (Optional)
                </label>
                <input
                  type="text"
                  className="post-body"
                  value={this.state.lens}
                  onChange={this.handleInput("lens")}
                />
              </div>

              <div className="inputStyling" id="focalLength">
                <label htmlFor="post-body" className="title-font">
                  Focal Length (Optional)
                </label>
                <input
                  type="text"
                  className="post-body"
                  value={this.state.focal}
                  onChange={this.handleInput("focal")}
                />
              </div>
              <div className="uploadHolder">
                <button type="submit" className="upload-modal-button">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Form);
