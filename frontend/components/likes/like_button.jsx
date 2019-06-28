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
        {/* <button className="like-button" onClick={this.handleClick}>
          <i className="far fa-heart" />
        </button> */}
        {/* <input type="checkbox" id="like" onClick={this.handleClick} />
        <label for="like">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32c-5.15-4.67-8.55-7.75-8.55-11.53 0-3.08 2.42-5.5 5.5-5.5 1.74 0 3.41.81 4.5 2.09 1.09-1.28 2.76-2.09 4.5-2.09 3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54l-1.45 1.31z" />
          </svg>
        </label> */}
        {/* {this.props.text} */}
        {/* <span>{this.props.numLikes}</span> */}
      </div>
    );
  }
}

export default LikeButton;
