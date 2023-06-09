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
  )
}