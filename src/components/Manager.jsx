import React from 'react';
import MD from '../assets/md.jpg';
import Paragraph1 from './Paragraph1';
import { Link } from 'react-router-dom';
import Portfolio from '../assets/portfolio.png';

export default function Manager() {
  return (
    <div className='manager'>
        <h3>Meet Our MD</h3>
        <div className='manager-content'>
            <div className='manager-top'>
                <img src={MD} alt="" />
                <div className='manager-title'>
                <h4>Dr. YINKA OLANIYAN</h4>
                <p>MBBS, FWACS, FUICC, DNCI, PDdRMB</p>
            </div>
            </div>
            <Paragraph1 />
        </div>
        <div className='md-portfolio'>
          <div className='md-portfolio-btn'>
            <Link to="https://docs.google.com/document/d/16ETUjhmVkXcobaL8Oi-4s-UNO2zOoEB7/edit?usp=sharing&ouid=110952997169698609378&rtpof=true&sd=true">View Portfolio</Link>
            <img src={Portfolio} />
          </div>
        </div>
    </div>
  )
}