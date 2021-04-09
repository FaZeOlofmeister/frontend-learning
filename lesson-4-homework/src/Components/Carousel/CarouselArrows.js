import React from 'react';

export default class CarouselArrows extends React.Component {
    constructor(props) {
        super(props);
    }
    
    handleArrowClick(option) {
        this.props.turn(option);
    }

    render() {
        return (
            <div className="carousel-arrows-wrap">
                <span
                    className="carousel-arrow carousel-arrow-left"
                    onClick={() => this.handleArrowClick(-1)}>
                    &lt;
                </span>
                <span
                    className="carousel-arrow carousel-arrow-right"
                    onClick={() => this.handleArrowClick(1)}>
                    &gt;
                </span>
            </div>
        );
    }
};