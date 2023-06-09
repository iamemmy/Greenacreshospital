import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'

export default function About() {
  const [showAbout, setShowAbout] = useState(false);

  setTimeout(() => {
    setShowAbout(true);
  }, 1000)

  useEffect(() => {
    window.scroll(1, 0);
  }, []);

  return (
    <React.Fragment>
    <div className={showAbout ? 'about' : 'about delayPage'}>
        <h3>ABOUT GREEN ACRES HOSPITAL</h3>
        <p>
          Located in Sunnyvale Homes Estate, Lokogoma, Abuja, Green Acres Hospital is a modern multi-specialty medical 
          facility surrounded by luscious green scenery. <br /> <br />

          Green Acres Hospital began as an exclusive Out-Patient Obstetrics & Gynaecology practice called Gynaecare 
          Clinic incorporated in 2011, leveraging on the then 20+ years of experience of founder and Medical Director, 
          Dr. Olayinka Olaniyan as an Obstetrician & Gynaecologist. The practice soon grew to become Green Acres Hospital 
          in 2016, moving to the purpose-built multi-disciplinary practice that it is today, providing general and 
          specialized care in various medical specialties, in addition to the gynecology practice. <br /> <br /> 

          The hospital has over the years catered to the Lokogoma area and beyond with clients within and outside 
          Nigeria, the hospital has proven to be a go-to facility for excellent healthcare. <br /> <br />

          We pride ourselves in our professionalism, delivered in a conducive and ambient environment, supported by 
          cutting-edge technology to provide the best possible medical care to our esteemed clients. We consider it a 
          privilege to be entrusted with the confidence of our numerous clients and will go the extra mile to deliver 
          personalized warm and friendly professional service. <br /> <br />

          We offer care on a private, individual, and family basis, as well as service to clients of various Health 
          Maintenance Organizations (HMOs). We are able to offer specialist consultant services through our network 
          of consultants across a wide variety of medical specialties. Where necessary, we utilize modern technology 
          to deliver care via telemedicine by linking with various specialists, both locally and internationally. <br /> <br />

          Welcome to Green Acres Hospital where we give “our best always”
        </p>
        <div className='about-bottom'>
          <div>
            <h4>Our Vission</h4>
            <p>
              Green Acres Hospital will provide an unparalleled experience in health care delivery.
            </p>
          </div>
          <div>
            <h4>Our Mission</h4>
            <p>
              To inspire hope and contribute to health and well-being by providing the best care to every patient 
              through integrated clinical practice, education and research.
            </p>
          </div>
        </div>
      </div>
    <Footer />
    </React.Fragment>
  )
}