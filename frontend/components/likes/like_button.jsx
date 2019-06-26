import React from "react";

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    if (this.props.liked) {
      this.props.removeLike(this.props.picture_id);
    } else {
      this.props.receiveLike(this.props.picture_id);
    }
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <button className="like-button" onClick={this.handleClick}>
          <i className="far fa-heart" />
          {this.props.text}
        </button>
        <span>{this.props.numLikes}</span>
      </div>
    );
  }
}

export default LikeButton;
