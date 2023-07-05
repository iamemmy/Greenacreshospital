import React from 'react';
import Image from '../assets/hero1.jpg';
import { Link } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa';

export default function Homeabout() {
  return (
    <div className='homeabout'>
        <div className='homeabout-top'>
            <img src={Image} />
        </div>
        <div className='homeabout-bottom'>
            <h3>Who we are</h3>
            <p>
                We are a team at Green Acres Hospital driven by professionalism, delivering outstanding medical 
                care in a conducive and ambient environment. With cutting-edge technology, we strive to provide 
                the best possible care to our esteemed clients. We consider it a privilege to earn the trust of 
                our numerous clients and are committed to delivering personalized, warm, and friendly professional 
                service that goes the extra mile.
            </p>
            <Link to="tel:08106338579">
                Reach us <FaPhone />
            </Link>
        </div>
    </div>
  )
}