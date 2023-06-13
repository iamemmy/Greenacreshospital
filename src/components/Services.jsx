import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Service1 from '../assets/img7.png';
import Service2 from '../assets/img13.png';
import Service3 from '../assets/img9.png';
import Service4 from '../assets/img19.jpg';

export default function Services() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
      <div className='services'>

        <div className='services-top'>
          <h3
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-offset="50"
          >Our Services</h3>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-offset="50"
          >
            At Green Acres Hospital, we take pride in delivering exceptional services to our patients. 
            From check-in to check-out, our dedicated team is committed to providing you with the best 
            experience during every visit to our facility.
          </p>
        </div>

        <div className='services-bottom'>

          <div className='service-card'>
            <div className='service-card-top'>
              <img src={Service3} alt="" />
            </div>
            <div className='service-card-bottom'>
              <h4>3D/4D Ultrasound scan</h4>
              <p>
                Our 3D/4D Ultrasound Scan service offers a more detailed survey of the embryo and fetus 
                as well as evaluation of conditions such as uterine fibroids to provide best anatomical 
                results to improve the doctors ability to make confident and informed decisions.
              </p>
            </div>
          </div>

          <div className='service-card'>
            <div className='service-card-top'>
              <img src={Service1} alt="" />
            </div>
            <div className='service-card-bottom'>
              <h4>Laboratory services</h4>
              <p>
                Our state of the art medical laboratory is a facility dedicated to delivering prompt, thorough 
                and accurate diagnostic services. Our team of highly skilled Medical Laboratory Scientists are 
                devoted to providing excellent care to our patients at all times.
              </p>
            </div>
          </div>

          <div className='service-card'>
            <div className='service-card-top'>
              <img src={Service2} alt="" />
            </div>
            <div className='service-card-bottom'>
              <h4>Obstetrics and Gynaecare clinic service</h4>
              <p>
                The care of women during pregnancy and childbirth and in the diagnosis and treatment of 
                diseases of the female reproductive organs requires expert’s examination and we prioritize 
                on that.
              </p>
            </div>
          </div>

          <div className='service-card'>
            <div className='service-card-top'>
              <img src={Service4} alt="" />
            </div>
            <div className='service-card-bottom'>
              <h4>Surgery</h4>
              <p>
                At Green Acres Hospital, we prioritize patient safety, comfort, personalized care, and 
                comprehensive post-operation support. Our highly skilled surgical team is dedicated to 
                providing excellent surgical procedures and care to ensure a positive experience for every 
                patient.
              </p>
            </div>
          </div>
        </div>
        
        <div className='services-view-all'>
          <Link to="/services">View All &#10230;</Link>
        </div>

      </div>
  )
}