import React, {useState, useEffect} from 'react';
import Footer from '../components/Footer';
import Cardimg1 from '../assets/img7.png';
import Cardimg2 from '../assets/img13.png';
import Cardimg3 from '../assets/img9.png';
import Cardimg4 from '../assets/img8.png';
import Cardimg5 from '../assets/img19.jpg';
import Cardimg6 from '../assets/img20.jpg';
// import Cardimg5 from '../assets/img14.jpg';

export default function Servicespage() {

    const [showServices, setShowServices] = useState(false);

    setTimeout(() => {
        setShowServices(true);
    }, 1000)

    useEffect(() => {
        window.scroll(1, 0);
    }, []);

  return (
    <React.Fragment>
        <div className={showServices ? 'servicespage' : 'servicespage delayPage'}>
            <div className='servicespage-top'>
                <h3>Our Services</h3>
                <p>
                    At Green Acres Hospital, we take pride in delivering exceptional services to our patients. 
                    From check-in to check-out, our dedicated team is committed to providing you with the best 
                    experience during every visit to our facility.
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
                            Our 3D/4D Ultrasound Scan service offers a more detailed survey of the embryo and fetus 
                            as well as evaluation of conditions such as uterine fibroids to provide best anatomical 
                            results to improve the doctors ability to make confident and informed decisions
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
                            Our state of the art medical laboratory is a facility dedicated to delivering prompt, thorough 
                            and accurate diagnostic services. Our team of highly skilled Medical Laboratory Scientists are 
                            devoted to delivering excellent care to our patients at all times.
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
                            We provide comprehensive physical examinations including vital signs, consultation with 
                            the finest Medical Officers, and outstanding diagnostics services in a sterile and conducive 
                            environment.
                        </p>
                    </div>
                </div>
                <div className='servicespage-card'>
                    <div className='servicespage-card-top'>
                        <img src={Cardimg5} alt="" />
                    </div>
                    <div className='servicespage-card-bottom'>
                        <h4>SURGERY</h4>
                        <p>
                            At Green Acres Hospital, we prioritize patient safety, comfort, personalized care, and 
                            comprehensive post-operation support. Our highly skilled surgical team is dedicated to 
                            providing excellent surgical procedures and care to ensure a positive experience for every 
                            patient.
                        </p>
                    </div>
                </div>
                <div className='servicespage-card'>
                    <div className='servicespage-card-top'>
                        <img src={Cardimg6} alt="" />
                    </div>
                    <div className='servicespage-card-bottom'>
                        <h4>Cervical Cancer Screening/Colposcopy Clinic</h4>
                        <p>
                            Our unique colposcopy practice offers evaluation for women who have had a positive cervical 
                            cancer screening test, either by Pap smear, liquid based cytology or Human Papilloma Virus 
                            testing. Colposcopy offers a detailed evaluation of the cervix, allowing for samples to be 
                            taken from any abnormal areas that may be seen during the colposcopic evaluation. <br />
                            HPV vaccination is also available for eligible females.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </React.Fragment>

  )
}
