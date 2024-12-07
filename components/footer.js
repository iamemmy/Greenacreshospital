import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className='px-8 py-10 w-full flex flex-col justify-between items-center bg-customBlue text-white'>
        <div className='w-full flex flex-col lg:flex-row pb-10 lg:pb-0 justify-center items-center gap-4'>
            <div className='w-full md:w-1/4 lg:w-1/4 flex justify-center items-center'>
                <Image width={120} height={120} className='w-[160px]' src={'/new-logo.png'} alt="" />
            </div>
            <div className='w-full md:w-1/4 lg:w-1/4 flex flex-col justify-start items-center'>
                <h3 className='text-lg lg:text-xl font-bold'>Green Acres Hospital</h3>
                <Link className='text-sm lg:text-base' href="/about">About Us</Link>
                <Link className='text-sm lg:text-base' href="/services">Services</Link>
                <Link className='text-sm lg:text-base' href="tel:08106338579">Appointment</Link>
            </div>
            <div className='w-full md:w-1/4 lg:w-1/4 flex flex-col justify-start items-center'>
                <h3 className='text-lg lg:text-xl font-bold'>Contact Us</h3>
                <Link className='text-sm lg:text-base' href="tel:08106338579">Contact Us</Link>
                <Link className='text-sm lg:text-base' href="https://www.facebook.com/profile.php?id=100063471673484">Newsletter</Link>
                <Link className='text-sm lg:text-base' href="tel:08106338579">Feedback</Link>
            </div>
            <div className='w-full md:w-1/4 lg:w-1/4 flex flex-col justify-start items-center'>
                <h3 className='text-lg lg:text-xl font-bold'>Information</h3>
                <Link className='text-sm lg:text-base' href="https://www.facebook.com/profile.php?id=100063471673484">Health & Safety</Link>
                <p className='text-sm lg:text-base'>Accessibility</p>
                <p className='text-sm lg:text-base'>FAQs</p>
            </div>
        </div>

        <div className='w-full py-6 border-t border-white'>
            <div className='w-full px-6 flex justify-center lg:justify-start items-center space-x-6 mb-8'>
                <Link href="https://www.linkedin.com/in/yinka-olaniyan-706b575b">
                    <Image width={60} height={60} className='w-[30px] lg:w-[30px]' src={"/icon1.png"} alt="" />
                </Link>

                <Link href="https://instagram.com/greenacreshospital?igshid=NGExMmI2YTkyZg==">
                    <Image width={60} height={60} className='w-[30px] lg:w-[30px]' src={"/icon2.png"} alt="" />
                </Link>

                <Link href="https://youtube.com/@GreenAcres-di6sl">
                    <Image width={60} height={60} className='w-[30px] lg:w-[30px]' src={"/icon3.png"} alt="" />
                </Link>

                <Link href="https://www.facebook.com/profile.php?id=100063471673484">
                    <Image width={60} height={60} className='w-[30px] lg:w-[30px]' src={"/icon4.png"} alt="" />
                </Link>
            </div>

            <div className='w-full flex flex-col lg:flex-row justify-between items-start px-6'>
                <div className='flex flex-col justify-center items-start gap-3 mb-8 lg:mb-0'>
                    <p className='text-sm lg:text-base'>&copy; Green Acres Hospital 2023. All Rights Reserved.</p>
                    <p className='text-sm lg:text-base'>
                        Designed by
                        <Link href="tel:08080856786" className='text-blue-200'> Code Revolution</Link>
                    </p>
                </div>
                <div className='flex justify-center items-center space-x-3'>
                    <p className='text-xs lg:text-sm'>&#9675; Privacy Policy</p>
                    <Link className='text-xs lg:text-sm' href="tel:08106338579">&#9675; Bookings  Appointment</Link>
                    <Link className='text-xs lg:text-sm' href="/services">&#9675; Services</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
