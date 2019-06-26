import React from "react";

export default class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: this.props.currentUser.avatar
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    const { uploadAvatar } = this.props;
    if (this.state.avatar) {
      formData.append("user[avatar]", this.state.avatar);
    }
    uploadAvatar(formData).then(() => this.props.history.push("/pictures"));
  }

  handleFile(e) {
    e.preventDefault();
    this.setState({
      avatar: e.target.files[0]
    });
  }

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <input type="file" onChange={this.handleFile} />
          <button>Upload!</button>
        </form>
      </div>
    );
  }
}
