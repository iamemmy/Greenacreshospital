import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Emergency() {
  return (
    <div className='intro-bottom'>
            <div className='bottom-1'>
                <h4
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="350"
                    data-aos-offset="50"
                >Emergency Case</h4>
                <p
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="400"
                    data-aos-offset="50"
                >
                    Our Emergency and general Outpatient Department is staffed 24 hours a day, 365 days a year by experienced physicians and
                    qualified nurses. Our state-of-the-art department and caring staff is prepared to handle a wide range
                    of problems from minor illnesses to life-threatening events. We work toward prompt evaluation, with
                    appropriate and safe treatment, of your varied concerns.
                </p>
            </div>
            <div className='bottom-2'>
                <h4>Emergency Hotline</h4>
                <h3>08106338579</h3>
                <p>
                    We provide 24/7 customer support. Please feel free to contact us for emergency case.
                </p>
            </div>
        </div>
  )
}