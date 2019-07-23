import React from "react";

export default class Comment extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.user === undefined) {
      this.props.fetchUser();
    }
  }

  render() {
    if (this.props.user === undefined) {
      return null;
    }
    return (
      <div className="comment">
        <span>
          {" "}
          {this.props.user.avatar ? (
            <img src={this.props.user.avatar} />
          ) : (
            <i className="fas fa-user-circle profile-icon" />
          )}
        </span>
        <span className="commentext">{this.props.comment.comment}</span>
        {this.props.user === this.props.currentUser ? (
          <button onClick={this.props.removeComment} className="deletecomment">
            <i className="fas fa-times" />
          </button>
        ) : (
          ""
        )}
      </div>
    );
  }
}
