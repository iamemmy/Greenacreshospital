import React, {useState, useEffect} from 'react';
import Navbar from '../components/navbar';
import CustomMap from '../components/customMap';
import Footer from '../components/footer';
import Head from 'next/head';
import Loader from '@/components/Loader';

export default function Contact() {

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
        <Head>
            <title>Green acres hospital - Contact us</title>
        </Head>
        <Navbar />
        <main className='py-10 px-8'>
            <h3 className="text-xl lg:text-3xl text-customBlue font-extrabold mb-2 lg:mb-4">CONTACT US</h3>
            <p className='text-sm lg:text-base mb-8 lg:mb-12'>We&apos;re here to assist you. Contact Green Acres Hospital for any inquiries, appointment scheduling, or to address your healthcare needs. Our friendly team is ready to provide prompt and helpful assistance.</p>
            <div className='w-full flex flex-col md:flex-row lg:flex-row justify-between items-start gap-4'>
                <div className="w-full md:w-1/2 lg:w-1/2">
                    <form className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
                        <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-semibold text-sm lg:text-base">Name</label>
                        <input type="text" id="name" name="name" className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-blue-500" />
                        </div>
                        <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700 font-semibold text-sm lg:text-base">Phone Number</label>
                        <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-blue-500" />
                        </div>
                        <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-semibold text-sm lg:text-base">Message</label>
                        <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 rounded-lg resize-none focus:outline-none focus:bg-white focus:border-blue-500"></textarea>
                        </div>
                        <button type="submit" className="w-full px-4 py-2 text-white bg-customBlue">Submit</button>
                    </form>
                </div>
                <div className='w-full md:w-1/2 lg:1/2'>
                    <CustomMap /> {/* Use the renamed component */}
                </div>
            </div>
        </main>
        <Footer />
    </div>
  )
}
