import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import Img1 from '../assets/img15.jpg';
import Img2 from '../assets/img16.jpg';
import Img3 from '../assets/img17.jpg';
import Img4 from '../assets/img18.jpg';
import "../style/main.css";

function Hero() {
  return (
    <div className='hero'>
      <div className='hero-content'>
        <h3>
          Welcome to a world of Excellent healthcare
        </h3>
        <Link to="tel:08106338579">Book Appointment</Link>
      </div>

      <Carousel className='carousel-wrap'>

        <Carousel.Item className='carousel'>
          <img src={Img1} alt="Slide 1" />
        </Carousel.Item>

        <Carousel.Item className='carousel'>
          <img src={Img2} alt="Slide 2" />
        </Carousel.Item>

        <Carousel.Item className='carousel'>
          <img src={Img3} alt="Slide 3" />
        </Carousel.Item>

        <Carousel.Item className='carousel'>
          <img src={Img4} alt="Slide 3" />
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default Hero;
