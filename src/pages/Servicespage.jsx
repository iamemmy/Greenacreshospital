import React from 'react'
import Footer from '../components/Footer';
import Cardimg1 from '../assets/img7.png';
import Cardimg2 from '../assets/img8.png';
import Cardimg3 from '../assets/img9.png';

export default function Servicespage() {
  return (
    <>
        <div className='servicespage'>
            <div className='servicespage-top'>
                <h3>Our Services</h3>
                <p>
                    At Green Acres Hospital ​, we pride ourselves on providing exceptional service to our patient. 
                    From check-in to check-out, our dedicated team is here to make sure you have a good experience 
                    whenever you visit our hospital, we are passionate about our patients.
                </p>
            </div>
            <div className='servicespage-bottom'>
                <div className='servicespage-card'>
                    <div className='servicespage-card-top'>
                        <img src={Cardimg3} alt="" />
                    </div>
                    <div className='servicespage-card-bottom'>
                        <h4>3D/4D Ultrasound scan</h4>
                        <p>
                            Like regular ultrasounds, 3D and 4D ultrasounds use sound waves to create an image of your 
                            baby in your womb. What's different is that 3D ultrasounds create a three-dimensional image 
                            of your baby, while 4D ultrasounds create a live video effect, like a movie. You can watch 
                            your baby smile or yawn.
                        </p>
                    </div>
                </div>
                <div className='servicespage-card'>
                    <div className='servicespage-card-top'>
                        <img src={Cardimg2} alt="" />
                    </div>
                    <div className='servicespage-card-bottom'>
                        <h4>3D/4D Ultrasound scan</h4>
                        <p>
                            Like regular ultrasounds, 3D and 4D ultrasounds use sound waves to create an image of your 
                            baby in your womb. What's different is that 3D ultrasounds create a three-dimensional image 
                            of your baby, while 4D ultrasounds create a live video effect, like a movie. You can watch 
                            your baby smile or yawn.
                        </p>
                    </div>
                </div>
                <div className='servicespage-card'>
                    <div className='servicespage-card-top'>
                        <img src={Cardimg1} alt="" />
                    </div>
                    <div className='servicespage-card-bottom'>
                        <h4>3D/4D Ultrasound scan</h4>
                        <p>
                            Like regular ultrasounds, 3D and 4D ultrasounds use sound waves to create an image of your 
                            baby in your womb. What's different is that 3D ultrasounds create a three-dimensional image 
                            of your baby, while 4D ultrasounds create a live video effect, like a movie. You can watch 
                            your baby smile or yawn.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}
