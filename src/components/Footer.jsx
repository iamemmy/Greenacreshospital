import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LogoBottom from '../assets/logo.png';
import Icon1 from '../assets/icon1.png';
import Icon2 from '../assets/icon2.png';
import Icon3 from '../assets/icon3.png';
import Icon4 from '../assets/icon4.png';

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div>
                <img src={LogoBottom} alt="" />
            </div>
            <div>
                <h3>Green Acres Hospital</h3>
                <Link to="/about">About Us</Link>
                <Link to="/services">Services</Link>
                <Link to="tel:08106338579">Appointment</Link>
            </div>
            <div>
                <h3>Contact Us</h3>
                <Link to="tel:08106338579">Contact Us</Link>
                <Link to="https://www.facebook.com/profile.php?id=100063471673484">Newsletter</Link>
                <Link to="tel:08106338579">Feedback</Link>
            </div>
            <div>
                <h3>Information</h3>
                <Link to="https://www.facebook.com/profile.php?id=100063471673484">Health & Safety</Link>
                <Link>Accessibility</Link>
                <Link to="/">FAQs</Link>
            </div>
        </div>

        <div className='footer-bottom'>
            <div className='footer-bottom-top'>
                <a href="https://www.linkedin.com/in/yinka-olaniyan-706b575b">
                    <img src={Icon1} alt="" />
                </a>
                <a href="https://instagram.com/greenacreshospital?igshid=NGExMmI2YTkyZg==">
                    <img src={Icon2} alt="" />
                </a>
                <a href="https://youtube.com/@GreenAcres-di6sl">
                    <img src={Icon3} alt="" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100063471673484">
                    <img src={Icon4} alt="" />
                </a>
            </div>
            <div className='footer-bottom-bottom'>
                <div>
                    <p>&copy; Green Acres Hospital 2023. All Rights Reserved.</p>
                    <small>
                        Designed by
                        <Link to="tel:08080856786"> DHTechnology</Link>
                    </small>
                </div>
                <div>
                    <Link>&#9675; Privacy Policy</Link>
                    <Link to="tel:08106338579">&#9675; Bookings  Appointment</Link>
                    <Link to="/services">&#9675; Services</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
