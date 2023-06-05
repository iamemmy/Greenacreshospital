import React, {useState, useEffect} from 'react';
import Footer from '../components/Footer';
import Cardimg1 from '../assets/img7.png';
import Cardimg2 from '../assets/img13.png';
import Cardimg3 from '../assets/img9.png';
import Cardimg4 from '../assets/img8.png';
// import Cardimg5 from '../assets/img14.jpg';

export default function Servicespage() {

    const [showServices, setShowServices] = useState(false);

    setTimeout(() => {
        setShowServices(true);
    }, 1000)

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

  return (
    <React.Fragment>
        <div className={showServices ? 'servicespage' : 'servicespage delayPage'}>
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
                        <img src={Cardimg1} alt="" />
                    </div>
                    <div className='servicespage-card-bottom'>
                        <h4>Laboratory services</h4>
                        <p>
                            we offer a laboratory  facility that performs laboratory testing on specimens derived from 
                            humans to provide information for diagnosis, prevention or treatment of or impairment of 
                            disease, or for assessment of health.
                        </p>
                    </div>
                </div>
                <div className='servicespage-card'>
                    <div className='servicespage-card-top'>
                        <img src={Cardimg2} alt="" />
                    </div>
                    <div className='servicespage-card-bottom'>
                        <h4>Obstetrics and Gynaecare clinic service</h4>
                        <p>
                            The care of women during pregnancy and childbirth and in the diagnosis and treatment of 
                            diseases of the female reproductive organs requires expert’s examination and we prioritize 
                            on that. we also specializes in other women’s health issues, such as menopause, hormone problems, 
                            contraception (birth control), and infertility.
                        </p>
                    </div>
                </div>
                <div className='servicespage-card'>
                    <div className='servicespage-card-top'>
                        <img src={Cardimg4} alt="" />
                    </div>
                    <div className='servicespage-card-bottom'>
                        <h4>MULTI SPECIALTY CLINIC</h4>
                        <p>
                            we offer a thorough physical examination; including  variety of tests depending on the 
                            age and sex and health of the person.
                        </p>
                    </div>
                </div>
                <div className='servicespage-card'>
                    <div className='servicespage-card-top'>
                        <img src={Cardimg4} alt="" />
                    </div>
                    <div className='servicespage-card-bottom'>
                        <h4>SURGERY</h4>
                        <p>
                            The care of women during pregnancy and childbirth and in the diagnosis and treatment of 
                            diseases of the female reproductive organs requires expert’s examination and we prioritize 
                            on that. we also specializes in other women’s health issues, such as menopause, hormone problems, 
                            contraception (birth control), and infertility.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </React.Fragment>

  )
}
