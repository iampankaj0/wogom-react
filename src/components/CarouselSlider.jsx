import Carousel from 'nuka-carousel'
import React from 'react'
import { images } from '../constants'
import '../assets/css/carouselSlider.css';

const CarouselSlider = () => {
    return (
        <div className='carousel_slider-component'>
            <Carousel>
                <img src={images.slider1} alt={images.slider1} />
                <img src={images.slider2} alt={images.slider2} />
            </Carousel>
        </div>
    )
}

export default CarouselSlider