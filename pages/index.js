import React from 'react'
import Navbar from '../components/navbar'
import Image from 'next/image'
import Link from 'next/link';
import { MapPin, Award, Star } from 'react-feather';
import Footer from '../components/footer';
import Head from 'next/head';

export default function Index() {

  const attrImg = ['/hero1.jpg', '/rev2.jpeg', '/rev.jpeg'];
  const dataAttribute = [
    { text: "Excellent Location", icon: <MapPin /> },
    { text: "Quality Service", icon: <Award /> },
    { text: "Positive Reviews", icon: <Star /> },
  ];

  const cardsData = [
    {
      id: 1,
      image: "/11.png",
      title: "3D/4D ULTRASOUND SCAN",
      text: "Enhanced Ultrasound Imaging: Detailed 3D/4D scans for a remarkable experience.",
    },
    {
      id: 2,
      image: "/22.png",
      title: "LABORATORY SERVICE",
      text: "Precise Laboratory Services: Accurate diagnostics for optimal healthcare outcomes.",
    },
    {
      id: 3,
      image: "/33.png",
      title: "OBSTETRICS SERVICE",
      text: "Expert Obstetrics Service: Dedicated care for a safe and healthy pregnancy.",
    },
    {
      id: 4,
      image: "/44.png",
      title: "SURGERY",
      text: "Advanced Surgical Solutions: Skilled expertise for successful procedures and faster recovery.",
    },
  ];

  const reviewCards = [
    { id: 1, author: "A. A. Aliu", stars: 5, review: "The multiuniqueness of staff. All your staff work effortlessly and synchronously to make me comfortable while I was at your facility." },
    { id: 2, author: "Igbokwe", stars: 4.5, review: "Customer service is superb. Always someone present to answer the phone in well detailed and comforting manner." },
    { id: 3, author: "Agunloye Ayodele", stars: 4, review: "The staffs are well mannered, aslo the welcome is friendly. Also, I like their approach to emergency." },
  ];


  return (
    <main>
      <Head>
            <title>Green acres hospital - Homepage</title>
        </Head>
      <Navbar />

      {/* Hero section */}
      <div className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-40 z-20"></div>
          <Image
            src="/newImg5.jpeg"
            layout="fill"
            objectFit="cover"
            alt="Background"
          />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start z-10 text-center text-white px-10">
          {/* Title */}
          <h1 className="font-bold text-xl lg:text-5xl mb-6 text-start" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            WELCOME TO A WORLD OF EXCELLENT HEALTHCARE
          </h1>

          {/* Buttons */}
          <div className="flex gap-4">
            <Link href={'tel:08106338579'} className="bg-customBlue text-white px-2 py-2 lg:px-6 lg:py-3 font-semibold shadow-lg border border-white">
              Consult Us
            </Link>
            <Link href={'https://www.facebook.com/profile.php?id=100063471673484'} className="bg-transparent text-white px-2 py-2 lg:px-6 lg:py-3  font-semibold shadow-lg border border-white">
              Learn more
            </Link>
          </div>
        </div>
      </div>

      {/* Intro section */}
      <div className='px-8 pt-16 pb-8 w-full flex flex-col justify-center items-start'>
        <h3 className='mb-10 text-gray-700 font-bold text-lg lg:text-2xl'>Welcome To <span className='text-customBlue'>Green acres hospital</span></h3>
        <h2 className='text-xl lg:text-4xl font-extrabold text-customBlue mb-4'>WE DELIVER PREMIER AND INNOVATIVE HEALTHCARE SERVICE</h2>
        <p className='text-sm lg:text-base'>
          A beacon of professionalism, comfort, and cutting-edge technology. Our esteemed clients receive exceptional medical care in a conducive environment. With a focus on personalized treatments and the latest advancements, our dedicated team ensures your well-being and satisfaction. Experience the difference at Green Acres Hospital, where your health is our top priority.
        </p>
      </div>

      {/* Attributes section */}
      <div className="flex flex-col lg:flex-row justify-center text-white p-2 lg:p-6">
        {attrImg.map((imageUrl, index) => (
          <div key={index} className="flex-1 m-4">
            <div
              className="bg-cover bg-center h-44 lg:h-60 flex items-end relative"
              style={{ backgroundImage: `url(${imageUrl})` }}
            >
              <div className="bg-black bg-opacity-50 px-2 py-10 absolute bottom-4 left-4 right-4">
                <div className='relative'>
                  <div className="flex flex-col items-center space-x-2">
                    <p className='absolute right-4 top-[-68px] bg-blue-500 text-white p-4 rounded-full'>{dataAttribute[index].icon}</p>
                    <p className="text-white text-xl lg:text-2xl font-medium mb-4">{dataAttribute[index].text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Who we are */}
      <div className="flex flex-col-reverse md:flex-row items-start justify-center gap-8 py-10 px-8 bg-customBlue mb-8">
        <div className="w-full md:w-1/2 lg:w-1/2 h-[30vh] lg:h-[40vh] overflow-hidden">
          <Image width={200} height={200} src="/newImg4.jpeg" alt="Green acres hospital" className="w-full h-auto" />
        </div>

        <div className="md:w-1/2 text-white">
          <h3 className="text-xl font-bold mb-4 uppercase">Who we are</h3>
          <p className="mb-4 text-sm lg:text-base">
            We are a team at Green Acres Hospital driven by professionalism, delivering outstanding medical care in a conducive and ambient environment. With cutting-edge technology, we strive to provide the best possible care to our esteemed clients. We consider it a privilege to earn the trust of our numerous clients and are committed to delivering personalized, warm, and friendly professional service that goes the extra mile.
          </p>
          <Link href={'tel:08106338579'} className="bg-customBlue border border-white text-white px-4 py-2 font-semibold shadow-lg mt-8">
            Reach us
          </Link>
        </div>
      </div>

      {/* Our services */}
      <div className='px-8 py-4 w-full'>
        <h2 className='text-xl lg:text-4xl font-extrabold text-customBlue mb-4 text-start'>OUR SERVICES</h2>
        <p className='mb-10 text-start text-sm lg:text-base'>
          At Green Acres Hospital, we take pride in delivering exceptional services to our patients. From check-in to check-out, our dedicated team is committed to providing you with the best experience during every visit to our facility.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {/* Map through cardsData to render cards */}
          {cardsData.map((card) => (
            <div key={card.id} className="border p-4 rounded-lg flex justify-start items-start space-x-2">
              {/* Image */}
              <div className='w-[20%]'>
                <div className="bg-customBlue rounded-full p-2 w-[fit-content]">
                  <Image width={100} height={100} src={card.image} alt="Card Image" className="w-10 h-10 rounded-full" />
                </div>
              </div>
              {/* Content */}
              <div className='w-[80%]'>
                <h3 className="text-base lg:text-xl font-bold mb-2">{card.title}</h3>
                <p className='text-sm lg:text-base'>{card.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='w-full flex justify-end mt-6'>
          <Link href='/services' className='text-gray-900'>View all &rarr;</Link>
        </div>
      </div>

      {/* Make appointment */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-8 px-8 py-10 bg-customBlue">
        {/* Left Section with Title and Text */}
        <div className="md:w-1/2">
          <h3 className="text-xl lg:text-4xl text-white font-extrabold mb-10">BOOK APPOINTMENT</h3>
          <p className="text-white text-sm lg:text-base">
            Are you new to Green Acres Hospital and looking for a doctor? Have you been to Green Acres Hospital but need to see a new specialist or primary care doctor? If yes, submit the form below to get started. If you are already a patient with us and would like to schedule an appointment with a doctor you have already seen, please contact your doctor’s office directly.
          </p>
        </div>

        {/* Right Section with Form */}
        <div className="w-full md:w-1/2 lg:w-1/2">
          <form 
            className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
            target="_blank"
            action="https://formsubmit.co/greenacreshospital@gmail.com" method="POST"
          >
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
      </div>

      {/* Hmo accredited */}
      <div className="flex flex-col lg:flex-row justify-center text-white px-8 py-10 mb-8">
        <div className="flex-1 m-4 relative flex justify-center items-center">
          <div className="rounded-full overflow-hidden w-72 h-72 bg-blue-500 z-40"> {/* Adjust width and height here */}
            <Image src="/newImg3.jpeg" alt="Profile" width={280} height={280} className="object-cover h-full w-full" />
          </div>
          <div className="absolute top-0 left-0 lg:left-24 bg-blue-600 w-24 h-24 rounded-full mt-2 ml-2"></div>
          <div className="absolute bottom-0 left-10 bg-customBlue w-8 h-8 rounded-full mt-2 ml-2"></div>
        </div>
        <div className="flex-1 flex flex-col justify-start">
          <div className="bg-blue-500 w-2 h-2 rounded-full mb-2"></div>
          <p className='text-base text-black font-medium mb-2'>Green Acres Hospital</p>
          <h2 className="text-xl lg:text-4xl font-extrabold text-customBlue mb-4 uppercase">We are HMO Accredited</h2>
          <p className="text-sm lg:text-base text-black mb-6">
            At Green Acres Hospital, we proudly announce that we are HMO accredited. Our commitment to quality healthcare extends to our partnerships with leading HMO providers, including Axamansard, Reliance, Total Health Trust, Venus, Hygeia, and Bastion.
          </p>
          <Link href="/hmo" className="text-white bg-customBlue px-4 py-2 w-[fit-content]">View full list</Link>
        </div>
      </div>

      {/* Reviews section */}
      <div className='bg-customBlue py-10 px-8'>
        <h3 className="text-xl lg:text-4xl text-white font-extrabold mb-10">REVIEWS</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewCards.map((card) => (
            <div key={card.id} className="bg-transparent border border-white rounded-lg p-6 shadow-md">
              <h3 className="text-base lg:text-lg font-semibold mb-2 text-white">{card.author}</h3>
              <div className="flex items-center mb-2">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} className={`h-5 w-5 text-yellow-500 ${index < card.stars ? '' : 'text-gray-400'}`} />
                ))}
              </div>
              <p className="text-white text-sm lg:text-base">{card.review}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency section */}
      <div className='w-full px-8 py-10 flex flex-col lg:flex-row justify-center items-center gap-8'>
        <div className='w-full lg:w-1/2 flex flex-col justify-center items-start space-y-4'>
          <h3 className='text-xl lg:text-3xl text-customBlue font-bold'>Emergency Case</h3>
          <p className='text-black text-sm lg:text-base'>
            Our Emergency and general Outpatient Department is staffed 24 hours a day, 365 days a year by experienced physicians and qualified nurses. Our state-of-the-art department and caring staff is prepared to handle a wide range of problems from minor illnesses to life-threatening events. We work toward prompt evaluation, with appropriate and safe treatment, of your varied concerns.
          </p>
        </div>
        <div className='w-full lg:w-1/2'>
          <div className='shadow-lg p-6 flex flex-col justify-center items-start space-y-4'>
            <h3 className='text-red-500 text-xl lg:text-3xl font-bold'>Emergency Hotline</h3>
            <h3 className='text-black text-2xl lg:text-4xl font-extrabold'>08106338579</h3>
            <p className='text-black text-sm lg:text-base'>
              We provide 24/7 customer support. Please feel free to contact us for emergency case.
            </p>
          </div>
        </div>
      </div>

      <Footer />

    </main>
  )
}
