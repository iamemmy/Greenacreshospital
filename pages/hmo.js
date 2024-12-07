import React, {useState, useEffect} from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Head from 'next/head';
import Loader from '@/components/Loader';

export default function Hmo() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
        setLoading(false);
        }, 1000);
    
        return () => clearTimeout(timer);
    }, []);

    const hmoList = [
        "AXAMANSARD",
        "RELIANCE",
        "TOTAL HEALTH TRUST",
        "VENUS",
        "HYGEIA",
        "BASTION",
        "NNPC",
        "DOT",
        "HALLMARK",
        "KENNEDIA",
        "LEADWAY",
        "MB & O",
        "MITERAL",
        "NEM HEALTH",
        "PROHEALTH",
        "ECOWAS COMMISSION",
        "ECOWAS COURT OF JUSTICE"
    ]

    if (loading) {
        return <Loader />
    }

  return (
    <div>
        <Head>
            <title>Green acres hospital - HMO list</title>
        </Head>
        <Navbar />
            <div className='py-10 px-8  w-full'>
                <h3 className="text-xl lg:text-3xl text-customBlue font-extrabold mb-6 lg:mb-10">Our HMO List</h3>
                <p className='text-sm lg:text-base mb-8'>
                    At Green Acres Hospital​, we pride ourselves on providing exceptional service to our patient. From check-in to check-out, our dedicated team is here to make sure you have a good experience whenever you visit our hospital, we are passionate about our patients. we are HMO Accredited, Below is the list of the HMOs in our Hospital
                </p>
                <ul className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                {hmoList.map((item, index) => (
                    <li key={index} className='bg-blue-100 text-black px-4 py-3 rounded-md mb-2 w-full'>- {item}</li>
                ))}
                </ul>
            </div>
        <Footer />
    </div>
  )
}
