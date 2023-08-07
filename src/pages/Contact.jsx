import React from 'react'
import Footer from '../components/Footer'
import CustomMap from '../components/CustomMap'

export default function Contact() {
  return (
    <>
      <div className='contact-intro'>
        <h3>CONTACT US</h3>
        <p>
          We're here to assist you. Contact Green Acres Hospital for any inquiries, appointment scheduling, or to 
          address your healthcare needs. Our friendly team is ready to provide prompt and helpful assistance.
        </p>
      </div>

      <div>
        {/* Form */}
        <div className='contact-main'>

          <form className='contact-form' target="_blank"
          action="https://formsubmit.co/greenacreshospital@gmail.com" method="POST">
            <div>
              <input type="text" name="fullname" placeholder="Full name" />
              <input type="number" name="phonenumber" placeholder="Phone number" />
              <input type="email" name="email" placeholder="Email address" />
              <input type="date" name="date" />
            </div>
            <textarea name="message" id="" cols="30" rows="5" placeholder="Enter other message"></textarea>
            <button type='submit'>Submit</button>
          </form>

          <div className='contact-map'>
            <CustomMap /> {/* Use the renamed component */}
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}