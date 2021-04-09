import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IMAGE_ITEMS from './Components/Image';
import Carousel from './Components/Carousel/Carousel';

ReactDOM.render(
  <Carousel
    items={IMAGE_ITEMS}
    speed={1.2}
    delay={2.1}
    pause={true}
    autoplay={true}
    dots={true}
    arrows={true}
  />,
  document.getElementById('root')
);
