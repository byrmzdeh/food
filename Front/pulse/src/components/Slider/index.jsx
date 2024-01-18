import React from 'react'
import Slider from "react-slick";
import './style.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const SliderHome = () => {

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
                    <img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-1.jpg.webp" alt="err" />
                    <h1>Food and more <span>.</span></h1>
                </div>
                <div className='photo'>
                    <img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-2.jpg" alt="" />
                    <h1>Special Dish <span>.</span></h1>
                </div>
                <div className='photo'>
                    <img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-3.jpg" alt="" />
                    <h1>Hygienic Food <span>.</span></h1>
                </div>
            </Slider>
    )
}

export default SliderHome