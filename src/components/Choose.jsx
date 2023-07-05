import React from 'react';
import Icon1 from '../assets/icon5.png';
import Icon2 from '../assets/icon6.png';
import Icon3 from '../assets/icon7.png';
import Icon4 from '../assets/icon8.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Choose() {
  return (
    <div className='choose-wrapper'>
        <div className='choose-item'
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="350"
            data-aos-offset="50"
        >
          <img src={Icon1} />
          <p>Excellent Location</p>
        </div>
        <div className='choose-item'
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="300"
            data-aos-offset="50"
        >
          <img src={Icon2} />
          <p>Quality Service</p>
        </div>
        <div className='choose-item'
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="300"
            data-aos-offset="50"
        >
          <img src={Icon3} />
          <p>Positive Reviews</p>
        </div>
        <div className='choose-item'
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="350"
            data-aos-offset="50"
        >
          <img src={Icon4} />
          <p>Affordable</p>
        </div>
    </div>
  )
}