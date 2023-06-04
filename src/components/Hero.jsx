import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import Img1 from '../assets/img1.png';
import Img2 from '../assets/img5.png';
import Img3 from '../assets/img4.png';
import "../style/main.css";

function Hero() {
  return (
    <div className='hero'>
      <div className='hero-content'>
        <h3>
          Health is wealth. Do not joke with your wellbeing. Book an appointment today!
        </h3>
        <Link href="tel:08106338579">Book Appointment</Link>
      </div>

      <Carousel className='carousel-wrap'>

        <Carousel.Item className='carousel'>
          <img src={Img2} alt="Slide 1" />
        </Carousel.Item>

        <Carousel.Item className='carousel'>
          <img src={Img1} alt="Slide 2" />
        </Carousel.Item>

        <Carousel.Item className='carousel'>
          <img src={Img3} alt="Slide 3" />
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default Hero;
