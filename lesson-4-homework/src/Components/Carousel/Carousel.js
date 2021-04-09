import React from 'react'
import CarouselArrows from './CarouselArrows';
import CarouselDots from './CarouselDots';
import CarouselItems from './CarouselItems';
import "./Carousel.css"

export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nowLoc: 0,
        };
    }

    turn(n) {
        var newLoc = this.state.nowLoc + n;
        if (newLoc < 0) {
            newLoc = newLoc + this.props.items.length;
        }
        if (newLoc >= this.props.items.length) {
            newLoc = newLoc - this.props.items.length;
        }
        this.setState({ nowLoc: newLoc });
    }

    autoPlay() {
        if (this.props.autoplay) {
            this.autoPlayFlag = setInterval(() => {
                this.turn(1);
            }, this.props.delay * 1000);
        }
    }

    pausePlay() {
        clearInterval(this.autoPlayFlag);
    }

    componentDidMount() {
        this.autoPlay();
    }

    render() {
        let count = this.props.items.length;

        let itemNodes = this.props.items.map((item, idx) => {
            return <CarouselItems item={item} count={count} key={'item' + idx} />;
        });

        let arrowsNode = <CarouselArrows turn={this.turn.bind(this)} />;

        let dotsNode = <CarouselDots turn={this.turn.bind(this)} count={count} nowLoc={this.state.nowLoc} />;

        return (
            <div
                className="carousel"
                onMouseOver={this.props.pause ? this.pausePlay.bind(this) : null} onMouseOut={this.props.pause ? this.autoPlay.bind(this) : null}>
                <ul style={{
                    left: -100 * this.state.nowLoc + "%",
                    transitionDuration: this.props.speed + "s",
                    width: this.props.items.length * 100 + "%"
                }}>
                    {itemNodes}
                </ul>
                {this.props.arrows ? arrowsNode : null}
                {this.props.dots ? dotsNode : null}
            </div>
        );
    }
}

Carousel.defaultProps = {
    speed: 1,
    delay: 2,
    pause: true,
    autoplay: true,
    dots: true,
    arrows: true,
    items: [],
};
Carousel.autoPlayFlag = null;