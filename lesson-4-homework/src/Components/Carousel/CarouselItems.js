import React from 'react';

export default class CarouselItems extends React.Component {
    render() {
        let { count, item } = this.props;
        let width = 100 / count + '%';
        return (
            <li className="carousel-item" style={{ width: width }}>
                <img src={item.src} alt={item.alt} />
            </li>
        );
    }
};