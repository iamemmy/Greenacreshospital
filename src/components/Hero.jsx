import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import Img1 from '../assets/hero1.jpg';
import Img2 from '../assets/hero2.jpg';
import Img3 from '../assets/hero3.jpg';
import Img4 from '../assets/hero4.jpg';
import '../style/main.css';

function Hero() {
  return (
    <div className='hero'>
      <div className='hero-content'>
        <h3>Welcome to a world of Excellent healthcare</h3>
        <div className='hero-cta'>
          <Link to='tel:08106338579'>Consult Us</Link>
          <Link to='tel:08106338579'>Learn More</Link>
        </div>
      </div>

      <Carousel className='carousel-wrap'>

        <Carousel.Item className='carousel'>
          <div className='carousel-image-overlay'></div>
          <img src={Img1} alt='Slide 1' />
        </Carousel.Item>

        <Carousel.Item className='carousel'>
          <div className='carousel-image-overlay'></div>
          <img src={Img2} alt='Slide 2' />
        </Carousel.Item>

        <Carousel.Item className='carousel'>
          <div className='carousel-image-overlay'></div>
          <img src={Img3} alt='Slide 3' />
        </Carousel.Item>

        <Carousel.Item className='carousel'>
          <div className='carousel-image-overlay'></div>
          <img src={Img4} alt='Slide 4' />
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default Hero;
