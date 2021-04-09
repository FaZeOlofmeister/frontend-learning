import React from 'react';

export default class CarouselDots extends React.Component {
    constructor(props) {
        super(props);
    }

    handleDotClick(i) {
        var option = i - this.props.nowLoc;
        this.props.turn(option);
    }

    render() {
        let dotNodes = [];
        let { count } = this.props;
        for (let i = 0; i < count; i++) {
            dotNodes[i] = (
                <span
                    key={'dot' + i}
                    className={"carousel-dot" + (i === this.props.nowLoc ? " carousel-dot-selected" : "")}
                    onClick={() => this.handleDotClick(i)}>
                </span>
            );
        }
        return (
            <div className="carousel-dots-wrap">
                {dotNodes}
            </div>
        );
    }
};