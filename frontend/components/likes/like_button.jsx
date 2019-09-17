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
        {this.props.liked ? (
          <button className="like-button" onClick={this.handleClick}>
            <i className="fas fa-heart" id="likedicon" />
          </button>
        ) : (
          <button className="like-button" onClick={this.handleClick}>
            <i className="far fa-heart" />
          </button>
        )}
      </div>
    );
  }
}

export default LikeButton;
