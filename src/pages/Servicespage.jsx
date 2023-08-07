import React, {useState, useEffect} from 'react';
import Footer from '../components/Footer';
import Cardimg1 from '../assets/img7.png';
import Cardimg2 from '../assets/img13.png';
import Cardimg3 from '../assets/img9.png';
import Cardimg4 from '../assets/img8.png';
import Cardimg5 from '../assets/img19.png';
import Cardimg6 from '../assets/img20.png';
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
                        <div className='overlay'></div>
                        <img src={Cardimg3} alt="" />
                    </div>
                    <div className='servicespage-card-bottom'>
                        <h4>3D/4D Ultrasound scan</h4>
                        <p>
                            Enhance medical decision-making with our comprehensive 3D/4D Ultrasound Scan, providing 
                            detailed evaluations of embryos, fetuses, and conditions like uterine fibroids for improved 
                            anatomical insights.
                        </p>
                    </div>
                </div>
                <div className='servicespage-card'>
                    <div className='servicespage-card-top'>
                        <div className='overlay'></div>
                        <img src={Cardimg1} alt="" />
                    </div>
                    <div className='servicespage-card-bottom'>
                        <h4>Laboratory services</h4>
                        <p>
                            Experience exceptional diagnostic services at our state-of-the-art medical laboratory. 
                            Our dedicated team of skilled Medical Laboratory Scientists ensures prompt, accurate, and 
                            thorough care for our patients.
                        </p>
                    </div>
                </div>
                <div className='servicespage-card'>
                    <div className='servicespage-card-top'>
                    <div className='overlay'></div>
                        <img src={Cardimg2} alt="" />
                    </div>
                    <div className='servicespage-card-bottom'>
                        <h4>Obstetrics & Gynaecare Clinic</h4>
                        <p>
                            We prioritize expert care for women during pregnancy, childbirth, and the diagnosis/treatment 
                            of reproductive organ diseases. Our specialized services also cover menopause, hormone 
                            issues, contraception, and infertility.
                        </p>
                    </div>
                </div>
                <div className='servicespage-card'>
                    <div className='servicespage-card-top'>
                        <div className='overlay'></div>
                        <img src={Cardimg4} alt="" />
                    </div>
                    <div className='servicespage-card-bottom'>
                        <h4>MULTI SPECIALTY CLINIC</h4>
                        <p>
                            Experience thorough physical examinations in a sterile environment, including vital sign 
                            assessments, consultations with top cardiologist, endocrinologist, pulmonologist, 
                            neurologist, gastroenterologist, paediatrician, oncologist etc and exceptional diagnostic 
                            services.
                        </p>
                    </div>
                </div>
                <div className='servicespage-card'>
                    <div className='servicespage-card-top'>
                        <div className='overlay'></div>
                        <img src={Cardimg5} alt="" />
                    </div>
                    <div className='servicespage-card-bottom'>
                        <h4>SURGERY</h4>
                        <p>
                            Green Acres Hospital: Prioritizing safety, comfort, and personalized care. Our skilled 
                            surgical team ensures excellent procedures and comprehensive post-operation support for 
                            a positive patient experience.
                        </p>
                    </div>
                </div>
                <div className='servicespage-card'>
                    <div className='servicespage-card-top'>
                        <div className='overlay'></div>
                        <img src={Cardimg6} alt="" />
                    </div>
                    <div className='servicespage-card-bottom'>
                        <h4>Cervical Cancer Screening/Colposcopy Clinic</h4>
                        <p>
                            Experience our unique colposcopy practice for women with positive cervical cancer screening results (Pap smear, liquid-based cytology, HPV testing).
                            We offer conservative treatment - LEEP/LLETZ or electrocoagulation  of any such abnormalities detected at colposcopy
                            We also provide HPV vaccination for eligible females.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </React.Fragment>

  )
}
