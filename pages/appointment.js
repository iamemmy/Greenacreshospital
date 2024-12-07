import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Loader from '@/components/Loader';

const AppointmentPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
        setLoading(false);
        }, 1000);
    
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />
  }

  return (
    <div>
        <Navbar />
        <div className="container mx-auto px-8 py-10">
            <h3 className="text-xl lg:text-3xl text-customBlue font-extrabold mb-10 text-start lg:text-center">Book an Appointment</h3>
            <form
              className="max-w-lg mx-auto"
              target="_blank"
              action="https://formsubmit.co/greenacreshospital@gmail.com" method="POST"
            >
                <div className="mb-4">
                <label htmlFor="fullName" className="block mb-2">Full Name</label>
                <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required />
                </div>
                <div className="mb-4">
                <label htmlFor="phoneNumber" className="block mb-2">Phone Number</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required />
                </div>
                <div className="mb-4">
                <label htmlFor="message" className="block mb-2">Message (Optional)</label>
                <textarea id="message" name="message" rows="4" placeholder="Enter your message" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-customBlue text-white py-2 rounded-md transition duration-300">Book Appointment</button>
            </form>
        </div>
        <Footer />
    </div>
  );
};

export default AppointmentPage;
