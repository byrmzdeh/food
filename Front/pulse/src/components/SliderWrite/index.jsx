import React from 'react'
import './style.scss'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SliderWrite = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <Slider {...settings}>
    <div className='photo'>
        <img src="https://preview.colorlib.com/theme/pulse/img/review-bg.jpg" />
        <h1>Food and more <span>.</span></h1>
    </div>
    <div className='photo'>
        <img src="https://preview.colorlib.com/theme/pulse/img/review-bg.jpg" />
        <h1>Food and more <span>.</span></h1>
    </div>
    <div className='photo'>
        <img src="https://preview.colorlib.com/theme/pulse/img/review-bg.jpg" />
        <h1>Food and more <span>.</span></h1>
    </div>
</Slider>
  )
}

export default SliderWrite