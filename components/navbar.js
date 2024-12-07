import Link from 'next/link'
import React from 'react'
import { useSelector, useDispatch, useStore } from 'react-redux';
import { setIsMenuOpen } from '../ReduxStore/Slice';
import Image from 'next/image';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';


export default function Navbar() {

  const dispatch = useDispatch();
  const { isMenuOpen } = useSelector(state => state.example);

  const openMenu = () => {
    dispatch(setIsMenuOpen(true));
  }

  const closeMenu = () => {
    dispatch(setIsMenuOpen(false));
  }

  const selectNewPage = () => {
    dispatch(setIsMenuOpen(false));
  }

  return (
    <>
        <div className='px-4 py-2 lg:py-4 w-full flex justify-between items-center'>

            <div className="flex items-center space-x-4 text-gray-500">
              {/* Call Link */}
              <Link href="tel:+2348106338579" className="flex items-center space-x-2 text-xs lg:text-sm">
                <FaPhoneAlt />
                <span className='lg:hidden'>(+234)8106338579</span>
                <span className='hidden lg:block'>(+234)8106338579</span>
              </Link>

              {/* Separator */}
              <span>|</span>

              {/* Email Link */}
              <Link href="mailto:info@greenacreshospital.com" className="flex items-center space-x-2 text-xs lg:text-sm">
                <FaEnvelope />
                <span className='lg:hidden'>Send us a mail</span>
                <span className='hidden lg:block'>info@greenacreshospital.com</span>
              </Link>

              {/* Separator */}
              <span className='hidden lg:block'>|</span>

              {/* Address Link */}
              <Link href="https://www.google.com/maps/dir//Green+Acres+Hospital+Abuja+900107+Federal+Capital+Territory/@8.9848868,7.4463498,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x104e0cd701bb6b15:0xbea09bffd4c3b0df" target="_blank" rel="noopener noreferrer" className="hidden lg:flex items-center space-x-2 text-xs lg:text-sm">
                <FaMapMarkerAlt />
                <span>Sunnyvale Homes off Lokogoma express way, Abuja</span>
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-2">
              <Link href="https://www.facebook.com/profile.php?id=100063471673484">
                <Image src="/top4.png" alt="facebook" width={25} height={25} />
              </Link>
              <Link href="https://twitter.com/greenacreshosp?t=5rXgYEQQ3NvQeKbJ1xq-YA&s=09">
                <Image src="/top5.png" alt="twitter" width={25} height={25} />
              </Link>
              <Link href="https://instagram.com/greenacreshospital?igshid=NGExMmI2YTkyZg==">
                <Image src="/top6.png" alt="instagram" width={25} height={25} />
              </Link>
              <Link href="https://www.linkedin.com/in/yinka-olaniyan-706b575b">
                <Image src="/top7.png" alt="linkedin" width={25} height={25} />
              </Link>
            </div>
        </div>

        <header className='flex justify-between items-center py-2 lg:py-4 px-4 lg:px-8 bg-customBlue text-white'>

        <div className='w-auto flex justify-center items-center space-x-3'>
            <Image src={'/new-logo.png'} alt='icon' width={60} height={60} className='w-[60px] lg:w-[80px]'/>
            <h2 className='font-bold text-base'>GREEN ACRES HOSPITAL</h2>
        </div>

        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            stroke-width="1.5" stroke="currentColor" 
            class="w-6 h-6 block lg:hidden"
            onClick={openMenu}
        >
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        
        <ul className={`list-none flex flex-col lg:flex-row justify-center items-center lg:space-x-3 space-y-4 lg:space-y-0 absolute ${isMenuOpen ? "left-0" : "-left-[120%] lg:left-auto"} transition-all top-0 w-full lg:w-auto lg:relative bg-customBlue lg:h-auto h-[100vh] lg:bg-transparent z-40 lg:z-auto`}>
            <li><Link href={"/"} onClick={selectNewPage}>Home</Link></li>
            <li><Link href={"/about"} onClick={selectNewPage}>About</Link></li>
            <li><Link href={"/gallery"} onClick={selectNewPage}>Gallery</Link></li>
            <li><Link href={"/services"} onClick={selectNewPage}>Services</Link></li>
            <li><Link href={"/blog"} onClick={selectNewPage}>Blog</Link></li>
            <li><Link href={"/contact"} onClick={selectNewPage}>Contact</Link></li>
            <li><Link href={"/appointment"} className='lg:hidden border border-white py-2 px-4' onClick={selectNewPage}>Book Appointment</Link></li>

            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            stroke-width="1.5" stroke="currentColor" 
            class="w-6 h-6 lg:hidden block absolute z-50 top-6 right-8"
            onClick={closeMenu}
            >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </ul>
        <Link href={'/appointment'} className='border border-white py-2 px-4 text-white hidden lg:block'>Book Appointment</Link>

        </header>
    </>
  )
}
