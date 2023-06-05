import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Accredit() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='accredit'>
        <h3
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="200"
          data-aos-offset="50"
        >Green Acres Hospital: <span>We are</span> HMO <span> Accredited </span></h3>
        <Link
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300"
          data-aos-offset="50"
          to="hmo">Check HMO List</Link>
    </div>
  )
}
