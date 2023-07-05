import React, {useEffect} from 'react'
import Healthcare from '../assets/img6.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Intro() {

    useEffect(() => {
        AOS.init();
    }, []);

  return (
    <div className='intro'>
        <div className='intro-top'>
            <img src={Healthcare} alt="" />
            <h3>
                Welcome To <span>Green Acres Hospital</span>
            </h3>
        </div>
        <div className='intro-about'>
            <h3>We deliver premier and innovative healthcare service</h3>
            <p
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="300"
                data-aos-offset="50"
            >
                A beacon of professionalism, comfort, and cutting-edge technology. Our esteemed clients receive 
                exceptional medical care in a conducive environment. With a focus on personalized treatments and 
                the latest advancements, our dedicated team ensures your well-being and satisfaction. Experience 
                the difference at Green Acres Hospital, where your health is our top priority.
            </p>
        </div>
        <div className='hr'></div>
    </div>
  )
}