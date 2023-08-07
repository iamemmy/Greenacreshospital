import React, { useState, useEffect } from 'react';
import { FaPhone } from 'react-icons/fa';
import { FiInfo } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import Img1 from '../assets/hero1.jpg';
import Img2 from '../assets/hero2.jpg';
import Img3 from '../assets/hero3.jpg';
import Img4 from '../assets/hero4.jpg';
import Img5 from '../assets/slide17.jpg';
import Img6 from '../assets/slide19.jpg';
import Img7 from '../assets/slide20.jpg';
import '../style/main.css';

function Hero() {
  const [showNavLocation, setShowNavLocation] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const shouldShowNavLocation = currentScrollPos === 0; // Change this condition based on your requirements
      setShowNavLocation(shouldShowNavLocation);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const heroClassName = showNavLocation ? 'hero' : 'hero scroll-hero';

  return (
    <div className={heroClassName}>
      <div className='hero-content'>
        <h3>Welcome to a world of Excellent healthcare</h3>
        <div className='hero-cta'>
          <Link to='tel:08106338579'>Contact Us <FaPhone /></Link>
          <Link to='https://www.facebook.com/profile.php?id=100063471673484'>Learn More <FiInfo /></Link>
        </div>
      </div>

      <Carousel className='carousel-wrap'>
        <Carousel.Item className='carousel'>
          <div className='carousel-image-overlay'></div>
          <img src={Img5} alt='Slide 1' />
        </Carousel.Item>

        <Carousel.Item className='carousel'>
          <div className='carousel-image-overlay'></div>
          <img src={Img6} alt='Slide 2' />
        </Carousel.Item>

        <Carousel.Item className='carousel'>
          <div className='carousel-image-overlay'></div>
          <img src={Img7} alt='Slide 3' />
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