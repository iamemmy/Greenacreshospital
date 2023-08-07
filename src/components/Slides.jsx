import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

//Slides Images
import Image1 from '../assets/slide1.jpg';
import Image2 from '../assets/slide2.jpg';
import Image3 from '../assets/slide3.jpg';
import Image4 from '../assets/slide4.jpg';
import Image5 from '../assets/slide5.jpg';
import Image6 from '../assets/slide15.png';
import Image7 from '../assets/slide9.jpg';
import Image8 from '../assets/slide10.jpg';
import Image9 from '../assets/slide11.jpg';
import Image10 from '../assets/slide13.jpg';
import Image11 from '../assets/slide14.jpg';
import Image12 from '../assets/slide8.jpg';
import Image13 from '../assets/slide16.jpg';
import Image14 from '../assets/slide17.jpg';
import Image15 from '../assets/slide18.jpg';
import Image16 from '../assets/slide19.jpg';
import Image17 from '../assets/slide20.jpg';

const Slides = () => {
  let visibleSlides = 3;

  if (window.innerWidth < 992) {
    visibleSlides = 2;
  }

  if (window.innerWidth < 768) {
    visibleSlides = 1;
  }

  return (
    <div className='slide-main'>
        <Carousel
            showThumbs={false}
            showArrows={true}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={3000}
            emulateTouch
            swipeable
            showIndicators={false}
            centerMode={visibleSlides !== 1}
            centerSlidePercentage={100 / visibleSlides}
        >
        <div>
            <img src={Image1} alt="" />
        </div>
        <div>
            <img src={Image2} alt="" />
        </div>
        <div>
            <img src={Image3} alt="" />
        </div>
        <div>
            <img src={Image4} alt="" />
        </div>
        <div>
            <img src={Image5} alt="" />
        </div>
        <div>
            <img src={Image6} alt="" />
        </div>
        <div>
            <img src={Image7} alt="" />
        </div>
        <div>
            <img src={Image8} alt="" />
        </div>
        <div>
            <img src={Image9} alt="" />
        </div>
        <div>
            <img src={Image10} alt="" />
        </div>
        <div>
            <img src={Image11} alt="" />
        </div>
        <div>
            <img src={Image12} alt="" />
        </div>
        <div>
            <img src={Image13} alt="" />
        </div>
        <div>
            <img src={Image14} alt="" />
        </div>
        <div>
            <img src={Image15} alt="" />
        </div>
        <div>
            <img src={Image16} alt="" />
        </div>
        <div>
            <img src={Image17} alt="" />
        </div>
        </Carousel>
    </div>
  );
};

export default Slides;
