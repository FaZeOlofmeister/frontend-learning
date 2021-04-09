import React from 'react';

export default class CarouselDots extends React.Component {
    handleDotClick(i) {
        var option = i - this.props.nowLocal;
        this.props.turn(option);
    }

    render() {
        let dotNodes = [];
        let { count, nowLocal } = this.props;
        for (let i = 0; i < count; i++) {
            dotNodes[i] = (
                <span
                    key={'dot' + i}
                    className={"carousel-dot" + (i === nowLocal ? " carousel-dot-selected" : "")}
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