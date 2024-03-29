import React from 'react';
import Send from '../assets/img11.png';
import Image from '../assets/img1.png';

export default function Appointment() {
  return (
    <div className='appointment-2'>
      <div className='appointment-top'>
        <h3>Book An Appointment</h3>
        <p>
          Are you new to Green Acres Hospital and looking for a doctor? Have you been to Green Acres Hospital 
          but need to see a new specialist or primary care doctor? If yes, submit the form below to get started.
          <br /><br />
          If you are already a patient with us and would like to schedule an appointment with a doctor you have 
          already seen, please contact your doctor’s office directly.
        </p>
        <form 
          target="_blank"
          action="https://formsubmit.co/greenacreshospital@gmail.com" method="POST"
          className='appointment-form'
        >
          <div>
            <label>
              First Name:
              <input type="text" name="firstname" />
            </label>
            <label>
              Last Name:
              <input type="text" name="lastname" />
            </label>
            <label>
              Phone Number:
              <input type="number" name="phone" />
            </label>
            <label>
              Choose Date:
              <input type="date" name="date" />
            </label>
            <label>
              Preferred Time:
              <input type="text" name="time" />
            </label>
            <label>
              Preferred Professional:
              <select id="professional" name="professional">
                <option value="general_practitioner">General Practitioner</option>
                <option value="gynaecologist">Gynaecologist</option>
                <option value="cardiologist">Cardiologist</option>
                <option value="endocrinologist">Endocrinologist</option>
                <option value="neurologist">Neurologist</option>
                <option value="surgeon">Surgeon</option>
              </select>
            </label>
          </div>
          <textarea cols="30" rows="7" name="message" placeholder='Enter additional info'></textarea>
          <button type="submit"><img src={Send} alt="" />SEND</button>
        </form>
      </div>
      <div className='appointment-bottom'>
        <h3>Visiting</h3>
        <img src={Image} alt="" />
        <div>
          <p>&#10687; Visiting hours & Policy</p>
        </div>
      </div>
    </div>
  );
}