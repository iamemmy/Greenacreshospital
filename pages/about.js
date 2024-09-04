import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';


export default function About() {
  return (
    <div>
        <Head>
            <title>Green acres hospital - About us</title>
        </Head>
        <Navbar />
        <main className='py-10 px-6 lg:px-24'>
            <h3 className="text-xl lg:text-3xl text-customBlue font-extrabold mb-6 lg:mb-10">ABOUT GREEN ACRES HOSPITAL</h3>
            <p className='text-sm lg:text-base'>
                Located in Sunnyvale Homes Estate, Lokogoma, Abuja, Green Acres Hospital is a modern multi-specialty medical facility surrounded by luscious green scenery.

                Green Acres Hospital began as an exclusive Out-Patient Obstetrics & Gynaecology practice called Gynaecare Clinic incorporated in 2011, leveraging on the then 20+ years of experience of founder and Medical Director, Dr. Olayinka Olaniyan as an Obstetrician & Gynaecologist. The practice soon grew to become Green Acres Hospital in 2016, moving to the purpose-built multi-disciplinary practice that it is today, providing general and specialized care in various medical specialties, in addition to the gynecology practice.

                The hospital has over the years catered to the Lokogoma area and beyond with clients within and outside Nigeria, the hospital has proven to be a go-to facility for excellent healthcare.

                We pride ourselves in our professionalism, delivered in a conducive and ambient environment, supported by cutting-edge technology to provide the best possible medical care to our esteemed clients. We consider it a privilege to be entrusted with the confidence of our numerous clients and will go the extra mile to deliver personalized warm and friendly professional service.

                We offer care on a private, individual, and family basis, as well as service to clients of various Health Maintenance Organizations (HMOs). We are able to offer specialist consultant services through our network of consultants across a wide variety of medical specialties. Where necessary, we utilize modern technology to deliver care via telemedicine by linking with various specialists, both locally and internationally.

                Welcome to Green Acres Hospital where we give “our best always”
            </p>

            <div className='w-full flex flex-col md:flex-row lg:flex-row justify-between items-start mt-14 gap-4 space-y-4 lg:space-y-0 mb-6'>
                <div className='w-full md:w-1/3 lg:w-1/3 flex flex-col justify-center items-start'>
                    <h3 className="text-xl lg:text-3xl text-customBlue font-bold mb-8">Our Mission</h3>
                    <p className='text-sm lg:text-base'>To inspire hope and contribute to health and well-being by providing the best care to every patient through integrated clinical practice, education and research.</p>
                </div>
                <div className='w-full md:w-1/3 lg:w-1/3 flex flex-col justify-center items-start'>
                    <h3 className="text-xl lg:text-3xl text-customBlue font-bold mb-8">Our vision</h3>
                    <p className='text-sm lg:text-base'>Green Acres Hospital will provide an unparalleled experience in health care delivery.</p>
                </div>
                <div className='w-full md:w-1/3 lg:w-1/3 flex flex-col justify-center items-start'>
                    <h3 className="text-xl lg:text-3xl text-customBlue font-bold mb-8">Our Core Values</h3>
                    <ul className='text-sm lg:text-base'>
                        <li>- Care</li>
                        <li>- Compassion</li>
                        <li>- Communication</li>
                        <li>- Courage</li>
                        <li>- Commitment</li>
                    </ul>
                </div>
            </div>

            <div>
            <h3 className="text-xl lg:text-3xl text-customBlue font-bold mb-8">Meet Our MD</h3>
            <div className='w-full flex flex-col md:flex-row lg:flex-row justify-start items-center gap-4'>
                <div className='w-full md:w-1/4 lg:w-1/4'>
                    <div className='w-[160px] h-[160px] overflow-hidden rounded-full border-2 border-customBlue'>
                        <Image src={'/md.jpg'} width={120} height={120} alt='Image' className='w-full h-full' />
                    </div>
                </div>
                <div className='w-full md:3/4 lg:w-3/4'>
                    <p className='text-sm lg:text-base'>
                    Dr. Yinka Olaniyan is an Obstetrician and Gynaecologist. He is currently MD/CEO of Green Acres Hospital & Gynaecare Clinic in Abuja. He is also visiting consultant at National Hospital Abuja. Dr. Olaniyan, among other things, received his basic medical degree (MBBS) from the University of Lagos in 1983 and obtained a postgraduate fellowship from the West African College of Surgeons (FWACS Obstetrics & Gynaecology) in 1998. He also holds a Post-Graduate Diploma in Reproductive Medicine and Biology from the University of Geneva (2000). He undertook a Basic Colposcopy Training at the Geneva University Hospital.

                    He is passionate about cancer prevention in belief that prevention holds the key to eradication of cancer especially in developing countries. His research interests focus on identifying the determinants in the aetiology of cervical cancer and development of its screening modalities.
                    </p>
                </div>
            </div>
            </div>

            <div className='w-full flex justify-end items-center mt-10'>
                <div className='bg-customBlue px-3 py-2 rounded-md'>
                    <Link href="https://docs.google.com/document/d/16ETUjhmVkXcobaL8Oi-4s-UNO2zOoEB7/edit?usp=sharing&ouid=110952997169698609378&rtpof=true&sd=true" className='text-white'>View Portfolio</Link>
                </div>
            </div>
        </main>
        <Footer />
    </div>
  )
}
