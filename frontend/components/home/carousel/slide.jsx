import React, { Component } from 'react'

export class Slide extends Component {
    render() {
        const{
            name
        } = this.props;
        return (
            <div className="slide">
                {name}
            </div>
        )
    }
}

export default Slide;
