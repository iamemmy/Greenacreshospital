import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Serv1 from '../assets/serv1.png';
import Serv2 from '../assets/serv2.png';
import Serv3 from '../assets/serv3.png';
import Serv4 from '../assets/serv4.png';
import Servimg from '../assets/slide1.jpg';

export default function Services() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
      <div className='services'>

        <div className='services-top'>
          <h3
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="200"
            data-aos-offset="50"
          >Our Services</h3>
          <p
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
            data-aos-offset="50"
          >
            At Green Acres Hospital, we take pride in delivering exceptional services to our patients. 
            From check-in to check-out, our dedicated team is committed to providing you with the best 
            experience during every visit to our facility.
          </p>
        </div>

        <div className='services-bottom'>
          <div className='service-card-wrap'>

            <div 
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="50"
              data-aos-offset="50"
              className='service-card'
            >
              <div className='service-card-img'>
                <img src={Serv4} alt="" />
              </div>
              <div className='service-card-content'>
                <h4>3D/4D ULTRASOUND SCAN</h4>
                <p>Enhanced Ultrasound Imaging: Detailed 3D/4D scans for a remarkable experience.</p>
              </div>
            </div>

            <div
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="50"
              data-aos-offset="50"
              className='service-card'
            >
              <div className='service-card-img'>
                <img src={Serv3} alt="" />
              </div>
              <div className='service-card-content'>
                <h4>LABORATORY SERVICE</h4>
                <p>Precise Laboratory Services: Accurate diagnostics for optimal healthcare outcomes.</p>
              </div>
            </div>

            <div
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="50"
              data-aos-offset="50"
              className='service-card'
            >
              <div className='service-card-img'>
                <img src={Serv2} alt="" />
              </div>
              <div className='service-card-content'>
                <h4>OBSTETRICS SERVICE</h4>
                <p>Expert Obstetrics Service: Dedicated care for a safe and healthy pregnancy.</p>
              </div>
            </div>

            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="50"
              data-aos-offset="50"
              className='service-card'
            >
              <div className='service-card-img'>
                <img src={Serv1} alt="" />
              </div>
              <div className='service-card-content'>
                <h4>SURGERY</h4>
                <p>Advanced Surgical Solutions: Skilled expertise for successful procedures and faster recovery.</p>
              </div>
            </div>

          </div>
          <div className='service-main-img'>
            <img src={Servimg} />
          </div>
        </div>
        
        <div className='services-view-all'>
          <Link to="/services">View All &#10230;</Link>
        </div>

      </div>
  )
}