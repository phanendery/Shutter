import React, { Component } from "react";
// import './carousel.scss';
import data from "./data.json";
import Slide from "./slide";
import scrollTo from "./scrollToAnimate";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.handleLeftNav = this.handleLeftNav.bind(this);
    this.handleRightNav = this.handleRightNav.bind(this);
  }
  renderSlides() {
    return data.map(state => {
      return <Slide name={state.name} key={state.abbreviation} />;
    });
  }

  handleLeftNav(e) {}

  handleRightNav(e) {
    //cant use class properties may
    //if written this way, you dont have to bind
    const { carouselViewport } = this.refs;
    let numOfSlidesToScroll = 3.5;
    let widthOfSlide = 120;
    let newPos =
      carouselViewport.scrollLeft + numOfSlidesToScroll * widthOfSlide;
    let timeToMoveOneSlide = 200;
    let totalTimeToMove = numOfSlidesToScroll * timeToMoveOneSlide;
    scrollTo(carouselViewport, newPos, totalTimeToMove, "scrollLeft");
    // carouselViewport.scrollLeft = newPos;
  }

  render() {
    return (
      <div className="carousel-container">
        <button
          className="carousel-nav carousel-left-nav"
          onClick={this.handleLeftNav}
        >
          &#60;
        </button>
        <div className="carousel-viewport" ref="carouselViewport">
          {this.renderSlides()}
        </div>
        <button
          className="carousel-nav carousel-right-nav"
          onClick={this.handleRightNav}
        >
          &#62;
        </button>
      </div>
    );
  }
}
