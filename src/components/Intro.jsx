import React, {useEffect} from 'react'
import Healthcare from '../assets/img6.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Intro() {

    useEffect(() => {
        AOS.init();
    }, []);

  return (
    <div className='intro'>
        <div className='intro-top'>
            <img src={Healthcare} alt="" />
            <h3
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-offset="50"
            >
                Welcome To <span>Green Acres Hospital</span>
            </h3>
        </div>
        <div className='intro-about'>
            <h3>We deliver premier and innovative healthcare service</h3>
            <p>
                We pride ourselves in our professionalism, delivered in a conducive and ambient environment, supported by 
                cutting-edge technology to provide the best possible medical care to our esteemed clients. We consider it a 
                privilege to be entrusted with the confidence of our numerous clients and will go the extra mile to deliver 
                personalized warm and friendly professional service.
            </p>
        </div>
        <div className='intro-bottom'>
            <div className='bottom-1'>
                <h4
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    data-aos-offset="50"
                >Emergency Case</h4>
                <p
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                    data-aos-offset="50"
                >
                    Our Emergency and general Outpatient Department is staffed 24 hours a day, 365 days a year by experienced physicians and
                    qualified nurses. Our state-of-the-art department and caring staff is prepared to handle a wide range
                    of problems from minor illnesses to life-threatening events. We work toward prompt evaluation, with
                    appropriate and safe treatment, of your varied concerns.
                </p>
            </div>
            <div className='bottom-2'>
                <h4
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    data-aos-offset="50"
                >Service Hours</h4>
                <table
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                    data-aos-offset="50"
                >
                    <tr>
                        <td>Gynaecology</td>
                        <td>Mon - Sat</td>
                        <td>11am - 2pm</td>
                    </tr>
                    <tr>
                        <td>Antenatal</td>
                        <td>Sat</td>
                        <td>8am - 5pm</td>
                    </tr>
                    <tr>
                        <td>Laboratory services</td>
                        <td>Mon - Fri</td>
                        <td>8am - 8pm</td>
                    </tr>
                    <tr>
                        <td>Laboratory services</td>
                        <td>Sat</td>
                        <td>9am - 6pm</td>
                    </tr>
                    <tr>
                        <td>Laboratory services</td>
                        <td>Sun</td>
                        <td>12pm - 4pm</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  )
}