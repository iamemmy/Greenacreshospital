import React from 'react';
import MD from '../assets/md.jpg';

export default function Manager() {
  return (
    <div className='manager'>
        <h3>Meet Our MD</h3>
        <div className='manager-content'>
            <div className='manager-top'>
                <img src={MD} alt="" />
            </div>
            <div className='manager-bottom'>
                <p> <span>Doctor Lorem Pixel </span>
                    we offer a laboratory  facility that performs laboratory testing on specimens derived from 
                    humans to provide information for diagnosis, prevention or treatment of or impairment of 
                    disease, or for assessment of health. <br /> <br />
                    we offer a laboratory  facility that performs laboratory testing on specimens derived from 
                    humans to provide information for diagnosis, prevention or treatment of or impairment of 
                    disease, or for assessment of health. <br /> <br />
                    we offer a laboratory  facility that performs laboratory testing on specimens derived from 
                    humans to provide information for diagnosis, prevention or treatment of or impairment of 
                    disease, or for assessment of health.
                </p>
            </div>
        </div>
    </div>
  )
}