import Link from 'next/link'
import React from 'react'
import { useSelector, useDispatch, useStore } from 'react-redux';
import { setIsMenuOpen } from '../ReduxStore/Slice';
import Image from 'next/image';


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
        <div className='p-4 w-full flex justify-between items-center'>
            <div className="flex flex-wrap justify-start gap-2">
                <div className='w-auto flex justify-center items-center space-x-1 lg:space-x-2'>
                <Image src={"/top1.png"} width={50} height={50} className='w-[20px] lg:w-[30px]' alt="phone" />
                <p className='text-xs lg:text-base'>(+234)8106338579</p>
                </div>

                <div className='w-auto flex justify-center items-center space-x-2'>
                <Image src={"/top2.png"} width={50} height={50} className='w-[20px] lg:w-[30px]' alt="mail" />
                <p className='text-xs lg:text-base'>info@greenacreshospital.com</p>
                </div>

                <div className='w-auto flex justify-center items-center space-x-2'>
                <Image src={"/top3.png"} width={50} height={50} className='w-[20px] lg:w-[30px]' alt="Location" />
                <p className='text-xs lg:text-base'>Sunnyvale Homes off Lokogoma express way, Abuja</p>
                </div>

            </div>
            <div className="w-auto hidden lg:flex justify-center items-center space-x-2">
              <Link href="https://www.facebook.com/profile.php?id=100063471673484">
                <Image src={"/top4.png"} alt='icon' width={60} height={60} className='w-[30px]' />
              </Link>
              <Link href="https://twitter.com/greenacreshosp?t=5rXgYEQQ3NvQeKbJ1xq-YA&s=09">
                <Image src={"/top5.png"} alt='icon' width={60} height={60} className='w-[30px]' />
              </Link>
              <Link href="https://instagram.com/greenacreshospital?igshid=NGExMmI2YTkyZg==">
                <Image src={"/top6.png"} alt='icon' width={60} height={60} className='w-[30px]' />
              </Link>
              <Link href="https://www.linkedin.com/in/yinka-olaniyan-706b575b">
                <Image src={"/top7.png"} alt='icon' width={60} height={60} className='w-[30px]' />
              </Link>
            </div>
        </div>

        <header className='flex justify-between items-center py-4 px-4 lg:px-8 bg-customBlue text-white'>

        <div className='w-auto flex justify-center items-center space-x-3'>
            <Image src={'/logo.png'} alt='icon' width={60} height={60} className='w-[60px] lg:w-[80px]'/>
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
