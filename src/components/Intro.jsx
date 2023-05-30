import React from 'react'
import Healthcare from '../assets/img6.png';

export default function Intro() {
  return (
    <div className='intro'>
        <div className='intro-top'>
            <img src={Healthcare} alt="" />
            <h3>
                We deliver <span>premier and innovative</span> healthcare service
            </h3>
        </div>
        <div className='intro-bottom'>
            <div className='bottom-1'>
                <h4>Emergency Case</h4>
                <p>
                    Our Emergency and general Outpatient Department is staffed 24 hours a day, 365 days a year by experienced physicians and
                    qualified nurses. Our state-of-the-art department and caring staff is prepared to handle a wide range
                    of problems from minor illnesses to life-threatening events. We work toward prompt evaluation, with
                    appropriate and safe treatment, of your varied concerns.
                </p>
            </div>
            <div className='bottom-2'>
                <h4>Service Hours</h4>
                <table>
                    <tr>
                        <td>Gynaecology</td>
                        <td>Mon - Sat</td>
                        <td>9am - 9pm</td>
                    </tr>
                    <tr>
                        <td>Antenatal</td>
                        <td>Sat</td>
                        <td>10am - 12pm</td>
                    </tr>
                    <tr>
                        <td>Laboratory services</td>
                        <td>Mon - Fri</td>
                        <td>8am - 8pm</td>
                    </tr>
                    <tr>
                        <td>Services</td>
                        <td>Mon - Fri</td>
                        <td>8am - 8pm</td>
                    </tr>
                    <tr>
                        <td>Services</td>
                        <td>Mon - Fri</td>
                        <td>8am - 8pm</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  )
}