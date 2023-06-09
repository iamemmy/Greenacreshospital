import React from 'react';
import MD from '../assets/md.jpg';
import Paragraph1 from './Paragraph1';

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
    </div>
  )
}